// React and JavaScript are real; the rest are placeholders.
// TODO: real tech-stack items
const STACK = ['React', 'JavaScript', '[Language]', '[Framework]', '[Tool]', '[Tool]'];

function TechStack() {
  return (
    <section className="section section--sky" aria-labelledby="techstack-heading">
      <h2 id="techstack-heading">Tech stack</h2>
      <ul className="stack-chips">
        {STACK.map((item, index) => (
          <li key={index} className="stack-chip">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TechStack;
