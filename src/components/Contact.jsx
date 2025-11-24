import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../services/supabaseClient';

import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    customer_name: '',
    customer_email: '',
    project_details: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // 1. Save to Supabase
      const { error } = await supabase
        .from('project_inquiries')
        .insert([formData]);

      if (error) throw error;

      // 2. Send Email via EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          customer_name: formData.customer_name,
          customer_email: formData.customer_email,
          project_details: formData.project_details
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ customer_name: '', customer_email: '', project_details: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    }
  };

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
                    <p className="text-lg font-black text-alt-black">Support Plan — 50 € / month</p>
                    <p className="text-alt-neutral font-medium">Updates, fixes, monitoring, backups.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center h-10 w-10 border-4 border-black bg-alt-red text-white font-black text-lg shadow-neo-sm">G</span>
                  </div>
                  <div className="ml-6">
                    <p className="text-lg font-black text-alt-black">Growth Plan — 90 € / month</p>
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
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 bg-white p-8 border-4 border-black shadow-neo">
              {status === 'success' && (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
                  <p className="font-bold">Success!</p>
                  <p>Your message has been sent. We'll be in touch shortly.</p>
                </div>
              )}
              {status === 'error' && (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
                  <p className="font-bold">Error</p>
                  <p>{errorMessage}</p>
                </div>
              )}

              <div>
                <label htmlFor="customer_name" className="block text-sm font-black text-alt-black uppercase">Name</label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="customer_name"
                    id="customer_name"
                    required
                    value={formData.customer_name}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full bg-alt-gray border-4 border-black text-alt-black focus:outline-none focus:ring-0 focus:border-alt-red focus:shadow-[4px_4px_0px_0px_#FF3B30] transition-all font-bold"
                    placeholder="YOUR NAME"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="customer_email" className="block text-sm font-black text-alt-black uppercase">Email</label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="customer_email"
                    id="customer_email"
                    required
                    value={formData.customer_email}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full bg-alt-gray border-4 border-black text-alt-black focus:outline-none focus:ring-0 focus:border-alt-red focus:shadow-[4px_4px_0px_0px_#FF3B30] transition-all font-bold"
                    placeholder="YOU@EXAMPLE.COM"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="project_details" className="block text-sm font-black text-alt-black uppercase">Message</label>
                <div className="mt-1">
                  <textarea
                    id="project_details"
                    name="project_details"
                    rows="4"
                    required
                    value={formData.project_details}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full bg-alt-gray border-4 border-black text-alt-black focus:outline-none focus:ring-0 focus:border-alt-red focus:shadow-[4px_4px_0px_0px_#FF3B30] transition-all font-bold"
                    placeholder="TELL US ABOUT YOUR PROJECT"
                  ></textarea>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`w-full inline-flex justify-center py-4 px-6 border-4 border-black shadow-neo text-lg font-black text-white bg-alt-red hover:bg-white hover:text-alt-black hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] focus:outline-none transition-all ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {status === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}
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
