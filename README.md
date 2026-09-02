# 🚀 Pixel Web

¡Bienvenido al repositorio principal de **Pixel Web**! 🌐

Sitio bilingüe (español raíz + inglés en `/en`) de la agencia Pixel Web: venta y
exhibición de páginas web profesionales con **showcase en vivo** de los proyectos.

## 🛠️ Stack

- **Astro 7** — framework web ultrarrápido (compilador Rust).
- **Componentes Astro** — arquitectura modular y reutilizable.
- **Vanilla CSS** — diseño oscuro premium, sin frameworks de UI.
- **i18n manual** — diccionarios tipados por idioma en `src/data/{es,en}.ts`.

## 🧞 Comandos

```bash
npm install        # instala dependencias
npm run dev        # servidor de desarrollo → http://localhost:4321
npm run build      # genera el sitio estático en dist/
npm run preview    # sirve la build localmente
npm run check      # revisión de tipos (astro check)
```

## 📁 Estructura

```text
Pixel_Web/
├── public/                 # recursos estáticos (favicon, robots.txt)
├── src/
│   ├── components/         # Icon, Header, Footer + páginas (pages/) y secciones
│   ├── content/blog/       # artículos: {es,en}/…md  (Content Collections)
│   ├── content.config.ts   # esquema de la colección blog
│   ├── data/               # contenido del sitio: types.ts, es.ts, en.ts, site.ts
│   ├── i18n/ui.ts          # idiomas, claves UI y mapa de rutas por idioma
│   ├── layouts/            # BaseLayout (SEO, OG, hreflang)
│   ├── lib/blog.ts         # lectura de posts por idioma
│   ├── pages/              # rutas: /, /servicios, /nosotros, /contacto, /blog…
│   │                       #   y versiones inglesas bajo /en/…
│   └── styles/global.css   # sistema de diseño (variables, componentes CSS)
└── README.md
```

## 📄 Páginas (ES · EN)

- Inicio con **showcase en vivo** de proyectos + proceso + testimonios.
- Servicios detallados y **precios** con FAQ.
- Nosotros (historia, valores, equipo) y **Contacto** con formulario.
- Blog con artículos por idioma (`/blog/…` y `/en/blog/…`).

## ✏️ Contenido de demostración

Los proyectos del showcase, precios, datos de contacto, equipo y redes son
**placeholders** (`TODO(real)` en el código). Sustitúyelos por los datos reales:

- `src/data/site.ts` → email, WhatsApp, ubicación y redes.
- `src/data/es.ts` y `src/data/en.ts` → proyectos, precios, equipo, textos.
- `src/pages/servicios|contacto…` y `astro.config.mjs` → dominio (`site`).

## 🚀 Despliegue

Proyecto estático: apto para Netlify, Vercel, Cloudflare Pages o cualquier host.
`npm run build` y sirve `dist/`.
