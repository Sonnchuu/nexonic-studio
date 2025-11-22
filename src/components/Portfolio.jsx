import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'UrbanSpirit Wear',
    category: 'Streetwear Brand',
    color: 'bg-purple-200',
  },
  {
    title: 'GlowLab',
    category: 'Beauty Studio',
    color: 'bg-pink-200',
  },
  {
    title: 'FitWithMiro',
    category: 'Fitness Coach',
    color: 'bg-green-200',
  },
  {
    title: 'Craftora',
    category: 'Handmade Store',
    color: 'bg-yellow-200',
  },
];

const Portfolio = () => {
  return (
    <div id="portfolio" className="relative bg-alt-white py-24 border-b-4 border-alt-black overflow-hidden">
      {/* Background Grid Pattern - Checkerboard */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ 
             backgroundImage: 'radial-gradient(#000000 1px, transparent 1px), radial-gradient(#000000 1px, transparent 1px)', 
             backgroundSize: '40px 40px',
             backgroundPosition: '0 0, 20px 20px'
           }}>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base text-alt-red font-black tracking-wide uppercase border-b-4 border-alt-red inline-block pb-1">Portfolio</h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-4 text-4xl leading-8 font-black tracking-tight text-alt-black sm:text-5xl"
          >
            RECENT WORK
          </motion.p>
          <p className="mt-4 max-w-2xl text-xl text-alt-neutral font-medium mx-auto">
            A mix of e-commerce, business websites, brand platforms and portfolio sites. Every project is custom-made.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative block border-2 border-black bg-white overflow-hidden shadow-[4px_4px_0px_0px_#000000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300"
            >
              <div className={`h-64 w-full ${project.color} flex items-center justify-center border-b-2 border-black`}>
                <span className="text-4xl font-heading font-black text-alt-black opacity-75 transform -rotate-6">
                  {project.title}
                </span>
              </div>
              <div className="p-6">
                <p className="text-sm font-bold text-alt-red uppercase tracking-wider">
                  {project.category}
                </p>
                <h3 className="mt-2 text-2xl font-black text-alt-black group-hover:text-alt-red transition-colors">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
