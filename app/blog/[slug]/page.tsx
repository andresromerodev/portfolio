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
      <h1 className="text-2xl/[1.2] font-semibold tracking-tighter sm:text-3xl/[1.2]">
        {post.metadata.title}
      </h1>
      <p className="mt-3 mb-10 text-sm text-neutral-500 dark:text-neutral-400">
        <time dateTime={post.metadata.publishedAt}>
          {formatDate(post.metadata.publishedAt)}
        </time>
      </p>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
      <p className="mt-12 text-sm">
        <Link
          href="/blog"
          className="group -m-1 inline-flex items-center gap-2 p-1 text-neutral-500 transition-colors duration-200 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:-translate-x-px group-focus-visible:-translate-x-px"
          >
            ←
          </span>
          All posts
        </Link>
      </p>
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
