import React, { useEffect, useRef } from 'react';

const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', resize);
    resize();

    const gridSize = 40;
    
    // "Data Packets" traveling along the grid
    const packets = Array.from({ length: 15 }, () => ({
      x: Math.floor(Math.random() * (width / gridSize)) * gridSize,
      y: Math.floor(Math.random() * (height / gridSize)) * gridSize,
      dir: Math.random() > 0.5 ? 'x' : 'y',
      speed: (Math.random() * 1 + 0.5) * (Math.random() > 0.5 ? 1 : -1),
      color: Math.random() > 0.7 ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.5)', // Black variations
      length: Math.random() * 20 + 10
    }));

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Static Grid (Faint)
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.05)'; // Very faint black/gray
      ctx.lineWidth = 1;
      
      // Vertical lines
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw Moving Packets
      packets.forEach(p => {
        ctx.fillStyle = p.color;
        
        if (p.dir === 'x') {
          p.x += p.speed;
          // Change direction randomly at intersections
          if (Math.abs(p.x % gridSize) < Math.abs(p.speed) && Math.random() > 0.95) {
             p.x = Math.round(p.x / gridSize) * gridSize; // Snap
             p.dir = 'y';
          }
          // Draw trail
          ctx.fillRect(p.x, p.y - 1, p.length, 3); // Horizontal line
        } else {
          p.y += p.speed;
          if (Math.abs(p.y % gridSize) < Math.abs(p.speed) && Math.random() > 0.95) {
             p.y = Math.round(p.y / gridSize) * gridSize; // Snap
             p.dir = 'x';
          }
          // Draw trail
          ctx.fillRect(p.x - 1, p.y, 3, p.length); // Vertical line
        }

        // Wrap around
        if (p.x > width) p.x = -p.length;
        if (p.x < -p.length) p.x = width;
        if (p.y > height) p.y = -p.length;
        if (p.y < -p.length) p.y = height;
      });

      // Draw abstract nodes/intersections occasionally
      const time = Date.now() / 2000;
      for(let i=0; i<5; i++) {
         const nx = (Math.floor(width/2/gridSize) + Math.sin(time + i)*5) * gridSize;
         const ny = (Math.floor(height/2/gridSize) + Math.cos(time + i)*4) * gridSize;
         
         ctx.beginPath();
         ctx.arc(nx, ny, 4, 0, Math.PI*2);
         ctx.fillStyle = '#000000';
         ctx.fill();
         
         ctx.beginPath();
         ctx.arc(nx, ny, 12, 0, Math.PI*2);
         ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
         ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none -z-10 bg-blueprint-bg" />;
};

export default HeroCanvas;