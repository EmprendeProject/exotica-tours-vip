/**
 * Contenido central de la landing.
 * Todo lo que el cliente pueda querer cambiar (contacto, tours, textos de
 * servicios, testimonios) vive aquí para no tener que tocar los componentes.
 */

// Importaciones de fotos reales de Dubai
import dubai1 from '../assets/dubai fotos/dubai 1.avif'
import dubai2 from '../assets/dubai fotos/dubai 2.jpeg'
import dubai3 from '../assets/dubai fotos/dubai 3.jpg'
import dubai4 from '../assets/dubai fotos/dubai 4.jpeg'
import dubai5 from '../assets/dubai fotos/dubai 5.jpeg'
import dubai6 from '../assets/dubai fotos/dubai 6.jpeg'
import dubai7 from '../assets/dubai fotos/dubai 7.webp'
import dubai8 from '../assets/dubai fotos/dubai 8.webp'

const IMG = 'https://lh3.googleusercontent.com/aida-public/'

/* ------------------------------------------------------------------ */
/* Contacto                                                            */
/* ------------------------------------------------------------------ */
// TODO(cliente): reemplazar por los datos reales antes de publicar.
export const CONTACT = {
  whatsapp: '971500000000', // solo dígitos, con código de país (sin + ni espacios)
  whatsappDisplay: '+971 50 000 0000',
  phone: '+971500000000',
  email: 'info@exoticatours.vip',
  city: 'Abu Dhabi, Emiratos Árabes Unidos',
  website: 'https://exoticatours.vip',
  instagram: '#',
  linkedin: '#',
}

export const whatsappLink = (text = '') =>
  `https://wa.me/${CONTACT.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`

/* ------------------------------------------------------------------ */
/* Navegación                                                          */
/* ------------------------------------------------------------------ */
export const NAV_LINKS = [
  { id: 'destinos', label: 'Destinos' },
  { id: 'experiencias', label: 'Experiencias' },
  { id: 'servicios', label: 'Viajes personalizados' },
  { id: 'nosotros', label: 'Sobre nosotros' },
  { id: 'testimonios', label: 'Inspiración' },
]

/* ------------------------------------------------------------------ */
/* Imágenes — Fotos reales de Dubái                                    */
/* ------------------------------------------------------------------ */
export const IMAGES = {
  // dubai 2 → Burj Khalifa & Downtown Dubai (hero / Dubai principal)
  hero: dubai2,
  // dubai 4 → Camellos en el desierto al atardecer (safari/desert)
  desertLounge: dubai4,
  // dubai 2 → Burj Khalifa skyline (Dubai Marina / Dubai general)
  dubaiMarina: dubai2,
  // dubai 6 → Dubai Frame vista aérea (Abu Dhabi / monumentos)
  grandMosque: dubai6,
  // dubai 5 → Pareja en playa con Burj Al Arab (Qatar / lujo costero)
  qatar: dubai5,
  // dubai 1 → foto alternativa de Dubai (Oman / paisaje)
  oman: dubai1,
  // dubai 3 → Acuario submarino familia (Egipto & Turquía / experiencias)
  egypt: dubai3,
  // dubai 4 → Camellos al atardecer (safari en el desierto)
  desertSafari: dubai4,
  // dubai 7 → Mujer en jet ski frente a Burj Al Arab (yate / mar)
  yacht: dubai7,
  // dubai 6 → Dubai Frame (Louvre Abu Dhabi / cultural)
  louvre: dubai6,
  // dubai 4 → Desierto camellos (Rub al-Khali / Empty Quarter)
  emptyQuarter: dubai4,
  // dubai 8 → Hombre en jet ski Burj Al Arab (jet privado / premium)
  privateJet: dubai8,
  // dubai 5 → Burj Al Arab playa (Yas Marina / resort)
  yasMarina: dubai5,
  // TODO(cliente): retratos generados para el mockup — usar fotos reales de Nini y Melany.
  nini: `${IMG}AB6AXuC9SS0jec2ipL8JFnHFPXY_zpCGgbFFfV6V2dMkyU3SayM6ugJWTCxO0pSCLTDFjE6UoB7snrnLympofbw2Jf2mYMH1TDe4zi-s29CGV_FhS53kKZCCBHfIDLiBR92uCAgiqLhjCdBBPHPE7TyvxzUbePUwFweIFKtJI2OYq0UCed3P_Zdc9suvCYqm14RRoAAn_LBffikVEtYpN5cHFZVesShaxT4Hq2ASTD35KVebld4I0KTbBn8EJQ`,
  melany: `${IMG}AB6AXuBhOhXVFWY1YmAahM7291W_TvJil1fyzNPhV4oAMSjpUNf7ebaEs_nn38bvy-m8f5CyzgH4deZrAnArYiooI5yfcEQuOt-pTw81z_OdoVjkTMBktm_Teri_njKrzWr3DBjwX362TqwLfhuklo01wc633cv1zYvsIskDpPNgYnPKBXI0_zGa2veNz4Xnzr_20sj4-d1gVUddg-7L8XiFvCV7HpokcBYMzITnBvk3a4kxzEMfA7_MUvvLdQ`,
}

