import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is intotheopen?",
    answer: "intotheopen is an AI-native content intelligence platform that helps teams engineer content performance before and after publication. It enables communications and marketing teams to forecast impact, validate messaging, and continuously optimise content so performance is designed in, not discovered too late.",
  },
  {
    question: "Who is intotheopen built for?",
    answer: "intotheopen is built for communications and marketing teams responsible for performance, reputation, and outcomes. This includes in-house teams, strategic content teams, and agencies delivering content at scale.",
  },
  {
    question: "How is intotheopen different from traditional analytics tools?",
    answer: "Traditional analytics tools explain what happened after content is published. intotheopen provides intelligence before and after publication, helping teams predict how content will land, validate messaging upfront, and continuously refine performance once content is live.",
  },
  {
    question: "Is intotheopen a content creation or generative AI tool?",
    answer: "No. intotheopen does not generate content for you. It is a content intelligence platform, designed to help teams evaluate, improve, and optimise content they create, without replacing human strategy, creativity, or voice.",
  },
  {
    question: "How does intotheopen predict content performance before publishing?",
    answer: "intotheopen uses AI-powered predictive scoring and multi-layer validation to assess content against multiple performance signals, including synthetic audience testing. This provides an early, evidence-based view of how content is likely to perform before it goes live.",
  },
  {
    question: "What happens once content goes live?",
    answer: "Once content is published, intotheopen continues to monitor performance in real time. It tracks how content is landing and automatically refines messaging where possible, helping teams maximise performance without full rewrites or relaunches.",
  },
  {
    question: "Can intotheopen fit into our existing content workflow?",
    answer: "Yes. intotheopen is designed to integrate seamlessly into existing workflows. Teams can continue publishing on the platforms they already use, with intotheopen providing intelligence and optimisation alongside, not in place of, their current tools.",
  },
  {
    question: "Does intotheopen use or store our proprietary content?",
    answer: "Your content remains yours. intotheopen does not use proprietary customer content to train shared models, and content is handled in line with strict data security and confidentiality standards.",
  },
  {
    question: "Is there a free plan or early access available?",
    answer: "Yes. intotheopen currently offers early access for selected teams. You can request early access via the website to explore the platform and provide feedback as it evolves.",
  },
  {
    question: "How long does it take to start seeing value?",
    answer: "Value is delivered immediately. Teams gain actionable insight as soon as content is analysed, with benefits increasing over time as content performance is continuously refined and optimised.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-24" style={{ backgroundColor: '#F2F7FA' }}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-block font-medium text-xs mb-3 tracking-wider uppercase" style={{ color: '#699ACD' }}>
            FAQ
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#164B82' }}>
            Frequently asked questions
          </h2>
          <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#343434', opacity: 0.75 }}>
            Everything you need to know about intotheopen
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="group bg-white border border-border rounded-xl px-5 shadow-md hover:shadow-lg data-[state=open]:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-sm font-medium hover:no-underline py-4 transition-all duration-300" style={{ color: '#164B82' }}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm pb-4 leading-[1.65]" style={{ color: '#343434', opacity: 0.8 }}>
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
