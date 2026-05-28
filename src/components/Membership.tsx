import { motion } from 'motion/react'

const signatureFeatures = [
  'DEDICATED BERTH ACCESS',
  'RACE ENTRY DISCOUNTS',
  'CONCIERGE HOTLINE',
  '2 GUEST PASSES / YEAR',
]

const commodoreFeatures = [
  'PRIORITY VESSEL BOOKING',
  'FULL RACING CALENDAR ACCESS',
  'EXCLUSIVE MEMBER EVENTS',
  '6 GUEST PASSES / YEAR',
]

const foundersFeatures = [
  'UNLIMITED VESSEL ACCESS',
  'PRIVATE CAPTAIN ON RETAINER',
  'ANNUAL GLOBAL VOYAGE INCLUDED',
  'FOUNDING MEMBER RECOGNITION',
]

const tierTransition = (delay: number) => ({
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] as const,
  delay,
})

const buttonStyle: React.CSSProperties = {
  background: 'var(--accent)',
  color: 'white',
  width: '100%',
  padding: '12px',
  fontSize: 9,
  letterSpacing: '0.22em',
  borderRadius: 2,
  border: 'none',
  cursor: 'pointer',
}

const tierLabelStyle: React.CSSProperties = {
  fontSize: 8,
  letterSpacing: '0.3em',
  color: 'rgba(12,12,14,0.4)',
  marginBottom: 4,
  margin: 0,
}

const levelStyle: React.CSSProperties = {
  fontSize: 9,
  letterSpacing: '0.25em',
  color: 'var(--accent)',
  marginBottom: 20,
  margin: 0,
  marginTop: 4,
}

const descriptionStyle: React.CSSProperties = {
  fontSize: 10,
  lineHeight: 1.8,
  color: 'rgba(12,12,14,0.52)',
  letterSpacing: '0.15em',
  marginTop: 16,
  marginBottom: 20,
}

const periodStyle: React.CSSProperties = {
  fontSize: 9,
  color: 'rgba(12,12,14,0.4)',
  letterSpacing: '0.2em',
}

