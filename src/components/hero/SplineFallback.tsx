import React from 'react';

export function SplineFallback() {
  return (
    <div 
      className="absolute inset-0"
      style={{
        background: 'radial-gradient(circle at top, #6E44FF, #2B124C, #10031A)'
      }}
    />
  );
}