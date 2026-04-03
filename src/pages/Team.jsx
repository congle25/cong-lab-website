import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { pi, members, alumni } from '../data/team'

function initials(name) {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
}

function Avatar({ photo, name, size = 80 }) {
  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: '50%',
      overflow: 'hidden',
      backgroundColor: 'var(--color-bg-soft)',
      border: '1px solid var(--color-border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }}>
      {photo ? (
        <img src={photo} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        <span style={{ fontFamily: 'var(--font-logo)', fontSize: size * 0.3, color: 'var(--color-navy)', letterSpacing: '0.05em' }}>
          {initials(name)}
        </span>
      )}
    </div>
  )
}

function MemberCard({ member }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        border: '1px solid var(--color-border)',
        padding: '1.5rem',
        backgroundColor: 'var(--color-background)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Avatar photo={member.photo} name={member.name} size={72} />
      <div>
        <p style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.95rem', color: 'var(--color-navy)', marginBottom: '0.25rem' }}>
          {member.name}
        </p>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-sage)', marginBottom: '0.35rem' }}>
          {member.role}
        </p>
        {member.education && (
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: '#9ca3af', lineHeight: 1.4 }}>
            {member.education}
          </p>
        )}
      </div>
    </motion.div>
  )
}

export default function Team() {
  const [alumniOpen, setAlumniOpen] = useState(false)

  const postdocs = members.filter(m => m.role.includes('Postdoctoral'))
  const students = members.filter(m => m.role.includes('Ph.D. Student'))
  const staff = members.filter(m => !m.role.includes('Postdoctoral') && !m.role.includes('Ph.D. Student'))

  return (
    <div>
    <div style={{ padding: '5rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '4rem', maxWidth: '640px' }}
      >
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '1rem' }}>
          People
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
          Team
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.75, color: '#6b7280', fontWeight: 300 }}>
          We are a diverse and interdisciplinary team of scientists at Stanford. We are always looking for motivated researchers to join us.
        </p>
      </motion.div>

      {/* PI */}
      <div style={{ marginBottom: '4rem' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '2rem' }}>
          Principal Investigator
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            border: '1px solid var(--color-border)',
            padding: '2.5rem',
            display: 'flex',
            gap: '2rem',
            alignItems: 'flex-start',
            backgroundColor: 'var(--color-background)',
          }}
          className="pi-card"
        >
          <Avatar photo={pi.photo} name={pi.name} size={96} />
          <div style={{ flex: 1 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.8rem', color: 'var(--color-navy)', marginBottom: '0.25rem' }}>
              {pi.name}
            </h2>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-sage)', marginBottom: '1rem' }}>
              {pi.role}
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              {pi.education.map(e => (
                <span key={e} style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: '#6b7280', border: '1px solid var(--color-border)', padding: '0.25rem 0.75rem' }}>
                  {e}
                </span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href={`mailto:${pi.email}`} style={linkStyle}>Email</a>
              <a href={pi.twitter} target="_blank" rel="noreferrer" style={linkStyle}>Twitter / X</a>
              <a href={pi.linkedin} target="_blank" rel="noreferrer" style={linkStyle}>LinkedIn</a>
              <a href={pi.stanford} target="_blank" rel="noreferrer" style={linkStyle}>Stanford Profile</a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Group photo — full width */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      style={{ position: 'relative', width: '100%', height: '420px', overflow: 'hidden', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
    >
      <img
        src={`${import.meta.env.BASE_URL}images/Group_photo.jpg`}
        alt="Cong Lab group photo"
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
      />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(46,58,92,0.45) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <p style={{
        position: 'absolute',
        bottom: '1.5rem',
        left: '2rem',
        fontFamily: 'var(--font-display)',
        fontWeight: 300,
        fontStyle: 'italic',
        fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
        color: 'rgba(255,255,255,0.92)',
        letterSpacing: '0.02em',
      }}>
        Cong Lab · Stanford University
      </p>
    </motion.div>

    <div style={{ padding: '0 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
      {/* Postdocs */}
      <MemberGroup title="Postdoctoral Fellows" members={postdocs} />

      {/* PhD Students */}
      <MemberGroup title="Ph.D. Students" members={students} />

      {/* Staff */}
      <MemberGroup title="Lab Staff" members={staff} />

      {/* Alumni */}
      <div style={{ marginTop: '3rem' }}>
        <button
          onClick={() => setAlumniOpen(!alumniOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            marginBottom: '1.5rem',
          }}
        >
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9ca3af' }}>
            Alumni
          </p>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#9ca3af' }}>
            {alumniOpen ? '−' : '+'}
          </span>
        </button>

        <AnimatePresence>
          {alumniOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{ border: '1px solid var(--color-border)', padding: '1.5rem' }}>
                {alumni.map((a, i) => (
                  <div key={i} style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    alignItems: 'center',
                    padding: '0.75rem 0',
                    borderBottom: i < alumni.length - 1 ? '1px solid var(--color-border)' : 'none',
                    gap: '0.5rem',
                  }} className="alumni-row">
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-navy)' }}>{a.name}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.04em', color: '#9ca3af' }}>{a.prevRole}</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: '#6b7280', textAlign: 'right' }}>{a.currentPosition}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Join us */}
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
          Join Us
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.75, color: '#6b7280', maxWidth: '560px' }}>
          We are open to rotation students, visiting scholars, and applications for research positions. If you are interested, please reach out to{' '}
          <a href="mailto:congle@stanford.edu" style={{ color: 'var(--color-sage)', textDecoration: 'none' }}>congle@stanford.edu</a>.
        </p>
      </motion.div>

      <style>{`
        @media (max-width: 640px) {
          .pi-card { flex-direction: column !important; }
        }
      `}</style>
    </div>
    </div>
  )
}

const linkStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.68rem',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--color-navy)',
  textDecoration: 'none',
  border: '1px solid var(--color-border)',
  padding: '0.3rem 0.75rem',
  transition: 'border-color 0.2s',
}

function MemberGroup({ title, members }) {
  if (members.length === 0) return null
  return (
    <div style={{ marginBottom: '3rem' }}>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '2rem' }}>
        {title}
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
        {members.map(m => <MemberCard key={m.name} member={m} />)}
      </div>
    </div>
  )
}
