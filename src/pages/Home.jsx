import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { representativePublications } from '../data/publications'


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
      <section style={{ minHeight: '88vh', display: 'grid', gridTemplateColumns: '1fr 1fr', overflow: 'hidden' }} className="hero-section">
        {/* Left: text */}
        <div style={{ display: 'flex', alignItems: 'center', padding: '6rem 3rem 4rem 1.5rem' }}>
          <div style={{ maxWidth: '520px', width: '100%' }}>
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
                fontSize: 'clamp(2.8rem, 5vw, 5.5rem)',
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
                fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                lineHeight: 1.7,
                color: '#4b5563',
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
              }}>
                Meet the Team
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Right: image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderLeft: '1px solid var(--color-border)',
          }}
        >
          <img
            src={`${import.meta.env.BASE_URL}images/dna-stock.jpg`}
            alt="DNA strand visualization"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
              filter: 'saturate(0.85)',
            }}
          />
          {/* Subtle overlay gradient to blend with page background */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, var(--color-background) 0%, transparent 18%)',
            pointerEvents: 'none',
          }} />
        </motion.div>
      </section>

      {/* Affiliations strip */}
      <section style={{ backgroundColor: 'var(--color-bg-soft)', borderBottom: '1px solid var(--color-border)', padding: '1.25rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9ca3af', marginRight: '0.5rem' }}>
            Part of
          </span>
          {affiliations.map((aff) => (
            <span key={aff} style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              letterSpacing: '0.06em',
              color: 'var(--color-navy)',
              padding: '0.25rem 0.75rem',
              border: '1px solid var(--color-border)',
              backgroundColor: 'var(--color-background)',
            }}>
              {aff}
            </span>
          ))}
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                title: 'AI-driven Gene Editing',
                sub: 'CRISPR & Foundation Models',
                color: 'var(--color-navy)',
                image: `${import.meta.env.BASE_URL}images/crispr-gpt-fig1.png`,
                caption: 'CRISPR-GPT · Nature Biomed. Eng. 2025',
              },
              {
                title: 'Stem Cell Engineering',
                sub: 'Single-Cell & Rejuvenation',
                color: 'var(--color-sage)',
                image: `${import.meta.env.BASE_URL}images/daisy-fig1.jpg`,
                caption: 'DAISY · Molecular Cell 2022',
              },
              {
                title: 'Neuro-immune Diseases',
                sub: 'Cancer & Neurodegeneration',
                color: 'var(--color-coral)',
                image: `${import.meta.env.BASE_URL}images/rgc-neuron-fig1.jpg`,
                caption: 'RGC transcriptomics · Neuron 2022',
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to="/research" style={{ textDecoration: 'none', display: 'block' }}>
                  <div
                    style={{
                      border: '1px solid var(--color-border)',
                      backgroundColor: 'var(--color-background)',
                      transition: 'border-color 0.2s, box-shadow 0.2s',
                      cursor: 'pointer',
                      overflow: 'hidden',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = card.color; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.boxShadow = 'none' }}
                  >
                    {/* Figure thumbnail */}
                    <div style={{ position: 'relative', height: '180px', overflow: 'hidden', borderBottom: '1px solid var(--color-border)' }}>
                      <img
                        src={card.image}
                        alt={card.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                      />
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(250,250,246,0.7) 0%, transparent 50%)',
                        pointerEvents: 'none',
                      }} />
                      <span style={{
                        position: 'absolute',
                        bottom: '0.6rem',
                        left: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.55rem',
                        letterSpacing: '0.06em',
                        color: '#6b7280',
                      }}>
                        {card.caption}
                      </span>
                    </div>

                    {/* Text */}
                    <div style={{ padding: '1.5rem' }}>
                      <div style={{ width: '28px', height: '3px', backgroundColor: card.color, marginBottom: '1rem' }} />
                      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.35rem', color: 'var(--color-navy)', marginBottom: '0.4rem' }}>
                        {card.title}
                      </h3>
                      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.08em', color: '#9ca3af', textTransform: 'uppercase' }}>
                        {card.sub}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent highlights */}
      <section style={{ padding: '0 1.5rem 6rem', backgroundColor: 'var(--color-bg-soft)', borderTop: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', paddingTop: '4rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9ca3af' }}>
              Recent Highlights
            </p>
            <Link to="/publications" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-navy)', textDecoration: 'none', borderBottom: '1px solid var(--color-border)' }}>
              All Publications →
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {representativePublications.slice(0, 3).map((pub, i) => (
              <motion.a
                key={pub.id}
                href={pub.doi}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '6rem 1fr auto',
                  alignItems: 'center',
                  gap: '1.5rem',
                  padding: '1.25rem 0',
                  borderBottom: '1px solid var(--color-border)',
                  textDecoration: 'none',
                }}
                className="highlight-row"
              >
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  color: 'var(--color-sage)',
                  border: '1px solid var(--color-sage)',
                  padding: '0.2rem 0.5rem',
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}>
                  {pub.year}
                </span>
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.05rem', color: 'var(--color-navy)', lineHeight: 1.35, marginBottom: '0.2rem' }}>
                    {pub.title}
                  </p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.06em', color: '#9ca3af' }}>
                    {pub.journal}
                  </p>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#9ca3af', flexShrink: 0 }}>→</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

