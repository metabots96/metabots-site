import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';

interface PricingCardProps {
  title: string;
  subtext: string;
  price: string;
  recurring?: string;
  features: string[];
  cta: string;
  badge?: string;
  highlighted?: boolean;
}

export function PricingCard({
  title,
  subtext,
  price,
  recurring,
  features,
  cta,
  badge,
  highlighted,
}: PricingCardProps) {
  return (
    <div className={`
      relative
      rounded-2xl
      bg-gray-800/80
      border
      ${highlighted 
        ? 'border-[#c084fc] shadow-lg shadow-[#c084fc]/20' 
        : 'border-gray-700'
      }
      overflow-hidden
      transition-all
      duration-300
      flex
      flex-col
      h-full
    `}>
      {badge && (
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#c084fc] text-white">
            {badge}
          </span>
        </div>
      )}

      <div className="p-8 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400 mb-6">{subtext}</p>

          <div className="mb-8">
            <div className="flex items-baseline">
              <span className="text-4xl font-extrabold text-white">{price}</span>
              {recurring && (
                <span className="ml-2 text-xl text-gray-400">
                  + {recurring}
                </span>
              )}
            </div>
          </div>

          <ul className="space-y-4 mb-8">
            {features.map((feature) => (
              <li key={feature} className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[#c084fc]/20 flex items-center justify-center">
                  <Check className="h-4 w-4 text-[#c084fc]" />
                </span>
                <span className="ml-3 text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          <Button className="w-full justify-center">
            {cta}
          </Button>
        </div>
      </div>
    </div>
  );
}