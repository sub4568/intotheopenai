import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, Zap, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Forecast impact before publishing",
    description: "Know what works before you spend",
  },
  {
    icon: Zap,
    title: "Validate in seconds, not weeks",
    description: "Replace slow focus groups with instant AI validation",
  },
  {
    icon: TrendingUp,
    title: "Optimize continuously after launch",
    description: "Content that improves automatically over time",
  },
];

const ThirdPageSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-28 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Left Column: Headline */}
          <div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-primary-navy">
              Stop guessing. Start knowing.
            </h2>
          </div>

          {/* Right Column: Benefits */}
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex gap-5 group transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl border border-[#1e4fc2]/20 bg-[#1e4fc2]/5 flex items-center justify-center group-hover:border-[#1e4fc2] group-hover:bg-[#1e4fc2]/10 transition-all duration-300">
                  <benefit.icon className="w-7 h-7 text-[#93b4ff] group-hover:text-[#1e4fc2]" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-navy mb-2 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdPageSection;
