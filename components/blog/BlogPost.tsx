export default function BlogPost({ post }: { post: any }) {
  return (
    <article className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-500 mt-1">{new Date(post.publishedAt).toDateString()}</p>
      {post.mainImage && (
        <img src={post.mainImage} alt="Post" className="my-6 rounded-lg w-full" />
      )}
      <div className="prose max-w-none">
        {/* Assuming you serialize block content with PortableText */}
        {/* Add PortableText renderer here if needed */}
        {JSON.stringify(post.body)}
      </div>
    </article>
  )
}
