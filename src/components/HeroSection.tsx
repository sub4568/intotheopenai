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
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-page-light">
      <BackgroundPaths />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-float-slow bg-primary/5"
          style={{ 
            transform: isMobile ? 'none' : `translateY(${scrollY * 0.05}px)` 
          }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-float-medium"
          style={{ 
            backgroundColor: 'rgba(228, 183, 149, 0.15)',
            transform: isMobile ? 'none' : `translateY(${scrollY * -0.03}px)` 
          }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full blur-3xl animate-float-slow [animation-delay:1s]"
          style={{ 
            backgroundColor: 'rgba(105, 154, 205, 0.03)',
            transform: isMobile ? 'none' : `translateY(${scrollY * 0.08}px)` 
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Changed to Flex Row for 2 Columns */}
        <div className="flex flex-col lg:flex-row items-center gap-12 min-h-[80vh]">
          
          {/* Left Column: Text */}
          <div className="flex-1 max-w-2xl w-full animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold mb-5 text-left leading-[1.08] text-primary-navy">
              Engineer content performance before you publish.
            </h1>

            <p className="text-lg md:text-xl mb-8 leading-[1.6] opacity-0 animate-fade-up [animation-delay:200ms] [animation-fill-mode:forwards] text-left max-w-xl text-muted-lighter">
              Forecast impact, validate messaging, and optimise content across its entire lifecycle.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 opacity-0 animate-fade-up [animation-delay:400ms] [animation-fill-mode:forwards]">
              <Button 
                variant="hero" 
                size="xl" 
                className="group hover:scale-105 transition-all duration-200 hover:shadow-xl"
                asChild
              >
                <a href="https://intotheopen-144935016950.us-west1.run.app/" target="_blank" rel="noopener noreferrer">
                  Request early access
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                variant="hero-outline" 
                size="xl" 
                className="group hover:scale-105 transition-all duration-200 hover:shadow-lg"
                asChild
              >
                <a href="#how-it-works">
                  See how it works
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: 3D Floating Cards */}
          <div className="flex-1 w-full hidden lg:block relative">
            <FloatingMetricCards />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;