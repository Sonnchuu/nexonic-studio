import React from 'react';
import { motion as Motion } from 'framer-motion';

const packages = [
  {
    name: 'STARTER WEBSITE',
    price: '€900–€1200',
    description: 'Get your business online with a modern, trustworthy website that drives new customers.',
    features: [
      'Custom design matching your brand (no templates)',
      'Mobile-first performance & fast loading',
      'Clear presentation of your services',
      'Contact form → direct inbox delivery',
      'Basic SEO (titles, descriptions, indexing, sitemap)',
      'GDPR essentials (cookie banner + privacy pages)',
      'Launch & domain setup included'
    ],
    time: '5 business days from project start',
    highlight: false,
  },
  {
    name: 'BUSINESS WEBSITE',
    price: '€1400–€2000',
    description: 'Turn your website into a growth tool that attracts more leads — and remains easy to update without developers.',
    features: [
      'All Starter features +',
      'CMS — update your content & services anytime',
      'Conversion-focused service pages',
      'Lead tracking + analytics setup',
      'Case studies & testimonials sections',
      'Strategy call + content & conversion guidance before launch',
      'Priority support during launch month'
    ],
    time: '10-14 business days from project start',
    highlight: true,
  },
  {
    name: 'E-COMMERCE WEBSITE',
    price: '€2500–€4000+',
    description: 'Sell online with a secure, seamless shopping experience that converts visitors into customers.',
    features: [
      'All Business Website features +',
      'Online shop + product management',
      'Secure payment integration (Stripe / PayPal)',
      'Orders dashboard + basic inventory control',
      'Abandoned cart emails to boost conversions',
      'Shipping & tax setup for your region',
      'Customer accounts & login access',
      'Performance optimization for product pages'
    ],
    time: '3–5 weeks depending on scope',
    highlight: false,
    accentTag: 'FULL SCALE',
  },
];

const Pricing = () => {
  return (
    <div id="pricing" className="relative bg-alt-white py-24 border-b-4 border-black overflow-hidden">
      {/* Background Grid Pattern - Checkerboard */}
      <div className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(#000000 1px, transparent 1px), radial-gradient(#000000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-base text-alt-red font-black tracking-wide uppercase border-b-4 border-alt-red inline-block pb-1">PRICING</h2>
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-4 text-4xl leading-8 font-black tracking-tight text-alt-black sm:text-5xl"
          >
            CHOOSE YOUR WEAPON
          </Motion.p>
          <p className="mt-4 max-w-2xl text-xl text-alt-neutral font-medium mx-auto">
            Transparent pricing. No hidden fees.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
          {packages.map((pkg, index) => {
            const matchesPremiumLayout = pkg.name === 'STARTER WEBSITE' || pkg.name === 'BUSINESS WEBSITE' || pkg.name === 'E-COMMERCE WEBSITE';
            const isEcommerce = pkg.name === 'E-COMMERCE WEBSITE';
            const borderWidthClass = matchesPremiumLayout ? 'border-2' : 'border-4';
            const borderColorClass = 'border-black';
            const cardBackgroundClass = pkg.highlight ? 'bg-[#F9F9F9]' : pkg.accentTag ? 'bg-[#FAFAFA]' : 'bg-white';
            const buttonVariantClass = pkg.highlight
              ? 'bg-alt-red text-white hover:bg-[#E20000] hover:text-white'
              : matchesPremiumLayout
                ? 'bg-alt-black text-white hover:bg-[#E20000] hover:text-white'
                : 'bg-alt-black text-white hover:bg-white hover:text-alt-black';
            const priceMarginClass = pkg.name === 'E-COMMERCE WEBSITE' ? 'mt-6' : 'mt-5';
            const featureSpacingClass = isEcommerce ? 'mt-5 space-y-4' : 'mt-4 space-y-4';

            return (
              <Motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col ${borderWidthClass} ${borderColorClass} ${cardBackgroundClass} p-8 transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none ${pkg.highlight ? 'shadow-neo-red' : 'shadow-neo'
                  }`}
              >
                {pkg.highlight && (
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-alt-red text-white font-black px-4 py-1 border-2 border-black transform rotate-6 shadow-sm text-xs tracking-[0.15em]">
                    BEST SELLER
                  </div>
                )}
                {!pkg.highlight && pkg.accentTag && (
                  <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-alt-black text-white font-black px-3 py-0.5 border-2 border-black text-[0.65rem] tracking-[0.1em]">
                    {pkg.accentTag}
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-alt-black uppercase border-b-4 border-black pb-2 inline-flex items-center gap-2">
                    {pkg.name}
                  </h3>
                  <p className="mt-4 text-alt-neutral font-bold">{pkg.description}</p>
                  <p className={`${priceMarginClass} flex items-baseline text-alt-red`}>
                    <span className="text-5xl font-black tracking-tight">{pkg.price}</span>
                  </p>
                  <p className="mt-6 text-sm font-black tracking-[0.04em] uppercase text-alt-black">What’s included:</p>

                  <ul role="list" className={`${featureSpacingClass} list-none pl-0`}>
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="flex-shrink-0 h-6 w-6 bg-alt-black flex items-center justify-center border-2 border-black">
                          <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-alt-neutral font-medium leading-[1.7]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <div className="text-center text-xs font-medium text-alt-neutral/70 mb-4">Delivery: {pkg.time}</div>
                  <a
                    href="#contact"
                    className={`w-full block text-center px-6 ${matchesPremiumLayout ? 'py-7 text-xl' : 'py-6 text-lg'} border-4 border-black font-black uppercase tracking-[0.3px] transition-all duration-200 ${buttonVariantClass} hover:-translate-y-0.5`}
                  >
                    Book Free Consultation
                  </a>
                </div>
              </Motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
