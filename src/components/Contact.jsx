import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', checkin: '', checkout: '', guests: '2', message: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real scenario this would send the form via API
    setSent(true)
  }

  return (
    <section id="kontakt" className="py-24 md:py-36 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">

          {/* Left – contact info */}
          <div>
            <p className="section-label">Kontakt</p>
            <h2 className="section-title mb-6">
              Pošlete nám<br />
              <em>poptávku</em>
            </h2>
            <div className="divider" />

            <p className="font-sans font-light text-sand-600 leading-relaxed mb-10">
              Rádi vás přivítáme. Napište nám přes formulář nebo nás kontaktujte přímo.
              Odpovídáme zpravidla do 24 hodin.
            </p>

            <div className="space-y-6">
              <div>
                <div className="text-xs tracking-widest uppercase font-sans font-light text-sand-400 mb-1">Adresa</div>
                <p className="font-sans font-light text-sand-700">
                  Penzion Vysočina<br />
                  Škrdlovice 25<br />
                  591 01 Škrdlovice
                </p>
              </div>
              <div>
                <div className="text-xs tracking-widest uppercase font-sans font-light text-sand-400 mb-1">Telefon</div>
                <a href="tel:+420566676264" className="font-sans font-light text-sand-700 hover:text-sand-900 transition-colors">
                  +420 566 676 264
                </a>
              </div>
              <div>
                <div className="text-xs tracking-widest uppercase font-sans font-light text-sand-400 mb-1">E-mail</div>
                <a href="mailto:info@penzionvysocina.eu" className="font-sans font-light text-sand-700 hover:text-sand-900 transition-colors">
                  info@penzionvysocina.eu
                </a>
              </div>
              <div>
                <div className="text-xs tracking-widest uppercase font-sans font-light text-sand-400 mb-1">Dostupnost</div>
                <p className="font-sans font-light text-sand-600 text-sm">
                  Parkování zdarma přímo u penzionu.
                </p>
              </div>
            </div>
          </div>

          {/* Right – form */}
          <div>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                <div className="w-12 h-px bg-sand-400 mx-auto mb-8" />
                <h3 className="font-serif font-light text-3xl text-sand-800 mb-4">Děkujeme!</h3>
                <p className="font-sans font-light text-sand-500">
                  Vaši poptávku jsme přijali. Ozveme se vám co nejdříve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs tracking-widest uppercase font-sans font-light text-sand-400 mb-2 block">
                      Jméno *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full border border-sand-200 bg-transparent px-4 py-3 text-sm font-sans font-light text-sand-700 outline-none focus:border-sand-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-widest uppercase font-sans font-light text-sand-400 mb-2 block">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full border border-sand-200 bg-transparent px-4 py-3 text-sm font-sans font-light text-sand-700 outline-none focus:border-sand-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs tracking-widest uppercase font-sans font-light text-sand-400 mb-2 block">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border border-sand-200 bg-transparent px-4 py-3 text-sm font-sans font-light text-sand-700 outline-none focus:border-sand-500 transition-colors"
                  />
                </div>

                <div className="grid sm:grid-cols-3 gap-6">
                  <div>
                    <label className="text-xs tracking-widest uppercase font-sans font-light text-sand-400 mb-2 block">
                      Příjezd
                    </label>
                    <input
                      type="date"
                      name="checkin"
                      value={form.checkin}
                      onChange={handleChange}
                      className="w-full border border-sand-200 bg-transparent px-4 py-3 text-sm font-sans font-light text-sand-700 outline-none focus:border-sand-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-widest uppercase font-sans font-light text-sand-400 mb-2 block">
                      Odjezd
                    </label>
                    <input
                      type="date"
                      name="checkout"
                      value={form.checkout}
                      onChange={handleChange}
                      className="w-full border border-sand-200 bg-transparent px-4 py-3 text-sm font-sans font-light text-sand-700 outline-none focus:border-sand-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-widest uppercase font-sans font-light text-sand-400 mb-2 block">
                      Hosté
                    </label>
                    <select
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      className="w-full border border-sand-200 bg-cream px-4 py-3 text-sm font-sans font-light text-sand-700 outline-none focus:border-sand-500 transition-colors"
                    >
                      {[1,2,3,4,5].map((n) => (
                        <option key={n} value={n}>{n} {n === 1 ? 'osoba' : n < 5 ? 'osoby' : 'osob'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs tracking-widest uppercase font-sans font-light text-sand-400 mb-2 block">
                    Zpráva
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-sand-200 bg-transparent px-4 py-3 text-sm font-sans font-light text-sand-700 outline-none focus:border-sand-500 transition-colors resize-none"
                    placeholder="Zvláštní přání, dotazy, počet dětí..."
                  />
                </div>

                <button type="submit" className="btn-dark w-full text-center">
                  Odeslat poptávku
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}
