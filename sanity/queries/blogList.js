// queries/blogList.ts
import { groq } from 'next-sanity'

export const blogListQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    "mainImage": mainImage.asset->url
  }
`
