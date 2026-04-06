import React, { useState, useRef, useEffect } from 'react';
import useStore from '../../store/useStore';
import socket from '../../lib/socket';
import { Send, Smile } from 'lucide-react';
import { toast } from 'react-hot-toast';

const ChatInput = () => {
  const { currentSession, user } = useStore();
  const [msgBody, setMsgBody] = useState('');
  const typingTimer = useRef(null);

  const sendMessage = () => {
    if (!msgBody.trim() || !currentSession || !user) return;
    
    socket.emit('chat:message', {
      sessionId: currentSession.id,
      userId: user.id,
      body: msgBody.trim()
    });
    
    setMsgBody('');
    socket.emit('chat:typing', { sessionId: currentSession.id, userId: user.id, isTyping: false });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleChange = (e) => {
    const val = e.target.value;
    if (val.length > 500) return;
    setMsgBody(val);

    // Typing Logic
    socket.emit('chat:typing', { sessionId: currentSession.id, userId: user.id, isTyping: true });
    
    if (typingTimer.current) clearTimeout(typingTimer.current);
    typingTimer.current = setTimeout(() => {
      socket.emit('chat:typing', { sessionId: currentSession.id, userId: user.id, isTyping: false });
    }, 2000);
  };

  return (
    <div className="p-4 border-t border-border-subtle bg-bg-secondary/60">
      <div className="relative flex items-center gap-3 glass p-1.5 rounded-2xl border border-border-subtle hover:border-blue-primary/40 focus-within:border-blue-primary transition-all">
        <textarea
          rows={1}
          className="flex-1 bg-transparent border-none outline-none p-2 text-sm text-text-primary placeholder:text-text-muted resize-none scrollbar-hide max-h-32"
          placeholder="Message your partner..."
          value={msgBody}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        
        <button 
          onClick={sendMessage}
          disabled={!msgBody.trim()}
          className="p-2.5 rounded-xl bg-blue-primary text-white disabled:bg-bg-tertiary disabled:text-text-muted hover:scale-105 active:scale-95 transition-all"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
