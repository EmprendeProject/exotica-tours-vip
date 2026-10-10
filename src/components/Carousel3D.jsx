import { AnimatePresence, motion } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { CAROUSEL_EXPERIENCES } from '../data/site'

export default function Carousel3D({ experiences = CAROUSEL_EXPERIENCES }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const hoverTimerRef = useRef(null)
  const containerRef = useRef(null)
  const touchStartXRef = useRef(null)

  const count = experiences.length

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % count)
  }, [count])

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + count) % count)
  }, [count])

  // Navegación por teclado
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev()
      } else if (e.key === 'ArrowRight') {
        handleNext()
      }
    },
    [handleNext, handlePrev]
  )

  // Hover inteligente con debounce (~120ms) para reorganización suave
  const handleMouseEnterCard = (index) => {
    if (index === activeIndex) return
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current)

    hoverTimerRef.current = setTimeout(() => {
      setActiveIndex(index)
    }, 120)
  }

  const handleMouseLeaveCard = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current)
      hoverTimerRef.current = null
    }
  }

  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current)
    }
  }, [])

  // Touch Swipe para móviles
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return
    const diffX = touchStartXRef.current - e.changedTouches[0].clientX
    if (Math.abs(diffX) > 40) {
      if (diffX > 0) handleNext()
      else handlePrev()
    }
    touchStartXRef.current = null
  }

  // Cálculo del estado 3D según la distancia circular relativa
  const getCardStyle = (index) => {
    let offset = index - activeIndex

    // Wrap circular continuo
    if (offset > Math.floor(count / 2)) {
      offset -= count
    } else if (offset < -Math.floor(count / 2)) {
      offset += count
    }

    // Configuración base por offset
    const isMobile =
      typeof window !== 'undefined' ? window.innerWidth < 640 : false
    const isTablet =
      typeof window !== 'undefined'
        ? window.innerWidth >= 640 && window.innerWidth < 1024
        : false

    // Escalado de distancias X según pantalla (ajustado para tarjetas más anchas)
    const xStep = isMobile ? 110 : isTablet ? 170 : 240

    if (offset === 0) {
      return {
        translateX: 0,
        translateZ: isMobile ? 40 : 90,
        rotateY: 0,
        scale: isMobile ? 1.02 : 1.06,
        opacity: 1,
        zIndex: 30,
        filter: 'brightness(1)',
      }
    }
    if (offset === 1) {
      return {
        translateX: xStep,
        translateZ: isMobile ? -30 : -50,
        rotateY: -12,
        scale: isMobile ? 0.82 : 0.88,
        opacity: 0.9,
        zIndex: 20,
        filter: 'brightness(0.82)',
      }
    }
    if (offset === -1) {
      return {
        translateX: -xStep,
        translateZ: isMobile ? -30 : -50,
        rotateY: 12,
        scale: isMobile ? 0.82 : 0.88,
        opacity: 0.9,
        zIndex: 20,
        filter: 'brightness(0.82)',
      }
    }
    if (offset === 2) {
      return {
        translateX: xStep * 1.85,
        translateZ: isMobile ? -80 : -140,
        rotateY: -20,
        scale: isMobile ? 0.68 : 0.76,
        opacity: isMobile ? 0.4 : 0.72,
        zIndex: 10,
        filter: 'brightness(0.65)',
      }
    }
    if (offset === -2) {
      return {
        translateX: -xStep * 1.85,
        translateZ: isMobile ? -80 : -140,
        rotateY: 20,
        scale: isMobile ? 0.68 : 0.76,
        opacity: isMobile ? 0.4 : 0.72,
        zIndex: 10,
        filter: 'brightness(0.65)',
      }
    }

    // Para elementos fuera del rango visible directo (+-2)
    return {
      translateX: offset * xStep,
      translateZ: -200,
      rotateY: offset > 0 ? -25 : 25,
      scale: 0.6,
      opacity: 0,
      zIndex: 0,
      filter: 'brightness(0.5)',
    }
  }

  const currentExp = experiences[activeIndex]

  return (
    <section
      id="inicio"
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Carrusel 3D de experiencias de lujo"
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-cream pt-20 pb-6 outline-none select-none"
    >
      {/* 1. Fondo Dinámico Desenfocado con Crossfade Smooth */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentExp.id}
            src={currentExp.image}
            alt=""
            aria-hidden="true"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 0.15, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
            className="size-full object-cover filter blur-3xl saturate-50"
          />
        </AnimatePresence>
        {/* Viñeta lateral muy sutil en tono beige */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(251,249,244,0.85)_100%)]" />
      </div>

      {/* 2. Líneas Arquitectónicas Horizontales y Verticales */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 flex justify-between px-5 opacity-30 md:px-16"
      >
        <div className="h-full w-px bg-gradient-to-b from-transparent via-gold to-transparent" />
        <div className="hidden h-full w-px bg-gradient-to-b from-transparent via-line to-transparent md:block" />
        <div className="h-full w-px bg-gradient-to-b from-transparent via-gold to-transparent" />
      </div>

      {/* 3. Escenario 3D Coverflow Container */}
      <div className="relative z-20 my-auto flex h-[400px] w-full max-w-7xl items-center justify-center sm:h-[460px] md:h-[520px]">
        <div
          className="relative flex size-full items-center justify-center"
          style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
        >
          {experiences.map((exp, idx) => {
            const style = getCardStyle(idx)
            const isCenter = idx === activeIndex

            return (
              <motion.div
                key={exp.id}
                onClick={() => setActiveIndex(idx)}
                onMouseEnter={() => handleMouseEnterCard(idx)}
                onMouseLeave={handleMouseLeaveCard}
                animate={{
                  x: style.translateX,
                  z: style.translateZ,
                  rotateY: style.rotateY,
                  scale: style.scale,
                  opacity: style.opacity,
                  filter: style.filter,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 220,
                  damping: 26,
                  mass: 0.8,
                }}
                style={{
                  zIndex: style.zIndex,
                  transformStyle: 'preserve-3d',
                }}
                className={`absolute cursor-pointer transition-shadow duration-300 ${
                  isCenter
                    ? 'ring-1 ring-gold/40 shadow-[0_28px_50px_rgba(119,90,0,0.15)]'
                    : 'shadow-[0_12px_30px_rgba(0,0,0,0.1)] hover:brightness-100'
                }`}
              >
                <div className="relative h-[320px] w-[260px] overflow-hidden bg-sand sm:h-[390px] sm:w-[320px] md:h-[440px] md:w-[370px]">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="size-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                  />
                  {/* Overlay en degradado claro para asegurar legibilidad del texto oscuro sobre la imagen */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cream/90 via-cream/40 to-transparent" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* 4. Texto Flotante sobre las fotografías (Sin bloquear eventos de mouse sobre imágenes) */}
        <div className="pointer-events-none absolute inset-0 z-40 flex flex-col items-center justify-center px-6 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentExp.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="flex max-w-3xl flex-col items-center drop-shadow-sm"
            >
              {/* Badge Ubicación */}
              <span className="eyebrow mb-3 tracking-[0.3em] text-gold">
                {currentExp.location}
              </span>

              {/* Título Principal Grande en Mayúsculas */}
              <h1 className="font-serif text-3xl font-normal tracking-wide text-ink uppercase sm:text-5xl md:text-6xl lg:text-[64px] leading-tight">
                {currentExp.title}
              </h1>

              {/* Subtítulo y Descripción */}
              <p className="mt-3 font-serif italic text-gold-dark text-lg sm:text-xl md:text-2xl">
                {currentExp.subtitle}
              </p>
              <p className="mt-3 max-w-xl text-xs font-light tracking-wide text-slate sm:text-sm md:text-base leading-relaxed hidden sm:block">
                {currentExp.description}
              </p>

              {/* Botón Explorar Experiencia con pointer-events-auto */}
              <div className="pointer-events-auto mt-6 flex gap-4">
                <a
                  href={currentExp.href}
                  className="btn-primary !px-7 !py-3 shadow-xl backdrop-blur-md transition-transform duration-300 hover:scale-105"
                >
                  Explorar experiencia
                </a>
                <a
                  href="#contacto"
                  className="btn-outline !px-7 !py-3 backdrop-blur-md hidden md:inline-flex"
                >
                  Diseñar mi viaje
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 5. Botones de Navegación Discretos (Flechas Izquierda / Derecha) */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Experiencia anterior"
          className="group absolute left-3 sm:left-6 z-50 flex size-11 items-center justify-center rounded-full border border-gold/30 bg-white/80 text-gold backdrop-blur-md transition-all duration-300 hover:bg-gold hover:text-white hover:border-gold active:scale-95 shadow-sm"
        >
          <ChevronLeft className="size-6 transition-transform group-hover:-translate-x-0.5" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Siguiente experiencia"
          className="group absolute right-3 sm:right-6 z-50 flex size-11 items-center justify-center rounded-full border border-gold/30 bg-white/80 text-gold backdrop-blur-md transition-all duration-300 hover:bg-gold hover:text-white hover:border-gold active:scale-95 shadow-sm"
        >
          <ChevronRight className="size-6 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* Indicadores de Posición (Dots) en la parte inferior */}
      <div className="relative z-30 flex items-center justify-center gap-2 pt-4">
        {experiences.map((exp, idx) => (
          <button
            key={exp.id}
            type="button"
            onClick={() => setActiveIndex(idx)}
            aria-label={`Ir a la diapositiva ${idx + 1}`}
            className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
              idx === activeIndex
                ? 'w-8 bg-gold'
                : 'w-2 bg-gold/30 hover:bg-gold/60'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
