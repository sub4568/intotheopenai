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
    <section id="pricing" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-block text-accent font-medium text-sm mb-4 tracking-wide uppercase">
            Transparent Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Plans that scale with your ambition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free, upgrade when you're ready. No hidden fees, no surprises.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-3 hover:scale-[1.03] cursor-pointer flex flex-col ${
                plan.popular
                  ? "bg-card border-accent shadow-glow scale-105 hover:shadow-2xl"
                  : "bg-card border-border hover:border-accent/50 hover:shadow-xl"
              } ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: cardsVisible ? `${index * 150}ms` : '0ms' }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 animate-bounce-subtle">
                  <span className="bg-gradient-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-full shadow-glow">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-200">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform duration-200" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.variant}
                size="lg"
                className="w-full hover:scale-105 transition-transform duration-200 mt-auto"
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
          // All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
