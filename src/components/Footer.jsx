import React from 'react';
import ScrollReveal from './ScrollReveal';

const Footer = () => {
  return (
    <footer className="bg-white text-min-black">
      <div className="grid grid-cols-1 md:grid-cols-4 border-b border-min-black">
        {/* Brand */}
        <div className="col-span-1 md:col-span-2 p-8 border-r border-min-black flex items-center">
          <ScrollReveal>
            <span className="font-sans text-xl font-medium tracking-tight uppercase">Nexonic Studio</span>
          </ScrollReveal>
        </div>

        {/* Social Links */}
        <div className="p-8 border-r border-min-black flex flex-col justify-center">
          <ScrollReveal delay={0.1}>
            <span className="font-mono text-xs tracking-widest mb-4 opacity-50">SOCIAL</span>
            <div className="flex flex-col space-y-2">
              {['Instagram', 'Twitter', 'LinkedIn'].map((link) => (
                <a key={link} href="#" className="font-sans text-sm uppercase hover:underline decoration-1 underline-offset-4 w-max">
                  {link}
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Copyright */}
        <div className="p-8 flex flex-col justify-center">
          <ScrollReveal delay={0.2}>
            <span className="font-mono text-xs tracking-widest mb-4 opacity-50">LEGAL</span>
            <span className="font-sans text-sm uppercase">&copy; 2026 NEXONIC</span>
            <span className="font-sans text-sm uppercase text-min-black/50">All Rights Reserved</span>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
