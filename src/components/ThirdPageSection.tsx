import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ThirdPageSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-24" style={{ backgroundColor: '#F2F7FA' }}>
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-[1.15]" style={{ color: '#164B82' }}>
            Stop guessing. Start knowing what works
          </h2>

          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: '#343434', opacity: 0.85 }}>
            intotheopen helps communications and marketing teams engineer content performance, not analyse failure 
            after the fact. We forecast impact, validate messaging, and continuously optimise content across its entire 
            lifecycle, so performance is designed in, not discovered too late.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="default"
              size="lg"
              className="hover:scale-105 transition-all duration-200"
              style={{ backgroundColor: '#164B82' }}
              asChild
            >
              <a href="https://intotheopen-144935016950.us-west1.run.app/" target="_blank" rel="noopener noreferrer">
                Request early access
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:scale-105 transition-all duration-200"
              asChild
            >
              <a href="#how-it-works">
                See how it works
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          <div className="mt-16 p-8 bg-white rounded-xl border border-border shadow-md max-w-2xl mx-auto">
            <p className="text-base md:text-lg font-medium leading-relaxed" style={{ color: '#164B82' }}>
              Content intelligence, built for teams who publish at scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdPageSection;
