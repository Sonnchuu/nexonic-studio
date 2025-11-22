import React from 'react';
import { motion } from 'framer-motion';

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

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-20 px-4 sm:px-6 lg:px-8">
          <main className="mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl tracking-tight font-black text-alt-black sm:text-5xl md:text-6xl"
              >
                <span className="block xl:inline">We Build Websites</span>{' '}
                <span className="block text-alt-red xl:inline">That Perform.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-3 text-base text-alt-neutral font-medium sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-sans"
              >
                Premium websites for brands, businesses and creators who want real results — not just another template.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start"
              >
                <div className="">
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center px-8 py-4 border-4 border-black text-lg font-black text-white bg-alt-red hover:bg-white hover:text-alt-black transition-all shadow-neo hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px]"
                  >
                    Start Your Project →
                  </a>
                </div>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 3 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-white border-l-2 border-black flex items-center justify-center relative overflow-hidden"
      >

        {/* Clean brutalist square outline */}
        <div className="absolute w-[260px] h-[260px] border-[7px] border-gray-400 opacity-40 transform rotate-12 top-[20%] right-[18%]"></div>

        {/* Red accent circle */}
        <div className="absolute w-20 h-20 bg-alt-red border-[6px] border-black rounded-full shadow-[6px_6px_0px_#000] top-[14%] right-[10%]"></div>

        {/* Guide line pointing toward headline */}
        <div className="absolute w-[340px] h-[5px] bg-alt-red transform rotate-[-15deg] top-[60%] right-[12%] shadow-[4px_4px_0px_#000]"></div>

    </motion.div>

    </div>
  );
};

export default Hero;
