import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Blog posts by Andres Romero.',
}

export default function Page() {
  return (
    <section className="stagger">
      <h1 className="mb-8 text-3xl font-semibold tracking-tighter sm:text-4xl">Blog Posts</h1>
      <BlogPosts />
    </section>
  )
}
