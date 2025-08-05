import React from 'react';

export function ComingSoonBanner() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute -right-[50%] top-[40%] w-[200%] h-12 bg-gray-400/50 rotate-[45deg] flex items-center justify-center"
      >
        <span className="text-white font-semibold text-lg">Coming Soon</span>
      </div>
    </div>
  );
}