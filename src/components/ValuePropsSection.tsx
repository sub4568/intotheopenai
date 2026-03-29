import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PerformanceVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <div className="w-full max-w-[220px]">
      <div className="flex items-baseline gap-1.5 mb-3">
        <span className="text-4xl font-bold text-black">91</span>
        <span className="text-lg text-gray-400">/100</span>
        <span className="ml-auto text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Strong</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-4">
        <div className="h-full bg-black rounded-full" style={{ width: "91%" }} />
      </div>
      <div className="space-y-2.5">
        {[
          { label: "Clarity", value: 95 },
          { label: "Audience fit", value: 88 },
          { label: "Engagement", value: 92 },
          { label: "CTA strength", value: 84 },
        ].map((s) => (
          <div key={s.label} className="flex items-center gap-2">
            <span className="text-[11px] text-gray-500 w-24 flex-shrink-0">{s.label}</span>
            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-black/25 rounded-full" style={{ width: `${s.value}%` }} />
            </div>
            <span className="text-[10px] font-semibold text-gray-600 w-7 text-right">{s.value}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
        <span className="text-[10px] text-gray-400">Predictive score</span>
        <span className="text-[10px] font-semibold text-black">Before publish</span>
      </div>
    </div>
  </div>
);

const ConfidenceVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <div className="w-full max-w-[220px] space-y-2">
      <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-3">15 performance signals</div>
      {[
        { label: "Tone match", pass: true },
        { label: "Message clarity", pass: true },
        { label: "Brand alignment", pass: true },
        { label: "Audience resonance", pass: true },
        { label: "Emotional pull", pass: true },
        { label: "CTA strength", pass: true },
        { label: "SEO alignment", pass: false },
        { label: "Reading level", pass: true },
      ].map((sig) => (
        <div key={sig.label} className="flex items-center gap-2 py-0.5">
          <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${sig.pass ? "bg-emerald-100" : "bg-amber-100"}`}>
            <span className={`text-[8px] font-bold ${sig.pass ? "text-emerald-600" : "text-amber-600"}`}>{sig.pass ? "✓" : "!"}</span>
          </div>
          <span className="text-[11px] text-gray-600 flex-1">{sig.label}</span>
          <span className={`text-[9px] font-medium ${sig.pass ? "text-emerald-500" : "text-amber-500"}`}>
            {sig.pass ? "Pass" : "Review"}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const ImpactVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <div className="w-full max-w-[220px]">
      <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-4">Compounding intelligence</div>
      <div className="space-y-3">
        {[
          { label: "Campaign 1", score: 62, delta: null },
          { label: "Campaign 2", score: 71, delta: "+9" },
          { label: "Campaign 3", score: 79, delta: "+8" },
          { label: "Campaign 4", score: 88, delta: "+9" },
          { label: "Campaign 5", score: 94, delta: "+6" },
        ].map((c, i) => (
          <div key={c.label} className="flex items-center gap-2">
            <span className="text-[10px] text-gray-400 w-20 flex-shrink-0">{c.label}</span>
            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${c.score}%`,
                  background: `hsl(${215 + i * 10}, 65%, ${58 - i * 5}%)`,
                }}
              />
            </div>
            {c.delta && (
              <span className="text-[9px] font-bold text-emerald-600 w-6 text-right">{c.delta}</span>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
        <span className="text-[10px] text-gray-400">Model accuracy</span>
        <span className="text-[10px] font-bold text-black">↑ compounds over time</span>
      </div>
    </div>
  </div>
);

type Prop = {
  tag: string;
  headline: string;
  body: string;
  Visual: () => JSX.Element;
  bg: string;
};

const props: Prop[] = [
  {
    tag: "Performance",
    headline: "Know exactly how your content will perform before it reaches your audience.",
    body: "A predictive score and assessment generated by a fine-tuned LLM trained on real content performance data.",
    Visual: PerformanceVisual,
    bg: "bg-[#f9f8f6]",
  },
  {
    tag: "Confidence",
    headline: "Test messaging across 15+ performance signals and synthetic audience simulations.",
    body: "So every content decision your team makes is evidence-based, not instinct-based.",
    Visual: ConfidenceVisual,
    bg: "bg-white",
  },
  {
    tag: "Impact",
    headline: "Every campaign feeds the model, so every decision gets sharper over time.",
    body: "Monitor real-world results after publication and tune messaging continuously — building a compounding intelligence advantage that grows with every client.",
    Visual: ImpactVisual,
    bg: "bg-[#f9f8f6]",
  },
];

const ValuePropRow = ({ prop, isEven }: { prop: Prop; isEven: boolean }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className={`${prop.bg} border-b border-gray-100`}>
      <div className="max-w-[1100px] mx-auto px-6 py-20 md:py-24">
        <div
          ref={ref}
          className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12 md:gap-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-black/35">{prop.tag}</span>
            </div>
            <h2 className="font-display text-3xl md:text-[2.25rem] font-bold text-black leading-[1.15] mb-5 max-w-[400px]">
              {prop.headline}
            </h2>
            <p className="text-base text-gray-500 leading-relaxed max-w-[360px]">
              {prop.body}
            </p>
          </div>

          <div className="flex-1 w-full max-w-[340px]">
            <div className="rounded-2xl border border-gray-200 shadow-sm bg-white overflow-hidden" style={{ height: 290 }}>
              <prop.Visual />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ValuePropsSection = () => (
  <section id="features" className="border-t border-gray-100">
    {props.map((prop, i) => (
      <ValuePropRow key={prop.tag} prop={prop} isEven={i % 2 === 0} />
    ))}
  </section>
);

export default ValuePropsSection;
