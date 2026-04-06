import React from 'react';
import SkillBadge from '../ui/SkillBadge';

const LeaderboardRow = ({ rank, data, animDelay = 0 }) => {
  const rankConfig = {
    1: { bg: 'rgba(251,191,36,0.08)', border: 'rgba(251,191,36,0.2)', color: '#FBBF24', label: '01' },
    2: { bg: 'rgba(148,163,184,0.06)', border: 'rgba(148,163,184,0.15)', color: '#94A3B8', label: '02' },
    3: { bg: 'rgba(180,120,74,0.08)', border: 'rgba(180,120,74,0.2)', color: '#B4784A', label: '03' },
  }[rank] || { bg: 'transparent', border: 'rgba(59,130,246,0.08)', color: 'var(--text-ghost)', label: String(rank).padStart(2, '0') };

  const formatTime = (ms) => {
    if (!ms) return '--:--';
    const totalSec = Math.floor(ms / 1000);
    const min = Math.floor(totalSec / 60);
    const sec = totalSec % 60;
    return `${min}:${String(sec).padStart(2, '0')}`;
  };

  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '10px 12px',
      background: rankConfig.bg,
      border: `1px solid ${rankConfig.border}`,
      borderRadius: 10, marginBottom: 8,
      animation: 'leaderboard-entry 0.3s ease-out both',
      animationDelay: `${animDelay}ms`,
      transition: 'all 0.2s ease',
      cursor: 'default',
    }}>
      {/* Rank */}
      <span style={{
        fontFamily: 'var(--font-mono)', fontWeight: 700,
        fontSize: 12, color: rankConfig.color,
        minWidth: 20, textAlign: 'center',
      }}>
        {rankConfig.label}
      </span>

      {/* Avatar */}
      <div style={{ position: 'relative', flexShrink: 0 }}>
        <img src={data.avatar_url} alt="" style={{
          width: 28, height: 28, borderRadius: '50%',
          border: `1.5px solid ${rankConfig.border}`,
          display: 'block',
        }} onError={e => e.target.style.opacity = '0'} />
        {rank <= 3 && (
          <div style={{
            position: 'absolute', bottom: -2, right: -2,
            width: 12, height: 12, borderRadius: '50%',
            background: rankConfig.color,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 7, fontWeight: 700, color: '#000',
          }}>
            {rank}
          </div>
        )}
      </div>

      {/* Name + badge */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: 13, fontWeight: 600, color: 'var(--text-white)',
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          marginBottom: 2,
        }}>
          {data.github_username}
        </div>
        <SkillBadge label={data.skill_label} size="xs" />
      </div>

      {/* Solve time */}
      <div style={{ textAlign: 'right', flexShrink: 0 }}>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700,
          color: rank <= 3 ? rankConfig.color : 'var(--text-muted)',
        }}>
          {formatTime(data.solve_time_ms)}
        </div>
        <div style={{ fontSize: 10, color: 'var(--text-ghost)', marginTop: 1, maxWidth: 80, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {data.challenge_title?.split(' ').slice(0, 2).join(' ')}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardRow;
