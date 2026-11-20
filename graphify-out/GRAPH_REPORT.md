# Graph Report - porto  (2026-11-20)

## Corpus Check
- Corpus is ~2,664 words - fits in a single context window. You may not need a graph.

## Summary
- 122 nodes · 222 edges · 9 communities
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 8 edges (avg confidence: 0.89)
- Token cost: 87,707 input · 0 output

## Community Hubs (Navigation)
- NPM Dependencies
- Routing & Portfolio Pages
- TypeScript Config
- Blog Post Pipeline
- Content Authoring Docs
- Layout & Theme Shell
- Profile & About Data
- SPA Entry & Hosting
- Favicon Branding

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 14 edges
2. `usePageTitle()` - 13 edges
3. `react-router-dom` - 10 edges
4. `react` - 8 edges
5. `App()` - 7 edges
6. `profile` - 6 edges
7. `NotFound()` - 6 edges
8. `Blog Post Frontmatter Schema` - 6 edges
9. `Layout()` - 5 edges
10. `ProjectCard()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Post Frontmatter Fields Table` --semantically_similar_to--> `Blog Post Frontmatter Schema`  [INFERRED] [semantically similar]
  src/content/posts/hello-world.md → README.md
- `Hello World (sample blog post)` --implements--> `Blog Post Frontmatter Schema`  [INFERRED]
  src/content/posts/hello-world.md → README.md
- `Hello World (sample blog post)` --conceptually_related_to--> `File Name as URL Slug`  [INFERRED]
  src/content/posts/hello-world.md → README.md
- `App()` --calls--> `Layout()`  [EXTRACTED]
  src/App.tsx → src/components/Layout.tsx
- `Blog()` --calls--> `usePageTitle()`  [EXTRACTED]
  src/pages/Blog.tsx → src/components/usePageTitle.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Markdown Blog Post Pipeline** — readme_blog_post_frontmatter, readme_posts_loader, readme_draft_posts, readme_filename_url_slug, src_content_posts_hello_world_hello_world [INFERRED 0.85]
- **SPA Bootstrap and Hosting** — index_html_entry, index_root_mount, index_main_tsx_script, readme_spa_fallback_routing [INFERRED 0.85]

## Communities (9 total, 0 thin omitted)

### Community 0 - "NPM Dependencies"
Cohesion: 0.09
Nodes (28): dependencies, react@^19.3.1, react-dom@^19.3.1, react-markdown@^10.1.0, react-router-dom@^7.18.5, remark-gfm@^4.0.1, devDependencies, @types/react@^19.3.0 (+20 more)

### Community 1 - "Routing & Portfolio Pages"
Cohesion: 0.29
Nodes (10): react-router-dom, App(), ProjectCard(), usePageTitle(), Project, projects, About(), Home() (+2 more)

### Community 2 - "TypeScript Config"
Cohesion: 0.12
Nodes (15): compilerOptions, isolatedModules, jsx, lib, module, moduleResolution, noEmit, noFallthroughCasesInSwitch (+7 more)

### Community 3 - "Blog Post Pipeline"
Cohesion: 0.29
Nodes (10): PostList(), allPosts, files, formatDate(), getPost(), getPosts(), parseFrontmatter(), Post (+2 more)

### Community 4 - "Content Authoring Docs"
Cohesion: 0.21
Nodes (10): Blog Post Frontmatter Schema, Content Locations Map, Light/Dark Theme Tokens, Markdown Loader + Frontmatter Parser (lib/posts.ts), Profile Data (src/data/profile.ts), Project Structure (components, pages, content, data, lib, styles), Projects Data (src/data/projects.ts), Post Frontmatter Fields Table (+2 more)

### Community 5 - "Layout & Theme Shell"
Cohesion: 0.30
Nodes (8): react, Footer(), Header(), links, Layout(), initialTheme(), Theme, ThemeToggle()

### Community 6 - "Profile & About Data"
Cohesion: 0.36
Nodes (6): education, Engagement, Experience, experience, profile, skills

### Community 7 - "SPA Entry & Hosting"
Cohesion: 0.33
Nodes (6): index.html SPA Entry Page, Module Script /src/main.tsx, #root Mount Point, npm Scripts (dev, build, preview), Portfolio & Blog, React + TypeScript + Vite Stack

### Community 8 - "Favicon Branding"
Cohesion: 0.67
Nodes (3): Brand Color #2563eb (blue), </> Code Brackets Glyph, Favicon (blue code-bracket icon)

## Knowledge Gaps
- **7 isolated node(s):** `npm Scripts (dev, build, preview)`, `Profile Data (src/data/profile.ts)`, `Projects Data (src/data/projects.ts)`, `Light/Dark Theme Tokens`, `GitHub-Flavored Markdown Support` (+2 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 35 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react-router-dom` connect `Routing & Portfolio Pages` to `NPM Dependencies`, `Blog Post Pipeline`, `Layout & Theme Shell`?**
  _High betweenness centrality (0.151) - this node is a cross-community bridge._
- **What connects `npm Scripts (dev, build, preview)`, `Profile Data (src/data/profile.ts)`, `Projects Data (src/data/projects.ts)` to the rest of the system?**
  _7 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `NPM Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.08735632183908046 - nodes in this community are weakly interconnected._
- **Why does `react` connect `Layout & Theme Shell` to `NPM Dependencies`, `Routing & Portfolio Pages`, `Blog Post Pipeline`, `Profile & About Data`?**
  _High betweenness centrality (0.112) - this node is a cross-community bridge._
- **Should `TypeScript Config` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Why does `Module Script /src/main.tsx` connect `SPA Entry & Hosting` to `Routing & Portfolio Pages`?**
  _High betweenness centrality (0.069) - this node is a cross-community bridge._