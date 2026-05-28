import { motion } from 'motion/react'
import PageOverlayShell from '../components/PageOverlayShell'

interface BlogProps {
  isOpen: boolean
  onClose: () => void
}

const articles = [
  {
    category: 'VOYAGES',
    title: 'THE AEGEAN CROSSING: A PHOTOGRAPHIC JOURNAL',
    excerpt: 'FOURTEEN DAYS, THREE ISLANDS, ONE VESSEL. OUR CREW CAPTURES THE ESSENCE OF A PRIVATE PASSAGE THROUGH THE GREEK ARCHIPELAGO.',
    date: 'MARCH 2025',
  },
  {
    category: 'FLEET',
    title: 'BLACK SOVEREIGN: THE FIRST 500 HOURS',
    excerpt: 'A PERFORMANCE REVIEW OF OUR FLAGSHIP AFTER HER MAIDEN SEASON. ENGINEERING, HANDLING, AND THE DETAILS THAT DEFINE HER.',
    date: 'FEBRUARY 2025',
  },
  {
    category: 'LIFESTYLE',
    title: 'THE ART OF PROVISIONING',
    excerpt: 'HOW OUR CONCIERGE TEAM SOURCES THE FINEST INGREDIENTS FOR ONBOARD DINING — FROM LOCAL MARKETS TO MICHELIN-STARRED COLLABORATIONS.',
    date: 'JANUARY 2025',
  },
  {
    category: 'RACING',
    title: 'REGATTA SEASON REVIEW 2024',
    excerpt: 'A LOOK BACK AT THE HIGHLIGHTS, THE PODIUM FINISHES, AND THE LESSONS LEARNED ACROSS OUR MOST COMPETITIVE SEASON YET.',
    date: 'DECEMBER 2024',
  },
  {
    category: 'ACADEMY',
    title: 'NAVIGATION IN THE AGE OF ELECTRONICS',
    excerpt: 'WHY CELESTIAL NAVIGATION STILL MATTERS, AND HOW OUR ACADEMY BRIDGES TRADITION WITH MODERN TECHNOLOGY.',
    date: 'NOVEMBER 2024',
  },
  {
    category: 'MEMBERSHIP',
    title: 'INSIDE THE FOUNDERS\' CIRCLE',
    excerpt: 'AN EXCLUSIVE LOOK AT THE PRIVILEGES, THE COMMUNITY, AND THE PHILOSOPHY BEHIND OUR MOST DISTINGUISHED MEMBERSHIP TIER.',
    date: 'OCTOBER 2024',
  },
]

export default function Blog({ isOpen, onClose }: BlogProps) {
  return (
    <PageOverlayShell isOpen={isOpen} onClose={onClose} pageName="BLOG">
      <div style={{ padding: 'clamp(64px,8vw,100px) clamp(24px,6vw,96px)' }}>
        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <div style={{ width: 40, height: 1.5, background: 'var(--accent)', marginBottom: 16 }} />
          <div style={{ fontSize: 10, letterSpacing: '0.3em', color: 'var(--accent)', marginBottom: 16 }}>
            JOURNAL
          </div>
          <h1
            style={{
              fontSize: 'clamp(40px,6vw,80px)',
              fontWeight: 400,
              lineHeight: 0.95,
              color: '#0c0c0e',
              letterSpacing: '-0.01em',
            }}
            dangerouslySetInnerHTML={{ __html: 'STORIES FROM<br/>THE SEA.' }}
          />
        </div>

        {/* Articles grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 24,
          }}
        >
          {articles.map((article, i) => (
            <motion.div
              key={article.title}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              style={{ padding: 36, cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                <span style={{ fontSize: 8, letterSpacing: '0.3em', color: 'var(--accent)' }}>
                  {article.category}
                </span>
                <span style={{ fontSize: 8, letterSpacing: '0.2em', color: 'rgba(12,12,14,0.3)' }}>
                  {article.date}
                </span>
              </div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 400,
                  letterSpacing: '0.05em',
                  color: '#0c0c0e',
                  marginBottom: 16,
                  lineHeight: 1.3,
                }}
              >
                {article.title}
              </h3>
              <p
                style={{
                  fontSize: 10,
                  lineHeight: 1.8,
                  letterSpacing: '0.15em',
                  color: 'rgba(12,12,14,0.52)',
                }}
              >
                {article.excerpt}
              </p>
              <div
                style={{
                  marginTop: 24,
                  fontSize: 9,
                  letterSpacing: '0.22em',
                  color: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                READ MORE
                <span style={{ fontSize: 12 }}>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageOverlayShell>
  )
}
