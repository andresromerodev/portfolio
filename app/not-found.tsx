import Link from 'next/link'

export const metadata = {
  title: 'Page Not Found',
}

export default function NotFound() {
  return (
    <section className="stagger">
      <h1 className="mb-10 text-[clamp(2.75rem,8vw,7rem)]/[0.95] font-semibold tracking-[-0.05em]">
        404 – Page Not Found
      </h1>
      <p className="mb-6 text-xl/8 text-neutral-600 sm:text-2xl/9 dark:text-neutral-400">
        The page you’re looking for doesn’t exist.
      </p>
      <p className="text-lg sm:text-xl">
        <Link href="/" className="link">
          Back to home
        </Link>
      </p>
    </section>
  )
}
