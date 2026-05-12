import { profile, projects } from '../../app/data/portfolio'

export default defineEventHandler((event) => {
  setHeader(event, 'content-type', 'application/xml; charset=utf-8')

  const lastmod = new Date().toISOString().split('T')[0]

  const routes = [
    { path: '', priority: '1.0', changefreq: 'weekly' },
    ...projects.map((project) => ({
      path: `/projects/${project.slug}`,
      priority: '0.8',
      changefreq: 'monthly'
    }))
  ]

  const urls = routes
    .map(({ path, priority, changefreq }) => {
      return `<url><loc>${profile.siteUrl}${path}</loc><lastmod>${lastmod}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`
    })
    .join('')

  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`
})
