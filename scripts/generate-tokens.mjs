/**
 * Generates the Foundation token layer from the value registry.
 *
 * Source of truth is token/Foundation.json (W3C DTCG shape, one file per Figma
 * collection — TKN-09). Rules live in docs/A-token/foundation.md; values live
 * only in the registry (TKN-03 · FND-12). What is not in the registry does not
 * exist — there is no TBD state.
 *
 * Emits:
 *   src/tokens/foundation.css          — custom properties, kebab-cased
 *   src/tokens/foundation.ts           — typed values, scale order, lookup table
 *   src/tokens/foundation.tokens.json  — mapping table (Figma name ↔ CSS var ↔ TS path)
 *
 * Run: npm run tokens:build
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const REGISTRY = 'token/Foundation.json';

// ------------------------------------------------------------------ helpers

const CATEGORIES = new Set(['Color', 'Typography', 'Layout', 'Shape', 'Effect']);
const MAX_OPTION_SEGMENTS = 1;

const isMeta = (key) => key.startsWith('$');
const isToken = (node) => node && typeof node === 'object' && '$value' in node && '$type' in node;
const dataKeys = (group) => Object.keys(group).filter((k) => !isMeta(k));

const kebab = (s) => String(s).trim().toLowerCase().replace(/\s+/g, '-');
const camel = (s) =>
  String(s)
    .trim()
    .split(/\s+/)
    .map((w, i) => (i === 0 ? w[0].toLowerCase() + w.slice(1) : w[0].toUpperCase() + w.slice(1)))
    .join('');
const pascal = (s) =>
  String(s)
    .trim()
    .split(/\s+/)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join('');
const num = (n) => (Number.isInteger(n) ? String(n) : String(Number(n.toFixed(4))));
const round2 = (n) => Math.round((n + Number.EPSILON) * 100) / 100;

const UNIT_SUFFIX = {
  px: (v) => `${num(v)}px`,
  ms: (v) => `${num(v)}ms`,
  rem: (v) => `${num(v)}rem`,
  '%': (v) => `${num(v)}%`,
  'css-font-weight': (v) => num(v),
};

function readRegistry() {
  return JSON.parse(readFileSync(resolve(root, REGISTRY), 'utf8'));
}

function tokenValue(token) {
  if (token.$type === 'dimension') {
    return { value: token.$value.value, unit: token.$value.unit };
  }
  return { value: token.$value, unit: token.$type === 'fontWeight' ? 'css-font-weight' : null };
}

function codeSegment(segment) {
  return /^\d/.test(segment) ? segment : camel(segment);
}

function codePath(optionPath) {
  return optionPath.map(codeSegment);
}

function optionPathText(path) {
  return path.join('/');
}

function canonicalName(category, setName, optionPath) {
  return `${category}/${setName}/${optionPathText(optionPath)}`;
}

function segmentRank(segment) {
  const composite = segment.match(/^(\d+)-(\d+|i\d+)$/);
  if (composite) {
    const modifier = composite[2].startsWith('i') ? Number(composite[2].slice(1)) : Number(composite[2]);
    return [0, Number(composite[1]), modifier, segment];
  }
  if (/^\d+$/.test(segment)) return [0, Number(segment), segment];
  const inversePercent = segment.match(/^i(\d+)$/);
  if (inversePercent) return [1, Number(inversePercent[1]), segment];
  return [2, segment];
}

function compareSegments(a, b) {
  const ar = segmentRank(a);
  const br = segmentRank(b);
  for (let i = 0; i < Math.max(ar.length, br.length); i += 1) {
    if (ar[i] === br[i]) continue;
    if (ar[i] === undefined) return -1;
    if (br[i] === undefined) return 1;
    return ar[i] < br[i] ? -1 : 1;
  }
  return 0;
}

function compareOptionPath(a, b) {
  for (let i = 0; i < Math.max(a.length, b.length); i += 1) {
    if (a[i] === undefined) return -1;
    if (b[i] === undefined) return 1;
    const bySegment = compareSegments(a[i], b[i]);
    if (bySegment) return bySegment;
  }
  return 0;
}

function detectKind(leaves) {
  if (leaves.some((leaf) => leaf.optionPath.length > 1)) return 'composite';
  if (leaves.some((leaf) => leaf.optionPath[0].includes('-'))) return 'composite';
  if (leaves.every((leaf) => /^\d+$/.test(leaf.optionPath[0]))) return 'scale';
  return 'nominal';
}

function collectLeaves(group, path = []) {
  const leaves = [];
  for (const key of dataKeys(group)) {
    const node = group[key];
    if (isToken(node)) {
      leaves.push({ optionPath: [...path, key], token: node });
      continue;
    }
    if (node && typeof node === 'object') {
      leaves.push(...collectLeaves(node, [...path, key]));
    }
  }
  return leaves;
}

function setNestedValue(target, path, value) {
  let node = target;
  for (let i = 0; i < path.length - 1; i += 1) {
    node[path[i]] ??= {};
    node = node[path[i]];
  }
  node[path[path.length - 1]] = value;
}

function containsAlias(value) {
  if (typeof value === 'string') return /^\{[^}]+\}$/.test(value);
  if (Array.isArray(value)) return value.some(containsAlias);
  if (value && typeof value === 'object') return Object.values(value).some(containsAlias);
  return false;
}

// ------------------------------------------------------------------ collect
// Each leaf carries BOTH names: `optionPath` is the canonical Figma form as it
// appears in the registry (TKN-04), and `codePath` is the transformed form.
// Keeping them together is what makes reverse mapping possible: reverse
// transform is a lookup, never a parse.

function collect(registry) {
  const sets = [];

  for (const [category, groups] of Object.entries(registry)) {
    if (isMeta(category)) continue;
    if (!CATEGORIES.has(category)) throw new Error(`${category}: unknown Foundation Category`);

    for (const setName of dataKeys(groups)) {
      const group = groups[setName];
      const leaves = collectLeaves(group).sort((a, b) => compareOptionPath(a.optionPath, b.optionPath));
      if (!leaves.length) continue;

      let unit = null;
      let dtcgType = null;
      const options = leaves.map((leaf) => {
        if (leaf.optionPath.length > MAX_OPTION_SEGMENTS) {
          throw new Error(`${category}/${setName}: Foundation names must stay in Category/Set/Option form`);
        }
        dtcgType ??= leaf.token.$type;
        if (leaf.token.$type !== dtcgType) {
          throw new Error(`${category}/${setName}: mixed $type (${dtcgType} vs ${leaf.token.$type})`);
        }
        const raw = tokenValue(leaf.token);
        if (raw.unit !== null) {
          if (unit !== null && unit !== raw.unit) {
            throw new Error(`${category}/${setName}: mixed units (${unit} vs ${raw.unit})`);
          }
          unit = raw.unit;
        }
        return {
          optionPath: leaf.optionPath,
          codePath: codePath(leaf.optionPath),
          value: raw.value,
          token: leaf.token,
        };
      });

      sets.push({
        fullName: `${category}/${setName}`,
        category,
        setName,
        unit,
        kind: detectKind(options),
        dtcgType,
        options,
      });
    }
  }
  return sets;
}

// ----------------------------------------------------------- integrity gate
// Not the full FND-L01..L12 lint suite — just the checks that would silently
// produce wrong output if violated. The full linter is a separate task.

function assertIntegrity(sets) {
  const problems = [];
  const setByName = Object.fromEntries(sets.map((set) => [set.fullName, set]));
  const fontSizeSet = setByName['Typography/Font Size'];
  const fontSizeValues = new Map((fontSizeSet?.options ?? []).map((o) => [o.optionPath[0], o.value]));
  const cssNames = new Map();

  for (const { fullName, category, setName, unit, dtcgType, options } of sets) {
    for (const o of options) {
      if (containsAlias(o.token.$value)) {
        problems.push(`${canonicalName(category, setName, o.optionPath)}: Foundation cannot contain aliases`);
      }

      const css = cssProperty(category, setName, o.codePath).toLowerCase();
      if (cssNames.has(css)) {
        problems.push(
          `${canonicalName(category, setName, o.optionPath)}: CSS name collision with ${cssNames.get(css)} (${css})`,
        );
      }
      cssNames.set(css, canonicalName(category, setName, o.optionPath));
    }

    if (fullName === 'Typography/Line Height') {
      const ratios = new Set(['110', '120', '130', '140', '150']);
      for (const o of options) {
        const [fontSize, ratio, extra] = o.optionPath[0].split('-');
        if (extra !== undefined || !fontSize || !ratio) {
          problems.push(`${fullName}/${optionPathText(o.optionPath)}: expected {Font Size}-{Ratio}`);
          continue;
        }
        if (!fontSizeValues.has(fontSize)) problems.push(`${fullName}/${optionPathText(o.optionPath)}: unknown Font Size`);
        if (!ratios.has(ratio)) problems.push(`${fullName}/${optionPathText(o.optionPath)}: unknown ratio ${ratio}`);
        const expected = round2((fontSizeValues.get(fontSize) ?? 0) * (Number(ratio) / 100));
        if (Math.abs(o.value - expected) > 0.001) {
          problems.push(`${fullName}/${optionPathText(o.optionPath)}: ${o.value} != ${expected}`);
        }
      }
    }

    if (fullName === 'Typography/Letter Spacing') {
      const ratios = { i1: -0.01, i3: -0.03 };
      for (const o of options) {
        const [fontSize, ratio, extra] = o.optionPath[0].split('-');
        if (extra !== undefined || !fontSize || !ratio) {
          problems.push(`${fullName}/${optionPathText(o.optionPath)}: expected {Font Size}-{Inverse Ratio}`);
          continue;
        }
        if (!fontSizeValues.has(fontSize)) problems.push(`${fullName}/${optionPathText(o.optionPath)}: unknown Font Size`);
        if (!(ratio in ratios)) problems.push(`${fullName}/${optionPathText(o.optionPath)}: unknown ratio ${ratio}`);
        const expected = round2((fontSizeValues.get(fontSize) ?? 0) * (ratios[ratio] ?? 0));
        if (Math.abs(o.value - expected) > 0.001) {
          problems.push(`${fullName}/${optionPathText(o.optionPath)}: ${o.value} != ${expected}`);
        }
      }
    }

    if (dtcgType === 'dimension' && unit !== 'px') {
      problems.push(`${fullName}: Foundation dimensions currently support px only (${unit})`);
    }
  }

  if (problems.length) {
    throw new Error(`Registry integrity check failed:\n  - ${problems.join('\n  - ')}`);
  }
}

// ---------------------------------------------------------------- rendering

/** CSS custom property: --{Category}-{Set}-{Option}, each segment kebab-cased. */
const cssProperty = (category, setName, optionCodePath) =>
  `--${[category, setName, ...optionCodePath].map((segment) => kebab(segment)).join('-')}`;

