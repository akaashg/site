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

## Deploy

Static output — works on Vercel or Netlify with zero config. Point
akaashgarg.com's DNS at whichever you pick.

## Before this goes fully live

Every case study has one or more `TODO:` markers for real screenshots,
diagrams, or outcome specifics — search the repo for `TODO` before
publishing. See `ROADMAP.md` (one level up) for the full plan.
