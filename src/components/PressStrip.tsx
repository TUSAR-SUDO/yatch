const pressNames = [
  'CONDÉ NAST TRAVELLER',
  'ROBB REPORT',
  'MOTOR YACHT',
  'OCEAN LIVING',
  'FINANCIAL TIMES WEEKEND',
]

export default function PressStrip() {
  return (
    <section
      style={{
        borderTop: '1px solid rgba(12,12,14,0.07)',
        borderBottom: '1px solid rgba(12,12,14,0.07)',
        padding: 'clamp(28px,4vw,40px) clamp(24px,6vw,96px)',
        background: 'white',
      }}
    >
      <p
        style={{
          fontSize: 8,
          letterSpacing: '0.35em',
          color: 'rgba(12,12,14,0.3)',
          marginBottom: 20,
          textAlign: 'center',
        }}
      >
        AS FEATURED IN
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '16px 32px',
        }}
      >
        {pressNames.map((name, i) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            {i > 0 && (
              <span style={{ color: 'rgba(12,12,14,0.2)' }}>·</span>
            )}
            <span
              style={{
                fontSize: 9,
                letterSpacing: '0.28em',
                color: 'rgba(12,12,14,0.32)',
              }}
            >
              {name}
            </span>
          </span>
        ))}
      </div>
    </section>
  )
}
