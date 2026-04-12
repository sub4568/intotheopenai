import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const plans = [
  {
    name: "Core",
    price: "$649",
    period: "/mo",
    description: "For teams starting to build performance into their content process.",
    features: [
      "5 content pieces per month",
      "Predictive scoring engine",
      "Standard validation suite",
      "Email support",
      "Performance analytics",
    ],
    cta: "Get started",
    variant: "outline" as const,
    popular: false,
  },
  {
    name: "Professional",
    price: "$1,199",
    period: "/mo",
    description: "For agencies running content at scale and delivering client results.",
    features: [
      "25 content pieces per month",
      "Advanced validation engine",
      "Full optimisation suite",
      "Priority support",
      "Advanced analytics",
      "Team collaboration",
      "Custom templates",
    ],
    cta: "Get started",
    variant: "accent" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For larger teams with bespoke requirements and dedicated support.",
    features: [
      "Unlimited content pieces",
      "Custom validation rules",
      "Dedicated account manager",
      "API access",
      "SSO & advanced security",
      "Custom integrations",
      "SLA guarantee",
    ],
    cta: "Talk to us",
    variant: "navy" as const,
    popular: false,
  },
];

const PricingSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section id="pricing" className="py-28 md:py-32 bg-white">
      <div className="max-w-[1100px] mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center mb-14 transition-all duration-700 ease-out ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-black/30 mb-4">Pricing</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-black leading-[1.1]">
            Simple, transparent pricing
          </h2>
          <p className="text-base text-gray-500 max-w-sm mx-auto">
            Start with what you need. Scale as your clients do.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl border flex flex-col bg-white transition-all duration-500 ease-out hover:shadow-xl hover:-translate-y-1 ${
                plan.popular
                  ? "border-black/20 shadow-lg"
                  : "border-gray-200 shadow-sm"
              } ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: cardsVisible ? `${index * 80}ms` : '0ms', transitionProperty: 'opacity, transform, box-shadow, border-color' }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-black text-white">
                    Most popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-black/50 uppercase tracking-widest mb-3">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-bold text-black tracking-tight">
                    {plan.price}
                  </span>
                  {plan.period && <span className="text-sm text-gray-400">{plan.period}</span>}
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow border-t border-gray-100 pt-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-3.5 h-3.5 shrink-0 mt-1 text-black/40" strokeWidth={2.5} />
                    <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.variant}
                size="default"
                className="w-full mt-auto"
                asChild
              >
                <a href="https://intotheopen-144935016950.us-west1.run.app/" target="_blank" rel="noopener noreferrer">
                  {plan.cta}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
