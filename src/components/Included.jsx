import { INCLUDED, NOT_INCLUDED } from '../data/site'
import { Icon, SectionHeading } from './ui'

function List({ title, icon, items, positive }) {
  return (
    <div className={`border p-8 md:p-10 ${positive ? 'border-gold-mid/50 bg-white shadow-lg' : 'border-line bg-sand'}`}>
      <h3 className="mb-6 flex items-center gap-3 font-serif text-2xl text-ink">
        <Icon name={icon} className={`text-2xl ${positive ? 'text-gold' : 'text-slate'}`} />
        {title}
      </h3>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
            <Icon
              name={positive ? 'check' : 'remove'}
              className={`mt-0.5 text-base ${positive ? 'text-gold' : 'text-slate/60'}`}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Included() {
  return (
    <section aria-labelledby="incluye-title" className="relative border-t border-line bg-cream px-5 py-20 md:px-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="incluye-title"
          eyebrow="Transparencia total"
          title="¿Qué incluye"
          accent="un tour privado?"
          description="Nuestros tours privados comparten una estructura de servicio consistente. Cada ficha detalla lo específico de esa experiencia."
          className="mb-14"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <List title="Incluido habitualmente" icon="verified" items={INCLUDED} positive />
          <List title="Generalmente no incluido" icon="info" items={NOT_INCLUDED} />
        </div>
      </div>
    </section>
  )
}
