import { profile, projects } from '../../app/data/portfolio'

export default defineEventHandler((event) => {
  setHeader(event, 'content-type', 'application/xml; charset=utf-8')

  const routes = [
    '',
    ...projects.map((project) => `/projects/${project.slug}`)
  ]

  const urls = routes
    .map((route) => {
      return `<url><loc>${profile.siteUrl}${route}</loc><changefreq>monthly</changefreq><priority>${route ? '0.8' : '1.0'}</priority></url>`
    })
    .join('')

  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`
})
