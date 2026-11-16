import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Blog posts by Andrés Romero.',
}

export default function Page() {
  return (
    <section className="stagger">
      <h1 className="mb-12 text-[clamp(2rem,10vw,9rem)]/[0.9] font-semibold tracking-[-0.055em] sm:mb-20">
        Blog Posts
      </h1>
      <BlogPosts />
    </section>
  )
}
