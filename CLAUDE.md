# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project

Personal portfolio site for Felipe Trombini, built with Astro (static output) and deployed to
GitHub Pages at `byuufx.github.io/portfolio-dev`. Bilingual (English `/en/`, Portuguese `/pt/`)
single-page-style site with a hero, about/skills, "what I work on" focus cards, experience,
education/certifications, project gallery, and contact section.

## Commands

```bash
npm run dev       # start dev server (astro dev)
npm run build     # type-check (astro check) then build static site to dist/
npm run preview   # preview the production build locally
npm run astro     # run arbitrary astro CLI commands
```

There is no test suite or linter configured. `npm run build` (which runs `astro check`) is the
closest thing to a correctness check — run it after changes to `.astro` or `.ts` files.

## Architecture

- **Styling is Tailwind CSS v4**, wired via the `@tailwindcss/vite` plugin in `astro.config.mjs`
  (NOT the `@astrojs/tailwind` integration — that package targets Tailwind v3 and is deprecated).
  Theme tokens (colors, fonts) are defined once via `@theme` in `src/styles/global.css`, imported
  from `Layout.astro`. There is no Bootstrap, Sass, or `astro-purgecss` in this project — do not
  reintroduce them; Tailwind v4's own content scanning already removes unused classes.
- **Content is data-driven and split by whether it needs translation**:
  - `src/data/content.json` holds language-independent facts: contact info, the profile photo
    and résumé PDF paths, skills lists, experience entries (company/location/dates/id), education
    entries (institution/dates/id), certifications, the `focus` id list (which "what I work on"
    cards to render, in order), and the projects list (name/url/category). No prose or UI labels
    live here.
  - `src/i18n/ui.ts` holds all translated UI strings as a flat `key -> string` dictionary per
    language (`ui.en`, `ui.pt`), plus `experienceBullets` for the per-job bullet lists (translation
    can't be flattened into single strings there, so it's a separate `Record<Lang, Record<id,
    string[]>>` export).
  - Components join the two by `id`: e.g. `content.json`'s `experience[].id` (`"new-rizon"`,
    `"tribox"`) is used to look up `t('experience.title.<id>')` and
    `getExperienceBullets(lang, id)`; `focus` ids (`"saas"`, `"ecommerce"`, `"apis"`,
    `"performance"`) look up `t('focus.title.<id>')` / `t('focus.desc.<id>')` and an inline SVG
    path from the `focusIcons` map in `HomePage.astro`. When adding a new experience/education/
    certification/focus entry, add the language-independent fields to `content.json` with a
    stable `id`, then add matching translated keys to **both** `ui.en` and `ui.pt` in `ui.ts`.
- **i18n is native Astro routing — no third-party i18n package.** `src/pages/en/index.astro` and
  `src/pages/pt/index.astro` are thin wrappers that render `<HomePage lang="en" />` /
  `<HomePage lang="pt" />`. `src/pages/index.astro` redirects `/` to `/${defaultLang}/`
  (`defaultLang` is `'pt'`, set in `src/i18n/ui.ts`). All actual markup lives once in
  `src/components/HomePage.astro`, parameterized by the `lang` prop — never duplicate page markup
  per locale. `src/i18n/utils.ts` exports `getLangFromUrl(url)`, `useTranslations(lang)` (returns
  a `t(key)` function), and `getExperienceBullets(lang, id)`. Adding a third language means: add
  it to the `languages` object in `ui.ts`, add a full key set under `ui.<lang>` and
  `experienceBullets.<lang>`, and add `src/pages/<lang>/index.astro`.
- **BASE_URL pattern for static assets**: the site deploys under `/portfolio-dev/` on GitHub Pages
  but root in dev, so every static asset path (favicon, profile photo, résumé PDF) is prefixed
  with `import.meta.env.MODE === 'production' ? '/portfolio-dev' : ''`. This is NOT automatic —
  Astro does not rewrite paths for files referenced from `public/`. Follow the same pattern
  (recomputed per-file, matching the existing style) if a new static asset is added.
- **Static assets in `public/`**: `favicon.svg`, `trombini.webp` (profile photo, used in the hero
  avatar and the schema.org `image`), and `felipe-trombini-cv.pdf` (the "Download CV" link target).
  This is a deliberate, small set — don't add project screenshots or decorative imagery; the photo
  and résumé are the only content assets, everything else is typographic/card-based.
