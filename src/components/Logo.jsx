/** Emblema de la marca: luna creciente + halcón estilizado. */
export function LogoMark({ className = 'size-10' }) {
  return (
    <span
      aria-hidden="true"
      className={`relative flex shrink-0 items-center justify-center rounded-full border border-gold-mid/50 p-1.5 transition-transform duration-500 group-hover:scale-105 ${className}`}
    >
      <svg viewBox="0 0 100 100" className="size-full fill-none stroke-current text-gold" strokeWidth="2.5">
        <path d="M 85 50 A 35 35 0 1 1 50 15 A 28 28 0 0 0 85 50 Z" fill="rgba(184, 142, 40, 0.15)" />
        <path
          d="M 45 48 C 50 42 62 45 64 52 C 65 57 52 68 45 74 C 38 68 25 57 26 52 C 28 45 40 42 45 48 Z"
          strokeDasharray="2 2"
          strokeWidth="1.8"
        />
        <path d="M 68 40 L 75 38 L 73 44 Z" fill="currentColor" />
      </svg>
    </span>
  )
}

export function Logo({ compact = false }) {
  return (
    <a href="#inicio" className="group flex items-center gap-3" aria-label="Exótica Tours VIP — inicio">
      <LogoMark className={compact ? 'size-9' : 'size-10'} />
      <span className="flex flex-col">
        <span className="font-serif text-xl leading-none tracking-wide text-gold sm:text-2xl">Exótica Tours VIP</span>
        <span className="pt-1 text-[9px] font-semibold tracking-[0.35em] text-slate uppercase">Abu Dhabi &amp; Middle East</span>
      </span>
    </a>
  )
}
