export default function Footer() {
  return (
    <footer className="bg-brand-dark/95 text-brand-cream/80 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="font-serif font-normal text-2xl text-white mb-1">Vysočina</div>
            <div className="text-xs tracking-widest3 uppercase font-sans font-medium text-brand-warm mb-6">
              Penzion · Škrdlovice
            </div>
            <p className="font-sans font-medium text-xs text-brand-cream/60 leading-relaxed">
              Útulný penzion v srdci Žďárských vrchů,<br />
              1 km od Velkého Dářka.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-xs tracking-widest uppercase font-sans font-medium text-brand-warm mb-4">
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
                    className="font-sans font-medium text-sm text-brand-cream/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs tracking-widest uppercase font-sans font-medium text-brand-warm mb-4">
              Kontakt
            </div>
            <div className="space-y-3 font-sans font-medium text-sm text-brand-cream/70">
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
            <div className="text-xs tracking-widest uppercase font-sans font-medium text-brand-warm mb-4">
              Ceník pokojů
            </div>
            <div className="space-y-2 font-sans font-medium text-sm text-brand-cream/70">
              <div className="flex justify-between gap-4">
                <span>2-lůžkový</span>
                <span className="text-white">1 390 Kč</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>3-lůžkový</span>
                <span className="text-white">1 690 Kč</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>4-lůžkový</span>
                <span className="text-white">1 890 Kč</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>5-lůžkový</span>
                <span className="text-white">2 190 Kč</span>
              </div>
              <p className="text-xs text-brand-cream/50 mt-2">Vč. snídaně / noc</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-cream/20 pt-8 flex justify-center">
          <p className="text-xs font-sans font-medium text-brand-cream/50">
            © {new Date().getFullYear()} Penzion Vysočina Škrdlovice. Všechna práva vyhrazena.
          </p>
        </div>

      </div>
    </footer>
  )
}