- **SEO**: `Layout.astro` renders a schema.org `Person` JSON-LD block via `astro-seo-schema`
  (v7, matching Astro v7 — do not downgrade), sourced from `content.json`'s `about` data
  (including `image`, pointed at the production URL of `trombini.webp`), plus `hreflang`
  alternate links and a `canonical` link for the current locale. `Layout.astro` takes `lang` as an
  explicit prop (set by the page, not sniffed from the URL inside the layout) and maps it to the
  correct `<html lang>` value (`pt` → `pt-BR`, `en` → `en`).
- **Deployment**: `.github/workflows/astro.yml` builds and deploys to GitHub Pages on every push
  to `main`.

## Design System — dark Material, grounded in the CV

The site uses a dark, card-based, Material-influenced look chosen deliberately after an earlier
"Editorial Utilitarian" (light, monochrome, borders-only, no images) direction was tried and
rejected as too plain. Do not revert to that direction without being asked. The current system:

**Palette** — defined as Tailwind v4 theme tokens in `src/styles/global.css` (`@theme` block),
do not use raw Tailwind `neutral`/`orange`/`slate` classes for these roles, use the named tokens:
- `ink-950` (`#0a0e1a`) — page background (`body`).
- `ink-900` (`#10152a`) — reserved for larger section backgrounds if ever needed.
- `ink-800` (`#171f38`) — card surfaces, always at `/60` opacity over the page background
  (`bg-ink-800/60`), never fully opaque — this is what gives cards their "elevated glass" read
  without being literal glassmorphism (no blur, no translucency over content).
- `ink-700` (`#212b4a`) — card borders, dividers, chip backgrounds, hover-lifted surfaces.
- `ink-600` (`#384368`) — outline-button borders, subtler dividers.
- `paper` (`#eef0f6`) / `paper-muted` (`#8d93ac`) — primary / secondary text on dark.
- `copper-400/500/600` (`#ecad78` / `#e58a45` / `#c96f31`) — the single accent. Used for CTAs,
  active/hover states, bullet markers, the avatar ring, and small status dots. Do not add a
  second accent color; if a new UI need arises, reach for a copper shade or a neutral ink shade
  first.

**Typography**
- Headings use `font-display` (Space Grotesk, loaded via Google Fonts in `Layout.astro`) at
  `font-semibold`/`font-bold` with `tracking-tight`.
- Body copy uses `font-sans` (Inter).
- Metadata (dates, role/location lines, section eyebrows, footer) is always
  `font-mono text-xs uppercase tracking-wider`, usually in `text-copper-400` (section headings) or
  `text-paper-muted` (secondary metadata). This monospace-metadata pattern is a carryover
  signature from the previous design phase — keep it, it reads as "data" against the display type.
- All three font families are loaded together via one Google Fonts `<link>` in `Layout.astro`
  (`Space Grotesk` + `Inter` + `JetBrains Mono`) — don't split into separate imports or swap in
  system-font fallback as the primary (fallbacks stay in the `@theme` `--font-*` stacks for
  loading-flash resilience only).

**Structure**
- Cards are the primary structural unit: `rounded-2xl border border-ink-700 bg-ink-800/60`, with
  generous padding (`p-6`/`p-8`). This applies to skill groups, focus cards, experience entries,
  education/certifications, and project links.
- Buttons/chips/pills use `rounded-full` — this is intentional (Material-style), unlike the
  previous sharp-corner rule. Cards use `rounded-2xl`, never `rounded-full`.
- Soft shadows are allowed and expected on interactive/primary elements (e.g.
  `shadow-lg shadow-copper-500/20` on the primary CTA, `shadow-2xl shadow-black/50` on the
  avatar) — always tinted with `ink`/`copper`/black, never a saturated multi-color glow.
- Hover states lift/highlight rather than animate large distances: `hover:border-copper-500/50`,
  `hover:scale-[1.03]`, `hover:bg-ink-700`. Keep transitions short (`transition-colors`,
  `transition-transform`) — no bouncy/elaborate easing.

**Explicitly still banned — never generate these:**
- Purple/violet or cyan/teal neon glows, gradient text, or gradient backgrounds of any kind (the
  accent is a single flat copper, not a gradient).
- Literal frosted-glass panels (`backdrop-blur` over page content) — the header's
  `backdrop-blur-sm` on a mostly-opaque nav bar is the one sanctioned exception, for legibility
  while scrolling, not a stylistic glass panel.
- Floating blurred gradient blobs/orbs as background decoration.
- Multi-color or rainbow shadows/glows — shadows are always monochrome (`black`, `ink`, or
  `copper`), tinted subtly.
- A second accent color — copper is the only one. Resist adding a complementary teal/blue "for
  variety."
- Generic emoji icons — the focus-card icons are hand-written inline SVGs (stroke, currentColor,
  in `focusIcons` in `HomePage.astro`); add new ones in the same style, not emoji or an icon font.
