import { motion } from 'framer-motion'
import { softwareTools } from '../data/software'

export default function Publications() {
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
          Research Outputs
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
          Publications & Software
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.75, color: '#6b7280', fontWeight: 300 }}>
          A full list of publications is maintained on Stanford Profiles. Below you'll also find our open-source software tools.
        </p>
      </motion.div>

      {/* Publications link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          border: '1px solid var(--color-border)',
          padding: '2.5rem',
          marginBottom: '4rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
          backgroundColor: 'var(--color-background)',
        }}
      >
        <div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '0.5rem' }}>
            Full Publication List
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.5rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
            Stanford Profiles
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: '#6b7280' }}>
            All publications, citations, and metrics maintained on Stanford's academic profile system.
          </p>
        </div>
        <a
          href="https://profiles.stanford.edu/186687?tab=publications"
          target="_blank"
          rel="noreferrer"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--color-background)',
            backgroundColor: 'var(--color-navy)',
            padding: '0.75rem 1.5rem',
            textDecoration: 'none',
            border: '1px solid var(--color-navy)',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          View Publications →
        </a>
      </motion.div>

      {/* Software tools */}
      <div>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '2rem' }}>
          Software & Tools
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {softwareTools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                border: '1px solid var(--color-border)',
                padding: '2rem',
                backgroundColor: 'var(--color-background)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.5rem', color: 'var(--color-navy)', marginBottom: '0.25rem' }}>
                    {tool.name}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#6b7280', fontStyle: 'italic' }}>
                    {tool.tagline}
                  </p>
                </div>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--color-sage)',
                  border: '1px solid var(--color-sage)',
                  padding: '0.25rem 0.65rem',
                  whiteSpace: 'nowrap',
                }}>
                  {tool.status}
                </span>
              </div>

              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.7, color: '#6b7280', marginBottom: '1.5rem', maxWidth: '640px' }}>
                {tool.description}
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
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
                {tool.demo && (
                  <a href={tool.demo} target="_blank" rel="noreferrer" style={btnFilled}>
                    Try Demo →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
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
