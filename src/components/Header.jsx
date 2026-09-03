import PawIcon from './PawIcon';

const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

function Header() {
  return (
    <header className="site-header">
      <div className="brand">
        <PawIcon size={22} />
        <span className="brand-name">Jane He</span>
      </div>
      <nav className="site-nav" aria-label="Primary">
        {NAV_LINKS.map(({ label, href }) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
