import { TrendingUp, Clock, DollarSign, Users } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: "47%",
    label: "Increase in Marketing ROI",
    description: "Average improvement in return on ad spend within 90 days",
  },
  {
    icon: Clock,
    value: "15h",
    label: "Hours Saved Per Week",
    description: "Less time spent pulling reports, more time executing strategy",
  },
  {
    icon: DollarSign,
    value: "$2.3M",
    label: "Average Revenue Impact",
    description: "Attributed revenue for mid-market teams in Year 1",
  },
  {
    icon: Users,
    value: "92%",
    label: "Team Adoption Rate",
    description: "Marketing teams actively using the platform daily",
  },
];

const testimonials = [
  {
    quote: "intotheopen transformed how we report to leadership. We went from guesswork to data-backed decisions overnight.",
    author: "Sarah Chen",
    role: "VP of Marketing",
    company: "TechScale Inc.",
  },
  {
    quote: "The ROI attribution alone paid for the platform 10x over. It's now indispensable for our team.",
    author: "Marcus Williams",
    role: "Head of Growth",
    company: "Bloom Commerce",
  },
];

const ResultsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-medium text-sm mb-4 tracking-wide uppercase">
            Proven Results
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real impact for real teams
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Numbers that speak for themselves—from companies just like yours.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card rounded-xl border border-border hover:border-accent/30 hover:shadow-medium transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">
                {metric.value}
              </div>
              <div className="font-medium text-foreground mb-1">
                {metric.label}
              </div>
              <p className="text-sm text-muted-foreground">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-gradient-card rounded-2xl border border-border shadow-soft"
            >
              <svg
                className="w-10 h-10 text-accent/30 mb-4"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-lg text-foreground mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-accent rounded-full" />
                <div>
                  <div className="font-medium text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
