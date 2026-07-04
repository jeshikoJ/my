import React, { useRef, useEffect } from 'react';

export default function Lightfall({
  colors = ['#A6C8FF', '#5227FF', '#FF9FFC'],
  backgroundColor = "#050816",
  speed = 0.5,
  streakCount = 2,
  streakWidth = 1,
  streakLength = 1,
  glow = 1,
  density = 0.6,
  twinkle = 1,
  zoom = 3,
  backgroundGlow = 0.5,
  opacity = 1,
  mouseInteraction = true,
  mouseStrength = 0.5,
  mouseRadius = 1,
  className = '',
  style = {}
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let particles = [];
    
    let mouse = { x: -1000, y: -1000 };

    const resize = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / (10000 / Math.max(0.1, density))) * streakCount;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          length: (Math.random() * 50 + 20) * streakLength * zoom,
          width: (Math.random() * 1.5 + 0.5) * streakWidth * zoom,
          speed: (Math.random() * 3 + 1) * speed * zoom,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.5 + 0.1,
          twinkleSpeed: (Math.random() * 0.05 + 0.01) * twinkle
        });
      }
    };

    const draw = () => {
      ctx.fillStyle = backgroundColor;
      ctx.globalAlpha = 0.1 + (1 - backgroundGlow) * 0.9;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.globalCompositeOperation = 'lighter';
      
      particles.forEach(p => {
        // Move particle
        p.y += p.speed;
        if (p.y > canvas.height + p.length) {
          p.y = -p.length;
          p.x = Math.random() * canvas.width;
        }

        // Twinkle
        p.alpha += p.twinkleSpeed;
        if (p.alpha > 0.8 || p.alpha < 0.1) p.twinkleSpeed *= -1;

        // Mouse interaction
        let dx = mouse.x - p.x;
        let dy = mouse.y - p.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        let interactionEffect = 0;
        
        if (mouseInteraction && dist < 150 * mouseRadius) {
          interactionEffect = (1 - dist / (150 * mouseRadius)) * mouseStrength * 20;
          p.x -= dx * 0.02 * mouseStrength;
        }

        // Draw particle - OPTIMIZED: No shadowBlur or per-frame gradients
        ctx.globalAlpha = Math.max(0, Math.min(1, p.alpha * opacity));
        
        ctx.beginPath();
        // Inner core (bright)
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = p.width * 0.5;
        ctx.lineCap = 'round';
        ctx.moveTo(p.x, p.y - p.length * 0.5);
        ctx.lineTo(p.x + interactionEffect, p.y);
        ctx.stroke();

        // Outer glow (colored)
        ctx.beginPath();
        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.width * 2 * glow; // Use thickness for fake glow
        ctx.moveTo(p.x, p.y - p.length);
        ctx.lineTo(p.x + interactionEffect, p.y);
        ctx.stroke();
      });

      ctx.globalCompositeOperation = 'source-over';
      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [colors, backgroundColor, speed, streakCount, streakWidth, streakLength, glow, density, twinkle, zoom, backgroundGlow, opacity, mouseInteraction, mouseStrength, mouseRadius]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-auto ${className}`}
      style={{ ...style, backgroundColor }}
    />
  );
}
