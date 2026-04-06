import React from 'react';
import clsx from 'clsx';

const Avatar = ({ src, username, size = 48, showRing, ringColor = '#1A56DB', online }) => {
  const initials = username?.slice(0, 2).toUpperCase() || 'DM';

  return (
    <div 
      className="relative flex items-center justify-center rounded-full"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        padding: showRing ? '3px' : '0',
        background: showRing ? ringColor : 'transparent'
      }}
    >
      <div 
        className={clsx(
          "w-full h-full rounded-full overflow-hidden flex items-center justify-center font-bold bg-bg-tertiary",
          size < 40 ? "text-xs" : "text-base"
        )}
      >
        {src ? (
          <img 
            src={src} 
            alt={username} 
            className="w-full h-full object-cover" 
            onError={(e) => (e.target.style.display = 'none')}
          />
        ) : initials}
      </div>

      {online && (
        <div 
          className="absolute bottom-0 right-0 rounded-full border-2 border-bg-primary bg-green"
          style={{ width: `${size/4}px`, height: `${size/4}px` }}
        ></div>
      )}
    </div>
  );
};

export default Avatar;
