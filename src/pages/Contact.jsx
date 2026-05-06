import { useEffect, useRef, useState } from 'react';
import { contact } from '../data/content';

export default function Contact() {
  const sectionsRef = useRef([]);
  const [formData, setFormData] = useState({
    name: '', business: '', type: '', search: '', message: '',
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `AI Matters Enquiry — ${formData.business || 'New Enquiry'}`;
    const body = [
      `Name: ${formData.name}`,
      `Business: ${formData.business}`,
      `Type: ${formData.type}`,
      `What customers search: ${formData.search}`,
      `\nMessage:\n${formData.message}`,
    ].join('\n');

    window.location.href = `mailto:${contact.form.emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      {/* PAGE BANNER */}
      <div className="page-banner page-section" ref={addRef}>
        <h1 className="display" style={{ color: 'var(--white)' }}>
          {contact.banner}
        </h1>
      </div>

      {/* BODY */}
      <div className="contact-body page-section" ref={addRef}>
        {/* LEFT: DIRECT CONTACT */}
        <div className="contact-left">
          <span className="contact-fastest">{contact.whatsapp.label}</span>
          <a
            className="contact-wa-link display"
            href={contact.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="32" height="32" aria-hidden="true" style={{ verticalAlign: 'middle', marginRight: '12px', flexShrink: 0 }}>
              <use href="/icons.svg#whatsapp-icon" />
            </svg>
            {contact.whatsapp.display}
          </a>
          <span className="contact-wa-note">{contact.whatsapp.note}</span>

          <span className="contact-email-label">{contact.email.label}</span>
          <a className="contact-email" href={contact.email.href}>
            {contact.email.display}
          </a>

          <span className="contact-where-label">{contact.location.label}</span>
          <span className="contact-location-name">{contact.location.name}</span>
          <span className="contact-location-detail">{contact.location.detail}</span>
        </div>

        {/* RIGHT: FORM */}
        <div className="contact-right">
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
            aria-label="Enquiry form"
          >
            {contact.form.fields.map((field) => (
              <div className="form-field" key={field.id}>
                <label htmlFor={field.id}>{field.label}</label>

                {field.type === 'textarea' ? (
                  <textarea
                    id={field.id}
                    name={field.id}
                    value={formData[field.id]}
                    onChange={handleChange}
                    required={field.required}
                    rows={4}
                    placeholder={field.placeholder}
                  />
                ) : field.type === 'select' ? (
                  <select
                    id={field.id}
                    name={field.id}
                    value={formData[field.id]}
                    onChange={handleChange}
                    required={field.required}
                  >
                    <option value="">— SELECT —</option>
                    {field.options.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    value={formData[field.id]}
                    onChange={handleChange}
                    required={field.required}
                    placeholder={field.placeholder}
                  />
                )}
              </div>
            ))}

            <button type="submit" className="form-submit">
              {contact.form.submit}
            </button>
          </form>

          <span className="form-wa-fallback">
            {contact.form.waFallback.text}
            <a
              href={contact.form.waFallback.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.form.waFallback.linkLabel}
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