/* ------------------------------------------------------------------ */
/* Cifras                                                              */
/* ------------------------------------------------------------------ */
export const STATS = [
  { value: '13+', label: 'Años de nuestras fundadoras en Emiratos' },
  { value: '8+', label: 'Años de experiencia en turismo' },
  { value: 'ES', label: 'Atención y guías en tu idioma' },
  { value: '1:1', label: 'Itinerarios diseñados a tu medida' },
]

/* ------------------------------------------------------------------ */
/* Destinos                                                            */
/* ------------------------------------------------------------------ */
export const DESTINATIONS = [
  {
    name: 'Abu Dhabi',
    region: 'Nuestra casa · EAU',
    badge: 'Sede de Exótica',
    description:
      'Gran Mezquita Sheikh Zayed, Qasr Al Watan, Louvre Abu Dhabi e Isla Yas. Cinco tours privados con guía y conductor, más safari por el desierto.',
    meta: '5 tours privados + safari',
    image: IMAGES.grandMosque,
    alt: 'Patio de mármol blanco de la Gran Mezquita Sheikh Zayed al atardecer',
    href: '#experiencias',
    cta: 'Ver tours',
    size: 'lg',
  },
  {
    name: 'Dubái',
    region: 'Emiratos Árabes Unidos',
    description:
      'Dunas al atardecer, campamentos tradicionales, el skyline más icónico del Golfo y experiencias premium en yate y hoteles emblemáticos.',
    meta: 'Safari + experiencias a medida',
    image: IMAGES.dubaiMarina,
    alt: 'Dubai Marina vista desde la cubierta de un yate al atardecer',
    href: '#experiencias',
    cta: 'Explorar',
    size: 'md',
  },
  {
    name: 'Qatar',
    region: 'Vanguardia & diseño',
    description: 'Doha, sus museos de autor y el mar interior del desierto, en itinerarios diseñados a medida.',
    image: IMAGES.qatar,
    alt: 'Museo en Doha frente al mar con barcos dhow tradicionales',
    href: '#contacto',
    cta: 'Diseñar viaje',
    size: 'sm',
  },
  {
    name: 'Omán',
    region: 'Sultanato místico',
    description: 'Fiordos de Musandam, montañas y silencios infinitos para quienes buscan otro ritmo.',
    image: IMAGES.oman,
    alt: 'Fiordos de Musandam con un dhow navegando entre acantilados',
    href: '#contacto',
    cta: 'Diseñar viaje',
    size: 'sm',
  },
  {
    name: 'Egipto & Turquía',
    region: 'Leyenda milenaria',
    description: 'El Nilo, templos faraónicos y la magia del Bósforo, combinables con tu viaje por Emiratos.',
    image: IMAGES.egypt,
    alt: 'Velero tradicional navegando por el Nilo al atardecer',
    href: '#contacto',
    cta: 'Diseñar viaje',
    size: 'sm',
  },
]

export const TICKER = ['Abu Dhabi', 'Dubái', 'Qatar', 'Omán', 'Egipto', 'Turquía']

