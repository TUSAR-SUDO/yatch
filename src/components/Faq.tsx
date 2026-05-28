import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const faqData = [
  {
    question: 'HOW DOES MEMBERSHIP WORK?',
    answer:
      "MEMBERSHIP IS OFFERED ON AN ANNUAL BASIS ACROSS THREE TIERS: SIGNATURE, COMMODORE, AND FOUNDERS' CIRCLE. EACH TIER PROVIDES ESCALATING ACCESS TO OUR FLEET, EVENTS, AND CONCIERGE SERVICES. APPLICATIONS ARE REVIEWED BY OUR MEMBERSHIP COMMITTEE.",
  },
  {
    question: 'WHAT VESSELS ARE IN THE FLEET?',
    answer:
      'OUR FLEET COMPRISES THREE VESSELS: OCEAN ECLIPSE (28M CRUISER), BLACK SOVEREIGN (32M PERFORMANCE YACHT), AND AZURE HORIZON (25M EXPLORER). EACH IS MAINTAINED TO THE HIGHEST STANDARDS AND AVAILABLE EXCLUSIVELY TO MEMBERS.',
  },
  {
    question: 'CAN I CHARTER FOR CORPORATE EVENTS?',
    answer:
      'YES. WE OFFER FULL-SERVICE CORPORATE CHARTER PACKAGES INCLUDING CATERING, AUDIO-VISUAL EQUIPMENT, AND DEDICATED EVENT COORDINATORS. CONTACT OUR CONCIERGE TO DISCUSS YOUR REQUIREMENTS.',
  },
  {
    question: 'IS YORCH AVAILABLE INTERNATIONALLY?',
    answer:
      'YORCH OPERATES ACROSS THE MEDITERRANEAN, CARIBBEAN, AND PACIFIC REGIONS. SEASONAL REPOSITIONING ALLOWS ACCESS TO OPTIMAL CRUISING GROUNDS YEAR-ROUND.',
  },
  {
    question: 'HOW DO I JOIN THE RACING PROGRAMME?',
    answer:
      'THE RACING PROGRAMME IS AVAILABLE FROM COMMODORE TIER UPWARDS. MEMBERS RECEIVE FULL RACE CALENDAR ACCESS, COACHING, AND ENTRY TO OUR ANNUAL REGATTA SERIES.',
  },
  {
    question: 'WHAT DOES THE CONCIERGE SERVICE COVER?',
    answer:
      'OUR CONCIERGE HANDLES EVERYTHING FROM PROVISIONING AND BERTHING ARRANGEMENTS TO CUSTOMS CLEARANCE, RESTAURANT RESERVATIONS, AND BESPOKE SHORE EXCURSIONS. AVAILABLE 24/7 FOR ALL MEMBERS.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      style={{
        maxWidth: 800,
        margin: '0 auto',
        padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
        background: 'white',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 48 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
          <div style={{ width: 24, height: 1, background: 'var(--accent)' }} />
          <span style={{ fontSize: 10, letterSpacing: '0.3em', color: 'var(--accent)' }}>FAQ</span>
        </div>
        <h2
          style={{
            fontSize: 'clamp(40px,6vw,80px)',
            fontWeight: 400,
            lineHeight: 0.95,
            color: '#0c0c0e',
            letterSpacing: '-0.01em',
          }}
        >
          WHAT YOU NEED TO KNOW.
        </h2>
      </div>

      {/* FAQ Items */}
      <div>
        {faqData.map((item, i) => (
          <div key={i}>
            <div
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                padding: '24px 0',
                borderBottom: '1px solid rgba(12,12,14,0.08)',
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  letterSpacing: '0.12em',
                  color: openIndex === i ? '#0c0c0e' : 'rgba(12,12,14,0.6)',
                  transition: 'color 0.3s',
                }}
              >
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.4 }}
                style={{ fontSize: 14, color: 'rgba(12,12,14,0.3)' }}
              >
                ↓
              </motion.span>
            </div>

            <AnimatePresence mode="wait">
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <p
                    style={{
                      fontSize: 10,
                      lineHeight: 1.9,
                      letterSpacing: '0.15em',
                      color: 'rgba(12,12,14,0.52)',
                      padding: '0 0 24px',
                    }}
                  >
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}
