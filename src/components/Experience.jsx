// TODO: real internship entries (roles, companies, dates, summaries)
const ENTRIES = [
  {
    id: 'entry-2025',
    title: '[Role] at [Company]',
    date: '[Summer 2025]',
    summary: '[One sentence on what you built or shipped there.]',
  },
  {
    id: 'entry-2024',
    title: '[Role] at [Company]',
    date: '[Summer 2024]',
    summary: '[One sentence on what you built or shipped there.]',
  },
  {
    id: 'entry-2023',
    title: '[Role] at [Company]',
    date: '[Summer 2023]',
    summary: '[One sentence on what you built or shipped there.]',
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="section"
      aria-labelledby="experience-heading"
    >
      <h2 id="experience-heading">Experience</h2>
      <ul className="experience-list">
        {ENTRIES.map(({ id, title, date, summary }) => (
          <li key={id} className="experience-item">
            <div className="experience-head">
              <h3>{title}</h3>
              <span className="experience-date">{date}</span>
            </div>
            <p className="experience-summary">{summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experience;
