import React from 'react';
import { SplineScene } from './hero/SplineScene';
import { HeroContent } from './hero/HeroContent';
import { HeroTransition } from './transitions/HeroTransition';

export function Hero() {
  const scrollToDemo = () => {
    const demoSection = document.querySelector('#book-demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden">
      <SplineScene />
      <HeroContent onGetStarted={scrollToDemo} />
      <HeroTransition />
    </div>
  );
}