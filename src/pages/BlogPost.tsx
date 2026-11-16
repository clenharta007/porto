import { Link, useParams } from 'react-router-dom';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { formatDate, getPost } from '../lib/posts';
import { usePageTitle } from '../components/usePageTitle';
import NotFound from './NotFound';

export default function BlogPost() {
  const { slug = '' } = useParams();
  const post = getPost(slug);
  usePageTitle(post?.title ?? 'Not found');

  if (!post) return <NotFound />;

  return (
    <article className="post">
      <Link to="/blog" className="muted back-link">
        ← Back to blog
      </Link>
      <header className="post-header">
        <h1>{post.title}</h1>
        <div className="post-meta muted">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.tags.length > 0 && <span> · {post.tags.join(', ')}</span>}
        </div>
      </header>
      <div className="prose">
        <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
      </div>
    </article>
  );
}
