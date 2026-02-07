import React from "react";
import { motion as Motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const Hero = () => {
  return (
    <div className="relative bg-white min-h-screen flex flex-col pt-20 text-min-black">
      {/* Grid Container */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 border-b border-min-black">
        {/* Left Cell: Main Title */}
        <div className="lg:col-span-7 lg:border-r border-min-black p-6 sm:p-10 lg:px-8 lg:py-12 flex flex-col justify-between overflow-hidden">
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
            className="mt-10 sm:mt-12 font-project-blackbird font-medium text-[clamp(4.45rem,16vw,7.35rem)] lg:text-[clamp(5.82rem,8vw,8rem)] tracking-tighter leading-[0.84] uppercase"
          >
            Constructing
            <br />
            Digital
            <br />
            Reality
          </Motion.h1>

          <div className="hidden lg:block">{/* Spacer */}</div>
        </div>

        {/* Right Column: Sub-grid */}
        <div className="lg:col-span-5 grid grid-rows-[auto_auto] lg:grid-rows-2 border-t lg:border-t-0 border-min-black">
          {/* Top Right: Description */}
          <div className="border-b border-min-black p-6 sm:p-8 lg:p-12 flex flex-col justify-center hover:bg-[#282828] hover:text-white transition-colors duration-500 group min-h-[220px] sm:min-h-[260px] lg:min-h-0">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2,
              }}
            >
              <p className="font-sans text-lg sm:text-xl lg:text-2xl font-light leading-relaxed max-w-md">
                We engineer precise, high-performance digital experiences.
                Stripped of excess. Built for impact.
              </p>
            </Motion.div>
            <div className="mt-6 sm:mt-8 font-mono text-xs tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
              {"-> READ MANIFESTO"}
            </div>
          </div>

          {/* Bottom Right: CTA */}
          <div className="p-0 flex flex-col sm:flex-row">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.3,
              }}
              className="flex-1 flex border-b sm:border-b-0 sm:border-r border-min-black min-h-[140px] sm:min-h-[180px]"
            >
              <a
                href="#contact"
                className="w-full h-full flex items-center justify-center p-8 sm:p-12 hover:bg-[#282828] hover:text-white transition-colors duration-500 group cursor-pointer"
              >
                <span className="font-sans text-xl sm:text-2xl font-medium tracking-tight group-hover:underline decoration-1 underline-offset-4">
                  Start Project
                </span>
              </a>
            </Motion.div>
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.4,
              }}
              className="flex-1 flex min-h-[140px] sm:min-h-[180px]"
            >
              <a
                href="#portfolio"
                className="w-full h-full flex items-center justify-center p-8 sm:p-12 hover:bg-[#282828] hover:text-white transition-colors duration-500 group cursor-pointer"
              >
                <span className="font-sans text-xl sm:text-2xl font-medium tracking-tight group-hover:underline decoration-1 underline-offset-4">
                  View Work
                </span>
              </a>
            </Motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Strip */}
      <div className="w-full border-b border-min-black py-3 sm:py-4 px-4 sm:px-6 flex justify-between items-center text-[10px] sm:text-xs font-mono tracking-widest uppercase">
        <span>Amsterdam, NL</span>
        <span className="hidden sm:block">Scroll for System</span>
        <span>v2.0.4</span>
      </div>
    </div>
  );
};

export default Hero;
