import React from 'react';

const SkillBadge = ({ label, size = 'md' }) => {
  const config = {
    Expert:       { gradient: 'linear-gradient(135deg, #78350F, #D97706)', border: 'rgba(245,158,11,0.4)',  text: '#FEF3C7', icon: '👑' },
    Intermediate: { gradient: 'linear-gradient(135deg, #1E3A8A, #3B82F6)', border: 'rgba(59,130,246,0.4)',  text: '#DBEAFE', icon: '⚡' },
    Learner:      { gradient: 'linear-gradient(135deg, #4C1D95, #7C3AED)', border: 'rgba(124,58,237,0.4)', text: '#EDE9FE', icon: '🌱' },
  }[label] || { gradient: 'rgba(30,41,59,1)', border: 'rgba(148,163,184,0.2)', text: '#94A3B8', icon: '?' };

  const sizes = {
    xs:  { fontSize: 9,  padding: '2px 6px',  gap: 3, iconSize: 9  },
    sm:  { fontSize: 10, padding: '2px 8px',  gap: 3, iconSize: 10 },
    md:  { fontSize: 11, padding: '3px 10px', gap: 4, iconSize: 11 },
    lg:  { fontSize: 13, padding: '5px 14px', gap: 5, iconSize: 13 },
  }[size] || { fontSize: 11, padding: '3px 10px', gap: 4, iconSize: 11 };

  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: sizes.gap,
      padding: sizes.padding,
      background: config.gradient,
      border: `1px solid ${config.border}`,
      borderRadius: 6,
      fontSize: sizes.fontSize,
      fontWeight: 700,
      color: config.text,
      fontFamily: 'var(--font-mono)',
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      boxShadow: `0 0 8px ${config.border}`,
    }}>
      <span style={{ fontSize: sizes.iconSize }}>{config.icon}</span>
      {label}
    </span>
  );
};

export default SkillBadge;
