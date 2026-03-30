import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--color-bg-soft)',
      borderTop: '1px solid var(--color-border)',
      padding: '2.5rem 1.5rem',
      marginTop: '4rem',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <p style={{ fontFamily: 'var(--font-logo)', fontWeight: 300, fontSize: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-navy)', marginBottom: '0.4rem' }}>
            Cong Lab
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#6b7280', lineHeight: 1.6 }}>
            Lokey Stem Cell Research Building<br />
            265 Campus Dr, Stanford, CA 94305
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#6b7280', marginTop: '0.4rem' }}>
            <a href="mailto:congle@stanford.edu" style={{ color: 'var(--color-sage)', textDecoration: 'none' }}>congle@stanford.edu</a>
          </p>
        </div>

        <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '0.75rem' }}>Pages</p>
            {[['/', 'Home'], ['/research', 'Research'], ['/team', 'Team'], ['/publications', 'Publications'], ['/support', 'Support Us'], ['/contact', 'Contact']].map(([to, label]) => (
              <Link key={to} to={to} style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#6b7280', textDecoration: 'none', marginBottom: '0.3rem' }}>
                {label}
              </Link>
            ))}
          </div>

          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '0.75rem' }}>Connect</p>
            <a href="https://x.com/lecong" target="_blank" rel="noreferrer" style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#6b7280', textDecoration: 'none', marginBottom: '0.3rem' }}>X / Twitter</a>
            <a href="https://www.linkedin.com/in/lecong/" target="_blank" rel="noreferrer" style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#6b7280', textDecoration: 'none', marginBottom: '0.3rem' }}>LinkedIn</a>
            <a href="https://profiles.stanford.edu/186687" target="_blank" rel="noreferrer" style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#6b7280', textDecoration: 'none', marginBottom: '0.3rem' }}>Stanford Profile</a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1100px', margin: '2rem auto 0', borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#9ca3af', letterSpacing: '0.05em' }}>
          © {new Date().getFullYear()} Cong Lab @ Stanford University
        </p>
      </div>
    </footer>
  )
}
