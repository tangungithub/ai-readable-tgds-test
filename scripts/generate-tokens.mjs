/**
 * Generates the Foundation token layer from the specification.
 *
 * Source of truth is the JSON block in docs/A-token/token-system.md section 1.6
 * ("아래 JSON은 본 장의 단일 진실 원천이다"). The schema is read straight out of
 * the document rather than copied into a second file, so the two cannot drift.
 *
 * Emits:
 *   src/tokens/foundation.css  — custom properties
 *   src/tokens/foundation.ts   — typed values
 *
 * Run: npm run tokens:build
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SPEC = 'docs/A-token/token-system.md';

// ---------------------------------------------------------------- read schema

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

// ------------------------------------------------------------ integrity gate
// Not the full FND-L01..L08 lint suite — just the checks that would silently
// produce wrong output if violated. The full linter is a separate task.

function assertIntegrity(schema) {
  const problems = [];

  for (const [name, set] of Object.entries(schema.sets)) {
    if (set.kind !== 'ordinal') continue;
    const steps = set.steps ?? {};
    const registered = set.exceptions?.registered ?? {};

    // FND-07: an exception step must be registered, and FND-06: tens digit is 5
    for (const step of Object.keys(registered)) {
      if (pad(step).at(-2) !== '5') {
        problems.push(`${name}: exception step ${pad(step)} does not use tens digit 5 (FND-06)`);
      }
    }
    if (set.exceptions?.allowed === false && Object.keys(registered).length > 0) {
      problems.push(`${name}: exceptions.allowed is false but registered is non-empty (FND-07)`);
    }

    // FND-L06: values must increase with step, exceptions included
    const merged = { ...steps, ...registered };
    const values = Object.entries(merged)
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

  // FND-L05: every Line Height font-size step must exist in Font Size
  const fs = schema.sets['Typography/Font Size'];
  const lhSteps = validFontSizeSteps(fs);
  if (lhSteps.length === 0) problems.push('Typography/Font Size resolved to no steps');

  if (problems.length) {
    throw new Error(`Schema integrity check failed:\n  - ${problems.join('\n  - ')}`);
  }
}

// ------------------------------------------------------------------- helpers

const pad = (step) => String(step).padStart(4, '0');
const camel = (s) => {
  const parts = s.trim().split(/\s+/);
  return parts
    .map((w, i) => (i === 0 ? w[0].toLowerCase() + w.slice(1) : w[0].toUpperCase() + w.slice(1)))
    .join('');
};
const kebab = (s) => s.trim().toLowerCase().replace(/\s+/g, '-');
const num = (n) => (Number.isInteger(n) ? String(n) : String(Number(n.toFixed(4))));

function validFontSizeSteps(fontSizeSet) {
  const merged = { ...fontSizeSet.steps, ...(fontSizeSet.exceptions?.registered ?? {}) };
  return Object.entries(merged)
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .map(([step, px]) => [pad(step), px]);
}

const UNIT_SUFFIX = {
  px: (v) => `${num(v)}px`,
  ms: (v) => `${num(v)}ms`,
  '%': (v) => `${num(v)}%`,
  'css-font-weight': (v) => num(v),
};

// ------------------------------------------------------------------- collect
// Produces: [{ category, set, unit, options: [[optionKey, rawValue], ...] }]

function collect(schema) {
  const out = [];
  const skipped = [];

  for (const [fullName, set] of Object.entries(schema.sets)) {
    if (set.status === 'TBD' || !fullName.includes('/')) {
      skipped.push(`${fullName} (status: TBD)`);
      continue;
    }
    const [category, setName] = fullName.split('/');

    if (set.kind === 'ordinal') {
      const merged = { ...set.steps, ...(set.exceptions?.registered ?? {}) };
      const entries = Object.entries(merged).sort((a, b) => Number(a[0]) - Number(b[0]));
      const unresolved = entries.filter(([, v]) => typeof v !== 'number');
      if (unresolved.length) {
        skipped.push(`${fullName} (${unresolved.length}/${entries.length} steps are TBD)`);
        continue;
      }
      out.push({ category, setName, unit: set.unit, options: entries.map(([s, v]) => [pad(s), v]) });
    } else if (set.kind === 'value-anchored') {
      out.push({
        category,
        setName,
        unit: set.unit,
        options: set.options.map((v) => [String(v), v]),
      });
    } else if (set.kind === 'nominal') {
      out.push({
        category,
        setName,
        unit: null,
        options: Object.entries(set.options),
      });
    } else if (set.kind === 'composite') {
      // Typography/Line Height: {Font Size Step}-{Line Height Number}
      const lhNumbers = [...set.pattern.matchAll(/(\d{3})(?=\||\))/g)].map((m) => Number(m[1]));
      const sizes = validFontSizeSteps(schema.sets['Typography/Font Size']);
      const options = [];
      for (const [step, px] of sizes) {
        for (const lh of lhNumbers) {
          options.push([`${step}-${lh}`, (px * lh) / 100]);
        }
      }
      out.push({ category, setName, unit: 'px', options });
    }
  }
  return { sets: out, skipped };
}

// -------------------------------------------------------------------- emit

function emitCss(sets, skipped) {
  const lines = [
    '/*',
    ' * GENERATED FILE — do not edit by hand.',
    ` * Source: ${SPEC} section 1.6`,
    ' * Regenerate: npm run tokens:build',
    ' *',
    ' * Custom property naming: --{category}-{set}-{option}, kebab-cased.',
    ' * NOTE: the spec (FND-08) declares a code transform for object nesting but',
    ' * says nothing about CSS custom properties. This flattening is a local',
    ' * convention and should be confirmed into the spec.',
    ...(skipped.length ? [' *', ' * Not emitted (unresolved in the spec):', ...skipped.map((s) => ` *   - ${s}`)] : []),
    ' */',
    '',
    ':root {',
  ];

  for (const { category, setName, unit, options } of sets) {
    lines.push(`  /* ${category}/${setName}${unit ? ` — ${unit}` : ''} */`);
    for (const [key, value] of options) {
      const prop = `--${kebab(category)}-${kebab(setName)}-${kebab(String(key))}`;
      // Quote string values: family names contain spaces and must not be
      // parsed as a sequence of bare identifiers.
      const rendered =
        typeof value === 'string' ? JSON.stringify(value) : (UNIT_SUFFIX[unit] ?? num)(value);
      lines.push(`  ${prop}: ${rendered};`);
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
  for (const { category, setName, unit, options } of sets) {
    const c = camel(category);
    const s = camel(setName);
    tree[c] ??= {};
    units[c] ??= {};
    order[c] ??= {};
    tree[c][s] = Object.fromEntries(options);
    units[c][s] = unit;
    order[c][s] = options.map(([k]) => k);
  }

  return [
    '/**',
    ' * GENERATED FILE — do not edit by hand.',
    ` * Source: ${SPEC} section 1.6`,
    ' * Regenerate: npm run tokens:build',
    ' *',
    ' * Shape follows FND-08: segment boundaries become object nesting, words',
    ' * inside a segment become camelCase, numeric options stay bracket-accessed.',
    ' *   Typography/Font Size/0400  ->  foundation.typography.fontSize[\'0400\']',
    ...(skipped.length ? [' *', ' * Not emitted (unresolved in the spec):', ...skipped.map((s) => ` *   - ${s}`)] : []),
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

// ---------------------------------------------------------------------- main

const schema = readSchema();
assertIntegrity(schema);
const { sets, skipped } = collect(schema);

writeFileSync(resolve(root, 'src/tokens/foundation.css'), emitCss(sets, skipped));
writeFileSync(resolve(root, 'src/tokens/foundation.ts'), emitTs(sets, skipped));

const total = sets.reduce((n, s) => n + s.options.length, 0);
console.log(`Generated ${total} tokens across ${sets.length} sets from ${SPEC}`);
for (const s of sets) console.log(`  ${s.category}/${s.setName}: ${s.options.length}`);
if (skipped.length) {
  console.log('Skipped (unresolved in spec):');
  for (const s of skipped) console.log(`  - ${s}`);
}
