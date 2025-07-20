import { client } from '@/sanity/lib/client'
import { blogListQuery } from '@/sanity/queries/blogList'
import BlogList from '@/components/blog/BlogList'

export default async function BlogPage() {
  const posts = await client.fetch(blogListQuery)
  return <BlogList posts={posts} />
}
