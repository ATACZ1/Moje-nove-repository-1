const hours = [
  { day: 'Pondělí – Čtvrtek', open: '10:00 – 22:00', kitchen: '10:00 – 20:00' },
  { day: 'Pátek – Sobota',    open: '10:00 – 23:00', kitchen: '10:00 – 20:00' },
  { day: 'Neděle',            open: '10:00 – 21:00', kitchen: '10:00 – 17:00' },
]

const beers = ['Plzeň 12°', 'Rychtář 10° & 11°', 'Točená Bezinka', 'Točená Kofola']

import restauraceImg from '../assets/restaurace.png'

export default function Restaurant() {
  return (
    <section id="restaurace" className="py-24 md:py-36 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Image */}
          <div className="relative">
            <img
              src={restauraceImg}
              alt="Restaurace Škrdlovice"
              className="w-full h-80 md:h-[520px] object-cover"
              loading="lazy"
            />
            {/* Floating info card */}
            <div className="absolute -bottom-6 -right-6 bg-sand-700 text-white p-6 hidden md:block">
              <div className="text-3xl font-serif font-normal">65</div>
              <div className="text-xs tracking-widest uppercase font-sans font-medium opacity-80 mt-1">
                míst v restauraci
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="section-label">Restaurace</p>
            <h2 className="section-title mb-6">
              Chuť domova<br />
              <em>na talíři</em>
            </h2>
            <div className="divider" />

            <p className="font-sans font-medium text-sand-900 leading-relaxed mb-5">
              Naše restaurace v Škrdlovicích vás každý den pohostí kvalitní českou kuchyní.
              Od pondělí do pátku vám nabídneme zvýhodněné polední menu s výběrem
              až z 5 jídel a 2 polévek.
            </p>

            <div className="bg-sand-50 border border-sand-200 p-6 mb-8">
              <div className="text-xs tracking-widest uppercase font-sans font-medium text-sand-800 mb-3">
                Polední menu (Po – Pá)
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-serif font-normal text-2xl text-sand-700">145 Kč</span>
                <span className="text-xs text-sand-700">polévka + hlavní jídlo</span>
              </div>
              <div className="text-xs text-sand-700 mt-1">
                Bez polévky 125 Kč · Samostatná polévka 30 Kč
              </div>
            </div>

            {/* Beers on tap */}
            <div className="mb-8">
              <div className="text-xs tracking-widest uppercase font-sans font-medium text-sand-700 mb-3">
                Na čepu
              </div>
              <div className="flex flex-wrap gap-2">
                {beers.map((b) => (
                  <span
                    key={b}
                    className="text-xs text-sand-900 border border-sand-200 px-3 py-1 font-medium"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Opening hours */}
            <div>
              <div className="text-xs tracking-widest uppercase font-sans font-medium text-sand-700 mb-4">
                Otevírací doba
              </div>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex flex-col sm:flex-row sm:justify-between text-sm">
                    <span className="font-sans font-medium text-sand-700 min-w-[180px]">{h.day}</span>
                    <span className="font-sans font-medium text-sand-800">{h.open}</span>
                    <span className="font-sans font-medium text-sand-700 text-xs mt-1 sm:mt-0 sm:ml-4">
                      kuchyně {h.kitchen}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-6 text-xs font-medium font-sans text-sand-700 italic">
              Kapacita 65 míst + 35 v tanečním sále. Pronájem pro svatby, oslavy a firemní akce.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
