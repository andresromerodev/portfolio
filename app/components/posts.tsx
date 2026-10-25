import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="enter-list -my-1">
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
            className="group -mx-2 flex flex-col gap-0.5 px-2 py-1 mb-3 last:mb-0 sm:flex-row sm:items-baseline sm:gap-2 sm:mb-2"
            href={`/blog/${post.slug}`}
          >
            <p className="w-36 shrink-0 text-sm text-neutral-500 dark:text-neutral-400">
              <time dateTime={post.metadata.publishedAt}>
                {formatDate(post.metadata.publishedAt, false)}
              </time>
            </p>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight underline decoration-transparent decoration-1 underline-offset-3 transition-colors duration-200 group-hover:decoration-neutral-400 group-focus-visible:decoration-neutral-400 dark:group-hover:decoration-neutral-500 dark:group-focus-visible:decoration-neutral-500">
              {post.metadata.title}
            </p>
          </Link>
        ))}
    </div>
  )
}
