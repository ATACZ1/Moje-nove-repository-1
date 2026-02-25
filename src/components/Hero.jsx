import { useState, useEffect } from 'react'
import heroBg from '../assets/hero-bg.png'

const GREETINGS = [
  'Vítejte', 'Welcome', 'Willkommen', 'Bienvenue', 'Benvenuti',
  'Bienvenidos', 'Добро пожаловать', 'Vitajte',
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const firstDelay = setTimeout(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex(1)
        setVisible(true)
      }, 500)

      const interval = setInterval(() => {
        setVisible(false)
        setTimeout(() => {
          setIndex((i) => (i + 1) % GREETINGS.length)
          setVisible(true)
        }, 500)
      }, 4000)

      return () => clearInterval(interval)
    }, 4000)

    return () => clearTimeout(firstDelay)
  }, [])

  return (
    <section className="relative pt-20 h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${heroBg}')`,
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Content */}
      <div className="relative z-20 text-center px-6">
        {/* Animated greeting */}
        <div className="mb-6 h-16 flex items-center justify-center">
          <h1
            className={`font-serif font-light text-5xl md:text-7xl lg:text-8xl text-white transition-all duration-400 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
            style={{ transition: 'opacity 0.4s ease, transform 0.4s ease' }}
          >
            {GREETINGS[index]}
          </h1>
        </div>

        {/* Tagline */}
        <p className="fade-up-delay-1 font-sans font-normal text-sm md:text-base tracking-widest uppercase text-white/80 mb-3">
          Penzion Vysočina · Škrdlovice
        </p>
        <div className="fade-up-delay-2 w-12 h-px bg-white/50 mx-auto mb-8" />
        <p className="fade-up-delay-2 font-serif font-light text-lg md:text-xl text-white/90 max-w-lg mx-auto mb-10 italic">
          Kvalitní ubytování v srdci Žďárských vrchů,<br className="hidden md:block" /> u břehů Velkého Dářka
        </p>

        <a
          href="#pokoje"
          className="fade-up-delay-3 inline-block border border-white/70 text-white text-xs tracking-widest2 uppercase font-sans font-normal px-10 py-4 hover:bg-white/20 transition-all duration-300"
        >
          Prozkoumat ubytování
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs tracking-widest uppercase font-sans font-normal">Posunout dolů</span>
        <div className="w-px h-10 bg-white/30 animate-pulse" />
      </div>
    </section>
  )
}
