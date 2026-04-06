import React, { useEffect, useRef, useState } from 'react';
import useStore from '../../store/useStore';
import socket from '../../lib/socket';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { MessageSquare, Users2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const ChatSidebar = () => {
  const { currentSession, user, messages, addMessage, clearMessages, remoteTyping, setRemoteTyping } = useStore();
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!currentSession) return;

    // Fetch message history
    const fetchHistory = async () => {
      const { data } = await supabase
        .from('messages')
        .select('*, users(github_username, avatar_url)')
        .eq('session_id', currentSession.id)
        .order('created_at', { ascending: true });
      
      if (data) {
        data.forEach(msg => addMessage({
          id: msg.id,
          userId: msg.user_id,
          body: msg.body,
          created_at: msg.created_at,
          username: msg.users.github_username,
          avatarUrl: msg.users.avatar_url
        }));
      }
    };

    fetchHistory();

    socket.on('chat:message', (msg) => {
      addMessage(msg);
    });

    socket.on('chat:typing', ({ userId, isTyping }) => {
      setRemoteTyping(userId, isTyping);
    });

    return () => {
      socket.off('chat:message');
      socket.off('chat:typing');
      clearMessages();
    };
  }, [currentSession, addMessage, clearMessages, setRemoteTyping]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const partner = currentSession?.user_a_id === user?.id ? currentSession?.user_b : currentSession?.user_a;
  const isPartnerTyping = partner && remoteTyping[partner.id];

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-bg-secondary select-none">
      <header className="p-4 border-b border-border-subtle flex items-center justify-between">
        <h3 className="text-sm font-bold flex items-center gap-2">
          <MessageSquare size={16} className="text-blue-primary" /> Session Chat
        </h3>
        <div className="flex items-center gap-2 text-[10px] text-text-muted font-bold animate-pulse uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-green"></span> 
          Live
        </div>
      </header>

      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 flex flex-col gap-1 scrollbar-hide bg-bg-secondary/20"
      >
        {messages.map((msg, i) => (
          <ChatMessage 
            key={msg.id || i} 
            msg={msg} 
            isMe={msg.userId === user?.id}
            showProfile={i === 0 || messages[i-1].userId !== msg.userId}
          />
        ))}
        
        {isPartnerTyping && (
          <div className="flex items-center gap-2 p-2 px-3 bg-bg-tertiary/40 rounded-xl max-w-max self-start text-[10px] text-text-secondary italic animate-pulse border border-border-subtle mt-2">
            {partner.github_username} is typing...
          </div>
        )}
      </div>

      <ChatInput />
    </div>
  );
};

export default ChatSidebar;
