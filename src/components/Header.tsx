import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { profile } from '../data/profile';
import ThemeToggle from './ThemeToggle';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  // { to: '/blog', label: 'Blog' }, // Blog hidden for now
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          {profile.name}
        </Link>

        <button
          className="menu-button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          ☰
        </button>

        <nav className={`nav ${open ? 'nav-open' : ''}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
