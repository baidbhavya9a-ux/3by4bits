import React from 'react';
import Avatar from '../ui/Avatar';
import clsx from 'clsx';
import { format } from 'date-fns';

const ChatMessage = ({ msg, isMe, showProfile }) => {
  return (
    <div className={clsx(
      "flex flex-col mb-1",
      isMe ? "items-end" : "items-start"
    )}>
      {showProfile && (
        <div className={clsx(
          "flex items-center gap-2 mb-1 opacity-70",
          isMe ? "flex-row-reverse" : "flex-row"
        )}>
          <Avatar src={msg.avatarUrl} size={20} />
          <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">{msg.username}</span>
          <span className="text-[10px] text-text-muted">{format(new Date(msg.created_at || Date.now()), 'HH:mm')}</span>
        </div>
      )}
      
      <div className={clsx(
        "max-w-[85%] px-4 py-2.5 rounded-2xl text-sm font-medium leading-relaxed break-words shadow-sm",
        isMe ? "bg-blue-primary text-white rounded-tr-none" : "bg-bg-tertiary text-text-primary rounded-tl-none border border-border-subtle"
      )}>
        {msg.body}
      </div>
    </div>
  );
};

export default ChatMessage;
