import Link from 'next/link'

export const metadata = {
  title: 'Page Not Found',
}

export default function NotFound() {
  return (
    <section className="stagger">
      <h1 className="mb-8 text-3xl font-semibold tracking-tighter sm:text-4xl">
        404 – Page Not Found
      </h1>
      <p className="mb-5 leading-7 text-neutral-800 dark:text-neutral-200">
        The page you’re looking for doesn’t exist.
      </p>
      <p>
        <Link href="/" className="link">
          Back to home
        </Link>
      </p>
    </section>
  )
}
