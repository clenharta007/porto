import { Link } from 'react-router-dom';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import { usePageTitle } from '../components/usePageTitle';

export default function Home() {
  usePageTitle();
  const featured = projects.filter((p) => p.featured).slice(0, 4);
  return (
    <>
      <section className="hero">
        <p className="eyebrow">{profile.role}</p>
        <h1 className="hero-title">Hi, I'm {profile.name}.</h1>
        <p className="hero-text">{profile.tagline}</p>
        <div className="hero-actions">
          <Link to="/projects" className="button">
            View projects
          </Link>
          <a href={`mailto:${profile.email}`} className="button button-outline">
            Get in touch
          </a>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Featured projects</h2>
          <Link to="/projects">All projects →</Link>
        </div>
        <div className="grid">
          {featured.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>
    </>
  );
}
