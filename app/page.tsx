import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        {"</>"} Andresromero.dev
      </h1>
      <p className="mb-4">
        Hey, I'm Andrés! I'm a Software Engineer from Costa Rica.
        <br />
        <br />
        I currently work at <u>Skymap Games</u> where I'm part of the Server Engineering team co-developing an exciting unannounced AAA game title.
        <br />
        <br />
        From coding to leading, I've got the full stack covered - take a look at my <a href='https://andresromerodev.notion.site/andresromerodev/Andr-s-Romero-1c7e5808a418431b8df0dd4fa63c25ba'target='_blank'><u>Resume</u></a> and let's discuss that idea you have in mind!
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
