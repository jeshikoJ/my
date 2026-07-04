import React, { useState } from 'react';

export default function GlareHover({
  children,
  glareColor = '#ffffff',
  glareOpacity = 0.3,
  glareAngle = -30,
  glareSize = 300,
  transitionDuration = 800,
  playOnce = false,
  className = '',
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  const handleMouseEnter = () => {
    if (playOnce && hasPlayed) return;
    setIsHovered(true);
    setHasPlayed(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden w-full h-full ${className}`}
    >
      {children}
      
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: isHovered ? glareOpacity : 0,
          transition: `opacity ${transitionDuration}ms ease-in-out`,
        }}
      >
        <div 
          className="absolute top-1/2 left-1/2"
          style={{
            width: `${glareSize}px`,
            height: '250%',
            background: `linear-gradient(${glareAngle}deg, transparent 0%, ${glareColor} 50%, transparent 100%)`,
            transform: isHovered 
              ? 'translate(100%, -50%)' 
              : 'translate(-200%, -50%)',
            transition: `transform ${transitionDuration}ms ease-in-out`,
            mixBlendMode: 'overlay',
          }}
        />
      </div>
    </div>
  );
}
