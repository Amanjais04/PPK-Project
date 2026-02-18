import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VoiceSamplesSection from "@/components/VoiceSamplesSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <VoiceSamplesSection />
      <ServicesSection />
      <PricingSection />
      <GallerySection />
      <TestimonialsSection />
      <LocationSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
