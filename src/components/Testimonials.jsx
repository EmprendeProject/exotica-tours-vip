import { TESTIMONIALS } from '../data/site'
import { Icon, SectionHeading } from './ui'

export default function Testimonials() {
  return (
    <section id="testimonios" aria-labelledby="testimonios-title" className="relative border-t border-line bg-sand px-5 py-20 md:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="testimonios-title"
          eyebrow="Voces de nuestros viajeros"
          title="Recuerdos que"
          accent="viajan de vuelta a casa."
          className="mb-14"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="relative flex flex-col border border-line bg-white p-8 shadow-sm">
              <span aria-hidden="true" className="absolute top-3 right-6 font-serif text-6xl text-gold-mid/25">
                “
              </span>
              <div className="mb-4 flex text-gold" role="img" aria-label="5 de 5 estrellas">
                {Array.from({ length: 5 }, (_, i) => (
                  <Icon key={i} name="star" filled className="text-sm" />
                ))}
              </div>
              <blockquote className="mb-6 flex-1 text-sm leading-relaxed text-muted italic">
                <p>“{t.quote}”</p>
              </blockquote>
              <figcaption className="border-t border-line pt-4">
                <span className="block font-serif text-sm text-ink">{t.name}</span>
                <span className="text-[10px] font-semibold tracking-widest text-gold uppercase">{t.origin}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
