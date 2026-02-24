export default function Footer() {
  return (
    <footer className="bg-sand-800 text-sand-200 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="font-serif font-light text-2xl text-white mb-1">Vysočina</div>
            <div className="text-xs tracking-widest3 uppercase font-sans font-light text-sand-400 mb-6">
              Penzion · Škrdlovice
            </div>
            <p className="font-sans font-light text-xs text-sand-400 leading-relaxed">
              Útulný penzion v srdci Žďárských vrchů,<br />
              1 km od Velkého Dářka.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-xs tracking-widest uppercase font-sans font-light text-sand-500 mb-4">
              Navigace
            </div>
            <ul className="space-y-3">
              {[
                { label: 'Ubytování', href: '#pokoje' },
                { label: 'Restaurace', href: '#restaurace' },
                { label: 'Okolí', href: '#okoli' },
                { label: 'Kontakt', href: '#kontakt' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans font-light text-sm text-sand-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs tracking-widest uppercase font-sans font-light text-sand-500 mb-4">
              Kontakt
            </div>
            <div className="space-y-3 font-sans font-light text-sm text-sand-300">
              <p>Škrdlovice 25<br />591 01 Škrdlovice</p>
              <a href="tel:+420566676264" className="block hover:text-white transition-colors">
                +420 566 676 264
              </a>
              <a href="mailto:info@penzionvysocina.eu" className="block hover:text-white transition-colors">
                info@penzionvysocina.eu
              </a>
            </div>
          </div>

          {/* Ceník */}
          <div>
            <div className="text-xs tracking-widest uppercase font-sans font-light text-sand-500 mb-4">
              Ceník pokojů
            </div>
            <div className="space-y-2 font-sans font-light text-sm text-sand-300">
              <div className="flex justify-between gap-4">
                <span>2-lůžkový</span>
                <span className="text-sand-200">1 390 Kč</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>3-lůžkový</span>
                <span className="text-sand-200">1 690 Kč</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>4-lůžkový</span>
                <span className="text-sand-200">1 890 Kč</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>5-lůžkový</span>
                <span className="text-sand-200">2 190 Kč</span>
              </div>
              <p className="text-xs text-sand-500 mt-2">Vč. snídaně / noc</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-sand-700 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs font-sans font-light text-sand-500">
            © {new Date().getFullYear()} Penzion Vysočina Škrdlovice. Všechna práva vyhrazena.
          </p>
          <a
            href="https://www.penzionvysocina.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-sans font-light text-sand-500 hover:text-sand-300 transition-colors"
          >
            penzionvysocina.eu
          </a>
        </div>

      </div>
    </footer>
  )
}
