import { useState } from 'react'
import viteLogo from '/vite.svg'

function App() {
  const [rabbitsSold, setRabbitsSold] = useState(0)

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #111827, #000000)',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{ maxWidth: '1024px', textAlign: 'center' }}>
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
          background: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(12px)',
          borderRadius: '2rem',
          padding: '3rem 2rem',
          display: 'inline-block'
        }}>
          <img src={viteLogo} alt="Rabbit" style={{ width: '120px', animation: 'bounce 1s infinite' }} />
          <p style={{ fontSize: '5rem', fontWeight: 'bold', color: '#0ea5e9' }}>
            {rabbitsSold}
          </p>
          <p style={{ fontSize: '1.5rem' }}>rabbits sold this month</p>
          <button onClick={() => setRabbitsSold(rabbitsSold + 1)}
            style={{
              padding: '1rem 3rem',
              background: '#0ea5e9',
              border: 'none',
              borderRadius: '999px',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: 'black',
              cursor: 'pointer'
            }}>
            Sell One Rabbit 🐰
          </button>
        </div>

        <p style={{ marginTop: '3rem', opacity: 0.8 }}>
          RabbitFarm Manager • January 2025 • Built on a Samsung A06
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
