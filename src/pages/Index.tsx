
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'hero':
        return <Hero />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'testimonials':
        return <Testimonials />;
      case 'faq':
        return <FAQ />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="h-screen overflow-hidden bg-black">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="h-full">
        <div className="transition-all duration-700 ease-in-out transform">
          {renderActiveSection()}
        </div>
      </main>
      {activeSection === 'contact' && <Footer />}
    </div>
  );
};

export default Index;
