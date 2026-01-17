import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/lib/supabase";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

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
    <section id="contact" className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Smarter content starts here.
            </h2>
            <p className="text-lg text-primary-foreground/70">
              Reach our team for product or partnership inquiries.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <form onSubmit={handleSubmit} className="space-y-6 animate-slide-in-left">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary-foreground mb-2">
                  Your name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Please type your message here"
                  className="bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent min-h-[160px] resize-y"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Book a Demo Call"}
              </Button>
            </form>

            <div className="space-y-10 lg:pl-8 animate-slide-in-right">
              {/* Email */}
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold text-primary-foreground">Email</h3>
                </div>
                <p className="text-primary-foreground/70 mb-2">
                  Direct support from our experts.
                </p>
                <a
                  href="mailto:Emmanuel@intotheopen.ai"
                  className="text-accent hover:underline"
                >
                  Emmanuel@intotheopen.ai
                </a>
              </div>

              {/* Phone */}
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold text-primary-foreground">Phone</h3>
                </div>
                <p className="text-primary-foreground/70 mb-2">
                  Weekdays, 8am–5pm (UK time)
                </p>
                <a
                  href="tel:+447572648134"
                  className="text-primary-foreground hover:text-accent transition-colors"
                >
                  +44 7572 648134
                </a>
              </div>

              {/* Location */}
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold text-primary-foreground">Location</h3>
                </div>
                <p className="text-primary-foreground/70 mb-2">
                  101 Web Lane, London, UK
                </p>
                <p className="text-primary-foreground/70">
                  Visit our London office.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
