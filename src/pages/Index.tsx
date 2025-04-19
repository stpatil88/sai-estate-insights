
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PropertiesSection from '@/components/PropertiesSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import SpecialHighlights from '@/components/SpecialHighlights';
import TestimonialsSection from '@/components/TestimonialsSection';
import AppointmentSection from '@/components/AppointmentSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "SHREE SAI CONSULTANCY - Expert Real Estate Guidance";
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PropertiesSection />
      <WhyChooseSection />
      <SpecialHighlights />
      <TestimonialsSection />
      <AppointmentSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
