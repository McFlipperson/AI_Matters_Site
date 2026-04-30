import { Link } from 'react-router-dom';
import { footer } from '../data/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Col 1: Brand */}
        <div>
          <Link to="/" className="footer-logo" aria-label="AI Matters">
            <span className="logo-ai">{footer.brand.ai}</span>
            <span className="logo-matters">{footer.brand.matters}</span>
          </Link>
          <span className="footer-tagline">{footer.brand.tagline}</span>
          <span className="footer-location">{footer.brand.location}</span>
        </div>

        {/* Col 2: Navigation */}
        <div>
          <span className="footer-col-title">{footer.navTitle}</span>
          <nav className="footer-nav-links">
            {footer.navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Col 3: Contact */}
        <div>
          <span className="footer-col-title">{footer.contactTitle}</span>
          <a
            className="footer-contact-wa"
            href={footer.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {footer.whatsapp.display}
          </a>
          <a
            className="footer-contact-email"
            href={footer.email.href}
          >
            {footer.email.display}
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>{footer.legal}</span>
        <span>{footer.legalRight}</span>
      </div>
    </footer>
  );
}
