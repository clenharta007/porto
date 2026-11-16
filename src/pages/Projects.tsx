import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import { usePageTitle } from '../components/usePageTitle';

export default function Projects() {
  usePageTitle('Projects');

  return (
    <>
      <h1>Projects</h1>
      <p className="muted">A selection of things I've built.</p>
      <div className="grid section">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </>
  );
}
