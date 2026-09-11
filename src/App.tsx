import type { ReactNode } from 'react';
import { foundation, foundationOrder, foundationUnits } from './tokens/foundation';

/**
 * Foundation token specimen sheet.
 *
 * Renders every generated token so the scales can be checked against
 * token/Foundation.json by eye. Not part of the published surface.
 */

type Options = Record<string, string | number>;

const withUnit = (value: string | number, unit: string | null): string => {
  if (typeof value === 'string') return value;
  switch (unit) {
    case 'px':
      return `${value}px`;
    case 'ms':
      return `${value}ms`;
    case '%':
      return `${value}%`;
    default:
      return String(value);
  }
};

/** Per-set visual preview. Returns null where a swatch would add nothing. */
function preview(setPath: string, value: string | number): ReactNode {
  const n = typeof value === 'number' ? value : 0;
  switch (setPath) {
    case 'typography/fontSize':
      return <span style={{ fontSize: n, lineHeight: 1 }}>Ag 가나</span>;
    case 'typography/lineHeight':
      return <span style={{ display: 'inline-block', height: n, width: 2, background: '#111' }} />;
    case 'typography/fontWeight':
      return <span style={{ fontWeight: n, fontSize: 16 }}>Ag 가나</span>;
    case 'typography/fontFamily':
      return <span style={{ fontFamily: `${String(value)}, sans-serif`, fontSize: 16 }}>Ag 가나</span>;
    case 'layout/space':
      return <span style={{ display: 'inline-block', width: n || 1, height: 12, background: '#3b82f6' }} />;
    case 'layout/size':
      return <span style={{ display: 'inline-block', width: n, height: n, background: '#111' }} />;
    case 'shape/radius':
      return (
        <span
          style={{ display: 'inline-block', width: 48, height: 24, background: '#111', borderRadius: Math.min(n, 24) }}
        />
      );
    case 'shape/stroke':
      return <span style={{ display: 'inline-block', width: 48, height: 0, borderTop: `${n}px solid #111` }} />;
    case 'effect/opacity':
      return <span style={{ display: 'inline-block', width: 32, height: 16, background: '#111', opacity: n }} />;
    default:
      if (typeof value === 'string' && value.startsWith('#')) {
        return (
          <span
            style={{
              display: 'inline-block',
              width: 32,
              height: 16,
              background: value,
              border: '1px solid #e5e5e5',
            }}
          />
        );
      }
      return null;
  }
}

function SetTable({ category, setName, options }: { category: string; setName: string; options: Options }) {
  const path = `${category}/${setName}`;
  const units = foundationUnits as unknown as Record<string, Record<string, string | null>>;
  const unit = units[category]?.[setName] ?? null;

  // Iterate foundationOrder, never Object.keys(options) — see the note on
  // foundationOrder in the generated file.
  const order = foundationOrder as unknown as Record<string, Record<string, readonly string[]>>;
  const keys = order[category]?.[setName] ?? Object.keys(options);
  const entries = keys.map((k) => [k, options[k]] as const);

  return (
    <section style={{ marginBottom: 40 }}>
      <h2 style={{ fontSize: 14, fontWeight: 600, margin: '0 0 2px' }}>
        {category}/{setName}
      </h2>
      <p style={{ fontSize: 11, color: '#666', margin: '0 0 10px' }}>
        {entries.length} tokens{unit ? ` · ${unit}` : ''}
      </p>
      <table style={{ borderCollapse: 'collapse', fontSize: 11 }}>
        <tbody>
          {entries.map(([key, value]) => (
            <tr key={key} style={{ borderTop: '1px solid #eee' }}>
              <td style={{ padding: '3px 14px 3px 0', fontFamily: 'ui-monospace, monospace', whiteSpace: 'nowrap' }}>
                {key}
              </td>
              <td
                style={{
                  padding: '3px 14px 3px 0',
                  fontFamily: 'ui-monospace, monospace',
                  color: '#666',
                  whiteSpace: 'nowrap',
                }}
              >
                {value === undefined ? '—' : withUnit(value, unit)}
              </td>
              <td style={{ padding: '3px 0' }}>{value === undefined ? null : preview(path, value)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export function App() {
  const tree = foundation as unknown as Record<string, Record<string, Options>>;
  const total = Object.values(tree)
    .flatMap((sets) => Object.values(sets))
    .reduce((n, opts) => n + Object.keys(opts).length, 0);

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: 32, color: '#111' }}>
      <h1 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 4px' }}>Foundation Tokens</h1>
      <p style={{ fontSize: 12, color: '#666', margin: '0 0 32px' }}>
        {total} tokens generated from <code>token/Foundation.json</code>
      </p>

      {Object.entries(tree).map(([category, sets]) =>
        Object.entries(sets).map(([setName, options]) => (
          <SetTable key={`${category}/${setName}`} category={category} setName={setName} options={options} />
        )),
      )}
    </main>
  );
}
