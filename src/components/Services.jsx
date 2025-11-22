import React from 'react';
import { motion } from 'framer-motion';

const servicesList = [
  {
    title: 'Website Design & Development',
    description: 'Custom websites built for speed, clarity and impact.',
  },
  {
    title: 'Business Websites',
    description: 'For companies needing branding, credibility and conversions.',
  },
  {
    title: 'E-Commerce Stores',
    description: 'High-performance online shops for any product-based business.',
  },
  {
    title: 'Portfolio Websites',
    description: 'Designed for creators, influencers and professionals who need a strong personal brand.',
  },
  {
    title: 'Landing Pages',
    description: 'Optimized for campaigns, launches and conversions.',
  },
  {
    title: 'Booking & Scheduling Systems',
    description: 'Perfect for salons, clinics, services and appointments.',
  },
  {
    title: 'Branding & Copywriting',
    description: 'Strong visuals and words that build trust.',
  },
  {
    title: 'Technical SEO',
    description: 'Fast-loading, optimized foundations so Google actually finds you.',
  },
  {
    title: 'Maintenance & Support',
    description: 'Updates, improvements and peace of mind.',
  },
];

const Services = () => {
  return (
    <div id="services" className="relative bg-alt-white py-24 border-b-4 border-black overflow-hidden">
      {/* Background Grid Pattern - Checkerboard */}
      {/* <div className="absolute inset-0 z-0 opacity-10" 
           style={{ 
             backgroundImage: 'radial-gradient(#000000 1px, transparent 1px), radial-gradient(#000000 1px, transparent 1px)', 
             backgroundSize: '40px 40px',
             backgroundPosition: '0 0, 20px 20px'
           }}>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-base text-alt-red font-black tracking-wide uppercase border-b-4 border-alt-red inline-block pb-1">SERVICES</h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-4 text-4xl leading-8 font-black tracking-tight text-alt-black sm:text-5xl"
          >
            What We Build
          </motion.p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative border-4 border-black bg-white p-8 shadow-neo hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
            >
              <h3 className="text-xl font-black text-alt-black uppercase mb-4">
                {service.title}
              </h3>
              <p className="text-alt-neutral font-bold">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
