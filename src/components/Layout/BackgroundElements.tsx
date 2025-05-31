import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const BackgroundElements = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Generate random positions for orbs
    const generateOrbs = () => {
      if (!container) return;
      
      // Clear existing orbs
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      
      // Create new orbs
      const orbsCount = window.innerWidth < 768 ? 3 : 5;
      for (let i = 0; i < orbsCount; i++) {
        const orb = document.createElement('div');
        orb.className = 'floating-orb';
        
        // Random size
        const size = Math.random() * 300 + 100;
        orb.style.width = `${size}px`;
        orb.style.height = `${size}px`;
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        orb.style.left = `${x}%`;
        orb.style.top = `${y}%`;
        
        // Random color
        const colors = [
          'rgba(30, 58, 138, 0.5)',   // primary
          'rgba(245, 158, 11, 0.3)',  // secondary
          'rgba(192, 132, 252, 0.4)', // accent
          'rgba(99, 102, 241, 0.3)',  // background-light
        ];
        const colorIndex = Math.floor(Math.random() * colors.length);
        orb.style.background = colors[colorIndex];
        
        // Random animation duration
        const duration = Math.random() * 20 + 20;
        orb.style.animation = `float ${duration}s ease-in-out infinite`;
        orb.style.animationDelay = `${Math.random() * 10}s`;
        
        container.appendChild(orb);
      }
    };
    
    generateOrbs();
    
    // Regenerate orbs on window resize
    const handleResize = () => {
      generateOrbs();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-500/20"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent-500/20"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
};

export default BackgroundElements;