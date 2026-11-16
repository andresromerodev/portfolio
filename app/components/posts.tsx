import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { ArrowIcon } from './arrow-icon'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="enter-list border-b border-neutral-200 dark:border-neutral-800">
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
            className="group relative grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-2 border-t border-neutral-200 py-6 sm:grid-cols-[12rem_1fr_auto] sm:py-8 lg:grid-cols-[16rem_1fr_auto] dark:border-neutral-800"
            href={`/blog/${post.slug}`}
          >
            <p className="col-span-2 font-mono text-xs tracking-normal text-neutral-500 uppercase sm:col-span-1 sm:text-sm dark:text-neutral-400">
              <time dateTime={post.metadata.publishedAt}>
                {formatDate(post.metadata.publishedAt, false)}
              </time>
            </p>
            <p className="text-2xl/tight font-medium tracking-tight text-neutral-900 transition-transform duration-300 ease-out group-hover:translate-x-2 group-focus-visible:translate-x-2 sm:text-3xl/tight lg:text-4xl/tight dark:text-neutral-100">
              {post.metadata.title}
            </p>
            <ArrowIcon
              size={14}
              className="rotate-45 self-center text-neutral-400 transition duration-300 ease-out group-hover:translate-x-1 group-hover:text-neutral-900 group-focus-visible:translate-x-1 group-focus-visible:text-neutral-900 sm:size-5 dark:text-neutral-600 dark:group-hover:text-neutral-100 dark:group-focus-visible:text-neutral-100"
            />
          </Link>
        ))}
    </div>
  )
}
