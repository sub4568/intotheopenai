import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const EighthPageSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-28 md:py-32 bg-[#0f2942] relative overflow-hidden">
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div
          ref={ref}
          className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] text-white">
            Ship content that works
          </h2>

          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Stop wasting budget on content that fails. Start engineering performance.
          </p>

          <Button
            size="xl"
            className="h-16 px-10 text-lg bg-[#1e4fc2] hover:bg-[#164B82] text-white font-bold shadow-lg hover:shadow-[0_0_0_1px_#1e4fc2] transition-all duration-300 group"
            asChild
          >
            <a href="https://intotheopen-144935016950.us-west1.run.app/" target="_blank" rel="noopener noreferrer">
              Request Early Access
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EighthPageSection;
