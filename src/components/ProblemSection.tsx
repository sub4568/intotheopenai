import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const ProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-24" style={{ backgroundColor: '#F2F7FA' }}>
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 leading-[1.15]" style={{ color: '#164B82' }}>
            Most content fails, not because it's bad,<br className="hidden md:block" /> but because it's untested
          </h2>

          <div className="space-y-6 mb-10">
            <p className="text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: '#343434', opacity: 0.75 }}>
              Teams invest time, budget, and creativity into content without knowing:
            </p>
            
            <div className="space-y-2.5 max-w-md mx-auto">
              <p className="text-base md:text-lg font-medium" style={{ color: '#164B82' }}>→ Will this resonate?</p>
              <p className="text-base md:text-lg font-medium" style={{ color: '#164B82' }}>→ Will this perform?</p>
              <p className="text-base md:text-lg font-medium" style={{ color: '#164B82' }}>→ Is this worth publishing?</p>
            </div>

            <p className="text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: '#343434', opacity: 0.75 }}>
              By the time performance data arrives, the budget is already spent.
            </p>
          </div>

          <div className="mt-12 max-w-xl mx-auto flex justify-center">
            <HoverBorderGradient
              containerClassName="rounded-xl"
              as="div"
              className="bg-white text-foreground px-6 py-6 rounded-[inherit] w-full shadow-md border border-border"
            >
              <p className="text-base md:text-lg italic text-center leading-relaxed" style={{ color: '#343434' }}>
                Traditional analytics explain failure after launch. intotheopen helps you avoid it.
              </p>
            </HoverBorderGradient>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

