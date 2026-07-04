import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

function DockItem({ item, mouseX, baseSize, magnification }) {
  const ref = useRef(null);

  // Calculate distance from mouse to center of the button
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Scale up when mouse is close
  const widthSync = useTransform(distance, [-150, 0, 150], [baseSize, magnification, baseSize]);
  
  // Smooth the animation with a spring
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.button
      ref={ref}
      style={{ width, height: width }}
      onClick={item.onClick}
      className="flex flex-col items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-white/20 text-white transition-colors relative group shadow-lg"
    >
      <span className="sr-only">{item.label}</span>
      
      {/* Icon Wrapper allows scaling icon slightly if needed, but we rely on fixed size in their snippet or let it scale naturally */}
      <motion.div className="flex items-center justify-center w-full h-full">
        {item.icon}
      </motion.div>
      
      {/* Tooltip */}
      <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900 border border-white/10 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
        {item.label}
      </span>
    </motion.button>
  );
}

export default function Dock({ items, panelHeight = 68, baseItemSize = 50, magnification = 70 }) {
  const mouseX = useMotionValue(Infinity);

  return (
    <div 
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-end gap-4 rounded-2xl bg-[#050816]/80 backdrop-blur-xl border border-white/10 px-4 pb-3 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
      style={{ height: panelHeight }}
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      {items.map((item, i) => (
        <DockItem 
          key={i} 
          item={item} 
          mouseX={mouseX} 
          baseSize={baseItemSize} 
          magnification={magnification} 
        />
      ))}
    </div>
  );
}
