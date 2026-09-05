/**
 * Discography, newest first.
 *
 * Only per-release URLs that have been verified are filled in. Anything left
 * undefined falls back to the artist profile links, so a card never points at
 * a dead page. As official smart links land, add them to `links` here.
 *
 * `artwork` follows the same rule as photos: null renders an on-brand
 * placeholder. Drop files into `public/img/releases/` and reference them here.
 * See ASSETS.md.
 */
export type ReleaseType = "Single" | "EP" | "Remix" | "Compilation";

export interface Release {
  title: string;
  /** Collaborators, excluding HEXXA. */
  withArtists?: string[];
  type: ReleaseType;
  year: number;
  label?: string;
  /** Appears on compilations rather than as a standalone release. */
  appearsOn?: string;
  tracks?: string[];
  links?: {
    spotify?: string;
    beatport?: string;
    soundcloud?: string;
    smartLink?: string;
  };
  artwork?: string | null;
  /** The current single. Exactly one release should carry this. */
  featured?: boolean;
  /** HEXXA names this as the track to hear first. */
  startHere?: boolean;
}

export const releases: Release[] = [
  {
    title: "ROT",
    withArtists: ["Emorfik"],
    type: "Single",
    year: 2026,
    featured: true,
    artwork: null,
  },
  {
    title: "PLAY TIME",
    withArtists: ["Chassi"],
    type: "Single",
    year: 2026,
    artwork: null,
  },
  {
    title: "NIGHTMARE",
    withArtists: ["SIIN"],
    type: "Single",
    year: 2026,
    artwork: null,
  },
  {
    title: "KISS OF DEATH",
    type: "Single",
    year: 2026,
    artwork: null,
  },
  {
    title: "EDGE OF INSANITY",
    type: "Single",
    year: 2026,
    artwork: null,
  },
  {
    title: "TITAN",
    withArtists: ["Kamas"],
    type: "Single",
    year: 2026,
    artwork: null,
  },
  {
    title: "UNHOLY REIGN",
    withArtists: ["2DY4"],
    type: "EP",
    year: 2025,
    label: "Kannibalen Records",
    tracks: ["THE UNHOLY REIGN", "CHAMBER OF RUIN", "DIVINE CONTROL"],
    links: {
      beatport: "https://www.beatport.com/release/unholy-reign/5575602",
    },
    artwork: null,
  },
  {
    title: "FALLEN ANGEL",
    withArtists: ["SYTHYST"],
    type: "Single",
    year: 2025,
    artwork: null,
  },
  {
    title: "ICED OUT",
    withArtists: ["SLWMO"],
    type: "Single",
    year: 2025,
    artwork: null,
  },
  {
    title: "BLOOD OMEN",
    type: "Single",
    year: 2025,
    label: "Subsidia",
    appearsOn: "Subsidia: Night Vol. 11",
    artwork: null,
  },
  {
    title: "INTO THE ABYSS",
    withArtists: ["Jonter"],
    type: "Single",
    year: 2025,
    label: "Bassrush Records",
    appearsOn: "The Prophecy: Vol. 12",
    artwork: null,
  },
  {
    title: "POWER",
    type: "Remix",
    year: 2025,
    artwork: null,
  },
  {
    title: "SHADOW OF THE MIND",
    withArtists: ["HUMANSION"],
    type: "Single",
    year: 2025,
    artwork: null,
  },
  {
    title: "TWIN FLAME",
    type: "Single",
    year: 2025,
    artwork: null,
  },
  {
    title: "FINAL DESTINATION",
    type: "Single",
    year: 2025,
    artwork: null,
  },
  {
    title: "BLOOD EMPRESS (VIP)",
    type: "Single",
    year: 2025,
    appearsOn: "Bass Dreams, Vol. 6",
    artwork: null,
  },
  {
    title: "GAS BREACH",
    type: "EP",
    year: 2024,
    artwork: null,
  },
  {
    title: "FEMME FATALE",
    withArtists: ["2DY4"],
    type: "Single",
    year: 2024,
    startHere: true,
    artwork: null,
  },
  {
    title: "DEATH WISH",
    type: "Single",
    year: 2024,
    artwork: null,
  },
  {
    title: "ARSENAL EP: THE REMIXES",
    type: "Compilation",
    year: 2024,
    artwork: null,
  },
  {
    title: "QUEENS OF [E] — CHAPTER 1",
    type: "Compilation",
    year: 2024,
    artwork: null,
  },
];

/** Free edits and bootlegs, hosted on SoundCloud. */
export const flips = [
  { title: "B2B", original: "Charli XCX", credit: "HEXXA & Sentient Flip" },
  { title: "GUESS", original: "Charli XCX", credit: "HEXXA Flip" },
  { title: "PLAY WITH ME", original: "Sara Landry, SHLØMO", credit: "HEXXA Flip" },
] as const;

export const featuredRelease = releases.find((release) => release.featured) ?? releases[0];
export const startHereRelease = releases.find((release) => release.startHere);

/** Full artist credit line, e.g. "HEXXA x Emorfik". */
export function releaseCredit(release: Release): string {
  return ["HEXXA", ...(release.withArtists ?? [])].join(" x ");
}
