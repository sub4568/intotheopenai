import { BackgroundPaths } from "@/components/ui/background-paths";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/useIsMobile";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden" style={{ backgroundColor: '#F2F7FA' }}>
      <BackgroundPaths />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-float-slow"
          style={{ 
            backgroundColor: 'rgba(22, 75, 130, 0.05)',
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
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold mb-5 text-left leading-[1.08]" style={{ color: '#164B82' }}>
              Engineer content performance before you publish
            </h1>

            <p className="text-lg md:text-xl mb-8 leading-[1.6] opacity-0 animate-fade-up [animation-delay:200ms] [animation-fill-mode:forwards] text-left max-w-xl" style={{ color: '#343434', opacity: 0.8 }}>
              Forecast impact, validate messaging, and optimise content across its entire lifecycle.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 opacity-0 animate-fade-up [animation-delay:400ms] [animation-fill-mode:forwards]">
              <Button 
                variant="hero" 
                size="xl" 
                className="hover:scale-105 transition-transform duration-200"
                asChild
              >
                <a href="https://intotheopen-144935016950.us-west1.run.app/" target="_blank" rel="noopener noreferrer">
                  Request early access
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button 
                variant="hero-outline" 
                size="xl" 
                className="hover:scale-105 transition-transform duration-200"
                asChild
              >
                <a href="#how-it-works">
                  See how it works
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: Images */}
          <div className="flex-1 w-full hidden lg:block relative">
             <div className="relative w-full max-w-lg mx-auto h-[500px] flex items-center justify-center">
                
                {/* Back Image (UPDATED: New AI Brain Picture) */}
                <div className="absolute top-0 right-0 w-[90%] rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1625297670911-8311cd5e7832?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="AI Technology" 
                    className="w-full h-auto object-cover opacity-90"
                  />
                </div>

                {/* Front Image (Stays the same: Team Working) */}
                <div className="absolute bottom-0 left-0 w-[90%] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gray-700 z-20">
                  <img 
                    src="https://images.unsplash.com/photo-1563461660947-507ef49e9c47?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Team working" 
                    className="w-full h-auto object-cover"
                  />
                </div>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;