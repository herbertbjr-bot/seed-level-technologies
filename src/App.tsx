import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SolutionsTicker from './components/SolutionsTicker';
import GrowthJourney from './components/GrowthJourney';
import Services from './components/Services';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <SolutionsTicker />
        <GrowthJourney />
        <Services />
        <section style={{ padding: '6rem 0', background: 'var(--primary-dark)', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ color: '#fff', fontSize: '2.2rem', marginBottom: '1.25rem' }}>Ready to stop overpaying for software?</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '600px', margin: '0 auto 2.5rem', fontSize: '1.1rem' }}>
              Tell us what's slowing your business down. We'll tell you, honestly, what it would
              take to fix it — and what it would cost.
            </p>
            <a href="#contact" className="btn" style={{ background: '#fff', color: 'var(--primary-dark)', padding: '1rem 2.5rem', fontSize: '1.05rem' }}>
              Get Your Free Consultation
            </a>
          </div>
        </section>
        <Contact />
      </main>
      <footer style={{ padding: '3rem 0', background: 'var(--soil)', color: 'rgba(255,255,255,0.7)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <img src="/logo-light.png" alt="Seed Level Technologies" style={{ height: '38px', width: 'auto', display: 'block' }} />
          <p style={{ fontSize: '0.85rem' }}>&copy; 2026 Seed Level Technologies. Built to grow with you.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