/* ------------------------------------------------------------------ */
/* Carrusel 3D Hero Experiencias                                      */
/* ------------------------------------------------------------------ */
export const CAROUSEL_EXPERIENCES = [
  {
    id: 'dubai',
    location: 'DUBÁI — EMIRATOS ÁRABES UNIDOS',
    title: 'Viaja de otra manera.',
    subtitle: 'Descubre experiencias extraordinarias',
    description:
      'Superyates privados, safaris en reservas reales y suites suspendidas sobre el horizonte.',
    image: dubai2,
    href: '#destinos',
  },
  {
    id: 'safari',
    location: 'SAFARI EN EL DESIERTO — AVENTURA INOLVIDABLE',
    title: 'Dunas infinitas al atardecer',
    subtitle: 'Mística y tradición emiratí',
    description:
      'Recorrido 4x4 por dunas rojas, campamentos tradicionales beduinos y cenas bajo el cielo estrellado.',
    image: dubai4,
    href: '#experiencias',
  },
  {
    id: 'burjalarab',
    location: 'DUBÁI — LUJO EN LA COSTA',
    title: 'El hotel más icónico del mundo',
    subtitle: 'Experiencias premium a orillas del mar',
    description:
      'Playas de arena blanca, aguas cristalinas y el Burj Al Arab como telón de fondo de tu historia.',
    image: dubai5,
    href: '#destinos',
  },
  {
    id: 'dubaiframe',
    location: 'DUBÁI — ARQUITECTURA E INNOVACIÓN',
    title: 'Entre el pasado y el futuro',
    subtitle: 'Dubai Frame, una ventana al cielo',
    description:
      'Un símbolo que une la vieja Dubái con la moderna. Vistas 360° desde el puente de cristal más alto del mundo.',
    image: dubai6,
    href: '#destinos',
  },
  {
    id: 'jetski',
    location: 'DUBÁI — AVENTURA EN EL MAR',
    title: 'Adrenalina frente al Burj Al Arab',
    subtitle: 'Experiencias acuáticas de lujo',
    description:
      'Jet ski, navegación privada y deportes acuáticos con las vistas más espectaculares del skyline de Dubái.',
    image: dubai7,
    href: '#experiencias',
  },
]

/* ------------------------------------------------------------------ */
/* Tours (oferta publicada en exoticatours.vip)                        */
/* ------------------------------------------------------------------ */
export const TOUR_FILTERS = [
  { id: 'all', label: 'Todas' },
  { id: 'full', label: 'Full Day' },
  { id: 'half', label: 'Half Day' },
  { id: 'safari', label: 'Safaris' },
]

