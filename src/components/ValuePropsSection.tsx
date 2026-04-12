import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PerformanceVisual = () => (
  <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden p-6 flex flex-col border border-gray-100" style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.06)" }}>
    <div className="flex items-center justify-between mb-6">
      <div>
        <div className="text-[10px] font-semibold text-black/30 uppercase tracking-widest mb-1">Predictive score</div>
        <div className="flex items-baseline gap-2">
          <span className="text-6xl font-bold text-black leading-none tracking-tight">91</span>
          <span className="text-xl text-black/25">/100</span>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 rounded-full border border-emerald-100">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-[9px] font-bold text-emerald-700 uppercase tracking-wide">Strong</span>
        </div>
        <div className="text-[8px] text-black/25">Before publish</div>
      </div>
    </div>
    <div className="flex-1 space-y-3">
      {[
        { label: "Clarity", value: 95 },
        { label: "Audience fit", value: 88 },
        { label: "Engagement", value: 92 },
        { label: "CTA strength", value: 84 },
        { label: "SEO alignment", value: 76 },
      ].map((s) => (
        <div key={s.label} className="flex items-center gap-3">
          <span className="text-[10px] text-gray-400 w-20 flex-shrink-0">{s.label}</span>
          <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-black/20 rounded-full" style={{ width: `${s.value}%` }} />
          </div>
          <span className="text-[10px] font-semibold text-black w-6 text-right">{s.value}</span>
        </div>
      ))}
    </div>
    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
      <span className="text-[9px] text-gray-400">Fine-tuned LLM</span>
      <span className="text-[9px] font-semibold text-black/50">Generated in 2.3s ↗</span>
    </div>
  </div>
);

const ConfidenceVisual = () => (
  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white border border-gray-100 flex flex-col"
    style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}>
    <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-2 bg-[#fafafa]">
      <div className="w-5 h-5 rounded-md bg-black flex items-center justify-center flex-shrink-0">
        <span className="text-[7px] text-white font-bold">IO</span>
      </div>
      <span className="text-[10px] font-semibold text-black flex-1">Content Intelligence</span>
      <div className="flex items-center gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-[8px] text-gray-400">Analysing</span>
      </div>
    </div>
    <div className="flex-1 flex flex-col gap-2 p-3 overflow-hidden">
      <div className="flex justify-end">
        <div className="bg-black text-white text-[9px] px-3 py-2 rounded-2xl rounded-br-sm max-w-[80%] leading-relaxed">
          Will this headline land with fintech decision-makers?
        </div>
      </div>
      <div className="flex justify-start">
        <div className="bg-gray-100 text-gray-700 text-[9px] px-3 py-2 rounded-2xl rounded-bl-sm max-w-[85%] leading-relaxed">
          Running simulation across 4 synthetic personas…
        </div>
      </div>
      <div className="flex justify-start">
        <div className="bg-gray-100 text-gray-700 text-[9px] px-3 py-2 rounded-2xl rounded-bl-sm max-w-[90%] leading-relaxed">
          <span className="font-semibold text-black">88% resonance.</span> Tone is authoritative but accessible. CTA needs strengthening — scores 76/100.
          <span className="inline-flex items-center ml-1.5 px-1.5 py-0.5 rounded-md text-[7px] font-bold bg-gray-200 text-gray-600">15 signals</span>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="bg-black text-white text-[9px] px-3 py-2 rounded-2xl rounded-br-sm max-w-[70%] leading-relaxed">
          Generate a stronger variant.
        </div>
      </div>
      <div className="flex justify-start">
        <div className="bg-gray-100 text-gray-700 text-[9px] px-3 py-2 rounded-2xl rounded-bl-sm max-w-[85%] leading-relaxed">
          Variant B ready. Predicted lift:{" "}
          <span className="font-bold text-emerald-600">+42% engagement</span>
          <span className="inline-flex items-center ml-1.5 px-1.5 py-0.5 rounded-md text-[7px] font-bold bg-emerald-100 text-emerald-700">BEST</span>
        </div>
      </div>
    </div>
  </div>
);

