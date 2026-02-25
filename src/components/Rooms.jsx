import pokojDvouluzko from '../assets/pokoj-dvouluzko.png'
import pokojLabute from '../assets/pokoj-dvojluzko-labute.png'
import pokojViceluzko from '../assets/pokoj-viceluzko.png'

const rooms = [
  {
    id: 1,
    name: 'Dvoulůžkový pokoj',
    description:
      'Útulný pokoj pro dva hosty s vlastním sociálním zařízením, sprchovým koutem a televizí. Ideální pro romantické víkendy nebo pracovní cesty.',
    capacity: '2 osoby',
    price: 1390,
    image: pokojDvouluzko,
    features: ['Vlastní koupelna', 'TV', 'Wi-Fi zdarma', 'Snídaně v ceně'],
    badge: null,
  },
  {
    id: 2,
    name: 'Třílůžkový pokoj',
    description:
      'Prostorný pokoj pro tři hosty s možností přistýlky dětské postýlky. Skvělá volba pro malé rodiny nebo skupinu přátel.',
    capacity: '3 osoby',
    price: 1690,
    image: pokojLabute,
    features: ['Vlastní koupelna', 'TV', 'Wi-Fi zdarma', 'Snídaně v ceně', 'Dětská postýlka'],
    badge: null,
  },
  {
    id: 3,
    name: 'Čtyřlůžkový pokoj',
    description:
      'Velkorysý pokoj pro čtyři hosty, vhodný pro rodiny s dětmi. K dispozici je možnost zapůjčení dětské postýlky pro nejmenší.',
    capacity: '4 osoby',
    price: 1890,
    image: pokojViceluzko,
    features: ['Vlastní koupelna', 'TV', 'Wi-Fi zdarma', 'Snídaně v ceně', 'Dětská postýlka', 'Parkování zdarma'],
    badge: 'Oblíbený',
  },
  {
    id: 4,
    name: 'Rodinný apartmán',
    description:
      'Náš největší pokoj – pětilůžkový rodinný apartmán s dostatkem prostoru pro celou rodinu. Přivítáme i vašeho čtyřnohého kamaráda.',
    capacity: '5 osob',
    price: 2190,
    image: pokojViceluzko,
    features: ['Vlastní koupelna', 'TV', 'Wi-Fi zdarma', 'Snídaně v ceně', 'Dog friendly', 'Parkování zdarma'],
    badge: 'Největší',
  },
]

function RoomCard({ room }) {
  return (
    <div className="group flex flex-col bg-white overflow-hidden hover:shadow-lg transition-shadow duration-500">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        {room.badge && (
          <span className="absolute top-4 left-4 z-10 bg-sand-600 text-white text-xs tracking-widest uppercase font-medium px-3 py-1">
            {room.badge}
          </span>
        )}
        <img
          src={room.image}
          alt={room.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-serif font-normal text-2xl text-sand-800">{room.name}</h3>
          <div className="text-right shrink-0 ml-4">
            <div className="font-serif font-normal text-2xl text-sand-700">
              {room.price.toLocaleString('cs-CZ')} Kč
            </div>
            <div className="text-xs text-sand-700 font-medium">/noc vč. snídaně</div>
          </div>
        </div>

        <div className="w-8 h-px bg-sand-300 mb-4" />

        <p className="font-sans font-medium text-sm text-sand-800 leading-relaxed mb-6 flex-1">
          {room.description}
        </p>

        {/* Features */}
        <ul className="flex flex-wrap gap-2 mb-6">
          {room.features.map((f) => (
            <li
              key={f}
              className="text-xs tracking-wide font-medium text-sand-800 border border-sand-200 px-3 py-1"
            >
              {f}
            </li>
          ))}
        </ul>

        <a href="#kontakt" className="btn-primary text-center">
          Nezávazná poptávka
        </a>
      </div>
    </div>
  )
}

export default function Rooms() {
  return (
    <section id="pokoje" className="py-24 md:py-36 bg-sand-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="max-w-xl mb-16 md:mb-24">
          <p className="section-label">Ubytování</p>
          <h2 className="section-title mb-6">
            Naše pokoje<br />
            <em>a apartmány</em>
          </h2>
          <div className="divider" />
          <p className="font-sans font-medium text-sand-800 leading-relaxed">
            Všechny pokoje mají vlastní koupelnu se sprchovým koutem, televizi a bezplatné
            Wi-Fi. Ceny jsou za pokoj a noc včetně snídaně.
          </p>
        </div>

        {/* Room grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        {/* Info strip */}
        <div className="mt-16 border-t border-sand-200 pt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Místní poplatek', value: '30 Kč / os. / den' },
            { label: 'Dětská postýlka', value: '150 Kč / noc' },
            { label: 'Domácí mazlíčci', value: '100 Kč / noc' },
            { label: 'Děti do 3 let', value: 'Zdarma' },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-xs tracking-widest uppercase font-sans font-medium text-sand-700 mb-1">
                {item.label}
              </div>
              <div className="font-serif font-normal text-xl text-sand-700">{item.value}</div>
            </div>
          ))}
        </div>

        {/* Solo traveller note */}
        <p className="mt-6 text-xs font-medium font-sans text-sand-700 italic">
          * Při obsazení pokoje pouze 1 osobou: 890 Kč / noc. Delší pobyt a větší skupiny – cena dohodou.
        </p>
      </div>
    </section>
  )
}
