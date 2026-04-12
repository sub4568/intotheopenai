import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const DollarIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <rect width="44" height="44" rx="11" fill="#f4f4f4" />
    <path d="M22 11v1.5m0 19V33M16 19c0-2.21 2.686-4 6-4s6 1.79 6 4-2.686 4-6 4-6 1.79-6 4 2.686 4 6 4 6-1.79 6-4" stroke="#111" strokeOpacity="0.4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChartIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <rect width="44" height="44" rx="11" fill="#f4f4f4" />
    <path d="M12 32l5.5-6.5 4.5 3.5 5-7.5 4 3.5" stroke="#111" strokeOpacity="0.4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 32h20" stroke="#111" strokeOpacity="0.4" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const MultiplierIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <rect width="44" height="44" rx="11" fill="#f4f4f4" />
    <path d="M17 22h10M22 17l5 5-5 5" stroke="#111" strokeOpacity="0.4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="22" cy="22" r="8" stroke="#111" strokeOpacity="0.2" strokeWidth="1.3"/>
  </svg>
);

const stats = [
  { Icon: DollarIcon, stat: "$90B", label: "Lost to underperforming\ncontent annually" },
  { Icon: ChartIcon, stat: "70%", label: "Of marketing content\nfails to deliver ROI" },
  { Icon: MultiplierIcon, stat: "3–10×", label: "ROI left on the table per\nunderperforming campaign" },
];

const ProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-24 bg-[#f9f8f6]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-black/30 mb-3">Why this matters</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-black leading-[1.1] max-w-xl">
                Content performance is still unpredictable, and agencies are paying the price.
              </h2>
            </div>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed flex-shrink-0">
              Data exists, but it arrives too late. By the time you have a clear picture, the decision has already been made.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 rounded-2xl overflow-hidden">
            {stats.map((item, index) => (
              <div
                key={item.stat}
                className="bg-white px-8 py-10 flex flex-col gap-4"
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(12px)",
                  transition: "opacity 0.6s ease, transform 0.6s ease",
                }}
              >
                <item.Icon />
                <div>
                  <div className="text-5xl font-display font-bold text-black tracking-tight leading-none mb-2">
                    {item.stat}
                  </div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest whitespace-pre-line leading-relaxed">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-sm text-gray-500 leading-relaxed">
              intotheopen exists because this problem is solvable —{" "}
              <span className="text-black font-semibold">and it starts before you publish.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
