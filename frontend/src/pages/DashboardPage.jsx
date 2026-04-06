import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../store/useStore';
import Navbar from '../components/layout/Navbar';
import ChallengeBoard from '../components/dashboard/ChallengeBoard';
import Leaderboard from '../components/leaderboard/Leaderboard';
import { getMe } from '../lib/github';
import socket from '../lib/socket';

const DashboardPage = () => {
  const { user, setUser } = useStore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(!user);

  useEffect(() => {
    const initAuth = async () => {
      if (!user) {
        const userData = await getMe();
        if (userData) {
          setUser(userData);
          if (!socket.connected) socket.connect();
        } else {
          navigate('/');
        }
      }
      setLoading(false);
    };
    initAuth();
  }, [user, setUser, navigate]);

  if (loading) {
    return (
      <div style={{ height: '100vh', background: 'var(--bg-void)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          width: 40, height: 40, borderRadius: '50%',
          border: '2px solid rgba(59,130,246,0.2)',
          borderTop: '2px solid #3B82F6',
          animation: 'rotate-slow 0.8s linear infinite',
        }} />
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      <Navbar />

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Left: Challenge list */}
        <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative' }}>
          <div style={{ flex: 1, overflowY: 'auto', padding: '0 24px 0 24px', scrollbarWidth: 'none' }}>
            {/* Page header */}
            <div style={{ padding: '32px 0 24px', animation: 'slide-up 0.4s ease-out' }}>
              <h1 style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(28px, 3vw, 38px)',
                color: 'var(--text-white)', letterSpacing: '-0.03em',
                lineHeight: 1.1, marginBottom: 8,
              }}>
                Pick a Challenge
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: '#10B981',
                  boxShadow: '0 0 0 2px rgba(16,185,129,0.2), 0 0 8px rgba(16,185,129,0.6)',
                  animation: 'online-dot 2s ease-in-out infinite',
                }} />
                <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>
                  <span style={{ color: '#10B981', fontWeight: 600 }}>247</span> developers online
                </span>
              </div>
            </div>

            <ChallengeBoard />
          </div>

          {/* Scroll fade */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: 48,
            background: 'linear-gradient(to top, var(--bg-void) 0%, transparent 100%)',
            pointerEvents: 'none',
          }} />
        </div>

        {/* Right: Leaderboard */}
        <div style={{
          width: 340, flexShrink: 0,
          borderLeft: '1px solid rgba(59,130,246,0.1)',
          display: 'flex', flexDirection: 'column', overflow: 'hidden',
        }}>
          <Leaderboard />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
