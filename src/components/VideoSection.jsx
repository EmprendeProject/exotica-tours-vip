import { useEffect, useRef, useState } from 'react'

const VIMEO_ID = '1234556392'

export default function VideoSection() {
  const wrapperRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [loaded, setLoaded] = useState(false)

  // Intersection Observer — activa la animación cuando entra en pantalla
  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      aria-label="Video de experiencia Exótica Tours VIP"
      ref={wrapperRef}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(48px) scale(0.98)',
        transition: visible
          ? 'opacity 1.1s cubic-bezier(0.22,1,0.36,1), transform 1.1s cubic-bezier(0.22,1,0.36,1)'
          : 'none',
      }}
      className="relative w-full overflow-hidden bg-black"
    >
      {/* Línea dorada decorativa en la parte superior */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'scaleX(1)' : 'scaleX(0)',
          transition: 'opacity 0.8s ease 0.5s, transform 0.9s cubic-bezier(0.22,1,0.36,1) 0.5s',
          transformOrigin: 'left',
        }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-light to-transparent z-10"
      />

      {/* Contenedor del iframe con aspect ratio 16:9 */}
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        {/* Skeleton/placeholder mientras carga */}
        {!loaded && (
          <div className="absolute inset-0 bg-black flex items-center justify-center">
            <div className="w-10 h-10 rounded-full border-2 border-gold-light/30 border-t-gold-light animate-spin" />
          </div>
        )}

        <iframe
          src={`https://player.vimeo.com/video/${VIMEO_ID}?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0&controls=1&color=b8982a`}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          allowFullScreen
          title="Exótica Tours VIP — Experiencias de lujo en Dubái y Abu Dhabi"
          onLoad={() => setLoaded(true)}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            border: 'none',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.6s ease',
          }}
        />
      </div>

      {/* Línea dorada decorativa en la parte inferior */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'scaleX(1)' : 'scaleX(0)',
          transition: 'opacity 0.8s ease 0.8s, transform 0.9s cubic-bezier(0.22,1,0.36,1) 0.8s',
          transformOrigin: 'right',
        }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-light to-transparent z-10"
      />
    </section>
  )
}
