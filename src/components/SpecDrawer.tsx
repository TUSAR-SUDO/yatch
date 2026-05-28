import { motion, AnimatePresence } from 'motion/react'
import { yachts } from '../data/yachts'

interface SpecDrawerProps {
  yachtId: string | null
  onClose: () => void
}

export default function SpecDrawer({ yachtId, onClose }: SpecDrawerProps) {
  const yacht = yachts.find((y) => y.id === yachtId)

  return (
    <AnimatePresence>
      {yachtId && yacht && (
        <>
          {/* Backdrop */}
          <motion.div
            key="spec-backdrop"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 199,
              background: 'rgba(0,0,0,0.4)',
            }}
          />

          {/* Drawer */}
          <motion.div
            key="spec-drawer"
            className="spec-drawer"
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: 440,
              height: '100vh',
              zIndex: 200,
              overflowY: 'auto',
            }}
          >
            {/* Content */}
            <div style={{ padding: 40 }}>
              {/* Close button */}
              <button
                onClick={onClose}
                style={{
                  position: 'absolute',
                  top: 20,
                  right: 20,
                  background: 'none',
                  border: '1px solid rgba(12,12,14,0.15)',
                  borderRadius: 2,
                  width: 36,
                  height: 36,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: 16,
                  color: 'rgba(12,12,14,0.5)',
                }}
              >
                ×
              </button>

              {/* Yacht name */}
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                  color: '#0c0c0e',
                  marginBottom: 8,
                }}
              >
                {yacht.name}
              </div>

              {/* Tagline */}
              <div
                style={{
                  fontSize: 9,
                  letterSpacing: '0.25em',
                  color: 'rgba(12,12,14,0.4)',
                  marginBottom: 40,
                }}
              >
                {yacht.tagline}
              </div>

              {/* Spec categories */}
              {yacht.fullSpecs.map((category, catIdx) => (
                <div
                  key={category.category}
                  style={{
                    marginBottom:
                      catIdx < yacht.fullSpecs.length - 1 ? 32 : 0,
                  }}
                >
                  {/* Category header */}
                  <div
                    style={{
                      fontSize: 9,
                      letterSpacing: '0.3em',
                      color: 'var(--accent)',
                      marginBottom: 16,
                      paddingBottom: 8,
                      borderBottom: '1px solid rgba(12,12,14,0.06)',
                    }}
                  >
                    {category.category}
                  </div>

                  {/* Specs list */}
                  {category.specs.map((spec) => (
                    <div
                      key={spec.label}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingTop: 8,
                        paddingBottom: 8,
                        borderBottom: '1px solid rgba(12,12,14,0.04)',
                      }}
                    >
                      <span
                        style={{
                          fontSize: 9,
                          letterSpacing: '0.15em',
                          color: 'rgba(12,12,14,0.45)',
                        }}
                      >
                        {spec.label}
                      </span>
                      <span
                        style={{
                          fontSize: 10,
                          letterSpacing: '0.1em',
                          color: '#0c0c0e',
                          textAlign: 'right',
                        }}
                      >
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
