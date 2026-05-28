import { motion } from 'motion/react'
import PageOverlayShell from '../components/PageOverlayShell'

interface JourneysPageProps {
  isOpen: boolean
  onClose: () => void
}

const journeys = [
  {
    region: 'MEDITERRANEAN',
    title: 'THE AEGEAN PASSAGE',
    duration: '14 DAYS',
    vessel: 'OCEAN ECLIPSE',
    description: 'TRACE THE COASTLINE OF THE GREEK ISLANDS. FROM THE VOLCANIC CALDERA OF SANTORINI TO THE HIDDEN COVES OF MILOS, EACH ANCHORAGE IS CHOSEN FOR SOLITUDE AND BEAUTY.',
    highlights: ['PRIVATE ISLAND DINNERS', 'SNORKELLING AT SHIPWRECKS', 'LOCAL VINEYARD VISITS', 'SUNSET AT CAPE SOUNION'],
  },
  {
    region: 'CARIBBEAN',
    title: 'THE WINDWARD RUN',
    duration: '10 DAYS',
    vessel: 'BLACK SOVEREIGN',
    description: 'ISLAND-HOP FROM ST. BARTHS TO GRENADA ABOARD OUR PERFORMANCE YACHT. TRADE WINDS, TURQUOISE WATERS, AND COMPLETE PRIVACY.',
    highlights: ['MUSTIQUE BEACH CLUB ACCESS', 'DEEP-SEA FISHING EXCURSIONS', 'RUM DISTILLERY TOURS', 'TOBAGO CAYS MARINE PARK'],
  },
  {
    region: 'PACIFIC',
    title: 'THE CORAL EXPEDITION',
    duration: '21 DAYS',
    vessel: 'AZURE HORIZON',
    description: 'AN EXPEDITION-GRADE VOYAGE THROUGH THE SOUTH PACIFIC. EXPLORE REEFS, ATOLLS, AND COMMUNITIES UNTOUCHED BY MASS TOURISM.',
    highlights: ['MARINE BIOLOGIST ON BOARD', 'HELICOPTER TRANSFERS', 'DIVE CERTIFICATIONS', 'POLYNESIAN CULTURAL IMMERSIONS'],
  },
  {
    region: 'SCANDINAVIA',
    title: 'THE FJORD CROSSING',
    duration: '12 DAYS',
    vessel: 'AZURE HORIZON',
    description: 'NAVIGATE THE DRAMATIC FJORDS OF NORWAY. TOWERING CLIFFS, GLACIAL WATERS, AND MIDNIGHT SUN CREATE AN UNFORGETTABLE NORTHERN PASSAGE.',
    highlights: ['NORTHERN LIGHTS VIEWING', 'ARCTIC WILDLIFE ENCOUNTERS', 'FJORD-SIDE SAUNA SESSIONS', 'VIKING HERITAGE SITES'],
  },
]

export default function JourneysPage({ isOpen, onClose }: JourneysPageProps) {
  return (
    <PageOverlayShell isOpen={isOpen} onClose={onClose} pageName="JOURNEYS">
      <div style={{ padding: 'clamp(64px,8vw,100px) clamp(24px,6vw,96px)' }}>
        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <div style={{ width: 40, height: 1.5, background: 'var(--accent)', marginBottom: 16 }} />
          <div style={{ fontSize: 10, letterSpacing: '0.3em', color: 'var(--accent)', marginBottom: 16 }}>
            CURATED VOYAGES
          </div>
          <h1
            style={{
              fontSize: 'clamp(40px,6vw,80px)',
              fontWeight: 400,
              lineHeight: 0.95,
              color: '#0c0c0e',
              letterSpacing: '-0.01em',
            }}
            dangerouslySetInnerHTML={{ __html: 'JOURNEYS<br/>WITHOUT LIMITS.' }}
          />
        </div>

        {/* Journey cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {journeys.map((journey, i) => (
            <motion.div
              key={journey.title}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              style={{ padding: 48, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}
            >
              <div>
                <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                  <span style={{ fontSize: 8, letterSpacing: '0.3em', color: 'var(--accent)' }}>
                    {journey.region}
                  </span>
                  <span style={{ fontSize: 8, letterSpacing: '0.2em', color: 'rgba(12,12,14,0.3)' }}>
                    {journey.duration}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: 'clamp(24px,3vw,36px)',
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                    color: '#0c0c0e',
                    marginBottom: 12,
                    lineHeight: 1,
                  }}
                >
                  {journey.title}
                </h3>
                <div style={{ fontSize: 9, letterSpacing: '0.2em', color: 'rgba(12,12,14,0.4)', marginBottom: 20 }}>
                  ABOARD {journey.vessel}
                </div>
                <p style={{ fontSize: 10, lineHeight: 1.8, letterSpacing: '0.15em', color: 'rgba(12,12,14,0.52)' }}>
                  {journey.description}
                </p>
              </div>
              <div>
                <div style={{ fontSize: 8, letterSpacing: '0.3em', color: 'var(--accent)', marginBottom: 20 }}>
                  HIGHLIGHTS
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {journey.highlights.map((h) => (
                    <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                      <span style={{ fontSize: 9, letterSpacing: '0.18em', color: 'rgba(12,12,14,0.6)' }}>
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
                <button
                  style={{
                    marginTop: 32,
                    background: 'var(--accent)',
                    color: 'white',
                    padding: '12px 32px',
                    fontSize: 9,
                    letterSpacing: '0.22em',
                    borderRadius: 2,
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    textTransform: 'uppercase' as const,
                  }}
                >
                  ENQUIRE
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageOverlayShell>
  )
}
