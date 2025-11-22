import React from 'react';
import { motion } from 'framer-motion';

const packages = [
  {
    name: 'BASIC',
    price: '900 лв',
    description: 'Perfect for small businesses and starters.',
    features: [
      '1 Page Website',
      'Mobile Optimization',
      'Clean Template Design',
      'Contact Integration',
      'Basic SEO Setup',
      'GDPR Pages (Cookies, Terms)',
      '7 Days Support'
    ],
    time: '1 day',
    highlight: false,
  },
  {
    name: 'STANDARD',
    price: '1550 лв',
    description: 'For growing businesses needing custom design.',
    features: [
      'Custom Design',
      '3 Pages (Home, About, Services)',
      'Brand Styling',
      'Contact & Forms',
      'Speed Optimization',
      'SEO Setup',
      '1 Month Support'
    ],
    time: '3-5 days',
    highlight: true,
  },
  {
    name: 'PREMIUM',
    price: '3500+ лв',
    description: 'For brands that want a full custom experience.',
    features: [
      'Custom React / Next.js Website',
      'Full UI/UX Design',
      'E-Commerce or Booking System',
      'API Integrations',
      'Copywriting',
      'Design System + Brand Guidelines',
      'Advanced Speed Optimization',
      'Analytics & Tracking Setup',
      '30 Days Support',
      'Growth Consulting'
    ],
    time: 'Custom',
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <div id="pricing" className="relative bg-alt-white py-24 border-b-4 border-black overflow-hidden">
      {/* Background Grid Pattern - Checkerboard */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ 
             backgroundImage: 'radial-gradient(#000000 1px, transparent 1px), radial-gradient(#000000 1px, transparent 1px)', 
             backgroundSize: '40px 40px',
             backgroundPosition: '0 0, 20px 20px'
           }}>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-base text-alt-red font-black tracking-wide uppercase border-b-4 border-alt-red inline-block pb-1">PRICING</h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-4 text-4xl leading-8 font-black tracking-tight text-alt-black sm:text-5xl"
          >
            CHOOSE YOUR WEAPON
          </motion.p>
          <p className="mt-4 max-w-2xl text-xl text-alt-neutral font-medium mx-auto">
            Transparent pricing. No hidden fees.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex flex-col border-4 border-black bg-white p-8 transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none ${
                pkg.highlight ? 'shadow-neo-red' : 'shadow-neo'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 right-0 -mt-6 -mr-6 bg-alt-red text-white font-black px-6 py-2 border-4 border-black transform rotate-6 shadow-sm">
                  BEST SELLER
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-2xl font-black text-alt-black uppercase border-b-4 border-black pb-2 inline-block">
                  {pkg.name}
                </h3>
                <p className="mt-6 flex items-baseline text-alt-red">
                  <span className="text-5xl font-black tracking-tight">{pkg.price}</span>
                </p>
                <p className="mt-6 text-alt-neutral font-bold">{pkg.description}</p>

                <ul role="list" className="mt-6 space-y-4">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 bg-alt-black flex items-center justify-center border-2 border-black">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="ml-3 text-alt-neutral font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <div className="text-center text-sm text-alt-neutral font-bold mb-4 uppercase tracking-wider">Delivery: {pkg.time}</div>
                <a
                  href="#contact"
                  className={`w-full block text-center px-6 py-4 border-4 border-black font-black text-lg uppercase tracking-wide ${
                    pkg.highlight
                      ? 'bg-alt-red text-white hover:bg-white hover:text-alt-black'
                      : 'bg-alt-black text-white hover:bg-white hover:text-alt-black'
                  } transition-all`}
                >
                  Select Plan
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
