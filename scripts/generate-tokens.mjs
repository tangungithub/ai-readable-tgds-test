/**
 * Generates the Foundation token layer from the specification.
 *
 * Source of truth is the JSON block in docs/A-token/token-system.md section 1.6
 * ("아래 JSON은 본 장의 단일 진실 원천이다"). The schema is read straight out of
 * the document rather than copied into a second file, so the two cannot drift.
 *
 * Emits:
 *   src/tokens/foundation.css          — custom properties (FND-13 naming)
 *   src/tokens/foundation.ts           — typed values, scale order, lookup table
 *   src/tokens/foundation.tokens.json  — DTCG mapping table (FND-11)
 *
 * Run: npm run tokens:build
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SPEC = 'docs/A-token/token-system.md';

// ------------------------------------------------------------------ helpers

const pad = (step) => String(step).padStart(4, '0');
const kebab = (s) => s.trim().toLowerCase().replace(/\s+/g, '-');
const camel = (s) =>
  s
    .trim()
    .split(/\s+/)
    .map((w, i) => (i === 0 ? w[0].toLowerCase() + w.slice(1) : w[0].toUpperCase() + w.slice(1)))
    .join('');
const num = (n) => (Number.isInteger(n) ? String(n) : String(Number(n.toFixed(4))));

const UNIT_SUFFIX = {
  px: (v) => `${num(v)}px`,
  ms: (v) => `${num(v)}ms`,
  '%': (v) => `${num(v)}%`,
  'css-font-weight': (v) => num(v),
};

/** DTCG $type per Set. */
const DTCG_TYPE = {
  'Typography/Font Size': 'dimension',
  'Typography/Line Height': 'dimension',
  'Typography/Font Weight': 'fontWeight',
  'Typography/Font Family': 'fontFamily',
  'Layout/Space': 'dimension',
  'Layout/Size': 'dimension',
  'Shape/Radius': 'dimension',
  'Shape/Stroke': 'dimension',
  'Effect/Opacity': 'number',
  'Motion/Duration': 'duration',
};

// -------------------------------------------------------------- read schema

function readSchema() {
  const md = readFileSync(resolve(root, SPEC), 'utf8');
  const blocks = [...md.matchAll(/```json\n([\s\S]*?)\n```/g)];
  if (blocks.length !== 1) {
    throw new Error(
      `Expected exactly 1 json block in ${SPEC}, found ${blocks.length}. ` +
        `The generator keys off section 1.6 being the only one.`,
    );
  }
  return JSON.parse(blocks[0][1]);
}

function validFontSizeSteps(fontSizeSet) {
  const merged = { ...fontSizeSet.steps, ...(fontSizeSet.exceptions?.registered ?? {}) };
  return Object.entries(merged)
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .map(([step, px]) => [pad(step), px]);
}

// ----------------------------------------------------------- integrity gate
// Not the full FND-L01..L09 lint suite — just the checks that would silently
// produce wrong output if violated. The full linter is a separate task.

function assertIntegrity(schema) {
  const problems = [];

  for (const [name, set] of Object.entries(schema.sets)) {
    // FND-L09: a hyphen in a nominal option lets FND-12's longest match swallow
    // a Set boundary and misparse without erroring.
    if (set.kind === 'nominal') {
      for (const option of Object.keys(set.options)) {
        if (kebab(option).includes('-')) {
          problems.push(`${name}: nominal option "${option}" is not a single word (FND-L09)`);
        }
      }
    }

    if (set.kind !== 'ordinal') continue;
    const registered = set.exceptions?.registered ?? {};

    // FND-06: exception steps replace the tens digit with 5
    for (const step of Object.keys(registered)) {
      if (pad(step).at(-2) !== '5') {
        problems.push(`${name}: exception step ${pad(step)} does not use tens digit 5 (FND-06)`);
      }
    }
    // FND-07: no exceptions at all where the Set forbids them
    if (set.exceptions?.allowed === false && Object.keys(registered).length > 0) {
      problems.push(`${name}: exceptions.allowed is false but registered is non-empty (FND-07)`);
    }

    // FND-L06: values increase with step, exceptions included
    const values = Object.entries({ ...set.steps, ...registered })
      .sort((a, b) => Number(a[0]) - Number(b[0]))
      .map(([, v]) => v);
    if (values.every((v) => typeof v === 'number')) {
      for (let i = 1; i < values.length; i += 1) {
        if (values[i] <= values[i - 1]) {
          problems.push(`${name}: not monotonic at index ${i} (${values[i - 1]} -> ${values[i]}) (FND-L06)`);
        }
      }
    }
  }

  if (problems.length) {
    throw new Error(`Schema integrity check failed:\n  - ${problems.join('\n  - ')}`);
  }
}

// ------------------------------------------------------------------ collect
// Each option carries BOTH names: `canonical` is the Figma form that appears in
// the spec, `code` is the transformed form. Keeping them together is what makes
// the mapping table possible (FND-11).

