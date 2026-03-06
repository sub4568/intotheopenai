import { BackgroundPaths } from "@/components/ui/background-paths";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/useIsMobile";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import FloatingMetricCards from "@/components/FloatingMetricCards";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen pt-36 pb-24 overflow-hidden bg-page-light">
      <BackgroundPaths />
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 min-h-[80vh]">
          
          {/* Left Column: Text */}
          <div className="flex-1 max-w-2xl w-full animate-fade-up py-8">
            <h1 className="font-display text-6xl md:text-7xl lg:text-[5rem] font-black mb-8 text-left leading-[1.05] text-primary-navy tracking-tight">
              Engineer content performance before you publish.
            </h1>

            <p className="text-xl md:text-2xl mb-10 leading-[1.5] opacity-0 animate-fade-up [animation-delay:200ms] [animation-fill-mode:forwards] text-left max-w-xl text-gray-600">
              Forecast impact, validate messaging, optimize across the entire lifecycle.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-5 opacity-0 animate-fade-up [animation-delay:400ms] [animation-fill-mode:forwards]">
              <Button 
                variant="hero" 
                size="xl" 
                className="group hover:scale-[1.03] transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden font-semibold text-base"
                asChild
              >
                <a href="https://intotheopen-144935016950.us-west1.run.app/" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10">Request early access</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                variant="hero-outline" 
                size="xl" 
                className="group hover:scale-[1.02] transition-all duration-300 border-2 border-primary-navy/20 text-primary-navy/70 hover:text-primary-navy hover:border-primary-navy/40 hover:bg-white font-medium text-base"
                asChild
              >
                <a href="#how-it-works">
                  See how it works
                  <ArrowRight className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: Staggered Grid Cards */}
          <div className="flex-1 w-full hidden lg:block relative">
            <FloatingMetricCards />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;