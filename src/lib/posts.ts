// Loads blog posts from src/content/posts/*.md at build time.
// Each file starts with a frontmatter block:
//
// ---
// title: My Post
// date: 2026-01-31
// summary: One-line summary
// tags: react, typescript
// draft: false
// ---

export type Post = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  draft: boolean;
  content: string;
};

const files = import.meta.glob('../content/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim().replace(/^["']|["']$/g, '');
    if (key) data[key] = value;
  }
  return { data, content: match[2] };
}

const allPosts: Post[] = Object.entries(files)
  .map(([path, raw]) => {
    const slug = path.split('/').pop()!.replace(/\.md$/, '');
    const { data, content } = parseFrontmatter(raw);
    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? '',
      summary: data.summary ?? '',
      tags: data.tags ? data.tags.split(',').map((t) => t.trim()).filter(Boolean) : [],
      draft: data.draft === 'true',
      content,
    };
  })
  .filter((p) => import.meta.env.DEV || !p.draft)
  .sort((a, b) => b.date.localeCompare(a.date));

export function getPosts(): Post[] {
  return allPosts;
}

export function getPost(slug: string): Post | undefined {
  return allPosts.find((p) => p.slug === slug);
}

export function formatDate(date: string): string {
  if (!date) return '';
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
