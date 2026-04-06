import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import clsx from 'clsx';
import socket from '../../lib/socket';
import useStore from '../../store/useStore';

const ChallengeTimer = ({ totalSeconds }) => {
  const [seconds, setSeconds] = useState(totalSeconds);
  const { currentSession } = useStore();

  useEffect(() => {
    if (seconds <= 0) {
      if (currentSession) socket.emit('session:timer_expired', { sessionId: currentSession.id });
      return;
    }

    const timer = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, currentSession]);

  const formatTime = (sec) => {
    const min = Math.floor(sec / 60);
    const s = sec % 60;
    return `${min.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const isLowTime = seconds < totalSeconds * 0.2;
  const isMidTime = seconds < totalSeconds * 0.5;

  return (
    <div className={clsx(
      "flex items-center gap-2 font-display font-black text-xl tracking-widest transition-colors duration-300",
      isLowTime ? "text-red animate-pulse" : isMidTime ? "text-amber" : "text-text-primary"
    )}>
      <Clock size={18} className={isLowTime ? "animate-spin-slow" : ""} />
      {formatTime(seconds)}
    </div>
  );
};

export default ChallengeTimer;
