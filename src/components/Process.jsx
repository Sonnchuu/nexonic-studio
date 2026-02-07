import React from 'react';
import ScrollReveal from './ScrollReveal';

const steps = [
  {
    id: '01',
    name: 'Listen',
    description: 'Understanding constraints.',
  },
  {
    id: '02',
    name: 'Define',
    description: 'Setting coordinates.',
  },
  {
    id: '03',
    name: 'Create',
    description: 'Building the structure.',
  },
  {
    id: '04',
    name: 'Refine',
    description: 'Polishing the surface.',
  },
];

const Process = () => {
  return (
    <div id="process" className="bg-white text-min-black border-b border-min-black">
      {/* Header */}
      <div className="border-b border-min-black px-4 sm:px-8 lg:px-12 py-8 sm:py-12 flex justify-between items-end">
        <ScrollReveal>
          <h2 className="font-sans text-4xl sm:text-6xl md:text-8xl font-medium tracking-tighter uppercase">
            Process
          </h2>
        </ScrollReveal>
        <span className="font-mono text-sm tracking-widest hidden md:block">WORK/FLOW</span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4">
        {steps.map((step, index) => (
          <ScrollReveal
            key={step.id}
            delay={index * 0.1}
            className="group relative h-72 sm:h-80 md:h-96 p-6 flex flex-col justify-between border-b border-min-black md:border-b-0 md:border-r md:last:border-r-0 last:border-b-0 hover:bg-[#282828] hover:text-white transition-colors duration-500"
          >
            <div className="flex justify-between items-start">
              <span className="font-mono text-xs tracking-widest border border-current rounded-full px-2 py-1">
                {step.id}
              </span>
            </div>

            <div className="mt-auto">
              <h3 className="font-sans text-2xl font-medium uppercase tracking-tight mb-4">
                {step.name}
              </h3>
              <p className="font-sans text-sm font-light leading-relaxed max-w-[200px]">
                {step.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default Process;
