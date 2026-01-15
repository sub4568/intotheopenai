import { ArrowRight, Link, Gauge, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Link,
    title: "Connect Your Sources",
    description: "Integrate your ad platforms, CRM, website analytics, and more in just a few clicks. We support 100+ integrations out of the box.",
  },
  {
    number: "02",
    icon: Gauge,
    title: "See Your Data Unified",
    description: "Watch as all your metrics come together in beautiful, customizable dashboards. No SQL required—just drag and drop.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Drive Growth with Insights",
    description: "Act on AI-powered recommendations. Identify winning campaigns, cut waste, and prove ROI to stakeholders.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-medium text-sm mb-4 tracking-wide uppercase">
            How it Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Up and running in minutes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No complex setup. No learning curve. Start seeing insights on day one.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row items-start gap-6 mb-12 last:mb-0"
            >
              {/* Step Number & Connector */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-2xl flex items-center justify-center font-bold text-xl shadow-glow">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block w-0.5 h-24 bg-gradient-to-b from-accent to-transparent mt-4" />
                )}
              </div>

              {/* Content Card */}
              <div className="flex-1 bg-card rounded-xl p-6 border border-border shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <step.icon className="w-5 h-5 text-accent" />
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="mt-4 flex items-center gap-2 text-accent text-sm font-medium">
                    <span>Then</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
