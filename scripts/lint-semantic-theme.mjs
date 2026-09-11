/**
 * Lint for token/Semantic-theme.json against docs/A-token/semantic.md §2.2.
 *
 * Executes SEM-L01 · L02 · L03 · L07 · L08 · L09 · L10 · L11 · L12 and the
 * mode contract of TKN-11. Rules live in the md; this file only checks them.
 * Contrast is WCAG 2.x relative-luminance ratio; a foreground carrying an
 * opacity reference (SEM-11) is composited onto the surface before measuring.
 *
 * Run: npm run lint:semantic   (exit 1 on any violation)
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => JSON.parse(readFileSync(resolve(root, p), 'utf8'));
const foundation = read('token/Foundation.json');
const theme = read('token/Semantic-theme.json');

// ----------------------------------------------------------- closed sets (§2.2)
const BASE_ROLES = ['Neutral', 'Inverse', 'Accent', 'Success', 'Warning', 'Danger', 'Info'];
const CHROMATIC = ['Accent', 'Success', 'Warning', 'Danger', 'Info'];
const ON_ROLES = BASE_ROLES.map((r) => `On ${r}`);
const EMPHASIS = ['Subtlest', 'Subtle', 'Default', 'Strong', 'Strongest'];
const ROLES_BY_TARGET = {
  Background: ['Neutral', 'Inverse'],
  Fill: BASE_ROLES,
  Text: [...BASE_ROLES, ...ON_ROLES],
  Icon: [...BASE_ROLES, ...ON_ROLES],
  Border: [...BASE_ROLES, ...ON_ROLES],
  Overlay: ['Neutral', 'Inverse'],
  Opacity: ['Neutral', 'Inverse'],
};
const TINT = ['Subtlest', 'Subtle'];
const SOLID = ['Default', 'Strong', 'Strongest'];
const TEXT_MIN = 4.5;
const BORDER_MIN = 3;

const modes = theme.$extensions?.tgds?.modes ?? [];
const roleMeta = theme.$extensions?.tgds?.roles ?? {};
const problems = [];
const fail = (rule, msg) => problems.push(`${rule}  ${msg}`);

// ----------------------------------------------------------------- flatten
const isToken = (o) => o && typeof o === 'object' && '$value' in o;
function flatten(obj, path = [], out = {}) {
  for (const [k, v] of Object.entries(obj)) {
    if (k.startsWith('$')) continue;
    if (isToken(v)) out[[...path, k].join('/')] = v;
    else if (v && typeof v === 'object') flatten(v, [...path, k], out);
  }
  return out;
}
const fnd = flatten(foundation);
const sem = flatten(theme);

const aliasRe = /^\{([^}]+)\}$/;
const resolveFnd = (alias) => {
  const m = typeof alias === 'string' && alias.match(aliasRe);
  if (!m) return undefined;
  return fnd[m[1].split('.').join('/')];
};
const stepOf = (alias) => alias.match(aliasRe)?.[1].split('.').pop();
const setOf = (alias) => alias.match(aliasRe)?.[1].split('.').slice(0, 2).join('/');

// ----------------------------------------------------------------- colour math
const hexToRgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
const lin = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const luminance = ([r, g, b]) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
const contrast = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};
const composite = (fg, alpha, bg) => fg.map((c, i) => alpha * c + (1 - alpha) * bg[i]);

/** Resolved sRGB (0..1) of a semantic colour token in one mode, alpha applied over `surface`. */
function colourOf(name, mode, surface) {
  const t = sem[name];
  const v = t.$value[mode];
  const rgb = hexToRgb(resolveFnd(v).$value);
  const op = t.$extensions?.tgds?.opacity?.[mode];
  if (op === undefined) return rgb;
  return composite(rgb, resolveFnd(op).$value, surface);
}

