import React from 'react';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    id: '00-1',
    title: 'Web Design',
    description: 'User-centric interfaces.',
  },
  {
    id: '00-2',
    title: 'UX/UI Design',
    description: 'Functional aesthetics.',
  },
  {
    id: '00-3',
    title: 'Creative Design',
    description: 'Brand evolution.',
  },
  {
    id: '00-4',
    title: 'Product Design',
    description: 'Systematic thinking.',
  },
  {
    id: '00-5',
    title: 'Development',
    description: 'Clean, scalable code.',
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-white text-min-black">
      {/* Header Section */}
      <div className="border-b border-min-black px-4 sm:px-8 lg:px-12 py-8 sm:py-12 flex justify-between items-end">
        <ScrollReveal>
          <h2 className="font-sans text-4xl sm:text-6xl md:text-8xl font-medium tracking-tighter uppercase">
            Services
          </h2>
        </ScrollReveal>
        <span className="font-mono text-sm tracking-widest hidden md:block">DSGN/4</span>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-min-black">
        {services.map((service, index) => (
          <ScrollReveal
            key={service.id}
            delay={index * 0.1}
            className={`
              group relative h-64 sm:h-72 lg:h-80 p-5 sm:p-6 flex flex-col justify-between
              border-b border-min-black md:border-r
              ${index === services.length - 1 ? 'md:col-span-2 lg:col-span-4 md:border-r-0' : ''}
              md:last:border-r-0
              last:border-b-0
              hover:bg-[#282828] hover:text-white transition-colors duration-500 cursor-default
            `}
          >
            {/* Number */}
            <span className="font-mono text-xs tracking-widest opacity-70 group-hover:opacity-100">
              {service.id}
            </span>

            {/* Content */}
            <div>
              <h3 className="font-sans text-3xl font-medium uppercase tracking-tight mb-2">
                {service.title}
              </h3>
              {/* Description reveals on hover or sits there nicely */}
              <p className="font-sans text-sm font-light opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                {service.description}
              </p>
            </div>

            {/* Arrow Icon */}
            <div className="absolute top-6 right-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 14L14 1M14 1H1M14 1V14" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Services;
