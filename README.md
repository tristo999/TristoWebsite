# tristanfitzwater.com

Personal site. Next.js (static export) → GitHub Pages.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Verify before pushing

```bash
npm run check    # typecheck + production build
```

## Deploy

Push to `main`. `.github/workflows/deploy.yml` typechecks, builds, and publishes
`out/` to GitHub Pages. There is no manual deploy step.

> The 2020 version deployed by running `gatsby build && gh-pages -d public`
> locally, which wiped `CNAME` from the `gh-pages` branch every single time and
> unset the custom domain. `public/CNAME` is now part of the build output, so
> that can't happen again.

## Writing content

All content lives in `/content` as JSON. Nothing in `src/` is edited to change
what the site says.

| File                      | Holds                                            |
| ------------------------- | ------------------------------------------------ |
| `content/site.json`       | Name, role, tagline, email, socials, résumé path |
| `content/experience.json` | Roles, dates, highlights                         |
| `content/projects.json`   | Projects, including full write-up sections       |

`src/lib/content.ts` is the seam: it validates every file against a Zod schema
at build time and is the only module that reads JSON. Bad content fails the
build with the offending field named, rather than rendering an empty section.
Swapping local JSON for a CMS or an API later means editing that one file.

Any string containing `TODO` prints a warning during build. It never fails the
build — a half-written site you can see beats a build you can't run.

### Adding a project

Append to `content/projects.json`. `slug` becomes the URL and must be
kebab-case and unique. `sections[].body` is an array of paragraphs. The page at
`/projects/<slug>/` is generated automatically, including its sitemap entry.

### Adding a résumé

Drop the PDF at `public/resume.pdf` and set `"resume": "/resume.pdf"` in
`content/site.json`. While it's `null`, every résumé link hides itself rather
than pointing at a dead URL.

## Going dynamic later

Delete `output: "export"` from `next.config.ts` and deploy somewhere with
compute (Vercel, Cloudflare, Netlify). Route handlers, server actions, auth and
a database all switch on; nothing else in this codebase changes. Until then it's
static files — no server, no secrets, no runtime cost.

## Stack

Next.js 16 · React 19 · TypeScript · Zod · plain CSS with custom properties.

No CSS framework and no UI library, deliberately: the content is portable text
and the styling is standard CSS, so the framework stays a replaceable part. The
2020 version of this site died because it was welded to a build tool that went
end-of-life.
