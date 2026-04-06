import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import socket from '../lib/socket';
import useStore from '../store/useStore';
import SessionHeader from '../components/session/SessionHeader';
import CodeEditor from '../components/editor/CodeEditor';
import ChatSidebar from '../components/chat/ChatSidebar';
import SessionComplete from '../components/session/SessionComplete';
import { toast } from 'react-hot-toast';

const SessionPage = () => {
  const { id: sessionId } = useParams();
  const navigate = useNavigate();
  const { user, setCurrentSession, setEditorCode, clearMessages } = useStore();
  const [completeData, setCompleteData] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate('/');
      return;
    }

    if (!socket.connected) socket.connect();

    // Fetch session details from API
    const fetchSession = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_SOCKET_URL}/api/sessions/${sessionId}`, {
          headers: { 'Content-Type': 'application/json' }
        });
        if (!res.ok) throw new Error('Session not found');
        const session = await res.json();
        setCurrentSession(session);
        setEditorCode(session.challenges.starter_code_js);
      } catch (err) {
        toast.error('Failed to load session');
        navigate('/dashboard');
      }
    };

    fetchSession();
    socket.emit('editor:join', { sessionId, userId: user.id });

    socket.on('session:complete', (data) => {
      setCompleteData(data);
      toast.success('Challenge Complete! 🏆');
    });

    socket.on('session:partner_disconnected', () => {
      toast('Partner disconnected', { icon: '⚠️' });
    });

    return () => {
      socket.emit('editor:leave', { sessionId, userId: user.id });
      socket.off('session:complete');
      socket.off('session:partner_disconnected');
      setCurrentSession(null);
      clearMessages();
    };
  }, [sessionId, user, navigate, setCurrentSession, setEditorCode, clearMessages]);

  if (completeData) return <SessionComplete data={completeData} />;

  return (
    <div className="flex flex-col h-screen bg-bg-primary overflow-hidden select-none">
      <SessionHeader />
      <div className="flex flex-1 overflow-hidden">
        <main className="flex-[0.7] border-r border-border-subtle relative bg-black/20">
          <CodeEditor />
        </main>
        <aside className="flex-[0.3] flex flex-col bg-bg-secondary overflow-hidden">
          <ChatSidebar />
          <div className="h-[20%] p-6 border-t border-border-subtle">
            <h4 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-4">Pair Stats</h4>
            <div className="flex items-center gap-4 text-sm font-medium">
              <div className="flex-1 bg-bg-tertiary p-3 rounded-xl border border-border-subtle">
                <div className="text-text-secondary text-[10px] uppercase mb-1">Total Edits</div>
                <div className="text-xl">124</div>
              </div>
              <div className="flex-1 bg-bg-tertiary p-3 rounded-xl border border-border-subtle">
                <div className="text-text-secondary text-[10px] uppercase mb-1">Sync Latency</div>
                <div className="text-xl text-green">14ms</div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default SessionPage;
