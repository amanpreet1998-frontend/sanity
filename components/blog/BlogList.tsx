import Link from 'next/link'

export default function BlogList({ posts }: { posts: any[] }) {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4">Latest Posts</h2>
      <ul className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <li key={post._id} className="border rounded-lg p-4 shadow-md">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-sm text-gray-500">{new Date(post.publishedAt).toDateString()}</p>
            <Link href={`/blog/${post.slug.current}`} className="text-blue-600 underline">
              Read More →
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
