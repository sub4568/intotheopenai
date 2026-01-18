import {
  CheckCircle,
  Calendar,
  MessageCircle,
  Sparkles,
  User,
  X
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: CheckCircle,
    title: "Validate at Scale",
    subtitle: "Instant feedback without focus groups",
    description: "Run your content through our proprietary validation engine, testing against 10+ performance signals and synthetic audience simulations in seconds.",
  },
  {
    icon: Calendar,
    title: "Predict Performance",
    subtitle: "Know what works before you publish",
    description: "Forecast how your content will perform with AI-powered predictive analytics, so you can invest only in content that delivers ROI.",
  },
  {
    icon: MessageCircle,
    title: "Optimise Messaging",
    subtitle: "Transform drafts into high-impact content",
    description: "Our optimisation engine generates multiple variants of your content, showing side-by-side comparisons with predicted performance scores.",
  },
];

const bottomFeatures = [
  {
    icon: Sparkles,
    title: "Real-Time Tracking",
    subtitle: "Stay ahead after you hit publish",
    description: "Monitor engagement metrics live, track KPIs in real time, and see exactly how your content is landing with your audience.",
  },
  {
    icon: User,
    title: "Continuous Refinement",
    subtitle: "Content that gets smarter over time",
    description: "intotheopen automatically fine-tunes messaging after publication, ensuring your content always reaches its full potential.",
  },
];

const intoTheopenBenefits = [
  "Forecasts how content will perform before publishing, no wasted campaigns",
  "Automatically generates optimised versions and refines content in real time post-publish",
  "Tests content against 10+ performance signals, including synthetic audiences and AI personas, delivering feedback in seconds.",
];

const traditionalDrawbacks = [
  "Success is only measured after launch through A/B tests and analytics, wasting budget on underperforming content.",
  "Relies on slow, costly focus groups, surveys, or endless internal reviews; feedback takes days, weeks, or months.",
  "Content is static once published; improvements require a full rewrite or new campaign, increasing cost and effort.",
];

const FeaturesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();
  const { ref: bottomRef, isVisible: bottomVisible } = useScrollAnimation();
  const { ref: comparisonRef, isVisible: comparisonVisible } = useScrollAnimation();

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Supercharge your content with AI-driven proactive content intelligence
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-6 bg-card rounded-2xl border border-border hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                transitionDelay: gridVisible ? `${index * 100}ms` : '0ms',
                animationDelay: `${index * 0.5}s`
              }}
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent/20 group-hover:rotate-6 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-accent italic mb-3">
                {feature.subtitle}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div ref={bottomRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-24">
          {bottomFeatures.map((feature, index) => (
            <div
              key={index}
              className={`group p-6 bg-card rounded-2xl border border-border hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer ${bottomVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                transitionDelay: bottomVisible ? `${index * 100}ms` : '0ms',
                animationDelay: `${index * 0.7}s`
              }}
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent/20 group-hover:rotate-6 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-accent italic mb-3">
                {feature.subtitle}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div
          ref={comparisonRef}
          className={`text-center mb-12 transition-all duration-700 ${comparisonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Why teams choose intotheopen
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div
            className={`group p-8 bg-card rounded-2xl border border-border hover:border-accent/50 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer ${comparisonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: comparisonVisible ? '100ms' : '0ms' }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center group-hover:text-accent transition-colors duration-300">
              Intotheopen
            </h3>
            <div className="space-y-4">
              {intoTheopenBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-200">
                  <Sparkles className="w-5 h-5 text-accent mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200" />
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`group p-8 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer ${comparisonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: comparisonVisible ? '200ms' : '0ms' }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center group-hover:text-primary transition-colors duration-300">
              Traditional methods
            </h3>
            <div className="space-y-4">
              {traditionalDrawbacks.map((drawback, index) => (
                <div key={index} className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-200">
                  <X className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200" />
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {drawback}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