// ------------------------------------------------------------------ L02/L03/L11
for (const [name, t] of Object.entries(sem)) {
  const [target, role, emphasis, extra] = name.split('/');
  if (extra !== undefined || !emphasis) fail('SEM-02', `${name}: 3세그먼트가 아니다`);
  if (!ROLES_BY_TARGET[target]) fail('SEM-L02', `${name}: 선언되지 않은 Target`);
  else if (!ROLES_BY_TARGET[target].includes(role)) fail('SEM-L02', `${name}: ${target}에 선언되지 않은 Role`);
  if (!EMPHASIS.includes(emphasis)) fail('SEM-L02', `${name}: 선언되지 않은 Emphasis`);

  const values = t.$value;
  if (modes.length > 1) {
    if (!values || typeof values !== 'object') fail('TKN-11', `${name}: 모드 키 객체가 아니다`);
    else {
      for (const m of modes) if (!(m in values)) fail('SEM-L03', `${name}: ${m} 모드 값 없음`);
      for (const m of Object.keys(values)) if (!modes.includes(m)) fail('SEM-L03', `${name}: 선언되지 않은 모드 ${m}`);
    }
  }
  for (const [m, v] of Object.entries(values ?? {})) {
    if (!aliasRe.test(String(v))) fail('SEM-L11', `${name}[${m}]: 원시값 기입 (alias만 허용)`);
    else if (!resolveFnd(v)) fail('SEM-L01', `${name}[${m}]: 참조 대상 없음 ${v}`);
    else if (t.$type === 'color' && !String(v).startsWith('{Color.')) fail('SEM-L01', `${name}[${m}]: color 토큰이 Color 외 Set 참조`);
    else if (t.$type === 'number' && !String(v).startsWith('{Effect.Opacity.')) fail('SEM-L01', `${name}[${m}]: Opacity 토큰은 Effect/Opacity만 참조`);
  }
  const op = t.$extensions?.tgds?.opacity;
  if (op !== undefined) {
    if (modes.length > 1 && (typeof op !== 'object')) fail('TKN-11', `${name}: opacity가 모드 키 객체가 아니다`);
    for (const [m, v] of Object.entries(op)) {
      if (!String(v).startsWith('{Effect.Opacity.') || !resolveFnd(v)) fail('SEM-L11', `${name}[${m}]: opacity 참조가 Effect/Opacity 스텝이 아니다`);
    }
  }
}

// ------------------------------------------------------------------ L08 / L10
for (const [name, t] of Object.entries(sem)) {
  const [target, role] = name.split('/');
  for (const [m, v] of Object.entries(t.$value ?? {})) {
    if (!aliasRe.test(String(v))) continue;
    if (role.startsWith('On ') && !['{Color.Gray.0000}', '{Color.Gray.1300}'].includes(v))
      fail('SEM-L08', `${name}[${m}]: On Role은 Gray/0000·1300만 참조 (${v})`);
    if (CHROMATIC.includes(role) && t.$type === 'color') {
      const set = setOf(v), step = stepOf(v);
      if (set === 'Color/Gray') fail('SEM-T03', `${name}[${m}]: 유채 Role이 Gray 참조`);
      if (['1200', '1300'].includes(step)) fail('SEM-L10', `${name}[${m}]: 유채 Role이 ${step} 참조`);
      const hue = roleMeta[role]?.hue;
      if (hue && set !== `Color/${hue}`) fail('SEM-T03', `${name}[${m}]: ${role}은 Color/${hue}에 매핑돼야 한다 (${v})`);
    }
    if ((role === 'Neutral' || role === 'Inverse') && t.$type === 'color' && setOf(v) !== 'Color/Gray')
      fail('SEM-T03', `${name}[${m}]: ${role}은 Gray에 매핑돼야 한다 (${v})`);
  }
}

// ------------------------------------------------------------------ L09 mirror
if (modes.length === 2) {
  const [A, B] = modes;
  const mirrorPairs = [['Neutral', 'Inverse'], ['On Neutral', 'On Inverse']];
  for (const [n, i] of mirrorPairs) {
    const nNames = Object.keys(sem).filter((k) => k.split('/')[1] === n);
    const iNames = Object.keys(sem).filter((k) => k.split('/')[1] === i);
    for (const nn of nNames) {
      const ii = nn.replace(`/${n}/`, `/${i}/`);
      if (!sem[ii]) { fail('SEM-L09', `${nn}에 대응하는 ${ii} 없음`); continue; }
      const same = (x, y) => JSON.stringify(x) === JSON.stringify(y);
      if (!same(sem[nn].$value[A], sem[ii].$value[B]) || !same(sem[nn].$value[B], sem[ii].$value[A]))
        fail('SEM-L09', `${ii}는 ${nn}의 모드 반전이어야 한다`);
      const on = sem[nn].$extensions?.tgds?.opacity, oi = sem[ii].$extensions?.tgds?.opacity;
      if (!same(on?.[A], oi?.[B]) || !same(on?.[B], oi?.[A])) fail('SEM-L09', `${ii}의 opacity는 ${nn}의 모드 반전이어야 한다`);
    }
    for (const ii of iNames) if (!sem[ii.replace(`/${i}/`, `/${n}/`)]) fail('SEM-L09', `${ii}에 대응하는 ${n} 토큰 없음`);
  }
}