function tsPath(category, setName, optionCodePath) {
  const parts = ['foundation', camel(category), camel(setName), ...optionCodePath];
  return parts
    .map((part, index) => {
      if (index === 0) return part;
      return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(part) ? `.${part}` : `['${part}']`;
    })
    .join('');
}

const rendered = (value, unit, dtcgType) => {
  if (dtcgType === 'color') return String(value);
  if (Array.isArray(value)) return value.map((v) => JSON.stringify(v)).join(', ');
  if (typeof value === 'string') return JSON.stringify(value);
  return (UNIT_SUFFIX[unit] ?? num)(value);
};

// --------------------------------------------------------------------- emit

function emitCss(sets) {
  const lines = [
    '/*',
    ' * GENERATED FILE — do not edit by hand.',
    ` * Source: ${REGISTRY}`,
    ' * Regenerate: npm run tokens:build',
    ' *',
    ' * Naming: --{Category}-{Set}-{Option}, each segment kebab-cased.',
    ' * Category is not omitted — it is what keeps the segment split recoverable',
    ' * through the lookup table, even when the CSS name itself contains hyphens.',
    ' */',
    '',
    ':root {',
  ];

  for (const { category, setName, unit, dtcgType, options } of sets) {
    lines.push(`  /* ${category}/${setName}${unit ? ` — ${unit}` : ''} */`);
    for (const o of options) {
      lines.push(`  ${cssProperty(category, setName, o.codePath)}: ${rendered(o.value, unit, dtcgType)};`);
    }
    lines.push('');
  }
  lines[lines.length - 1] = '}';
  return lines.join('\n') + '\n';
}

