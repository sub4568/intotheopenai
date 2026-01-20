import { BackgroundPaths } from "@/components/ui/background-paths";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/useIsMobile";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [titleNumber, setTitleNumber] = useState(0);
  const isMobile = useIsMobile();
  const titles = useMemo(
    () => ["performs", "converts", "delivers", "succeeds", "resonates"],
    []
  );

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-background">
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
        <div className="max-w-4xl mx-auto min-h-[80vh] flex flex-col justify-center">
          
          {/* Main Text Content - Centered Layout */}
          <div className="max-w-3xl w-full animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-left">
              Engineer content<br />
              that lands,<br />
              resonates,<br />
              <span className="text-accent inline-flex items-center gap-2">
                <span>and</span>
                <span className="relative inline-block min-w-[200px] md:min-w-[280px] lg:min-w-[320px] text-left">
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute left-0"
                      initial={{ opacity: 0, y: "-100" }}
                      transition={{ type: "spring", stiffness: 50 }}
                      animate={
                        titleNumber === index
                          ? {
                              y: 0,
                              opacity: 1,
                            }
                          : {
                              y: titleNumber > index ? -150 : 150,
                              opacity: 0,
                            }
                      }
                    >
                      {title}
                    </motion.span>
                  ))}
                  <span className="invisible">{titles[0]}</span>
                </span>
              </span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed opacity-0 animate-fade-up [animation-delay:200ms] [animation-fill-mode:forwards] text-left max-w-2xl">
              Unlock your content's full potential with our AI-driven content intelligence that predicts, validates, and optimises high-impact content before and after it goes live.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 opacity-0 animate-fade-up [animation-delay:400ms] [animation-fill-mode:forwards]">
              <Button 
                variant="hero" 
                size="xl" 
                className="hover:scale-105 transition-transform duration-200"
                asChild
              >
                <a href="https://intotheopen-144935016950.us-west1.run.app/" target="_blank" rel="noopener noreferrer">
                  Get Early Access
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button 
                variant="hero-outline" 
                size="xl" 
                className="hover:scale-105 transition-transform duration-200"
                asChild
              >
                <a href="#features">
                  Explore Features
                </a>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;