import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const EighthPageSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-24" style={{ backgroundColor: '#164B82' }}>
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[1.15] text-white">
            Start engineering content performance today
          </h2>

          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed text-white opacity-90">
            Move beyond guesswork. Forecast impact, validate messaging, and optimise content performance before and 
            after you publish, all in one platform.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="default"
              size="lg"
              className="bg-white hover:bg-gray-100 text-[#164B82] hover:scale-105 transition-all duration-200"
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
              className="border-white text-white hover:bg-white/10 hover:scale-105 transition-all duration-200"
              asChild
            >
              <a href="#how-it-works">
                Back to the top
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EighthPageSection;

