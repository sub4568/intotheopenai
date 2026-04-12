import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-8 overflow-hidden bg-page-light">
      <div className="max-w-[580px] mx-auto px-6 relative z-10 text-center">

        <h1
          className="font-display text-2xl md:text-[1.9rem] font-semibold mb-4 leading-[1.22] text-black tracking-tight opacity-0 animate-fade-up [animation-fill-mode:forwards]"
        >
          The content performance operating system for communications and marketing teams.
        </h1>

        <p
          className="text-sm md:text-[0.95rem] mb-7 leading-relaxed max-w-md mx-auto text-gray-400 opacity-0 animate-fade-up [animation-delay:150ms] [animation-fill-mode:forwards]"
        >
          Predict, test, and optimise content performance before and after publication — powered by a proprietary content performance OS built for agencies that cannot afford to guess.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 opacity-0 animate-fade-up [animation-delay:300ms] [animation-fill-mode:forwards]">
          <Button
            variant="hero"
            size="lg"
            className="group hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg font-medium text-sm"
            asChild
          >
            <a href="https://intotheopen-144935016950.us-west1.run.app/" target="_blank" rel="noopener noreferrer">
              Request early access
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button
            variant="hero-outline"
            size="lg"
            className="group hover:scale-[1.01] transition-all duration-300 border border-black/12 text-black/55 hover:text-black hover:border-black/25 font-medium text-sm"
            asChild
          >
            <a href="#how-it-works">
              See how it works
              <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
