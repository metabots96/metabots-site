import React from 'react';

interface PricingBackgroundProps {
  children: React.ReactNode;
}

export function PricingBackground({ children }: PricingBackgroundProps) {
  return (
    <div className="relative">
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}