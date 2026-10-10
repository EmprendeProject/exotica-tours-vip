import { IMAGES } from '../data/site'
import { Diamond, Icon } from './ui'

const POINTS = [
  '4x4 por las dunas y fotos al atardecer',
  'Sandboarding y paseo en camello',
  'Campamento tradicional y shows culturales',
  'Cena buffet o BBQ bajo las estrellas',
]

export default function SafariSpotlight() {
  return (
    <section aria-labelledby="safari-title" className="relative overflow-hidden border-y border-gold-light/30 px-5 py-24 md:px-16 lg:py-28">
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.emptyQuarter}
          alt=""
          width="1920"
          height="1080"
          loading="lazy"
          decoding="async"
          className="size-full object-cover brightness-[0.38]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/20" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="eyebrow mb-4 inline-flex items-center gap-2 text-gold-light">
            <Diamond className="bg-gold-light" />
            Experiencia emblemática
          </p>
          <h2 id="safari-title" className="mb-6 font-serif text-3xl leading-tight text-white sm:text-5xl">
            El desierto, <span className="italic text-gold-light">como nunca lo imaginaste.</span>
          </h2>
          <p className="mb-8 max-w-xl text-lg leading-relaxed font-light text-mist">
            Safaris en Dubái y Abu Dhabi que combinan adrenalina y tradición: dunas doradas, hospitalidad beduina y noches que se quedan
            contigo para siempre. Disponibles de 4 horas a un día completo.
          </p>

          <ul className="mb-10 grid grid-cols-1 gap-4 text-sm text-mist sm:grid-cols-2">
            {POINTS.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <Icon name="check_circle" className="text-lg text-gold-light" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="#contacto" className="btn-gold">
              Reservar mi safari
            </a>
            <a href="#experiencias" className="btn-ghost-gold">
              Ver los dos safaris
            </a>
          </div>
          <p className="mt-5 text-[11px] text-mist/70">
            Actividades opcionales como ATV o buggy pueden tener un coste adicional.
          </p>
        </div>
      </div>
    </section>
  )
}
