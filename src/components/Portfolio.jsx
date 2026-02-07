import React from 'react';
import ScrollReveal from './ScrollReveal';
import { motion as Motion } from 'framer-motion';

const projects = [
  {
    id: '001',
    title: 'Stay True',
    category: 'Fashion',
    year: '2025',
  },
  {
    id: '002',
    title: 'Turnover',
    category: 'Agency',
    year: '2024',
  },
  {
    id: '003',
    title: 'Ingame',
    category: 'Sport',
    year: '2024',
  },
  {
    id: '004',
    title: 'Craftora',
    category: 'Retail',
    year: '2023',
  },
];

const Portfolio = () => {
  return (
    <div id="portfolio" className="bg-white text-min-black border-b border-min-black">
      {/* Header */}
      <div className="border-b border-min-black px-4 sm:px-8 lg:px-12 py-8 sm:py-12 flex justify-between items-end">
        <ScrollReveal>
          <h2 className="font-sans text-4xl sm:text-6xl md:text-8xl font-medium tracking-tighter uppercase">
            Selected Work
          </h2>
        </ScrollReveal>
        <span className="font-mono text-sm tracking-widest hidden md:block">INDEX/2026</span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => (
          <ScrollReveal
            key={project.id}
            delay={index * 0.1}
            className={`
              group relative md:border-r border-min-black border-b border-min-black 
              ${index >= projects.length - 2 ? 'md:border-b-0' : ''}
              md:last:border-r-0 md:even:border-r-0
              last:border-b-0
              aspect-[4/3] flex flex-col justify-between p-6 sm:p-8 overflow-hidden
              hover:bg-min-black hover:text-white transition-colors duration-500 cursor-pointer
            `}
          >
            <div className="flex justify-between items-start z-10 relative">
              <span className="font-mono text-xs tracking-widest">{project.id}</span>
              <span className="font-mono text-xs tracking-widest">{project.year}</span>
            </div>

            {/* Image Placeholder / Hover Reveal */}
            <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>

            <div className="z-10 relative">
              <h3 className="font-sans text-4xl sm:text-5xl md:text-6xl font-medium tracking-tighter uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {project.title}
              </h3>
              <p className="font-mono text-sm uppercase tracking-widest opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {project.category}
              </p>
            </div>

            {/* Large Arrow on Hover */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-60 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M5 35L35 5M35 5H5M35 5V35" />
              </svg>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
