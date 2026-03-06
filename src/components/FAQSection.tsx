import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: accordionRef, isVisible: accordionVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-28 md:py-32 bg-[#f9f8f6]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-primary-navy leading-[1.1]">
            Questions? We've got answers
          </h2>
        </div>

        <div 
          ref={accordionRef}
          className={`max-w-3xl mx-auto transition-all duration-700 ${accordionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="group bg-white border border-gray-200 rounded-xl px-6 shadow-sm hover:shadow-md data-[state=open]:shadow-md data-[state=open]:border-[#699ACD]/30 transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-base font-bold hover:no-underline py-5 text-primary-navy">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base pb-5 leading-relaxed text-gray-600">
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
