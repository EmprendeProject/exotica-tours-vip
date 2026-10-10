/**
 * Contenido central de la landing.
 * Todo lo que el cliente pueda querer cambiar (contacto, tours, textos de
 * servicios, testimonios) vive aquí para no tener que tocar los componentes.
 */

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
/* Imágenes                                                            */
/* TODO(cliente): son imágenes provisionales del mockup. Sustituir por */
/* fotografías propias (idealmente en /public, en WebP/AVIF).          */
/* ------------------------------------------------------------------ */
export const IMAGES = {
  hero: `${IMG}AB6AXuDu7pOPkmREHkRVctX7NPtYUHNe8hSqRK6543X6JRarfMqi4Fs8tIAqRJrA_XaYtjMC1tXmRp-fleeO5tKzoIIMfrokiMNnJtupirkH1EhrMqtKsSpnQI54_bkPJz4kKlLFKT63rp5RO-vlsHxUYvmAmtELoxwXvDch4anWMjTWrSmnVXqbKXvLMaq6_EKj6NhnjXgXYe7OD0vu8sJviZpFgNy7jeCV2-OgGqXtPiWPaGXzqTGplH46Og`,
  desertLounge: `${IMG}AB6AXuByfUXlxB97xFPXtEEL_TIq_UWNDaMkI_44tKhE-uroERHfmFXcacMGKpXclg7t60tZxiO_orHGs9OoqsscmsesAanji31pFNzm-cD4nc4XoWKbaKxJrkZzpODIX_sET443YeNds_PGNCuR-xWtruhNPmoiY-C_rW6e1_BRyjpGdfcHMbQmjLIrXBq_HntejwsIP-cnJU2dMHXXqYwlsc18gI1W_b51fdt9Ulb_xiiLVvgpodJO5ZNsUw`,
  dubaiMarina: `${IMG}AB6AXuBSWOtzee39Zk61KA7MpplLWxHT2tv-Lw_dysuHzbyAxHrv2ec1zkGEca1e0z8gEeUFX2od8Ktj67xa3V0zcKurvso8S1nkYLpYBJG2TSwoPSgAoaGsTWm26_cKRThmjg1PAIgqvuWnuHJLCYM48KTbv06kSeNPyhHCDcOL9jhsHufrniV01sxaYoUHA_1EOvgbKVMIfGB4wGu4N8xf22LVHEPEQp7K4vZg_Ic-QNetVN2ky8yFAImpKw`,
  grandMosque: `${IMG}AB6AXuAq4BStl73dZ9j5gNo3CKcAomAFVnEjDlJh__Le1cvdM-PaP-VdLzpSAKP96Qaa5Iikz9XIcCb1esLtXjTTRlbZ8rdfsUZqJZ9_ISaF6n_WVyokRg553yI51N752wVPZOwUQEA11yTGM3pkbMU_rZhVE0kWP4ZS3HRe8-wJSpRtiLoO15OFgZ6KvYGFR6xdtZ3aJVe3i0dku2CPAU9e7R1LucAreWPp5Xf1R9Ki4k4038VAWqTzjWxiiQ`,
  qatar: `${IMG}AB6AXuBNKFa2nfsluVYwDEveXqp7AtncpGKz827-qaVbwxWTtRQca4FHl6XBagsaa5JUhjM3U7PY0vGrlqcnBeTKaK6vZmVg_Zem6L1WhYLCCQu773w3B2eAPs1VqEFmN8oAttff22nFody_I7rldOHOhPAX-p2_8qHFbsBJCVctFuDq9ibwxW7cpY0z75Vf7tkGmLlIRyqbseQymwjXiZFNsICbLfF7OEYnyGEXGoLU4bWHHwX-XuNn0-JA0A`,
  oman: `${IMG}AB6AXuBuWNQ3CF0cYOk8ApBEEa7erj3xpZ1sn5T5pm1kvotiaHKdCHjb3Dy4PBsCJzWMK3wjDuj1cJiwZYSADCc86DBllHxY79lYlD7nKjPoh9TH_j9MyHQ1oVd-vmu6UjQKoMrJr-556DYpZQyJOZBzZCpo5YsTrUe2xDaIHvRhlfUFiJkN3V0fgjXM3ds9gp7rEYnvBx9mWEWfcib4nas12DvzHivcZuxds2zm0OVOrAaZagRgw93kpAsgQQ`,
  egypt: `${IMG}AB6AXuAmyN2x2ffcTpgDrImPvNBp4Qk0yMElZPPJLHXCJFz8fDCPO7BEI3yyV_rhJ67waQFPN2uJyA3vuyWUZYfwYfgHNUwM5U4V1Xlu7aLuchW53Ssc5zAaGlI66cDnRojtsehjjIsRVpR4y4GGe7JMg1drKdwoqekf91mNTLfKP4M5c5GUK2CFia6-Ix5PEMPuFgbwUAoAEoiAd7eEsCctxPH25HdB2WKSgyndzdGaJIaBlLfIWYv4pi7CUQ`,
  desertSafari: `${IMG}AB6AXuDMFj4N1N1jHyMA4hI_4YxJXErtmTRHD3BqJD551hXN0unZj48MqynPSs1L1YX0Eg_vXGdgKK5u1tym8atCreoS9K14m4Tx-wjZgzCSGjA-3xeeFui3-vZPIHdVXPjLfhB0EV83HOQjzEUN0QyyAtBqyVbnhWAB81y-fZ2rKK_sZjrZg-i_m5uG8NXzkmuhoAzf7XwoPDTJCTixeEQRbY1GB0h6CcfbdC7ABMocWruXbtnsASTgbtjosw`,
  yacht: `${IMG}AB6AXuAOQ7RgpiU_z5fWDcmhF7u20uzUeBI3xm2oWRxf5dS3Gt1Tmdzy1Z7CE0nsYVywdBnzwRoAz00p_rgKvyM4cewIPlwEIg22BvUAe-yfNjfWHBata2F5cwdzS1JPKZiT_wAjiV6HAL9GqNpE4f61MuH0MIK4ptDCBKZwxJbMHIazhfW8fi6cS6C4tbJsNXVRGXzB32TzSUtaXof1GLvIqtIm9EBSfspoklNRY8oqxGXeEc3xBeHwtVuIww`,
  louvre: `${IMG}AB6AXuBkTnoKBlZa4TagAYZqm_YeooKgfF7oIamlHHPWAcuJ627wonCIlYgDogRlPrVsai0KRPCpJY0qkDdQRaSPd43-L9kgGs7QK4GdDu_grzsDEw5SquA_FTImtBgEPRQbmylT_SmHkGonEUqYvkSpTBwNUW26j3Q_fk_-2016wNMhaUuLlZy1Y9mQEF8XHHFTB0zkC-GgK2cO-eifujhqUzdLQ-7Am3MltD9CZPJzcZ6QYXekAu6_137HeA`,
  emptyQuarter: `${IMG}AB6AXuA_KI3GxhHk8eOR93Fr-alxwuaYQSFQWiN88_BpgKgM0qSURDJXTIdTnLQX1yzTqudHg-lfewt1GN2orTzfnhUmKYWaz4qwgodag2mB2RqxlGrciwewKJy8AGS146hHyspm2wvloLSXmQQZbEsvQkqcq8ibJM1PnA7Vpan17mpgJrgQI8nR9rNf020K7MikarbmupGr-8AMl9INserEDrpn0JO1qMTr-9VYCIZ15xIMd4oMzlHqR9NlKw`,
  privateJet: `${IMG}AB6AXuAFMDAzPE4C1AaaNFRGYeCvzqBkNH9i3EZ9JCl8CuKkftvx2djjzIQT72xOkicW9ICXHaSCNTbDQ1vIOVLTtbrWSoZ7Pn4lxLmqQWEjYrr28v18_Tc_IT84e96l37GzJmHsOFl0TMEL2OCWqtbsB-mBEbBhSvVC-AuP1qCZVCjygGJKrFZQ9Zl39Rp0Wx5R-U4D-uL-ntv3DtrEpwHK3tPP2MR7knaAjkUDDMVY7DvYjPiBB-Ftb9kUug`,
  yasMarina: `${IMG}AB6AXuApDiNpIU5cWacKYNNIOm7NyIUta6ANOvtNwOLsCpyBUCada4-JGQhdab8UbolZzxF6P5r56_rm3W1tMaS-Cg1-BPWeviHgpLqzsaV0z524LXdW4zgZ8hVmqv7IfpjzXnn0i8ssUhLWzx7OVougdtnnhQmsDhQw15ihecDNWvImZPLYxypjP0ErO0v8jz8AQFSNnvjopOvlyxprkdGKK1Eg4w7qK6VluTxsuVAUNzt5hlzgnCtebIv6QA`,
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
    image: IMAGES.dubaiMarina,
    href: '#destinos',
  },
  {
    id: 'abudhabi',
    location: 'ABU DHABI — LUJO Y CULTURA',
    title: 'Grandiosidad e historia inmemorial',
    subtitle: 'Sede central de Exótica Tours',
    description:
      'El Louvre bajo la lluvia de luz, accesos privados a Qasr Al Watan y la majestuosa Gran Mezquita Sheikh Zayed.',
    image: IMAGES.grandMosque,
    href: '#destinos',
  },
  {
    id: 'safari',
    location: 'SAFARI EN EL DESIERTO — AVENTURA INOLVIDABLE',
    title: 'Dunas infinitas al atardecer',
    subtitle: 'Mística y tradición emiratí',
    description:
      'Recorrido 4x4 por dunas rojas, campamentos tradicionales beduinos y cenatorios bajo el cielo estrellado.',
    image: IMAGES.desertSafari,
    href: '#experiencias',
  },
  {
    id: 'qatar',
    location: 'QATAR — VANGUARDIA & DISEÑO',
    title: 'Arquitectura y mar interior',
    subtitle: 'La península del diseño',
    description:
      'Travesías al Inland Sea y noches en resorts de ultralujo a orillas del Golfo Pérsico.',
    image: IMAGES.qatar,
    href: '#destinos',
  },
  {
    id: 'oman',
    location: 'OMÁN — SULTANATO MÍSTICO',
    title: 'Fiordos y montañas sagradas',
    subtitle: 'Paz e intimidad absoluta',
    description:
      'Navegación en dhows tradicionales por los acantilados de Musandam y retiros en Jebel Akhdar.',
    image: IMAGES.oman,
    href: '#destinos',
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
    image: IMAGES.grandMosque,
    alt: 'Gran Mezquita Sheikh Zayed iluminada al anochecer',
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
    image: IMAGES.yasMarina,
    alt: 'Circuito Yas Marina iluminado de noche junto al puerto',
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
    image: IMAGES.grandMosque,
    imageClass: 'object-[center_80%]',
    alt: 'Arcos y cúpulas de la Gran Mezquita reflejados en el agua',
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
    image: IMAGES.louvre,
    alt: 'Galería del Louvre Abu Dhabi bajo su cúpula geométrica',
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
    image: IMAGES.yasMarina,
    imageClass: 'object-left',
    alt: 'Isla Yas de noche con el circuito y el puerto iluminados',
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
    image: IMAGES.desertSafari,
    alt: 'Todoterreno clásico en las dunas rojas de Dubái al atardecer',
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
    image: IMAGES.desertLounge,
    alt: 'Campamento árabe en el desierto con cojines y faroles al anochecer',
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
