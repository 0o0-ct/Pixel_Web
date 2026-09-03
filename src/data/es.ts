/**
 * Contenido del sitio — Español (idioma por defecto, raíz /).
 * TODO(real): los proyectos del showcase, precios y testimonios son
 * contenido de demostración; sustitúyelos por los datos reales de la agencia.
 */
import type { SiteContent } from './types';

export const content: SiteContent = {
  meta: {
    title: 'Pixel Web — Agencia web con showcase en vivo',
    description:
      'Creamos landing pages, tiendas online y webs corporativas… y las mostramos funcionando en tiempo real. Diseño premium, velocidad y SEO desde el primer día.',
    keywords:
      'agencia web, diseño web, landing pages, tiendas online, webs corporativas, showcase en vivo, desarrollo web',
  },

  shared: {
    footerTagline:
      'Diseñamos páginas web profesionales y las exhibimos en vivo, en tiempo real. Tu negocio, en pantalla.',
    footerAbout:
      'Landing pages, tiendas online y webs corporativas con diseño premium, máxima velocidad y SEO optimizado.',
    ctaTitle: '¿Listo para tener tu web en vivo?',
    ctaLead:
      'Cuéntanos tu idea y recibe una propuesta clara en menos de 48 horas. Sin compromiso.',
    ctaBtn: 'Empezar proyecto',
    ctaBtnAlt: 'Ver proyectos',
    backHome: 'Volver al inicio',
    newTab: 'Se abre en una pestaña nueva',
  },

  home: {
    hero: {
      eyebrow: 'Agencia web · Showcase en vivo',
      titlePre: 'Diseñamos webs que',
      titleGrad: ' venden',
      titlePost: ' — y lo demostramos en vivo.',
      lead: 'Pixel Web es tu agencia y tu catálogo: explora proyectos reales funcionando en tiempo real, elige el servicio que necesitas y lanza tu sitio con diseño premium, velocidad y SEO desde el primer día.',
      miniTitle: 'Tu proyecto, funcionando en tiempo real.',
      ctaPrimary: { label: 'Ver proyectos en vivo', href: '#showcase' },
      ctaSecondary: { label: 'Hablemos de tu web', href: '/contacto' },
      hint: 'Landing pages · Tiendas online · Webs corporativas · SEO',
      floatA: { title: 'En vivo ahora', sub: 'lumenstudio.dev' },
      floatB: { title: '+30 proyectos', sub: 'funcionando en tiempo real' },
    },
    stats: {
      eyebrow: 'Resultados',
      items: [
        { value: '12+', label: 'Proyectos lanzados' },
        { value: '99.9%', label: 'Disponibilidad en vivo' },
        { value: '4.9/5', label: 'Valoración media de clientes' },
        { value: '48h', label: 'Primera propuesta' },
      ],
    },
    showcase: {
      eyebrow: 'Showcase en vivo',
      title: 'Proyectos funcionando ahora mismo',
      lead: 'No mostramos capturas congeladas: estos sitios están publicados y activos. Haz clic y navega por ellos tú mismo.',
      liveLabel: 'En vivo',
      visitLabel: 'Visitar sitio',
      items: [
        {
          name: 'Centro Educativo Vocacional San José',
          url: 'https://centroeducativovocacionalsanjose.edu.gt/',
          desc: 'Sitio oficial del colegio en Mixco, Guatemala: educación integral, académica y técnica.',
          tags: ['Educación', 'Web corporativa'],
          theme: 'linear-gradient(135deg,#0b1020 0%,#1e2749 50%,#0e3a5f 100%)',
          image: 'cvsj',
        },
        {
          name: 'Lumen Studio',
          url: 'https://lumenstudio.dev',
          desc: 'Portafolio de estudio creativo con animaciones fluidas.',
          tags: ['Diseño web', 'Portafolio'],
          theme: 'linear-gradient(135deg,#06283d 0%,#0e4d64 48%,#0f766e 100%)',
        },
        {
          name: 'Verde Market',
          url: 'https://verdemarket.shop',
          desc: 'Tienda online de productos ecológicos con pago integrado.',
          tags: ['E-commerce', 'Tienda'],
          theme: 'linear-gradient(135deg,#052e1f 0%,#166534 55%,#3f6212 100%)',
        },
        {
          name: 'Atlas Legal',
          url: 'https://atlaslegal.es',
          desc: 'Web corporativa para despacho de abogados con reserva de consultas.',
          tags: ['Corporativa', 'Reservas'],
          theme: 'linear-gradient(135deg,#111827 0%,#312e81 55%,#1e1b4b 100%)',
        },
        {
          name: 'Nómada Travel',
          url: 'https://nomadatravel.travel',
          desc: 'Landing de viajes a medida con buscador y ofertas dinámicas.',
          tags: ['Landing', 'Turismo'],
          theme: 'linear-gradient(135deg,#431407 0%,#9a3412 50%,#a16207 100%)',
        },
        {
          name: 'Café Norte',
          url: 'https://cafenorte.cafe',
          desc: 'Sitio de cafetería con carta digital y pedidos para recoger.',
          tags: ['Local', 'Carta digital'],
          theme: 'linear-gradient(135deg,#1c1917 0%,#44403c 55%,#78350f 100%)',
        },
        {
          name: 'FitPulse',
          url: 'https://fitpulse.fit',
          desc: 'App de entrenamiento con planes personalizados y comunidad.',
          tags: ['App', 'Suscripción'],
          theme: 'linear-gradient(135deg,#4a044e 0%,#86198f 50%,#7e22ce 100%)',
        },
      ],
      ghost: {
        title: 'El próximo puede ser el tuyo',
        desc: 'Tu web, publicada y funcionando en vivo para que la veas crecer en tiempo real.',
        cta: 'Empezar mi proyecto',
        href: '/contacto',
      },
    },
    services: {
      eyebrow: 'Servicios',
      title: 'Todo lo que tu negocio necesita para vender online',
      lead: 'Soluciones completas, transparentes y a medida: elegimos la tecnología por rendimiento, no por moda.',
      items: [
        {
          icon: 'zap',
          title: 'Landing pages',
          desc: 'Páginas de alta conversión para campañas y lanzamientos.',
          href: '/servicios#landing',
        },
        {
          icon: 'cart',
          title: 'Tiendas online',
          desc: 'E-commerce listos para vender con pagos y stock integrados.',
          href: '/servicios#store',
        },
        {
          icon: 'building',
          title: 'Webs corporativas',
          desc: 'Presencia profesional que genera confianza desde el primer clic.',
          href: '/servicios#corporate',
        },
        {
          icon: 'trending',
          title: 'SEO & rendimiento',
          desc: 'Velocidad extrema y posicionamiento para que te encuentren.',
          href: '/servicios#seo',
        },
      ],
    },
    process: {
      eyebrow: 'Cómo trabajamos',
      title: 'De la idea al lanzamiento en 4 pasos',
      lead: 'Un proceso claro, con entregas visibles en cada fase. Tú siempre sabes qué está pasando.',
      steps: [
        {
          num: '01',
          title: 'Descubrimiento',
          desc: 'Entendemos tu negocio, tu público y tus objetivos en una sesión de 30 minutos.',
        },
        {
          num: '02',
          title: 'Diseño',
          desc: 'Propuesta visual y estructura de contenido. Iteramos hasta que te enamore.',
        },
        {
          num: '03',
          title: 'Desarrollo',
          desc: 'Construimos con Astro y estándares modernos: rápido, seguro y accesible.',
        },
        {
          num: '04',
          title: 'Lanzamiento en vivo',
          desc: 'Publicamos tu web y la añadimos a nuestro showcase en tiempo real.',
        },
      ],
    },
    quote: {
      text: 'Pixel Web no solo nos construyó la web: nos enseñó a verla funcionando en vivo desde el primer día. Transparencia total y cero sorpresas.',
      author: 'María Gutiérrez',
      role: 'Fundadora · Verde Market',
    },
    cta: {
      title: 'Tu web puede estar en línea esta misma semana',
      lead: 'Reserva una llamada gratuita y te decimos exactamente qué necesita tu proyecto.',
      btnPrimary: { label: 'Hablemos', href: '/contacto' },
      btnSecondary: { label: 'Ver cómo trabajamos', href: '/servicios' },
    },
  },

  services: {
    page: {
      eyebrow: 'Servicios',
      title: 'Soluciones web que funcionan y se ven',
      lead: 'Del presupuesto claro a la entrega en vivo: así trabajamos cada proyecto de Pixel Web.',
    },
    items: [
      {
        icon: 'zap',
        title: 'Landing pages',
        desc: 'Una página, un objetivo: convertir visitas en clientes. Diseñadas con copywriting y jerarquía visual orientados a resultados.',
        features: [
          'Diseño a medida según tu marca',
          'Copy y estructura orientados a conversión',
          'Carga ultrarrápida (Core Web Vitals verdes)',
          'Formularios y reservas integrados',
        ],
        anchor: 'landing',
        cta: { label: 'Solicitar presupuesto', href: '/contacto' },
      },
      {
        icon: 'cart',
        title: 'Tiendas online',
        desc: 'E-commerce completos: catálogo, carrito, pasarelas de pago y gestión de pedidos sin fricciones.',
        features: [
          'Catálogo y gestión de stock',
          'Pasarelas de pago y envío integradas',
          'Panel de administración sencillo',
          'SEO técnico para cada producto',
        ],
        anchor: 'store',
        cta: { label: 'Solicitar presupuesto', href: '/contacto' },
      },
      {
        icon: 'building',
        title: 'Webs corporativas',
        desc: 'La cara digital de tu empresa: elegante, clara y diseñada para transmitir confianza.',
        features: [
          'Arquitectura de contenido y SEO',
          'Blog integrado listo para crecer',
          'Multilingüe (español / inglés)',
          'Accesible y responsive',
        ],
        anchor: 'corporate',
        cta: { label: 'Solicitar presupuesto', href: '/contacto' },
      },
      {
        icon: 'trending',
        title: 'SEO & rendimiento',
        desc: 'Tu web debe encontrarse y cargar en un instante. Optimizamos técnicamente y medimos con datos.',
        features: [
          'Auditoría técnica de velocidad y SEO',
          'Optimización Core Web Vitals',
          'Metaetiquetas y datos estructurados',
          'Sitemap, robots y analítica configurados',
        ],
        anchor: 'seo',
        cta: { label: 'Solicitar presupuesto', href: '/contacto' },
      },
    ],
    pricing: {
      eyebrow: 'Precios',
      title: 'Planes transparentes, sin letra pequeña',
      lead: 'Precios de salida orientativos. Cada proyecto se presupuesta a medida tras la primera llamada.',
      plans: [
        {
          name: 'Landing',
          tagline: 'Para lanzar una campaña o validar una idea.',
          price: 'Desde 490 €',
          priceNote: 'Pago único · Entrega en 7 días',
          featured: false,
          features: [
            '1 página optimizada',
            'Diseño a medida',
            'Responsive 100%',
            'Formulario de contacto',
            'SEO básico configurado',
            'Publicación y showcase en vivo',
          ],
          cta: { label: 'Empezar una landing', href: '/contacto' },
        },
        {
          name: 'Profesional',
          tagline: 'La opción completa para negocios que crecen.',
          price: 'Desde 1.290 €',
          priceNote: 'Pago único · Entrega en 2–3 semanas',
          featured: true,
          features: [
            'Hasta 8 páginas o blog',
            'Diseño premium a medida',
            'Multilingüe ES/EN',
            'SEO avanzado + analítica',
            'Panel de edición de contenidos',
            '3 meses de soporte incluidos',
          ],
          cta: { label: 'Empezar mi web', href: '/contacto' },
        },
        {
          name: 'Tienda online',
          tagline: 'Para vender productos con todas las garantías.',
          price: 'Desde 2.490 €',
          priceNote: 'Pago único · Entrega en 3–5 semanas',
          featured: false,
          features: [
            'Catálogo ilimitado y stock',
            'Pasarelas de pago seguras',
            'Gestión de pedidos y envíos',
            'SEO técnico por producto',
            'Formación incluida',
            '3 meses de soporte incluidos',
          ],
          cta: { label: 'Empezar mi tienda', href: '/contacto' },
        },
      ],
      note: '¿No encaja con tu caso? También hacemos rediseños, mantenimiento mensual y proyectos a medida. Cuéntanoslo.',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Cuánto tarda mi web en estar lista?',
          a: 'Una landing page suele estar en vivo en 7 días; una web profesional, en 2–3 semanas; una tienda online, en 3–5 semanas. Siempre te damos un calendario concreto antes de empezar.',
        },
        {
          q: '¿Qué incluye exactamente el precio?',
          a: 'Diseño, desarrollo, textos base, configuración de dominio, SSL, analítica y publicación. Sin costes ocultos: el presupuesto detalla cada partida.',
        },
        {
          q: '¿Necesito saber de tecnología para gestionarla?',
          a: 'No. Te entregamos un panel sencillo para editar textos e imágenes, y te formamos en una sesión. Para cambios mayores, estamos a un mensaje.',
        },
        {
          q: '¿Y el dominio y el hosting?',
          a: 'Nos encargamos de contratarlos y configurarlos por ti (o de conectarlos si ya los tienes). Te lo dejamos documentado todo.',
        },
        {
          q: '¿La web se ve en el showcase aunque sea de pago único?',
          a: 'Sí. Todos nuestros proyectos forman parte del showcase público de Pixel Web mientras estén activos: esa es nuestra carta de presentación.',
        },
      ],
    },
    cta: {
      title: '¿Hablamos de tu proyecto?',
      lead: 'La primera llamada es gratuita y sin compromiso. Saldrás de ella sabiendo qué necesitas y cuánto cuesta.',
      btnLabel: 'Reservar llamada',
      btnHref: '/contacto',
    },
  },

  about: {
    page: {
      eyebrow: 'Nosotros',
      title: 'Una agencia que enseña lo que hace',
      lead: 'No vendemos humo: cada proyecto que construimos se puede visitar, navegar y comprobar en nuestro showcase en vivo.',
    },
    story: {
      heading: 'Nuestra historia',
      paragraphs: [
        'Pixel Web nació de una frustración simple: demasiadas agencias venden webs con capturas bonitas que no sabes si funcionan de verdad. Nosotros decidimos hacer lo contrario.',
        'Construimos sitios con tecnología moderna —rápidos, seguros y fáciles de mantener— y los mostramos funcionando en tiempo real. Si algo está en nuestro showcase, está publicado y activo.',
        'Hoy ayudamos a marcas, negocios locales y emprendedores a tener una presencia digital que de verdad vende. Y cada nuevo proyecto se suma a la prueba: nuestro propio catálogo vivo.',
      ],
    },
    values: {
      eyebrow: 'Valores',
      title: 'Lo que nos mueve',
      items: [
        {
          icon: 'external',
          title: 'Transparencia total',
          desc: 'Presupuestos claros, avances visibles y un showcase público de todo lo que hacemos.',
        },
        {
          icon: 'zap',
          title: 'Rendimiento real',
          desc: 'Cada web se mide: velocidad, accesibilidad y SEO con datos, no con opiniones.',
        },
        {
          icon: 'pen',
          title: 'Diseño con propósito',
          desc: 'Lo bonito también debe convertir. Cada decisión visual sirve a un objetivo de negocio.',
        },
        {
          icon: 'message',
          title: 'Cerca del cliente',
          desc: 'Respuesta rápida, lenguaje claro y cero jerga técnica innecesaria.',
        },
      ],
    },
    team: {
      eyebrow: 'Equipo',
      title: 'Las personas detrás de los píxeles',
      lead: 'Un equipo pequeño y especializado: menos reuniones y más trabajo bien hecho.',
      members: [
        {
          initials: 'PX',
          name: 'Nombre Apellido',
          role: 'Fundador · Diseño & dirección',
          bio: 'TODO: sustituir por el perfil real del equipo.',
        },
        {
          initials: 'PX',
          name: 'Nombre Apellido',
          role: 'Desarrollo & tecnología',
          bio: 'TODO: sustituir por el perfil real del equipo.',
        },
        {
          initials: 'PX',
          name: 'Nombre Apellido',
          role: 'Estrategia & SEO',
          bio: 'TODO: sustituir por el perfil real del equipo.',
        },
      ],
    },
    cta: {
      title: 'Trabaja con un equipo que enseña su trabajo',
      lead: 'Cuéntanos tu idea: te responderemos con una propuesta clara en menos de 48 horas.',
      btnLabel: 'Hablemos',
      btnHref: '/contacto',
    },
  },

  contact: {
    page: {
      eyebrow: 'Contacto',
      title: 'Hablemos de tu proyecto',
      lead: 'Cuéntanos qué necesitas y te responderemos en menos de 24 horas laborables con los siguientes pasos.',
    },
    channels: {
      eyebrow: 'Canales',
      title: 'Otras formas de contactar',
      notice:
        'El formulario abre tu correo con el mensaje ya redactado. Si prefieres, escríbenos directamente al email de abajo.',
      items: [
        {
          icon: 'mail',
          title: 'Email',
          text: 'hola@pixelweb.dev',
          href: 'mailto:hola@pixelweb.dev',
          hint: 'Respuesta en < 24 h',
        },
        {
          icon: 'phone',
          title: 'WhatsApp',
          text: '+34 600 000 000',
          href: 'https://wa.me/34600000000',
          hint: 'Respuesta inmediata',
        },
        {
          icon: 'message',
          title: 'Llamada gratuita',
          text: '30 minutos · sin compromiso',
          href: 'mailto:hola@pixelweb.dev?subject=Reservar%20llamada',
          hint: 'Agenda vía email',
        },
      ],
    },
    form: {
      eyebrow: 'Formulario',
      title: 'Cuéntanos tu idea',
      lead: 'Rellena el formulario y lo recibiremos al instante. Cuanta más información, mejor la propuesta.',
      labels: {
        name: 'Tu nombre',
        namePh: '¿Cómo te llamas?',
        email: 'Tu email',
        emailPh: 'donde@recibes.com',
        type: '¿Qué necesitas?',
        typePh: 'Elige una opción',
        budget: 'Presupuesto aproximado',
        budgetPh: 'Elige una opción',
        message: 'Cuéntanos tu proyecto',
        messagePh: 'Objetivo, plazos, referencias… todo lo que se te ocurra.',
        submit: 'Enviar mensaje',
        privacy: 'Al enviar aceptas que usemos tus datos solo para responderte. Nada de spam.',
      },
      types: [
        { value: 'landing', label: 'Landing page' },
        { value: 'store', label: 'Tienda online' },
        { value: 'corporate', label: 'Web corporativa' },
        { value: 'redesign', label: 'Rediseño de web existente' },
        { value: 'maintenance', label: 'Mantenimiento o SEO' },
        { value: 'other', label: 'Otro' },
      ],
      budgets: [
        { value: 'under-1000', label: 'Menos de 1.000 €' },
        { value: '1000-2500', label: '1.000 – 2.500 €' },
        { value: '2500-5000', label: '2.500 – 5.000 €' },
        { value: 'over-5000', label: 'Más de 5.000 €' },
        { value: 'not-sure', label: 'Aún no lo sé' },
      ],
      success:
        '¡Gracias! Tu mensaje se ha preparado en tu cliente de correo. Si no se abrió, escríbenos a hola@pixelweb.dev.',
    },
  },

  blogIndex: {
    page: {
      eyebrow: 'Blog',
      title: 'Ideas, guías y lo que aprendemos construyendo',
      lead: 'Consejos prácticos sobre diseño web, rendimiento, SEO y negocios online. Sin humo, con datos.',
    },
    empty: 'Todavía no hay artículos publicados. ¡Vuelve pronto!',
    readMore: 'Leer artículo',
    tagsLabel: 'Etiquetas',
  },
};
