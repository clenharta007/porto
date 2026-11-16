# Portfolio & Blog

Personal portfolio and blog for a software engineer, built with React, TypeScript, and Vite.

## Getting started

```bash
npm install
npm run dev      # start dev server at http://localhost:5173
npm run build    # type-check and build to dist/
npm run preview  # preview the production build
```

## Adding content

| What                     | Where                                   |
| ------------------------ | --------------------------------------- |
| Name, bio, socials, skills, experience | `src/data/profile.ts`     |
| Projects                 | `src/data/projects.ts`                  |
| Blog posts               | `src/content/posts/*.md`                |
| Résumé / images          | `public/` (served from `/`)             |

### Blog posts

Create a Markdown file in `src/content/posts/`. The file name is the URL slug.

```md
---
title: My First Post
date: 2026-11-16
summary: Shown on the blog list.
tags: react, typescript
draft: false
---

Post content in GitHub-flavored Markdown.
```

Posts with `draft: true` show in `npm run dev` but are left out of production builds.

## Structure

```
src/
  components/   Layout, Header, Footer, cards, theme toggle
  pages/        Home, About, Projects, Blog, BlogPost, NotFound
  content/posts Markdown blog posts
  data/         Profile and project data
  lib/posts.ts  Markdown loader + frontmatter parser
  styles/       Global CSS (light/dark theme tokens)
```

## Deployment

This is a single-page app using client-side routing. When deploying to a static host,
configure a fallback so all routes serve `index.html` (e.g. a `_redirects` file on Netlify:
`/* /index.html 200`, or `rewrites` in `vercel.json`).
