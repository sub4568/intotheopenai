import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {

  return (
    <section className="relative pt-24 pb-6 overflow-hidden bg-page-light">
      <div className="max-w-[600px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center">

          <div className="w-full animate-fade-up text-center">
            <h1 className="font-display text-2xl md:text-3xl font-semibold mb-3 leading-[1.2] text-black tracking-tight">
              Engineer content performance before you publish.
            </h1>

            <p className="text-sm md:text-base mb-6 leading-relaxed opacity-0 animate-fade-up [animation-delay:200ms] [animation-fill-mode:forwards] max-w-sm mx-auto text-gray-400">
              Forecast impact, validate messaging, and optimize across the entire lifecycle.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 opacity-0 animate-fade-up [animation-delay:400ms] [animation-fill-mode:forwards]">
              <Button
                variant="hero"
                size="lg"
                className="group hover:scale-[1.03] transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden font-medium text-sm"
                asChild
              >
                <a href="https://intotheopen-144935016950.us-west1.run.app/" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10">Request early access</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                variant="hero-outline"
                size="lg"
                className="group hover:scale-[1.02] transition-all duration-300 border border-black/15 text-black/60 hover:text-black hover:border-black/30 hover:bg-white font-medium text-sm"
                asChild
              >
                <a href="#how-it-works">
                  See how it works
                  <ArrowRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;