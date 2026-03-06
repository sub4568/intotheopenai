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
    <section id="pricing" className="py-28 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center mb-12 md:mb-14 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-primary-navy leading-[1.1]">
            Transparent pricing for every team
          </h2>
          <p className="text-lg text-gray-600">
            Start today, scale when ready
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-xl border transition-all duration-300 hover:border-[#1e4fc2] hover:shadow-[0_0_0_1px_#1e4fc2] flex flex-col bg-white ${
                plan.popular
                  ? "border-[#1e4fc2]/30 shadow-lg"
                  : "border-gray-200 shadow-sm"
              } ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: cardsVisible ? `${index * 100}ms` : '0ms' }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-[#1e4fc2] text-white shadow-md">
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

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-4 h-4 shrink-0 mt-1 text-[#1e4fc2]" strokeWidth={2.5} />
                    <span className="text-sm leading-relaxed text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.variant}
                size="default"
                className="w-full transition-all duration-200 mt-auto group-hover:scale-105"
                asChild
              >
                <a href="#contact">
                  {plan.cta}
                </a>
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
