import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      siteName: 'Andresromero.dev',
      locale: 'en_US',
      images: [
        image
          ? { url: ogImage }
          : { url: ogImage, width: 1200, height: 630, alt: title },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@andresromerodev',
      images: [ogImage],
    },
  }
}

export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section className="stagger">
      <h1 className="max-w-6xl text-[clamp(2.5rem,7.5vw,7rem)]/[0.95] font-semibold tracking-[-0.05em]">
        {post.metadata.title}
      </h1>
      <div className="mt-12 grid gap-x-6 gap-y-10 border-t border-neutral-200 pt-6 sm:mt-20 sm:grid-cols-[12rem_1fr] sm:pt-8 lg:grid-cols-[16rem_1fr] dark:border-neutral-800">
        <p className="font-mono text-xs text-neutral-500 uppercase sm:sticky sm:top-8 sm:self-start sm:text-sm dark:text-neutral-400">
          <time dateTime={post.metadata.publishedAt}>
            {formatDate(post.metadata.publishedAt)}
          </time>
        </p>
        <div className="min-w-0 max-w-3xl">
          <article className="prose">
            <CustomMDX source={post.content} />
          </article>
          <p className="mt-16 border-t border-neutral-200 pt-8 text-base sm:text-lg dark:border-neutral-800">
            <Link
              href="/blog"
              className="group -m-1 inline-flex items-center gap-3 p-1 font-medium tracking-tight text-neutral-600 transition-colors duration-200 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              <span
                aria-hidden="true"
                className="transition-transform duration-300 ease-out group-hover:-translate-x-1 group-focus-visible:-translate-x-1"
              >
                ←
              </span>
              All posts
            </Link>
          </p>
        </div>
      </div>
      {/* Last child, so it doesn't take a slot in the stagger */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: `${baseUrl}${
              post.metadata.image ??
              `/og?title=${encodeURIComponent(post.metadata.title)}`
            }`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Andrés Romero',
              url: baseUrl,
            },
          }),
        }}
      />
    </section>
  )
}
