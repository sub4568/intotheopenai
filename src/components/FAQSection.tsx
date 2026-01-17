import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is intotheopen?",
    answer: "intotheopen is an AI-driven proactive content intelligence platform that predicts, validates, and optimises high-impact content performance before and after it goes live, helping comms and marketing teams eliminate wasted time, effort, and budget.",
  },
  {
    question: "How does intotheopen work?",
    answer: "Our platform forecasts how content will perform, tests it against 10+ performance signals (including synthetic audiences), generates optimised variants ready to be published, and tracks performance in real time for continuous refinement to maximise ROI.",
  },
  {
    question: "Who is intotheopen for?",
    answer: "We’re built for comms and marketing teams in agencies, brands, and enterprises who want to improve content effectiveness, reduce wasted spend, and prove ROI with data-backed insights.",
  },
  {
    question: "What makes intotheopen different from traditional tools?",
    answer: "Unlike reactive tools that only measure results after publishing, intotheopen is proactive. We show you how content will perform before it goes live, and keep improving it afterwards.",
  },
  {
    question: "How many performance indicators does intotheopen test against?",
    answer: "Content is tested against 10+ performance signals, covering clarity, tone, engagement, audience resonance, and more. These insights are aggregated into a single optimisation engine for actionable results.",
  },
  {
    question: "Can you directly push through intotheopen?",
    answer: "Yes. You can publish content directly from intotheopen or use our insights to refine content published on other platforms. Either way, your content is continuously tracked and optimised.",
  },
  {
    question: "How much does intotheopen cost?",
    answer: "We offer tiered subscription plans for startups, agencies, and enterprises, starting from $649/month. Pricing scales with your team’s needs, integrations, and usage.",
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-medium text-sm mb-4 tracking-wide uppercase">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about intotheopen
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="group bg-card border border-border rounded-xl px-6 hover:border-accent/50 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01] data-[state=open]:border-accent/50 data-[state=open]:shadow-xl transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-accent hover:no-underline py-5 group-hover:translate-x-1 transition-all duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 group-hover:text-foreground transition-colors duration-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
