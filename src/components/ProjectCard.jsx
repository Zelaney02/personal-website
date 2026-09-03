import PawIcon from './PawIcon';

function ProjectCard({ title, description, tech, href }) {
  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p className="project-card-description">{description}</p>
      <ul className="chip-row">
        {tech.map((item, index) => (
          <li key={index} className="tech-chip">
            {item}
          </li>
        ))}
      </ul>
      {/* TODO: project GitHub URL */}
      <a className="card-link" href={href}>
        <PawIcon size={12} />
        View on GitHub
      </a>
    </article>
  );
}

export default ProjectCard;