export const TOURS = [
  {
    id: 'abu-dhabi-iconico',
    category: 'full',
    badge: 'Full Day · Privado',
    location: 'Abu Dhabi',
    title: 'Full Day Abu Dhabi – Icónico',
    description:
      'El recorrido esencial por la capital: sus monumentos más emblemáticos, su herencia y su lado más elegante, en un solo día.',
    highlights: ['Gran Mezquita Sheikh Zayed', 'Qasr Al Watan', 'Corniche', 'Heritage Village', 'Mercado de Dátiles', 'Emirates Palace'],
    facts: [
      { icon: 'schedule', text: '8 horas' },
      { icon: 'badge', text: 'Guía certificado + conductor privado' },
    ],
    image: dubai6,
    alt: 'Dubai Frame vista aérea con el skyline al fondo',
    url: 'https://exoticatours.vip/experiences/full-day-de-abu-dhabi-ic%C3%B3nico',
  },
  {
    id: 'abu-dhabi-qasr-al-watan',
    category: 'half',
    badge: 'Half Day · Privado',
    location: 'Abu Dhabi',
    title: 'Half Day Abu Dhabi – Qasr Al Watan',
    description:
      'Entrada al Palacio Presidencial y recorrido por Corniche e Isla Yas, con paradas fotográficas en los iconos modernos de la ciudad.',
    highlights: ['Palacio Qasr Al Watan', 'Corniche', 'Isla Yas', 'Louvre Abu Dhabi (foto)', 'Ferrari World (foto)', 'Yas Marina Circuit (foto)'],
    facts: [
      { icon: 'schedule', text: 'Medio día' },
      { icon: 'confirmation_number', text: 'Entrada al palacio incluida' },
    ],
    image: dubai2,
    alt: 'Burj Khalifa y Downtown Dubai con escultura corazón',
    url: 'https://exoticatours.vip/experiences/half-day-abu-dhabi-qasr-al-watan-1',
  },
  {
    id: 'abu-dhabi-gran-mezquita',
    category: 'half',
    badge: 'Half Day · Privado',
    location: 'Abu Dhabi',
    title: 'Half Day Abu Dhabi – Gran Mezquita',
    description:
      'Visita a la Gran Mezquita Sheikh Zayed y al Heritage Village, con recorrido panorámico por la Corniche y parada en Emirates Palace.',
    highlights: ['Gran Mezquita Sheikh Zayed', 'Heritage Village', 'Corniche panorámica', 'Emirates Palace (foto)'],
    facts: [
      { icon: 'schedule', text: 'Medio día' },
      { icon: 'directions_car', text: 'Transporte privado' },
    ],
    image: dubai1,
    imageClass: 'object-center',
    alt: 'Panorámica de Dubai desde las alturas',
    url: 'https://exoticatours.vip/experiences/half-day-en-abu-dhabi-gran-mezquita',
  },
  {
    id: 'abu-dhabi-cultural',
    category: 'full',
    badge: 'Full Day · Arte & cultura',
    location: 'Abu Dhabi · Saadiyat',
    title: 'Full Day Abu Dhabi – Cultural',
    description:
      'Un día dedicado al arte, la historia, la arquitectura y la diversidad cultural de la capital emiratí.',
    highlights: ['Louvre Abu Dhabi', 'Casa de la Familia Abrahámica', 'Observation Deck at 300 (Etihad Towers)'],
    facts: [
      { icon: 'schedule', text: 'Día completo' },
      { icon: 'museum', text: 'Entradas según itinerario' },
    ],
    image: dubai3,
    alt: 'Familia en el túnel del acuario de Dubai Mall',
    url: 'https://exoticatours.vip/experiences/full-day-en-abu-dhabi-cultural',
  },
  {
    id: 'abu-dhabi-parques',
    category: 'full',
    badge: 'Full Day · Familias',
    location: 'Abu Dhabi · Isla Yas',
    title: 'Full Day Abu Dhabi – Parques',
    description:
      'Louvre Abu Dhabi e Isla Yas con entrada a uno de sus parques temáticos a elección. Ideal para viajar en familia.',
    highlights: ['Louvre Abu Dhabi', 'Isla Yas', 'Ferrari World, Yas Waterworld, Warner Bros. World o SeaWorld', 'Yas Marina Circuit (foto)'],
    facts: [
      { icon: 'schedule', text: 'Día completo' },
      { icon: 'attractions', text: '1 parque a elegir incluido' },
    ],
    image: dubai5,
    imageClass: 'object-top',
    alt: 'Pareja en la playa frente al Burj Al Arab',
    url: 'https://exoticatours.vip/experiences/full-day-abu-dhabi-parques',
  },
  {
    id: 'safari-dubai',
    category: 'safari',
    badge: 'Safari · Desierto',
    location: 'Dubái',
    title: 'Safari por el desierto en Dubái',
    description:
      'Todoterreno por las dunas, fotos al atardecer, sandboarding y un corto paseo en camello, para terminar con cena buffet y espectáculos en un campamento tradicional.',
    highlights: ['4x4 por las dunas', 'Sandboarding', 'Paseo en camello', 'Campamento tradicional', 'Cena buffet', 'Shows culturales'],
    facts: [
      { icon: 'schedule', text: 'De 4 horas a 1 día' },
      { icon: 'translate', text: 'Idioma registrado: inglés' },
    ],
    image: dubai4,
    alt: 'Camellos y beduinos en las dunas del desierto al atardecer',
    url: 'https://exoticatours.vip/experiences/safari-por-el-desierto-en-dubai',
  },
  {
    id: 'safari-abu-dhabi',
    category: 'safari',
    badge: 'Safari · Desierto',
    location: 'Abu Dhabi',
    title: 'Safari por el desierto en Abu Dhabi',
    description:
      'Aventura 4x4, visita a una granja de camellos, sandboarding y fotos con vestimenta árabe, con entretenimiento cultural y cena BBQ.',
    highlights: ['Aventura 4x4', 'Granja de camellos', 'Sandboarding', 'Fotos con vestimenta árabe', 'Cena buffet BBQ'],
    facts: [
      { icon: 'schedule', text: 'De 4 horas a 1 día' },
      { icon: 'translate', text: 'Idioma registrado: inglés' },
    ],
    image: dubai8,
    alt: 'Aventura en jet ski frente al Burj Al Arab de Dubai',
    url: 'https://exoticatours.vip/experiences/safari-por-el-desierto-en-abu-dabi',
  },
]

