// queries/blogBySlug.ts
import { groq } from 'next-sanity'

export const blogBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    title,
    publishedAt,
    "mainImage": mainImage.asset->url,
    body
  }
`
