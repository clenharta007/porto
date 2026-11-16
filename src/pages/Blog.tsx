import { useMemo, useState } from 'react';
import { getPosts } from '../lib/posts';
import PostList from '../components/PostList';
import { usePageTitle } from '../components/usePageTitle';

export default function Blog() {
  usePageTitle('Blog');
  const posts = getPosts();
  const [tag, setTag] = useState<string | null>(null);

  const tags = useMemo(() => [...new Set(posts.flatMap((p) => p.tags))].sort(), [posts]);
  const filtered = tag ? posts.filter((p) => p.tags.includes(tag)) : posts;

  return (
    <>
      <h1>Blog</h1>
      <p className="muted">Notes on software engineering, tools, and lessons learned.</p>

      {tags.length > 0 && (
        <div className="tags tag-filter">
          <button className={`tag ${tag === null ? 'tag-active' : ''}`} onClick={() => setTag(null)}>
            all
          </button>
          {tags.map((t) => (
            <button
              key={t}
              className={`tag ${tag === t ? 'tag-active' : ''}`}
              onClick={() => setTag(t)}
            >
              {t}
            </button>
          ))}
        </div>
      )}

      <div className="section">
        <PostList posts={filtered} />
      </div>
    </>
  );
}