/* ------------------------------------------------------------------ */
/* Servicios                                                           */
/* ------------------------------------------------------------------ */
export const SERVICES = [
  { icon: 'directions_car', title: 'Tours privados', text: 'Recorridos exclusivos con conductor y guía para ti o tu grupo.' },
  { icon: 'groups', title: 'Tours compartidos', text: 'Excursiones junto a otros viajeros, con la misma calidad de servicio.' },
  { icon: 'design_services', title: 'Experiencias personalizadas', text: 'Itinerarios adaptados a tus intereses, preferencias y necesidades.' },
  { icon: 'landscape', title: 'Safaris', text: 'Aventuras en el desierto con actividades y experiencias culturales.' },
  { icon: 'diamond', title: 'Turismo de lujo', text: 'Hoteles emblemáticos, yates y actividades premium exclusivas.' },
  { icon: 'hotel', title: 'Reservas hoteleras', text: 'Gestionamos tu alojamiento según tu estilo y presupuesto.' },
  { icon: 'support_agent', title: 'Asesoría turística', text: 'Recomendaciones, orientación y planificación de itinerarios.' },
]

export const B2B_SERVICES = [
  { icon: 'business_center', title: 'Turismo corporativo', text: 'Experiencias y servicios turísticos para empresas y delegaciones que visitan Emiratos.' },
  { icon: 'emoji_events', title: 'Viajes de incentivos', text: 'Viajes organizados para premiar y motivar a equipos y grupos empresariales.' },
  { icon: 'trending_up', title: 'Turismo de inversión', text: 'Acompañamiento para viajeros que visitan la región con fines de inversión.' },
]

/* ------------------------------------------------------------------ */
/* Qué incluye                                                         */
/* ------------------------------------------------------------------ */
export const INCLUDED = [
  'Recogida y regreso al hotel, puerto de cruceros o residencia',
  'Transporte privado con conductor',
  'Guía profesional (en los tours que lo especifican)',
  'Agua embotellada',
  'Entradas a atracciones, cuando se indican en el itinerario',
  'Recorridos panorámicos y paradas fotográficas',
]

export const NOT_INCLUDED = [
  'Almuerzo y bebidas adicionales, salvo que el paquete lo indique',
  'Compras personales y souvenirs',
  'Propinas (opcionales)',
  'Actividades o entradas no contempladas expresamente',
]

/* ------------------------------------------------------------------ */
/* Fundadoras                                                          */
/* ------------------------------------------------------------------ */
export const FOUNDERS = [
  {
    name: 'Nini Díaz',
    role: 'Co-fundadora & Gerente General',
    bio: 'Lidera la gestión empresarial, las alianzas, el desarrollo de productos turísticos y las relaciones comerciales de Exótica.',
    image: IMAGES.nini,
  },
  {
    name: 'Melany Díaz',
    role: 'Co-fundadora & Gerente de Marketing y Experiencia del Cliente',
    bio: 'Dirige la comunicación, las campañas y las redes sociales, y cuida que cada viajero viva una experiencia impecable de principio a fin.',
    image: IMAGES.melany,
  },
]

/* ------------------------------------------------------------------ */
/* Testimonios                                                         */
/* TODO(cliente): textos de ejemplo. Reemplazar por reseñas reales     */
/* (Google, TripAdvisor, WhatsApp) con autorización de los clientes.   */
/* ------------------------------------------------------------------ */
export const TESTIMONIALS = [
  {
    quote:
      'Hicimos el Full Day Icónico y el safari en familia. Todo en español, puntualidad absoluta y un trato tan cálido que nos sentimos en casa desde el primer día.',
    name: 'Familia C.',
    origin: 'Ciudad de México',
  },
  {
    quote:
      'Nos armaron un itinerario a medida entre Abu Dhabi y Dubái para nuestro aniversario. Cada detalle estaba pensado; no tuvimos que preocuparnos de nada.',
    name: 'Carlos & Patricia',
    origin: 'Madrid, España',
  },
  {
    quote:
      'La visita a la Gran Mezquita y a Qasr Al Watan con nuestra guía fue lo mejor del viaje. Se nota que conocen Emiratos desde dentro.',
    name: 'Valerie & Roberto',
    origin: 'Miami, Florida',
  },
]

/* ------------------------------------------------------------------ */
/* Formulario                                                          */
/* ------------------------------------------------------------------ */
export const FORM_DESTINATIONS = [
  'Abu Dhabi',
  'Dubái',
  'Abu Dhabi + Dubái',
  'Qatar',
  'Omán',
  'Egipto / Turquía',
  'Combinado varios países',
  'Aún no lo sé',
]

export const FORM_STYLES = [
  'Lujo & privacidad',
  'Luna de miel & romance',
  'Familiar',
  'Cultural',
  'Aventura & desierto',
  'Corporativo / Incentivos',
]
