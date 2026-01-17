import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-gradient-navy relative overflow-hidden group">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse-subtle group-hover:bg-accent/20 transition-colors duration-700" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl animate-pulse-subtle group-hover:bg-accent/10 transition-colors duration-700" />
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to transform your marketing analytics?
          </h2>
          <p
            className={`text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: isVisible ? '150ms' : '0ms' }}
          >
            Join thousands of marketing teams who are already making smarter,
            faster, data-driven decisions with intotheopen.
          </p>
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}
          >
            <Button variant="hero" size="xl" className="hover:scale-105 transition-transform duration-200">
              Start Your Free Trial
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="bg-primary-foreground/10 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/20 hover:border-primary-foreground hover:text-primary-foreground hover:scale-105 transition-all duration-200"
            >
              Schedule a Demo
            </Button>
          </div>
          <div
            className={`flex flex-wrap items-center justify-center gap-2 mt-6 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: isVisible ? '450ms' : '0ms' }}
          >
            <span className="text-sm text-primary-foreground/60 hover:text-primary-foreground/80 transition-colors duration-300">
              14-day free trial
            </span>
            <span className="text-primary-foreground/40">·</span>
            <span className="text-sm text-primary-foreground/60 hover:text-primary-foreground/80 transition-colors duration-300">
              No credit card required
            </span>
            <span className="text-primary-foreground/40">·</span>
            <span className="text-sm text-primary-foreground/60 hover:text-primary-foreground/80 transition-colors duration-300">
              Cancel anytime
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
