import React from 'react';

export function ColorTransition() {
  return (
    <div 
      className="absolute left-0 right-0 h-[300px] -mt-[300px] pointer-events-none"
      style={{
        background: 'linear-gradient(to bottom, transparent, #000000)',
        zIndex: 1
      }}
    />
  );
}