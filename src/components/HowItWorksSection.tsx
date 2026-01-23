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
    description: "intotheopen fits into your existing workflow. Publish on the platforms you already use.",
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
    <section id="how-it-works" className="py-20 md:py-24" style={{ backgroundColor: '#2F679F' }}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-3">
            From draft to performance
          </h2>
          <p className="text-base text-primary-foreground/70 max-w-xl mx-auto leading-relaxed">
            A continuous workflow that predicts, validates, and optimises content across its entire lifecycle.
          </p>
        </div>

        {/* Steps - Stacked Cards (Text Only) */}
        <div className="max-w-3xl mx-auto relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div
                className="group bg-white rounded-xl overflow-hidden border border-white/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative mb-10 last:mb-0 shadow-lg"
                style={{
                  zIndex: steps.length - index,
                }}
              >
                {/* Step Number Badge */}
                <div className="absolute top-5 left-5 z-20">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center border-2 group-hover:scale-105 transition-all duration-300" style={{ backgroundColor: '#E4B795', borderColor: '#E4B795' }}>
                    <span className="font-bold text-sm" style={{ color: '#164B82' }}>{index + 1}</span>
                  </div>
                </div>

                {/* Content Container - Centered Text Layout */}
                <div className="p-6 md:p-8 pt-20 md:pt-12 flex flex-col items-center text-center justify-center min-h-[200px]">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight" style={{ color: '#164B82' }}>
                    {step.title}
                  </h3>
                  
                  {step.tagline && (
                    <p className="italic mb-3 text-sm leading-relaxed" style={{ color: '#699ACD' }}>
                      {step.tagline}
                    </p>
                  )}
                  
                  <p className="mb-6 leading-[1.65] text-sm md:text-base max-w-xl" style={{ color: '#343434', opacity: 0.8 }}>
                    {step.description}
                  </p>
                  
                  {step.cta === "Discover more" ? (
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all duration-300"
                      style={{ color: '#2F679F' }}
                    >
                      Book a demo
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <a
                      href="#pricing"
                      className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all duration-300"
                      style={{ color: '#2F679F' }}
                    >
                      {step.cta}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Arrow Connector (between steps) */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute -bottom-5 left-1/2 -translate-x-1/2 z-10 items-center justify-center">
                   <ArrowDown className="w-5 h-5" style={{ color: '#699ACD', opacity: 0.6 }} />
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