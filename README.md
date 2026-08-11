# akaashgarg.com

Personal portfolio. Astro + Tailwind, static output, no CMS/DB/auth.

## Run it

```
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve the built dist/ locally
```

## Structure

- `src/pages/` — the 3 routes: home (`index.astro`), projects
  (`projects/index.astro` + `projects/[slug].astro`), about (`about.astro`).
- `src/content/projects/*.md` — one file per case study. Edit copy here, not
  in the components. Frontmatter fields: `title`, `company`, `role`,
  `timeframe`, `stack`, `summary`, `outcome`, `order`, `draft`.
- Set `draft: true` on a project file to keep it out of the site without
  deleting it — see `multiplayer-vr-classroom.md` for an in-progress example.
- `src/components/` — `Header`, `Footer`, `ProjectCard`, `TechTag`.
- `src/layouts/BaseLayout.astro` — HTML shell, meta tags, skip link.
- `src/styles/global.css` — Tailwind entry + base styles (focus states,
  link styling, `.tag` component).

## Design tokens

Colors and fonts live in `tailwind.config.mjs`: `paper`/`ink`/`muted`/`line`
for the palette, one `signal` accent color, and two font stacks (`sans` +
`mono`, both system fonts — zero font-loading weight).

## Asset generation

These are not part of `npm run build` — run them when their inputs change and
commit the output.

```
npm run generate:og          # 1200x630 social share card
npm run generate:cards       # branded cards for projects with no screenshots
npm run fetch:store-media    # re-pull store screenshots (Play / Steam)
```

## Analytics

`src/components/Analytics.astro` is provider-agnostic and inert until
configured. Set the Umami Cloud Website ID in `CONFIG.umami.websiteId`; until
then no script loads and `window.track()` no-ops.

Conversion events: `Brief submitted` (with engagement + timeline), `Booking
click`, `Email click`, `LinkedIn click`, `Resume download`, `Store link click`.
Outbound clicks are tracked automatically — only the form success needs
explicit wiring.

## Contact form

Posts to Web3Forms (`src/pages/contact.astro`). The access key is public by
design. The form also POSTs natively without JS, and falls back to a `mailto:`
link if the API is unreachable.

## Deploy — Cloudflare Workers (static assets)

Static output, so it needs a file server and nothing else. Cloudflare builds
from the repo: connect it once and every push to `main` deploys. No workflow
file, no secrets, no FTP.

| Setting | Value |
|---|---|
| Repository | `github.com/akaashg/site`, branch `main` |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Node version | read from `.nvmrc` (20) |

`wrangler.jsonc` points the deploy at `./dist` and sets
`not_found_handling: "404-page"` so a missing path returns the generated
`404.html` with a real 404 status.

There is **no Worker script** — every request is served straight from the asset
store, so nothing is billed as a Worker invocation. `public/_headers` is parsed
by Workers and applied to asset responses (it is not itself served).

Validate the config locally without deploying:

```
npm run build && npx wrangler deploy --dry-run
```

Cloudflare Pages would also work for this site, but new projects are now
steered to the Workers flow above.

### Why not Hostinger's Git integration

It runs `git pull` without a build step. Astro needs `npm run build`, and
`dist/` is gitignored, so connecting the repo directly would publish source
files and no website.

Hostinger remains useful for email and other projects. If the site ever needs to
move back there, `deploy/hostinger.htaccess` holds the Apache config — HTTPS
redirect, www → non-www canonicalisation, `ErrorDocument 404`, cache headers,
compression, and `.avif` / `.webp` MIME types. Copy it to `dist/.htaccess`
after building and upload the **contents** of `dist/` into `public_html/`. It is
deliberately kept out of `public/` so it is not served as a public file.

## Before this goes fully live

Search for `TODO` — remaining markers are in case studies that still need real
outcome specifics. Testimonials are the biggest outstanding gap.
