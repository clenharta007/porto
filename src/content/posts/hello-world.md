---
title: Hello World
date: 2026-11-16
summary: A sample post showing how blog posts are written. Replace or delete it.
tags: meta
draft: false
---

This is a sample post. Add new posts by creating Markdown files in `src/content/posts/`.
The file name becomes the URL slug (`hello-world.md` → `/blog/hello-world`).

## Formatting

Posts support **GitHub-flavored Markdown**: lists, tables, links, and code blocks.

```ts
function greet(name: string) {
  return `Hello, ${name}!`;
}
```

| Field   | Purpose                          |
| ------- | -------------------------------- |
| title   | Post title                       |
| date    | Publish date (YYYY-MM-DD)        |
| summary | Shown on the blog list           |
| tags    | Comma-separated                  |
| draft   | `true` hides it in production    |
