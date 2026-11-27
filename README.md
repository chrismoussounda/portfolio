# Portfolio · L'Enseigne

Personal portfolio of **Christoffert Moussounda**, full-stack developer in Brazzaville, painted like a Congolese shop sign: flat colours, thick outlines, hand-lettered slab type.

**Live:** https://chrismoussounda.vercel.app ([FR](https://chrismoussounda.vercel.app/fr) · [EN](https://chrismoussounda.vercel.app/en))

## What's on the page

- **The sign:** who I am, what I build, availability and key figures.
- **Les travaux / The work:** platforms I work on for government and business, as painted panels with my role, period and stack.
- **L'histoire, Parcours, Avant ça:** the story, the timeline and earlier work.
- **Au menu:** services.
- **Le labo / Lab:** my open-source projects, each with an animated diagram of how it works.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, static prerendering), React 19, TypeScript
- Plain CSS with design tokens: day and night themes that follow the system, with a manual toggle
- Fonts: Alfa Slab One (sign lettering), Archivo Narrow (labels), Work Sans (text), via `next/font`
- No UI library and no client-side data fetching. The only client component is the theme toggle.

## Features

- **Bilingual:** `/fr` and `/en`. `/` redirects based on the browser's `Accept-Language` (see `proxy.ts`).
- **SEO:** per-language metadata, canonical and `hreflang` alternates, `sitemap.xml`, `robots.txt`, JSON-LD `Person`.
- **Share cards:** an Open Graph image generated per language (`app/[lang]/opengraph-image.tsx`), with a generated favicon and Apple touch icon.
- **Accessible:** semantic landmarks, skip link, visible focus, `prefers-reduced-motion` respected.

## Run it

```sh
pnpm install
pnpm dev     # http://localhost:3000
pnpm build   # production build
pnpm lint
```

## Edit the content

All text lives in [`lib/content.ts`](lib/content.ts): projects, career, lab and page copy in French and English. The page layout is in `app/[lang]/page.tsx`, the styles in `app/globals.css`.

## Deploy

Deployed on Vercel. Every push to `main` goes to production, and pull requests get a preview URL.

## License

Code: MIT. Content (text and project descriptions): © Christoffert Moussounda, all rights reserved. Fonts are under the SIL Open Font License.
