import React from 'react';
import { motion as Motion } from 'framer-motion';

const features = [
  {
    title: 'Fast Delivery',
    description: 'We work quickly without sacrificing quality. No endless waiting.',
    icon: (
      <svg className="h-8 w-8 text-alt-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Conversion Focused',
    description: 'We design with intention — clear CTAs, frictionless flow, maximum results.',
    icon: (
      <svg className="h-8 w-8 text-alt-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'SEO Ready',
    description: 'Your site is built with clean structure, speed and best technical practices.',
    icon: (
      <svg className="h-8 w-8 text-alt-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: 'Mobile First',
    description: 'Optimized for phones from day one. Over 70% of traffic is mobile — we treat it seriously.',
    icon: (
      <svg className="h-8 w-8 text-alt-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const WhyUs = () => {
  return (
    <div className="relative bg-alt-white py-24 border-b-4 border-black overflow-hidden">
      {/* Background Grid Pattern */}
      {/* <div className="absolute inset-0 z-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:text-center">
          <h2 className="text-base text-alt-red font-black tracking-wide uppercase border-b-4 border-alt-red inline-block pb-1">Why Us</h2>
          <Motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-4 text-4xl leading-8 font-black tracking-tight text-alt-black sm:text-5xl"
          >
            NOT JUST ANOTHER AGENCY
          </Motion.p>
        </div>

        <div className="mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature, index) => (
              <Motion.div 
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative border-4 border-black p-6 bg-white shadow-neo-red hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all"
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-16 w-16 border-4 border-black bg-alt-red text-white -mt-10 -ml-10 shadow-neo-sm">
                    {feature.icon}
                  </div>
                  <p className="ml-8 text-xl leading-6 font-black text-alt-black uppercase">{feature.title}</p>
                </dt>
                <dd className="mt-4 ml-8 text-base text-alt-neutral font-bold">
                  {feature.description}
                </dd>
              </Motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
