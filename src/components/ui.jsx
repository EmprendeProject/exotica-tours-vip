/** Ícono de Material Symbols (decorativo por defecto). */
export function Icon({ name, className = '', filled = false, label }) {
  return (
    <span
      className={`material-symbols-outlined ${filled ? 'icon-fill' : ''} ${className}`}
      aria-hidden={label ? undefined : 'true'}
      role={label ? 'img' : undefined}
      aria-label={label}
    >
      {name}
    </span>
  )
}

/** Rombo dorado decorativo. */
export function Diamond({ className = 'bg-gold-mid' }) {
  return <span aria-hidden="true" className={`inline-block size-1.5 rotate-45 ${className}`} />
}

/**
 * Encabezado de sección: eyebrow + título con remate en itálica dorada.
 * `tone="dark"` para secciones sobre fondo navy.
 */
export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = 'center',
  tone = 'light',
  id,
  className = '',
}) {
  const dark = tone === 'dark'
  const centered = align === 'center'

  return (
    <div className={`${centered ? 'mx-auto max-w-3xl text-center' : ''} ${className}`}>
      <div
        className={`eyebrow mb-4 flex items-center gap-3 ${centered ? 'justify-center' : ''} ${
          dark ? 'text-gold-light' : 'text-gold'
        }`}
      >
        {centered ? <Diamond className={dark ? 'bg-gold-light' : 'bg-gold-mid'} /> : <span aria-hidden="true" className={`h-px w-8 ${dark ? 'bg-gold-light' : 'bg-gold-mid'}`} />}
        <span>{eyebrow}</span>
        {centered && <Diamond className={dark ? 'bg-gold-light' : 'bg-gold-mid'} />}
      </div>
      <h2
        id={id}
        className={`font-serif text-3xl leading-tight sm:text-4xl lg:text-[44px] ${dark ? 'text-white' : 'text-ink'}`}
      >
        {title}
        {accent && (
          <>
            {' '}
            <span className={`italic ${dark ? 'text-gold-light' : 'text-gold'}`}>{accent}</span>
          </>
        )}
      </h2>
      {description && (
        <p className={`mt-5 text-[15px] leading-relaxed ${dark ? 'text-mist' : 'text-muted'} ${centered ? 'mx-auto max-w-2xl' : 'max-w-xl'}`}>
          {description}
        </p>
      )}
    </div>
  )
}

/** Marco editorial con esquinas doradas. */
export function CornerFrame({ children, className = '' }) {
  const corner = 'absolute size-3 border-gold-mid'
  return (
    <div className={`relative border border-line bg-white p-3 shadow-xl ${className}`}>
      <span aria-hidden="true" className={`${corner} -top-1.5 -left-1.5 border-t-2 border-l-2`} />
      <span aria-hidden="true" className={`${corner} -top-1.5 -right-1.5 border-t-2 border-r-2`} />
      <span aria-hidden="true" className={`${corner} -bottom-1.5 -left-1.5 border-b-2 border-l-2`} />
      <span aria-hidden="true" className={`${corner} -right-1.5 -bottom-1.5 border-r-2 border-b-2`} />
      {children}
    </div>
  )
}
