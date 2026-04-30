import { Link, NavLink } from 'react-router-dom';
import { nav } from '../data/content';

export default function Nav({ scrolled, onOpenMenu }) {
  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <Link to="/" className="nav-logo" aria-label="AI Matters — Home">
        <span className="logo-ai">{nav.logo.ai}</span>
        <span className="logo-matters">{nav.logo.matters}</span>
      </Link>

      <div className="nav-links" role="list">
        {nav.links.map((link, i) => (
          <span key={link.path} role="listitem">
            {i > 0 && <span className="nav-sep" aria-hidden="true">·</span>}
            <NavLink
              to={link.path}
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              {link.label}
            </NavLink>
          </span>
        ))}
      </div>

      <button
        className="nav-hamburger"
        onClick={onOpenMenu}
        aria-label="Open menu"
        aria-expanded="false"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
    </nav>
  );
}
