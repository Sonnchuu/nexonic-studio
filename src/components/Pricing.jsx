import React from "react";
import ScrollReveal from "./ScrollReveal";

const pricingPlans = [
  {
    id: "01",
    name: "Foundation",
    price: "€350",
    description: "Essential digital presence.",
    features: [
      "Custom Design",
      "Responsive Build",
      "Basic SEO",
      "Content Integration",
    ],
  },
  {
    id: "02",
    name: "Growth",
    price: "€650",
    description: "Expanded functionality.",
    features: [
      "CMS Integration",
      "Advanced Analytics",
      "Newsletter",
      "Priority Support",
    ],
  },
  {
    id: "03",
    name: "Commerce",
    price: "€950",
    description: "Scalable online store.",
    features: [
      "Product Management",
      "Payments",
      "Inventory",
      "Customer Accounts",
    ],
  },
];

const Pricing = () => {
  return (
    <div
      id="pricing"
      className="bg-white text-min-black border-b border-min-black"
    >
      {/* Header */}
      <div className="border-b border-min-black px-4 sm:px-8 lg:px-12 py-8 sm:py-12 flex justify-between items-end">
        <ScrollReveal>
          <h2 className="font-sans text-4xl sm:text-6xl md:text-8xl font-medium tracking-tighter uppercase">
            Investment
          </h2>
        </ScrollReveal>
        <span className="font-mono text-sm tracking-widest hidden md:block">
          ROI/MAX
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <ScrollReveal
            key={plan.id}
            delay={index * 0.1}
            className="group border-b border-min-black lg:border-b-0 lg:border-r lg:last:border-r-0 last:border-b-0 flex flex-col justify-between hover:bg-[#282828] hover:text-white transition-colors duration-300"
          >
            <div className="p-6 sm:p-8 border-b border-current transition-colors duration-300">
              <div className="flex justify-between items-start mb-8">
                <h3 className="font-sans text-3xl font-medium uppercase tracking-tight">
                  {plan.name}
                </h3>
                <span className="font-mono text-xs border border-current rounded-full px-2 py-1">
                  {plan.id}
                </span>
              </div>
              <div className="text-4xl sm:text-5xl font-light tracking-tight mb-2">
                {plan.price}
              </div>
              <p className="font-mono text-xs uppercase tracking-widest opacity-70">
                {plan.description}
              </p>
            </div>

            <div className="flex-1 p-6 sm:p-8">
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-sm sm:text-base font-light"
                  >
                    <span className="w-1.5 h-1.5 bg-current mr-3 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              className="block p-6 text-center border-t border-current font-sans text-lg font-medium uppercase hover:bg-[#282828] hover:text-white transition-colors duration-300"
            >
              Select Plan
            </a>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
