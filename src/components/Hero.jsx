import React from 'react';
import { motion as Motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative bg-alt-white overflow-hidden border-b-2 border-black">
      {/* Background Grid Pattern - Checkerboard */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ 
             backgroundImage: 'radial-gradient(#000000 1px, transparent 1px), radial-gradient(#000000 1px, transparent 1px)', 
             backgroundSize: '40px 40px',
             backgroundPosition: '0 0, 20px 20px'
           }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[7fr,3fr] gap-12 items-start pt-32 pb-20">
          <div className="space-y-6 max-w-3xl mx-auto lg:text-left">
            <Motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-6xl lg:text-[5vw] font-black leading-[0.85]"
            >
              <span className="block">Performance websites for brands built to scale.</span>
              <span className="block text-alt-red">Real metrics. Real growth. No guessing.</span>
            </Motion.h1>
            <Motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="text-xl sm:text-2xl font-semibold text-alt-neutral space-y-2"
            >
              <span className="block">Fast delivery — always on time.</span>
              <span className="block">Revenue tracked — every build drives measurable growth.</span>
              <span className="block">Trusted across EU — proven results for scaling brands.</span>
            </Motion.p>
            <Motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="flex flex-col gap-3"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-14 py-5 text-xl font-black uppercase tracking-wide text-white bg-alt-red border-4 border-black hover:bg-[#E20000] transition-colors"
              >
                Book Free Consultation
              </a>
              <a
                href="#portfolio"
                className="text-lg font-black text-alt-black underline-offset-4 hover:text-alt-red hover:underline"
              >
                See Case Studies →
              </a>
              <div className="border border-black px-4 py-3 text-xs sm:text-sm font-semibold uppercase text-alt-neutral">
                ★★★★★ 17+ successful launches across EU
              </div>
            </Motion.div>
          </div>
          <div className="hidden lg:block" />
        </div>
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 text-xs sm:text-sm font-black uppercase text-alt-black text-center"
        >
          Websites for: E-commerce • SaaS • Service studios • B2B platforms
        </Motion.div>
        <div className="h-8" />
      </div>
    </div>
  );
};

export default Hero;
