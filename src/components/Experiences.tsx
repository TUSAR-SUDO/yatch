import { motion } from 'motion/react';

interface ExperienceCard {
  category: string;
  title: string;
  description: string;
}

const cards: ExperienceCard[] = [
  {
    category: 'PRIVATE CHARTER',
    title: 'VESSEL & CREW',
    description:
      'CUSTOM ITINERARIES ACROSS MEDITERRANEAN TO PACIFIC. YOUR VESSEL, YOUR CREW, YOUR SCHEDULE — NOTHING SHARED.',
  },
  {
    category: 'RACING PROGRAM',
    title: 'OFFSHORE & INSHORE',
    description:
      'JOIN OUR COMPETITIVE RACING CALENDAR. FROM COASTAL REGATTAS TO OFFSHORE PASSAGES, RACING BUILDS SEAMANSHIP.',
  },
  {
    category: 'CONCIERGE',
    title: '24 / 7 ACCESS',
    description:
      'EVERY DETAIL HANDLED — PROVISIONING, BERTHING, CUSTOMS, DINING, AND SHORE EXCURSIONS ARRANGED BEFORE YOU ARRIVE.',
  },
];

const Experiences = () => {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <video
        src="/videos/experiences-bg.mp4"
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
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '100vh',
          padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
          gap: '80px',
          alignContent: 'center',
        }}
      >
        {/* Left Column */}
        <div>
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
              CURATED FOR MEMBERS
            </span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(36px,4.5vw,72px)',
              fontWeight: 400,
              lineHeight: 0.95,
              color: 'white',
            }}
            dangerouslySetInnerHTML={{
              __html: 'LIFE BEYOND<br/>THE HORIZON',
            }}
          />
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {cards.map((card, i) => (
            <motion.div
              key={card.category}
              className="glass-card"
              style={{ padding: '24px 28px' }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.12,
              }}
            >
              <div
                style={{
                  fontSize: '8px',
                  letterSpacing: '0.3em',
                  color: 'rgba(147,197,253,0.7)',
                  marginBottom: '8px',
                }}
              >
                {card.category}
              </div>
              <div
                style={{
                  fontSize: '18px',
                  color: 'white',
                  letterSpacing: '0.05em',
                  marginBottom: '12px',
                }}
              >
                {card.title}
              </div>
              <div
                style={{
                  fontSize: '10px',
                  lineHeight: 1.8,
                  letterSpacing: '0.15em',
                  color: 'rgba(255,255,255,0.55)',
                }}
              >
                {card.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
