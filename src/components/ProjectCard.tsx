import type { Project } from '../data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card">
      <h3 className="card-title">{project.title}</h3>
      {project.context && <p className="card-context muted">{project.context}</p>}
      <p className="card-text">{project.description}</p>
      <ul className="tags">
        {project.tags.map((t) => (
          <li key={t} className="tag">
            {t}
          </li>
        ))}
      </ul>
      {(project.repoUrl || project.liveUrl) && (
      <div className="card-links">
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noreferrer">
            Code →
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            Live →
          </a>
        )}
      </div>
      )}
    </article>
  );
}
