import React from 'react';
import { ArrowRight, Sprout } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" style={{ position: 'relative', overflow: 'hidden', padding: '6.5rem 0 6rem' }}>
      <div style={{
        position: 'absolute', top: '-120px', right: '-100px', width: '420px', height: '420px',
        background: 'var(--primary-light)', borderRadius: '50%', filter: 'blur(10px)', opacity: 0.9, zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', bottom: '-160px', left: '-120px', width: '380px', height: '380px',
        background: 'var(--accent-light)', borderRadius: '50%', filter: 'blur(10px)', opacity: 0.8, zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '3rem', alignItems: 'center' }}>
        <div>
          <span className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
            <Sprout size={16} /> Software for small business budgets
          </span>
          <h1 style={{ fontSize: '3.2rem', marginBottom: '1.5rem' }}>
            Big-business software. <br />
            <span style={{ color: 'var(--primary)' }}>Small-business price.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-dim)', maxWidth: '520px', marginBottom: '2.5rem' }}>
            We build custom software, automation, and websites for small businesses that have
            been priced out before. No bloated contracts, no enterprise price tags — just the
            right tool, sized for where you are today and built to grow with you.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn btn-primary">
              Start Growing <ArrowRight size={18} />
            </a>
            <a href="#growth-path" className="btn btn-outline">
              See How It Works
            </a>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="card" style={{ padding: '2.5rem', width: '100%', maxWidth: '360px', textAlign: 'center' }}>
            <svg viewBox="0 0 200 200" style={{ width: '100%', height: '220px' }}>
              <ellipse cx="100" cy="178" rx="70" ry="10" fill="var(--bg-alt)" />
              <path d="M100 178 C100 130 70 110 60 70" stroke="var(--primary-dark)" strokeWidth="5" fill="none" strokeLinecap="round" />
              <path d="M100 178 C100 120 130 100 138 60" stroke="var(--primary)" strokeWidth="5" fill="none" strokeLinecap="round" />
              <path d="M100 178 C100 140 100 100 100 40" stroke="var(--primary-dark)" strokeWidth="6" fill="none" strokeLinecap="round" />
              <ellipse cx="58" cy="64" rx="20" ry="13" fill="var(--primary)" transform="rotate(-30 58 64)" />
              <ellipse cx="140" cy="54" rx="20" ry="13" fill="var(--primary-dark)" transform="rotate(25 140 54)" />
              <ellipse cx="100" cy="32" rx="24" ry="16" fill="var(--accent)" transform="rotate(0 100 32)" />
            </svg>
            <p style={{ marginTop: '1rem', fontWeight: 700, color: 'var(--soil)' }}>From seed to scale</p>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>One plan, four growth stages</p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          #home .container { grid-template-columns: 1fr !important; }
          #home h1 { font-size: 2.4rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
