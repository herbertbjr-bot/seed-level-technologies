import React, { useState } from 'react';

type Stage = 'seed' | 'sprout' | 'sapling' | 'tree';

const stageOrder: Stage[] = ['seed', 'sprout', 'sapling', 'tree'];

const stageInfo: Record<Stage, { title: string; tagline: string; tips: string[] }> = {
  seed: {
    title: 'Seed — Discover',
    tagline: 'We learn your business before we write a line of code.',
    tips: [
      'A 30-minute call to map your workflow and biggest time-sink.',
      'We tell you honestly if software is even the right fix.',
      'You get a clear plan — no surprises along the way.',
    ],
  },
  sprout: {
    title: 'Sprout — Build',
    tagline: 'We build the smallest tool that solves the real problem.',
    tips: [
      'Working software, fast — not a drawn-out build.',
      'You see ongoing progress, not a reveal at the end.',
      'Built on plain, maintainable tech — no lock-in.',
    ],
  },
  sapling: {
    title: 'Sapling — Launch',
    tagline: 'We get it into your team\'s hands and iron out the rough edges.',
    tips: [
      'We train your team so the tool actually gets used.',
      'Real usage surfaces real fixes — we handle those fast.',
      'We document everything clearly, so nothing\'s a mystery later.',
    ],
  },
  tree: {
    title: 'Full Growth — Support',
    tagline: 'As your business grows, your software grows with it.',
    tips: [
      'Ongoing support — cancel anytime.',
      'New features get scoped the same straightforward way.',
      'We\'re here for the long haul, not just the kickoff.',
    ],
  },
};

const stageHeights: Record<Stage, number> = { seed: 0, sprout: 0.35, sapling: 0.65, tree: 1 };

const GrowthJourney: React.FC = () => {
  const [stage, setStage] = useState<Stage>('seed');
  const [tipIndex, setTipIndex] = useState(0);

  const handleStageClick = (s: Stage) => {
    if (s === stage) {
      setTipIndex((prev) => (prev + 1) % stageInfo[s].tips.length);
    } else {
      setStage(s);
      setTipIndex(0);
    }
  };

  const h = stageHeights[stage];
  const trunkY2 = 170 - h * 130;
  const showLeaves = stage !== 'seed';
  const showCanopy = stage === 'tree';

  return (
    <section id="growth-path" style={{ padding: '6rem 0', background: 'var(--bg)' }}>
      <div className="container">
        <div className="section-label">
          <span className="eyebrow">How we work with you</span>
          <h2 style={{ fontSize: '2.2rem', margin: '0.75rem 0 1rem' }}>Your Growth Path</h2>
          <p style={{ color: 'var(--text-dim)' }}>
            Click a stage to see what it looks like — click it again for another tip.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: '3rem', alignItems: 'center' }} className="growth-grid">
          <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <svg viewBox="0 0 200 200" style={{ width: '100%', maxWidth: '280px', height: '260px' }}>
              <ellipse cx="100" cy="178" rx="60" ry="9" fill="var(--bg-alt)" />
              <line x1="100" y1="178" x2="100" y2={trunkY2} stroke="var(--soil)" strokeWidth="6" strokeLinecap="round" style={{ transition: 'all 0.6s cubic-bezier(0.34,1.56,0.64,1)' }} />

              {showLeaves && (
                <g style={{ transition: 'opacity 0.4s ease', opacity: showLeaves ? 1 : 0 }}>
                  <ellipse cx={100 - h * 28} cy={trunkY2 + 14} rx="16" ry="10" fill="var(--primary)" transform={`rotate(-30 ${100 - h * 28} ${trunkY2 + 14})`} />
                  <ellipse cx={100 + h * 28} cy={trunkY2 + 28} rx="16" ry="10" fill="var(--primary-dark)" transform={`rotate(25 ${100 + h * 28} ${trunkY2 + 28})`} />
                </g>
              )}

              {showCanopy && (
                <g style={{ transition: 'opacity 0.5s ease' }}>
                  <circle cx="100" cy="44" r="34" fill="var(--primary)" />
                  <circle cx="72" cy="60" r="24" fill="var(--primary-dark)" />
                  <circle cx="128" cy="60" r="24" fill="var(--primary-dark)" />
                  <circle cx="100" cy="76" r="6" fill="var(--accent)" />
                </g>
              )}

              {stage === 'seed' && (
                <ellipse cx="100" cy="172" rx="9" ry="12" fill="var(--accent)" />
              )}
            </svg>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {stageOrder.map((s) => (
                <button
                  key={s}
                  onClick={() => handleStageClick(s)}
                  style={{
                    padding: '0.55rem 1.1rem',
                    borderRadius: '50px',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    background: s === stage ? 'var(--primary)' : 'var(--bg-alt)',
                    color: s === stage ? '#fff' : 'var(--text)',
                  }}
                >
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="card" style={{ padding: '3rem', minHeight: '260px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '0.75rem' }}>{stageInfo[stage].title}</h3>
            <p style={{ color: 'var(--text-dim)', marginBottom: '1.5rem' }}>{stageInfo[stage].tagline}</p>
            <div style={{
              borderLeft: '3px solid var(--accent)', paddingLeft: '1.25rem',
              fontStyle: 'italic', color: 'var(--soil)', fontSize: '1.1rem',
            }}>
              "{stageInfo[stage].tips[tipIndex]}"
            </div>
            <span style={{ marginTop: '1.5rem', color: 'var(--text-dim)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.5px' }}>
              TIP {tipIndex + 1} OF {stageInfo[stage].tips.length} — click "{stage}" again for the next one
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .growth-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default GrowthJourney;
