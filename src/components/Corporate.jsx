import { B2B_SERVICES, IMAGES, whatsappLink } from '../data/site'
import { Icon } from './ui'

export default function Corporate() {
  return (
    <section id="corporativo" aria-labelledby="corporativo-title" className="relative border-y border-gold-light/40 bg-night px-5 py-20 md:px-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="mb-6 border-l-2 border-gold-light pl-4">
            <p className="eyebrow text-gold-light">Empresas &amp; grupos</p>
            <h2 id="corporativo-title" className="mt-2 font-serif text-3xl leading-tight text-white sm:text-4xl">
              Corporativo, incentivos <span className="italic text-gold-light">e inversión.</span>
            </h2>
          </div>
          <p className="mb-8 text-[15px] leading-relaxed text-mist">
            Organizamos la estancia de empresas, delegaciones y equipos en Emiratos con el mismo nivel de detalle que un viaje privado:
            logística, hoteles, traslados y experiencias que dejan huella.
          </p>

          <ul className="mb-10 space-y-6">
            {B2B_SERVICES.map((s) => (
              <li key={s.title} className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center border border-gold-light/40 text-gold-light">
                  <Icon name={s.icon} className="text-xl" />
                </span>
                <div>
                  <h3 className="font-serif text-lg text-white">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-mist/80">{s.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <a
            href={whatsappLink('Hola Exótica Tours VIP, me interesa un viaje corporativo / de incentivos.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-gold"
          >
            Hablar con dirección comercial
            <Icon name="arrow_outward" className="text-sm" />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:col-span-7">
          <figure className="border border-gold-light/30 bg-navy p-2">
            <img
              src={IMAGES.yacht}
              alt="Yate de lujo navegando frente a Palm Jumeirah al atardecer"
              width="600"
              height="450"
              loading="lazy"
              decoding="async"
              className="h-48 w-full object-cover brightness-90 sm:h-64"
            />
            <figcaption className="px-2 pt-3 pb-1 text-center text-[10px] tracking-widest text-tan uppercase">Experiencias premium</figcaption>
          </figure>
          <figure className="translate-y-6 border border-gold-light/30 bg-navy p-2">
            <img
              src={IMAGES.privateJet}
              alt="Cabina de avión privado con asientos de cuero e iluminación cálida"
              width="600"
              height="450"
              loading="lazy"
              decoding="async"
              className="h-48 w-full object-cover brightness-90 sm:h-64"
            />
            <figcaption className="px-2 pt-3 pb-1 text-center text-[10px] tracking-widest text-tan uppercase">Logística a medida</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
