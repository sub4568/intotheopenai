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
  "Predicts content performance before launch",
  "Reduces wasted spend on underperforming campaigns",
  "Delivers insight in seconds, not weeks",
  "Improves live content without rewrites or relaunches",
];

const traditionalDrawbacks = [
  "Success is only measured after launch through A/B tests and analytics, wasting budget on underperforming content.",
  "Relies on slow, costly focus groups, surveys, or endless internal reviews; feedback takes days, weeks, or months.",
  "Content is static once published; improvements require a full rewrite or new campaign, increasing cost and effort.",
];

const teamsFor = [
  "Communications teams",
  "Marketing teams",
  "Strategic content teams",
  "Brand and narrative leaders",
];

const FeaturesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();
  const { ref: bottomRef, isVisible: bottomVisible } = useScrollAnimation();
  const { ref: comparisonRef, isVisible: comparisonVisible } = useScrollAnimation();
  const { ref: teamsRef, isVisible: teamsVisible } = useScrollAnimation();

  return (
    <section id="features" className="py-20 md:py-24 bg-page-light">
      <div className="container mx-auto px-4">
        <div
          ref={headerRef}
          className={`text-center mb-12 md:mb-14 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#164B82' }}>
            Our features
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#343434', opacity: 0.75 }}>
            Supercharge your content with AI-driven proactive content intelligence
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-6 bg-white rounded-xl border border-border shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                transitionDelay: gridVisible ? `${index * 80}ms` : '0ms',
              }}
            >
              <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#164B82' }}>
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-1.5" style={{ color: '#164B82' }}>
                {feature.title}
              </h3>
              <p className="text-sm italic mb-2" style={{ color: '#699ACD' }}>
                {feature.subtitle}
              </p>
              <p className="text-sm leading-[1.65]" style={{ color: '#343434', opacity: 0.8 }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div ref={bottomRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-20">
          {bottomFeatures.map((feature, index) => (
            <div
              key={index}
              className={`group p-6 bg-white rounded-xl border border-border shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${bottomVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                transitionDelay: bottomVisible ? `${index * 80}ms` : '0ms',
              }}
            >
              <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#164B82' }}>
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-1.5" style={{ color: '#164B82' }}>
                {feature.title}
              </h3>
              <p className="text-sm italic mb-2" style={{ color: '#699ACD' }}>
                {feature.subtitle}
              </p>
              <p className="text-sm leading-[1.65]" style={{ color: '#343434', opacity: 0.8 }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div
          ref={comparisonRef}
          className={`text-center mb-10 transition-all duration-700 ${comparisonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-primary-navy">
            Why teams choose intotheopen
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          <div
            className={`group p-6 md:p-7 bg-white rounded-xl border border-border shadow-md hover:shadow-glow hover:-translate-y-2 hover:border-accent transition-all duration-300 ${comparisonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: comparisonVisible ? '100ms' : '0ms' }}
          >
            <h3 className="text-base font-semibold mb-5 text-center text-primary-navy group-hover:text-accent transition-colors">
              intotheopen
            </h3>
            <div className="space-y-3">
              {intoTheopenBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2.5 group/item">
                  <Sparkles className="w-4 h-4 mt-0.5 flex-shrink-0 text-soft-blue group-hover/item:scale-110 transition-transform" />
                  <p className="text-sm leading-[1.6] text-muted-lighter">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`group p-6 md:p-7 bg-white rounded-xl border border-border shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${comparisonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: comparisonVisible ? '150ms' : '0ms' }}
          >
            <h3 className="text-base font-semibold mb-5 text-center text-primary-navy">
              Traditional methods
            </h3>
            <div className="space-y-3">
              {traditionalDrawbacks.map((drawback, index) => (
                <div key={index} className="flex items-start gap-2.5 group/item">
                  <X className="w-4 h-4 mt-0.5 flex-shrink-0 text-secondary-navy group-hover/item:scale-110 transition-transform" />
                  <p className="text-sm leading-[1.6] text-muted-lighter">
                    {drawback}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tagline after comparison */}
        <div
          className={`mt-12 text-center transition-all duration-700 ${comparisonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: comparisonVisible ? '300ms' : '0ms' }}
        >
          <p className="text-base md:text-lg text-primary-navy font-medium max-w-2xl mx-auto">
            Traditional tools explain failure after the fact. intotheopen helps teams design success.
          </p>
        </div>

        {/* Built for teams section */}
        <div
          ref={teamsRef}
          className={`mt-20 text-center transition-all duration-700 ${teamsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-primary-navy">
            Built for teams who can't afford to guess
          </h2>
          <p className="text-base max-w-2xl mx-auto mb-8 leading-relaxed text-muted-gray">
            intotheopen is designed for teams responsible for performance, reputation, and outcomes.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {teamsFor.map((team, index) => (
              <div
                key={index}
                className={`group/badge flex items-center gap-2 px-4 py-2.5 bg-white rounded-full border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-accent transition-all duration-300 ${teamsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: teamsVisible ? `${index * 80}ms` : '0ms' }}
              >
                <span className="text-sm text-soft-blue group-hover/badge:scale-110 transition-transform">→</span>
                <span className="text-sm font-medium text-primary-navy group-hover/badge:text-accent transition-colors">{team}</span>
              </div>
            ))}
          </div>

          <p className="text-sm italic text-muted-gray opacity-60">
            Used by in-house teams and agencies delivering content at scale.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
