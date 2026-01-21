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
    <section id="pricing" className="py-20 md:py-24" style={{ backgroundColor: '#F2F7FA' }}>
      <div className="container mx-auto px-4">
        <div
          ref={headerRef}
          className={`text-center mb-12 md:mb-14 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-block font-medium text-xs mb-3 tracking-wider uppercase" style={{ color: '#699ACD' }}>
            Transparent Pricing
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#164B82' }}>
            Plans that scale with your ambition
          </h2>
          <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#343434', opacity: 0.75 }}>
            Start free, upgrade when you're ready. No hidden fees, no surprises.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 flex flex-col bg-white ${
                plan.popular
                  ? "border-border shadow-lg md:scale-[1.02] hover:shadow-xl"
                  : "border-border shadow-md hover:shadow-lg"
              } ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: cardsVisible ? `${index * 100}ms` : '0ms' }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: '#E4B795', color: '#164B82' }}>
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-5">
                <h3 className="text-lg font-semibold mb-1.5" style={{ color: '#164B82' }}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-bold" style={{ color: '#164B82' }}>
                    {plan.price}
                  </span>
                  <span className="text-sm" style={{ color: '#343434', opacity: 0.6 }}>{plan.period}</span>
                </div>
                <p className="text-sm mt-2 leading-relaxed" style={{ color: '#343434', opacity: 0.7 }}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-2.5 mb-6 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#699ACD' }} />
                    <span className="text-sm leading-[1.5]" style={{ color: '#343434', opacity: 0.85 }}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.variant}
                size="default"
                className="w-full transition-all duration-200 mt-auto"
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
