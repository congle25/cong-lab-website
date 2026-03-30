import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const affiliations = [
  'Department of Pathology',
  'Department of Genetics',
  'Bio-X Institute',
  'Wu-Tsai Neuroscience Institute',
  'Cancer Institute',
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section style={{ minHeight: '88vh', display: 'flex', alignItems: 'center', padding: '6rem 1.5rem 4rem' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', width: '100%' }}>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-sage)',
              marginBottom: '1.5rem',
            }}
          >
            Stanford University · Lokey Stem Cell Research Building
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
              lineHeight: 1.1,
              color: 'var(--color-navy)',
              marginBottom: '2rem',
              fontStyle: 'italic',
            }}
          >
            Cong Lab
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 2.2vw, 1.3rem)',
              lineHeight: 1.65,
              color: '#4b5563',
              maxWidth: '640px',
              marginBottom: '3rem',
              fontWeight: 300,
            }}
          >
            Scalable AI-driven Genome Technology for Programming Immune and Stem Cells.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <Link to="/research" style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-background)',
              backgroundColor: 'var(--color-navy)',
              padding: '0.75rem 1.5rem',
              textDecoration: 'none',
              border: '1px solid var(--color-navy)',
              transition: 'background 0.2s, color 0.2s',
            }}>
              Our Research
            </Link>
            <Link to="/team" style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-navy)',
              backgroundColor: 'transparent',
              padding: '0.75rem 1.5rem',
              textDecoration: 'none',
              border: '1px solid var(--color-navy)',
              transition: 'background 0.2s, color 0.2s',
            }}>
              Meet the Team
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Affiliations bar */}
      <section style={{ backgroundColor: 'var(--color-bg-soft)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', padding: '2.5rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '1.5rem', textAlign: 'center' }}>
            Part of
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            {affiliations.map((aff) => (
              <motion.span
                key={aff}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  color: 'var(--color-navy)',
                  border: '1px solid var(--color-border)',
                  padding: '0.4rem 1rem',
                  borderRadius: '2px',
                  backgroundColor: 'var(--color-background)',
                }}
              >
                {aff}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Mission section */}
      <section style={{ padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: 'var(--color-navy)',
              lineHeight: 1.25,
              marginBottom: '1.5rem',
            }}
          >
            At the intersection of AI, genome engineering, and medicine
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.8, color: '#6b7280', marginBottom: '1rem' }}
          >
            We develop cutting-edge gene editing and AI technologies to understand and program the behavior of immune and stem cells. Our work spans fundamental biology and translational medicine — from CRISPR innovations to foundation models for genome design.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.8, color: '#6b7280' }}
          >
            We collaborate broadly across Stanford — in cancer immunology, neuroscience, cardiovascular disease, and stem cell biology — to address some of the most pressing problems in human health.
          </motion.p>
        </div>
      </section>

      {/* Research preview cards */}
      <section style={{ padding: '0 1.5rem 6rem', backgroundColor: 'var(--color-background)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '2.5rem' }}
          >
            Focus Areas
          </motion.p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: 'AI-driven Gene Editing', sub: 'CRISPR & Foundation Models', color: 'var(--color-navy)', link: '/research' },
              { title: 'Stem Cell Engineering', sub: 'Single-Cell & Rejuvenation', color: 'var(--color-sage)', link: '/research' },
              { title: 'Neuro-immune Diseases', sub: 'Cancer & Neurodegeneration', color: 'var(--color-coral)', link: '/research' },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to={card.link} style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{
                    border: '1px solid var(--color-border)',
                    padding: '2rem',
                    backgroundColor: 'var(--color-background)',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                    cursor: 'pointer',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = card.color; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.boxShadow = 'none' }}
                  >
                    <div style={{ width: '32px', height: '3px', backgroundColor: card.color, marginBottom: '1.5rem' }} />
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.4rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                      {card.title}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.08em', color: '#9ca3af', textTransform: 'uppercase' }}>
                      {card.sub}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
