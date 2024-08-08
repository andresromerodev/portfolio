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
        I currently work at <a href='https://www.lunchboxentertainment.com'target='_blank'><u>Lunchbox</u></a> where I'm part of the Game Services Team building the future of competitive gaming with <a href='https://store.steampowered.com/app/2790090/Sirocco'target='_blank'><u>Sirocco</u></a> a revolutionary new MOBA.
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
