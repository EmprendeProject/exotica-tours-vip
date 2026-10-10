import { IMAGES, TICKER } from '../data/site'
import { Diamond } from './ui'

export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative flex min-h-svh w-full items-center justify-center overflow-hidden pt-28 pb-16">
      {/* Fondo */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt=""
          width="1920"
          height="1080"
          fetchPriority="high"
          decoding="async"
          className="size-full object-cover object-center brightness-[0.72] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/60 via-transparent to-cream" />
      </div>

      {/* Líneas arquitectónicas */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 flex justify-between px-5 opacity-25 md:px-16">
        <div className="h-full w-px bg-gradient-to-b from-transparent via-gold-light to-transparent" />
        <div className="hidden h-full w-px bg-gradient-to-b from-transparent via-slate to-transparent md:block" />
        <div className="h-full w-px bg-gradient-to-b from-transparent via-gold-light to-transparent" />
      </div>

      <div className="relative z-20 mx-auto flex max-w-5xl flex-col items-center px-5 text-center md:px-16">
        <p className="mb-6 inline-flex items-center gap-3 border border-gold-mid/50 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-md">
          <Diamond />
          <span className="eyebrow text-[10px] tracking-[0.25em] text-gold sm:text-[11px]">Agencia latina de viajes privados en Emiratos</span>
          <Diamond />
        </p>

        <h1 id="hero-title" className="mb-8 font-serif text-[2.75rem] leading-[1.08] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-[76px]">
          Viaja de <span className="italic text-gold">otra manera.</span>
        </h1>

        <p className="mb-10 max-w-2xl text-lg leading-relaxed font-light text-muted">
          Tours privados, safaris por el desierto y experiencias de lujo en Abu Dhabi, Dubái y Medio Oriente. Diseñadas a tu medida y
          acompañadas en tu idioma por quienes viven aquí desde hace más de 13 años.
        </p>

        <div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:gap-5">
          <a href="#contacto" className="btn-primary w-full sm:w-auto">
            Diseñar mi viaje
          </a>
          <a href="#experiencias" className="btn-outline w-full sm:w-auto">
            Ver experiencias
          </a>
        </div>

        <ul
          aria-label="Destinos"
          className="mt-16 flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-3 border-t border-line pt-8 text-[11px] font-medium tracking-[0.25em] text-slate uppercase sm:mt-20 sm:gap-x-8"
        >
          {TICKER.map((place, i) => (
            <li key={place} className="flex items-center gap-5 sm:gap-8">
              {i > 0 && (
                <span aria-hidden="true" className="text-gold-mid">
                  ·
                </span>
              )}
              <span>{place}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
