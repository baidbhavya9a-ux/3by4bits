import React from 'react';
import useStore from '../../store/useStore';
import SkillBadge from '../ui/SkillBadge';
import { logout } from '../../lib/github';
import { LayoutDashboard, Code2, Users } from 'lucide-react';

const Navbar = () => {
  const { user, clearUser } = useStore();

  const handleLogout = async () => {
    await logout();
    clearUser();
    window.location.href = '/';
  };

  return (
    <>
      {/* Scan line effect */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        height: '2px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.4) 50%, transparent 100%)',
        animation: 'scan-line 8s linear infinite',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: 0.4,
      }} />

      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        height: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        background: 'rgba(4, 7, 15, 0.85)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: '1px solid rgba(59, 130, 246, 0.12)',
        boxShadow: '0 1px 0 rgba(59,130,246,0.08), 0 0 40px rgba(59,130,246,0.03)',
      }}>
        {/* Left – Wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 28, height: 28,
            background: 'linear-gradient(135deg, #1D4ED8, #06B6D4)',
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: 'white', fontFamily: 'var(--font-mono)' }}>DM</span>
          </div>
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 17,
            color: 'var(--text-white)', letterSpacing: '-0.01em',
          }}>DevMatch</span>
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 17,
            background: 'linear-gradient(90deg, #3B82F6, #06B6D4)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.01em',
          }}>Live</span>
        </div>

        {/* Center – Nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {[
            { label: 'Dashboard', icon: <LayoutDashboard size={14} />, active: true },
            { label: 'Challenges', icon: <Code2 size={14} />, active: false },
            { label: 'My Teams', icon: <Users size={14} />, active: false },
          ].map((link) => (
            <button key={link.label} style={{
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '6px 14px',
              background: link.active ? 'rgba(59,130,246,0.1)' : 'transparent',
              border: link.active ? '1px solid rgba(59,130,246,0.2)' : '1px solid transparent',
              borderRadius: 8,
              fontSize: 14, fontWeight: 500,
              color: link.active ? '#3B82F6' : 'var(--text-muted)',
              fontFamily: 'var(--font-body)',
              cursor: 'pointer',
              transition: 'color 0.2s',
            }}>
              {link.icon}
              {link.label}
            </button>
          ))}
        </div>

        {/* Right – User info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <SkillBadge label={user?.skill_label} size="sm" />

          <div style={{ width: 1, height: 20, background: 'rgba(255,255,255,0.08)' }} />

          <span style={{ fontSize: 14, color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
            {user?.github_username}
          </span>

          <img
            src={user?.avatar_url}
            alt={user?.github_username}
            style={{
              width: 32, height: 32, borderRadius: '50%',
              boxShadow: '0 0 0 2px rgba(59,130,246,0.4)',
              cursor: 'pointer',
              transition: 'box-shadow 0.2s',
            }}
            onMouseEnter={e => e.target.style.boxShadow = '0 0 0 2px #3B82F6, 0 0 12px rgba(59,130,246,0.4)'}
            onMouseLeave={e => e.target.style.boxShadow = '0 0 0 2px rgba(59,130,246,0.4)'}
          />

          <button
            onClick={handleLogout}
            style={{
              fontSize: 12, fontWeight: 600,
              color: 'var(--text-ghost)',
              background: 'none', border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.04em',
              padding: '4px 8px',
              borderRadius: 6,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = '#EF4444'}
            onMouseLeave={e => e.target.style.color = 'var(--text-ghost)'}
          >
            EXIT
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
