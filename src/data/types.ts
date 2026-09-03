/**
 * Tipos que describen todo el contenido del sitio.
 * Los diccionarios es.ts y en.ts deben satisfacer SiteContent.
 */

export type IconName =
  | 'rocket'
  | 'cart'
  | 'building'
  | 'wrench'
  | 'layout'
  | 'search'
  | 'code'
  | 'trending'
  | 'pen'
  | 'zap'
  | 'mail'
  | 'phone'
  | 'pin'
  | 'clock'
  | 'message'
  | 'check'
  | 'arrowRight'
  | 'external'
  | 'sparkle';

export interface Project {
  name: string;
  url: string;
  desc: string;
  tags: string[];
  /** Gradiente CSS que pinta la captura de demostración (si no hay imagen). */
  theme: string;
  /** Clave de imagen (miniatura real) para el recuadro, si existe. */
  image?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Feature {
  icon: IconName;
  title: string;
  desc: string;
  href: string;
}

export interface ServiceItem {
  icon: IconName;
  title: string;
  desc: string;
  features: string[];
  cta: { label: string; href: string };
  /** Id de anclaje estable entre idiomas (p. ej. `landing`, `store`). */
  anchor: string;
}

export interface Step {
  num: string;
  title: string;
  desc: string;
}

export interface Plan {
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  featured: boolean;
  features: string[];
  cta: { label: string; href: string };
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface HomeContent {
  hero: {
    eyebrow: string;
    titlePre: string;
    titleGrad: string;
    titlePost: string;
    lead: string;
    miniTitle: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
    hint: string;
    floatA: { title: string; sub: string };
    floatB: { title: string; sub: string };
  };
  stats: { eyebrow: string; items: Stat[] };
  showcase: {
    eyebrow: string;
    title: string;
    lead: string;
    liveLabel: string;
    visitLabel: string;
    items: Project[];
    ghost: { title: string; desc: string; cta: string; href: string };
  };
  services: {
    eyebrow: string;
    title: string;
    lead: string;
    items: Feature[];
  };
  process: {
    eyebrow: string;
    title: string;
    lead: string;
    steps: Step[];
  };
  quote: {
    text: string;
    author: string;
    role: string;
  };
  cta: {
    title: string;
    lead: string;
    btnPrimary: { label: string; href: string };
    btnSecondary: { label: string; href: string };
  };
}

export interface ServicePageContent {
  page: { eyebrow: string; title: string; lead: string };
  items: ServiceItem[];
  pricing: {
    eyebrow: string;
    title: string;
    lead: string;
    plans: Plan[];
    note: string;
  };
  faq: { eyebrow: string; title: string; items: FaqItem[] };
  cta: {
    title: string;
    lead: string;
    btnLabel: string;
    btnHref: string;
  };
}

export interface Value {
  icon: IconName;
  title: string;
  desc: string;
}

export interface Member {
  initials: string;
  name: string;
  role: string;
  bio: string;
}

export interface AboutPageContent {
  page: { eyebrow: string; title: string; lead: string };
  story: { heading: string; paragraphs: string[] };
  values: { eyebrow: string; title: string; items: Value[] };
  team: { eyebrow: string; title: string; lead: string; members: Member[] };
  cta: { title: string; lead: string; btnLabel: string; btnHref: string };
}

export interface ContactPageContent {
  page: { eyebrow: string; title: string; lead: string };
  channels: {
    eyebrow: string;
    title: string;
    items: {
      icon: IconName;
      title: string;
      text: string;
      href: string;
      hint: string;
    }[];
    notice: string;
  };
  form: {
    eyebrow: string;
    title: string;
    lead: string;
    labels: {
      name: string;
      namePh: string;
      email: string;
      emailPh: string;
      type: string;
      typePh: string;
      budget: string;
      budgetPh: string;
      message: string;
      messagePh: string;
      submit: string;
      privacy: string;
    };
    types: { value: string; label: string }[];
    budgets: { value: string; label: string }[];
    success: string;
  };
}

export interface BlogIndexContent {
  page: { eyebrow: string; title: string; lead: string };
  empty: string;
  readMore: string;
  tagsLabel: string;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  /** Etiquetas compartidas por el footer y mini-CTAs. */
  shared: {
    footerTagline: string;
    footerAbout: string;
    ctaTitle: string;
    ctaLead: string;
    ctaBtn: string;
    ctaBtnAlt: string;
    backHome: string;
    newTab: string;
  };
  home: HomeContent;
  services: ServicePageContent;
  about: AboutPageContent;
  contact: ContactPageContent;
  blogIndex: BlogIndexContent;
}
