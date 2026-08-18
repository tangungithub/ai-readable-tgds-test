import { Button } from './components/Button';

/**
 * Playground for visually checking the implementation against Figma.
 * Not part of the published component surface.
 */
export function App() {
  return (
    <main style={{ fontFamily: 'var(--tgds-font-family-base)', padding: 32 }}>
      <h1 style={{ fontSize: 16, fontWeight: 600 }}>Button — node 12120:1260</h1>
      <p style={{ fontSize: 12, color: '#666' }}>Figma frame: 54 x 35</p>

      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginTop: 24 }}>
        <Button onClick={() => console.log('clicked')}>Button</Button>
        <Button disabled>Button</Button>
        <Button>더 긴 레이블</Button>
      </div>
    </main>
  );
}
