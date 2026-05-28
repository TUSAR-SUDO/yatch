import { useState } from 'react'

const linkStyle: React.CSSProperties = {
  fontSize: 9,
  letterSpacing: '0.2em',
  color: 'rgba(255,255,255,0.4)',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'color 0.3s',
}

const headerStyle: React.CSSProperties = {
  fontSize: 8,
  letterSpacing: '0.35em',
  color: 'rgba(147,197,253,0.7)',
  marginBottom: 20,
}

function FooterLink({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href="#"
      style={{
        ...linkStyle,
        color: hovered ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.4)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </a>
  )
}

export default function Footer() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: 480 }}>
      {/* Video */}
      <video
        src="/videos/hull-cutting.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(5,10,20,0.75) 0%, rgba(5,10,20,0.82) 100%)',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          padding: 'clamp(64px,8vw,100px) clamp(24px,6vw,96px)',
        }}
      >
        {/* 3-column grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr 1fr',
            gap: 80,
          }}
        >
          {/* Col 1 — Logo + Tagline */}
          <div>
            <svg width={24} height={24} viewBox="0 0 20 20" fill="none">
              <circle cx={10} cy={5} r={2.4} stroke="white" strokeWidth={1.5} fill="none" />
              <line x1={10} y1={7.4} x2={10} y2={16} stroke="white" strokeWidth={1.5} strokeLinecap="round" />
              <path d="M5 11 Q10 14 15 11" stroke="white" strokeWidth={1.5} fill="none" strokeLinecap="round" />
              <line x1={7} y1={16} x2={13} y2={16} stroke="white" strokeWidth={1.5} strokeLinecap="round" />
            </svg>
            <p style={{ fontSize: 20, color: 'white', letterSpacing: '0.28em', marginTop: 12 }}>
              YORCH
            </p>
            <p
              style={{
                fontSize: 9,
                letterSpacing: '0.28em',
                color: 'rgba(255,255,255,0.4)',
                marginTop: 16,
              }}
            >
              SINCE 1975. THE SEA IS YOURS.
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <p style={headerStyle}>NAVIGATION</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['JOURNEYS', 'FLEET', 'MEMBERSHIP', 'ACADEMY', 'BLOG'].map((label) => (
                <FooterLink key={label} label={label} />
              ))}
            </div>
          </div>

          {/* Col 3 — Services */}
          <div>
            <p style={headerStyle}>SERVICES</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['PRIVATE CHARTER', 'CORPORATE EVENTS', 'RACE PROGRAMME', 'CONCIERGE', 'PRESS & MEDIA'].map(
                (label) => (
                  <FooterLink key={label} label={label} />
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div
          style={{
            marginTop: 64,
            paddingTop: 24,
            borderTop: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: 8,
              letterSpacing: '0.2em',
              color: 'rgba(255,255,255,0.25)',
            }}
          >
            © 2025 YORCH PRIVATE YACHT CLUB. ALL RIGHTS RESERVED.
          </span>
          <div style={{ display: 'flex', gap: 24 }}>
            <a
              href="#"
              style={{
                fontSize: 8,
                letterSpacing: '0.2em',
                color: 'rgba(255,255,255,0.25)',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              PRIVACY POLICY
            </a>
            <a
              href="#"
              style={{
                fontSize: 8,
                letterSpacing: '0.2em',
                color: 'rgba(255,255,255,0.25)',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              TERMS
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
