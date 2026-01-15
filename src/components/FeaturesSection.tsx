import { 
  BarChart3, 
  Zap, 
  Target, 
  LineChart, 
  Shield, 
  Puzzle 
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Unified Dashboard",
    description: "All your marketing channels in one view. No more switching between platforms.",
  },
  {
    icon: Zap,
    title: "Real-time Analytics",
    description: "See performance as it happens. React instantly to market changes.",
  },
  {
    icon: Target,
    title: "Campaign Attribution",
    description: "Know exactly which campaigns drive revenue with multi-touch attribution.",
  },
  {
    icon: LineChart,
    title: "Predictive Insights",
    description: "AI-powered forecasting helps you plan budgets with confidence.",
  },
  {
    icon: Shield,
    title: "Data Privacy First",
    description: "GDPR and CCPA compliant. Your data stays yours, always.",
  },
  {
    icon: Puzzle,
    title: "Easy Integrations",
    description: "Connect 100+ tools in minutes. No engineering required.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-medium text-sm mb-4 tracking-wide uppercase">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything you need to scale marketing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Purpose-built for marketing and sales teams who need clarity, speed, and results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-xl border border-border hover:border-accent/30 hover:shadow-medium transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
