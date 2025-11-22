import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import WhyUs from './components/WhyUs';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-alt-black text-alt-white font-sans selection:bg-alt-blue selection:text-alt-black">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <WhyUs />
      <Portfolio />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
