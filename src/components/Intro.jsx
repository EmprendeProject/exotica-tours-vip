import { IMAGES, STATS } from '../data/site'
import { CornerFrame, SectionHeading } from './ui'

export default function Intro() {
  return (
    <section id="nosotros" aria-labelledby="intro-title" className="relative border-t border-line bg-cream px-5 py-20 md:px-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <SectionHeading
            id="intro-title"
            align="left"
            eyebrow="La experiencia Exótica"
            title="No viajes como turista."
            accent="Viaja como invitado de honor."
          />

          <p className="mt-6 text-[15px] leading-relaxed text-muted">
            Exótica Tours VIP es una agencia de turismo latinoamericana establecida en Abu Dhabi. Nació de la iniciativa de dos
            ingenieras que decidieron convertir su vida en Emiratos Árabes Unidos y su pasión por los viajes en una forma distinta de
            descubrir Medio Oriente.
          </p>
          <p className="mt-4 mb-10 text-sm leading-relaxed font-light text-slate">
            Diseñamos viajes personalizados que combinan cultura, entretenimiento, lujo y hospitalidad, con acompañamiento profesional
            y atención en tu idioma de principio a fin.
          </p>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-7 border-t border-line pt-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse border-l border-gold-mid/50 pl-4">
                <dt className="text-[10px] font-semibold tracking-widest text-slate uppercase">{stat.label}</dt>
                <dd className="font-serif text-3xl text-gold">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-6">
          <CornerFrame>
            <figure className="relative aspect-[4/5] overflow-hidden">
              <img
                src={IMAGES.desertLounge}
                alt="Campamento privado en el desierto con cojines artesanales y faroles de latón al anochecer"
                width="800"
                height="1000"
                loading="lazy"
                decoding="async"
                className="size-full object-cover brightness-[0.88] transition-transform duration-700 hover:scale-105"
              />
              <figcaption className="absolute inset-x-4 bottom-4 border border-line bg-white/95 p-5 shadow-lg backdrop-blur-md sm:inset-x-6 sm:bottom-6">
                <span className="mb-1 block text-[9px] font-semibold tracking-[0.25em] text-gold uppercase">Nuestra filosofía</span>
                <span className="font-serif text-sm text-ink sm:text-base">
                  “El lujo verdadero no es ostentación; es sentirse esperado, entendido y en casa, incluso al otro lado del mundo.”
                </span>
              </figcaption>
            </figure>
          </CornerFrame>
        </div>
      </div>
    </section>
  )
}
