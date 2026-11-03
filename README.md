# DeepWork site

Landing page for [DeepWork](https://github.com/Sagyam/DeepWork), a focus app for Linux that is hard to get around.
Live at [deepwork.sagyamthapa.com.np](https://deepwork.sagyamthapa.com.np).

Astro + Tailwind CSS v4, built with bun. Static output, no client framework: the only scripts are the theme switch and the copy button.

```sh
bun install
bun run dev       # http://localhost:4321
bun run build     # static site in dist/
```

## Layout

| Path | What |
|---|---|
| `src/pages/index.astro` | The page, one component per section |
| `src/components/` | Sections, nav, footer |
| `src/styles/global.css` | Theme tokens (light and dark), fonts, shared classes |
| `src/assets/shots/` | App screenshots, resized to AVIF/WebP at build time |
| `public/` | Demo video and poster, OG image, icons, self-hosted latin font subsets |

Screenshots and the demo come from the DeepWork repo's `assets/`. The demo video is that repo's `demo.webp`
re-encoded to H.264 (`ffmpeg -crf 30 -tune animation`), about a sixth of the size.

## Deploy

Vercel picks up Astro on its own: import the repo, keep the defaults (build `bun run build`, output `dist`),
and add the domain `deepwork.sagyamthapa.com.np`.
