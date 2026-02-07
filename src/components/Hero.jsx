import React from 'react';
import { motion as Motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const Hero = () => {
  return (
    <div className="relative bg-white min-h-screen flex flex-col pt-20 text-min-black">
      {/* Grid Container */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 border-b border-min-black">

        {/* Left Cell: Main Title */}
        <div className="border-r border-min-black p-6 sm:p-12 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="font-mono text-sm tracking-widest border border-min-black rounded-full px-3 py-1">
              EST. 2026
            </span>
            <span className="font-mono text-sm tracking-widest hidden sm:block">
              DIGITAL / MATTER
            </span>
          </div>

          <Motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 font-sans font-medium text-7xl sm:text-8xl lg:text-9xl tracking-tighter leading-[0.85] uppercase"
          >
            Constructing<br />
            Digital<br />
            Reality
          </Motion.h1>

          <div className="hidden lg:block">
            {/* Spacer */}
          </div>
        </div>

        {/* Right Column: Sub-grid */}
        <div className="grid grid-rows-2">
          {/* Top Right: Description */}
          <div className="border-b border-min-black p-6 sm:p-12 flex flex-col justify-center hover:bg-min-black hover:text-white transition-colors duration-500 group">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <p className="font-sans text-xl sm:text-2xl font-light leading-relaxed max-w-md">
                We engineer precise, high-performance digital experiences. Stripped of excess. Built for impact.
              </p>
            </Motion.div>
            <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
              -> READ MANIFESTO
            </div>
          </div>

          {/* Bottom Right: CTA */}
          <div className="p-0 flex flex-col sm:flex-row">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="flex-1 flex border-r border-min-black border-b sm:border-b-0"
            >
              <a href="#contact" className="w-full h-full flex items-center justify-center p-12 hover:bg-min-black hover:text-white transition-colors duration-300 group cursor-pointer">
                <span className="font-sans text-2xl font-medium tracking-tight group-hover:underline decoration-1 underline-offset-4">
                  Start Project
                </span>
              </a>
            </Motion.div>
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="flex-1 flex"
            >
              <a href="#portfolio" className="w-full h-full flex items-center justify-center p-12 hover:bg-min-black hover:text-white transition-colors duration-300 group cursor-pointer">
                <span className="font-sans text-2xl font-medium tracking-tight group-hover:underline decoration-1 underline-offset-4">
                  View Work
                </span>
              </a>
            </Motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Strip */}
      <div className="w-full border-b border-min-black py-4 px-6 flex justify-between items-center text-xs font-mono tracking-widest uppercase">
        <span>Amsterdam, NL</span>
        <span>Scroll for System</span>
        <span>v2.0.4</span>
      </div>
    </div>
  );
};

export default Hero;
