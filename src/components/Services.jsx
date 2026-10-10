import { SERVICES } from '../data/site'
import { Icon, SectionHeading } from './ui'

export default function Services() {
  return (
    <section id="servicios" aria-labelledby="servicios-title" className="relative border-t border-line bg-sand px-5 py-20 md:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="servicios-title"
          eyebrow="Viajes personalizados"
          title="Todo lo que imaginas,"
          accent="orquestado por nosotras."
          description="Más allá de nuestros tours, diseñamos el viaje completo: desde el hotel hasta la última cena, con una sola persona de contacto que habla tu idioma."
          className="mb-14"
        />

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <li key={s.title} className="group border border-line bg-white p-7 shadow-sm transition-colors hover:border-gold">
              <span className="mb-5 flex size-12 items-center justify-center border border-gold-mid/40 bg-cream text-gold transition-colors group-hover:bg-gold group-hover:text-white">
                <Icon name={s.icon} className="text-2xl" />
              </span>
              <h3 className="mb-2 font-serif text-lg text-ink">{s.title}</h3>
              <p className="text-[13px] leading-relaxed text-slate">{s.text}</p>
            </li>
          ))}

          <li className="flex flex-col justify-between border border-gold bg-gold p-7 text-white shadow-sm">
            <div>
              <span className="mb-5 flex size-12 items-center justify-center border border-white/40">
                <Icon name="auto_awesome" className="text-2xl" />
              </span>
              <h3 className="mb-2 font-serif text-lg">¿Tienes algo en mente?</h3>
              <p className="text-[13px] leading-relaxed text-white/85">Cuéntanos tu idea y la convertimos en un itinerario a tu medida.</p>
            </div>
            <a href="#contacto" className="mt-6 inline-flex items-center gap-1 text-[11px] font-semibold tracking-[0.2em] uppercase hover:underline">
              Empezar ahora <Icon name="arrow_forward" className="text-sm" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
