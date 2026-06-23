import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#growth-path', label: 'Growth Path' },
  { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(251, 248, 242, 0.92)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.1rem 2rem',
      }}>
        <a href="#home" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="Seed Level Technologies" style={{ height: '50px', width: 'auto', display: 'block' }} />
        </a>

        <nav style={{ display: 'none' }} className="nav-desktop">
          <ul style={{ display: 'flex', gap: '2.25rem', fontWeight: 600, fontSize: '0.95rem' }}>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} style={{ color: 'var(--text)' }}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a href="https://portal.codingcaptain.com" className="btn btn-primary nav-desktop" style={{ padding: '0.6rem 1.4rem', fontSize: '0.88rem' }}>
            Log In
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="nav-toggle"
            style={{ background: 'transparent', color: 'var(--soil)', padding: '0.4rem' }}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="container" style={{ paddingBottom: '1.25rem' }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontWeight: 600 }}>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)} style={{ color: 'var(--text)' }}>{link.label}</a>
              </li>
            ))}
            <li>
              <a href="https://portal.codingcaptain.com" onClick={() => setOpen(false)} className="btn btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.88rem' }}>
                Log In
              </a>
            </li>
          </ul>
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
          .nav-desktop { display: flex !important; }
          .nav-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
