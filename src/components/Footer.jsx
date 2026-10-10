import { CONTACT, NAV_LINKS, whatsappLink } from '../data/site'
import { Icon } from './ui'

export default function Footer() {
  return (
    <footer className="w-full border-t border-line bg-sand-deep px-5 py-16 text-muted md:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 border-b border-line pb-12 md:grid-cols-12">
        {/* Brand Summary */}
        <div className="md:col-span-4">
          <a href="#inicio" className="mb-3 block font-serif text-2xl text-gold leading-none sm:text-3xl">
            Exótica Tours VIP
          </a>
          <span className="mb-4 block text-[10px] font-semibold tracking-[0.3em] text-slate uppercase">
            Abu Dhabi &amp; Middle East Expeditions
          </span>
          <p className="mb-6 max-w-sm text-xs leading-relaxed text-slate">
            Agencia latinoamericana de turismo boutique en Abu Dhabi. Tours privados, safaris por el desierto y diseño de itinerarios personalizados para viajeros hispanohablantes.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={CONTACT.instagram}
              aria-label="Instagram de Exótica Tours VIP"
              className="flex size-9 items-center justify-center border border-gold-mid/30 text-gold transition-colors hover:bg-gold hover:text-white"
            >
              <span className="text-xs font-bold">IG</span>
            </a>
            <a
              href={CONTACT.linkedin}
              aria-label="LinkedIn de Exótica Tours VIP"
              className="flex size-9 items-center justify-center border border-gold-mid/30 text-gold transition-colors hover:bg-gold hover:text-white"
            >
              <span className="text-xs font-bold">IN</span>
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Concierge"
              className="flex size-9 items-center justify-center border border-gold-mid/30 text-gold transition-colors hover:bg-gold hover:text-white"
            >
              <Icon name="chat" className="text-sm" />
            </a>
          </div>
        </div>

        {/* Quick Nav Links */}
        <div className="md:col-span-3">
          <h4 className="mb-4 text-xs font-semibold tracking-widest text-ink uppercase">Navegación</h4>
          <ul className="space-y-2.5 text-xs">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="transition-colors hover:text-gold">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#corporativo" className="transition-colors hover:text-gold">
                Corporativo / B2B
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-gold hover:underline"
              >
                <Icon name="chat" className="text-sm" /> Concierge WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Coordinates */}
        <div className="md:col-span-5">
          <h4 className="mb-4 text-xs font-semibold tracking-widest text-ink uppercase">Sede &amp; Coordenadas</h4>
          <div className="space-y-3 text-xs text-slate">
            <div className="flex items-start gap-3">
              <Icon name="location_on" className="text-base text-gold shrink-0" />
              <span>{CONTACT.city}</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="call" className="text-base text-gold shrink-0" />
              <span>{CONTACT.whatsappDisplay} (VIP Concierge)</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="mail" className="text-base text-gold shrink-0" />
              <span>{CONTACT.email}</span>
            </div>
            <div className="pt-2">
              <span className="inline-block border border-line bg-cream px-3 py-1 text-[10px] tracking-widest text-slate">
                AGENCIA LATINA EN EAU · ABU DHABI &amp; DUBÁI
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 pt-6 text-xs text-slate sm:flex-row">
        <p>© 2026 Exótica Tours VIP. Todos los derechos reservados.</p>
        <div className="flex gap-6 text-[10px] font-semibold tracking-wider">
          <a href="#contacto" className="transition-colors hover:text-gold">
            CONTACTO
          </a>
          <a href="#nosotros" className="transition-colors hover:text-gold">
            SOBRE NOSOTROS
          </a>
          <a href="#corporativo" className="transition-colors hover:text-gold">
            B2B / EMPRESAS
          </a>
        </div>
      </div>
    </footer>
  )
}
