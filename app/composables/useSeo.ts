import { profile } from '~/data/portfolio'

interface SeoInput {
  title: string
  description: string
  path?: string
  type?: 'website' | 'article'
}

export const useSeo = ({ title, description, path = '/', type = 'website' }: SeoInput) => {
  const url = `${profile.siteUrl}${path}`

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogType: type,
    ogUrl: url,
    ogSiteName: `${profile.fullName} Portfolio`,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description
  })

  useHead({
    link: [{ rel: 'canonical', href: url }],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: profile.fullName,
          jobTitle: profile.title,
          url: profile.siteUrl,
          sameAs: [profile.github, profile.linkedin],
          knowsAbout: ['Vue.js', 'Nuxt', 'Angular', 'TypeScript', 'NestJS', 'Design Systems']
        })
      }
    ]
  })
}
