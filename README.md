# Senior Fullstack Portfolio

Nuxt 4 portfolio for a senior fullstack developer, built as an SSR-ready technical product showcase.

## Stack

- Nuxt 4, Vue 3, TypeScript
- Tailwind CSS with dark mode
- Cloudflare Pages Nitro preset
- Typed portfolio content in `app/data/portfolio.ts`
- SEO metadata, structured data, `robots.txt` and dynamic `sitemap.xml`

## Commands

```bash
npm install
npm run dev
npm run build
npm run typecheck
```

## Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Framework preset: Nuxt

Before deployment, update `profile.siteUrl`, `profile.email`, GitHub and LinkedIn values in `app/data/portfolio.ts`.
