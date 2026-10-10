import { useEffect, useState } from 'react'
import { CONTACT, NAV_LINKS } from '../data/site'
import { useActiveSection, useScrolled } from '../hooks'
import { Logo } from './Logo'
import { Icon } from './ui'

const NAV_IDS = NAV_LINKS.map((l) => l.id)
const ALL_LINKS = [...NAV_LINKS, { id: 'corporativo', label: 'Corporativo / B2B' }]

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

          {/* ── Botón hamburger animado ── */}
          <button
            type="button"
            className="relative flex size-10 items-center justify-center border border-line text-ink transition-colors hover:border-gold hover:text-gold lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
            {/* SVG con 3 barras que se transforman en X */}
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              aria-hidden="true"
              className="overflow-visible"
            >
              {/* Barra superior → rota +45° */}
              <rect
                x="0" y="1" width="20" height="1.5"
                fill="currentColor"
                rx="0.75"
                style={{
                  transformOrigin: '10px 1.75px',
                  transition: 'transform 0.38s cubic-bezier(0.22,1,0.36,1)',
                  transform: open ? 'translateY(5.25px) rotate(45deg)' : 'none',
                }}
              />
              {/* Barra media → se desvanece y encoge */}
              <rect
                x="0" y="6.25" width="20" height="1.5"
                fill="currentColor"
                rx="0.75"
                style={{
                  transformOrigin: '10px 7px',
                  transition: 'opacity 0.22s ease, transform 0.38s cubic-bezier(0.22,1,0.36,1)',
                  opacity: open ? 0 : 1,
                  transform: open ? 'scaleX(0.4)' : 'none',
                }}
              />
              {/* Barra inferior → rota -45° */}
              <rect
                x="0" y="11.5" width="20" height="1.5"
                fill="currentColor"
                rx="0.75"
                style={{
                  transformOrigin: '10px 12.25px',
                  transition: 'transform 0.38s cubic-bezier(0.22,1,0.36,1)',
                  transform: open ? 'translateY(-5.25px) rotate(-45deg)' : 'none',
                }}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Menú móvil con animación suave ── */}
      <div
        id="mobile-menu"
        role="region"
        aria-label="Menú de navegación"
        className="overflow-hidden border-t border-line bg-cream lg:hidden"
        style={{
          maxHeight: open ? '600px' : '0px',
          opacity: open ? 1 : 0,
          transition: open
            ? 'max-height 0.52s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease 0.05s'
            : 'max-height 0.38s cubic-bezier(0.55,0,1,0.45), opacity 0.22s ease',
        }}
      >
        <nav aria-label="Principal (móvil)" className="px-5 pt-2 pb-6 md:px-10">
          <ul className="divide-y divide-line">
            {ALL_LINKS.map((link, i) => (
              <li
                key={link.id}
                style={{
                  opacity: open ? 1 : 0,
                  transform: open ? 'translateX(0)' : 'translateX(-12px)',
                  transition: open
                    ? `opacity 0.35s ease ${0.08 + i * 0.055}s, transform 0.4s cubic-bezier(0.22,1,0.36,1) ${0.08 + i * 0.055}s`
                    : 'opacity 0.15s ease, transform 0.15s ease',
                }}
              >
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

          <div
            className="mt-6 grid gap-3 sm:grid-cols-2"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? 'translateY(0)' : 'translateY(10px)',
              transition: open
                ? `opacity 0.35s ease ${0.08 + ALL_LINKS.length * 0.055}s, transform 0.4s cubic-bezier(0.22,1,0.36,1) ${0.08 + ALL_LINKS.length * 0.055}s`
                : 'opacity 0.15s ease',
            }}
          >
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
