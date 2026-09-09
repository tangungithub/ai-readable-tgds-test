/**
 * Generates the Foundation token layer from the value registry.
 *
 * Source of truth is tokens/foundation.tokens.json (W3C DTCG shape). Rules live
 * in docs/A-token/foundation.md; values live only in the registry (TKN-03 ·
 * FND-12). What is not in the registry does not exist — there is no TBD state.
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
const REGISTRY = 'tokens/foundation.tokens.json';

// ------------------------------------------------------------------ helpers

const kebab = (s) => s.trim().toLowerCase().replace(/\s+/g, '-');
const camel = (s) =>
  s
    .trim()
    .split(/\s+/)
    .map((w, i) => (i === 0 ? w[0].toLowerCase() + w.slice(1) : w[0].toUpperCase() + w.slice(1)))
    .join('');
const pascal = (s) =>
  s
    .trim()
    .split(/\s+/)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join('');
const num = (n) => (Number.isInteger(n) ? String(n) : String(Number(n.toFixed(4))));

const UNIT_SUFFIX = {
  px: (v) => `${num(v)}px`,
  ms: (v) => `${num(v)}ms`,
  rem: (v) => `${num(v)}rem`,
  '%': (v) => `${num(v)}%`,
  'css-font-weight': (v) => num(v),
};

const dataKeys = (group) => Object.keys(group).filter((k) => !k.startsWith('$'));

// ------------------------------------------------------------- read registry

function readRegistry() {
  return JSON.parse(readFileSync(resolve(root, REGISTRY), 'utf8'));
}

/**
 * Set kind (FND-04) is recovered from the option-key shape, which the naming
 * rules make unambiguous:
 *   composite       — keys contain a hyphen ("0400-0300")
 *   ordinal         — keys are 4-digit padded steps ("0100", FND-05)
 *   value-anchored  — keys are bare numbers whose text IS the value ("400")
 *   nominal         — anything else ("Sans")
 */
function detectKind(keys) {
  if (keys.some((k) => k.includes('-'))) return 'composite';
  if (keys.every((k) => /^\d{4}$/.test(k))) return 'ordinal';
  if (keys.every((k) => /^\d+$/.test(k))) return 'value-anchored';
  return 'nominal';
}

/** Raw value + unit out of one DTCG token. */
function tokenValue(token) {
  if (token.$type === 'dimension') {
    return { value: token.$value.value, unit: token.$value.unit };
  }
  return { value: token.$value, unit: token.$type === 'fontWeight' ? 'css-font-weight' : null };
}

// ------------------------------------------------------------------ collect
// Each option carries BOTH names: `canonical` is the Figma form as it appears
// in the registry (TKN-04 — the canonical form IS the Figma notation), `code`
// is the transformed form. Keeping them together is what makes the mapping
// table possible: the reverse transform is a lookup, never a parse.

function collect(registry) {
  const sets = [];

  for (const [category, groups] of Object.entries(registry)) {
    if (category.startsWith('$')) continue;

    for (const setName of dataKeys(groups)) {
      const group = groups[setName];
      const keys = dataKeys(group);
      const kind = detectKind(keys);

      // JSON.parse hoists integer-like keys ("1000") ahead of the rest, so the
      // registry's file order cannot be trusted for numeric scales — re-sort.
      if (kind === 'ordinal' || kind === 'value-anchored') {
        keys.sort((a, b) => Number(a) - Number(b));
      } else if (kind === 'composite') {
        const parts = (k) => k.split('-').map(Number);
        keys.sort((a, b) => {
          const [a1, a2] = parts(a);
          const [b1, b2] = parts(b);
          return a1 - b1 || a2 - b2;
        });
      }

      let unit = null;
      let dtcgType = null;
      const options = keys.map((key) => {
        const token = group[key];
        dtcgType ??= token.$type;
        if (token.$type !== dtcgType) {
          throw new Error(`${category}/${setName}: mixed $type (${dtcgType} vs ${token.$type})`);
        }
        const v = tokenValue(token);
        if (v.unit !== null) {
          if (unit !== null && unit !== v.unit) {
            throw new Error(`${category}/${setName}: mixed units (${unit} vs ${v.unit})`);
          }
          unit = v.unit;
        }
        return {
          canonical: key,
          code: kind === 'nominal' ? camel(key) : key,
          value: v.value,
          // FND-06: registered exception steps replace the tens digit with 5.
          isException: kind === 'ordinal' && key.at(-2) === '5',
        };
      });

      sets.push({ fullName: `${category}/${setName}`, category, setName, unit, kind, dtcgType, options });
    }
  }
  return sets;
}

// ----------------------------------------------------------- integrity gate
// Not the full FND-L01..L11 lint suite — just the checks that would silently
// produce wrong output if violated. The full linter is a separate task.

