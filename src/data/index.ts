import type { Lang } from '../i18n/ui';
import { content as esContent } from './es';
import { content as enContent } from './en';
import type { SiteContent } from './types';

const registry: Record<Lang, SiteContent> = {
  es: esContent,
  en: enContent,
};

/** Devuelve el diccionario de contenido completo para el idioma indicado. */
export function contentFor(lang: Lang): SiteContent {
  return registry[lang];
}

export type { SiteContent };
export * from './site';
export * from './types';
