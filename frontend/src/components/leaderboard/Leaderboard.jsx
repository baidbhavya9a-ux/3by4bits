import React, { useEffect, useState } from 'react';
import LeaderboardRow from './LeaderboardRow';
import { RefreshCw } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { supabase } from '../../lib/supabase';

const Leaderboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLeaderboard = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_SOCKET_URL}/api/leaderboard`);
      if (!res.ok) throw new Error('Failed');
      const leaderboardData = await res.json();
      setData(leaderboardData);
    } catch (err) {
      toast.error('Error refreshing leaderboard');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
    const channel = supabase
      .channel('leaderboard_updates')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'sessions', filter: 'status=eq.completed' }, fetchLeaderboard)
      .subscribe();
    const interval = setInterval(fetchLeaderboard, 30000);
    return () => {
      supabase.removeChannel(channel);
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden', background: 'rgba(7, 12, 23, 0.6)' }}>
      {/* Header */}
      <div style={{ padding: '24px 20px 16px', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
          <div style={{
            width: 28, height: 28,
            background: 'linear-gradient(135deg, rgba(245,158,11,0.2), rgba(245,158,11,0.05))',
            border: '1px solid rgba(245,158,11,0.3)',
            borderRadius: 8,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 14,
          }}>🏆</div>

          <div style={{ flex: 1 }}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15,
              color: 'var(--text-white)', letterSpacing: '-0.01em',
            }}>Live Leaderboard</h2>
            <div style={{ fontSize: 11, color: 'var(--text-ghost)', fontFamily: 'var(--font-mono)' }}>
              Updates in real-time
            </div>
          </div>

          {/* LIVE indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{
              width: 6, height: 6, borderRadius: '50%', background: '#EF4444',
              boxShadow: '0 0 6px #EF4444',
              animation: 'pulse-glow 1.5s ease-in-out infinite',
            }} />
            <span style={{ fontSize: 10, color: '#EF4444', fontFamily: 'var(--font-mono)', fontWeight: 600, letterSpacing: '0.05em' }}>LIVE</span>
          </div>

          <button
            onClick={fetchLeaderboard}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-ghost)', padding: 4, display: 'flex', alignItems: 'center' }}
          >
            <RefreshCw size={13} style={{ animation: loading ? 'rotate-slow 1s linear infinite' : 'none' }} />
          </button>
        </div>

        <div style={{ height: 1, background: 'rgba(59,130,246,0.1)', marginTop: 16 }} />
      </div>

      {/* Scroll area */}
      <div style={{ position: 'relative', flex: 1, overflow: 'hidden' }}>
        <div style={{ height: '100%', overflowY: 'auto', padding: '0 20px 40px', scrollbarWidth: 'none' }}>
          {loading ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 8 }}>
              {[...Array(5)].map((_, i) => (
                <div key={i} style={{
                  height: 56, borderRadius: 10,
                  background: 'rgba(59,130,246,0.05)',
                  border: '1px solid rgba(59,130,246,0.08)',
                  animation: 'shimmer 1.8s ease-in-out infinite',
                  position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 50%, transparent 60%)',
                    animation: 'shimmer 1.8s ease-in-out infinite',
                  }} />
                </div>
              ))}
            </div>
          ) : data.length === 0 ? (
            <div style={{
              textAlign: 'center', padding: '48px 20px',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
            }}>
              <div style={{
                width: 48, height: 48,
                background: 'rgba(59,130,246,0.08)',
                border: '1px solid rgba(59,130,246,0.15)',
                borderRadius: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22,
                animation: 'float 3s ease-in-out infinite',
              }}>🏆</div>
              <div>
                <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 4 }}>No results yet</p>
                <p style={{ fontSize: 12, color: 'var(--text-ghost)', lineHeight: 1.5 }}>
                  Complete a challenge<br />to claim the top spot
                </p>
              </div>
            </div>
          ) : (
            data.map((row, index) => (
              <LeaderboardRow key={row.session_id || index} rank={index + 1} data={row} animDelay={index * 60} />
            ))
          )}
        </div>

        {/* Bottom fade */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 48,
          background: 'linear-gradient(to top, var(--bg-void) 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />
      </div>
    </div>
  );
};

export default Leaderboard;
