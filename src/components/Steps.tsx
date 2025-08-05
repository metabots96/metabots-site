import React from 'react';
import { Phone, Dumbbell, CheckCircle } from 'lucide-react';
import { StepArrow } from './StepArrow';
import { GradientBackground } from './backgrounds/GradientBackground';
import { SectionTransition } from './transitions/SectionTransition';

const steps = [
  {
    title: 'Discovery Call',
    description: 'A 10-minute phone call to learn about our services and determine if we\'re the right fit for your practice.',
    icon: Phone,
  },
  {
    title: 'Train',
    description: 'Let our team customize the AI\'s knowledge base specifically for your practice.',
    icon: Dumbbell,
  },
  {
    title: 'Watch',
    description: 'Sit back and let AI do the work',
    icon: CheckCircle,
  },
];

export function Steps() {
  return (
    <div className="relative bg-black">
      {/* Top transition */}
      <SectionTransition direction="top" />

      <GradientBackground
        glowConfig={{
          width: '1200px',
          height: '600px',
          opacity: '0.4',
          blur: '140px'
        }}
        gridConfig={{
          size: '2rem',
          opacity: '0.15',
          color: 'rgba(192, 132, 252, 0.3)',
          width: '1000px',
          height: '400px'
        }}
      >
        <div className="relative z-10 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-white">How It Works</h2>
              <p className="mt-4 text-xl text-gray-400">Three simple steps to transform your business</p>
            </div>

            <div className="mt-24">
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-2">
                  {steps.map((step, index) => (
                    <React.Fragment key={step.title}>
                      <div className="relative w-full md:w-[280px] group">
                        <div className="
                          h-[280px] p-8 rounded-2xl 
                          bg-gray-800/80 border border-gray-700 
                          flex flex-col
                          transition-all duration-300 ease-in-out
                          group-hover:border-[#c084fc]
                          group-hover:bg-gray-800/90
                          group-hover:transform group-hover:-translate-y-1
                          group-hover:shadow-lg group-hover:shadow-[#c084fc]/10
                        ">
                          <div className="
                            mx-auto w-16 h-16 rounded-full 
                            bg-[#c084fc] p-0.5
                            transition-transform duration-300
                            group-hover:scale-110
                          ">
                            <div className="
                              flex items-center justify-center 
                              w-full h-full rounded-full 
                              bg-gray-800
                              transition-colors duration-300
                              group-hover:bg-gray-900
                            ">
                              <step.icon className="
                                h-8 w-8 text-[#c084fc]
                                transition-transform duration-300
                                group-hover:scale-110
                              " />
                            </div>
                          </div>
                          
                          <div className="mt-6 text-center flex-1 flex flex-col justify-between">
                            <h3 className="
                              text-xl font-bold text-white mb-3
                              transition-colors duration-300
                              group-hover:text-[#c084fc]
                            ">
                              {step.title}
                            </h3>
                            <p className="
                              text-gray-400
                              transition-colors duration-300
                              group-hover:text-gray-300
                            ">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      {index < steps.length - 1 && <StepArrow />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </GradientBackground>

      {/* Bottom transition */}
      <SectionTransition direction="bottom" />
    </div>
  );
}