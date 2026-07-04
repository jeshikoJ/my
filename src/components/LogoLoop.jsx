import React, { useState } from 'react';

export default function LogoLoop({
  logos = [],
  speed = 100, 
  direction = 'left',
  logoHeight = 60,
  gap = 60,
  hoverSpeed = 0,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = '#050816', // default to portfolio bg color
  ariaLabel = 'Technology partners'
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate list enough times to ensure screen is filled and can loop seamlessly
  const loopItems = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  // Convert "speed" to a reasonable CSS duration (e.g., speed 100 -> ~20s)
  // Higher speed = lower duration
  const duration = Math.max(2, 2000 / speed);

  return (
    <div 
      className="relative w-full flex items-center overflow-hidden py-12"
      aria-label={ariaLabel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Fade Gradients */}
      {fadeOut && (
        <>
          <div 
            className="absolute top-0 left-0 h-full w-24 md:w-48 z-10 pointer-events-none" 
            style={{ background: `linear-gradient(to right, ${fadeOutColor}, transparent)` }}
          />
          <div 
            className="absolute top-0 right-0 h-full w-24 md:w-48 z-10 pointer-events-none" 
            style={{ background: `linear-gradient(to left, ${fadeOutColor}, transparent)` }}
          />
        </>
      )}

      {/* Scrolling Track */}
      <div 
        className={`flex w-max items-center ${isHovered && hoverSpeed === 0 ? 'paused' : ''} ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}
        style={{
          gap: `${gap}px`,
          animationDuration: `${duration}s`
        }}
      >
        {loopItems.map((logo, idx) => (
          <a
            key={idx}
            href={logo.href || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center shrink-0 text-white/40 hover:text-white transition-all duration-300 ${scaleOnHover ? 'hover:scale-110' : ''}`}
            style={{ height: `${logoHeight}px` }}
          >
            {logo.node ? (
               <div style={{ fontSize: `${logoHeight}px` }} title={logo.title}>
                 {logo.node}
               </div>
            ) : (
               <img 
                 src={logo.src} 
                 alt={logo.alt || 'Logo'} 
                 className="opacity-40 hover:opacity-100 transition-opacity"
                 style={{ height: '100%', objectFit: 'contain' }}
               />
            )}
          </a>
        ))}
      </div>

      <style>{`
        .paused {
          animation-play-state: paused !important;
        }
        .animate-scroll-left {
          animation: scroll-left linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right linear infinite;
        }
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - ${gap/2}px)); }
        }
        @keyframes scroll-right {
          from { transform: translateX(calc(-50% - ${gap/2}px)); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
