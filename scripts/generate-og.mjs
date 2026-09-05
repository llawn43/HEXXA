/**
 * Renders the default Open Graph share card to `public/og-default.png`.
 *
 * Social crawlers (notably X) will not render SVG, so the card is baked to
 * PNG here rather than served as vector. Run with `npm run og` after changing
 * the artwork below. Once a real photographic share card exists, point
 * `images.ogImage` in src/data/assets.ts at it instead.
 *
 * Text uses a system-font stack because the rasteriser has no access to the
 * bundled webfonts; the output is a static file, so this only affects
 * generation, never the live site.
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const WIDTH = 1200;
const HEIGHT = 630;

const sigil = `
  <g fill="none" stroke="#FF2247" stroke-width="2.4" transform="translate(980 118) scale(1.55)">
    <circle cx="50" cy="50" r="48" opacity="0.35"/>
    <circle cx="50" cy="50" r="44.5" opacity="0.2" stroke-dasharray="1 3"/>
    <polygon points="50,6 88.1,28 88.1,72 50,94 11.9,72 11.9,28" opacity="0.5"/>
    <polygon points="50,16 79.44,67 20.56,67" opacity="0.8"/>
    <polygon points="50,84 79.44,33 20.56,33" opacity="0.8"/>
    <g stroke="#EDE7DE" stroke-width="4.5" stroke-linecap="square">
      <line x1="33" y1="42" x2="47" y2="58"/>
      <line x1="47" y1="42" x2="33" y2="58"/>
      <line x1="53" y1="42" x2="67" y2="58"/>
      <line x1="67" y1="42" x2="53" y2="58"/>
    </g>
  </g>`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <radialGradient id="gore" cx="12%" cy="8%" r="85%">
      <stop offset="0%" stop-color="#7A0A19" stop-opacity="0.95"/>
      <stop offset="60%" stop-color="#07060A" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glam" cx="92%" cy="95%" r="85%">
      <stop offset="0%" stop-color="#4A0F6E" stop-opacity="0.95"/>
      <stop offset="60%" stop-color="#07060A" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="rule" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#D01128"/>
      <stop offset="45%" stop-color="#FF2247"/>
      <stop offset="100%" stop-color="#A020F0"/>
    </linearGradient>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="#07060A"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#gore)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glam)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" filter="url(#grain)" opacity="0.05"/>

  ${sigil}

  <g font-family="Arial Black, Arial Bold, Impact, sans-serif" fill="#EDE7DE">
    <text x="80" y="300" font-size="188" letter-spacing="14">HEXXA</text>
  </g>

  <rect x="82" y="338" width="300" height="4" fill="url(#rule)"/>

  <g font-family="Arial, Helvetica, sans-serif" font-weight="bold">
    <text x="82" y="398" font-size="30" fill="#FF2247" letter-spacing="7">THE DUBSTEP DEMON</text>
    <text x="82" y="452" font-size="25" fill="#A9A2AD" letter-spacing="4">PHILADELPHIA // BASS MUSIC // HIGH DRAG</text>
  </g>

  <g font-family="Arial Black, Arial Bold, Impact, sans-serif">
    <text x="82" y="540" font-size="40" fill="#C77DFF" letter-spacing="2">YOU DON'T JUST LISTEN.</text>
    <text x="82" y="586" font-size="40" fill="#EDE7DE" letter-spacing="2">YOU SUMMON HER.</text>
  </g>
</svg>`;

const out = path.resolve("public", "og-default.png");
await mkdir(path.dirname(out), { recursive: true });
await writeFile(out, await sharp(Buffer.from(svg)).png({ quality: 92 }).toBuffer());

console.log(`Wrote ${out} (${WIDTH}x${HEIGHT})`);
