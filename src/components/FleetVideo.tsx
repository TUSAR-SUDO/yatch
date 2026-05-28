import { motion } from 'motion/react'

interface FleetSpec {
  label: string
  value: string
}

interface FleetVideoProps {
  videoSrc: string
  name: string
  specs: FleetSpec[]
  delay: number
  isOpen: boolean
}

export default function FleetVideo({ videoSrc, name, specs, delay }: FleetVideoProps) {
  return (
    <div
      style={{
        width: '33.333%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9 + delay, ease: [0.19, 1, 0.22, 1], delay }}
        style={{ width: '100%', height: '100%', position: 'relative' }}
      >
        <video
          src={videoSrc}
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

        {/* Dark gradient bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '55%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)',
            pointerEvents: 'none',
          }}
        />

        {/* Info block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: 40,
          }}
        >
          <h3
            style={{
              fontSize: 'clamp(28px,2.5vw,44px)',
              color: 'white',
              letterSpacing: '-0.01em',
              marginBottom: 20,
              fontWeight: 400,
            }}
          >
            {name}
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px 24px',
            }}
          >
            {specs.map((spec) => (
              <div key={spec.label}>
                <div
                  style={{
                    fontSize: 8,
                    letterSpacing: '0.3em',
                    color: 'rgba(255,255,255,0.4)',
                    marginBottom: 4,
                  }}
                >
                  {spec.label}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    letterSpacing: '0.1em',
                    color: 'white',
                  }}
                >
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
