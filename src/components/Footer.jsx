import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-alt-black border-t-2 border-alt-white overflow-hidden">
      {/* Background Grid Pattern - Checkerboard */}
      {/* <div className="absolute inset-0 z-0 opacity-10" 
           style={{ 
             backgroundImage: 'radial-gradient(#DADADA 1px, transparent 1px), radial-gradient(#DADADA 1px, transparent 1px)', 
             backgroundSize: '40px 40px',
             backgroundPosition: '0 0, 20px 20px'
           }}>
      </div> */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8 relative z-10">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="#" className="text-alt-red hover:text-alt-white transition-colors">
            <span className="sr-only">Instagram</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.153-1.772c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.409-.06 3.809-.06zm0 1.838c-2.594 0-2.903.01-3.933.056-.957.043-1.48.223-1.826.357a2.924 2.924 0 00-1.053.683 2.924 2.924 0 00-.683 1.053c-.134.346-.314.869-.357 1.826-.047 1.03-.056 1.339-.056 3.933s.009 2.903.056 3.933c.043.957.223 1.48.357 1.826a2.924 2.924 0 00.683 1.053 2.924 2.924 0 001.053.683c.346.134.869.314 1.826.357 1.03.047 1.339.056 3.933.056s2.903-.009 3.933-.056c.957-.043 1.48-.223 1.826-.357a2.924 2.924 0 001.053-.683 2.924 2.924 0 00.683-1.053c.134-.346.314-.869.357-1.826.047-1.03.056-1.339.056-3.933s-.009-2.903-.056-3.933c-.043-.957-.223-1.48-.357-1.826a2.924 2.924 0 00-.683-1.053 2.924 2.924 0 00-1.053-.683c-.346-.134-.869-.314-1.826-.357-1.03-.047-1.339-.056-3.933-.056zm0 4.502a5.318 5.318 0 100 10.636 5.318 5.318 0 000-10.636zm0 1.838a3.479 3.479 0 110 6.958 3.479 3.479 0 010-6.958zm5.85-4.661a1.223 1.223 0 100 2.446 1.223 1.223 0 000-2.446z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-alt-red font-bold">
            &copy; 2025 Nexonic Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
