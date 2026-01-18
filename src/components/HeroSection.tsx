import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { useIsMobile } from "@/hooks/useIsMobile";

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
          className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float-slow"
          style={{ transform: isMobile ? 'none' : `translateY(${scrollY * 0.05}px)` }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-medium"
          style={{ transform: isMobile ? 'none' : `translateY(${scrollY * -0.03}px)` }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/3 rounded-full blur-3xl animate-float-slow [animation-delay:1s]"
          style={{ transform: isMobile ? 'none' : `translateY(${scrollY * 0.08}px)` }}
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="max-w-xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Engineer content<br />
              that lands,<br />
              resonates,<br />
              <span className="text-accent inline-block">
                and&nbsp;
                <span className="relative inline-block min-w-[200px] md:min-w-[280px] lg:min-w-[320px]">
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

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed opacity-0 animate-fade-up [animation-delay:200ms] [animation-fill-mode:forwards]">
              Unlock your content's full potential with our AI-driven content intelligence that predicts, validates, and optimises high-impact content before and after it goes live.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 opacity-0 animate-fade-up [animation-delay:400ms] [animation-fill-mode:forwards]">
              <Button variant="hero" size="xl" className="hover:scale-105 transition-transform duration-200">
                Get Early Access
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero-outline" size="xl" className="hover:scale-105 transition-transform duration-200">
                Explore Features
              </Button>
            </div>
          </div>

          <div className="relative h-[500px] lg:h-[600px]">
            <div
              className="absolute top-0 right-0 w-[85%] h-[55%] rounded-2xl overflow-hidden shadow-2xl opacity-0 animate-fade-up [animation-delay:300ms] [animation-fill-mode:forwards]"
              style={{ transform: isMobile ? 'none' : `translateY(${scrollY * 0.1}px)` }}
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Dashboard analytics"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent pointer-events-none" />
            </div>

            <div
              className="absolute bottom-0 left-0 w-[85%] h-[55%] rounded-2xl overflow-hidden shadow-2xl opacity-0 animate-fade-up [animation-delay:500ms] [animation-fill-mode:forwards]"
              style={{ transform: isMobile ? 'none' : `translateY(${scrollY * -0.05}px)` }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-primary/10 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
