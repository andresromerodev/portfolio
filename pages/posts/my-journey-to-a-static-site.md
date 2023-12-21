---
title: From Full-Stack Overload to Streamlined Simplicity - My Journey to a Static Site
date: 2023/5/03
description: Why I Abandoned My Full-Stack Website and Opted for a Backend-Free Solution.
tag: JavaScript
author: You
---

import Image from 'next/image'

# From Full-Stack Overload to Streamlined Simplicity - My Journey to a Static Site

I'm excited to be diving into the world of blogging with my first post, and I've decided to share my thoughts on my website, or rather my second website and why I decided to move away from the old one. I hope you'll find my content informative and engaging.

## What Led Me to Abandon My First Website

Since starting my career in tech, I've been fascinated by system design - specifically, what goes into creating scalable, maintainable, and efficient applications. I'm particularly interested in building apps that adhere to the [12-factor app](https://12factor.net) principles, as I believe they offer a solid framework for developing high-quality software.

In late 2019, I already had some coding experience under my belt from my time at IBM, where I had deployed a few apps. However, I was eager to expand my knowledge and delve into the world of DNS, environments, Docker, caching and more. 
So I decided to create a web protfolio and incorporate these technlogies, I knew this might seem like overkill for portfolio, but I relished the challenge as an opportunity to learn.

I began the project by implementing a strategy to decouple the backend and frontend components into separate applications, with various services. The final design would result in a system diagram that looks something like this:

<Image
  src="/images/oldsitearchitecture.jpg"
  alt="Photo"
  width={850}
  height={500}
  priority
  className="next-image"
/>

I built the backend using NodeJS and Typescript, and one thing I'm particularly proud of is the modular organization I created with ExpressJS. Express is a highly versatile and un-opinionated framework for building APIs, and my modular approach allowed for greater flexibility and maintainability. However, if I were to build something similar today, I might consider using NestJS instead, which provides similar functionality out of the box and could save me some time.

Each service in the backend had a distinct purpose:

- **Email Service**: responsible for handling emails generated from the contact form on the website, and it interacted directly with SendGrid via their SDK, if you don't know SendGrid is a cloud-based email delivery service that simplifies the process of sending and managing emails.

***Sending emails through the Email service 👇***
```js
sendEmail = async (req: Request, res: Response) => {
    try {
        const email: Email = this.service.createEmailContent(req.body);
        if (email != null) {
            const emailResponse = await this.service.sendEmail(email);
            return res.status(HttpStatus.OK).json(emailResponse);
        }
        return res.status(HttpStatus.BAD_REQUEST).end();
    } catch (error) {
        return res.status(error.code || HttpStatus.INTERNAL_SERVER_ERROR).json({
            error: error.message,
        });
    }
}
```

- **Repository Service**: provide a paginated and sortable list of all my GitHub projects, which could be displayed on the website.

***Retrieving GitHub repository information using the Repository service 👇***
```js
searchPublicRepos = async (req: Request, res: Response) => {
    try {
        const { text, page, pageSize } = req.query;
        const searchReq: IRepositorySearchRequest = {
            text: String(text),
            page: Number(page) || 1,
            pageSize: Number(pageSize) || 10,
            visibility: Visibility.Public,
        };

        const count: Number = await this.service.getPublicRepositoriesCount();
        const totalPages: Number = Math.ceil(Number(count) / Number(pageSize));
        const repositories: Repository[] = await this.service.searchPublicRepositories(searchReq);
        const paginationResponse: any = { repositories, page: Number(page), pages: totalPages };

        return res
            .status(HttpStatus.OK)
            .json(paginationResponse)
            .locals.cache(paginationResponse);
    } catch (error) {
        return res.status(error.code || HttpStatus.INTERNAL_SERVER_ERROR).json({
            error: error.message,
        });
    }
}
```

- **Badge Service**: this one was particularly interesting. I got a couple of [Credly](https://info.credly.com/) badges over time, including those for my AWS certifications, and I wanted to display them on my website in near real-time after getting them without manual intervention. Unfortunately, Credly did not offer an API for this, so I opted to scrape their website instead. Thankfully, their site was static, and their naming conventions for UI identifiers were consistent, which allowed me to scrape their data.

***Querying the badge service for all currently valid Credly badges 👇***
```js
getAllNonExpiredBadges = async (req: Request, res: Response) => {
      try {
          const badges: Badge[] = await this.service.getAllNonExpiredBadges();
          return res
              .status(HttpStatus.OK)
              .json(badges)
              .locals.cache(badges);
      } catch (error) {
          return res.status(error.code || HttpStatus.INTERNAL_SERVER_ERROR).json({
              error: error.message,
          });
      }
  }
```

And if you are curious on how you can scrap your Credly badges here’s how you can do so with Cheerio in NodeJS:

```js
class BadgeService {
    protected _$: any = null;
    protected configService: ConfigService = new ConfigService();

    public async getAllBadges(): Promise<Badge[]> {
        const badges: Badge[] = [];

        const profile = this.configService.getAcclaimProfile();
        const response: Response = await fetch(profile.url);

        this._$ = cheerio.load(await response.text());

        this._$(HtmlElement.EarnedBadge).each((i: any, badge: any) => {
            const { title, href } = badge.attribs;
            const id = href.split('/')[2];

            const image = this._$(badge).find('div img').attr('src');
            const information = `${profile.badges}/${id}`;

            badges.push({
                id, title, image, information,
            });
        });

        return badges;
    }

    public async getAllNonExpiredBadges(): Promise<Badge[]> {
        const badges: Badge[] = await this.getAllBadges();
        const nonExpired: Badge[] = [];
        for (const badge of badges) {
            const informationReponse: Response = await fetch(badge.information);
            const informationHtml: string = await informationReponse.text();
            const informationUI = cheerio.load(informationHtml);

            const expiredText = informationUI(HtmlElement.BadgeExpire).text();

            if (!expiredText.toLowerCase().includes('expired')) {
                nonExpired.push(badge);
            }
        }
        return nonExpired;
    }
}
```

- ***Cache Service***: Of course, repeatedly scraping data can be resource-intensive, which is where the caching service came into play. I deployed a Redis database and implemented an Express middleware to cache the data, primarily for Credly badges but also for certain endpoints in the Repository service.

```js
class CacheService {
    private static _instance: CacheService;

    private client: RedisClient;
    private configService: ConfigService = new ConfigService();

    private constructor() {
        this.client = createClient(this.configService.getRedisCredentias());
        this.client.on('ready', () => Logger.info('Redis: Connection success!'));
        this.client.on('error', (error) => Logger.error(`Redis: ${JSON.stringify(error)}`));
    }

    public static get Instance(): CacheService {
        return this._instance || (this._instance = new this());
    }

    public set(key: string, value: any): void {
        this.client.setex(key, 1800, JSON.stringify(value));
    }

    public get(key: string, callback: any) {
        return this.client.get(key, callback);
    }
}

const cacheMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const key = getKeyFromRequest(req);
    CacheService.get(key, (err: Error, data: any) => {
        if (data && !err) {
            Logger.info(`[Redis]: Requested data ${key} found in cache`);
            res.status(HttpStatus.OK).json(JSON.parse(data));
        } else {
            Logger.info(`[Redis]: Not found, saving ${key} to cache`);
            res.locals.cache = (content: any) => CacheService.set(key, content);
            next();
        }
    });
};
```

I won't go into too much detail about the frontend, as it was a relatively simple React app with some customized components. It utilized http data fetching to display information from the backend, and one of the more interesting features was a custom table with built-in pagination that I created to list my GitHub projects.

Initially, I deployed the website using Docker on a Raspberry Pi 4 in my home office. However, I eventually moved to Heroku until they discontinued their free tier services, which prompted me to switch everything over to Render.com (which was a bit of a hassle).

Despite all of the great features and effort put into the project, I ultimately decided to discontinue it. Maintaining the website was too much overhead, and adding new features - such as a blog (which I never got around to) - would require spinning up a new service, connecting it to the frontend, and building custom components to display the data. With my limited time and resources, I realized it was time to say goodbye to this project that had started as a fun experiment.

By the way, you can find the code for my old website on Github: [Backend](https://github.com/andresromeroh/legacy-web-portfolio-node) and [Frontend](https://github.com/andresromeroh/legacy-web-portfolio-react). 

## Using NextJS to Build My New Static Site

After some consideration, I realized that what I really wanted was a simple website that would allow me to focus on content creation, rather than spending countless hours on engineering a web application. At this point, I simply wanted to share my experiences, and for that, a static site was the perfect solution.

I knew that NextJS would be my best bet, given its capabilities as a full-stack meta framework and its powerful static site generation features. Luckily, I found a template that I could build upon, so I started by clearing out the existing content, deploying it to the Vercel cloud (which was incredibly easy), redirecting my domain names, and adding a few of my own pages. Best of all, it came with a built-in blog, which is how you're reading my first post right now! Whenever I have something new to share, I can simply write it up, submit it to the repository, and it becomes available immediately. How cool is that?

You can explore the code for my new website on https://github.com/andresromeroh/portfolio.

Overall, the entire process of building this website and the old one was a true learning experience from start to finish, and I have no regrets about the time and effort I put into it. I hope you've enjoyed the post, and I look forward to sharing more with you in the future. Thanks for reading!
