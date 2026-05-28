import { motion } from 'motion/react'
import PageOverlayShell from '../components/PageOverlayShell'

interface MembershipPageProps {
  isOpen: boolean
  onClose: () => void
}

const benefits = [
  {
    icon: '⚓',
    title: 'FLEET ACCESS',
    description: 'PRIORITY BOOKING ACROSS ALL THREE VESSELS. CHOOSE YOUR YACHT, YOUR DATES, YOUR DESTINATION.',
  },
  {
    icon: '🏁',
    title: 'RACING CALENDAR',
    description: 'FULL ACCESS TO OUR COMPETITIVE PROGRAMME. COASTAL REGATTAS, OFFSHORE PASSAGES, AND ANNUAL CHAMPIONSHIPS.',
  },
  {
    icon: '🔑',
    title: 'CONCIERGE 24/7',
    description: 'A DEDICATED TEAM HANDLING EVERY DETAIL. FROM PROVISIONING TO CUSTOMS, NOTHING IS LEFT TO CHANCE.',
  },
  {
    icon: '🌊',
    title: 'ACADEMY ENROLMENT',
    description: 'MASTER THE SEA THROUGH OUR SIX-MODULE PROGRAMME. NAVIGATION, METEOROLOGY, AND LEADERSHIP.',
  },
  {
    icon: '🎯',
    title: 'MEMBER EVENTS',
    description: 'EXCLUSIVE GATHERINGS, SUNSET SERIES, AND THE ANNUAL FOUNDERS\' DINNER IN MONACO.',
  },
  {
    icon: '✦',
    title: 'GLOBAL NETWORK',
    description: 'CONNECT WITH A CIRCLE OF MEMBERS WHO SHARE YOUR PASSION FOR THE OCEAN AND EXCELLENCE.',
  },
]

export default function MembershipPage({ isOpen, onClose }: MembershipPageProps) {
  return (
    <PageOverlayShell isOpen={isOpen} onClose={onClose} pageName="MEMBERSHIP">
      <div style={{ padding: 'clamp(64px,8vw,100px) clamp(24px,6vw,96px)' }}>
        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <div style={{ width: 40, height: 1.5, background: 'var(--accent)', marginBottom: 16 }} />
          <div style={{ fontSize: 10, letterSpacing: '0.3em', color: 'var(--accent)', marginBottom: 16 }}>
            BECOME A MEMBER
          </div>
          <h1
            style={{
              fontSize: 'clamp(40px,6vw,80px)',
              fontWeight: 400,
              lineHeight: 0.95,
              color: '#0c0c0e',
              letterSpacing: '-0.01em',
              maxWidth: 600,
            }}
            dangerouslySetInnerHTML={{ __html: 'YOUR PRIVATE<br/>WORLD AWAITS.' }}
          />
          <p
            style={{
              fontSize: 11,
              lineHeight: 1.9,
              letterSpacing: '0.14em',
              color: 'rgba(12,12,14,0.52)',
              maxWidth: 480,
              marginTop: 32,
            }}
          >
            MEMBERSHIP AT YORCH IS MORE THAN ACCESS — IT IS AN INVITATION TO A LIFE SHAPED BY THE SEA. EVERY PRIVILEGE IS DESIGNED FOR THOSE WHO REFUSE TO COMPROMISE.
          </p>
        </div>

        {/* Benefits grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
            marginBottom: 80,
          }}
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              style={{ padding: 36 }}
            >
              <div style={{ fontSize: 28, marginBottom: 20 }}>{benefit.icon}</div>
              <h3
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  color: '#0c0c0e',
                  marginBottom: 12,
                }}
              >
                {benefit.title}
              </h3>
              <p
                style={{
                  fontSize: 10,
                  lineHeight: 1.8,
                  letterSpacing: '0.15em',
                  color: 'rgba(12,12,14,0.52)',
                }}
              >
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          style={{
            textAlign: 'center',
            padding: '64px 0',
            borderTop: '1px solid rgba(12,12,14,0.07)',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(28px,4vw,48px)',
              fontWeight: 400,
              color: '#0c0c0e',
              marginBottom: 24,
              letterSpacing: '-0.01em',
            }}
          >
            READY TO BEGIN?
          </h2>
          <p
            style={{
              fontSize: 10,
              lineHeight: 1.8,
              letterSpacing: '0.15em',
              color: 'rgba(12,12,14,0.52)',
              maxWidth: 400,
              margin: '0 auto 32px',
            }}
          >
            APPLICATIONS ARE REVIEWED BY OUR MEMBERSHIP COMMITTEE. EXPECT A RESPONSE WITHIN 48 HOURS.
          </p>
          <button
            style={{
              background: 'var(--accent)',
              color: 'white',
              padding: '16px 48px',
              fontSize: 10,
              letterSpacing: '0.25em',
              borderRadius: 2,
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
              textTransform: 'uppercase' as const,
            }}
          >
            APPLY NOW
          </button>
        </div>
      </div>
    </PageOverlayShell>
  )
}
