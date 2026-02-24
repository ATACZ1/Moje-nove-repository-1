const amenities = [
  { icon: '🅿️', label: 'Parkování zdarma' },
  { icon: '📶', label: 'Wi-Fi zdarma' },
  { icon: '🍳', label: 'Snídaně v ceně' },
  { icon: '🐾', label: 'Dog friendly' },
  { icon: '👶', label: 'Baby friendly' },
  { icon: '🚲', label: 'Úschovna kol' },
  { icon: '🚭', label: 'Nekuřácké prostory' },
  { icon: '💳', label: 'Platební karty' },
]

export default function Amenities() {
  return (
    <section className="py-20 bg-sand-100/60 border-y border-sand-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="section-label text-center mb-12">Vybavení a služby</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-10">
          {amenities.map((item) => (
            <div key={item.label} className="flex items-center justify-center text-center">
              <span className="text-xs tracking-widest uppercase font-sans font-light text-sand-600">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
