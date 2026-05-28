import { motion } from 'motion/react'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  return (
    <section
      style={{
        background: 'var(--bg-base)',
        padding: 'clamp(80px,10vw,140px) 0',
      }}
    >
      {/* Section Header */}
      <div style={{ paddingLeft: 'clamp(24px,6vw,96px)', marginBottom: 48 }}>
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
            marginTop: 0,
          }}
        >
          MEMBER VOICES
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
          THOSE WHO KNOW.
        </h2>
      </div>

      {/* Horizontal Scroll Rail */}
      <div
        className="testimonial-rail scrollbar-hide"
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          gap: 20,
          paddingLeft: 'clamp(24px,6vw,96px)',
          paddingRight: 'clamp(24px,6vw,96px)',
        }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="card"
            style={{
              flexShrink: 0,
              width: 'clamp(280px,30vw,380px)',
              padding: 36,
            }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.07,
            }}
          >
            {/* Quote */}
            <p
              style={{
                fontStyle: 'italic',
                fontSize: 12,
                lineHeight: 1.9,
                color: 'rgba(12,12,14,0.7)',
                marginBottom: 28,
                margin: 0,
              }}
            >
              "{t.quote}"
            </p>

            {/* Divider */}
            <div
              style={{
                width: 24,
                height: 1,
                background: 'var(--accent)',
                marginBottom: 20,
                marginTop: 28,
              }}
            />

            {/* Name */}
            <p
              style={{
                fontSize: 11,
                letterSpacing: '0.2em',
                color: '#0c0c0e',
                marginBottom: 4,
                margin: 0,
              }}
            >
              {t.name}
            </p>

            {/* Role + Tag */}
            <p
              style={{
                fontSize: 9,
                letterSpacing: '0.2em',
                color: 'rgba(12,12,14,0.4)',
                margin: 0,
                marginTop: 4,
              }}
            >
              {t.role} — {t.tag}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
