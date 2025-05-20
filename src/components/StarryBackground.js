import React, { useEffect, useRef } from 'react';

const StarryBackground = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Create stars
    const stars = [];
    const starCount = 200;
    
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.05 + 0.01,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.01 + 0.005
      });
    }
    
    // Shooting stars
    const shootingStars = [];
    const maxShootingStars = 3;
    
    // Animation
    let animationFrameId;
    
    const render = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(16, 16, 40, 1)');
      gradient.addColorStop(1, 'rgba(20, 20, 50, 1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      stars.forEach(star => {
        // Update star opacity for twinkling effect
        star.opacity += Math.sin(Date.now() * star.twinkleSpeed) * 0.01;
        star.opacity = Math.max(0.2, Math.min(1, star.opacity));
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });
      
      // Create new shooting stars randomly
      if (shootingStars.filter(ss => ss.active).length < maxShootingStars && Math.random() < 0.01) {
        shootingStars.push({
          x: Math.random() * canvas.width * 0.3,
          y: Math.random() * canvas.height * 0.3,
          length: Math.random() * 80 + 20,
          speed: Math.random() * 4 + 2,
          opacity: 1,
          active: true
        });
      }
      
      // Draw shooting stars
      shootingStars.forEach(shootingStar => {
        if (!shootingStar.active) return;
        
        ctx.beginPath();
        const angle = Math.PI / 4; // 45 degrees
        const endX = shootingStar.x + Math.cos(angle) * shootingStar.length;
        const endY = shootingStar.y + Math.sin(angle) * shootingStar.length;
        
        // Create gradient line
        const gradient = ctx.createLinearGradient(
          shootingStar.x, 
          shootingStar.y, 
          endX, 
          endY
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        
        // Move shooting star
        shootingStar.x += Math.cos(angle) * shootingStar.speed;
        shootingStar.y += Math.sin(angle) * shootingStar.speed;
        
        // Fade out and deactivate if out of screen
        if (shootingStar.x > canvas.width || shootingStar.y > canvas.height) {
          shootingStar.active = false;
        }
      });
      
      animationFrameId = window.requestAnimationFrame(render);
    };
    
    render();
    
    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-screen h-screen -z-10" />;
};

export default StarryBackground;