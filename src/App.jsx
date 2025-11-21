import { useState } from 'react'
import MpesaInvoice from './MpesaInvoice'

function App() {
  const [rabbitsSold, setRabbitsSold] = useState(0)
  const [darkMode, setDarkMode] = useState(false)
  const [formStatus, setFormStatus] = useState('')
  const [currentPage, setCurrentPage] = useState('home')

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Message sent! I will reply within 24 hrs 🚀')
    e.target.reset()
  }

  const theme = {
    bg: darkMode ? '#0a0a0a' : '#ffffff',
    bgAlt: darkMode ? '#141414' : '#f8fafc',
    text: darkMode ? '#ffffff' : '#0f172a',
    textMuted: darkMode ? '#a1a1aa' : '#64748b',
    accent: '#0ea5e9',
    accentHover: '#0284c7',
    card: darkMode ? '#1a1a1a' : '#ffffff',
    cardBorder: darkMode ? '#262626' : '#e2e8f0',
    input: darkMode ? '#1a1a1a' : '#f1f5f9'
  }

  if (currentPage === 'invoice') {
    return (
      <div style={{
        minHeight: '100vh',
        background: theme.bg,
        color: theme.text,
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
      }}>
        <MpesaInvoice darkMode={darkMode} theme={theme} onBack={() => setCurrentPage('home')} />
      </div>
    )
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: theme.bg,
      color: theme.text,
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      transition: 'all 0.3s ease'
    }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: darkMode ? 'rgba(10,10,10,0.8)' : 'rgba(255,255,255,0.8)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${theme.cardBorder}`,
        zIndex: 100
      }}>
        <span style={{ fontWeight: 700, fontSize: '1.25rem' }}>TK</span>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#projects" style={{ color: theme.textMuted, textDecoration: 'none', fontSize: '0.9rem' }}>Projects</a>
          <a href="#contact" style={{ color: theme.textMuted, textDecoration: 'none', fontSize: '0.9rem' }}>Contact</a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              background: theme.bgAlt,
              border: `1px solid ${theme.cardBorder}`,
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              fontSize: '1.1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 2rem 4rem',
        background: darkMode 
          ? 'radial-gradient(circle at 50% 50%, #1a1a2e 0%, #0a0a0a 70%)'
          : 'radial-gradient(circle at 50% 50%, #f0f9ff 0%, #ffffff 70%)'
      }}>
        <div style={{ maxWidth: '800px', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1rem',
            background: 'rgba(14,165,233,0.1)',
            border: '1px solid rgba(14,165,233,0.3)',
            borderRadius: '999px',
            marginBottom: '1.5rem'
          }}>
            <span style={{ color: theme.accent, fontSize: '0.875rem', fontWeight: 500 }}>
              Available for work
            </span>
          </div>
          
          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em'
          }}>
            I build apps that<br />
            <span style={{ color: theme.accent }}>solve real problems</span>
          </h1>
          
          <p style={{
            fontSize: 'clamp(1rem, 3vw, 1.25rem)',
            color: theme.textMuted,
            maxWidth: '600px',
            margin: '0 auto 2rem',
            lineHeight: 1.7
          }}>
            Full-stack developer from Eastern Kenya. I create fast, clean web applications — and raise the best rabbits in the region.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#contact" style={{
              padding: '0.875rem 2rem',
              background: theme.accent,
              color: '#000',
              textDecoration: 'none',
              borderRadius: '0.5rem',
              fontWeight: 600,
              fontSize: '0.95rem'
            }}>
              Work with me
            </a>
            <a href="#projects" style={{
              padding: '0.875rem 2rem',
              background: 'transparent',
              color: theme.text,
              textDecoration: 'none',
              borderRadius: '0.5rem',
              fontWeight: 600,
              fontSize: '0.95rem',
              border: `1px solid ${theme.cardBorder}`
            }}>
              View projects
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        padding: '4rem 2rem',
        background: theme.bgAlt,
        borderTop: `1px solid ${theme.cardBorder}`,
        borderBottom: `1px solid ${theme.cardBorder}`
      }}>
        <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: theme.textMuted, marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Side hustle stats
          </p>
          <p style={{ fontSize: 'clamp(4rem, 15vw, 6rem)', fontWeight: 800, color: theme.accent, lineHeight: 1 }}>
            {rabbitsSold}
          </p>
          <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: theme.text }}>rabbits sold this month</p>
          <button
            onClick={() => setRabbitsSold(rabbitsSold + 1)}
            style={{
              padding: '0.75rem 2rem',
              background: theme.card,
              border: `1px solid ${theme.cardBorder}`,
              borderRadius: '0.5rem',
              fontSize: '1rem',
              cursor: 'pointer',
              color: theme.text
            }}
          >
            Sell One Rabbit 🐰
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
          <p style={{ color: theme.accent, fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' }}>PROJECTS</p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '3rem' }}>
            What I'm building
          </h2>
          
          <div style={{
            display: 'grid',
            gap: '1.5rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
          }}>
            {/* M-Pesa Invoice - Clickable */}
            <div
              onClick={() => setCurrentPage('invoice')}
              style={{
                background: theme.card,
                border: `1px solid ${theme.cardBorder}`,
                borderRadius: '1rem',
                padding: '2rem',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
            >
              <div style={{
                display: 'inline-block',
                padding: '0.25rem 0.75rem',
                background: 'rgba(34,197,94,0.1)',
                color: '#22c55e',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: 600,
                marginBottom: '1rem'
              }}>
                Try it Live
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>M-Pesa Invoice Generator</h3>
              <p style={{ color: theme.textMuted, marginBottom: '1.5rem', lineHeight: 1.6, fontSize: '0.95rem' }}>
                Create and send professional invoices with M-Pesa payment details. Built for Kenyan freelancers and small businesses.
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {['React', 'PDF Export', 'M-Pesa'].map(tag => (
                  <span key={tag} style={{
                    padding: '0.25rem 0.75rem',
                    background: theme.bgAlt,
                    borderRadius: '0.25rem',
                    fontSize: '0.75rem',
                    color: theme.textMuted
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Other Projects */}
            {[
              {
                title: "RabbitFarm Tracker",
                desc: "Full-stack farm management app for tracking sales, breeding cycles, and inventory.",
                tags: ["React", "Firebase", "PWA"],
                status: "Coming Soon"
              },
              {
                title: "Church Website Kit",
                desc: "Beautiful one-page websites for churches, delivered in 24 hours. Affordable and mobile-friendly.",
                tags: ["React", "Tailwind", "Vercel"],
                status: "Available"
              }
            ].map(p => (
              <div
                key={p.title}
                style={{
                  background: theme.card,
                  border: `1px solid ${theme.cardBorder}`,
                  borderRadius: '1rem',
                  padding: '2rem'
                }}
              >
                <div style={{
                  display: 'inline-block',
                  padding: '0.25rem 0.75rem',
                  background: p.status === 'Available' ? 'rgba(34,197,94,0.1)' : 'rgba(14,165,233,0.1)',
                  color: p.status === 'Available' ? '#22c55e' : theme.accent,
                  borderRadius: '999px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  marginBottom: '1rem'
                }}>
                  {p.status}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>{p.title}</h3>
                <p style={{ color: theme.textMuted, marginBottom: '1.5rem', lineHeight: 1.6, fontSize: '0.95rem' }}>{p.desc}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {p.tags.map(tag => (
                    <span key={tag} style={{
                      padding: '0.25rem 0.75rem',
                      background: theme.bgAlt,
                      borderRadius: '0.25rem',
                      fontSize: '0.75rem',
                      color: theme.textMuted
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '5rem 2rem',
        background: theme.bgAlt,
        borderTop: `1px solid ${theme.cardBorder}`
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <p style={{ color: theme.accent, fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' }}>CONTACT</p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '1rem' }}>
            Let's work together
          </h2>
          <p style={{ color: theme.textMuted, marginBottom: '2rem', lineHeight: 1.7 }}>
            Have a project in mind? Need a website for your business or church? Send me a message and I'll get back to you within 24 hours.
          </p>
          
          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
            <input
              type="text"
              placeholder="Your Name"
              required
              style={{
                padding: '1rem',
                borderRadius: '0.5rem',
                border: `1px solid ${theme.cardBorder}`,
                background: theme.input,
                color: theme.text,
                fontSize: '1rem'
              }}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              style={{
                padding: '1rem',
                borderRadius: '0.5rem',
                border: `1px solid ${theme.cardBorder}`,
                background: theme.input,
                color: theme.text,
                fontSize: '1rem'
              }}
            />
            <textarea
              placeholder="Tell me about your project..."
              rows="5"
              required
              style={{
                padding: '1rem',
                borderRadius: '0.5rem',
                border: `1px solid ${theme.cardBorder}`,
                background: theme.input,
                color: theme.text,
                fontSize: '1rem',
                resize: 'vertical',
                fontFamily: 'inherit'
              }}
            ></textarea>
            <button
              type="submit"
              style={{
                padding: '1rem',
                background: theme.accent,
                border: 'none',
                borderRadius: '0.5rem',
                fontWeight: 600,
                cursor: 'pointer',
                color: '#000',
                fontSize: '1rem'
              }}
            >
              Send Message
            </button>
          </form>
          {formStatus && (
            <p style={{
              marginTop: '1rem',
              padding: '1rem',
              background: 'rgba(34,197,94,0.1)',
              border: '1px solid rgba(34,197,94,0.3)',
              borderRadius: '0.5rem',
              color: '#22c55e'
            }}>
              {formStatus}
            </p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '2rem',
        textAlign: 'center',
        borderTop: `1px solid ${theme.cardBorder}`,
        color: theme.textMuted,
        fontSize: '0.875rem'
      }}>
        <p>Built by Tony Kioko • 2025 • From a Samsung A06 in Eastern Kenya</p>
      </footer>
    </div>
  )
}

export default App




