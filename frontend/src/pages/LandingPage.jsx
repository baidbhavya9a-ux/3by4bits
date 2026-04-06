import React, { useState } from 'react';
import { GITHUB_AUTH_URL } from '../lib/github';

const features = [
  { icon: '⚡', label: 'Real-Time Sync', desc: 'Shared Monaco editor with live cursor tracking' },
  { icon: '🎯', label: 'AI Skill Matching', desc: 'GitHub analysis scores your level automatically' },
  { icon: '🏆', label: 'Live Leaderboard', desc: 'Compete, improve, and climb the ranks' },
];

const stats = [
  { value: '1,200+', label: 'Developers Matched' },
  { value: '4,800+', label: 'Sessions Completed' },
  { value: '12', label: 'Coding Challenges' },
];

const LandingPage = () => {
  const [btnHover, setBtnHover] = useState(false);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Scan line */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.4) 50%, transparent 100%)',
        animation: 'scan-line 8s linear infinite',
        pointerEvents: 'none', zIndex: 9999, opacity: 0.4,
      }} />

      {/* Radial hero glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)',
        width: 600, height: 400,
        background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <main style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 24px', maxWidth: 720, animation: 'slide-up 0.6s ease-out' }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 32,
          padding: '6px 16px',
          background: 'rgba(59,130,246,0.1)',
          border: '1px solid rgba(59,130,246,0.25)',
          borderRadius: 999,
          fontSize: 12, fontWeight: 600, color: '#93C5FD', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', boxShadow: '0 0 6px #10B981', animation: 'pulse-glow 2s ease-in-out infinite', display: 'inline-block' }} />
          HACKATHON BUILD — LIVE DEMO READY
        </div>

        {/* Hero heading */}
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(48px, 8vw, 88px)',
          color: 'var(--text-white)', letterSpacing: '-0.04em',
          lineHeight: 1,
          marginBottom: 24,
        }}>
          Code{' '}
          <span style={{
            background: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 50%, #8B5CF6 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            Together.
          </span>
        </h1>

        <p style={{ fontSize: 18, color: 'var(--text-muted)', marginBottom: 48, lineHeight: 1.6, maxWidth: 520, margin: '0 auto 48px' }}>
          Get matched with a developer at your exact skill level. Pair-code on real challenges. Ship faster than solo.
        </p>

        {/* CTA Button */}
        <div style={{ marginBottom: 64 }}>
          <a
            href={GITHUB_AUTH_URL}
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              padding: '16px 36px',
              background: btnHover
                ? 'linear-gradient(135deg, #2563EB 0%, #3B82F6 50%, #06B6D4 100%)'
                : 'linear-gradient(135deg, #1D4ED8 0%, #2563EB 100%)',
              border: '1px solid rgba(59,130,246,0.5)',
              borderRadius: 12,
              fontSize: 16, fontWeight: 700, color: 'white', fontFamily: 'var(--font-body)',
              textDecoration: 'none', letterSpacing: '0.01em',
              transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
              transform: btnHover ? 'translateY(-3px) scale(1.02)' : 'translateY(0) scale(1)',
              boxShadow: btnHover
                ? '0 16px 40px rgba(37,99,235,0.5), 0 0 0 1px rgba(59,130,246,0.4)'
                : '0 4px 16px rgba(37,99,235,0.3)',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            Connect with GitHub
          </a>
        </div>

        {/* Feature pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', marginBottom: 80 }}>
          {features.map((f) => (
            <div key={f.label} style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px',
              background: 'rgba(13,21,38,0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(59,130,246,0.14)',
              borderRadius: 999,
              fontSize: 13, fontWeight: 500, color: 'var(--text-muted)',
            }}>
              <span>{f.icon}</span> {f.label}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1,
          padding: '32px 0',
          borderTop: '1px solid rgba(59,130,246,0.1)',
        }}>
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: 'center', padding: '0 16px' }}>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28,
                color: 'var(--text-white)', letterSpacing: '-0.03em',
                background: 'linear-gradient(135deg, #E2E8F0, #94A3B8)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                {s.value}
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-ghost)', marginTop: 4, fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                {s.label.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer style={{ position: 'absolute', bottom: 24, fontSize: 12, color: 'var(--text-ghost)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
        DEVMATCH LIVE © 2026 — HACKATHON DEMO
      </footer>
    </div>
  );
};

export default LandingPage;
