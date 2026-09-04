/**
 * Capa de internacionalización (ES raíz / EN con prefijo).
 * Los textos comunes de navegación y utilidades viven aquí.
 * El contenido de cada página vive en src/data/{es,en}.ts.
 */

export type Lang = 'es' | 'en';

export const defaultLang: Lang = 'es';
export const showDefaultLang = false;

export const languages: Record<Lang, string> = {
  es: 'Español',
  en: 'English',
};

export const ui = {
  es: {
    'site.name': 'Design Web',
    'skip.to-content': 'Saltar al contenido',
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.about': 'Nosotros',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'nav.cta': 'Empezar proyecto',
    'nav.label': 'Menú principal',
    'menu.open': 'Abrir menú',
    'menu.close': 'Cerrar menú',
    'lang.switch': 'Cambiar idioma',
    'lang.es': 'ES',
    'lang.en': 'EN',
    'theme.switch': 'Cambiar tema (claro/oscuro)',
    'footer.nav': 'Navegación',
    'footer.social': 'Redes sociales',
    'footer.services': 'Servicios',
    'footer.contact': 'Contacto',
    'footer.email': 'Email',
    'footer.whatsapp': 'WhatsApp',
    'footer.location': 'Ubicación',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.alt.logo': 'Logo de Design Web',
    'badge.popular': 'Popular',
  },
  en: {
    'site.name': 'Design Web',
    'skip.to-content': 'Skip to content',
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.cta': 'Start a project',
    'nav.label': 'Main menu',
    'menu.open': 'Open menu',
    'menu.close': 'Close menu',
    'lang.switch': 'Change language',
    'lang.es': 'ES',
    'lang.en': 'EN',
    'theme.switch': 'Switch theme (light/dark)',
    'footer.nav': 'Navigation',
    'footer.social': 'Social',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.email': 'Email',
    'footer.whatsapp': 'WhatsApp',
    'footer.location': 'Location',
    'footer.rights': 'All rights reserved.',
    'footer.alt.logo': 'Design Web logo',
    'badge.popular': 'Most popular',
  },
} satisfies Record<Lang, Record<string, string>>;

export type UiKey = keyof (typeof ui)[typeof defaultLang];

/** Traducción de una clave UI común para el idioma dado. */
export function t(lang: Lang, key: UiKey): string {
  return ui[lang][key];
}

/** Ruta localizada: el idioma por defecto vive en la raíz, el resto con prefijo. */
export function localizedPath(lang: Lang, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean === '/' ? '/' : clean;
  return lang === defaultLang ? clean : `/${lang}${clean === '/' ? '' : clean}`;
}

/** Página equivalente en el otro idioma (para el conmutador de idioma). */
export function alternateLang(lang: Lang): Lang {
  return lang === defaultLang ? 'en' : defaultLang;
}

/* ------------------------------------------------------------------ */
/* Rutas: los slugs difieren por idioma (servicios/services, …).      */
/* ------------------------------------------------------------------ */

/** Slug de cada página en su idioma (sin prefijo de idioma). */
export const ROUTES: Record<Lang, Record<'home' | 'services' | 'about' | 'contact' | 'blog', string>> = {
  es: { home: '/', services: '/servicios', about: '/nosotros', contact: '/contacto', blog: '/blog' },
  en: { home: '/', services: '/services', about: '/about', contact: '/contact', blog: '/blog' },
};

export type RouteKey = keyof (typeof ROUTES)[Lang];

/** URL completa de una página en el idioma dado (p. ej. "/en/services"). */
export function pageHref(lang: Lang, key: RouteKey): string {
  return localizedPath(lang, ROUTES[lang][key]);
}

/** Tabla de traducción de slugs es → en. */
const SEG_ES_TO_EN: Record<string, string> = {
  servicios: 'services',
  nosotros: 'about',
  contacto: 'contact',
  blog: 'blog',
};
const SEG_EN_TO_ES = Object.fromEntries(
  Object.entries(SEG_ES_TO_EN).map(([a, b]) => [b, a]),
);

/**
 * Traduce una ruta localizada (con o sin prefijo /en) al idioma destino.
 * Utilizada por el conmutador de idioma y las etiquetas hreflang.
 */
export function translatePath(path: string, from: Lang, to: Lang): string {
  const noPrefix = path === '/en' || path.startsWith('/en/') ? path.slice(3) || '/' : path;
  const table = from === 'es' ? SEG_ES_TO_EN : SEG_EN_TO_ES;
  if (to === from) return path;
  const segs = noPrefix.split('/').filter(Boolean).map((s) => table[s] ?? s);
  const raw = segs.length === 0 ? '/' : `/${segs.join('/')}`;
  return to === 'es' ? raw : `/en${raw === '/' ? '' : raw}`;
}
