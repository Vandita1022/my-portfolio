import React, { useEffect, useRef } from 'react';

const CursorGlow = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const opacityRef = useRef(0);          // current glow opacity (0 = hidden)
  const lastMoveTimeRef = useRef(Date.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const fadeDuration = 500; // ms to fade out after mouse stops moving
    const lightRadius = 60;

    const drawGlow = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const now = Date.now();
      const timeSinceMove = now - lastMoveTimeRef.current;

      // If mouse stopped moving for more than fadeDuration, fade opacity to 0
      if (timeSinceMove > fadeDuration) {
        opacityRef.current = Math.max(0, opacityRef.current - 0.02); // fade out gradually
      } else {
        opacityRef.current = Math.min(0.2, opacityRef.current + 0.05); // fade in quickly, max 0.2
      }

      if (opacityRef.current <= 0) {
        // No need to draw if fully transparent
        return;
      }

      const gradient = ctx.createRadialGradient(
        mouseRef.current.x,
        mouseRef.current.y,
        0,
        mouseRef.current.x,
        mouseRef.current.y,
        lightRadius
      );

      // Use current opacity to control the glow's strength
      gradient.addColorStop(0, `rgba(79, 70, 229, ${opacityRef.current})`);
      gradient.addColorStop(0.3, `rgba(147, 197, 253, ${opacityRef.current * 0.5})`);
      gradient.addColorStop(0.7, `rgba(59, 130, 246, ${opacityRef.current * 0.25})`);
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const animate = () => {
      drawGlow();
      requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      lastMoveTimeRef.current = Date.now();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 9999 }}
    />
  );
};

export default CursorGlow;