function collect(schema) {
  const sets = [];
  const skipped = [];

  for (const [fullName, set] of Object.entries(schema.sets)) {
    if (set.status === 'TBD' || !fullName.includes('/')) {
      skipped.push(`${fullName} (status: TBD)`);
      continue;
    }
    const [category, setName] = fullName.split('/');
    let options = null;
    let inheritedUnit = null;

    if (set.kind === 'ordinal') {
      const merged = { ...set.steps, ...(set.exceptions?.registered ?? {}) };
      const registered = new Set(Object.keys(set.exceptions?.registered ?? {}).map(pad));
      const entries = Object.entries(merged).sort((a, b) => Number(a[0]) - Number(b[0]));
      if (entries.some(([, v]) => typeof v !== 'number')) {
        const n = entries.filter(([, v]) => typeof v !== 'number').length;
        skipped.push(`${fullName} (${n}/${entries.length} steps are TBD)`);
        continue;
      }
      options = entries.map(([step, value]) => ({
        canonical: pad(step),
        code: pad(step),
        value,
        isException: registered.has(pad(step)),
      }));
    } else if (set.kind === 'value-anchored') {
      options = set.options.map((v) => ({ canonical: String(v), code: String(v), value: v, isException: false }));
    } else if (set.kind === 'nominal') {
      // FND-08: words inside a segment become camelCase, so `Sans` -> `sans`.
      options = Object.entries(set.options).map(([name, value]) => ({
        canonical: name,
        code: camel(name),
        value,
        isException: false,
      }));
    } else if (set.kind === 'composite') {
      const lhNumbers = [...set.pattern.matchAll(/(\d{3})(?=\||\))/g)].map((m) => Number(m[1]));
      options = [];
      for (const [step, px] of validFontSizeSteps(schema.sets['Typography/Font Size'])) {
        for (const lh of lhNumbers) {
          const key = `${step}-${lh}`;
          options.push({ canonical: key, code: key, value: (px * lh) / 100, isException: false });
        }
      }
      // The schema declares no `unit` on this Set. Its value is computed FROM
      // Font Size, so the unit is inherited rather than assumed — if Font Size
      // ever moves to rem, Line Height follows automatically.
      inheritedUnit = schema.sets['Typography/Font Size'].unit;
    }

    if (options) {
      sets.push({ fullName, category, setName, unit: set.unit ?? inheritedUnit, kind: set.kind, options });
    }
  }
  return { sets, skipped };
}

/** FND-13: --{Category}-{Set}-{Option}, each segment kebab-cased. */
const cssProperty = (category, setName, optionCode) =>
  `--${kebab(category)}-${kebab(setName)}-${kebab(String(optionCode))}`;

/**
 * FND-08: segment boundaries become nesting; bracket notation is specified for
 * NUMERIC options only, so a nominal option is reached with a plain dot.
 */
const tsPath = (category, setName, optionCode) => {
  const base = `foundation.${camel(category)}.${camel(setName)}`;
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(String(optionCode))
    ? `${base}.${optionCode}`
    : `${base}['${optionCode}']`;
};

const rendered = (value, unit) =>
  typeof value === 'string' ? JSON.stringify(value) : (UNIT_SUFFIX[unit] ?? num)(value);

// --------------------------------------------------------------------- emit

function emitCss(sets, skipped) {
  const lines = [
    '/*',
    ' * GENERATED FILE — do not edit by hand.',
    ` * Source: ${SPEC} section 1.6`,
    ' * Regenerate: npm run tokens:build',
    ' *',
    ' * Naming per FND-13: --{Category}-{Set}-{Option}, each segment kebab-cased.',
    ' * Category is not omitted — it is what keeps the segment split unambiguous',
    ' * when the name has to be read back without the mapping table (FND-12).',
    ...(skipped.length
      ? [' *', ' * Not emitted (unresolved in the spec):', ...skipped.map((s) => ` *   - ${s}`)]
      : []),
    ' */',
    '',
    ':root {',
  ];

  for (const { category, setName, unit, options } of sets) {
    lines.push(`  /* ${category}/${setName}${unit ? ` — ${unit}` : ''} */`);
    for (const o of options) {
      lines.push(`  ${cssProperty(category, setName, o.code)}: ${rendered(o.value, unit)};`);
    }
    lines.push('');
  }
  lines[lines.length - 1] = '}';
  return lines.join('\n') + '\n';
}

