import { useEffect, useRef } from 'react';
import { work } from '../data/content';

export default function Work() {
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
        <h1 className="display" style={{ color: 'var(--white)' }}>
          {work.banner}
        </h1>
      </div>

      {/* INTRO */}
      <div className="work-intro page-section" ref={addRef}>
        {work.intro.split('\n').map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      {/* CASE STUDIES */}
      {work.caseStudies.map((cs) => (
        <article className="case-study page-section" key={cs.num} ref={addRef}>
          {/* Header */}
          <div className="case-study-header">
            <div className="case-study-header-left">
              <span className="case-num">CASE STUDY {cs.num}</span>
              <h2 className="case-client display">{cs.client}</h2>
            </div>
            <div className="case-study-header-right">
              <span className="case-loc">{cs.location}</span>
              <span className="case-type">{cs.type}</span>
            </div>
          </div>

          {/* Body */}
          <div className="case-study-body">
            {/* Left */}
            <div className="case-study-left">
              <span className="case-section-label">THE SITUATION</span>
              <p className="case-body-text">{cs.situation}</p>

              <span className="case-section-label">WHAT WE DID</span>
              <ul className="case-did-list">
                {cs.whatWeDid.map((item) => (
                  <li key={item} className="case-did-item">{item}</li>
                ))}
              </ul>
            </div>

            {/* Right */}
            <div className="case-study-right">
              <div className="case-stat-boxes">
                {cs.stats.map((stat) => (
                  <div key={stat.number} className="case-stat-box">
                    <span className={`case-stat-box-number ${stat.colour}`}>
                      {stat.number}
                    </span>
                    <span className="case-stat-box-label">{stat.label}</span>
                    {stat.note && (
                      <span className="case-stat-box-note">{stat.note}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="case-study-footer">
            <a
              href={cs.siteLink.href}
              className="link-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              {cs.siteLink.label}
            </a>
          </div>
        </article>
      ))}

      {/* COMING SOON */}
      <div className="work-coming-soon page-section" ref={addRef}>
        <span className="work-coming-soon-num">{work.comingSoon.num}</span>
        <div className="work-coming-soon-title display">{work.comingSoon.title}</div>
        <p className="work-coming-soon-sub">{work.comingSoon.sub}</p>
      </div>
    </>
  );
}