const ImpactVisual = () => {
  const campaigns = [
    { name: "Jan", score: 62 },
    { name: "Feb", score: 71 },
    { name: "Mar", score: 79 },
    { name: "Apr", score: 88 },
    { name: "May", score: 94 },
  ];
  const W = 260, H = 80;
  const xStep = W / (campaigns.length - 1);
  const toY = (v: number) => H - (v / 100) * H * 0.85 - 4;
  const pathD = campaigns.map((c, i) => `${i === 0 ? "M" : "L"}${i * xStep},${toY(c.score)}`).join(" ");
  const fillD = `${pathD} L${(campaigns.length - 1) * xStep},${H} L0,${H} Z`;

  return (
    <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden border border-gray-100 p-5 flex flex-col"
      style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.06)" }}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="text-xs font-bold text-black">Compounding intelligence</div>
          <div className="text-[9px] text-gray-400 mt-0.5">Score improves every campaign</div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-black leading-none">+52%</div>
          <div className="text-[8px] text-emerald-600 font-semibold mt-0.5">total growth</div>
        </div>
      </div>
      <div className="flex-1 relative">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: 80 }} preserveAspectRatio="none">
          <defs>
            <linearGradient id="impactFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#111" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#111" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={fillD} fill="url(#impactFill)" />
          <path d={pathD} fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          {campaigns.map((c, i) => (
            <circle key={c.name} cx={i * xStep} cy={toY(c.score)} r="3.5" fill="white" stroke="#111" strokeWidth="2" />
          ))}
        </svg>
        <div className="flex justify-between mt-1 mb-4 px-1">
          {campaigns.map((c) => (
            <span key={c.name} className="text-[8px] text-gray-300">{c.name}</span>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-1.5">
          {campaigns.map((c, i) => (
            <div key={c.name} className={`rounded-lg p-2 text-center ${i === campaigns.length - 1 ? "bg-black" : "bg-gray-50"}`}>
              <div className={`text-xs font-bold ${i === campaigns.length - 1 ? "text-white" : "text-black"}`}>{c.score}</div>
              <div className={`text-[7px] mt-0.5 ${i === campaigns.length - 1 ? "text-white/60" : "text-gray-400"}`}>{c.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

type Prop = {
  tag: string;
  headline: string;
  body: string;
  Visual: () => JSX.Element;
  bg: string;
  layout: "side-by-side" | "centered-hero" | "side-by-side-reverse";
};

const propsList: Prop[] = [
  {
    tag: "Performance",
    headline: "Know exactly how your content will perform before it reaches your audience.",
    body: "A predictive score and assessment generated by a fine-tuned LLM trained on real content performance data.",
    Visual: PerformanceVisual,
    bg: "bg-[#f9f8f6]",
    layout: "side-by-side",
  },
  {
    tag: "Confidence",
    headline: "Every content decision your team makes becomes evidence-based, not instinct-based.",
    body: "Test messaging across 15+ performance signals and synthetic audience simulations before a single word reaches your audience.",
    Visual: ConfidenceVisual,
    bg: "bg-white",
    layout: "centered-hero",
  },
  {
    tag: "Impact",
    headline: "Every campaign feeds the model, so every decision gets sharper over time.",
    body: "Monitor real-world results after publication and tune messaging continuously — building a compounding intelligence advantage.",
    Visual: ImpactVisual,
    bg: "bg-[#f9f8f6]",
    layout: "side-by-side-reverse",
  },
];

const SideBySideRow = ({ prop, reverse }: { prop: Prop; reverse?: boolean }) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div className={`${prop.bg} border-b border-gray-100`}>
      <div className="max-w-[1100px] mx-auto px-6 py-20 md:py-28">
        <div ref={ref} className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 md:gap-24`}>
          <div
            className="flex-1 transition-all duration-700 ease-out"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)' }}
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/30 mb-5 block">{prop.tag}</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black leading-[1.12] mb-5 max-w-[380px]">
              {prop.headline}
            </h2>
            <p className="text-base text-gray-500 leading-relaxed max-w-[340px]">{prop.body}</p>
          </div>
          <div
            className="flex-1 w-full max-w-[420px] transition-all duration-700 ease-out"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(32px)', transitionDelay: '120ms', height: 300 }}
          >
            <prop.Visual />
          </div>
        </div>
      </div>
    </div>
  );
};

const CenteredHeroRow = ({ prop }: { prop: Prop }) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div className={`${prop.bg} border-b border-gray-100`}>
      <div className="max-w-[1100px] mx-auto px-6 pt-20 md:pt-28 pb-0">
        <div ref={ref}>
          <div
            className="text-center mb-12 transition-all duration-700 ease-out"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/30 mb-4 block">{prop.tag}</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-black leading-[1.1] mb-5 max-w-2xl mx-auto">
              {prop.headline}
            </h2>
            <p className="text-base text-gray-500 leading-relaxed max-w-lg mx-auto">{prop.body}</p>
          </div>
          <div
            className="w-full max-w-2xl mx-auto transition-all duration-700 ease-out"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(32px)', transitionDelay: '150ms', height: 320 }}
          >
            <prop.Visual />
          </div>
        </div>
      </div>
    </div>
  );
};

const ValuePropsSection = () => (
  <section id="features" className="border-t border-gray-100">
    {propsList.map((prop) => {
      if (prop.layout === "centered-hero") return <CenteredHeroRow key={prop.tag} prop={prop} />;
      if (prop.layout === "side-by-side-reverse") return <SideBySideRow key={prop.tag} prop={prop} reverse />;
      return <SideBySideRow key={prop.tag} prop={prop} />;
    })}
  </section>
);

export default ValuePropsSection;
