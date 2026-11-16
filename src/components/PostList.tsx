import { Link } from 'react-router-dom';
import { formatDate, type Post } from '../lib/posts';

export default function PostList({ posts }: { posts: Post[] }) {
  if (posts.length === 0) return <p className="muted">No posts yet.</p>;

  return (
    <ul className="post-list">
      {posts.map((p) => (
        <li key={p.slug} className="post-item">
          <Link to={`/blog/${p.slug}`} className="post-link">
            <span className="post-title">
              {p.title}
              {p.draft && <span className="draft-badge">draft</span>}
            </span>
            <time className="muted" dateTime={p.date}>
              {formatDate(p.date)}
            </time>
          </Link>
          {p.summary && <p className="muted post-summary">{p.summary}</p>}
        </li>
      ))}
    </ul>
  );
}
