# Andresromero.dev

This portfolio is built with **Next.js** and [Nextra](https://nextra.vercel.app/). It allows to write Markdown and focus on _content_. This project includes:

- Automatically configured to handle Markdown/MDX
- Generates an RSS feed based on your posts
- Easily categorize posts with tags
- Fast, optimized web font loading

## Configuration

1. Update your name in `theme.config.js` or change the footer.
1. Update your name and site URL for the RSS feed in `scripts/gen-rss.js`.
1. Update the meta tags in `pages/_document.js`.
1. Update the posts inside `pages/posts/*.md` with your own content.

## Deployment

Deploy using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/nextjs-portfolio-starter&project-name=portfolio&repository-name=portfolio)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example blog my-blog
# or
yarn create next-app --example blog my-blog
```
