import React, { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm' : 'bg-white'} border-b border-min-black`}>
      <div className="grid grid-cols-2 md:grid-cols-12 h-20 items-stretch">

        {/* Logo Section */}
        <div className="md:col-span-3 border-r border-min-black flex items-center px-6 sm:px-8">
          <a href="#" className="font-sans text-xl font-medium tracking-tighter uppercase z-50 relative">
            Nexonic Studio
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:col-span-6 items-center justify-center border-r border-min-black">
          <div className="flex space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-sm font-medium uppercase tracking-wide hover:text-min-gray transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* CTA / Mobile Menu Toggle */}
        <div className="md:col-span-3 flex items-center justify-end px-6 sm:px-8">
          <a
            href="#contact"
            className="hidden md:flex font-mono text-xs uppercase tracking-widest border border-min-black px-6 py-2 rounded-full hover:bg-min-black hover:text-white transition-colors"
          >
            Start Project
          </a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-50 relative w-8 h-8 flex flex-col justify-center space-y-1.5 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Motion.span
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
              className="block w-full h-0.5 bg-min-black"
            />
            <Motion.span
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="block w-full h-0.5 bg-min-black"
            />
            <Motion.span
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
              className="block w-full h-0.5 bg-min-black"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full bg-white border-b border-min-black shadow-xl md:hidden flex flex-col"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="p-6 border-b border-min-black last:border-b-0 font-sans text-2xl font-medium uppercase tracking-tight hover:bg-min-black hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="p-6 bg-min-black text-white font-mono text-sm uppercase tracking-widest text-center"
            >
              Start Project
            </a>
          </Motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
