import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import socket from '../lib/socket';
import useStore from '../store/useStore';
import Avatar from '../components/ui/Avatar';
import SkillBadge from '../components/ui/SkillBadge';
import { toast } from 'react-hot-toast';

const MatchingPage = () => {
  const { user, setMatchingStatus, setMatchedPartner } = useStore();
  const navigate = useNavigate();
  const location = useLocation();
  const challengeId = new URLSearchParams(location.search).get('challenge_id');
  const [statusText, setStatusText] = useState('Scanning 247 developers...');

  useEffect(() => {
    if (!user) {
      navigate('/');
      return;
    }

    if (!socket.connected) socket.connect();

    // Join queue
    socket.emit('matching:join_queue', user);
    setMatchingStatus('searching');

    const statusCycle = [
      'Analyzing your GitHub profile...',
      'Calculating skill level...',
      'Finding your perfect match...',
      'Almost there...'
    ];
    let i = 0;
    const interval = setInterval(() => {
      setStatusText(statusCycle[i % statusCycle.length]);
      i++;
    }, 3000);

    socket.on('matching:found', (payload) => {
      clearInterval(interval);
      setMatchingStatus('found');
      setMatchedPartner(payload.partner);
      toast.success('Match Found! 🎉', { duration: 2500 });
      
      setTimeout(() => {
        navigate(`/session/${payload.sessionId}`);
      }, 2500);
    });

    return () => {
      clearInterval(interval);
      socket.off('matching:found');
      setMatchingStatus('idle');
    };
  }, [user, navigate, setMatchingStatus, setMatchedPartner]);

  const handleCancel = () => {
    socket.emit('matching:leave_queue', { userId: user.id });
    navigate('/dashboard');
  };

  return (
    <div className="h-screen bg-bg-primary flex flex-col items-center justify-center relative overflow-hidden">
      {/* Radar Pulse Animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 border-2 border-blue-primary/40 rounded-full animate-sonar opacity-0"></div>
        <div className="w-64 h-64 border-2 border-blue-primary/40 rounded-full animate-sonar opacity-0 [animation-delay:0.7s]"></div>
        <div className="w-64 h-64 border-2 border-blue-primary/40 rounded-full animate-sonar opacity-0 [animation-delay:1.4s]"></div>
      </div>

      <div className="z-10 flex flex-col items-center gap-8 glass p-12 rounded-[50px] shadow-2xl">
        <div className="relative">
          <Avatar src={user?.avatar_url} size={120} showRing ringColor="#1A56DB" />
          <div className="absolute -bottom-2 right-4">
            <SkillBadge label={user?.skill_label} size="md" />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-display font-bold mb-4">{statusText}</h2>
          <p className="text-text-secondary">Challenge: {challengeId ? "Selected Task" : "Random Selection"}</p>
        </div>

        <button 
          onClick={handleCancel}
          className="btn-secondary px-8 py-3 rounded-full border border-border-subtle uppercase tracking-widest text-xs font-bold hover:bg-red/10 hover:border-red transition-all"
        >
          Cancel Search
        </button>
      </div>
    </div>
  );
};

export default MatchingPage;
