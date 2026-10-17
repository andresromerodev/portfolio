import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="stagger">
      <h1 className="mb-8 text-3xl font-semibold tracking-tighter sm:text-4xl">
        404 – Page Not Found
      </h1>
      <p className="mb-4 leading-7 text-neutral-800 dark:text-neutral-200">
        The page you are looking for does not exist.
      </p>
      <p>
        <Link href="/" className="link">
          Back to home
        </Link>
      </p>
    </section>
  )
}
