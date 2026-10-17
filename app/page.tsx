import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section className="stagger">
      <h1 className="mb-8 text-3xl font-semibold tracking-tighter sm:text-4xl">
        <span aria-hidden="true" className="text-neutral-400 dark:text-neutral-600">
          {"</>"}
        </span>{' '}
        Andresromero.dev
      </h1>
      <div className="space-y-5 leading-7 text-neutral-800 dark:text-neutral-200">
        <p>Hey, I’m Andrés! a Software Engineer from Costa Rica.</p>
        <p>
          I work at <b className="font-semibold text-neutral-900 dark:text-neutral-100">Skymap Games</b> where I’m part of the Engineering team building the backend and infrastructure for an unannounced AAA game.
        </p>
        <p>
          I’m into clean code, AI, distributed systems, and building things that actually work at scale. From backend to full-stack problem-solving, I like turning complex problems into real world solutions.
        </p>
        <p>
          This blog is where I share what I’ve learned, what I’m working on, and sometimes just what I find interesting in tech and games.
          Take a look around, and if something sparks an idea, let’s connect.
        </p>
      </div>
      <hr className="my-12" />
      <h2 className="mb-6 text-2xl font-semibold tracking-tighter">Blog Posts</h2>
      <BlogPosts />
    </section>
  )
}
