/**
 * Utilidades para leer artículos del blog por idioma.
 * En la Content Layer de Astro cada entrada tiene un `id` relativo
 * (p. ej. "es/por-que-mostrar-proyectos-en-vivo.md"); aquí se normaliza
 * para rutas limpias: /blog/slug y /en/blog/slug.
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Post = CollectionEntry<'blog'> & {
  /** Slug limpio, sin prefijo de idioma ni extensión. */
  cleanSlug: string;
};

export const LANG_FOLDER: Record<Lang, string> = { es: 'es', en: 'en' };

function cleanId(id: string): string {
  return id.replace(/\.(md|mdx)$/, '');
}

export async function getPosts(lang: Lang): Promise<Post[]> {
  const folder = LANG_FOLDER[lang];
  const entries = await getCollection('blog', ({ id }) => id.startsWith(`${folder}/`));
  return entries
    .map((e) => ({ ...e, cleanSlug: cleanId(e.id).replace(`${folder}/`, '') }))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getPost(lang: Lang, slug: string): Promise<Post | undefined> {
  const folder = LANG_FOLDER[lang];
  const wanted = `${folder}/${slug}`;
  const entries = await getCollection('blog', ({ id }) => cleanId(id) === wanted);
  if (!entries.length) return undefined;
  return { ...entries[0], cleanSlug: slug };
}

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'es' ? 'es-ES' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
