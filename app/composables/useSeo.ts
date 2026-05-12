import { profile } from "~/data/portfolio";

interface SeoInput {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  ogImage?: string;
}

export const useSeo = ({
  title,
  description,
  path = "/",
  type = "website",
  ogImage,
}: SeoInput) => {
  const url = `${profile.siteUrl}${path}`;
  const image = ogImage ?? `${profile.siteUrl}/og-image.png`;

  useSeoMeta({
    title,
    description,
    author: profile.fullName,
    ogTitle: title,
    ogDescription: description,
    ogType: type,
    ogUrl: url,
    ogSiteName: `${profile.fullName} Portfolio`,
    ogImage: image,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: title,
    twitterCard: "summary_large_image",
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: image,
    twitterImageAlt: title,
  });

  useHead({
    link: [{ rel: "canonical", href: url, id: "canonical-url" }],
    script: [
      {
        type: "application/ld+json",
        key: "schema-person",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": `${profile.siteUrl}/#person`,
          name: profile.fullName,
          jobTitle: profile.title,
          url: profile.siteUrl,
          email: profile.email.replace("mailto:", ""),
          address: {
            "@type": "PostalAddress",
            addressLocality: profile.location,
          },
          sameAs: [profile.github, profile.linkedin],
          knowsAbout: [
            "Vue.js",
            "Nuxt",
            "Angular",
            "TypeScript",
            "NestJS",
            "Design Systems",
          ],
        }),
      },
    ],
  });
};
