import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Core",
    price: "$49",
    period: "/mo",
    description: "For individuals and small teams getting started",
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
    price: "$99",
    period: "/mo",
    description: "For growing teams who need more power",
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
    description: "For large organizations with custom needs",
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
  return (
    <section id="pricing" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-medium text-sm mb-4 tracking-wide uppercase">
            Transparent Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Plans that scale with you
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free, upgrade when you're ready. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                plan.popular
                  ? "bg-card border-accent shadow-glow scale-105"
                  : "bg-card border-border hover:border-accent/30 hover:shadow-medium"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-full shadow-glow">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.variant}
                size="lg"
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Trust Note */}
        <p className="text-center text-sm text-muted-foreground mt-12">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
