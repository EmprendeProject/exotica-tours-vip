import { useEffect, useRef, useState } from 'react'

const VIMEO_ID = '1234556392'

export default function HeroVideo() {
  const [ready, setReady] = useState(false)
  const iframeRef = useRef(null)

  // Pequeño delay para dejar que el iframe conecte antes de animar el texto
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 600)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="inicio-video"
      aria-label="Hero con video de fondo — Exótica Tours VIP"
      className="relative w-full h-svh min-h-[600px] overflow-hidden flex items-center justify-center bg-black"
    >
      {/* ── VIDEO DE FONDO EN BUCLE (Vimeo background mode) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <iframe
          ref={iframeRef}
          src={`https://player.vimeo.com/video/${VIMEO_ID}?background=1&autoplay=1&loop=1&muted=1&byline=0&title=0&portrait=0`}
          allow="autoplay; fullscreen"
          title=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            /* Hack para que el iframe sea siempre más grande que el viewport
               y el video llene completamente sin barras negras */
            top: '50%',
            left: '50%',
            width: '100vw',
            height: '56.25vw',   /* 16:9 */
            minWidth: '177.78vh', /* 16:9 vertical */
            minHeight: '100vh',
            transform: 'translate(-50%, -50%)',
            border: 'none',
          }}
        />
      </div>

      {/* ── CAPAS DE OVERLAY ── */}
      {/* Oscurecimiento general para legibilidad */}
      <div className="absolute inset-0 z-10 bg-black/50" />
      {/* Viñeta en los bordes */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)]" />
      {/* Gradiente inferior para fusionar con la siguiente sección */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-40 bg-gradient-to-t from-black/80 to-transparent" />

      {/* ── LÍNEAS ARQUITECTÓNICAS ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-20 flex justify-between px-8 opacity-20 md:px-20">
        <div className="h-full w-px bg-gradient-to-b from-transparent via-gold-light to-transparent" />
        <div className="hidden h-full w-px bg-gradient-to-b from-transparent via-gold-light/40 to-transparent md:block" />
        <div className="h-full w-px bg-gradient-to-b from-transparent via-gold-light to-transparent" />
      </div>

      {/* ── CONTENIDO CENTRAL ── */}
      <div className="relative z-30 flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto">

        {/* Eyebrow */}
        <span
          className="eyebrow tracking-[0.4em] text-gold-light mb-6 uppercase"
          style={{
            opacity: ready ? 1 : 0,
            transform: ready ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1s ease 0.2s, transform 1s cubic-bezier(0.22,1,0.36,1) 0.2s',
          }}
        >
          Abu Dhabi · Dubái · Medio Oriente
        </span>

        {/* Título principal */}
        <h1
          className="font-serif text-white font-normal leading-[1.05] tracking-wide uppercase"
          style={{
            fontSize: 'clamp(2.6rem, 7vw, 6rem)',
            opacity: ready ? 1 : 0,
            transform: ready ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 1.1s ease 0.45s, transform 1.1s cubic-bezier(0.22,1,0.36,1) 0.45s',
          }}
        >
          Vive el lujo
          <br />
          <em className="not-italic text-gold-light">sin límites</em>
        </h1>

        {/* Separador dorado */}
        <div
          className="my-8 h-px bg-gradient-to-r from-transparent via-gold-light to-transparent"
          style={{
            width: ready ? '160px' : '0px',
            opacity: ready ? 1 : 0,
            transition: 'width 0.9s cubic-bezier(0.22,1,0.36,1) 0.75s, opacity 0.6s ease 0.75s',
          }}
          aria-hidden="true"
        />

        {/* Subtítulo */}
        <p
          className="max-w-lg text-white/75 text-base sm:text-lg md:text-xl font-light leading-relaxed"
          style={{
            opacity: ready ? 1 : 0,
            transform: ready ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1s ease 0.85s, transform 1s cubic-bezier(0.22,1,0.36,1) 0.85s',
          }}
        >
          Desde Abu Dhabi, diseñamos experiencias de lujo a medida para quienes viajan diferente.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          style={{
            opacity: ready ? 1 : 0,
            transform: ready ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1s ease 1.1s, transform 1s cubic-bezier(0.22,1,0.36,1) 1.1s',
          }}
        >
          <a
            href="#destinos"
            className="btn-gold !px-8 !py-3.5 text-sm tracking-widest uppercase shadow-2xl backdrop-blur-sm transition-transform duration-300 hover:scale-105"
          >
            Descubrir destinos
          </a>
          <a
            href="#contacto"
            className="btn-ghost-gold !px-8 !py-3.5 text-sm tracking-widest uppercase backdrop-blur-sm"
          >
            Diseñar mi viaje
          </a>
        </div>
      </div>

      {/* ── INDICADOR DE SCROLL ── */}
      <div
        className="absolute bottom-8 left-1/2 z-30 flex flex-col items-center gap-2 -translate-x-1/2"
        style={{
          opacity: ready ? 1 : 0,
          transition: 'opacity 1s ease 1.5s',
        }}
        aria-hidden="true"
      >
        <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">Scroll</span>
        <div className="relative h-10 w-px overflow-hidden bg-white/20">
          <div
            className="absolute top-0 left-0 w-full bg-gold-light"
            style={{
              animation: ready ? 'scrollLine 1.8s cubic-bezier(0.4,0,0.6,1) infinite' : 'none',
              height: '40%',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollLine {
          0%   { transform: translateY(-100%); opacity: 1; }
          60%  { transform: translateY(260%); opacity: 1; }
          61%  { opacity: 0; }
          100% { transform: translateY(260%); opacity: 0; }
        }
      `}</style>
    </section>
  )
}
