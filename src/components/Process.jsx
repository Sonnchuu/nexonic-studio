import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: '01',
    name: 'Discovery Call',
    description: 'We learn your goals, audience and project requirements.',
  },
  {
    id: '02',
    name: 'Wireframe',
    description: 'We map out the structure, layout and flow.',
  },
  {
    id: '03',
    name: 'Design',
    description: 'We create the full visual direction, UI and branding.',
  },
  {
    id: '04',
    name: 'Development',
    description: 'We build a clean, fast and optimized website.',
  },
  {
    id: '05',
    name: 'Launch',
    description: 'Testing, final polish and going live.',
  },
  {
    id: '06',
    name: 'Support',
    description: 'Ongoing improvements, updates and growth.',
  },
];

const Process = () => {
  return (
    <div id="process" className="bg-alt-white py-24 border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-alt-red font-black tracking-wide uppercase border-b-4 border-alt-red inline-block pb-1">Process</h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-4 text-4xl leading-8 font-black tracking-tight text-alt-black sm:text-5xl"
          >
            HOW WE WORK
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative border-4 border-black p-6 hover:shadow-neo transition-all duration-300 group bg-white hover:-translate-y-1"
            >
              <div className="absolute -top-5 -left-5 bg-alt-red text-white font-black text-xl w-12 h-12 flex items-center justify-center border-4 border-black shadow-neo-sm">
                {step.id}
              </div>
              <h3 className="mt-6 text-xl font-black text-alt-black uppercase">{step.name}</h3>
              <p className="mt-2 text-alt-neutral font-bold">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
