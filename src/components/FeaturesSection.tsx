import {
  CheckCircle,
  Calendar,
  MessageCircle,
  Sparkles,
  BarChart3,
  Check,
  X,
  Zap
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: CheckCircle,
    title: "Instant Validation",
    description: "Test against 10+ performance signals in seconds",
  },
  {
    icon: Calendar,
    title: "Performance Forecasting",
    description: "AI-powered predictions before you publish",
  },
  {
    icon: MessageCircle,
    title: "Message Optimization",
    description: "Generate high-impact variants automatically",
  },
  {
    icon: BarChart3,
    title: "Real-Time Tracking",
    description: "Monitor live performance across channels",
  },
  {
    icon: Sparkles,
    title: "Continuous Refinement",
    description: "Auto-tune messaging after publication",
  },
  {
    icon: Zap,
    title: "Team Collaboration",
    description: "Work together seamlessly on content strategy",
  },
];

const intoTheopenBenefits = [
  "Predicts content performance before launch",
  "Reduces wasted spend on underperforming campaigns",
  "Delivers insight in seconds, not weeks",
  "Improves live content without rewrites",
];

const traditionalDrawbacks = [
  "Only measures success after launch",
  "Relies on slow, costly focus groups",
  "Content is static once published",
  "No predictive intelligence",
];

const FeaturesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();
  const { ref: comparisonRef, isVisible: comparisonVisible } = useScrollAnimation();

  return (
    <section id="features" className="py-28 md:py-32 bg-[#0f2942] relative overflow-hidden">
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-white leading-[1.1]">
            Everything you need to ship winning content
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            The complete platform for content intelligence
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-8 rounded-xl border border-white/10 hover:border-[#1e4fc2] transition-all duration-300 hover:shadow-[0_0_0_1px_#1e4fc2] ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: gridVisible ? `${index * 100}ms` : '0ms' }}
            >
              <feature.icon className="w-6 h-6 text-[#93b4ff] mb-6 group-hover:text-white transition-colors duration-300" strokeWidth={2} />
              <h3 className="text-lg font-semibold mb-3 text-white leading-tight">
                {feature.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div
          ref={comparisonRef}
          className={`transition-all duration-700 ${comparisonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-12 text-white text-center">
            Why teams choose intotheopen
          </h3>
          
          <div className="max-w-4xl mx-auto border border-white/10 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-5 px-6 text-left text-xs font-semibold uppercase tracking-wider text-white/40">Feature</th>
                  <th className="py-5 px-6 text-center text-xs font-semibold uppercase tracking-wider text-[#93b4ff]">intotheopen</th>
                  <th className="py-5 px-6 text-center text-xs font-semibold uppercase tracking-wider text-white/40">Traditional</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Predict performance before launch", us: true, them: false },
                  { feature: "Instant validation (seconds not weeks)", us: true, them: false },
                  { feature: "Continuous optimization after publish", us: true, them: false },
                  { feature: "Reduces wasted campaign spend", us: true, them: false },
                ].map((row, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-white/5 last:border-0 ${index % 2 === 0 ? 'bg-white/[0.02]' : ''} hover:bg-white/[0.04] transition-colors`}
                  >
                    <td className="py-5 px-6 text-sm font-medium text-white/80">{row.feature}</td>
                    <td className="py-5 px-6 text-center">
                      {row.us ? <Check className="w-5 h-5 text-[#93b4ff] mx-auto" strokeWidth={2} /> : <X className="w-5 h-5 text-white/20 mx-auto" strokeWidth={2} />}
                    </td>
                    <td className="py-5 px-6 text-center">
                      {row.them ? <Check className="w-5 h-5 text-white/40 mx-auto" strokeWidth={2} /> : <X className="w-5 h-5 text-white/20 mx-auto" strokeWidth={2} />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
