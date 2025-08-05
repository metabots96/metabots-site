import React from 'react';

interface SectionTransitionProps {
  direction?: 'top' | 'bottom';
  startColor?: string;
  endColor?: string;
  height?: string;
  className?: string;
}

export function SectionTransition({
  direction = 'bottom',
  startColor = '#000000',
  endColor = 'transparent',
  height = '300px',
  className = '',
}: SectionTransitionProps) {
  return (
    <div 
      className={`absolute left-0 right-0 pointer-events-none ${className}`}
      style={{
        height,
        [direction === 'top' ? 'top' : 'bottom']: 0,
        background: `linear-gradient(to ${direction === 'top' ? 'bottom' : 'top'}, 
          ${startColor},
          ${startColor}cc,
          ${startColor}99,
          ${startColor}66,
          ${startColor}33,
          ${endColor}
        )`,
        zIndex: 2
      }}
    />
  );
}