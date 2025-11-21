import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <<div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center p-6">
  <div className="max-w-4xl text-center space-y-12">
    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
      TONY KIOKO
    </h1>
    <p className="text-2xl md:text-3xl text-cyan-400 font-light">
      Full-Stack Developer × Rabbit Farmer
    </p>
    <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
      I build fast, clean web apps … and raise the best rabbits in Eastern Kenya.
    </p>    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 inline-block mt-12 shadow-2xl">
      <img 
        src="/vite.svg" 
        alt="Rabbit placeholder" 
        className="w-32 mx-auto mb-6 animate-bounce"
      />
      <p className="text-6xl font-bold text-cyan-400">{rabbitsSold}</p>
      <p className="text-2xl mt-2">rabbits sold this month</p>
      <button
        onClick={() => setRabbitsSold(rabbitsSold + 1)}
        className="mt-6 px-10 py-4 bg-cyan-500 hover:bg-cyan-400 rounded-full font-bold text-black text-xl transition shadow-lg">
        Sell One Rabbit 🐰
      </button>
          <p className="mt-12 text-lg opacity-80">
      RabbitFarm Manager app launching January 2025 · Built & deployed from a Samsung A06
    </p>

    <a 
      href="https://www.upwork.com/fl/~01e..." 
      target="_blank"
      rel="noopener"
      className="inline-block mt-10 px-12 py-5 bg-cyan-500 hover:bg-cyan-400 rounded-full text-black font-bold text-2xl transition shadow-xl">
      Hire Me on Upwork
    </a>
  </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
// victory commit Fri Nov 21 03:23:11 EAT 2025
