import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductPreview from "@/components/ProductPreview";
import RecognizedBy from "@/components/RecognizedBy";
import ValuePropsSection from "@/components/ValuePropsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ProblemSection from "@/components/ProblemSection";
import AgentNetworkSection from "@/components/AgentNetworkSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import PricingSection from "@/components/PricingSection";
import FinalCTASection from "@/components/FinalCTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ScrollProgress } from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <ProductPreview />
        <RecognizedBy />
        <ValuePropsSection />
        <HowItWorksSection />
        <ProblemSection />
        <AgentNetworkSection />
        <IntegrationsSection />
        <PricingSection />
        <FinalCTASection />
        <FAQSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
