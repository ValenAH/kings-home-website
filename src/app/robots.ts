import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/shopping-cart/',
    },
    sitemap: 'https://hogardereyes.netlify.app/sitemap.xml',
  }
}
