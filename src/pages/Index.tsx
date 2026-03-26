import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";

import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ScrollProgress } from "@/components/ScrollProgress";
import RecognizedBy from "@/components/RecognizedBy";
import ProductPreview from "@/components/ProductPreview";
import { SectionDivider } from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <ProductPreview />
        <RecognizedBy />
        <SectionDivider />
        <HowItWorksSection />
        <SectionDivider />
        <FeaturesSection />
        <SectionDivider />
        <PricingSection />
        <SectionDivider />
        <ContactSection />
        <SectionDivider />
        <FAQSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
