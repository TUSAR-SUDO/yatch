import { motion } from 'motion/react'
import PageOverlayShell from '../components/PageOverlayShell'

interface AboutPageProps {
  isOpen: boolean
  onClose: () => void
}

const milestones = [
  { year: '1975', event: 'YORCH FOUNDED IN MONACO BY CAPTAIN THEODORE LAURENT' },
  { year: '1988', event: 'FIRST REGATTA SERIES LAUNCHED IN THE AEGEAN SEA' },
  { year: '1996', event: 'EXPANSION TO THE CARIBBEAN WITH DEDICATED FLEET' },
  { year: '2005', event: 'LAUNCH OF THE YORCH ACADEMY SAILING PROGRAMME' },
  { year: '2015', event: 'FOUNDERS\' CIRCLE MEMBERSHIP TIER INTRODUCED' },
  { year: '2019', event: 'OCEAN ECLIPSE JOINS THE FLEET — OUR NEWEST VESSEL' },
  { year: '2021', event: 'AZURE HORIZON COMMISSIONED FOR EXPEDITION VOYAGES' },
  { year: '2025', event: '50TH ANNIVERSARY — HALF A CENTURY ON THE WATER' },
]

const values = [
  {
    title: 'PRECISION',
    description: 'EVERY DETAIL IS CONSIDERED. FROM THE ANGLE OF A MOORING LINE TO THE TEMPERATURE OF A CABIN, PRECISION DEFINES THE YORCH STANDARD.',
  },
  {
    title: 'DISCRETION',
    description: 'PRIVACY IS NOT A FEATURE — IT IS A FOUNDATION. OUR MEMBERS TRUST US WITH THEIR MOST VALUABLE COMMODITY: TIME.',
  },
  {
    title: 'SEAMANSHIP',
    description: 'WE ARE SAILORS FIRST. RESPECT FOR THE SEA, MASTERY OF CRAFT, AND THE DISCIPLINE OF NAVIGATION GUIDE EVERYTHING WE DO.',
  },
  {
    title: 'COMMUNITY',
    description: 'A CIRCLE OF INDIVIDUALS WHO SHARE A PASSION FOR THE OCEAN. CONNECTIONS FORGED AT SEA ENDURE ON LAND.',
  },
]

export default function AboutPage({ isOpen, onClose }: AboutPageProps) {
  return (
    <PageOverlayShell isOpen={isOpen} onClose={onClose} pageName="ABOUT US">
      <div style={{ padding: 'clamp(64px,8vw,100px) clamp(24px,6vw,96px)' }}>
        {/* Header */}
        <div style={{ marginBottom: 80 }}>
          <div style={{ width: 40, height: 1.5, background: 'var(--accent)', marginBottom: 16 }} />
          <div style={{ fontSize: 10, letterSpacing: '0.3em', color: 'var(--accent)', marginBottom: 16 }}>
            OUR STORY
          </div>
          <h1
            style={{
              fontSize: 'clamp(40px,6vw,80px)',
              fontWeight: 400,
              lineHeight: 0.95,
              color: '#0c0c0e',
              letterSpacing: '-0.01em',
              maxWidth: 700,
            }}
            dangerouslySetInnerHTML={{ __html: 'FIFTY YEARS.<br/><em>ONE STANDARD.</em>' }}
          />
          <p
            style={{
              fontSize: 11,
              lineHeight: 1.9,
              letterSpacing: '0.14em',
              color: 'rgba(12,12,14,0.52)',
              maxWidth: 520,
              marginTop: 32,
            }}
          >
            FOUNDED IN 1975 BY CAPTAIN THEODORE LAURENT, YORCH WAS BORN FROM A SIMPLE CONVICTION: THAT THE FINEST EXPERIENCES ON WATER SHOULD BE AVAILABLE TO THOSE WHO TRULY APPRECIATE THEM. HALF A CENTURY LATER, THAT VISION ENDURES.
          </p>
        </div>

        {/* Values */}
        <div style={{ marginBottom: 80 }}>
          <div style={{ fontSize: 9, letterSpacing: '0.3em', color: 'var(--accent)', marginBottom: 32 }}>
            OUR VALUES
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 24,
            }}
          >
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                style={{
                  paddingRight: 24,
                  borderRight: i < values.length - 1 ? '1px solid rgba(12,12,14,0.07)' : 'none',
                }}
              >
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                    letterSpacing: '0.08em',
                    color: '#0c0c0e',
                    marginBottom: 16,
                  }}
                >
                  {value.title}
                </h3>
                <p
                  style={{
                    fontSize: 10,
                    lineHeight: 1.8,
                    letterSpacing: '0.15em',
                    color: 'rgba(12,12,14,0.52)',
                  }}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <div style={{ fontSize: 9, letterSpacing: '0.3em', color: 'var(--accent)', marginBottom: 32 }}>
            MILESTONES
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 32,
                  padding: '20px 0',
                  borderBottom: '1px solid rgba(12,12,14,0.06)',
                }}
              >
                <span
                  style={{
                    fontSize: 'clamp(20px,2vw,28px)',
                    fontWeight: 400,
                    color: 'var(--accent)',
                    letterSpacing: '-0.01em',
                    flexShrink: 0,
                    width: 100,
                  }}
                >
                  {milestone.year}
                </span>
                <span
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.15em',
                    color: 'rgba(12,12,14,0.6)',
                    lineHeight: 1.6,
                  }}
                >
                  {milestone.event}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageOverlayShell>
  )
}
