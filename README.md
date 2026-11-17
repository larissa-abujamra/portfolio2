# Sunny Side Studios

Portfolio site for Sunny Side Studios, Larissa Oliveira's studio for websites and short videos.

```bash
npm install
npm run dev      # local server
npm run build    # static site in dist/
```

Stack: Vite, GSAP (ScrollTrigger), Lenis, Funnel Display / Funnel Sans via Fontsource.

## Where things live

| Path | What |
|---|---|
| `index.html` | All page content |
| `src/style.css` | Styles and color tokens (taken from the logo) |
| `src/main.js` | Egg animation, smooth scroll, reveals, video and preview behavior |
| `src/assets/egg.svg` | Vectorized mascot, split into `egg-body`, `egg-yolk`, `egg-eye`, `egg-smile` for animation |
| `src/assets/wordmark.svg` | Vectorized "Sunny Side Studios" wordmark (`currentColor`) |
| `public/media/` | Web-compressed videos and posters |
| `public/work/` | Website screenshots (full page, hero, mobile) |
| `archive/` | Content and images from the previous personal portfolio (portfolio26); not deployed |

## Adding work

- **Video**: put the file in `public/media/` and copy a `<figure class="video">` block in `index.html`.
- **Website**: add a full-page screenshot to `public/work/` and copy an `<a class="site">` block. The preview scrolls the whole image on hover.
