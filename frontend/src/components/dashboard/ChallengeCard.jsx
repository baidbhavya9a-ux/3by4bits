import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock } from 'lucide-react';

function DifficultyBadge({ difficulty }) {
  const config = {
    Easy:   { color: '#10B981', bg: 'rgba(16,185,129,0.12)',  border: 'rgba(16,185,129,0.25)',  dot: '#10B981' },
    Medium: { color: '#F59E0B', bg: 'rgba(245,158,11,0.12)',  border: 'rgba(245,158,11,0.25)',  dot: '#F59E0B' },
    Hard:   { color: '#EF4444', bg: 'rgba(239,68,68,0.12)',   border: 'rgba(239,68,68,0.25)',   dot: '#EF4444' },
  }[difficulty] || { color: '#94A3B8', bg: 'rgba(148,163,184,0.12)', border: 'rgba(148,163,184,0.25)', dot: '#94A3B8' };

  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: '3px 10px',
      background: config.bg,
      border: `1px solid ${config.border}`,
      borderRadius: 6,
      fontSize: 11, fontWeight: 600, color: config.color,
      fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', textTransform: 'uppercase',
    }}>
      <span style={{
        width: 5, height: 5, borderRadius: '50%',
        background: config.dot,
        boxShadow: `0 0 5px ${config.dot}`,
        flexShrink: 0,
      }} />
      {difficulty}
    </span>
  );
}

function LanguageBadge({ lang }) {
  const config = {
    JS: { color: '#F7DF1E', bg: 'rgba(247,223,30,0.1)', border: 'rgba(247,223,30,0.2)' },
    PY: { color: '#4584B6', bg: 'rgba(69,132,182,0.1)', border: 'rgba(69,132,182,0.2)' },
  }[lang] || { color: '#94A3B8', bg: 'rgba(148,163,184,0.1)', border: 'rgba(148,163,184,0.2)' };
  return (
    <span style={{
      padding: '3px 9px',
      background: config.bg, border: `1px solid ${config.border}`, borderRadius: 5,
      fontSize: 11, fontWeight: 700, color: config.color,
      fontFamily: 'var(--font-mono)', letterSpacing: '0.03em',
    }}>{lang}</span>
  );
}

function FindMatchButton({ onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative', overflow: 'hidden',
        display: 'inline-flex', alignItems: 'center', gap: 7,
        padding: '8px 18px',
        background: hovered
          ? 'linear-gradient(135deg, #2563EB 0%, #3B82F6 50%, #06B6D4 100%)'
          : 'linear-gradient(135deg, #1D4ED8 0%, #2563EB 100%)',
        border: '1px solid rgba(59,130,246,0.4)',
        borderRadius: 8, fontSize: 13, fontWeight: 600, color: 'white',
        fontFamily: 'var(--font-body)', cursor: 'pointer',
        transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transform: hovered ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: hovered
          ? '0 8px 24px rgba(37,99,235,0.4), 0 0 0 1px rgba(59,130,246,0.3)'
          : '0 2px 8px rgba(37,99,235,0.2)',
        letterSpacing: '0.01em',
      }}
    >
      {hovered && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%)',
          animation: 'shimmer 0.8s ease-out',
        }} />
      )}
      <span style={{ position: 'relative' }}>Find Match</span>
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ flexShrink: 0, position: 'relative' }}>
        <path d="M2 6.5h9M7 2.5l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

const ChallengeCard = ({ challenge, index = 0 }) => {
  const navigate = useNavigate();
  const cardRef = useRef(null);

  const difficultyGlowColor = {
    Easy: '#10B981', Medium: '#F59E0B', Hard: '#EF4444',
  }[challenge.difficulty] || '#3B82F6';

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(4px)`;
    card.style.boxShadow = '0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(59,130,246,0.15), inset 0 1px 0 rgba(255,255,255,0.06)';
    card.style.borderColor = 'rgba(59,130,246,0.4)';
    card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(59,130,246,0.07) 0%, transparent 60%), linear-gradient(145deg, #111D35 0%, #0D1526 60%, #091220 100%)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
    card.style.boxShadow = 'none';
    card.style.borderColor = 'rgba(59, 130, 246, 0.14)';
    card.style.background = 'linear-gradient(145deg, #111D35 0%, #0D1526 60%, #091220 100%)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        background: 'linear-gradient(145deg, #111D35 0%, #0D1526 60%, #091220 100%)',
        border: '1px solid rgba(59, 130, 246, 0.14)',
        borderRadius: 14, padding: 20, position: 'relative', overflow: 'hidden',
        cursor: 'default', display: 'flex', flexDirection: 'column',
        transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, border-color 0.3s ease',
        animation: 'slide-up 0.4s ease-out both',
        animationDelay: `${index * 70}ms`,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Corner glow accent */}
      <div style={{
        position: 'absolute', top: -1, right: -1, width: 80, height: 80,
        background: `radial-gradient(circle at top right, ${difficultyGlowColor}22 0%, transparent 70%)`,
        borderRadius: '0 14px 0 0', pointerEvents: 'none',
      }} />

      {/* Row 1: Difficulty + Time */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <DifficultyBadge difficulty={challenge.difficulty} />
        <span style={{
          display: 'flex', alignItems: 'center', gap: 5,
          fontSize: 12, color: 'var(--text-ghost)', fontFamily: 'var(--font-mono)',
        }}>
          <Clock size={11} />
          {Math.floor(challenge.time_limit_sec / 60)} min
        </span>
      </div>

      {/* Row 2: Title */}
      <h3 style={{
        fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18,
        color: 'var(--text-white)', letterSpacing: '-0.02em', marginBottom: 8, lineHeight: 1.2,
      }}>
        {challenge.title}
      </h3>

      {/* Row 3: Description */}
      <p style={{
        fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 18, flex: 1,
        display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
      }}>
        {challenge.description}
      </p>

      {/* Row 4: Lang badges + CTA */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <LanguageBadge lang="JS" />
          <LanguageBadge lang="PY" />
        </div>
        <FindMatchButton onClick={() => navigate(`/matching?challenge_id=${challenge.id}`)} />
      </div>
    </div>
  );
};

export default ChallengeCard;