function FeatureList({ features }: { features: string[] }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        marginBottom: 24,
      }}
    >
      {features.map((f) => (
        <div key={f} style={{ display: 'flex', alignItems: 'flex-start' }}>
          <div
            style={{
              width: 4,
              height: 4,
              background: 'var(--accent)',
              borderRadius: '50%',
              marginRight: 12,
              marginTop: 5,
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: 9,
              letterSpacing: '0.18em',
              color: 'rgba(12,12,14,0.6)',
            }}
          >
            {f}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function Membership() {
  return (
    <section
      style={{
        background: 'var(--bg-base)',
        padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
      }}
    >
      {/* Section Header */}
      <div style={{ marginBottom: 64 }}>
        <div
          style={{
            width: 40,
            height: 1.5,
            background: 'var(--accent)',
            marginBottom: 16,
          }}
        />
        <p
          style={{
            fontSize: 10,
            letterSpacing: '0.3em',
            color: 'var(--accent)',
            marginBottom: 16,
            margin: 0,
          }}
        >
          MEMBERSHIP
        </p>
        <h2
          style={{
            fontSize: 'clamp(40px,6vw,80px)',
            fontWeight: 400,
            lineHeight: 0.95,
            color: '#0c0c0e',
            letterSpacing: '-0.01em',
            margin: 0,
            marginTop: 16,
          }}
        >
          SELECT YOUR TIER.
        </h2>
      </div>

      {/* 2-Column Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'start',
        }}
      >
        {/* LEFT — Tier Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Tier 1 — SIGNATURE */}
          <motion.div
            className="card"
            style={{ padding: 32 }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={tierTransition(0)}
          >
            <p style={tierLabelStyle}>SIGNATURE</p>
            <p style={levelStyle}>ENTRY LEVEL</p>
            <div style={{ marginTop: 20 }}>
              <span
                style={{ fontSize: 40, color: '#0c0c0e', fontWeight: 400, display: 'inline' }}
              >
                $24,000
              </span>
              <span style={periodStyle}> / YEAR</span>
            </div>
            <p style={descriptionStyle}>
              ACCESS THE FLEET, THE CLUB, AND A DEDICATED CONCIERGE.
            </p>
            <FeatureList features={signatureFeatures} />
            <button style={buttonStyle}>APPLY NOW</button>
          </motion.div>

          {/* Tier 2 — COMMODORE */}
          <motion.div
            className="card-accent"
            style={{ padding: 32 }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={tierTransition(0.08)}
          >
            <span
              style={{
                background: 'var(--accent)',
                color: 'white',
                fontSize: 8,
                letterSpacing: '0.3em',
                padding: '4px 12px',
                borderRadius: 2,
                display: 'inline-block',
                marginBottom: 16,
              }}
            >
              MOST POPULAR
            </span>
            <p style={tierLabelStyle}>COMMODORE</p>
            <p style={levelStyle}>MOST POPULAR</p>
            <div style={{ marginTop: 20 }}>
              <span
                style={{
                  fontSize: 40,
                  color: 'var(--accent)',
                  fontWeight: 400,
                  display: 'inline',
                }}
              >
                $58,000
              </span>
              <span style={periodStyle}> / YEAR</span>
            </div>
            <p style={descriptionStyle}>
              PRIORITY BOOKINGS, ENHANCED RACING, AND EXCLUSIVE EVENT ACCESS.
            </p>
            <FeatureList features={commodoreFeatures} />
            <button style={buttonStyle}>APPLY NOW</button>
          </motion.div>

          {/* Tier 3 — FOUNDERS' CIRCLE */}
          <motion.div
            className="card"
            style={{ padding: 32 }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={tierTransition(0.16)}
          >
            <p style={tierLabelStyle}>FOUNDERS' CIRCLE</p>
            <p style={levelStyle}>INVITATION ONLY</p>
            <div style={{ marginTop: 20 }}>
              <span
                style={{ fontSize: 40, color: '#0c0c0e', fontWeight: 400, display: 'inline' }}
              >
                BY INVITATION
              </span>
            </div>
            <p style={descriptionStyle}>
              THE ULTIMATE EXPRESSION OF PRIVATE YACHTING. EVERY PRIVILEGE, NO LIMITS.
            </p>
            <FeatureList features={foundersFeatures} />
            <button style={buttonStyle}>REQUEST INVITATION</button>
          </motion.div>
        </div>

        {/* RIGHT — Sticky Video Panel */}
        <div style={{ position: 'sticky', top: 120 }}>
          <div style={{ borderRadius: 4, overflow: 'hidden', position: 'relative' }}>
            <video
              src="/videos/interior-tour.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: '100%',
                height: 560,
                objectFit: 'cover',
                display: 'block',
              }}
            />
            {/* Dark gradient overlay */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '50%',
                background:
                  'linear-gradient(to top, rgba(5,10,20,0.9) 0%, rgba(5,10,20,0.6) 40%, transparent 80%)',
              }}
            />
            {/* Floating text */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, padding: 32 }}>
              <p
                style={{
                  fontSize: 8,
                  letterSpacing: '0.3em',
                  color: 'rgba(147,197,253,0.85)',
                  marginBottom: 12,
                  margin: 0,
                }}
              >
                OCEAN ECLIPSE — MAIN SALON
              </p>
              <p
                style={{
                  fontSize: 11,
                  lineHeight: 1.8,
                  color: 'rgba(255,255,255,0.7)',
                  maxWidth: 280,
                  marginBottom: 20,
                  margin: 0,
                  marginTop: 12,
                }}
              >
                EVERY SURFACE, EVERY MATERIAL, CHOSEN FOR THE WAY IT AGES WITH THE SEA.
              </p>
              <button
                className="glass-mid"
                style={{
                  padding: '12px 28px',
                  color: 'white',
                  fontSize: 9,
                  letterSpacing: '0.22em',
                  borderRadius: 100,
                  border: 'none',
                  cursor: 'pointer',
                  marginTop: 20,
                }}
              >
                APPLY FOR MEMBERSHIP
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
