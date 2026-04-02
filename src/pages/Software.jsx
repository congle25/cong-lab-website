import { motion } from 'framer-motion'
import { softwareTools } from '../data/software'

export default function Software() {
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
          Open Source
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
          Software & Tools
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.75, color: '#6b7280', fontWeight: 300 }}>
          Open-source platforms, AI agents, and web tools developed by the Cong Lab for biomedical research and gene editing.
        </p>
      </motion.div>

      {/* Tool cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {softwareTools.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            style={{
              border: '1px solid var(--color-border)',
              backgroundColor: 'var(--color-background)',
              display: 'grid',
              gridTemplateColumns: tool.image ? '1fr 1fr' : '1fr',
              gap: '0',
            }}
            className="software-card"
          >
            {/* Left: content */}
            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.6rem', color: 'var(--color-navy)', margin: 0 }}>
                  {tool.name}
                </h2>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--color-sage)',
                  border: '1px solid var(--color-sage)',
                  padding: '0.2rem 0.6rem',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}>
                  {tool.status}
                </span>
              </div>

              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#6b7280', fontStyle: 'italic', marginBottom: '1rem' }}>
                {tool.tagline}
              </p>

              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.75, color: '#6b7280', marginBottom: '1.5rem' }}>
                {tool.description}
              </p>

              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                {tool.tags.map(tag => (
                  <span key={tag} style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    letterSpacing: '0.06em',
                    color: '#9ca3af',
                    border: '1px solid var(--color-border)',
                    padding: '0.2rem 0.5rem',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {tool.github && (
                  <a href={tool.github} target="_blank" rel="noreferrer" style={btnOutline}>
                    GitHub →
                  </a>
                )}
                {tool.website && (
                  <a href={tool.website} target="_blank" rel="noreferrer" style={btnFilled}>
                    Website →
                  </a>
                )}
                {tool.demo && (
                  <a href={tool.demo} target="_blank" rel="noreferrer" style={btnFilled}>
                    Try Demo →
                  </a>
                )}
              </div>
            </div>

            {/* Right: image */}
            {tool.image && (
              <div style={{ borderLeft: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column' }}>
                <img
                  src={tool.image}
                  alt={tool.imageCaption}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block', minHeight: '200px', maxHeight: '320px' }}
                />
                {tool.imageCaption && (
                  <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.05em',
                    color: '#9ca3af',
                    padding: '0.5rem 0.75rem',
                    lineHeight: 1.5,
                    borderTop: '1px solid var(--color-border)',
                  }}>
                    {tool.imageCaption}
                  </p>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .software-card { grid-template-columns: 1fr !important; }
          .software-card > div:last-child { border-left: none !important; border-top: 1px solid var(--color-border); }
        }
      `}</style>
    </div>
  )
}

const btnOutline = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.7rem',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--color-navy)',
  border: '1px solid var(--color-navy)',
  padding: '0.5rem 1rem',
  textDecoration: 'none',
}

const btnFilled = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.7rem',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--color-background)',
  backgroundColor: 'var(--color-sage)',
  border: '1px solid var(--color-sage)',
  padding: '0.5rem 1rem',
  textDecoration: 'none',
}
