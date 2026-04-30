import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/content';

export default function Services() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const els = sectionsRef.current.filter(Boolean);
    const timers = els.map((el, i) =>
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
      {/* PAGE BANNER */}
      <div className="page-banner page-section" ref={addRef}>
        <h1>
          <span className="display" style={{ display: 'block', color: 'var(--white)' }}>
            {services.banner.line1}
          </span>
          <span className="display" style={{ display: 'block', color: 'var(--yellow)' }}>
            {services.banner.line2}
          </span>
        </h1>
      </div>

      {/* INTRO */}
      <div className="services-intro page-section" ref={addRef} style={{ paddingBottom: '48px' }}>
        <p>{services.intro}</p>
      </div>

      {/* SECTION 01 — SETUP */}
      <section className="services-section page-section" ref={addRef}>
        <span className="section-number">{services.website.sectionNum}</span>
        <h2 className="services-section-title display">{services.website.title}</h2>

        {services.website.intro && (
          <div className="services-explanation">
            {services.website.intro.split('\n\n').map((para, i) => (
              <p key={i} style={{ marginBottom: '12px' }}>{para}</p>
            ))}
          </div>
        )}

        <div className="services-two-col">
          <div>
            <ul className="services-list">
              {services.website.included.map((item) => (
                <li key={item} className="services-list-item">{item}</li>
              ))}
            </ul>

            {services.website.addon && (
              <div className="services-addon">
                <div className="services-addon-title">{services.website.addon.title}</div>
                <p>{services.website.addon.body}</p>
              </div>
            )}
          </div>

          <div>
            <p className="services-outcome">
              {services.website.outcome.split('\n').map((line, i) => (
                <span key={i} style={{ display: 'block' }}>{line}</span>
              ))}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 02 — MONTHLY VISIBILITY */}
      <section className="services-section page-section" ref={addRef}>
        <span className="section-number">{services.aiVisibility.sectionNum}</span>
        <h2 className="services-section-title display">{services.aiVisibility.title}</h2>

        <div className="services-explanation">
          {services.aiVisibility.explanation.split('\n\n').map((para, i) => (
            <p key={i} style={{ marginBottom: '12px' }}>{para}</p>
          ))}
        </div>

        <div className="services-two-col">
          <div>
            <ul className="services-list">
              {services.aiVisibility.included.map((item) => (
                <li key={item} className="services-list-item">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="services-outcome" style={{ fontStyle: 'italic', color: 'var(--muted)' }}>
              {services.aiVisibility.outcome.split('\n\n').map((para, i) => (
                <p key={i} style={{ marginBottom: i < services.aiVisibility.outcome.split('\n\n').length - 1 ? '16px' : 0 }}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — LANGUAGE PACKS */}
      <section className="services-section page-section" ref={addRef}>
        <span className="section-number">{services.languagePacks.sectionNum}</span>
        <h2 className="services-section-title display">{services.languagePacks.title}</h2>

        <p className="services-explanation">{services.languagePacks.explanation}</p>

        <table className="lang-table" aria-label="Language pack pricing">
          <thead>
            <tr>
              {services.languagePacks.tableHeaders.map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {services.languagePacks.packs.map((pack) => (
              <tr key={pack.market}>
                <td>{pack.flag} {pack.market}</td>
                <td>{pack.platforms}</td>
                <td className="price">{pack.setup}</td>
                <td className="price">{pack.monthly}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="lang-table-note">{services.languagePacks.note}</p>
      </section>

      {/* SECTION 04 — CTA */}
      <section className="services-cta-section page-section" ref={addRef}>
        <span className="section-number">{services.cta.sectionNum}</span>
        <h2 className="services-section-title display">{services.cta.title}</h2>

        <p className="services-cta-statement">
          {services.cta.statement.split('\n\n').map((para, i) => (
            <span key={i} style={{ display: 'block', marginBottom: i < services.cta.statement.split('\n\n').length - 1 ? '24px' : 0 }}>
              {para}
            </span>
          ))}
        </p>

        <div style={{ textAlign: 'center' }}>
          <Link to={services.cta.button.path} className="btn-display">
            {services.cta.button.label}
          </Link>
          <p className="services-cta-note">{services.cta.note}</p>
        </div>
      </section>
    </>
  );
}
