export default function DesignTokens() {
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', color: '#111' }}>
      <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '24px' }}>
        Color (Tokens)
      </h1>

      <div style={{ marginBottom: '48px' }}>
        <div style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
          Color
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '600', marginBottom: '8px' }}>
          <span>Token</span>
          <span>Light</span>
          <span>Dark</span>
        </div>

        <div style={{ padding: '16px 0', borderTop: '1px solid #eee' }}>
          <div style={{ marginBottom: '8px', fontFamily: 'monospace' }}>
            color.text.accent.lime
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ width: '120px', height: '48px', background: '#C7F36B' }} />
            <div style={{ width: '120px', height: '48px', background: '#A3D938' }} />
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '48px' }}>
        <div style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>
          Border
        </div>

        <div style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
          Width
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 120px',
          paddingBottom: '8px',
          borderBottom: '1px solid #eee',
          fontWeight: '600'
        }}>
          <div>Token and description</div>
          <div>Value</div>
        </div>

        {[
          {
            token: 'border.width',
            desc: 'The default width for all standard component borders and dividers.',
            value: '1px',
            version: 'v1.5.2'
          },
          {
            token: 'border.width.selected',
            desc: 'The width used to indicate a selected element.',
            value: '2px',
            version: 'v6.1.0'
          },
          {
            token: 'border.width.focused',
            desc: 'The width used for the focus ring on interactive elements.',
            value: '2px',
            version: 'v6.1.0'
          }
        ].map((item) => (
          <div key={item.token} style={{
            display: 'grid',
            gridTemplateColumns: '1fr 120px',
            padding: '16px 0',
            borderBottom: '1px solid #eee'
          }}>
            <div>
              <div style={{
                display: 'inline-block',
                padding: '4px 8px',
                background: '#f3f4f6',
                borderRadius: '6px',
                fontFamily: 'monospace',
                marginBottom: '8px'
              }}>
                {item.token}
              </div>
              <div style={{ marginBottom: '6px' }}>{item.desc}</div>
              <div style={{ fontSize: '12px', color: '#777' }}>
                Introduced {item.version}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              {item.value}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>
          Motion
        </h2>

        {['motion.avatar.enter', 'motion.avatar.exit'].map((token) => (
          <div key={token} style={{ padding: '16px 0', borderBottom: '1px solid #eee' }}>
            <div style={{ fontFamily: 'monospace', marginBottom: '8px' }}>
              {token}
            </div>
            <div>Use for avatar transitions.</div>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>
          Opacity
        </h2>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: '600' }}>
          <span>Token and description</span>
          <span>Light value</span>
          <span>Dark value</span>
        </div>

        <div style={{ padding: '16px 0', borderTop: '1px solid #eee' }}>
          <div style={{ fontFamily: 'monospace', marginBottom: '8px' }}>
            opacity.disabled
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>Apply to disabled state.</div>

            <div style={{
              width: '120px',
              height: '64px',
              border: '1px solid #eee',
              borderRadius: '8px',
              background: 'rgba(41,42,46,0.4)',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '8px',
              fontSize: '12px'
            }}>
              Opacity40
            </div>

            <div style={{
              width: '120px',
              height: '64px',
              border: '1px solid #333',
              borderRadius: '8px',
              background: 'rgba(17,17,17,0.4)',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '8px',
              fontSize: '12px',
              color: '#fff'
            }}>
              Opacity40
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>
          Radius
        </h2>

        <div style={{ padding: '16px 0', borderTop: '1px solid #eee' }}>
          <div style={{ fontFamily: 'monospace', marginBottom: '8px' }}>
            radius.xsmall
          </div>
          <div>Use for small elements.</div>
          <div style={{ marginTop: '8px' }}>2px</div>
        </div>
      </div>
    </div>
  );
}
