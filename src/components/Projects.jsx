import ProjectCard from './ProjectCard';

// TODO: real project data (names, descriptions, tech, GitHub URLs)
const PROJECTS = [
  {
    id: 'project-1',
    title: '[Project name]',
    description: '[One sentence on what it does and why you built it.]',
    tech: ['[Tech]', '[Tech]'],
    href: '#',
  },
  {
    id: 'project-2',
    title: '[Project name]',
    description: '[One sentence on what it does and why you built it.]',
    tech: ['[Tech]', '[Tech]'],
    href: '#',
  },
  {
    id: 'project-3',
    title: '[Project name]',
    description: '[One sentence on what it does and why you built it.]',
    tech: ['[Tech]', '[Tech]'],
    href: '#',
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="section section--surface"
      aria-labelledby="projects-heading"
    >
      <h2 id="projects-heading">Projects</h2>
      <ul className="project-grid">
        {PROJECTS.map(({ id, ...project }) => (
          <li key={id}>
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
