'use client';

import React, { useEffect, useRef } from 'react';

const TopologyBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animationFrameId: number;

    const mouse = { x: -1000, y: -1000, radius: 250 };
    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      time += 0.005; // Speed of the terrain moving

      // Configuration for topography lines
      const lineSpacing = 35; // Gap between contour lines
      const linesCount = Math.ceil(height / lineSpacing) + 10;
      const pointsPerLine = Math.ceil(width / 15); // Resolution of the wave

      for (let i = -5; i < linesCount; i++) {
        const baseY = i * lineSpacing;
        
        ctx.beginPath();
        for (let j = 0; j <= pointsPerLine; j++) {
          const x = j * (width / pointsPerLine);
          
          // Generate an organic wave pattern using combined sine/cosine waves
          const noiseX = x * 0.002 + time;
          const noiseY = i * 0.15 + time;
          const waveHeight = (Math.sin(noiseX) * Math.cos(noiseY) + Math.sin(noiseX * 2.5 - time)) * 40;
          
          let y = baseY + waveHeight;

          // Mouse interaction (warp/ripple lines near the cursor)
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // If the point is within the mouse's "magnetic" radius
          if (distance < mouse.radius) {
            const rippleForce = (mouse.radius - distance) / mouse.radius;
            // Push the lines upward into a gentle peak, and add a subtle ripple animation
            y -= rippleForce * 60 * Math.sin((mouse.radius - distance) * 0.05 - time * 10);
          }

          if (j === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        // Fading opacity: brighter near the top, fading to dark at the bottom
        const opacity = Math.max(0.05, 1 - (i / linesCount) * 0.8);
        ctx.strokeStyle = `rgba(16, 185, 129, ${opacity * 0.4})`; // Dau Dau Emerald color
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] opacity-70 pointer-events-none"
      style={{ background: 'radial-gradient(circle at center, #020617 0%, #000000 100%)' }}
    />
  );
};

export default TopologyBackground;
