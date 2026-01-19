import { ArrowRight, ArrowDown } from "lucide-react";

const steps = [
  {
    title: "Submit Draft",
    tagline: "The first step to transforming your content from average to overachieving",
    description: "Upload your draft and campaign brief. Our AI instantly forecasts performance and assigns a quality score, giving you a clear look into the future before publishing.",
    cta: "Discover more",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
  },
  {
    title: "Validation Engine",
    tagline: "Engineer content that lands, resonates, and performs with our proprietary validation series that tests against 10+ performance signals",
    description: "Run your content through our multi-layer validation series, where it's tested against multiple performance signals, including synthetic audience simulations and AI personas, delivering feedback in seconds, not weeks.",
    cta: "Discover more",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
  {
    title: "Optimisation Engine",
    tagline: "Select from multiple optimised variants and get one step closer to the 30% of content that successfully delivers ROI",
    description: "Our AI optimisation engine aggregates and synthesises results to generate multiple high-impact variants of your content, turning good ideas into great outcomes.",
    cta: "Get started",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    title: "Compare Insights",
    tagline: "Stop guessing what works when you can know what works with intotheopen",
    description: "Review side-by-side variants with predictive analytics, making it simple to choose the version most likely to deliver measurable impact.",
    cta: "Get started",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
  },
  {
    title: "Publish & Refine",
    tagline: "We don't stop at publication; our AI continues optimising until your content reaches its full potential. Publish anywhere.",
    description: "Once live, intotheopen tracks performance in real time and automatically refines messaging to maximise ROI.",
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
            How it works
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            The magical conveyor belt transforming your drafts into high-impact content in five simple steps.
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
                    <p className="text-secondary-foreground/80 italic mb-4 leading-relaxed">
                      {step.tagline}
                    </p>
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
