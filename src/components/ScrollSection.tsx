import React from 'react';

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollSection({ children, className = '' }: ScrollSectionProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}