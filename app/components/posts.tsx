import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="group flex flex-col gap-0.5 mb-5 last:mb-0 md:flex-row md:items-baseline md:gap-2 md:mb-4"
            href={`/blog/${post.slug}`}
          >
            <p className="w-36 shrink-0 text-sm text-neutral-500 dark:text-neutral-400 tabular-nums">
              {formatDate(post.metadata.publishedAt, false)}
            </p>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight underline decoration-transparent underline-offset-4 transition-colors duration-200 group-hover:decoration-neutral-400 dark:group-hover:decoration-neutral-500">
              {post.metadata.title}
            </p>
          </Link>
        ))}
    </div>
  )
}
