import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can I get started?",
    answer: "Most teams are up and running within 15 minutes. Our onboarding wizard walks you through connecting your first data sources, and you'll see insights appearing immediately.",
  },
  {
    question: "What integrations do you support?",
    answer: "We integrate with 100+ marketing and sales tools including Google Ads, Meta Ads, LinkedIn, HubSpot, Salesforce, Google Analytics, Mixpanel, and many more. Custom integrations are available on Enterprise plans.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We're SOC 2 Type II certified, GDPR compliant, and CCPA compliant. Your data is encrypted at rest and in transit, and we never sell or share your information.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel your subscription at any time. If you cancel, you'll retain access until the end of your current billing period. We also offer a 30-day money-back guarantee.",
  },
  {
    question: "Do you offer discounts for startups or nonprofits?",
    answer: "Yes! We offer special pricing for qualified startups, educational institutions, and nonprofit organizations. Contact our sales team to learn more about our discount programs.",
  },
  {
    question: "What kind of support do you provide?",
    answer: "All plans include email support with response times under 24 hours. Professional plans get priority support with live chat, and Enterprise customers receive a dedicated account manager and phone support.",
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
