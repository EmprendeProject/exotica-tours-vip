import { useState } from 'react'
import { TOUR_FILTERS, TOURS } from '../data/site'
import { Icon, SectionHeading } from './ui'

function TourCard({ tour, onRequest }) {
  return (
    <article className="group flex flex-col border border-line bg-white shadow-sm transition-all duration-300 hover:border-gold-mid hover:shadow-xl">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={tour.image}
          alt={tour.alt}
          width="800"
          height="500"
          loading="lazy"
          decoding="async"
          className={`size-full object-cover transition-transform duration-500 group-hover:scale-105 ${tour.imageClass ?? ''}`}
        />
        <span className="absolute top-4 left-4 border border-gold-mid/40 bg-white/90 px-2.5 py-1 text-[10px] font-semibold tracking-widest text-gold uppercase shadow-sm">
          {tour.badge}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold tracking-wider text-slate uppercase">
          <Icon name="location_on" className="text-sm text-gold" />
          {tour.location}
        </p>
        <h3 className="mb-3 font-serif text-xl text-ink transition-colors group-hover:text-gold">{tour.title}</h3>
        <p className="mb-4 text-[13px] leading-relaxed text-muted">{tour.description}</p>

        <ul aria-label="Puntos destacados" className="mb-5 flex flex-wrap gap-1.5">
          {tour.highlights.map((h) => (
            <li key={h} className="border border-line bg-cream px-2 py-1 text-[11px] text-slate">
              {h}
            </li>
          ))}
        </ul>

        <ul className="mt-auto space-y-1.5 border-t border-line pt-4 text-xs text-slate">
          {tour.facts.map((f) => (
            <li key={f.text} className="flex items-center">
              <Icon name={f.icon} className="mr-2 text-sm text-gold" />
              {f.text}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-line px-6 py-4">
        <a
          href={tour.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-[0.15em] text-slate uppercase transition-colors hover:text-gold"
        >
          Ver ficha
          <Icon name="open_in_new" className="text-sm" />
          <span className="sr-only">de {tour.title} (abre en una pestaña nueva)</span>
        </a>
        <button
          type="button"
          onClick={() => onRequest(tour)}
          className="cursor-pointer border border-gold px-4 py-2 text-[10px] font-semibold tracking-[0.2em] text-gold uppercase transition-colors hover:bg-gold hover:text-white"
        >
          Solicitar
          <span className="sr-only"> {tour.title}</span>
        </button>
      </div>
    </article>
  )
}

export default function Tours({ onRequest }) {
  const [filter, setFilter] = useState('all')
  const visible = filter === 'all' ? TOURS : TOURS.filter((t) => t.category === filter)

  return (
    <section id="experiencias" aria-labelledby="experiencias-title" className="relative border-t border-line bg-cream px-5 py-20 md:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="experiencias-title"
          eyebrow="Experiencias privadas"
          title="Tours que se viven,"
          accent="no que se cuentan."
          description="Recorridos privados con conductor y guía profesional, recogida en tu hotel, residencia o puerto de cruceros, y todo el ritmo pensado para ti."
          className="mb-10"
        />

        <div role="group" aria-label="Filtrar experiencias" className="mb-12 flex flex-wrap justify-center gap-3">
          {TOUR_FILTERS.map((f) => {
            const isActive = filter === f.id
            const count = f.id === 'all' ? TOURS.length : TOURS.filter((t) => t.category === f.id).length
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setFilter(f.id)}
                className={`cursor-pointer border px-5 py-2 text-xs font-semibold tracking-widest uppercase transition-colors ${
                  isActive
                    ? 'border-gold bg-gold text-white shadow-sm'
                    : 'border-line bg-white text-muted hover:border-gold hover:text-gold'
                }`}
              >
                {f.label} <span className={isActive ? 'text-white/70' : 'text-slate/60'}>({count})</span>
              </button>
            )
          })}
        </div>

        <div aria-live="polite" className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((tour) => (
            <TourCard key={tour.id} tour={tour} onRequest={onRequest} />
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-slate">
          ¿Buscas algo que no está aquí? Cada itinerario puede adaptarse o crearse desde cero.{' '}
          <a href="#contacto" className="font-semibold text-gold underline-offset-4 hover:underline">
            Cuéntanos tu idea
          </a>
          .
        </p>
      </div>
    </section>
  )
}
