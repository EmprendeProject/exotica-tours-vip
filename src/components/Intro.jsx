import { STATS } from '../data/site'

export default function Intro() {
  return (
    <section id="nosotros" className="relative border-t border-line bg-cream px-5 py-16 md:px-16 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <dl className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse border-l border-gold-mid/50 pl-5">
              <dt className="mt-1 text-[11px] font-semibold tracking-widest text-slate uppercase">{stat.label}</dt>
              <dd className="font-serif text-4xl md:text-5xl text-gold">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
