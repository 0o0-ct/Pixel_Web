// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Dominio público del sitio (actualizar cuando exista dominio real)
  site: 'https://pixelweb.example',
  // Oculta el toolbar de desarrollo de Astro (solo afecta a `astro dev`)
  devToolbar: {
    enabled: false,
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      // El español (idioma por defecto) vive en la raíz: /, /servicios…
      // El inglés se sirve con prefijo: /en, /en/services…
      prefixDefaultLocale: false,
    },
  },
});
