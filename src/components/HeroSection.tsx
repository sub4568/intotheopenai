import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-20 overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Engineer content<br />
              that lands,<br />
              resonates,<br />
              <span className="text-accent">and performs</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Unlock your content's full potential with our AI-driven content intelligence that predicts, validates, and optimises high-impact content before and after it goes live.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button variant="hero" size="xl">
                Get Early Access
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero-outline" size="xl">
                Explore Features
              </Button>
            </div>
          </div>

          {/* Right Content - Overlapping Images */}
          <div className="relative h-[500px] lg:h-[600px]">
            {/* Top Image - Dashboard/Screen */}
            <div className="absolute top-0 right-0 w-[85%] h-[55%] rounded-2xl overflow-hidden shadow-large">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" 
                alt="Dashboard analytics"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Bottom Image - Team Meeting */}
            <div className="absolute bottom-0 left-0 w-[85%] h-[55%] rounded-2xl overflow-hidden shadow-large">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
