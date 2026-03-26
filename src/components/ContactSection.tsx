import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabase";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const contactSchema = z.object({
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
});

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const { ref: trustRef, isVisible: trustVisible } = useScrollAnimation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = contactSchema.safeParse({ email });
    if (!validation.success) {
      toast.error(validation.error.errors[0].message);
      return;
    }

    setIsSubmitting(true);
    
    try {
      if (!supabase) {
        toast.success("Thanks! We'll be in touch soon (demo mode - no database configured)");
        console.log("Form data:", validation.data);
        setEmail("");
        return;
      }

      const { error } = await supabase.from("waitlist").insert({
        email: validation.data.email,
        name: null,
        message: null,
      });

      if (error) throw error;

      toast.success("Thank you! We'll be in touch soon.");
      setEmail("");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-5 leading-[1.1]">
            Ready to engineer better content?
          </h2>
          <p className="text-lg text-gray-600">
            Join teams who build content performance, not guess at it
          </p>
        </div>

        {/* Inline Form */}
        <div 
          ref={formRef}
          className={`max-w-2xl mx-auto mb-12 transition-all duration-700 ${formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-14 px-6 text-base bg-gray-50 border-2 border-gray-200 focus:border-black focus:ring-2 focus:ring-black/20 rounded-xl"
              placeholder="you@company.com"
              required
            />
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="h-14 px-8 bg-[#111] hover:bg-[#222] text-white font-bold text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {isSubmitting ? "Sending..." : "Request Access"}
              {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}
            </Button>
          </form>
        </div>

        {/* Trust Signals */}
        <div 
          ref={trustRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          <div className={`flex items-center gap-3 justify-center group transition-all duration-700 ${trustVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
              <svg className="w-5 h-5 text-[#333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-black">24-hour response</p>
              <p className="text-xs text-gray-500">Fast replies guaranteed</p>
            </div>
          </div>

          <div className={`flex items-center gap-3 justify-center group transition-all duration-700 ${trustVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: trustVisible ? '100ms' : '0ms' }}>
            <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
              <svg className="w-5 h-5 text-[#333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-black">No credit card</p>
              <p className="text-xs text-gray-500">Risk-free demo access</p>
            </div>
          </div>

          <div className={`flex items-center gap-3 justify-center group transition-all duration-700 ${trustVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: trustVisible ? '200ms' : '0ms' }}>
            <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
              <svg className="w-5 h-5 text-[#333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-black">Join 50+ teams</p>
              <p className="text-xs text-gray-500">Already shipping better</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
