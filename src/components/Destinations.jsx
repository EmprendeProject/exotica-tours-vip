import { DESTINATIONS } from '../data/site'
import { Icon, SectionHeading } from './ui'

const SIZE = {
  lg: { col: 'md:col-span-7', h: 'h-[420px] md:h-[460px]', title: 'text-3xl md:text-4xl' },
  md: { col: 'md:col-span-5', h: 'h-[420px] md:h-[460px]', title: 'text-3xl' },
  sm: { col: 'md:col-span-4', h: 'h-[340px] md:h-[360px]', title: 'text-2xl' },
}

function DestinationCard({ d }) {
  const s = SIZE[d.size]
  return (
    <article className={`group relative overflow-hidden border border-line bg-navy shadow-md ${s.col}`}>
      <div className={`relative w-full ${s.h}`}>
        <img
          src={d.image}
          alt={d.alt}
          width="1200"
          height="800"
          loading="lazy"
          decoding="async"
          className="size-full object-cover brightness-[0.78] transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />

        {d.badge && (
          <span className="absolute top-5 left-5 bg-gold-light px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-navy uppercase">
            {d.badge}
          </span>
        )}

        <div className="absolute inset-x-5 bottom-5 sm:inset-x-6 sm:bottom-6">
          <span className="mb-1 block text-[10px] font-semibold tracking-[0.25em] text-gold-light uppercase">{d.region}</span>
          <h3 className={`mb-2 font-serif text-white ${s.title}`}>{d.name}</h3>
          <p className="mb-4 line-clamp-3 text-[13px] leading-5 text-mist/90">{d.description}</p>
          <div className="flex items-center justify-between gap-4 border-t border-white/15 pt-3">
            {d.meta ? (
              <span className="text-[11px] tracking-wider text-tan uppercase">{d.meta}</span>
            ) : (
              <span className="text-[11px] tracking-wider text-tan uppercase">A medida</span>
            )}
            <a
              href={d.href}
              className="flex shrink-0 items-center text-[11px] font-semibold tracking-[0.18em] text-gold-light uppercase transition-transform group-hover:translate-x-1 after:absolute after:inset-0"
            >
              {d.cta}
              <Icon name="arrow_forward" className="ml-1 text-sm" />
              <span className="sr-only">: {d.name}</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Destinations() {
  return (
    <section id="destinos" aria-labelledby="destinos-title" className="relative border-t border-line bg-sand px-5 py-20 md:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 border-b border-line pb-8 md:flex-row md:items-end">
          <SectionHeading
            id="destinos-title"
            align="left"
            eyebrow="Destinos"
            title="Desde Abu Dhabi,"
            accent="hacia todo Medio Oriente."
          />
          <p className="max-w-md text-sm leading-relaxed text-slate">
            Vivimos en Emiratos y lo conocemos desde dentro. Desde aquí diseñamos viajes donde la modernidad futurista se funde con la
            mística milenaria del desierto.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {DESTINATIONS.map((d) => (
            <DestinationCard key={d.name} d={d} />
          ))}
        </div>
      </div>
    </section>
  )
}
