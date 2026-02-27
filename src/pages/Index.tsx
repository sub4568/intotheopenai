import { BackToTop } from "@/components/BackToTop";
import ContactSection from "@/components/ContactSection";
import EighthPageSection from "@/components/EighthPageSection";
import FAQSection from "@/components/FAQSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import ProblemSection from "@/components/ProblemSection";
import RecognisedBy from "@/components/RecognisedBy";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SectionDivider } from "@/components/SectionDivider";
import ThirdPageSection from "@/components/ThirdPageSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <SectionDivider />
        <ProblemSection />
        <SectionDivider />
        <ThirdPageSection />
        <SectionDivider />
        <HowItWorksSection />
        <SectionDivider />
        <FeaturesSection />
        <SectionDivider />
        <PricingSection />
        <SectionDivider />
        <ContactSection />
        <SectionDivider />
        <EighthPageSection />
        <SectionDivider />
        <RecognisedBy/>
        <FAQSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
