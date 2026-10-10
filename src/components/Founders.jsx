import { FOUNDERS } from '../data/site'
import { SectionHeading } from './ui'

export default function Founders() {
  return (
    <section id="fundadoras" aria-labelledby="fundadoras-title" className="relative border-t border-line bg-cream px-5 py-20 md:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="fundadoras-title"
          eyebrow="Las mentes detrás de Exótica"
          title="Dos ingenieras,"
          accent="una pasión por viajar."
          description="Más de 13 años viviendo en Emiratos Árabes Unidos y más de 8 en turismo. Exótica nació para acercar Medio Oriente al viajero hispanohablante, con el trato cercano que nos caracteriza."
          className="mb-14"
        />

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {FOUNDERS.map((f) => (
            <article
              key={f.name}
              className="group flex flex-col items-center border border-line bg-white p-8 text-center shadow-sm transition-all hover:border-gold-mid hover:shadow-xl"
            >
              <div className="relative mb-6 size-40 overflow-hidden border-2 border-gold-mid/50 shadow-md">
                <img
                  src={f.image}
                  alt={`Retrato de ${f.name}`}
                  width="320"
                  height="320"
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-2xl text-ink">{f.name}</h3>
              <p className="mt-1 mb-4 max-w-xs text-xs font-semibold tracking-[0.18em] text-gold uppercase">{f.role}</p>
              <p className="text-sm leading-relaxed text-slate">{f.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
