import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const fieldStyle: React.CSSProperties = {
    padding: '0.85rem 1rem',
    borderRadius: '10px',
    background: 'var(--bg)',
    border: '1px solid var(--border)',
    color: 'var(--text)',
    outline: 'none',
    fontFamily: 'inherit',
    fontSize: '0.95rem',
  };

  return (
    <section id="contact" style={{ padding: '6rem 0', background: 'var(--bg)' }}>
      <div className="container">
        <div className="card" style={{ maxWidth: '760px', margin: '0 auto', padding: '3rem' }}>
          <div className="section-label" style={{ marginBottom: '2.5rem' }}>
            <span className="eyebrow">Let's talk</span>
            <h2 style={{ fontSize: '2rem', margin: '0.75rem 0 1rem' }}>Plant The Seed</h2>
            <p style={{ color: 'var(--text-dim)' }}>
              Tell us a bit about your business. We'll reply promptly with honest
              next steps — no pressure, no sales script.
            </p>
          </div>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <p style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary-dark)' }}>Thanks — that's planted! 🌱</p>
              <p style={{ color: 'var(--text-dim)', marginTop: '0.5rem' }}>We'll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="contact-grid">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--soil)' }}>Name</label>
                  <input type="text" placeholder="Your name" required style={fieldStyle} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--soil)' }}>Email</label>
                  <input type="email" placeholder="you@business.com" required style={fieldStyle} />
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--soil)' }}>What do you need help with?</label>
                <select style={fieldStyle} defaultValue="Custom Software">
                  <option>Custom Software</option>
                  <option>Workflow Automation</option>
                  <option>Website or Online Store</option>
                  <option>Cloud & Data Setup</option>
                  <option>Not Sure Yet</option>
                </select>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--soil)' }}>Tell us about your business</label>
                <textarea rows={4} placeholder="What's slowing you down right now?" style={{ ...fieldStyle, resize: 'vertical' }} />
              </div>
              <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center', padding: '1rem' }}>
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
