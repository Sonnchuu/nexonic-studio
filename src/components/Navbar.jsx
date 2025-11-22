import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b-2 border-black bg-alt-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-heading font-black text-3xl tracking-tighter text-alt-black">
              NEXONIC<span className="text-alt-red">.</span><span className="text-lg font-bold ml-1">STUDIO</span>
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#services" className="text-alt-black hover:text-alt-red font-bold text-lg transition-colors uppercase tracking-wide">Services</a>
            <a href="#portfolio" className="text-alt-black hover:text-alt-red font-bold text-lg transition-colors uppercase tracking-wide">Portfolio</a>
            <a href="#process" className="text-alt-black hover:text-alt-red font-bold text-lg transition-colors uppercase tracking-wide">Process</a>
            <a href="#contact" className="bg-alt-red text-white font-black py-3 px-6 border-2 border-black hover:bg-white hover:text-alt-black hover:border-black transition-all shadow-[4px_4px_0px_0px_#000000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] uppercase tracking-wider">
              Start Project
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-alt-black hover:text-alt-red focus:outline-none">
              <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t-4 border-black bg-alt-white absolute w-full shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <a href="#services" className="block px-3 py-2 text-alt-black hover:bg-alt-gray hover:text-alt-red font-black text-xl uppercase" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#portfolio" className="block px-3 py-2 text-alt-black hover:bg-alt-gray hover:text-alt-red font-black text-xl uppercase" onClick={() => setIsOpen(false)}>Portfolio</a>
            <a href="#process" className="block px-3 py-2 text-alt-black hover:bg-alt-gray hover:text-alt-red font-black text-xl uppercase" onClick={() => setIsOpen(false)}>Process</a>
            <a href="#contact" className="block mt-4 text-center bg-alt-red text-white font-black py-3 border-4 border-black shadow-neo active:shadow-none active:translate-x-[2px] active:translate-y-[2px]" onClick={() => setIsOpen(false)}>
              Start Project
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
