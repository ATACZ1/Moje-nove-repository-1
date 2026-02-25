import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Ubytování', href: '#pokoje' },
  { label: 'Restaurace', href: '#restaurace' },
  { label: 'Okolí', href: '#okoli' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const linkClass = `text-xs tracking-widest2 uppercase font-normal transition-colors duration-300 ${
    scrolled ? 'text-brand-cream/90 hover:text-white' : 'text-white/90 hover:text-white'
  }`

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-brand-dark/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* Desktop: 3-column grid */}
      <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center h-20 max-w-7xl mx-auto px-12">
        {/* Left links */}
        <ul className="flex items-center gap-10">
          {navLinks.slice(0, 2).map((link) => (
            <li key={link.label}>
              <a href={link.href} className={linkClass}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Center logo */}
        <a href="#" className="text-center px-10">
          <div className={`font-serif font-light tracking-wider transition-colors duration-300 ${
            scrolled ? 'text-white' : 'text-white'
          }`}>
            <div className={`text-[10px] tracking-widest3 uppercase font-sans font-normal transition-colors duration-300 ${
              scrolled ? 'text-brand-warm' : 'text-white/70'
            }`}>Penzion</div>
            <div className="text-2xl leading-none whitespace-nowrap">Vysočina</div>
            <div className={`text-[10px] tracking-widest3 uppercase font-sans font-normal transition-colors duration-300 ${
              scrolled ? 'text-brand-warm' : 'text-white/70'
            }`}>Škrdlovice</div>
          </div>
        </a>

        {/* Right links + CTA */}
        <div className="flex items-center justify-end gap-10">
          {navLinks.slice(2).map((link) => (
            <a key={link.label} href={link.href} className={linkClass}>{link.label}</a>
          ))}
          <a
            href="#pokoje"
            className={`text-xs tracking-widest2 uppercase font-normal px-6 py-2.5 border transition-all duration-300 ${
              scrolled
                ? 'border-brand-warm text-brand-warm hover:bg-brand-warm hover:text-brand-dark'
                : 'border-white/70 text-white hover:bg-white/20'
            }`}
          >
            Rezervace
          </a>
        </div>
      </div>

      {/* Mobile: simple flex */}
      <div className="md:hidden flex items-center justify-between h-16 px-6">
        <button
          className="flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-px transition-all duration-300 ${scrolled ? 'bg-white' : 'bg-white'}`} />
          <span className={`block w-6 h-px transition-all duration-300 ${scrolled ? 'bg-white' : 'bg-white'}`} />
          <span className={`block w-4 h-px transition-all duration-300 ${scrolled ? 'bg-white' : 'bg-white'}`} />
        </button>

        <a href="#" className="text-center">
          <div className={`font-serif font-light transition-colors duration-300 ${
            scrolled ? 'text-white' : 'text-white'
          }`}>
            <div className={`text-[9px] tracking-widest3 uppercase font-sans font-normal ${
              scrolled ? 'text-brand-warm' : 'text-white/70'
            }`}>Penzion</div>
            <div className="text-xl leading-none">Vysočina</div>
          </div>
        </a>

        <a
          href="#pokoje"
          className={`text-xs tracking-widest uppercase font-normal px-4 py-2 border transition-all duration-300 ${
            scrolled
              ? 'border-brand-warm text-brand-warm'
              : 'border-white/70 text-white'
          }`}
        >
          Rezervace
        </a>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } bg-brand-dark/98 backdrop-blur-sm`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-xs tracking-widest2 uppercase font-normal text-brand-cream/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
