import { useEffect, useState } from 'react'
import { CONTACT, NAV_LINKS } from '../data/site'
import { useActiveSection, useScrolled } from '../hooks'
import { Logo } from './Logo'
import { Icon } from './ui'

const NAV_IDS = NAV_LINKS.map((l) => l.id)

export default function Header() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(NAV_IDS)
  const scrolled = useScrolled()

  // Cerrar el menú móvil con Escape o al pasar a desktop
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const mq = window.matchMedia('(min-width: 1024px)')
    const onMq = (e) => e.matches && setOpen(false)
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onMq)
    return () => {
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onMq)
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-line backdrop-blur-md transition-all duration-300 ${
        scrolled || open ? 'bg-cream/95 shadow-sm' : 'bg-cream/80'
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 py-3 md:px-10 xl:px-16">
        <Logo />

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-7 xl:gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.id
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? 'location' : undefined}
                    className={`border-b pb-1 text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300 ${
                      isActive ? 'border-gold text-gold' : 'border-transparent text-muted hover:text-gold'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-4 sm:gap-5">
          <a
            href="#corporativo"
            className="hidden text-[11px] font-semibold tracking-[0.2em] text-slate uppercase transition-colors hover:text-gold 2xl:inline-block"
          >
            Corporativo / B2B
          </a>
          <a
            href={`tel:${CONTACT.phone}`}
            className="hidden items-center text-slate transition-colors hover:text-gold sm:flex"
            aria-label="Llamar a Exótica Tours VIP"
          >
            <Icon name="call" className="text-xl" />
          </a>
          <a href="#contacto" className="btn-primary px-6! py-2.5! max-sm:hidden">
            Diseñar mi viaje
          </a>

          <button
            type="button"
            className="flex size-10 items-center justify-center border border-line text-ink transition-colors hover:border-gold hover:text-gold lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-line bg-cream lg:hidden"
      >
        <nav aria-label="Principal (móvil)" className="px-5 pt-2 pb-6 md:px-10">
          <ul className="divide-y divide-line">
            {[...NAV_LINKS, { id: 'corporativo', label: 'Corporativo / B2B' }].map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between py-4 text-xs font-semibold tracking-[0.2em] uppercase ${
                    active === link.id ? 'text-gold' : 'text-ink'
                  }`}
                >
                  {link.label}
                  <Icon name="arrow_forward" className="text-base text-gold-mid" />
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a href="#contacto" onClick={() => setOpen(false)} className="btn-primary">
              Diseñar mi viaje
            </a>
            <a href={`tel:${CONTACT.phone}`} className="btn-outline">
              <Icon name="call" className="text-base" /> Llamar
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
