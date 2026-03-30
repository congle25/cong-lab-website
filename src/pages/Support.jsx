import { motion } from 'framer-motion'

export default function Support() {
  return (
    <div style={{ padding: '5rem 1.5rem', maxWidth: '860px', margin: '0 auto' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '4rem' }}
      >
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '1rem' }}>
          Philanthropy
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
          Support Us
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.75, color: '#6b7280', fontWeight: 300, maxWidth: '560px' }}>
          Your support enables us to pursue bold, innovative science. Gifts of any size make a meaningful difference to our research.
        </p>
      </motion.div>

      {/* Online giving */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{ border: '1px solid var(--color-border)', padding: '2rem', marginBottom: '1.5rem', backgroundColor: 'var(--color-background)' }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-sage)', marginBottom: '0.5rem' }}>
              Recommended
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.4rem', color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
              Online Giving via Stanford
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.7, color: '#6b7280', maxWidth: '480px' }}>
              Give online through Stanford Medicine's secure giving portal. When asked to designate your gift, specify{' '}
              <strong style={{ color: 'var(--color-navy)' }}>"The Cong Group Fund – School of Medicine"</strong>.
            </p>
          </div>
          <a
            href="https://give.stanford.edu/stanford-medicine?olc=06421"
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
              alignSelf: 'flex-start',
            }}
          >
            Give Online →
          </a>
        </div>
      </motion.div>

      {/* Other methods */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '3rem' }}
      >
        {[
          {
            title: 'Corporate Matching',
            desc: 'Many employers match charitable donations. Check if your company participates to double your impact.',
            link: 'https://matchinggifts.com/stanford/',
            linkText: 'Check Matching Gifts →',
          },
          {
            title: 'Check or Wire Transfer',
            desc: 'Gifts by check, securities, stock transfers, wire transfers, or through Benevity are also accepted.',
            contact: 'Contact us for instructions',
          },
        ].map((item) => (
          <div key={item.title} style={{ border: '1px solid var(--color-border)', padding: '1.75rem', backgroundColor: 'var(--color-background)' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.2rem', color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
              {item.title}
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', lineHeight: 1.65, color: '#6b7280', marginBottom: '1rem' }}>
              {item.desc}
            </p>
            {item.link && (
              <a href={item.link} target="_blank" rel="noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.08em', color: 'var(--color-navy)', textDecoration: 'none', borderBottom: '1px solid var(--color-border)' }}>
                {item.linkText}
              </a>
            )}
          </div>
        ))}
      </motion.div>

      {/* Contact for major gifts */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ backgroundColor: 'var(--color-bg-soft)', border: '1px solid var(--color-border)', padding: '2rem' }}
      >
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '0.75rem' }}>
          Major & Planned Gifts
        </p>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.3rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
          Hilary Furlong
        </h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#6b7280', marginBottom: '0.25rem' }}>
          Director of Specialist Fundraising
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#6b7280', marginBottom: '0.5rem' }}>
          <a href="mailto:hilary.furlong@stanford.edu" style={{ color: 'var(--color-sage)', textDecoration: 'none' }}>hilary.furlong@stanford.edu</a>
          {' '}&middot;{' '}
          (650) 725-1057
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: '#9ca3af' }}>
          Stanford Development Office — Mon–Fri, 8am–5pm PT · (650) 725-4360
        </p>
      </motion.div>
    </div>
  )
}
