import React from 'react';
import ScrollReveal from './ScrollReveal';

const features = [
  {
    id: '01',
    title: 'Clarity',
    description: 'We cut through the noise.',
  },
  {
    id: '02',
    title: 'Precision',
    description: 'Every pixel serves a purpose.',
  },
  {
    id: '03',
    title: 'Speed',
    description: 'Performance is a feature.',
  },
  {
    id: '04',
    title: 'Growth',
    description: 'Design that scales with you.',
  },
];

const WhyUs = () => {
  return (
    <div className="bg-white text-min-black border-b border-min-black">
      {/* Header */}
      <div className="border-b border-min-black px-6 sm:px-8 lg:px-12 py-12 flex justify-between items-end">
        <ScrollReveal>
          <h2 className="font-sans text-6xl md:text-8xl font-medium tracking-tighter uppercase">
            Philosophy
          </h2>
        </ScrollReveal>
        <span className="font-mono text-sm tracking-widest hidden md:block">CORE/VAL</span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <ScrollReveal
            key={feature.id}
            delay={index * 0.1}
            className="group h-64 p-8 border-r border-min-black last:border-r-0 border-b lg:border-b-0 flex flex-col justify-between hover:bg-min-black hover:text-white transition-colors duration-300"
          >
            <span className="font-mono text-xs tracking-widest border border-current rounded-full w-6 h-6 flex items-center justify-center">
              {feature.id}
            </span>

            <div>
              <h3 className="font-sans text-2xl font-medium uppercase tracking-tight mb-2">
                {feature.title}
              </h3>
              <p className="font-mono text-xs uppercase tracking-widest opacity-70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
