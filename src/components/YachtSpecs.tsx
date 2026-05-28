import { motion } from 'motion/react'
import { useState } from 'react'
import { yachts } from '../data/yachts'
import SpecDrawer from './SpecDrawer'

const tagLabels = ['FLAGSHIP', 'PERFORMANCE', 'EXPLORER']

export default function YachtSpecs() {
  const [selectedYacht, setSelectedYacht] = useState<string | null>(null)

  return (
    <section
      style={{
        backgroundColor: 'var(--bg-base)',
        padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
      }}
    >
      {/* Header */}
      <div>
        <div
          style={{
            width: 40,
            height: 1.5,
            background: 'var(--accent)',
            marginBottom: 16,
          }}
        />
        <div
          style={{
            fontSize: 10,
            letterSpacing: '0.3em',
            color: 'var(--accent)',
            marginBottom: 16,
          }}
        >
          THE FLEET
        </div>
        <h2
          dangerouslySetInnerHTML={{
            __html: 'THREE VESSELS.<br/>ONE STANDARD.',
          }}
          style={{
            fontSize: 'clamp(40px,6vw,80px)',
            fontWeight: 400,
            lineHeight: 0.95,
            color: '#0c0c0e',
            marginBottom: 64,
            letterSpacing: '-0.01em',
          }}
        />
      </div>

      {/* 3-column grid */}
      <div
        style={{
          display: 'grid',
          gap: 16,
          gridTemplateColumns: 'repeat(3, 1fr)',
        }}
      >
        {yachts.map((yacht, i) => (
          <motion.div
            key={yacht.id}
            className="yacht-card"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.12,
            }}
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 4,
              border: '1px solid rgba(12,12,14,0.06)',
              background: 'white',
            }}
          >
            {/* Video Portion */}
            <div
              style={{
                position: 'relative',
                aspectRatio: '9/16',
                overflow: 'hidden',
              }}
            >
              <video
                className="yacht-card-video"
                src={`/videos/fleet-${yacht.id}.mp4`}
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.8s var(--ease-luxury)',
                }}
              />

              {/* Bottom gradient overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '60%',
                  background:
                    'linear-gradient(to top, rgba(10,15,26,0.85) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)',
                }}
              />

              {/* Tag badge */}
              <div
                style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  background: 'rgba(0,0,0,0.2)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: 100,
                  padding: '6px 14px',
                  fontSize: 8,
                  letterSpacing: '0.3em',
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.15)',
                }}
              >
                {tagLabels[i]}
              </div>

              {/* Yacht info */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 20,
                  left: 20,
                }}
              >
                <div
                  style={{
                    fontSize: 8,
                    letterSpacing: '0.25em',
                    color: 'rgba(255,255,255,0.5)',
                    marginBottom: 4,
                  }}
                >
                  {yacht.tagline}
                </div>
                <div
                  style={{
                    fontSize: 17,
                    letterSpacing: '0.08em',
                    color: 'white',
                  }}
                >
                  {yacht.name}
                </div>
              </div>
            </div>

            {/* Info Panel */}
            <div style={{ background: 'white', padding: '24px 24px 28px' }}>
              {/* 4-column stat grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4,1fr)',
                  gap: '8px 4px',
                  marginBottom: 20,
                }}
              >
                {yacht.quickSpecs.slice(0, 4).map((spec) => (
                  <div key={spec.label}>
                    <div
                      style={{
                        fontSize: 8,
                        letterSpacing: '0.25em',
                        color: 'rgba(12,12,14,0.38)',
                        marginBottom: 2,
                      }}
                    >
                      {spec.label}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        letterSpacing: '0.1em',
                        color: 'var(--accent)',
                        fontWeight: 400,
                      }}
                    >
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Two buttons */}
              <div style={{ display: 'flex', gap: 8 }}>
                <button
                  onClick={() => setSelectedYacht(yacht.id)}
                  style={{
                    background: 'var(--accent)',
                    color: 'white',
                    padding: '10px 0',
                    flex: 1,
                    fontSize: 9,
                    letterSpacing: '0.2em',
                    borderRadius: 2,
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  QUICK SPECS
                </button>
                <button
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(12,12,14,0.5)',
                    color: 'rgba(12,12,14,0.5)',
                    padding: '10px 0',
                    flex: 1,
                    fontSize: 9,
                    letterSpacing: '0.2em',
                    borderRadius: 2,
                    cursor: 'pointer',
                  }}
                >
                  FULL SHEET
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Compare button */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
        <button
          style={{
            background: 'var(--accent)',
            color: 'white',
            padding: '14px 40px',
            fontSize: 10,
            letterSpacing: '0.22em',
            borderRadius: 2,
            border: 'none',
            cursor: 'pointer',
          }}
        >
          COMPARE ALL THREE
        </button>
      </div>

      <SpecDrawer
        yachtId={selectedYacht}
        onClose={() => setSelectedYacht(null)}
      />
    </section>
  )
}
