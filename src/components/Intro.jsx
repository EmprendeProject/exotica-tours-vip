import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { STATS } from '../data/site'

function AnimatedStat({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [display, setDisplay] = useState(value.match(/^\d+/) ? '0' : value)

  useEffect(() => {
    if (!inView) return

    // Solo animar si la cadena empieza con números (ej. "13+", "8+")
    const match = value.match(/^(\d+)(.*)$/)
    if (match) {
      const num = parseInt(match[1], 10)
      const suffix = match[2]
      
      const controls = animate(0, num, {
        duration: 2.5,
        ease: [0.22, 1, 0.36, 1], // ease out cubic (cinematográfico)
        onUpdate(val) {
          setDisplay(Math.round(val) + suffix)
        }
      })
      return () => controls.stop()
    } else {
      // Si no es número (ej. "ES", "1:1"), ya se muestra su valor inicial
      setDisplay(value)
    }
  }, [inView, value])

  return <span ref={ref}>{display}</span>
}

export default function Intro() {
  return (
    <section id="nosotros" className="relative border-t border-line bg-cream px-5 py-16 md:px-16 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <dl className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 }}
              className="flex flex-col-reverse border-l border-gold-mid/50 pl-5"
            >
              <dt className="mt-1 text-[11px] font-semibold tracking-widest text-slate uppercase">{stat.label}</dt>
              <dd className="font-serif text-4xl md:text-5xl text-gold">
                <AnimatedStat value={stat.value} />
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  )
}
