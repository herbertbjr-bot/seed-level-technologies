import React from 'react';
import { Code2, Workflow, ShoppingCart, Cloud } from 'lucide-react';

const services = [
  {
    title: 'Custom Software',
    description: 'A tool built around how your business actually runs — not a generic template you have to bend around.',
    icon: <Code2 size={26} />,
  },
  {
    title: 'Workflow Automation',
    description: 'We find the repetitive, error-prone manual work and quietly take it off your team\'s plate.',
    icon: <Workflow size={26} />,
  },
  {
    title: 'Websites & Online Stores',
    description: 'A site that loads fast, looks sharp, and actually turns visitors into customers or bookings.',
    icon: <ShoppingCart size={26} />,
  },
  {
    title: 'Cloud & Data Setup',
    description: 'Get your records, files, and tools out of spreadsheets and into one place everyone can trust.',
    icon: <Cloud size={26} />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" style={{ padding: '6rem 0', background: 'var(--bg-alt)' }}>
      <div className="container">
        <div className="section-label">
          <span className="eyebrow">What we build</span>
          <h2 style={{ fontSize: '2.2rem', margin: '0.75rem 0 1rem' }}>Solutions Sized For Small Business</h2>
          <p style={{ color: 'var(--text-dim)' }}>
            Every engagement starts with a seed: what's the smallest thing that
            actually solves your problem?
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {services.map((service) => (
            <div key={service.title} className="card" style={{ padding: '2.25rem', transition: 'var(--transition)' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lift)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow)'; }}
            >
              <span style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: '52px', height: '52px', borderRadius: '14px',
                background: 'var(--primary-light)', color: 'var(--primary-dark)', marginBottom: '1.25rem',
              }}>
                {service.icon}
              </span>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', color: 'var(--soil)' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem' }}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
