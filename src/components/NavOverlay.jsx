import { NavLink } from 'react-router-dom';
import { nav } from '../data/content';

export default function NavOverlay({ onClose }) {
  return (
    <div className="nav-overlay" role="dialog" aria-modal="true" aria-label="Navigation menu">
      <button
        className="nav-overlay-close"
        onClick={onClose}
        aria-label="Close menu"
      >
        ✕ CLOSE
      </button>

      <nav className="nav-overlay-links">
        {nav.links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={onClose}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
