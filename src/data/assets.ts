/**
 * Single source of truth for photography.
 *
 * Every value is null until a real file exists. `BrandImage` draws an
 * on-brand placeholder for nulls, so the site is complete and presentable
 * before any photo lands, and each photo goes live the moment its path is
 * filled in here.
 *
 * ASSETS.md lists the required filename and pixel dimensions for each key.
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

/** Prefixes the configured base path so images resolve on GitHub Pages. */
export function asset(path: string): string {
  return `${base}${path}`;
}

export const images = {
  /** Homepage hero. Vertical, full-bleed, ideally shot against dark. */
  hero: null as string | null,
  /** Secondary hero layer for a parallax/duotone stack. Optional. */
  heroAlt: null as string | null,
  /** About page portrait — in full drag. */
  portrait: null as string | null,
  /** About page live shot — mid-set, crowd visible. */
  live: null as string | null,
  /** Merch page lifestyle shot for THE HEXXORCIST COLLECTION. */
  merch: null as string | null,
  /** Wide crowd shot used as the booking page banner. */
  crowd: null as string | null,
  /** Open Graph share card, 1200x630. Falls back to a generated SVG card. */
  ogImage: null as string | null,
};

/** Press-kit downloads. Null entries render as "coming soon" and are not linked. */
export const pressAssets = {
  photoPack: null as string | null,
  logoPack: null as string | null,
  techRider: null as string | null,
  stagePlot: null as string | null,
};

/** Press photos shown as a grid on /press. */
export const pressPhotos: Array<{
  src: string | null;
  alt: string;
  credit?: string;
  ratio: string;
}> = [
  { src: null, alt: "HEXXA press photo — portrait", ratio: "2/3" },
  { src: null, alt: "HEXXA press photo — live on stage", ratio: "3/2" },
  { src: null, alt: "HEXXA press photo — full look", ratio: "2/3" },
  { src: null, alt: "HEXXA press photo — crowd", ratio: "3/2" },
];
