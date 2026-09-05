/**
 * Full live sets and mixes.
 *
 * `youtubeId` is the 11-character video ID. Leave it null and the card links
 * out to the YouTube channel instead of embedding, so nothing breaks before
 * the IDs are filled in. See ASSETS.md.
 *
 * Descriptions are HEXXA's own set notes, with the decorative unicode and
 * emoji flattened to plain text for legibility and screen readers.
 */
export interface Video {
  title: string;
  event: string;
  year: number;
  youtubeId: string | null;
  description?: string;
  /** Custom poster frame. Falls back to the YouTube thumbnail, then a placeholder. */
  poster?: string | null;
  featured?: boolean;
}

export const videos: Video[] = [
  {
    title: "Bass Canyon 2026 Livemix",
    event: "Bass Canyon",
    year: 2026,
    youtubeId: null,
    description:
      "Excision's home turf. A full livemix from one of the biggest bass stages in the country.",
    featured: true,
    poster: null,
  },
  {
    title: "Lost Lands 2025 Mix",
    event: "Lost Lands",
    year: 2025,
    youtubeId: null,
    description:
      "The dubstep demon of death. You got half the destruction live — here's the full hour of carnage. My dream festival for so long, and I poured my whole heart and soul into this set.",
    poster: null,
  },
  {
    title: "Forbidden Kingdom 2026 Mix",
    event: "Forbidden Kingdom",
    year: 2026,
    youtubeId: null,
    description:
      "The reign of the vampire begins now. The full Forbidden Kingdom set with an extended 15 minutes of unreleased edits, IDs and doubles.",
    poster: null,
  },
  {
    title: "Live @ Escapade 2026 — Full Set",
    event: "Escapade",
    year: 2026,
    youtubeId: null,
    poster: null,
  },
];

export const featuredVideo = videos.find((video) => video.featured) ?? videos[0];
