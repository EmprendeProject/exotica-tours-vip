import { whatsappLink } from '../data/site'
import { Icon } from './ui'

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink('Hola Exótica Tours VIP, quisiera información sobre los tours en Emiratos.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar con un asesor VIP por WhatsApp"
      title="Hablar con un asesor VIP"
      className="group fixed right-6 bottom-6 z-50 flex items-center gap-3 border border-gold-mid bg-white/95 px-4 py-3 text-gold shadow-2xl backdrop-blur-md transition-all duration-300 hover:bg-gold hover:text-white"
    >
      <div className="relative flex items-center justify-center">
        <Icon name="chat" className="text-xl" />
        <span className="absolute -top-1 -right-1 size-2 animate-ping rounded-full bg-emerald-400" />
      </div>
      <span className="hidden text-[11px] font-semibold tracking-widest uppercase md:inline">
        Hablar con un asesor VIP
      </span>
    </a>
  )
}
