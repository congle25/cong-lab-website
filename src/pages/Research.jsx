import { motion } from 'framer-motion'
import { researchAreas } from '../data/research'

const colorMap = {
  navy: 'var(--color-navy)',
  sage: 'var(--color-sage)',
  coral: 'var(--color-coral)',
}

export default function Research() {
  return (
    <div style={{ padding: '5rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '4rem', maxWidth: '640px' }}
      >
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '1rem' }}>
          Focus Areas
        </p>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 300,
          fontStyle: 'italic',
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          color: 'var(--color-navy)',
          lineHeight: 1.15,
          marginBottom: '1.25rem',
        }}>
          Research
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.75, color: '#6b7280', fontWeight: 300 }}>
          We integrate AI, genome engineering, and cell biology to tackle fundamental questions and develop therapeutic strategies for human disease.
        </p>
      </motion.div>

      {/* Research areas */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {researchAreas.map((area, i) => (
          <motion.div
            key={area.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
          >
            <div style={{
              border: '1px solid var(--color-border)',
              padding: '2.5rem',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              alignItems: 'start',
              backgroundColor: 'var(--color-background)',
            }}
              className="research-card"
            >
              <div>
                <div style={{ width: '40px', height: '3px', backgroundColor: colorMap[area.color], marginBottom: '1.5rem' }} />
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: colorMap[area.color], marginBottom: '0.75rem' }}>
                  {area.subtitle}
                </p>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                  color: 'var(--color-navy)',
                  lineHeight: 1.2,
                  marginBottom: '1.25rem',
                }}>
                  {area.title}
                </h2>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.75, color: '#6b7280' }}>
                  {area.description}
                </p>
              </div>

              <div>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '1.25rem' }}>
                  Topics
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: area.image ? '1.5rem' : 0 }}>
                  {area.details.map((detail) => (
                    <li key={detail} style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      color: '#4b5563',
                      padding: '0.7rem 0',
                      borderBottom: '1px solid var(--color-border)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                    }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: colorMap[area.color], flexShrink: 0 }} />
                      {detail}
                    </li>
                  ))}
                </ul>
                {area.image && (
                  <figure style={{ margin: 0 }}>
                    <img
                      src={area.image}
                      alt={area.imageCaption}
                      style={{ width: '100%', display: 'block', border: '1px solid var(--color-border)' }}
                    />
                    <figcaption style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6rem',
                      letterSpacing: '0.05em',
                      color: '#9ca3af',
                      marginTop: '0.5rem',
                      lineHeight: 1.5,
                    }}>
                      {area.imageCaption}
                    </figcaption>
                  </figure>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Collaborative note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          marginTop: '4rem',
          padding: '2.5rem',
          backgroundColor: 'var(--color-bg-soft)',
          border: '1px solid var(--color-border)',
        }}
      >
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '0.75rem' }}>
          Collaborative Research
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.75, color: '#6b7280', maxWidth: '640px' }}>
          We actively collaborate across Stanford in stem cell biology, cardiovascular research, cancer immunology, lung disease, and neuroscience. We welcome new partnerships — reach out to discuss opportunities.
        </p>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .research-card { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </div>
  )
}
