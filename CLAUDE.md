# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Jane's personal website (a software engineer's portfolio), deployed at https://janehe.dev/. Built with Create React App (react-scripts 5, React 19). The app is currently a placeholder ("coming soon") awaiting a real build-out.

## Commands

```bash
npm start                          # Dev server at http://localhost:3000 (hot reload)
npm run build                      # Production build into build/
npm test                           # Jest in interactive watch mode
npm test -- --watchAll=false       # Run all tests once (CI style)
npm test -- App.test.js            # Run a single test file
```

There is no separate lint command; ESLint (`react-app` config) runs as part of `npm start` and `npm run build`. Do not run `npm run eject`.

## Architecture

Standard CRA structure — no routing, state management, or CSS framework yet:

- `src/index.js` mounts `<App />` (in StrictMode) into the `#root` div of `public/index.html`.
- `src/App.js` is the single page component; styling lives in `src/App.css` with globals in `src/index.css`.
- `public/index.html` sets the page title ("Jane He") and favicon (`public/sailormoon.jpg`). Note: the `<link rel="manifest">` currently points at `sailormoon.jpg` instead of `manifest.json` — fix this when touching that file.

When the site grows beyond a single page, add components under `src/` and keep CRA's zero-config toolchain (no ejecting, no custom webpack).

## Design Direction: Bongo Cat Aesthetic

The site's visual identity is based on the Bongo Cat game on Steam (a free desktop-pet where the meme cat sits on the taskbar and baps along with your typing, collecting cute hats). The look to match: kawaii, flat, minimalist — a white cat with a clean dark outline, pink paws/blush, tan bongos, and soft pastel surroundings. Cheerful and cozy, but the site must still read as a professional software engineer's portfolio: generous whitespace, restrained use of the pastels, dark readable body text.

### Color palette

| Role | Color | Notes |
|---|---|---|
| Page background | `#FDF6EC` | Warm cream (soft, paper-like) |
| Secondary background | `#DFF3FD` | Pastel sky blue (section alternation, cards) |
| Text | `#2E2E38` | Charcoal — use instead of pure black for outlines too |
| Primary accent | `#F4A7B9` | Bongo Cat pink (paws/blush) — buttons, links, highlights |
| Secondary accent | `#A8D8EA` | Sky blue — hover states, tags |
| Tertiary accent | `#D9A066` | Bongo tan — sparingly, for warmth |
| Surface | `#FFFFFF` | Cat white — cards on the cream background |

### Typography

- **Headings: "Baloo 2"** (Google Fonts) — chunky, rounded, friendly; matches the cat's soft blob shapes without being a novelty font.
- **Body/UI: "Nunito"** (Google Fonts) — rounded terminals keep the cute feel, but it is a well-hinted, highly readable sans that stays professional at body sizes. Use 400/600/700 weights.
- Fallback stack: `system-ui, -apple-system, sans-serif`. Load fonts via a `<link>` in `public/index.html` or `@import` in `src/index.css`.
