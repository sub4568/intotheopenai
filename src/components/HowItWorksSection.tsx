import { ArrowDown, ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Predict performance before you publish",
    tagline: "",
    description: "Forecast how content will land using AI-powered predictive scoring, so only content built to perform goes live.",
    cta: "Discover more",
  },
  {
    title: "Validate at scale, instantly",
    tagline: "",
    description: "Understand your content’s likely impact in seconds by validating against 15+ performance evaluations, including synthetic audience testing.",
    cta: "Discover more",
  },
  {
    title: "Optimise messaging with evidence",
    tagline: "",
    description: "Generate and compare multiple optimised variants, each scored for predicted performance, making decisions clearer and faster.",
    cta: "Get started",
  },
  {
    title: "Publish anywhere",
    tagline: "",
    description: "Intotheopen fits into your existing workflow. Publish on the platforms you already use.",
    cta: "Get started",
  },
  {
    title: "Track and refine in real time",
    tagline: "",
    description: "Once live, performance is continuously monitored and messaging refined automatically to maximise performance.",
    cta: "Get started",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24" style={{ backgroundColor: '#164B82' }}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            From draft to performance
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            A continuous workflow that predicts, validates, and optimises content across its entire lifecycle.
          </p>
        </div>

        {/* Steps - Stacked Cards (Text Only) */}
        <div className="max-w-4xl mx-auto relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div
                className="group bg-secondary rounded-2xl overflow-hidden border border-primary/30 hover:border-accent/50 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer relative mb-16 last:mb-0"
                style={{
                  zIndex: steps.length - index,
                }}
              >
                {/* Step Number Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center border-2 border-primary/20 group-hover:scale-110 group-hover:border-accent transition-all duration-300">
                    <span className="text-primary-foreground font-bold text-lg">{index + 1}</span>
                  </div>
                </div>

                {/* Content Container - Centered Text Layout */}
                <div className="p-8 md:p-12 pt-24 md:pt-16 flex flex-col items-center text-center justify-center min-h-[250px]">
                  <h3 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  {step.tagline && (
                    <p className="text-secondary-foreground/80 italic mb-4 leading-relaxed">
                      {step.tagline}
                    </p>
                  )}
                  
                  <p className="text-secondary-foreground/70 mb-8 leading-relaxed group-hover:text-secondary-foreground/90 transition-colors duration-300 text-lg max-w-2xl">
                    {step.description}
                  </p>
                  
                  {step.cta === "Discover more" ? (
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-accent font-medium hover:gap-4 hover:translate-x-1 transition-all duration-300"
                    >
                      Book a demo
                      <ArrowRight className="w-4 h-4 group-hover:scale-125 transition-transform duration-300" />
                    </a>
                  ) : (
                    <a
                      href="#pricing"
                      className="inline-flex items-center gap-2 text-accent font-medium hover:gap-4 hover:translate-x-1 transition-all duration-300"
                    >
                      {step.cta}
                      <ArrowRight className="w-4 h-4 group-hover:scale-125 transition-transform duration-300" />
                    </a>
                  )}
                </div>
              </div>

              {/* Arrow Connector (between steps) */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute -bottom-8 left-1/2 -translate-x-1/2 z-10 items-center justify-center">
                   <ArrowDown className="w-6 h-6 text-accent/50 animate-bounce" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;