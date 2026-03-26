import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AlertCircle, TrendingDown, DollarSign } from "lucide-react";

const stats = [
  {
    icon: AlertCircle,
    stat: "73%",
    label: "of content gets zero engagement",
  },
  {
    icon: TrendingDown,
    stat: "$400k+",
    label: "wasted annually on failed content",
  },
  {
    icon: DollarSign,
    stat: "6 weeks",
    label: "average time to realize content failed",
  },
];

const ProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-28 md:py-32 bg-[#111] relative overflow-hidden">
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] text-white">
            Most content fails before it launches
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Teams spend millions on content without knowing if it will work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-xl border border-white/10 hover:border-black transition-all duration-300 hover:shadow-[0_0_0_1px_#111] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
            >
              <div className="flex flex-col items-center text-center">
                <item.icon className="w-6 h-6 text-[#888] mb-6 group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                <div className="text-5xl md:text-6xl font-display font-bold text-white mb-3">
                  {item.stat}
                </div>
                <p className="text-base text-white/60 font-medium leading-snug">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="relative pl-6 border-l-4 border-black py-2 max-w-3xl">
            <p className="text-xl md:text-2xl font-bold text-white leading-tight">
              Traditional analytics explain failure after launch. intotheopen helps you avoid it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

