import { motion } from 'motion/react';

const BrandManifesto = () => {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <video
        src="/videos/manifesto-bg.mp4"
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

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          minHeight: '100vh',
          padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.96, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card"
          style={{
            maxWidth: '520px',
            padding: 'clamp(36px,4vw,56px)',
            borderRadius: '4px',
            textAlign: 'left',
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '24px',
            }}
          >
            <div
              style={{
                width: '24px',
                height: '1px',
                background: 'rgba(147,197,253,0.6)',
              }}
            />
            <span
              style={{
                fontSize: '10px',
                letterSpacing: '0.3em',
                color: 'rgba(147,197,253,0.85)',
              }}
            >
              THE YORCH PHILOSOPHY
            </span>
          </div>

          {/* Heading */}
          <h2
            style={{
              fontSize: 'clamp(32px,4vw,64px)',
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: '-0.01em',
              color: 'white',
              marginBottom: '32px',
            }}
            dangerouslySetInnerHTML={{
              __html: 'PRIVATE ACCESS.<br/><em>OPEN HORIZONS.</em>',
            }}
          />

          {/* Paragraph */}
          <p
            style={{
              fontSize: '11px',
              lineHeight: 1.9,
              letterSpacing: '0.14em',
              color: 'rgba(255,255,255,0.6)',
            }}
          >
            WE CURATE EXPERIENCES FOR THOSE WHO EXPECT STILLNESS, POWER, AND
            PRECISION AT SEA. SINCE 1975, THOSE WHO DEMAND THE FINEST HAVE
            TRUSTED ONE NAME.
          </p>

          {/* Button */}
          <button
            style={{
              marginTop: '40px',
              padding: '14px 36px',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '2px',
              backdropFilter: 'blur(8px)',
              color: 'white',
              fontSize: '10px',
              letterSpacing: '0.25em',
              cursor: 'pointer',
              transition: 'background 0.3s',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')
            }
          >
            OUR STORY
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandManifesto;
