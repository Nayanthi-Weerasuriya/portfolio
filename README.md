# Nayanthi Weerasuriya — Portfolio

Next.js portfolio for [nayanthi-weerasuriya.vercel.app](https://nayanthi-weerasuriya.vercel.app/).

## Tech Stack

- **Next.js 16** (App Router, static export compatible)
- **React 19** + TypeScript
- **next/image** — AVIF/WebP optimization, lazy loading
- **Font Awesome** (solid + brands subsets)
- **Outfit** (Google Font, self-hosted via `next/font`)

## Local Development

```bash
npm install
cp .env.example .env.local   # optional — set your site URL
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no extra config needed.
4. Add an environment variable (optional but recommended for SEO):

   | Variable | Value |
   |----------|-------|
   | `NEXT_PUBLIC_SITE_URL` | `https://your-domain.vercel.app` |

5. Deploy.

### What Vercel gets out of the box

- Automatic HTTPS
- Edge caching for static assets (`/img/*` cached 1 year)
- Image optimization via `next/image`
- `sitemap.xml` and `robots.txt` generated at build time

## SEO & Performance

- `metadataBase`, Open Graph, Twitter cards, JSON-LD `Person` schema
- `/sitemap.xml` and `/robots.txt`
- `/site.webmanifest` with PWA icon
- Favicon: `/img/android-chrome-512x512.png`
- Lazy-loaded images below the fold; hero profile image uses `priority`
- Security headers (`X-Content-Type-Options`, `Referrer-Policy`)

## Project Structure

```
src/
├── app/           # layout, page, sitemap, robots, styles
├── components/    # UI sections
├── data/          # Portfolio content
└── lib/           # Site config (URL, SEO constants)
public/
├── img/           # Images & favicon
└── site.webmanifest
```
