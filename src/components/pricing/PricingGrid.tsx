import React from 'react';
import { PricingCard } from './PricingCard';
import { pricingPlans } from './pricingPlans';
import { PricingBackground } from './PricingBackground';

export function PricingGrid() {
  return (
    <PricingBackground>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.title} {...plan} />
        ))}
      </div>
    </PricingBackground>
  );
}