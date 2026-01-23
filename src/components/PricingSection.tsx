import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const plans = [
  {
    name: "Core",
    price: "$649",
    period: "/mo",
    description: "Access essential features to boost your content strategy.",
    features: [
      "5 content pieces per month",
      "Basic validation engine",
      "Standard optimization",
      "Email support",
      "Basic analytics",
    ],
    cta: "Get Started",
    variant: "outline" as const,
    popular: false,
  },
  {
    name: "Professional",
    price: "$1199",
    period: "/mo",
    description: "Unlock more features to scale your content impact.",
    features: [
      "25 content pieces per month",
      "Advanced validation engine",
      "Full optimization suite",
      "Priority support",
      "Advanced analytics",
      "Team collaboration",
      "Custom templates",
    ],
    cta: "Get Started",
    variant: "accent" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: " Pricing",
    description: "Comprehensive solutions for maximum efficiency.",
    features: [
      "Unlimited content pieces",
      "Custom validation rules",
      "Dedicated account manager",
      "API access",
      "SSO & advanced security",
      "Custom integrations",
      "SLA guarantee",
    ],
    cta: "Contact Us",
    variant: "navy" as const,
    popular: false,
  },
];

const PricingSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section id="pricing" className="py-20 md:py-24 bg-page-light">
      <div className="container mx-auto px-4">
        <div
          ref={headerRef}
          className={`text-center mb-12 md:mb-14 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-block font-medium text-xs mb-3 tracking-wider uppercase text-soft-blue">
            Transparent Pricing
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-primary-navy">
            Plans that scale with your ambition
          </h2>
          <p className="text-base max-w-xl mx-auto leading-relaxed text-muted-gray">
            Start free, upgrade when you're ready. No hidden fees, no surprises.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-glow hover:border-accent flex flex-col bg-white ${
                plan.popular
                  ? "border-border shadow-lg md:scale-[1.02]"
                  : "border-border shadow-md"
              } ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: cardsVisible ? `${index * 100}ms` : '0ms' }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 animate-pulse-subtle">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-warm-peach text-primary-navy">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-5">
                <h3 className="text-lg font-semibold mb-1.5 text-primary-navy group-hover:text-accent transition-colors">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-bold text-primary-navy">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm mt-2 leading-relaxed text-muted-gray">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-2.5 mb-6 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2.5 group/feature">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-soft-blue group-hover/feature:scale-110 transition-transform" />
                    <span className="text-sm leading-[1.5] text-muted-lighter">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.variant}
                size="default"
                className="w-full transition-all duration-200 mt-auto group-hover:scale-105"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <p
          className={`text-center text-sm text-muted-foreground mt-12 transition-all duration-700 ${cardsVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: cardsVisible ? '500ms' : '0ms' }}
        >
         </p>
      </div>
    </section>
  );
};

export default PricingSection;
