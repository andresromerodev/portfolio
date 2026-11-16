import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section className="stagger">
      <h1 className="text-[clamp(2rem,10vw,9rem)]/[0.9] font-semibold tracking-[-0.055em]">
        <span
          aria-hidden="true"
          className="mb-2 block text-[0.4em] font-medium tracking-tight text-neutral-400 select-none sm:mb-5 dark:text-neutral-600"
        >
          {'</>'}
        </span>
        Andresromero.dev
      </h1>
      <p className="mt-10 max-w-4xl text-3xl/tight font-medium tracking-tight text-neutral-900 sm:mt-14 sm:text-4xl/tight lg:text-5xl/[1.1] dark:text-neutral-100">
        Hey, I’m Andrés, a software engineer from Costa Rica.
      </p>
      <div className="mt-14 grid gap-8 text-lg/8 text-neutral-600 sm:mt-20 md:grid-cols-3 md:gap-10 lg:gap-14 dark:text-neutral-400">
        <p className="border-t border-neutral-900 pt-5 dark:border-neutral-100">
          I work at <b className="font-semibold text-neutral-900 dark:text-neutral-100">Skymap Games</b>, where I’m part of the engineering team building the backend and infrastructure for an unannounced AAA game.
        </p>
        <p className="border-t border-neutral-200 pt-5 dark:border-neutral-800">
          I’m into clean code, AI, distributed systems, and building things that actually work at scale. From backend to full-stack problem-solving, I like turning complex problems into real-world solutions.
        </p>
        <p className="border-t border-neutral-200 pt-5 dark:border-neutral-800">
          This blog is where I share what I’ve learned, what I’m working on, and sometimes just what I find interesting in tech and games.
          Take a look around, and if something sparks an idea, let’s connect.
        </p>
      </div>
      <h2 className="mt-24 mb-8 text-4xl/none font-semibold tracking-tighter sm:mt-36 sm:mb-12 sm:text-6xl/none lg:text-7xl/none">
        Blog Posts
      </h2>
      <BlogPosts />
    </section>
  )
}
