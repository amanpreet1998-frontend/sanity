
import { client } from '@/sanity/lib/client'
import { pageWithSectionsQuery } from '@/sanity/queries/pageWithSections'
import PageRenderer from '@/components/PageRenderer'
import BlogList from "@/components/blog/BlogList"
import {blogListQuery  } from "@/sanity/queries/blogList"


export default async function HomePage() {
  const pageData = await client.fetch(pageWithSectionsQuery, { slug: "home" })
  const blogPosts = await client.fetch(blogListQuery)

  if (!pageData) return <div>No content found</div>

  return (
    <main>
      {/* Render hero, about, etc */}
      <PageRenderer sections={pageData.sections} />

      {/* Render latest blog posts */}
      <BlogList posts={blogPosts} />
    </main>
  )
}
