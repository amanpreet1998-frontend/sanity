import { client } from '@/sanity/lib/client'
import { blogBySlugQuery } from '@/sanity/queries/blogBySlug'
import BlogPost from '@/components/blog/BlogPost'

export default async function BlogSlugPage({ params }: { params: { slug: string } }) {
  const post = await client.fetch(blogBySlugQuery, { slug: params.slug })
  return <BlogPost post={post} />
}
