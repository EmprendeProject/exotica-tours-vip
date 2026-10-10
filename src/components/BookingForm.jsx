import { useState } from 'react'
import { FORM_DESTINATIONS, FORM_STYLES, whatsappLink } from '../data/site'
import { Icon, SectionHeading } from './ui'

export default function BookingForm({ selectedTour, onClearTour }) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: 'Abu Dhabi',
    dates: '',
    style: 'Lujo & privacidad',
    notes: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contacto" aria-labelledby="contacto-title" className="relative border-t border-line bg-sand px-5 py-20 md:px-16 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          id="contacto-title"
          eyebrow="Concierge privado"
          title="Diseñemos tu viaje"
          accent="a medida."
          description="Comparte tus preferencias preliminares. Un asesor de viajes de nuestro equipo en Abu Dhabi se pondrá en contacto contigo en menos de 12 horas."
          className="mb-12"
        />

        {selectedTour && (
          <div className="mb-8 flex items-center justify-between border border-gold-mid/40 bg-white p-4 text-xs shadow-sm">
            <div className="flex items-center gap-2">
              <Icon name="bookmark" className="text-gold" />
              <span>
                Solicitud para experiencia:{' '}
                <strong className="text-ink">{selectedTour.title}</strong> ({selectedTour.location})
              </span>
            </div>
            <button
              type="button"
              onClick={onClearTour}
              className="cursor-pointer font-semibold text-slate uppercase underline hover:text-gold"
            >
              Cambiar
            </button>
          </div>
        )}

        {submitted ? (
          <div className="border border-gold-mid/50 bg-white p-8 text-center shadow-xl md:p-12" role="alert">
            <span className="mb-4 inline-flex size-14 items-center justify-center rounded-full bg-gold/10 text-gold">
              <Icon name="check_circle" className="text-3xl" />
            </span>
            <h3 className="font-serif text-2xl text-ink">¡Solicitud recibida!</h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
              Gracias, <strong>{formData.name}</strong>. Hemos registrado tu solicitud. Nuestro equipo concierge VIP en Abu Dhabi la revisará y te contactará a la brevedad.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={whatsappLink(
                  `Hola, acabo de enviar una solicitud en la web. Mi nombre es ${formData.name}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Icon name="chat" className="text-base" /> Contactar por WhatsApp ahora
              </a>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="btn-outline"
              >
                Enviar otra consulta
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 border border-line bg-white p-6 shadow-xl md:p-12"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="form-name" className="field-label">
                  Nombre Completo *
                </label>
                <input
                  id="form-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Ej. Alejandro Mendoza"
                  value={formData.name}
                  onChange={handleChange}
                  className="field"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="form-phone" className="field-label">
                  WhatsApp con Código de País *
                </label>
                <input
                  id="form-phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+34 600 000 000 / +52 55..."
                  value={formData.phone}
                  onChange={handleChange}
                  className="field"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="form-email" className="field-label">
                  Correo Electrónico *
                </label>
                <input
                  id="form-email"
                  name="email"
                  type="email"
                  required
                  placeholder="tu@dominio.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="field"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="form-destination" className="field-label">
                  Destino de Interés
                </label>
                <select
                  id="form-destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="field cursor-pointer"
                >
                  {FORM_DESTINATIONS.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="form-dates" className="field-label">
                  Fechas Estimadas / Duración
                </label>
                <input
                  id="form-dates"
                  name="dates"
                  type="text"
                  placeholder="Ej. Noviembre 2025 / 7 Días"
                  value={formData.dates}
                  onChange={handleChange}
                  className="field"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="form-style" className="field-label">
                  Estilo de Viaje
                </label>
                <select
                  id="form-style"
                  name="style"
                  value={formData.style}
                  onChange={handleChange}
                  className="field cursor-pointer"
                >
                  {FORM_STYLES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="form-notes" className="field-label">
                Deseos Particulares &amp; Requerimientos Especiales
              </label>
              <textarea
                id="form-notes"
                name="notes"
                rows="4"
                placeholder="Menciona si deseas actividades específicas, restaurantes recomendados, asistencia en aeropuerto o requerimientos familiares..."
                value={formData.notes}
                onChange={handleChange}
                className="field"
              />
            </div>

            <div className="pt-4 text-center">
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Enviar solicitud a mi Travel Designer
              </button>
              <p className="mt-3 text-[11px] text-slate">
                Información tratada con estricta confidencialidad. Sin compromisos.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
