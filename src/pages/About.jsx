import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { about } from '../data/content';

export default function About() {
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
            {about.banner.line1}
          </span>
          <span className="display" style={{ display: 'block', color: 'var(--yellow)' }}>
            {about.banner.line2}
          </span>
        </h1>
      </div>

      {/* BODY */}
      <div className="about-body page-section" ref={addRef}>
        {/* LEFT: NOVA */}
        <div className="about-left">
          <div className="about-name display">{about.founder.name}</div>
          <span className="about-role">{about.founder.role}</span>

          <div className="about-bio">
            {about.founder.bio.split('\n\n').map((para, i) => (
              <p key={i} style={{ marginBottom: i < about.founder.bio.split('\n\n').length - 1 ? '20px' : 0 }}>
                {para.split('\n').map((line, j) => (
                  <span key={j} style={{ display: 'block' }}>{line}</span>
                ))}
              </p>
            ))}
          </div>

          <div className="about-location-block">
            {about.founder.locations.map((loc) => (
              <span key={loc} className="about-location-line">{loc}</span>
            ))}
          </div>
        </div>

        {/* RIGHT: PHILOSOPHY + POSITIONING */}
        <div className="about-right">
          <span className="about-philosophy-label">{about.philosophy.label}</span>
          <div className="about-philosophy-text">
            {about.philosophy.text.split('\n\n').map((para, i) => (
              <p key={i} style={{ marginBottom: i < about.philosophy.text.split('\n\n').length - 1 ? '20px' : 0 }}>
                {para.split('\n').map((line, j) => (
                  <span key={j} style={{ display: 'block' }}>{line}</span>
                ))}
              </p>
            ))}
          </div>

          {about.positioning && (
            <div className="about-positioning" style={{ marginTop: '40px' }}>
              <span className="about-philosophy-label">{about.positioning.label}</span>
              <div className="about-philosophy-text">
                {about.positioning.text.split('\n\n').map((para, i) => (
                  <p key={i} style={{ marginBottom: i < about.positioning.text.split('\n\n').length - 1 ? '16px' : 0 }}>
                    {para.split('\n').map((line, j) => (
                      <span key={j} style={{ display: 'block' }}>{line}</span>
                    ))}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* STATS */}
      <div className="about-stats page-section" ref={addRef}>
        {about.stats.map((stat) => (
          <div key={stat.number} className="about-stat">
            <span className={`about-stat-number ${stat.colour}`}>{stat.number}</span>
            <span className="about-stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </>
  );
}
