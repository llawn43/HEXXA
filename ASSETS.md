# Assets

The site is complete and presentable right now. Every photo slot that has no real
file draws an on-brand placeholder instead — a crimson/violet duotone panel with
grain and the sigil — so nothing looks broken while you gather photography.

Each asset goes live the moment you do two things:

1. Drop the file into `public/img/...` using the exact filename below.
2. Change the matching `null` to that path in `src/data/assets.ts`.

Nothing else needs to change. No markup edits, no layout work.

## How to wire a file up

`src/data/assets.ts` is the single source of truth for photography. To publish
the hero shot, for example:

```ts
// before
hero: null as string | null,

// after
hero: asset("/img/hero-portrait.webp"),
```

The `asset()` helper prepends the GitHub Pages base path (`/HEXXA`), so always
wrap paths in it rather than hardcoding a leading slash.

## Format and export rules

- **Format**: WebP for photography, quality 82–88. Keep a JPEG or PNG master
  outside the repo; commit only the web export.
- **Colour**: sRGB. Anything in Display P3 will shift on most browsers.
- **Weight**: keep each file under 350 KB. The hero should be under 250 KB.
- **Dimensions**: the pixel sizes below are the *minimum* — they are 2x the
  largest rendered size so the images stay sharp on retina displays. Bigger is
  fine; the aspect ratio is what matters, because the layout crops to it.
- **Framing**: shoot or crop against dark backgrounds where possible. The whole
  design sits on near-black `#07060A`, and images with bright blown-out
  backgrounds fight the page.

## Site photography

All paths are relative to `public/`. The **Key** column is the property to fill
in inside `src/data/assets.ts`.

| Key | File | Dimensions | Ratio | Where it appears |
| --- | --- | --- | --- | --- |
| `hero` | `img/hero-portrait.webp` | 1600 x 2400 | 2:3 vertical | Homepage hero, full-bleed behind the HEXXA wordmark |
| `heroAlt` | `img/hero-portrait-alt.webp` | 1600 x 2400 | 2:3 vertical | Optional second hero layer. Leave `null` unless you want a stacked duotone treatment |
| `portrait` | `img/portrait-drag.webp` | 1400 x 2100 | 2:3 vertical | `/about`, beside the story — the full-look drag portrait |
| `live` | `img/live-set.webp` | 2400 x 1600 | 3:2 horizontal | `/about`, mid-set with the crowd visible |
| `merch` | `img/merch-lifestyle.webp` | 2000 x 1500 | 4:3 horizontal | `/merch` hero and the homepage merch teaser |
| `crowd` | `img/crowd-wide.webp` | 2400 x 1600 | 3:2 horizontal | `/booking` banner — wide crowd shot, reads as scale to a promoter |
| `ogImage` | `img/og-share.webp` | 1200 x 630 | 1.91:1 | Social share card for links to the site |

### A note on the hero

The homepage hero is the one image worth being fussy about. It is cropped tall
on mobile and wide on desktop, so keep HEXXA in the centre third of the frame
with headroom above — the wordmark and the "you summon her" line sit over the
lower half.

### A note on the OG image

`public/og-default.png` already exists: a generated 1200x630 card with the sigil
and wordmark, so links to the site preview correctly today. Setting `ogImage`
replaces it with a real photo, which will perform better when shared. Keep any
text in the middle 80% of the frame, since Slack and Twitter crop the edges.

## Release artwork

Cover art lives on each release in `src/data/releases.ts`, not in `assets.ts`.
Every release currently has `artwork: null` and shows a placeholder tile with the
track name.

- **File**: `public/img/releases/<slug>.webp` — lowercase, hyphenated. `ROT`
  becomes `rot.webp`, `KISS OF DEATH` becomes `kiss-of-death.webp`.
- **Dimensions**: 1000 x 1000, square. Labels usually supply 3000x3000 masters;
  downscale to 1000 for the web.
- **Where**: the homepage "latest curse" block and the `/music` grid.

```ts
// in src/data/releases.ts
{
  title: "ROT",
  artwork: asset("/img/releases/rot.webp"),
  // ...
}
```