function emitTs(sets) {
  const tree = {};
  const units = {};
  const order = {};
  const lookup = {};

  for (const { category, setName, unit, options } of sets) {
    const c = camel(category);
    const s = camel(setName);
    tree[c] ??= {};
    units[c] ??= {};
    order[c] ??= {};
    tree[c][s] = {};
    units[c][s] = unit;
    order[c][s] = options.map((o) => optionPathText(o.codePath));

    for (const o of options) {
      setNestedValue(tree[c][s], o.codePath, o.value);
      const css = cssProperty(category, setName, o.codePath);
      lookup[css] = {
        canonical: canonicalName(category, setName, o.optionPath),
        ts: tsPath(category, setName, o.codePath),
      };
    }
  }

  const typeLines = [];
  const seenTypeNames = new Set();
  for (const { category, setName } of sets) {
    const name = `${pascal(setName)}TokenPath`;
    if (seenTypeNames.has(name)) {
      throw new Error(`Type name collision: ${name} (from ${category}/${setName})`);
    }
    seenTypeNames.add(name);
    typeLines.push(`export type ${name} = (typeof foundationOrder)['${camel(category)}']['${camel(setName)}'][number];`);
  }

  return [
    '/**',
    ' * GENERATED FILE — do not edit by hand.',
    ` * Source: ${REGISTRY}`,
    ' * Regenerate: npm run tokens:build',
    ' *',
    ' * Shape follows TKN-04: segment boundaries become object nesting, words',
    ' * inside a segment become camelCase, numeric options stay bracket-accessed.',
    " *   Typography/Line Height/24-150 -> foundation.typography.lineHeight['24-150']",
    ' */',
    '',
    '/** Raw values. Units are carried separately in `foundationUnits`. */',
    `export const foundation = ${JSON.stringify(tree, null, 2)} as const;`,
    '',
    '/** Unit for each Set. `null` = unitless (colors, ratios, nominal values). */',
    `export const foundationUnits = ${JSON.stringify(units, null, 2)} as const;`,
    '',
    '/** Leaf token options in scale order. */',
    `export const foundationOrder = ${JSON.stringify(order, null, 2)} as const;`,
    '',
    '/**',
    ' * Reverse mapping, CSS custom property -> canonical Figma name + TS path.',
    ' *',
    ' * The reverse transform is a lookup, never a parse: a hyphen in',
    ' * `--typography-line-height-24-150` could have come from a segment boundary,',
    ' * from the space inside "Line Height", or from a composite Option. Look it up here instead of taking',
    ' * the name apart.',
    ' */',
    `export const foundationLookup: Readonly<Record<string, { canonical: string; ts: string }>> = ${JSON.stringify(
      lookup,
      null,
      2,
    )};`,
    '',
    'export type Foundation = typeof foundation;',
    'export type FoundationCategory = keyof Foundation;',
    '',
    ...typeLines,
    '',
  ].join('\n');
}

