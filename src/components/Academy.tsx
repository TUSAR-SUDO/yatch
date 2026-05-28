import { motion } from 'motion/react';

interface Module {
  number: string;
  title: string;
  description: string;
  progress: number;
}

const modules: Module[] = [
  {
    number: '01',
    title: 'OCEAN NAVIGATION',
    description:
      'CELESTIAL AND ELECTRONIC NAVIGATION FUNDAMENTALS FOR OPEN-WATER PASSAGES.',
    progress: 75,
  },
  {
    number: '02',
    title: 'METEOROLOGY',
    description:
      'READING WEATHER SYSTEMS, ROUTING STRATEGIES, AND STORM AVOIDANCE PROTOCOLS.',
    progress: 60,
  },
  {
    number: '03',
    title: 'SEAMANSHIP',
    description:
      'ADVANCED BOAT HANDLING, DOCKING, ANCHORING, AND HEAVY-WEATHER TECHNIQUES.',
    progress: 85,
  },
  {
    number: '04',
    title: 'RACE TACTICS',
    description:
      'START SEQUENCES, MARK ROUNDING, WIND SHIFTS, AND TACTICAL DECISION-MAKING.',
    progress: 50,
  },
  {
    number: '05',
    title: 'ENGINEERING SYSTEMS',
    description:
      'MARINE DIESEL, ELECTRICAL SYSTEMS, WATERMAKERS, AND ONBOARD DIAGNOSTICS.',
    progress: 40,
  },
  {
    number: '06',
    title: 'LEADERSHIP AT SEA',
    description:
      'CREW MANAGEMENT, WATCH SYSTEMS, COMMUNICATION, AND EMERGENCY COMMAND.',
    progress: 70,
  },
];

const Academy = () => {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <video
        src="/videos/academy-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 1,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: '60px' }}>
          <div
            style={{
              fontSize: '10px',
              letterSpacing: '0.3em',
              color: 'rgba(147,197,253,0.85)',
              marginBottom: '16px',
            }}
          >
            YORCH ACADEMY
          </div>
          <h2
            style={{
              fontSize: 'clamp(40px,6vw,80px)',
              fontWeight: 400,
              lineHeight: 0.9,
              color: 'white',
              maxWidth: '600px',
            }}
            dangerouslySetInnerHTML={{
              __html: 'MASTER THE<br />SEA.<br /><em>MASTER<br/>YOURSELF.</em>',
            }}
          />
        </div>

        {/* Module Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: '16px',
            marginTop: '48px',
          }}
        >
          {modules.map((mod, i) => (
            <div
              key={mod.number}
              className="glass-mid"
              style={{ padding: '28px 28px 24px', borderRadius: '4px' }}
            >
              <div
                style={{
                  fontSize: '64px',
                  color: 'rgba(255,255,255,0.08)',
                  lineHeight: 1,
                  marginBottom: '-8px',
                }}
              >
                {mod.number}
              </div>
              <div
                style={{
                  fontSize: '8px',
                  letterSpacing: '0.35em',
                  color: 'rgba(147,197,253,0.6)',
                  marginBottom: '10px',
                }}
              >
                MODULE
              </div>
              <div
                style={{
                  fontSize: '13px',
                  letterSpacing: '0.12em',
                  color: 'white',
                  marginBottom: '8px',
                }}
              >
                {mod.title}
              </div>
              <div
                style={{
                  fontSize: '9px',
                  lineHeight: 1.8,
                  color: 'rgba(255,255,255,0.5)',
                }}
              >
                {mod.description}
              </div>

              {/* Progress Bar */}
              <div
                style={{
                  marginTop: '16px',
                  height: '2px',
                  background: 'rgba(255,255,255,0.08)',
                  borderRadius: '1px',
                  overflow: 'hidden',
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${mod.progress}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    delay: i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    background: 'var(--accent)',
                    height: '100%',
                    borderRadius: '1px',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academy;
