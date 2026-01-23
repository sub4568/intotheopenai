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
    <section id="contact" className="py-28 bg-primary-navy">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Smarter content starts here.
            </h2>
            <p className="text-lg text-white/70">
              Reach our team for product or partnership inquiries.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6 animate-slide-in-left">
              <div className="group">
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2 group-focus-within:text-accent transition-colors">
                  Your name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-accent focus:ring-2 focus:ring-accent/50 transition-all duration-300"
                  required
                />
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2 group-focus-within:text-accent transition-colors">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-accent focus:ring-2 focus:ring-accent/50 transition-all duration-300"
                  required
                />
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2 group-focus-within:text-accent transition-colors">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Please type your message here"
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-accent focus:ring-2 focus:ring-accent/50 min-h-[160px] resize-y transition-all duration-300"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                disabled={isSubmitting}
                className="group hover:scale-105 transition-all duration-200"
              >
                {isSubmitting ? "Submitting..." : "Book a Demo Call"}
                {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />}
              </Button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
