import React from 'react';
import { PricingHeader } from './pricing/PricingHeader';
import { PricingGrid } from './pricing/PricingGrid';
import { PricingFooter } from './pricing/PricingFooter';
import { GridBackground } from './GridBackground';
import { SectionTransition } from './transitions/SectionTransition';

export function Pricing() {
  return (
    <div id="pricing" className="relative bg-black">
      {/* Top transition - improved center fade */}
      <div 
        className="absolute left-0 right-0 top-0 pointer-events-none"
        style={{
          height: '300px',
          background: `
            radial-gradient(ellipse 200% 60% at center top, 
              #000000 0%,
              rgba(0,0,0,0.9) 20%,
              rgba(0,0,0,0.7) 40%,
              rgba(0,0,0,0.4) 60%,
              rgba(0,0,0,0.15) 80%,
              transparent 100%
            ),
            linear-gradient(to bottom, 
              #000000 0%,
              rgba(0,0,0,0.8) 30%,
              rgba(0,0,0,0.5) 60%,
              rgba(0,0,0,0.2) 80%,
              transparent 100%
            )
          `,
          zIndex: 2
        }}
      />
      
      <GridBackground>
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PricingHeader />
            <PricingGrid />
            <PricingFooter />
          </div>
        </div>
      </GridBackground>

      {/* Bottom transition - improved center fade */}
      <div 
        className="absolute left-0 right-0 bottom-0 pointer-events-none"
        style={{
          height: '400px',
          background: `
            radial-gradient(ellipse 200% 60% at center bottom, 
              #000000 0%,
              rgba(0,0,0,0.9) 20%,
              rgba(0,0,0,0.7) 40%,
              rgba(0,0,0,0.4) 60%,
              rgba(0,0,0,0.15) 80%,
              transparent 100%
            ),
            linear-gradient(to top, 
              #000000 0%,
              rgba(0,0,0,0.8) 30%,
              rgba(0,0,0,0.5) 60%,
              rgba(0,0,0,0.2) 80%,
              transparent 100%
            )
          `,
          zIndex: 2
        }}
      />
    </div>
  );
}