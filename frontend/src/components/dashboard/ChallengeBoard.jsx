import React, { useEffect, useState } from 'react';
import ChallengeCard from './ChallengeCard';
import { toast } from 'react-hot-toast';

function ChallengeSkeleton() {
  return (
    <div style={{
      background: 'linear-gradient(145deg, #111D35 0%, #0D1526 100%)',
      border: '1px solid rgba(59,130,246,0.08)',
      borderRadius: 14, padding: 20, overflow: 'hidden', position: 'relative',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 50%, transparent 60%)',
        animation: 'shimmer 1.8s ease-in-out infinite',
      }} />
      <div style={{ height: 20, width: 60, background: 'rgba(59,130,246,0.1)', borderRadius: 5, marginBottom: 14 }} />
      <div style={{ height: 22, width: '75%', background: 'rgba(255,255,255,0.06)', borderRadius: 5, marginBottom: 10 }} />
      <div style={{ height: 14, width: '90%', background: 'rgba(255,255,255,0.04)', borderRadius: 4, marginBottom: 6 }} />
      <div style={{ height: 14, width: '65%', background: 'rgba(255,255,255,0.04)', borderRadius: 4, marginBottom: 18 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ height: 22, width: 36, background: 'rgba(247,223,30,0.08)', borderRadius: 5 }} />
          <div style={{ height: 22, width: 36, background: 'rgba(69,132,182,0.08)', borderRadius: 5 }} />
        </div>
        <div style={{ height: 34, width: 110, background: 'rgba(37,99,235,0.15)', borderRadius: 8 }} />
      </div>
    </div>
  );
}

const ChallengeBoard = () => {
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_SOCKET_URL}/api/challenges`);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setChallenges(data);
      } catch (err) {
        toast.error('Error loading challenges');
      } finally {
        setLoading(false);
      }
    };
    fetchChallenges();
  }, []);

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      gap: 14,
      paddingBottom: 24,
    }}>
      {loading
        ? [...Array(6)].map((_, i) => <ChallengeSkeleton key={i} />)
        : challenges.map((challenge, index) => (
            <ChallengeCard key={challenge.id} challenge={challenge} index={index} />
          ))
      }
    </div>
  );
};

export default ChallengeBoard;