// ------------------------------------------------------------------ L07 pairs (SEM-T05)
const names = Object.keys(sem);
const of = (target, role) => names.filter((k) => k.startsWith(`${target}/${role}/`));
const fgTargets = ['Text', 'Icon', 'Border'];
const surfaces = []; // { name, fgRoles }
for (const bg of of('Background', 'Neutral')) surfaces.push({ name: bg, fgRoles: ['Neutral', ...CHROMATIC] });
for (const bg of of('Background', 'Inverse')) surfaces.push({ name: bg, fgRoles: ['Inverse'] });
for (const role of BASE_ROLES) {
  for (const f of of('Fill', role)) {
    const e = f.split('/')[2];
    if (TINT.includes(e)) surfaces.push({ name: f, fgRoles: role === 'Inverse' ? ['Inverse'] : [...new Set([role, 'Neutral'])] });
    else surfaces.push({ name: f, fgRoles: [`On ${role}`] });
  }
}
const contrastLog = [];
for (const s of surfaces) {
  for (const mode of modes) {
    const bgRgb = colourOf(s.name, mode, [1, 1, 1]);
    for (const fgRole of s.fgRoles) for (const ft of fgTargets) for (const fg of of(ft, fgRole)) {
      const e = fg.split('/')[2];
      const decorative = ft === 'Border' && TINT.includes(e);
      const min = ft === 'Border' ? BORDER_MIN : TEXT_MIN;
      const ratio = contrast(colourOf(fg, mode, bgRgb), bgRgb);
      contrastLog.push({ surface: s.name, fg, mode, ratio: +ratio.toFixed(2), min: decorative ? null : min });
      if (!decorative && ratio < min) fail('SEM-L07', `[${mode}] ${fg} on ${s.name} = ${ratio.toFixed(2)} < ${min}`);
    }
  }
}

// ------------------------------------------------------------------ L12 anchor
for (const role of CHROMATIC) {
  const meta = roleMeta[role];
  const fillName = `Fill/${role}/Default`, onName = `Text/On ${role}/Default`;
  if (!sem[fillName] || !sem[onName] || !meta?.core) continue;
  for (const mode of modes) {
    const bg = colourOf(fillName, mode, [1, 1, 1]);
    const ratio = contrast(colourOf(onName, mode, bg), bg);
    if (ratio < TEXT_MIN) { fail('SEM-L12', `[${mode}] ${onName} on ${fillName} = ${ratio.toFixed(2)}`); continue; }
    const step = Number(stepOf(sem[fillName].$value[mode]));
    const core = Number(meta.core);
    if (step === core) continue;
    const towardCore = String(step + (core < step ? -100 : 100)).padStart(4, '0');
    const cand = fnd[`Color/${meta.hue}/${towardCore}`];
    if (!cand) continue;
    const candRgb = hexToRgb(cand.$value);
    const onRgb = colourOf(onName, mode, candRgb);
    if (contrast(onRgb, candRgb) >= TEXT_MIN)
      fail('SEM-L12', `[${mode}] ${fillName}=${step}: 코어(${core}) 쪽 ${towardCore}도 ${contrast(onRgb, candRgb).toFixed(2)}로 통과 — 코어에 더 가까운 스텝이 있다`);
  }
}

// ------------------------------------------------------------------ report
const count = Object.keys(sem).length;
if (process.argv.includes('--report')) {
  for (const c of contrastLog) console.log(`${c.mode.padEnd(5)} ${c.fg.padEnd(28)} on ${c.surface.padEnd(26)} ${String(c.ratio).padStart(6)}${c.min === null ? '  (장식, 미검사)' : ''}`);
}
if (problems.length) {
  console.error(`Semantic theme lint: ${problems.length} violation(s) in ${count} tokens\n  - ${problems.join('\n  - ')}`);
  process.exit(1);
}
console.log(`Semantic theme lint: ${count} tokens, ${surfaces.length} surfaces × ${modes.length} modes, ${contrastLog.length} contrast pairs — OK`);
