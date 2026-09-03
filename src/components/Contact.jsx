function GitHubIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

// TODO: mailto: address
const SAY_HELLO_HREF = '#';

const SOCIAL_LINKS = [
  // TODO: GitHub profile URL
  { id: 'github', label: 'Jane He on GitHub', href: '#', Icon: GitHubIcon },
  // TODO: LinkedIn profile URL
  { id: 'linkedin', label: 'Jane He on LinkedIn', href: '#', Icon: LinkedInIcon },
];

function Contact() {
  return (
    <footer>
      <section id="contact" className="section" aria-labelledby="contact-heading">
        <h2 id="contact-heading">Get in touch</h2>
        <p className="contact-copy">
          Always happy to talk about code, internships, or cats.
        </p>
        <a className="btn" href={SAY_HELLO_HREF}>
          Say hello
        </a>
        <div className="social-row">
          {SOCIAL_LINKS.map(({ id, label, href, Icon }) => (
            <a key={id} className="social-link" href={href} aria-label={label}>
              <Icon />
            </a>
          ))}
        </div>
      </section>
    </footer>
  );
}

export default Contact;
