import { useState } from 'react'
import viteLogo from '/vite.svg'

function App() {
  const [rabbitsSold, setRabbitsSold] = useState(0)
  const [darkMode, setDarkMode] = useState(true)
  const [formStatus, setFormStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Message sent! I will reply within 24 hrs 🚀')
    e.target.reset()
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: darkMode 
        ? 'linear-gradient(to bottom, #111827, #000000)' 
        : 'linear-gradient(to bottom, #f0f9ff, #e0f2fe)',
      color: darkMode ? 'white' : '#1e293b',
      padding: '2rem',
      fontFamily: 'system-ui, sans-serif',
      transition: 'all 0.3s ease'
    }}>
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          background: 'none',
          border: 'none',
          fontSize: '1.5rem',
          cursor: 'pointer'
        }}
      >
        {darkMode ? '☀️' : '🌙'}
      </button>

      <div style={{ maxWidth: '1024px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', fontWeight: 'bold' }}>
          TONY KIOKO
        </h1>
        <p style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', color: '#0ea5e9' }}>
          Full-Stack Developer × Rabbit Farmer
        </p>
        <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 3rem', opacity: 0.9 }}>
          I build fast, clean web apps … and raise the best rabbits in Eastern Kenya.
        </p>

        <div style={{
          background: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
          backdropFilter: 'blur(12px)',
          borderRadius: '2rem',
          padding: '3rem 2rem',
          display: 'inline-block'
        }}>
          <img src={viteLogo} alt="Vite Logo" style={{ width: '120px', animation: 'bounce 1s infinite' }} />
          <p style={{ fontSize: '5rem', fontWeight: 'bold', color: '#0ea5e9' }}>
            {rabbitsSold}
          </p>
          <p style={{ fontSize: '1.5rem' }}>rabbits sold this month</p>
          <button
            onClick={() => setRabbitsSold(rabbitsSold + 1)}
            style={{
              padding: '1rem 3rem',
              background: '#0ea5e9',
              border: 'none',
              borderRadius: '999px',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: 'black',
              cursor: 'pointer'
            }}
          >
            Sell One Rabbit 🐰
          </button>
        </div>

        <h2 style={{ fontSize: '2.5rem', margin: '4rem 0 2rem' }}>Recent Projects</h2>
        <div style={{
          display: 'grid',
          gap: '2rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
        }}>
          {[
            { title: "RabbitFarm Tracker", desc: "Full-stack farm management app for tracking sales, breeding, and inventory.", live: "#" },
            { title: "M-Pesa Invoice Generator", desc: "React + Node.js tool for Kenyan freelancers to create and send invoices.", live: "#" },
            { title: "Church Website Kit", desc: "One-page sites for churches, delivered in 24 hours.", live: "#" }
          ].map(p => (
            <div
              key={p.title}
              style={{
                background: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: '1rem',
                padding: '2rem',
                textAlign: 'left'
              }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#0ea5e9' }}>{p.title}</h3>
              <p style={{ opacity: 0.9, marginBottom: '1rem' }}>{p.desc}</p>
              <a href={p.live} style={{ color: '#0ea5e9', textDecoration: 'underline' }}>View Live →</a>
            </div>
          ))}
        </div>

        <div style={{ margin: '4rem auto', maxWidth: '600px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Get In Touch</h2>
          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
            <input
              type="text"
              placeholder="Your Name"
              required
              style={{
                padding: '1rem',
                borderRadius: '0.5rem',
                border: 'none',
                background: darkMode ? 'rgba(255,255,255,0.1)' : 'white',
                color: darkMode ? 'white' : 'black'
              }}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              style={{
                padding: '1rem',
                borderRadius: '0.5rem',
                border: 'none',
                background: darkMode ? 'rgba(255,255,255,0.1)' : 'white',
                color: darkMode ? 'white' : 'black'
              }}
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              required
              style={{
                padding: '1rem',
                borderRadius: '0.5rem',
                border: 'none',
                background: darkMode ? 'rgba(255,255,255,0.1)' : 'white',
                color: darkMode ? 'white' : 'black',
                resize: 'vertical'
              }}
            ></textarea>
            <button
              type="submit"
              style={{
                padding: '1rem',
                background: '#0ea5e9',
                border: 'none',
                borderRadius: '0.5rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                color: 'black'
              }}
            >
              Send Message
            </button>
          </form>
          {formStatus && <p style={{ marginTop: '1rem', color: '#0ea5e9' }}>{formStatus}</p>}
        </div>

        <p style={{ marginTop: '3rem', opacity: 0.8 }}>
          RabbitFarm Manager • 2025 • Built on a Samsung A06
        </p>
      </div>

      <style>{`
        @keyframes bounce {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  )
}

export default App
