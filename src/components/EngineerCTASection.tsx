import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const EngineerCTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Start engineering content performance today
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Move beyond guesswork. Forecast impact, validate messaging, and optimise content performance before and after you publish, all in one platform.
          </p>
          <Button
            variant="accent"
            size="lg"
            className="hover:scale-105 transition-transform duration-200"
          >
            Request early access
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EngineerCTASection;
