import { Link } from 'react-router-dom';
import { usePageTitle } from '../components/usePageTitle';

export default function NotFound() {
  usePageTitle('Not found');

  return (
    <section className="hero">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p className="muted">The page you're looking for doesn't exist.</p>
      <Link to="/" className="button">
        Go home
      </Link>
    </section>
  );
}
