# r6siege-cheats-.net

Static Astro 7 site for [eftcheat.net](https://eftcheat.net). Escape from Tarkov cheats — ESP, aimbot, and wallhack for Windows PC.

## Stack

- Astro 7 + Tailwind CSS 4 + TypeScript
- 22-locale i18n (English at root, `/es/`, `/fr/`, …)
- Cloudflare Pages deployment with `functions/_middleware.js`

## Quick start

```bash
npm install
npm run generate:i18n   # after editing scripts/i18n-data/*
node scripts/generate-blog-posts.mjs
npm run dev
```

Build and validate sitemaps:

```bash
npm run build:validate
```

## Deploy (Cloudflare Pages)

1. Create a Cloudflare Pages project named **besttarkovcheats**
2. Connect this repo or upload `dist/` after `npm run build`
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add custom domain **tarkovcheats.org** (apex) and redirect **www** → apex
6. Enable SSL **Always Use HTTPS**

CLI deploy:

```bash
npm run pages:deploy
```

## Environment

- Node.js >= 22.12.0
- Checkout URL: Zadeyo Tarkov product (`siteConfig.checkoutUrl` in `src/data/site.ts`)

## License

Private — for tarkovcheats.org deployment only.
