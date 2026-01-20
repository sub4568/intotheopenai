import { ArrowDown, ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Predict performance before you publish",
    tagline: "",
    description: "Forecast how content will land using AI-powered predictive scoring, so only content built to perform goes live.",
    cta: "Discover more",
    image: "https://images.unsplash.com/photo-1763568258533-d0597f86ce62?q=80&w=1740&auto=format&fit=crop",
  },
  {
    title: "Validate at scale, instantly",
    tagline: "",
    description: "Understand your content’s likely impact in seconds by validating against 15+ performance evaluations, including synthetic audience testing.",
    cta: "Discover more",
    image: "https://images.unsplash.com/photo-1563461660947-507ef49e9c47?q=80&w=1374&auto=format&fit=crop",
  },
  {
    title: "Optimise messaging with evidence",
    tagline: "",
    description: "Generate and compare multiple optimised variants, each scored for predicted performance, making decisions clearer and faster.",
    cta: "Get started",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    title: "Publish anywhere",
    tagline: "",
    description: "Intotheopen fits into your existing workflow. Publish on the platforms you already use.",
    cta: "Get started",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
  },
  {
    title: "Track and refine in real time",
    tagline: "",
    description: "Once live, performance is continuously monitored and messaging refined automatically to maximise performance.",
    cta: "Get started",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
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

        {/* Steps - Stacked Cards */}
        <div className="max-w-5xl mx-auto relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div
                className="group bg-secondary rounded-2xl overflow-hidden border border-primary/30 hover:border-accent/50 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer relative mb-24 md:mb-32 last:mb-0"
                style={{
                  transform: `translateY(${index * 8}px)`,
                  zIndex: steps.length - index,
                }}
              >
                {/* Step Number Badge */}
                <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-accent rounded-full flex items-center justify-center border-2 border-primary/20 group-hover:scale-110 group-hover:border-accent transition-all duration-300">
                    <span className="text-primary-foreground font-bold text-sm md:text-base">{index + 1}</span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row">
                  {/* Content Side */}
                  <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    {/* Only render tagline if it exists (Updated logic) */}
                    {step.tagline && (
                      <p className="text-secondary-foreground/80 italic mb-4 leading-relaxed">
                        {step.tagline}
                      </p>
                    )}
                    
                    <p className="text-secondary-foreground/70 mb-6 leading-relaxed group-hover:text-secondary-foreground/90 transition-colors duration-300">
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

                  {/* Image Side */}
                  <div className="flex-1 relative min-h-[300px] md:min-h-[400px] overflow-hidden">
                    <div className="absolute inset-0 rounded-xl m-4 overflow-hidden">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover rounded-xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary/20 group-hover:from-accent/30 group-hover:to-primary/30 group-hover:opacity-70 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow Connector (between steps, hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute -bottom-12 left-1/2 -translate-x-1/2 z-10 items-center justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-0.5 h-8 bg-accent/50" />
                    <ArrowDown className="w-8 h-8 text-accent/80 animate-bounce" />
                    <div className="w-0.5 h-8 bg-accent/50" />
                  </div>
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