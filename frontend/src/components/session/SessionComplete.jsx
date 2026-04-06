import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Trophy, ArrowRight, LayoutDashboard, Rocket } from 'lucide-react';
import useStore from '../../store/useStore';
import { useNavigate } from 'react-router-dom';
import Avatar from '../ui/Avatar';
import SkillBadge from '../ui/SkillBadge';

const SessionComplete = ({ data }) => {
  const { currentSession, user } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const winner = data.winnerId === user?.id ? user : (currentSession?.user_a_id === user?.id ? currentSession?.user_b : currentSession?.user_a);
  
  const formatTime = (ms) => {
    const totalSec = Math.floor(ms / 1000);
    const min = Math.floor(totalSec / 60);
    const sec = totalSec % 60;
    return `${min}m ${sec}s`;
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-bg-primary/95 backdrop-blur-xl animate-fade-in p-4">
      <div className="max-w-xl w-full text-center glass p-12 rounded-[60px] shadow-[0_0_100px_rgba(26,86,219,0.2)] border border-blue-primary/40">
        <Trophy size={120} className="text-amber mx-auto mb-8 drop-shadow-[0_0_20px_#F59E0B]" />
        <h2 className="text-5xl font-display font-black mb-4 tracking-tight">Challenge <span className="gradient-text">Complete!</span></h2>
        
        <p className="text-xl text-text-secondary mb-12">Congratulations on building together. Winning solution recorded.</p>

        <div className="flex items-center justify-center gap-6 mb-16">
          <div className="flex flex-col items-center gap-3">
            <Avatar src={winner?.avatar_url} size={80} showRing ringColor="#1A56DB" />
            <div className="text-sm font-bold">{winner?.github_username || 'Code Star'}</div>
            <SkillBadge label={winner?.skill_label} size="sm" />
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-code font-bold text-blue-light mb-2">{formatTime(data.solveTimeMs)}</div>
            <div className="text-[10px] uppercase font-black text-text-muted tracking-widest">SOLVE TIME</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => navigate('/dashboard')}
            className="flex-1 btn-primary py-4 rounded-3xl font-bold flex items-center justify-center gap-3"
          >
            <LayoutDashboard size={18} /> View Leaderboard
          </button>
          <button 
            onClick={() => navigate('/dashboard')}
            className="flex-1 glass py-4 rounded-3xl font-bold flex items-center justify-center gap-3 hover:bg-white/5 transition-all"
          >
            Try Another <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SessionComplete;
