import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        {"</>"} Andresromero.dev
      </h1>
      <p className="mb-4">
        Hey, I'm Andrés! a Software Engineer from Costa Rica.
        <br />
        <br />
        I work at <u>Skymap Games</u> where I’m part of the Server Engineering team building the backend for an unannounced AAA game (yes, it’s as cool as it sounds).
        <br />
        <br />
        I’m into clean code, AI, distributed systems, and building things that actually work at scale. From backend logic to full-stack problem-solving, I like turning complex problems into real world solutions.
        <br />
        <br />
        This blog is where I share what I’ve learned, what I’m working on, and sometimes just what I find interesting in tech and games.
        Take a look around, and if something sparks an idea, let’s connect.
       </p>
      <hr />

      <h2 className="my-8 text-2xl font-semibold tracking-tighter">Blog Posts</h2>
      <div className="my-8">
        <BlogPosts />
      </div>
      <hr />
    </section>
  )
}
