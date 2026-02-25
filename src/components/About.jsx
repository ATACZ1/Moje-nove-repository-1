import pokojLabute from '../assets/pokoj-dvojluzko-labute.png'
import penzionExterior from '../assets/penzion-exterior.png'

export default function About() {
  return (
    <section className="py-24 md:py-36 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Top editorial layout */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center mb-24 md:mb-36">
          <div>
            <p className="section-label">O nás</p>
            <h2 className="section-title mb-6">
              Místo, kde<br />
              <em>příroda volá</em>
            </h2>
            <div className="divider" />
            <p className="font-sans font-medium text-sand-900 leading-relaxed mb-6">
              Penzion Vysočina se nachází uprostřed České republiky v chráněné krajinné oblasti
              Žďárské vrchy, v klidné obci Škrdlovice – pouhý 1 km od Velkého Dářka,
              nazývaného mořem Vysočiny.
            </p>
            <p className="font-sans font-medium text-sand-900 leading-relaxed mb-10">
              Nabízíme útulné pokoje s vlastním sociálním zařízením, domácí kuchyni v naší
              restauraci a snadný přístup ke stovkám kilometrů turistických, cyklistických
              i lyžařských tras.
            </p>
            <a href="#pokoje" className="btn-primary">Prohlédnout pokoje</a>
          </div>

          <div className="relative">
            <img
              src={pokojLabute}
              alt="Útulný pokoj v Penzionu Vysočina"
              className="w-full h-80 md:h-[500px] object-cover"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-sand-100 border border-sand-200 p-6 hidden md:block">
              <div className="text-3xl font-serif font-normal text-sand-700">41</div>
              <div className="text-xs tracking-widest uppercase font-sans font-medium text-sand-800 mt-1">
                lůžek celkem
              </div>
            </div>
          </div>
        </div>

        {/* Story section – Calile style alternating text+image */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="order-2 md:order-1">
            <img
              src={penzionExterior}
              alt="Penzion Vysočina exteriér"
              className="w-full h-72 md:h-[420px] object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <p className="section-label">Ráno začíná</p>
            <h2 className="font-serif font-normal text-4xl md:text-5xl text-brand-dark leading-tight mb-6">
              Vůně lesa a<br />
              <em>ticho jezera</em>
            </h2>
            <div className="divider" />
            <p className="font-sans font-medium text-sand-900 leading-relaxed mb-5">
              Probuďte se do ticha Vysočiny. Snídaně čeká na stole a za oknem se leskne hladina
              Velkého Dářka. Dnešní plán? Nechat ho jen tak plynout – procházka lesní stezkou,
              kolo podél břehu nebo jen plácek u vody.
            </p>
            <p className="font-sans font-medium text-sand-900 leading-relaxed">
              Každý den tady nabízí něco nečekaného: skály Žďárských vrchů, monumenty UNESCO
              v nedalekém Žďáru nad Sázavou nebo originální betonové sochy sochaře Michala Olšiaka,
              které jsou rozeseté po celém regionu.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
