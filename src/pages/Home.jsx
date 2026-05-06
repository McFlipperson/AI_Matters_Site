import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { home } from '../data/content';

export default function Home() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const sections = sectionsRef.current.filter(Boolean);
    const timers = sections.map((el, i) =>
      setTimeout(() => el.classList.add('visible'), i * 100)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const addRef = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <>
      {/* ─── SECTION A: HERO ─── */}
      <section className="hero page-section" ref={addRef}>
        <p className="hero-location">{home.hero.location}</p>

        <h1 className="hero-headline">
          {home.hero.lines.map((line, i) => (
            <span
              key={i}
              className={`display${line.yellow ? ' line-yellow' : ''}`}
              style={{ display: 'block' }}
            >
              {line.text}
            </span>
          ))}
        </h1>

        <p className="hero-sub">
          {home.hero.sub.split('\n').map((line, i) => (
            <span key={i} style={{ display: 'block' }}>{line}</span>
          ))}
        </p>

        <div className="hero-ctas">
          <Link to={home.hero.ctaPrimary.path} className="btn-primary">
            {home.hero.ctaPrimary.label}
          </Link>
          <a href={home.hero.ctaSecondary.anchor} className="btn-secondary">
            {home.hero.ctaSecondary.label}
          </a>
        </div>
      </section>

{/* ─── SECTION B: PROOF ─── */}
      <section className="proof-section page-section" ref={addRef}>
        <span className="section-number">{home.proof.sectionNumber}</span>
        <h2 className="proof-title display">{home.proof.title}</h2>

        {home.proof.intro && (
          <div className="proof-intro">
            {home.proof.intro.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        )}

        <div className="proof-grid">
          {home.proof.blocks.map((block) => (
            <div className="proof-block" key={block.number}>
              <span className={`proof-number ${block.colour}`}>
                {block.number}
              </span>
              <p className="proof-label">{block.label}</p>
              <p className="proof-sub">{block.sub}</p>
            </div>
          ))}
        </div>

        {home.proof.outro && (
          <div className="proof-outro">
            {home.proof.outro.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        )}
      </section>

      {/* ─── SECTION C: HOW IT WORKS ─── */}
      <section
        className="how-section page-section"
        id="how-it-works"
        ref={addRef}
      >
        <span className="section-number">{home.howItWorks.sectionNumber}</span>
        <h2 className="how-title display">{home.howItWorks.title}</h2>

        <div className="how-steps">
          {home.howItWorks.steps.map((step) => (
            <div className="how-step" key={step.num}>
              <div className="how-step-number">{step.num}</div>
              <div className="how-step-title">{step.title}</div>
              <p className="how-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SECTION D: SERVICES TEASER ─── */}
      <section className="services-teaser page-section" ref={addRef}>
        <span className="section-number">{home.servicesTeaser.sectionNumber}</span>
        <h2 className="services-teaser-title display">{home.servicesTeaser.title}</h2>

        <div className="service-cards-grid">
          {home.servicesTeaser.cards.map((card) => (
            <div className="service-card" key={card.title}>
              <div className="service-card-title">{card.title}</div>
              <p className="service-card-desc">{card.desc}</p>
            </div>
          ))}
        </div>

        <Link to={home.servicesTeaser.cta.path} className="link-accent">
          {home.servicesTeaser.cta.label}
        </Link>
      </section>

      {/* ─── SECTION E: CASE STUDY TEASER ─── */}
      <section className="case-teaser page-section" ref={addRef}>
        {home.caseTeaser.comingSoon ? (
          <div className="case-teaser-coming-soon">
            <span className="section-number">{home.caseTeaser.sectionNumber}</span>
            <span className="case-teaser-label">{home.caseTeaser.label}</span>
            <p className="case-teaser-message">{home.caseTeaser.message}</p>
          </div>
        ) : (
          <>
            <div className="case-teaser-left">
              <span className="case-teaser-label">{home.caseTeaser.label}</span>
              <h2 className="case-teaser-client display">{home.caseTeaser.client}</h2>
              <span className="case-teaser-location">{home.caseTeaser.location}</span>
              <p className="case-teaser-result">
                {home.caseTeaser.result.split('\n').map((line, i) => (
                  <span key={i} style={{ display: 'block' }}>{line}</span>
                ))}
              </p>
              <Link to={home.caseTeaser.cta.path} className="link-accent">
                {home.caseTeaser.cta.label}
              </Link>
            </div>
            <div className="case-teaser-right">
              {home.caseTeaser.stats.map((stat) => (
                <div className="case-stat" key={stat.number}>
                  <span className={`case-stat-number ${stat.colour}`}>{stat.number}</span>
                  <span className="case-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </section>

      {/* ─── SECTION F: MANIFESTO ─── */}
      <section className="manifesto page-section" ref={addRef}>
        <h2 className="manifesto-headline display">
          {home.manifesto.lines.map((line, i) => (
            <span
              key={i}
              className={line.yellow ? 'line-yellow' : ''}
              style={{ display: 'block' }}
            >
              {line.text}
            </span>
          ))}
        </h2>
        <div className="manifesto-body">
          {home.manifesto.body.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      {/* ─── SECTION G: FOOTER CTA ─── */}
      <section className="footer-cta page-section" ref={addRef}>
        <h2 className="footer-cta-headline display">{home.footerCta.headline}</h2>
        <div className="footer-cta-buttons">
          <a
            href={home.footerCta.ctaPrimary.href}
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="20" height="20" aria-hidden="true" style={{ verticalAlign: 'middle', marginRight: '10px', flexShrink: 0 }}>
              <use href="/icons.svg#whatsapp-icon" />
            </svg>
            {home.footerCta.ctaPrimary.label}
          </a>
          <Link to={home.footerCta.ctaSecondary.path} className="btn-secondary-white">
            {home.footerCta.ctaSecondary.label}
          </Link>
        </div>
      </section>
    </>
  );
}
