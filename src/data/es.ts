/**
 * Contenido del sitio — Español (idioma por defecto, raíz /).
 */
import type { SiteContent } from './types';

export const content: SiteContent = {
  meta: {
    title: 'Design Web — Sitios web para colegios, empresas y proyectos',
    description:
      'Desarrollamos sitios web a medida para colegios, empresas, blogs y tiendas online… y los mostramos funcionando en tiempo real. Diseño premium, rapidez y SEO desde el primer día.',
    keywords:
      'agencia web, sitios web para colegios, páginas web empresas, blogs, tiendas online, showcase en vivo, desarrollo web profesional, diseño web',
  },

  shared: {
    footerTagline:
      'Diseñamos páginas web profesionales para colegios, empresas y creadores, exhibiéndolas funcionando en vivo y en tiempo real.',
    footerAbout:
      'Sitios web a medida para colegios, empresas, blogs y tiendas online con diseño premium, máxima velocidad y optimización técnica.',
    ctaTitle: '¿Listo para tener tu web en vivo?',
    ctaLead:
      'Cuéntanos tu proyecto —sea un colegio, una empresa, un blog o una tienda— y recibe una propuesta clara en menos de 48 horas. Sin compromiso.',
    ctaBtn: 'Empezar proyecto',
    ctaBtnAlt: 'Ver proyectos',
    backHome: 'Volver al inicio',
    newTab: 'Se abre en una pestaña nueva',
  },

  home: {
    hero: {
      eyebrow: 'Desarrollo web a medida · Showcase en vivo',
      titlePre: 'Colegios, empresas o blogs:',
      titleGrad: ' tu web lista',
      titlePost: ' y funcionando en vivo.',
      lead: 'Design Web es tu estudio y tu catálogo: explora proyectos reales funcionando en tiempo real para colegios, empresas, blogs y tiendas. Elige el tipo de web que necesitas y lanza tu sitio con diseño premium, velocidad y SEO desde el primer día.',
      miniTitle: 'Tu proyecto, funcionando en tiempo real.',
      ctaPrimary: { label: 'Ver proyectos en vivo', href: '#showcase' },
      ctaSecondary: { label: 'Hablemos de tu web', href: '/contacto' },
      hint: 'Colegios e instituciones · Empresas y servicios · Blogs y revistas · Tiendas online',
      floatA: { title: 'En vivo ahora', sub: 'lumenstudio.dev' },
      floatB: { title: '+30 proyectos', sub: 'funcionando en tiempo real' },
    },
    showcase: {
      eyebrow: 'Showcase en vivo',
      title: 'Proyectos funcionando ahora mismo',
      lead: 'No mostramos capturas congeladas ni maquetas: estos sitios están publicados y activos para clientes reales. Haz clic y navega por ellos tú mismo.',
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
      ],
      ghost: {
        title: 'El próximo puede ser el tuyo',
        desc: 'Tu web —para tu colegio, empresa, blog o comercio— publicada y funcionando en vivo para que la veas crecer en tiempo real.',
        cta: 'Empezar mi proyecto',
        href: '/contacto',
      },
    },
    services: {
      eyebrow: 'Servicios',
      title: 'Desarrollamos la presencia digital que tu organización necesita',
      lead: 'Soluciones completas, transparentes y a medida para cada sector: elegimos la tecnología por rendimiento, seguridad y durabilidad.',
      items: [
        {
          icon: 'school',
          title: 'Colegios e Instituciones',
          desc: 'Plataformas web diseñadas para admisiones, calendarios y comunicación con familias y alumnos. Centralizamos toda la información de tu institución con prestigio y claridad.',
          href: '/servicios#landing',
        },
        {
          icon: 'cart',
          title: 'Tiendas y Comercio Online',
          desc: 'Plataformas de comercio electrónico rápidas y seguras para vender productos o cobrar servicios por internet con catálogo y pasarelas integradas.',
          href: '/servicios#store',
        },
        {
          icon: 'building',
          title: 'Empresas, Servicios y Blogs',
          desc: 'Presencia digital sólida para firmas profesionales, empresas, consultoras y medios o blogs que necesitan proyectar autoridad y confianza.',
          href: '/servicios#corporate',
        },
        {
          icon: 'wrench',
          title: 'Renovación y Soporte Web',
          desc: 'Modernizamos, aceleramos y mantenemos tu sitio actual: cambios de diseño, migración de dominio, velocidad y nuevas secciones sin empezar de cero.',
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
          desc: 'Entendemos tu organización, tu público y tus objetivos en una sesión inicial.',
        },
        {
          num: '02',
          title: 'Diseño',
          desc: 'Propuesta visual y estructura de contenido adaptada a tu identidad. Iteramos hasta que te encante.',
        },
        {
          num: '03',
          title: 'Desarrollo',
          desc: 'Construimos con Astro y estándares modernos: ultrarrápido, seguro y accesible en cualquier dispositivo.',
        },
        {
          num: '04',
          title: 'Lanzamiento en vivo',
          desc: 'Publicamos tu web con dominio y SSL listos, y la añadimos a nuestro showcase en tiempo real.',
        },
      ],
    },
    quote: {
      text: 'Design Web no solo nos construyó la web: nos enseñó a verla funcionando en vivo desde el primer día. Transparencia total, cero sorpresas y soporte real.',
      author: 'María Gutiérrez',
      role: 'Fundadora · Verde Market',
    },
    cta: {
      title: 'Tu presencia digital lista para destacar',
      lead: 'Te asesoramos con total transparencia sobre lo que necesita tu colegio, empresa, blog o tienda.',
      btnPrimary: { label: 'Hablemos de tu idea', href: '/contacto' },
      btnSecondary: { label: 'Ver cómo trabajamos', href: '/servicios' },
    },
  },

  services: {
    page: {
      eyebrow: 'Servicios',
      title: 'Soluciones web que funcionan y se ven',
      lead: 'Para colegios, empresas, blogs y comercios: del presupuesto claro a la entrega en vivo, así trabajamos cada proyecto en Design Web.',
    },
    items: [
      {
        icon: 'school',
        title: 'Colegios e Instituciones',
        desc: 'Plataformas web diseñadas para optimizar el proceso de admisiones, centralizar comunicados y proyectar la identidad de tu centro educativo con máxima claridad.',
        features: [
          'Identidad, historia y prestigio institucional.',
          'Módulo de admisiones, requisitos y formularios escolares.',
          'Calendario académico y sección de circulares informativas.',
          'Canal de atención directa para familias y comunidad educativa.',
        ],
        anchor: 'landing',
        cta: { label: 'Solicitar presupuesto', href: '/contacto?tipo=school' },
      },
      {
        icon: 'cart',
        title: 'Tiendas y Comercio Online',
        desc: 'Plataformas de comercio electrónico rápidas, modernas y seguras para comercializar productos físicos o digitales y gestionar pedidos con total tranquilidad.',
        features: [
          'Gestión ágil para catálogo, inventarios y variantes de producto.',
          'Pasarela de pagos 100% segura (tarjetas de crédito/débito y transferencias).',
          'Panel de administración intuitivo para pedidos y clientes.',
          'Generación de comprobantes y confirmaciones automáticas de compra.',
        ],
        anchor: 'store',
        cta: { label: 'Solicitar presupuesto', href: '/contacto?tipo=store' },
      },
      {
        icon: 'building',
        title: 'Empresas, Servicios y Blogs',
        desc: 'Una presencia profesional y editorial que genera confianza en tus clientes y lectores, reflejando solidez corporativa desde el primer clic.',
        features: [
          'Estructura clara para presentar servicios, equipo y portafolio de trabajo.',
          'Módulo de noticias, blog y artículos optimizados para fácil lectura.',
          'Opción bilingüe (ES / EN) ideal para marcas con alcance internacional.',
          'Visualización perfecta y carga instantánea en cualquier celular.',
        ],
        anchor: 'corporate',
        cta: { label: 'Solicitar presupuesto', href: '/contacto?tipo=corporate' },
      },
      {
        icon: 'wrench',
        title: 'Renovación y Mantenimiento Web',
        desc: 'Renovamos, aceleramos y mantenemos tu sitio web actual: rediseño visual moderno, migración de dominios, nuevas secciones y soporte continuo.',
        features: [
          'Rediseño visual moderno y adaptado a móviles y tablets.',
          'Optimización extrema de velocidad de carga y Core Web Vitals.',
          'Migración segura de hosting, dominio y datos sin caídas de servicio.',
          'Soporte técnico, mantenimiento preventivo y mejoras continuas.',
        ],
        anchor: 'seo',
        cta: { label: 'Solicitar presupuesto', href: '/contacto?tipo=redesign' },
      },
    ],
    pricing: {
      eyebrow: 'Precios',
      title: 'Planes adaptados a tu tipo de proyecto',
      lead: 'Precios orientativos y transparentes. Cada solución se adapta a la medida y objetivos de tu organización.',
      plans: [
        {
          name: 'Inicial',
          badge: 'Colegios y Proyectos',
          tagline: 'Ideal para colegios, instituciones educativas, proyectos comunitarios o páginas institucionales.',
          price: 'Desde Q3,900',
          priceNote: 'Pago único · Entrega en 7–10 días',
          featured: false,
          features: [
            '1 a 3 páginas institucionales optimizadas',
            'Información académica y módulo de admisiones',
            'Formulario de consultas y contacto directo',
            'Diseño responsive adaptado a celulares y tablets',
            'Ubicación en Google Maps + SEO técnico básico',
            'Publicación, dominio y certificado SSL listos',
          ],
          cta: { label: 'Empezar proyecto', href: '/contacto?tipo=school' },
        },
        {
          name: 'Profesional',
          badge: 'Empresas y Servicios',
          tagline: 'La solución corporativa para empresas, consultoras, firmas de servicios o blogs con artículos activos.',
          price: 'Desde Q9,900',
          priceNote: 'Pago único · Entrega en 2–3 semanas',
          featured: true,
          features: [
            'Hasta 8 páginas corporativas o Blog con artículos',
            'Catálogo de servicios y portafolio interactivo',
            'Diseño premium a medida + Opción bilingüe ES/EN',
            'Integración con WhatsApp y captación de clientes',
            'SEO avanzado + Google Analytics configurado',
            'Panel de edición fácil + 3 meses de soporte técnico',
          ],
          cta: { label: 'Empezar mi web', href: '/contacto?tipo=corporate' },
        },
        {
          name: 'Tienda online',
          badge: 'Vender Productos',
          tagline: 'E-commerce robusto para marcas, tiendas y negocios que comercializan productos físicos o digitales.',
          price: 'Desde Q19,900',
          priceNote: 'Pago único · Entrega en 3–5 semanas',
          featured: false,
          features: [
            'Catálogo ilimitado de productos y control de stock',
            'Pasarelas de pago seguras (Tarjetas y Transferencias)',
            'Carrito de compras y gestión de envíos',
            'SEO optimizado para fichas de producto',
            'Capacitación personalizada para administrar la tienda',
            '3 meses de soporte técnico y mantenimiento',
          ],
          cta: { label: 'Empezar mi tienda', href: '/contacto?tipo=store' },
        },
      ],
      note: '¿Tienes un proyecto especial o necesitas un blog editorial de alta escala? También hacemos rediseños, mantenimiento mensual y proyectos a medida. Cuéntanoslo.',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Cuánto tarda mi web en estar lista?',
          a: 'Un sitio institucional o landing suele estar en vivo en 7–10 días; una web corporativa o con blog, en 2–3 semanas; una tienda online, en 3–5 semanas. Siempre te damos un calendario concreto antes de empezar.',
        },
        {
          q: '¿Qué incluye exactamente el precio?',
          a: 'Diseño a medida, desarrollo técnico, textos estructurados, configuración de dominio, SSL, analítica y publicación. Sin costes ocultos: el presupuesto detalla cada partida.',
        },
        {
          q: '¿Necesito saber de tecnología para gestionarla?',
          a: 'No. Te entregamos un panel sencillo para editar textos, subir fotos o publicar artículos, y te capacitamos en una sesión guiada. Para cualquier duda, siempre estamos a un mensaje.',
        },
        {
          q: '¿Y el dominio y el hosting?',
          a: 'Nos encargamos de configurarlos por ti (o de conectarlos si ya cuentas con ellos). Te dejamos toda la propiedad y documentación a tu nombre.',
        },
        {
          q: '¿La web se ve en el showcase aunque sea de pago único?',
          a: 'Sí. Nuestros proyectos destacados forman parte del showcase público de Design Web mientras estén activos: esa es nuestra mayor garantía y carta de presentación.',
        },
      ],
    },
    cta: {
      title: '¿Listo para consolidar tu presencia digital?',
      btnLabel: 'Reservar llamada',
      btnHref: '/contacto',
    },
  },

  about: {
    page: {
      eyebrow: 'Nosotros',
      title: 'Un estudio que enseña lo que hace',
      lead: 'Resultados reales, no promesas. Explora y comprueba la calidad de cada proyecto que construimos en nuestro showcase en vivo.',
    },
    story: {
      heading: 'Nuestra historia',
      paragraphs: [
        'Design Web nació de una convicción simple: las organizaciones merecen ver exactamente cómo funciona su web antes de darla por terminada. Demasiadas agencias venden webs con capturas estáticas que no sabes si funcionan de verdad. Nosotros decidimos hacer lo contrario.',
        'Construimos sitios con tecnología moderna —rápidos, seguros y fáciles de mantener— y los mostramos funcionando en tiempo real. Si algo está en nuestro showcase, está publicado y activo.',
        'Impulsamos a colegios e instituciones educativas, empresas, blogs y tiendas online a consolidar una presencia digital moderna, funcional y a la altura de su visión. Cada proyecto completado respalda nuestro compromiso y forma parte de nuestro portafolio activo.',
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
          desc: 'La estética debe cumplir una función. Cada decisión visual sirve a un objetivo de tu institución o negocio.',
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
        messagePh: 'Objetivo, sector, referencias, plazos… todo lo que desees compartir.',
        submit: 'Enviar mensaje',
        privacy: 'Al enviar aceptas que usemos tus datos solo para responderte. Cero spam.',
      },
      types: [
        { value: 'school', label: 'Colegio o Institución Educativa' },
        { value: 'corporate', label: 'Empresa o Servicios Profesionales' },
        { value: 'blog', label: 'Blog, Revista o Medio Digital' },
        { value: 'store', label: 'Tienda Online / E-commerce' },
        { value: 'landing', label: 'Landing Page para Campañas' },
        { value: 'redesign', label: 'Renovación o Rediseño Web' },
        { value: 'other', label: 'Otro tipo de proyecto' },
      ],
      budgets: [
        { value: 'under-1000', label: 'Menos de Q1,000' },
        { value: '1000-2500', label: 'Q1,000 – Q2,500' },
        { value: '2500-5000', label: 'Q2,500 – Q5,000' },
        { value: '5000-10000', label: 'Q5,000 – Q10,000' },
        { value: '10000-20000', label: 'Q10,000 – Q20,000' },
        { value: 'over-20000', label: 'Más de Q20,000' },
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
      lead: 'Criterios técnicos de desarrollo, SEO y rendimiento web. Análisis honestos para decisiones digitales acertadas.',
    },
    empty: 'Todavía no hay artículos publicados. ¡Vuelve pronto!',
    readMore: 'Leer artículo',
    tagsLabel: 'Etiquetas',
  },
};
