import React from 'react';

export function HeroBackground() {
  return (
    <>
      {/* Base gradient background */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'radial-gradient(circle at top, #6E44FF, #2B124C, #10031A)'
        }}
      />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem'
        }}
      />

      {/* Purple glow effect behind title */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#6E44FF] opacity-20 blur-[100px] rounded-full" 
      />

      {/* Smooth transition to black at bottom */}
      <div 
        className="absolute inset-x-0 bottom-0 h-[400px] pointer-events-none"
        style={{
          background: `linear-gradient(
            to top,
            #000000 0%,
            rgba(0, 0, 0, 0.95) 20%,
            rgba(0, 0, 0, 0.8) 40%,
            rgba(0, 0, 0, 0.4) 70%,
            transparent 100%
          )`
        }}
      />
    </>
  );
}