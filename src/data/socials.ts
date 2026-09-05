/**
 * Official profiles. `icon` maps to a key in components/Icon.astro.
 *
 * `primary` profiles appear in the header and the homepage rail; everything
 * else shows in the footer and on /press.
 */
export interface Social {
  label: string;
  href: string;
  icon: string;
  primary?: boolean;
}

export const socials: Social[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/hexxa/",
    icon: "instagram",
    primary: true,
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/artist/5YaMlt0yXNu3EsmtEUcxZa",
    icon: "spotify",
    primary: true,
  },
  {
    label: "SoundCloud",
    href: "https://soundcloud.com/hexxaofficial",
    icon: "soundcloud",
    primary: true,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@hexxaofficial",
    icon: "tiktok",
    primary: true,
  },
  {
    label: "Beatport",
    href: "https://www.beatport.com/artist/hexxa/1188883",
    icon: "beatport",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@hexxaofficial",
    icon: "youtube",
  },
  {
    label: "X",
    href: "https://x.com/hexxaofficial",
    icon: "x",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/theofficialhexxa/",
    icon: "facebook",
  },
  {
    label: "Linktree",
    href: "https://linktr.ee/hexxaofficial",
    icon: "link",
  },
];

export const primarySocials = socials.filter((social) => social.primary);

/** Standalone destinations that are not social feeds. */
export const links = {
  spotifyArtist: "https://open.spotify.com/artist/5YaMlt0yXNu3EsmtEUcxZa",
  spotifyArtistId: "5YaMlt0yXNu3EsmtEUcxZa",
  beatportArtist: "https://www.beatport.com/artist/hexxa/1188883",
  soundcloud: "https://soundcloud.com/hexxaofficial",
  linktree: "https://linktr.ee/hexxaofficial",
  /** Bandsintown artist page — also the ticket fallback for listed shows. */
  bandsintown: "https://www.bandsintown.com/a/HEXXA",
  /** THE HEXXORCISTS. Replace with the permanent invite when one exists. */
  discord: "https://linktr.ee/hexxaofficial",
  /** THE HEXXORCIST MERCH COLLECTION. */
  merch: "https://linktr.ee/hexxaofficial",
} as const;
