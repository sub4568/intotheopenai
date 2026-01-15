import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is intotheopen?",
    answer: "intotheopen is an AI-powered content platform that helps marketing and sales teams create content that lands, resonates, and performs. We validate, optimize, and refine your content to maximize engagement and conversions.",
  },
  {
    question: "How does the validation engine work?",
    answer: "Our validation engine analyzes your content against proven frameworks and best practices. It checks for clarity, emotional resonance, call-to-action effectiveness, and audience alignment to ensure your message hits the mark.",
  },
  {
    question: "Can I integrate intotheopen with my existing tools?",
    answer: "Yes! intotheopen integrates seamlessly with popular marketing tools, CRMs, and content management systems. Enterprise plans include custom API access for deeper integrations.",
  },
  {
    question: "What types of content can I optimize?",
    answer: "You can optimize any marketing or sales content including emails, landing pages, ad copy, social media posts, blog articles, product descriptions, and more.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial on all plans so you can experience the full power of intotheopen before committing. No credit card required to start.",
  },
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
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-soft transition-shadow"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-accent hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
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
