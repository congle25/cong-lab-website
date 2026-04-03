import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { representativePublications } from '../data/publications'

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
        }}>
          Publications
        </h1>
      </motion.div>

      {/* Stanford Profiles link */}
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

      {/* Representative publications */}
      <div style={{ marginBottom: '4rem' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '2rem' }}>
          Representative Publications
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {representativePublications.map((pub, i) => (
            <motion.a
              key={pub.id}
              href={pub.doi}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              style={{
                display: 'grid',
                gridTemplateColumns: pub.image ? '1fr auto' : '1fr',
                gap: 0,
                border: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-background)',
                textDecoration: 'none',
                transition: 'border-color 0.2s',
              }}
              className="pub-card"
            >
              {/* Text */}
              <div style={{ padding: '1.5rem 2rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-sage)',
                    border: '1px solid var(--color-sage)',
                    padding: '0.15rem 0.5rem',
                  }}>
                    {pub.journal}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    letterSpacing: '0.08em',
                    color: '#9ca3af',
                    padding: '0.15rem 0',
                  }}>
                    {pub.year}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  fontSize: '1.1rem',
                  color: 'var(--color-navy)',
                  lineHeight: 1.35,
                  marginBottom: '0.5rem',
                }}>
                  {pub.title}
                </h3>

                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.82rem',
                  color: '#9ca3af',
                  fontStyle: 'italic',
                  marginBottom: '0.75rem',
                }}>
                  {pub.authors}
                </p>

                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {pub.tags.map(tag => (
                    <span key={tag} style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6rem',
                      letterSpacing: '0.06em',
                      color: '#9ca3af',
                      border: '1px solid var(--color-border)',
                      padding: '0.15rem 0.4rem',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Thumbnail */}
              {pub.image && (
                <div style={{
                  width: '180px',
                  borderLeft: '1px solid var(--color-border)',
                  flexShrink: 0,
                  overflow: 'hidden',
                }}
                  className="pub-thumb"
                >
                  <img
                    src={pub.image}
                    alt={pub.imageCaption}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                  />
                </div>
              )}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Software link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          border: '1px solid var(--color-border)',
          padding: '2.5rem',
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
            Open Source
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.5rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
            Software & Tools
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: '#6b7280' }}>
            LabOS, LabClaw, CRISPR-GPT, CLOVER, and more — open-source platforms and tools from the lab.
          </p>
        </div>
        <Link
          to="/software"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--color-navy)',
            padding: '0.75rem 1.5rem',
            textDecoration: 'none',
            border: '1px solid var(--color-navy)',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          View Software →
        </Link>
      </motion.div>

      <style>{`
        .pub-card:hover { border-color: var(--color-navy) !important; }
        @media (max-width: 640px) {
          .pub-thumb { display: none !important; }
        }
      `}</style>
    </div>
  )
}
