import React from 'react';

export function HeroTransition() {
  return (
    <div 
      className="absolute left-0 right-0 bottom-0 pointer-events-none"
      style={{
        height: '400px',
        background: `linear-gradient(
          to top,
          #000000 0%,
          rgba(0, 0, 0, 0.9) 15%,
          rgba(0, 0, 0, 0.7) 30%,
          rgba(0, 0, 0, 0.5) 50%,
          rgba(0, 0, 0, 0.3) 70%,
          transparent 100%
        )`,
        zIndex: 10
      }}
    />
  );
}