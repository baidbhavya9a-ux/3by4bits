import React from 'react';
import useStore from '../../store/useStore';
import Avatar from '../ui/Avatar';
import SkillBadge from '../ui/SkillBadge';
import ChallengeTimer from './ChallengeTimer';
import { useNavigate } from 'react-router-dom';
import { Home, Share2, LogOut } from 'lucide-react';
import socket from '../../lib/socket';

const SessionHeader = () => {
  const { currentSession, user } = useStore();
  const navigate = useNavigate();

  if (!currentSession) return null;

  const handleExit = () => {
    if (window.confirm('Exit the current pair session? This will not save progress.')) {
      socket.emit('editor:leave', { sessionId: currentSession.id, userId: user.id });
      navigate('/dashboard');
    }
  };

  const partner = currentSession.user_a_id === user?.id ? currentSession.user_b : currentSession.user_a;

  return (
    <header className="h-14 px-6 flex items-center justify-between border-b border-border-subtle bg-bg-secondary select-none">
      <div className="flex items-center gap-6">
        <button onClick={handleExit} className="p-2 -ml-2 rounded-lg hover:bg-bg-tertiary text-text-muted hover:text-text-primary transition-all">
          <Home size={18} />
        </button>
        
        <div className="flex items-center gap-3">
          <div className="text-sm font-bold font-display line-clamp-1">{currentSession.challenges.title}</div>
          <div className={clsx(
            "px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest border",
            currentSession.challenges.difficulty === 'Easy' ? 'text-green border-green/30 bg-green/5' :
            currentSession.challenges.difficulty === 'Medium' ? 'text-amber border-amber/30 bg-amber/5' :
            'text-red border-red/30 bg-red/5'
          )}>
            {currentSession.challenges.difficulty}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <ChallengeTimer totalSeconds={currentSession.challenges.time_limit_sec} />
        <div className="w-full h-1 bg-bg-tertiary rounded-full overflow-hidden mt-1 max-w-[100px]">
          <div className="h-full bg-blue-primary animate-pulse shadow-[0_0_10px_#1A56DB]"></div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center -space-x-2">
          <Avatar src={user?.avatar_url} size={28} showRing ringColor="#1A56DB" />
          <div className="w-6 h-6 flex items-center justify-center font-bold text-[10px] text-text-muted z-10 bg-bg-primary rounded-full border border-border-subtle relative top-1">↔</div>
          <Avatar src={partner?.avatar_url} size={28} showRing ringColor="#7C3AED" />
        </div>
        
        <div className="flex items-center gap-1.5 h-8 pr-4 border-r border-border-subtle mr-4">
          <SkillBadge label={partner?.skill_label} size="sm" />
          <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest hidden lg:inline">{partner?.github_username || 'WAITING...'}</span>
        </div>

        <button className="p-2 rounded-lg hover:bg-bg-tertiary text-text-muted hover:text-text-primary transition-all">
          <Share2 size={18} />
        </button>
      </div>
    </header>
  );
};

export default SessionHeader;