/** Mapping table — Figma name ↔ CSS custom property ↔ TS path, DTCG-shaped. */
function emitTokensJson(sets) {
  const doc = {
    $description:
      'Foundation token mapping table for the AI Readable Design System (TGDS). ' +
      `Generated from ${REGISTRY} — do not edit by hand. Values are authoritative ` +
      'in the registry (TKN-03); this file adds the code-name mapping.',
    $extensions: {
      'com.tgds': {
        source: REGISTRY,
        cssPropertyGrammar: '--{Category}-{Set}-{Option}, kebab-cased',
        reverseTransform: 'lookup only; parsing the code name is prohibited',
      },
    },
  };

  for (const { category, setName, unit, kind, dtcgType, options } of sets) {
    doc[category] ??= {};
    doc[category][setName] ??= {};

    for (const o of options) {
      const css = cssProperty(category, setName, o.codePath);
      setNestedValue(doc[category][setName], o.optionPath, {
        $type: dtcgType,
        $value: o.token.$value,
        $extensions: {
          // What Figma would carry on the variable itself once these exist there.
          'com.figma': {
            canonicalName: canonicalName(category, setName, o.optionPath),
            codeSyntax: { WEB: `var(${css})` },
          },
          'com.tgds': {
            cssCustomProperty: css,
            tsPath: tsPath(category, setName, o.codePath),
            setKind: kind,
            rawValue: o.value,
            unit,
          },
        },
      });
    }
  }
  return JSON.stringify(doc, null, 2) + '\n';
}

// ---------------------------------------------------------------------- main

const registry = readRegistry();
const sets = collect(registry);
assertIntegrity(sets);

for (const s of sets) {
  // `number`-typed Sets (Opacity) are unitless numeric scales by declaration;
  // any other numeric Set without a unit would silently emit a bare number into CSS.
  const numeric = s.options.some((o) => typeof o.value === 'number');
  if (numeric && !s.unit && s.dtcgType !== 'number' && s.dtcgType !== 'fontWeight') {
    throw new Error(
      `${s.fullName}: numeric values but no unit could be resolved. Emitting a bare ` +
        `number is unsafe — CSS would read it as a unitless ratio. Declare the unit ` +
        `on the $value objects in ${REGISTRY}.`,
    );
  }
}

writeFileSync(resolve(root, 'src/tokens/foundation.css'), emitCss(sets));
writeFileSync(resolve(root, 'src/tokens/foundation.ts'), emitTs(sets));
writeFileSync(resolve(root, 'src/tokens/foundation.tokens.json'), emitTokensJson(sets));

const total = sets.reduce((n, s) => n + s.options.length, 0);
console.log(`Generated ${total} tokens across ${sets.length} sets from ${REGISTRY}`);
for (const s of sets) console.log(`  ${s.category}/${s.setName}: ${s.options.length}`);