function emitTs(sets, skipped) {
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
    tree[c][s] = Object.fromEntries(options.map((o) => [o.code, o.value]));
    units[c][s] = unit;
    order[c][s] = options.map((o) => o.code);
    for (const o of options) {
      lookup[cssProperty(category, setName, o.code)] = {
        canonical: `${category}/${setName}/${o.canonical}`,
        ts: tsPath(category, setName, o.code),
      };
    }
  }

  return [
    '/**',
    ' * GENERATED FILE — do not edit by hand.',
    ` * Source: ${SPEC} section 1.6`,
    ' * Regenerate: npm run tokens:build',
    ' *',
    ' * Shape follows FND-08: segment boundaries become object nesting, words',
    ' * inside a segment become camelCase, numeric options stay bracket-accessed.',
    " *   Typography/Font Size/0400  ->  foundation.typography.fontSize['0400']",
    ...(skipped.length
      ? [' *', ' * Not emitted (unresolved in the spec):', ...skipped.map((s) => ` *   - ${s}`)]
      : []),
    ' */',
    '',
    '/** Raw values. Units are carried separately in `foundationUnits`. */',
    `export const foundation = ${JSON.stringify(tree, null, 2)} as const;`,
    '',
    '/** Unit for each Set, as declared in the schema. `null` = unitless (nominal). */',
    `export const foundationUnits = ${JSON.stringify(units, null, 2)} as const;`,
    '',
    '/**',
    ' * Option keys in scale order.',
    ' *',
    ' * `foundation` is for lookup only — do NOT iterate it. JavaScript reorders',
    ' * integer-like keys ahead of the rest, so Object.keys() on an ordinal Set',
    ' * yields 1000, 1100, ... before 0050, 0100 and the scale reads out scrambled.',
    ' * FND-05 makes step order meaningful, so iterate through this array instead.',
    ' */',
    `export const foundationOrder = ${JSON.stringify(order, null, 2)} as const;`,
    '',
    '/**',
    ' * Reverse mapping, CSS custom property -> canonical Figma name + TS path.',
    ' *',
    ' * FND-11 forbids recovering the canonical name by parsing the code name:',
    ' * a hyphen in `--typography-font-size-0400` could have come from a segment',
    ' * boundary or from the space inside "Font Size", and the string alone cannot',
    ' * tell you which. Look it up here instead of taking the name apart.',
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
    "export type FontSizeStep = keyof Foundation['typography']['fontSize'];",
    "export type LineHeightOption = keyof Foundation['typography']['lineHeight'];",
    "export type SpaceStep = keyof Foundation['layout']['space'];",
    "export type SizeStep = keyof Foundation['layout']['size'];",
    "export type RadiusStep = keyof Foundation['shape']['radius'];",
    "export type StrokeStep = keyof Foundation['shape']['stroke'];",
    "export type OpacityStep = keyof Foundation['effect']['opacity'];",
    "export type DurationStep = keyof Foundation['motion']['duration'];",
    '',
  ].join('\n');
}

/** DTCG-shaped mapping table — the artifact FND-11 designates as the single source. */
function emitTokensJson(sets, skipped) {
  const doc = {
    $description:
      'Foundation tokens for the AI Readable Design System (TGDS). ' +
      `Generated from ${SPEC} section 1.6 — do not edit by hand.`,
    $extensions: {
      'com.tgds': {
        specVersion: 'see the document header of ' + SPEC,
        cssPropertyGrammar: '--{Category}-{Set}-{Option}, kebab-cased (FND-13)',
        reverseTransform: 'lookup only; parsing the code name is prohibited (FND-11)',
        notEmitted: skipped,
      },
    },
  };

  for (const { fullName, category, setName, unit, kind, options } of sets) {
    doc[category] ??= {};
    const group = {};
    for (const o of options) {
      const css = cssProperty(category, setName, o.code);
      group[o.canonical] = {
        $type: DTCG_TYPE[fullName] ?? 'other',
        $value: typeof o.value === 'string' ? o.value : (UNIT_SUFFIX[unit] ?? num)(o.value),
        $extensions: {
          // What Figma would carry on the variable itself once these exist there.
          'com.figma': {
            canonicalName: `${category}/${setName}/${o.canonical}`,
            codeSyntax: { WEB: `var(${css})` },
          },
          'com.tgds': {
            cssCustomProperty: css,
            tsPath: tsPath(category, setName, o.code),
            setKind: kind,
            rawValue: o.value,
            unit,
            isRegisteredException: o.isException,
          },
        },
      };
    }
    doc[category][setName] = group;
  }
  return JSON.stringify(doc, null, 2) + '\n';
}

// ---------------------------------------------------------------------- main

const schema = readSchema();
assertIntegrity(schema);
const { sets, skipped } = collect(schema);

for (const s of sets) {
  const numeric = s.options.some((o) => typeof o.value === 'number');
  if (numeric && !s.unit) {
    throw new Error(
      `${s.fullName}: numeric values but no unit could be resolved. Emitting a bare ` +
        `number is unsafe — CSS would read it as a unitless ratio. Declare "unit" ` +
        `on the Set in ${SPEC}, or give it an inheritance rule in the generator.`,
    );
  }
}

writeFileSync(resolve(root, 'src/tokens/foundation.css'), emitCss(sets, skipped));
writeFileSync(resolve(root, 'src/tokens/foundation.ts'), emitTs(sets, skipped));
writeFileSync(resolve(root, 'src/tokens/foundation.tokens.json'), emitTokensJson(sets, skipped));

const total = sets.reduce((n, s) => n + s.options.length, 0);
console.log(`Generated ${total} tokens across ${sets.length} sets from ${SPEC}`);
for (const s of sets) console.log(`  ${s.category}/${s.setName}: ${s.options.length}`);
if (skipped.length) {
  console.log('Skipped (unresolved in spec):');
  for (const s of skipped) console.log(`  - ${s}`);
}
