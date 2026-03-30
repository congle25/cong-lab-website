import { motion } from 'framer-motion'

export default function Contact() {
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
          Get in Touch
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
          Contact
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.75, color: '#6b7280', fontWeight: 300, maxWidth: '480px' }}>
          We are always happy to discuss science, collaborations, or opportunities to join the lab.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        {/* Email & address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ border: '1px solid var(--color-border)', padding: '2rem', backgroundColor: 'var(--color-background)' }}
        >
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '1.25rem' }}>
            Direct Contact
          </p>

          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: '#9ca3af', marginBottom: '0.25rem' }}>Email</p>
            <a href="mailto:congle@stanford.edu" style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--color-navy)', textDecoration: 'none', borderBottom: '1px solid var(--color-sage)' }}>
              congle@stanford.edu
            </a>
          </div>

          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: '#9ca3af', marginBottom: '0.25rem' }}>Address</p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.65 }}>
              Lokey Stem Cell Research Building<br />
              265 Campus Drive<br />
              Stanford, CA 94305, USA
            </p>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ border: '1px solid var(--color-border)', padding: '2rem', backgroundColor: 'var(--color-background)' }}
        >
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '1.25rem' }}>
            Online Presence
          </p>
          {[
            { label: 'Twitter / X', sub: '@lecong', href: 'https://x.com/lecong' },
            { label: 'LinkedIn', sub: 'linkedin.com/in/lecong', href: 'https://www.linkedin.com/in/lecong/' },
            { label: 'Stanford Profile', sub: 'profiles.stanford.edu', href: 'https://profiles.stanford.edu/186687' },
          ].map(({ label, sub, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.9rem 0',
                borderBottom: '1px solid var(--color-border)',
                textDecoration: 'none',
                gap: '0.5rem',
              }}
            >
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.9rem', color: 'var(--color-navy)', marginBottom: '0.1rem' }}>{label}</p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#9ca3af', letterSpacing: '0.04em' }}>{sub}</p>
              </div>
              <span style={{ color: '#9ca3af', fontSize: '0.9rem' }}>→</span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Recruitment note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ backgroundColor: 'var(--color-bg-soft)', border: '1px solid var(--color-border)', padding: '2rem' }}
      >
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '0.75rem' }}>
          Opportunities
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.75, color: '#6b7280', maxWidth: '560px' }}>
          We are actively recruiting rotation students, visiting scholars, and full-time researchers. If you are passionate about AI-driven genomics, CRISPR biology, or stem cell engineering — we'd love to hear from you.
        </p>
      </motion.div>
    </div>
  )
}