Prioritise the ones people actually see first: **ROT**, **PLAY TIME**,
**NIGHTMARE**, **KISS OF DEATH**, **EDGE OF INSANITY** (homepage), plus
**FEMME FATALE** and **UNHOLY REIGN**, which are both flagged on `/music`.

## Video IDs and posters

This is the one gap that is not about photography. All four sets in
`src/data/videos.ts` currently have `youtubeId: null`:

- Bass Canyon 2026 Livemix
- Lost Lands 2025 Mix
- Forbidden Kingdom 2026 Mix
- Live @ Escapade 2026 — Full Set

With no ID, each tile renders a branded placeholder that links out to the
YouTube channel, so `/videos` works but does not play in place. Fill in the ID —
the part after `v=` in a YouTube URL — to turn each one into a real click-to-play
embed:

```ts
// in src/data/videos.ts
{
  title: "Bass Canyon 2026 Livemix",
  youtubeId: "dQw4w9WgXcQ",
  // ...
}
```

Once an ID is set you get the poster frame for free: YouTube's own thumbnail is
used automatically, which costs one cheap image request rather than a whole
iframe on page load. So `poster` can stay `null` in almost every case.

Only supply a poster to override that thumbnail — for instance if the auto
thumbnail is an unflattering frame.

- **File**: `public/img/videos/<slug>-poster.webp`
- **Dimensions**: 1920 x 1080, 16:9.

## Press kit downloads

`/press` lists these four. Each renders a greyed-out "coming soon" chip until the
file exists, and becomes a download button once you fill in `pressAssets` in
`src/data/assets.ts`.

| Key | File | Notes |
| --- | --- | --- |
| `photoPack` | `press/hexxa-press-photos.zip` | Print-resolution photos, 300 DPI. Include a credits text file |
| `logoPack` | `press/hexxa-logos.zip` | SVG plus transparent PNG at 512/1024/2048, in light and dark variants |
| `techRider` | `press/hexxa-technical-rider.pdf` | Booking requirement — worth prioritising over photography |
| `stagePlot` | `press/hexxa-stage-plot.pdf` | |

## Press photo grid

`pressPhotos` in `src/data/assets.ts` drives the four-up grid on `/press`. It is
a separate list from the site photography above, because press wants options
rather than the specific crops the layout uses.

| Slot | File | Dimensions | Ratio |
| --- | --- | --- | --- |
| Portrait | `img/press/press-portrait.webp` | 1400 x 2100 | 2:3 |
| Live on stage | `img/press/press-live.webp` | 2400 x 1600 | 3:2 |
| Full look | `img/press/press-full-look.webp` | 1400 x 2100 | 2:3 |
| Crowd | `img/press/press-crowd.webp` | 2400 x 1600 | 3:2 |

Add a `credit` string to any entry that needs a photographer credit — it renders
under the photo:

```ts
{
  src: asset("/img/press/press-live.webp"),
  alt: "HEXXA press photo — live on stage",
  credit: "Photo by ...",
  ratio: "3/2",
}
```

## Logo and sigil — already done

The hex-sigil mark and the HEXXA wordmark are original vector, authored as inline
SVG in `src/components/Sigil.astro`. They are real assets from day one, scale
losslessly, inherit colour from CSS, and cost no network request. `favicon.svg`
and `favicon.ico` are derived from the same mark.

You do not need a logo file to launch. You only need `press/hexxa-logos.zip` for
promoters and press who ask for one, and that can be exported from the same SVG.

## Priority order

If you are gathering these one at a time:

1. **YouTube IDs** in `src/data/videos.ts` — no new files needed, just four
   strings, and `/videos` goes from placeholder tiles to real playable sets.
2. `hero` — the single highest-impact image on the site.
3. Release artwork for the seven titles listed above.
4. `techRider` — this one blocks bookings, unlike the photography.
5. `portrait` and `live` for `/about`.
6. `merch` and `crowd`.
7. `pressPhotos` and the remaining press downloads.
