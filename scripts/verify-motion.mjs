// Guardia anti-regresion: el sistema de animaciones debe llegar al dist.
import { readFileSync } from 'node:fs';
import { globSync } from 'node:fs';
const fail = (m) => { console.error('FAIL:', m); process.exit(1); };
const html = readFileSync('/home/c0o0c/Pixel_Web/dist/index.html', 'utf8');
for (const s of ['data-reveal', 'data-stagger', 'IntersectionObserver', 'requestAnimationFrame', 'motion=force'])
  if (!html.includes(s)) fail('index.html sin ' + s);
const cssFiles = globSync('/home/c0o0c/Pixel_Web/dist/_astro/*.css');
if (!cssFiles.length) fail('sin CSS compilado');
const css = cssFiles.map((f) => readFileSync(f, 'utf8')).join('\n');
for (const s of ['[data-reveal]', '.is-visible', '@keyframes rise', '@keyframes marquee', '@keyframes floaty', '@keyframes drift'])
  if (!css.includes(s)) fail('CSS sin ' + s);
console.log('OK motion: html + css contienen el sistema completo');
