import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div id="contact" className="relative bg-alt-white py-24 border-b-4 border-alt-black overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-black text-alt-black sm:text-4xl uppercase">
              READY TO SCALE?
            </h2>
            <p className="mt-4 text-lg text-alt-neutral font-medium">
              Let’s build something that actually moves your business forward. Fill out the form and we’ll get back to you within 24 hours.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-black text-alt-red uppercase border-b-4 border-alt-red inline-block pb-1">Support Plans</h3>
              <ul className="mt-6 space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center h-10 w-10 border-4 border-black bg-alt-gray text-alt-black font-black text-lg shadow-neo-sm">S</span>
                  </div>
                  <div className="ml-6">
                    <p className="text-lg font-black text-alt-black">Support Plan — 100 лв / месец</p>
                    <p className="text-alt-neutral font-medium">Updates, fixes, monitoring, backups.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center h-10 w-10 border-4 border-black bg-alt-red text-white font-black text-lg shadow-neo-sm">G</span>
                  </div>
                  <div className="ml-6">
                    <p className="text-lg font-black text-alt-black">Growth Plan — 180 лв / месец</p>
                    <p className="text-alt-neutral font-medium">A/B tests, analytics, ongoing improvements.</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 sm:mt-16 md:mt-0"
          >
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 bg-white p-8 border-4 border-black shadow-neo">
              <div>
                <label htmlFor="name" className="block text-sm font-black text-alt-black uppercase">Name</label>
                <div className="mt-1">
                  <input type="text" name="name" id="name" className="py-3 px-4 block w-full bg-alt-gray border-4 border-black text-alt-black focus:outline-none focus:ring-0 focus:border-alt-red focus:shadow-[4px_4px_0px_0px_#FF3B30] transition-all font-bold" placeholder="YOUR NAME" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-black text-alt-black uppercase">Email</label>
                <div className="mt-1">
                  <input type="email" name="email" id="email" className="py-3 px-4 block w-full bg-alt-gray border-4 border-black text-alt-black focus:outline-none focus:ring-0 focus:border-alt-red focus:shadow-[4px_4px_0px_0px_#FF3B30] transition-all font-bold" placeholder="YOU@EXAMPLE.COM" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-black text-alt-black uppercase">Message</label>
                <div className="mt-1">
                  <textarea id="message" name="message" rows="4" className="py-3 px-4 block w-full bg-alt-gray border-4 border-black text-alt-black focus:outline-none focus:ring-0 focus:border-alt-red focus:shadow-[4px_4px_0px_0px_#FF3B30] transition-all font-bold" placeholder="TELL US ABOUT YOUR PROJECT"></textarea>
                </div>
              </div>
              <div>
                <button type="submit" className="w-full inline-flex justify-center py-4 px-6 border-4 border-black shadow-neo text-lg font-black text-white bg-alt-red hover:bg-white hover:text-alt-black hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] focus:outline-none transition-all">
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
