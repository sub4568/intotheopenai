import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/lib/supabase";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { ArrowRight } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().max(2000, "Message must be less than 2000 characters").optional(),
});

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = contactSchema.safeParse({ name, email, message });
    if (!validation.success) {
      toast.error(validation.error.errors[0].message);
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.from("waitlist").insert({
        name: validation.data.name,
        email: validation.data.email,
        message: validation.data.message || null,
      });

      if (error) throw error;

      toast.success("Thank you! We'll be in touch soon.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #699ACD 0%, #5B8DBF 100%)' }}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20 bg-white animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-15 bg-white animate-float-medium" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Let's build smarter content together
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Ready to transform how your team creates content? Book a demo or reach out for partnership inquiries.
            </p>
          </div>

          {/* Form Card */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 animate-slide-in-left hover:shadow-3xl transition-shadow duration-500">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-semibold text-primary-navy mb-2 group-focus-within:text-soft-blue transition-colors">
                    Your name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-gray-50 border-gray-200 text-primary-navy placeholder:text-gray-400 focus:border-soft-blue focus:ring-2 focus:ring-soft-blue/30 transition-all duration-300 h-12 text-base hover:border-soft-blue/50"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-sm font-semibold text-primary-navy mb-2 group-focus-within:text-soft-blue transition-colors">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border-gray-200 text-primary-navy placeholder:text-gray-400 focus:border-soft-blue focus:ring-2 focus:ring-soft-blue/30 transition-all duration-300 h-12 text-base hover:border-soft-blue/50"
                    placeholder="john@company.com"
                    required
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-semibold text-primary-navy mb-2 group-focus-within:text-soft-blue transition-colors">
                    Message <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your content goals or what you'd like to discuss..."
                    className="bg-gray-50 border-gray-200 text-primary-navy placeholder:text-gray-400 focus:border-soft-blue focus:ring-2 focus:ring-soft-blue/30 min-h-[140px] resize-y transition-all duration-300 text-base hover:border-soft-blue/50"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary-navy hover:bg-secondary-navy text-white font-semibold text-base h-12 hover:scale-[1.02] hover:shadow-lg transition-all duration-200 group"
                >
                  {isSubmitting ? "Submitting..." : "Book a Demo Call"}
                  {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />}
                </Button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  We typically respond within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
