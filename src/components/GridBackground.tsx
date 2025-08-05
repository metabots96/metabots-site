import React from 'react';

interface GridBackgroundProps {
  children: React.ReactNode;
  blur?: {
    width?: string;
    height?: string;
    top?: string;
    left?: string;
  };
}

export function GridBackground({ children, blur }: GridBackgroundProps) {
  return (
    <div className="relative overflow-hidden">
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

      {/* Purple glow effect */}
      {blur && (
        <div 
          className="absolute opacity-40 blur-[100px] rounded-full bg-[#6E44FF]"
          style={{
            width: blur.width || '800px',
            height: blur.height || '400px',
            top: blur.top || '50%',
            left: blur.left || '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}