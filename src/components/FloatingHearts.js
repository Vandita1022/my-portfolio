import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Generate floating hearts
    const generateHearts = () => {
      const heartCount = 8;
      const newHearts = [];

      for (let i = 0; i < heartCount; i++) {
        newHearts.push({
          id: i,
          left: `${Math.random() * 100}%`,
          animationDuration: `${4 + Math.random() * 4}s`, // 4-8 seconds
          size: `${0.8 + Math.random() * 0.6}rem`, // 0.8-1.4rem
          delay: `${Math.random() * 2}s`,
          opacity: `${0.1 + Math.random() * 0.3}` // 0.1-0.4 opacity
        });
      }

      setHearts(newHearts);
    };

    generateHearts();

    // Regenerate hearts periodically for variety
    const interval = setInterval(generateHearts, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float-up text-rose-gold"
          style={{
            left: heart.left,
            bottom: '-50px',
            animationDuration: heart.animationDuration,
            animationDelay: heart.delay,
            fontSize: heart.size,
            opacity: heart.opacity,
          }}
        >
          <Heart className="w-full h-full floating-heart" fill="currentColor" />
        </div>
      ))}

      {/* Additional romantic particles */}
      <div className="absolute top-1/4 right-1/4 text-lavender opacity-20">
        <Heart className="w-3 h-3 floating-heart" fill="currentColor" />
      </div>
      <div className="absolute top-3/4 left-1/3 text-blush-deep opacity-15">
        <Heart className="w-4 h-4 floating-heart" fill="currentColor" style={{ animationDelay: '2s' }} />
      </div>
      <div className="absolute top-1/2 right-1/3 text-rose-gold-light opacity-25">
        <Heart className="w-2 h-2 floating-heart" fill="currentColor" style={{ animationDelay: '1.5s' }} />
      </div>
      
      {/* Sparkle effects */}
      <div className="absolute top-1/3 left-1/4 text-rose-gold opacity-30 animate-pulse">
        ✨
      </div>
      <div className="absolute bottom-1/3 right-1/4 text-lavender opacity-20 animate-pulse" style={{ animationDelay: '1s' }}>
        ✨
      </div>
    </div>
  );
};

export default FloatingHearts;