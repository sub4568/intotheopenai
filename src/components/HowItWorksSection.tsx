import { FileText, CheckCircle, Sparkles, Send, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Draft",
    description: "Create content",
  },
  {
    icon: CheckCircle,
    title: "Validate",
    description: "Test in seconds",
  },
  {
    icon: Sparkles,
    title: "Optimize",
    description: "AI-powered variants",
  },
  {
    icon: Send,
    title: "Publish",
    description: "Launch anywhere",
  },
  {
    icon: BarChart3,
    title: "Refine",
    description: "Auto-improve live",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-28 md:py-32 bg-[#f9f8f6]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-primary-navy leading-[1.1]">
            From draft to performance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A continuous workflow that engineers content success
          </p>
        </div>

        {/* Horizontal Stepper */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-[#1e4fc2]/20" style={{ left: '10%', right: '10%' }} />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Icon Circle */}
                <div className="relative z-10 w-24 h-24 rounded-full border-2 border-[#1e4fc2]/30 bg-[#1e4fc2]/5 flex items-center justify-center mb-6 group-hover:border-[#1e4fc2] group-hover:bg-[#1e4fc2]/10 transition-all duration-300">
                  <step.icon className="w-10 h-10 text-[#93b4ff] group-hover:text-[#1e4fc2] relative z-10" strokeWidth={2} />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#164B82] flex items-center justify-center text-white font-bold text-sm border-2 border-[#1e4fc2]">
                    {index + 1}
                  </div>
                </div>
                
                {/* Text */}
                <h3 className="text-xl font-bold text-primary-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-[#1e4fc2]/30 transition-all duration-300">
            <span className="text-sm font-semibold text-gray-600">End-to-end content intelligence</span>
            <div className="w-2 h-2 rounded-full bg-[#1e4fc2] animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
