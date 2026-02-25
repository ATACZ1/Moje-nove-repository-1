const activities = [
  {
    category: 'Příroda',
    items: [
      {
        title: 'Velké Dářko',
        desc: 'Největší přírodní rybník Vysočiny – "moře Vysočiny" – přímo u penzionu. Koupání, rybaření a procházky po břehu.',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80',
        dist: '1 km',
      },
      {
        title: 'Žďárské vrchy',
        desc: 'CHKO s desítkami turistických a cykloturistických tras, skalními útvary a panoramatickými výhledy.',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',
        dist: 'v okolí',
      },
    ],
  },
  {
    category: 'Kultura',
    items: [
      {
        title: 'Zelená hora (UNESCO)',
        desc: 'Poutní kostel sv. Jana Nepomuckého od Jana Blažeje Santiniho – barokní gotika zapsaná na seznam UNESCO.',
        image: 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=600&q=80',
        dist: '9 km',
      },
      {
        title: 'Sochy Michala Olšiaka',
        desc: 'Originální betonové sochy tohoto sochaře jsou rozmístěny po celém regionu, jedna přímo ve Škrdlovicích.',
        image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&q=80',
        dist: 'místně',
      },
    ],
  },
  {
    category: 'Sport',
    items: [
      {
        title: 'Lyžování – Harusův kopec',
        desc: 'Sjezdovka v Novém Městě na Moravě vhodná pro rodiny i pokročilé lyžaře. V zimě ideální zázemí.',
        image: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=600&q=80',
        dist: '18 km',
      },
      {
        title: 'Cykloturistika',
        desc: 'Stovky kilometrů cyklotras přímo z penzionu. Kola bezpečně uskladníte v naší uzamykatelné úschovně.',
        image: 'https://images.unsplash.com/photo-1452827073306-6e6e661baf57?w=600&q=80',
        dist: 'start u penzionu',
      },
    ],
  },
]

export default function Surroundings() {
  return (
    <section id="okoli" className="py-24 md:py-36 bg-sand-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="max-w-xl mb-16 md:mb-24">
          <p className="section-label">Okolí & aktivity</p>
          <h2 className="section-title mb-6">
            Je čas<br />
            <em>poznávat</em>
          </h2>
          <div className="divider" />
          <p className="font-sans font-medium text-sand-800 leading-relaxed">
            Kraj Žďárských vrchů nabízí každé roční období jedinečné zážitky –
            od koupání v Dářku přes pěší a cykloturistiku až po zimní lyžování a kulturní
            památky UNESCO.
          </p>
        </div>

        {activities.map((group) => (
          <div key={group.category} className="mb-20">
            <div className="section-label mb-8">{group.category}</div>
            <div className="grid sm:grid-cols-2 gap-8">
              {group.items.map((item) => (
                <div key={item.title} className="group flex flex-col md:flex-row gap-6 items-start">
                  <div className="relative w-full md:w-48 shrink-0 overflow-hidden aspect-[4/3] md:aspect-[1/1]">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute top-3 left-3 bg-sand-700/80 text-white text-xs px-2 py-0.5 font-medium tracking-wide">
                      {item.dist}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-serif font-normal text-xl text-sand-800 mb-2">{item.title}</h3>
                    <div className="w-6 h-px bg-sand-300 mb-3" />
                    <p className="font-sans font-medium text-sm text-sand-800 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
