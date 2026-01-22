import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const valuePoints = [
    "Forecast content performance before publishing",
    "Validate messaging against 10+ performance signals",
    "Continuously optimise content across its lifecycle",
  ];

  return (
    <section className="py-20 md:py-24 bg-gradient-navy relative overflow-hidden group">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-pulse-subtle" />
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Headline */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-5 text-left leading-[1.15]">
            Stop guessing. Start knowing what works
          </h2>
          
          {/* Supporting Copy */}
          <p className="text-base md:text-lg text-primary-foreground/85 mb-6 text-left leading-[1.65] max-w-2xl">
            intotheopen helps communications and marketing teams engineer content performance, not analyse failure after the fact.
          </p>

          {/* Value Bullets */}
          <div className="space-y-3 mb-8">
            {valuePoints.map((point, index) => (
              <div
                key={index}
                className={`flex items-start gap-2.5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                style={{ transitionDelay: isVisible ? `${100 + index * 80}ms` : '0ms' }}
              >
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-sm md:text-base text-primary-foreground/85 text-left leading-[1.6]">
                  {point}
                </p>
              </div>
            ))}
          </div>

          {/* How It Works Mechanism */}
          <div className="mb-8 p-5 bg-primary-foreground/5 rounded-xl border border-primary-foreground/10">
            <p className="text-sm md:text-base text-primary-foreground/75 text-left leading-[1.65]">
              <span className="font-semibold text-primary-foreground/90">How it works:</span> We forecast impact, validate messaging, and continuously optimise content across its entire lifecycle, so performance is designed in, not discovered too late.
            </p>
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <Button
              variant="hero"
              size="lg"
              className="hover:scale-105 transition-all duration-200"
              asChild
            >
              <a href="#how-it-works">
                See how it works
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-primary-foreground/10 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/15 hover:border-primary-foreground/60 hover:text-primary-foreground transition-all duration-200"
              asChild
            >
              <a href="https://intotheopen-144935016950.us-west1.run.app/" target="_blank" rel="noopener noreferrer">
                Request a demo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
