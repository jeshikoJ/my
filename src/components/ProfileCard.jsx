import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function ProfileCard({
  name = "Jeshiko J",
  title = "Software Engineer",
  handle = "jeshiko",
  status = "Online",
  contactText = "Contact Me",
  avatarUrl = "/profile.jpg",
  showUserInfo = true,
  enableTilt = true,
  enableMobileTilt = false,
  onContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  },
  behindGlowColor = "rgba(37, 99, 235, 0.5)", // Updated to match portfolio blue theme
  iconUrl = "",
  behindGlowEnabled = true,
  innerGradient = "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(37,99,235,0.1) 100%)",
}) {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    if (!enableTilt) return;
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      className="relative group w-full mx-auto"
      style={{ perspective: 1000 }}
    >
      {/* Behind Glow */}
      {behindGlowEnabled && (
        <div 
          className="absolute inset-0 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl will-change-opacity"
          style={{ backgroundColor: behindGlowColor }}
        />
      )}
      
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full aspect-square rounded-3xl p-8 border border-white/10 backdrop-blur-xl overflow-hidden shadow-[0_0_40px_rgba(37,99,235,0.15)] transition-transform duration-200 bg-white/5 flex flex-col justify-center items-center will-change-transform"
      >
        {/* Inner Gradient Background */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ background: innerGradient }}
        />
        
        {/* Icon Pattern */}
        {iconUrl && (
          <div 
            className="absolute inset-0 opacity-5 pointer-events-none bg-repeat"
            style={{ backgroundImage: `url(${iconUrl})`, backgroundSize: '80px' }}
          />
        )}

        <div className="relative z-10 flex flex-col items-center justify-center transform-gpu w-full h-full" style={{ transform: "translateZ(50px)" }}>
          {/* Avatar Area */}
          <div className="relative w-40 h-40 mb-8 rounded-full overflow-hidden shadow-2xl border-4 border-white/20">
            <img 
              src={avatarUrl} 
              alt={name} 
              className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
          
          {/* User Info */}
          {showUserInfo !== false && (
            <div className="text-center mb-8">
              <h3 className="text-3xl font-black text-white mb-2">{name}</h3>
              <p className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-2">{title}</p>
              <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                 <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                {status}
              </div>
            </div>
          )}
          
          {/* Contact Button */}
          <button 
            onClick={onContactClick}
            className="w-full max-w-xs py-4 px-6 bg-blue-600/20 hover:bg-blue-600 border border-blue-500/30 hover:border-blue-500 rounded-xl text-white font-semibold tracking-widest uppercase transition-all shadow-lg backdrop-blur-md"
          >
            {contactText}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
