import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

const categories = ["General", "Product", "Security"] as const;

const faqs = [
  {
    category: "General",
    question: "What is intotheopen?",
    answer: "intotheopen is an AI-native content intelligence platform that helps teams engineer content performance before and after publication. It enables communications and marketing teams to forecast impact, validate messaging, and continuously optimise content so performance is designed in, not discovered too late.",
  },
  {
    category: "General",
    question: "Who is intotheopen built for?",
    answer: "intotheopen is built for communications and marketing teams responsible for performance, reputation, and outcomes. This includes in-house teams, strategic content teams, and agencies delivering content at scale.",
  },
  {
    category: "General",
    question: "How long does it take to start seeing value?",
    answer: "Value is delivered immediately. Teams gain actionable insight as soon as content is analysed, with benefits increasing over time as content performance is continuously refined and optimised.",
  },
  {
    category: "Product",
    question: "How is intotheopen different from traditional analytics tools?",
    answer: "Traditional analytics tools explain what happened after content is published. intotheopen provides intelligence before and after publication, helping teams predict how content will land, validate messaging upfront, and continuously refine performance once content is live.",
  },
  {
    category: "Product",
    question: "Is intotheopen a content creation or generative AI tool?",
    answer: "No. intotheopen does not generate content for you. It is a content intelligence platform, designed to help teams evaluate, improve, and optimise content they create, without replacing human strategy, creativity, or voice.",
  },
  {
    category: "Product",
    question: "How does intotheopen predict content performance?",
    answer: "intotheopen uses AI-powered predictive scoring and multi-layer validation to assess content against multiple performance signals, including synthetic audience testing. This provides an early, evidence-based view of how content is likely to perform before it goes live.",
  },
  {
    category: "Product",
    question: "What happens once content goes live?",
    answer: "Once content is published, intotheopen continues to monitor performance in real time. It tracks how content is landing and automatically refines messaging where possible, helping teams maximise performance without full rewrites or relaunches.",
  },
  {
    category: "Product",
    question: "Can intotheopen fit into our existing workflow?",
    answer: "Yes. intotheopen is designed to integrate seamlessly into existing workflows. Teams can continue publishing on the platforms they already use, with intotheopen providing intelligence and optimisation alongside, not in place of, their current tools.",
  },
  {
    category: "Security",
    question: "Does intotheopen use or store our proprietary content?",
    answer: "Your content remains yours. intotheopen does not use proprietary customer content to train shared models, and content is handled in line with strict data security and confidentiality standards.",
  },
  {
    category: "Security",
    question: "Is there a free plan or early access available?",
    answer: "Yes. intotheopen currently offers early access for selected teams. You can request early access via the website to explore the platform and provide feedback as it evolves.",
  },
];

const FAQSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>("General");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = faqs.filter((f) => f.category === activeCategory);

  return (
    <section id="faq" className="py-28 md:py-32 bg-[#f9f8f6]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          ref={headerRef}
          className={`mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-black leading-[1.1]">
                Frequently asked questions
              </h2>
              <p className="text-base text-gray-500 mb-6 max-w-md">
                Everything you need to know about the platform. Can't find what you're looking for? Reach out to our team.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-black hover:gap-3 transition-all"
              >
                Talk to us <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="lg:pt-2">
              <div className="flex gap-2 mb-6">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeCategory === cat
                        ? 'bg-black text-white'
                        : 'bg-white text-gray-500 border border-gray-200 hover:border-gray-300 hover:text-black'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          ref={contentRef}
          className={`transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <button
                  key={`${activeCategory}-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`text-left rounded-2xl border p-6 transition-all duration-300 ${
                    isOpen
                      ? 'bg-black text-white border-black shadow-lg'
                      : 'bg-white text-black border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className={`text-[15px] font-semibold leading-snug ${isOpen ? 'text-white' : 'text-black'}`}>
                      {faq.question}
                    </h3>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
                      isOpen ? 'bg-white/20 rotate-45' : 'bg-gray-100'
                    }`}>
                      <span className={`text-sm font-light leading-none ${isOpen ? 'text-white' : 'text-gray-500'}`}>+</span>
                    </div>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 mt-4 opacity-100' : 'max-h-0 mt-0 opacity-0'}`}>
                    <p className={`text-sm leading-relaxed ${isOpen ? 'text-white/70' : 'text-gray-500'}`}>
                      {faq.answer}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
