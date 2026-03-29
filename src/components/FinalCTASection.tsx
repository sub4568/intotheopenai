import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FinalCTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-28 md:py-36 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(0,0,0,0.03),transparent)]" />

      <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-black leading-[1.08] mb-6 tracking-tight">
            Know what will perform, before it goes live.
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed mb-3 max-w-xl mx-auto">
            The platform gets more valuable with every campaign.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-12 max-w-lg mx-auto">
            Every result feeds the model. Every decision your team makes gets sharper over time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              variant="hero"
              size="lg"
              className="group hover:scale-[1.03] transition-all duration-300 shadow-md hover:shadow-lg font-medium text-sm"
              asChild
            >
              <a href="https://intotheopen-144935016950.us-west1.run.app/" target="_blank" rel="noopener noreferrer">
                <span>Request early access</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              variant="hero-outline"
              size="lg"
              className="group hover:scale-[1.02] transition-all duration-300 border border-black/15 text-black/60 hover:text-black hover:border-black/30 hover:bg-white font-medium text-sm"
              asChild
            >
              <a href="https://intotheopen-144935016950.us-west1.run.app/" target="_blank" rel="noopener noreferrer">
                Book a demo
                <ArrowRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
            </Button>
          </div>

          <div className="mt-14 flex items-center justify-center gap-8 flex-wrap">
            {["No credit card required", "Onboarded in hours", "Built for agencies"].map((trust) => (
              <div key={trust} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-black/20" />
                <span className="text-sm text-gray-400">{trust}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
