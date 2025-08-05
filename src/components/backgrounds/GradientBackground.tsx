import React from 'react';

interface GradientBackgroundProps {
  children: React.ReactNode;
  glowConfig?: {
    width?: string;
    height?: string;
    opacity?: string;
    blur?: string;
  };
  gridConfig?: {
    size?: string;
    opacity?: string;
    color?: string;
    width?: string;
    height?: string;
  };
}

export function GradientBackground({ 
  children, 
  glowConfig = {}, 
  gridConfig = {} 
}: GradientBackgroundProps) {
  const {
    width = '600px',
    height = '800px',
    opacity = '0.3',
    blur = '120px'
  } = glowConfig;

  const {
    size = '2rem',
    opacity: gridOpacity = '0.2',
    color = 'rgba(192, 132, 252, 0.2)',
    width: gridWidth = '100%',
    height: gridHeight = '100%'
  } = gridConfig;

  return (
    <div className="relative">
      {/* Grid gradient background */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: gridWidth,
          height: gridHeight,
          backgroundImage: `
            linear-gradient(to right, ${color} 1px, transparent 1px),
            linear-gradient(to bottom, ${color} 1px, transparent 1px)
          `,
          backgroundSize: `${size} ${size}`,
          opacity: gridOpacity,
        }}
      />

      {/* Main purple glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width,
          height,
          background: 'linear-gradient(225deg, #c084fc 0%, #6E44FF 100%)',
          opacity,
          filter: `blur(${blur})`,
          borderRadius: '50%',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}