# HEXXA — official site

Static site for HEXXA, Philadelphia dubstep demon. Astro 5 + Tailwind v4, no
runtime framework, deployed free to GitHub Pages.

Live at **https://llawn43.github.io/HEXXA**

## Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:4321/HEXXA` |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run check` | Type-check `.astro` and `.ts` files |
| `npm run og` | Regenerate `public/og-default.png` from the sigil |

## Updating content

All the content that changes often lives in `src/data/` as plain TypeScript. You
do not need to touch any markup to keep the site current.

| File | What it holds |
| :--- | :--- |
| `shows.ts` | Tour dates. Past dates drop off automatically at build time |
| `releases.ts` | Discography, plus the free flips list on `/music` |
| `videos.ts` | Live sets and mixes for `/videos` |
| `bio.ts` | One-liner, short and long bios, press quotes, stages played |
| `socials.ts` | Profile links and the direct external links used site-wide |
| `contacts.ts` | Management and booking contacts |
| `assets.ts` | Photo paths. See [ASSETS.md](./ASSETS.md) |
| `nav.ts` | Header and footer navigation |
| `site.ts` | Site name, tagline, description |

### Adding a show

Append to the array in `src/data/shows.ts`. Dates in the past are filtered out
on the next build, so old shows do not need deleting.

```ts
{
  date: "2026-11-14",
  time: "10:00 PM",
  city: "Brooklyn",
  region: "NY",
  country: "US",
  venue: "Elsewhere",
  tickets: "https://...",
}
```

Add `event` for a festival name, `lineup` for a shared bill, `runsThrough` for a
multi-day festival, and `soldOut: true` where relevant. `tickets: null` falls
back to the Bandsintown page rather than rendering a dead link.

### Adding a release

Append to `src/data/releases.ts`. The `/music` page groups by year on its own.
Set `featured: true` to surface it on the homepage, and `startHere: true` to
give it the "Start here" badge (currently on FEMME FATALE).

## Photography

No real photos are in the repo yet, so every image slot renders an on-brand
placeholder. The site is presentable as-is and each photo goes live by dropping
a file into `public/img/` and filling in one line of `src/data/assets.ts`.

[**ASSETS.md**](./ASSETS.md) lists every required file with its exact path,
pixel dimensions, and where it appears.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with
`withastro/action@v6` and publishes via `actions/deploy-pages@v5`.

**One-time setup:** in the repo, go to Settings → Pages and set **Source** to
**GitHub Actions**. Without this the workflow runs but nothing publishes.

### Moving to a custom domain

The site is configured as a GitHub Pages *project* site, which is why every URL
carries a `/HEXXA` base path. To move to a real domain like `hexxaofficial.com`:

1. In `astro.config.mjs`, set `site: 'https://hexxaofficial.com'`.
2. Delete the `base: '/HEXXA'` line.
3. Add `public/CNAME` containing just `hexxaofficial.com`.
4. Update the `Sitemap:` line in `public/robots.txt`.
5. Point a DNS `CNAME` record at `llawn43.github.io`, and set the domain in
   Settings → Pages.

Internal links all run through the `href()` helper in `src/lib/url.ts` and
images through `asset()`, so they pick up the change automatically. Nothing else
needs editing.

## Notes on the build

- **Embeds are click-to-play facades.** YouTube and Spotify render as a
  lightweight poster and only inject the real iframe when a visitor asks for it,
  so a page can carry several sets without paying for third-party frames on
  load. See `src/components/EmbedFacade.astro`.
- **Motion is gated.** Every animation is disabled under
  `prefers-reduced-motion: reduce`. There is no autoplay audio anywhere.
- **Contrast is verified.** All text meets WCAG AA against its actual rendered
  background.
- **The logo is code.** The hex-sigil mark is original inline SVG in
  `src/components/Sigil.astro` — it scales losslessly, inherits colour from CSS,
  and costs no network request.
- **Tour dates are hand-maintained** rather than pulled from a name-matched
  widget, which would risk showing another artist's dates.
