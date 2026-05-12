export default defineNuxtConfig({
  compatibilityDate: "2026-05-08",
  devtools: { enabled: true },
  ssr: true,
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  css: ["~/assets/css/main.css"],
  components: [{ path: "~/components", pathPrefix: false }],
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.png" }],
      meta: [
        { name: "theme-color", content: "#0b0d12" },
        { name: "robots", content: "index, follow" },
      ],
    },
  },
  nitro: {
    preset: "cloudflare-pages",
    prerender: {
      crawlLinks: true,
      routes: [
        "/",
        "/projects/cresh-ui",
        "/projects/france-histories",
        "/projects/le-cercle-vert",
        "/sitemap.xml",
      ],
    },
  },
  routeRules: {
    "/": { prerender: true },
    "/projects/**": { prerender: true },
    "/assets/**": {
      headers: { "cache-control": "public, max-age=31536000, immutable" },
    },
  },
  typescript: {
    strict: true,
    typeCheck: false,
  },
});