function assertIntegrity(sets, registry) {
  const problems = [];
  const fontSizeSteps = new Set(dataKeys(registry.Typography?.['Font Size'] ?? {}));

  for (const { fullName, category, kind, options, setName } of sets) {
    if (kind === 'nominal') {
      // A hyphen inside a nominal option would make the kebab-cased CSS name
      // ambiguous against segment boundaries (FND-L09).
      for (const o of options) {
        if (kebab(o.canonical).includes('-')) {
          problems.push(`${fullName}: nominal option "${o.canonical}" is not a single word (FND-L09)`);
        }
      }
    }

    if (kind === 'composite' && category === 'Typography' && fontSizeSteps.size) {
      // Composite grammar is {Font Size Step}-{Set Step} (§1.4.1) — the first
      // segment must be a registered Font Size step.
      for (const o of options) {
        const head = o.canonical.split('-')[0];
        if (!fontSizeSteps.has(head)) {
          problems.push(`${fullName}: "${o.canonical}" references unknown Font Size step ${head}`);
        }
      }
    }

    if (kind === 'ordinal') {
      // FND-05: numeric ordinal scales ascend with the step, exceptions
      // included. Color ramps carry hex strings and are exempt here; composite
      // Letter Spacing descends by design (FND-09) and is not ordinal.
      const values = options.map((o) => o.value);
      if (values.every((v) => typeof v === 'number')) {
        for (let i = 1; i < values.length; i += 1) {
          if (values[i] <= values[i - 1]) {
            problems.push(
              `${fullName}: not monotonic at ${options[i].canonical} (${values[i - 1]} -> ${values[i]}) (FND-L06)`,
            );
          }
        }
      }
    }

    void setName;
  }

  if (problems.length) {
    throw new Error(`Registry integrity check failed:\n  - ${problems.join('\n  - ')}`);
  }
}

// ---------------------------------------------------------------- rendering

/** CSS custom property: --{Category}-{Set}-{Option}, each segment kebab-cased. */
const cssProperty = (category, setName, optionCode) =>
  `--${kebab(category)}-${kebab(setName)}-${kebab(String(optionCode))}`;

/**
 * TKN-04: segment boundaries become nesting, words inside a segment become
 * camelCase. Bracket notation is used where the option is not a valid
 * identifier (numeric steps, composite keys).
 */
const tsPath = (category, setName, optionCode) => {
  const base = `foundation.${camel(category)}.${camel(setName)}`;
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(String(optionCode))
    ? `${base}.${optionCode}`
    : `${base}['${optionCode}']`;
};

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
    ' * Category is not omitted — it is what keeps the segment split unambiguous',
    ' * when the name has to be read back without the mapping table.',
    ' */',
    '',
    ':root {',
  ];

  for (const { category, setName, unit, dtcgType, options } of sets) {
    lines.push(`  /* ${category}/${setName}${unit ? ` — ${unit}` : ''} */`);
    for (const o of options) {
      lines.push(`  ${cssProperty(category, setName, o.code)}: ${rendered(o.value, unit, dtcgType)};`);
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

  // One exported key-type per Set: ordinal / value-anchored scales are Steps,
  // nominal / composite vocabularies are Options.
  const typeLines = [];
  const seenTypeNames = new Set();
  for (const { category, setName, kind } of sets) {
    const name = `${pascal(setName)}${kind === 'nominal' || kind === 'composite' ? 'Option' : 'Step'}`;
    if (seenTypeNames.has(name)) {
      throw new Error(`Type name collision: ${name} (from ${category}/${setName})`);
    }
    seenTypeNames.add(name);
    typeLines.push(`export type ${name} = keyof Foundation['${camel(category)}']['${camel(setName)}'];`);
  }

  return [
    '/**',
    ' * GENERATED FILE — do not edit by hand.',
    ` * Source: ${REGISTRY}`,
    ' * Regenerate: npm run tokens:build',
    ' *',
    ' * Shape follows TKN-04: segment boundaries become object nesting, words',
    ' * inside a segment become camelCase, numeric options stay bracket-accessed.',
    " *   Typography/Font Size/0400  ->  foundation.typography.fontSize['0400']",
    ' */',
    '',
    '/** Raw values. Units are carried separately in `foundationUnits`. */',
    `export const foundation = ${JSON.stringify(tree, null, 2)} as const;`,
    '',
    '/** Unit for each Set. `null` = unitless (colors, ratios, nominal values). */',
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
    ' * The reverse transform is a lookup, never a parse: a hyphen in',
    ' * `--typography-font-size-0400` could have come from a segment boundary or',
    ' * from the space inside "Font Size", and the string alone cannot tell you',
    ' * which. Look it up here instead of taking the name apart.',
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
    const group = {};
    for (const o of options) {
      const css = cssProperty(category, setName, o.code);
      group[o.canonical] = {
        $type: dtcgType,
        $value: Array.isArray(o.value) || dtcgType === 'color' ? o.value : rendered(o.value, unit, dtcgType),
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

const registry = readRegistry();
const sets = collect(registry);
assertIntegrity(sets, registry);

for (const s of sets) {
  // `number`-typed Sets (Opacity) are unitless ratios by declaration; any other
  // numeric Set without a unit would silently emit a bare number into CSS.
  const numeric = s.options.some((o) => typeof o.value === 'number');
  if (numeric && !s.unit && s.dtcgType !== 'number') {
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
