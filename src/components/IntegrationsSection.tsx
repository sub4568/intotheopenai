import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ExportsVisual = () => (
  <div className="w-full h-full bg-white rounded-2xl overflow-hidden flex flex-col border border-gray-100" style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.06)" }}>
    <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-2 bg-[#fafafa]">
      <div className="w-5 h-5 rounded-md bg-black flex items-center justify-center">
        <span className="text-[7px] text-white font-bold">IO</span>
      </div>
      <span className="text-[9px] text-gray-500 ml-1">performance-receipt.pdf</span>
      <div className="ml-auto flex items-center gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        <span className="text-[8px] text-emerald-600 font-medium">Ready</span>
      </div>
    </div>
    <div className="flex-1 p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[8px] text-gray-400 uppercase tracking-widest mb-1">intotheopen</div>
          <div className="text-sm font-bold text-black">Performance Receipt</div>
        </div>
        <div className="text-[8px] text-gray-400">April 2026</div>
      </div>

      <div className="border-t border-gray-100 pt-3">
        <div className="text-[8px] text-gray-400 mb-1">Campaign</div>
        <div className="text-[10px] text-black font-medium">Q1 Fintech Series — LinkedIn</div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[["91", "Score"], ["+42%", "Pred. lift"], ["15/15", "Signals"]].map(([v, l]) => (
          <div key={l} className="bg-gray-50 rounded-lg p-2 text-center border border-gray-100">
            <div className="text-sm font-bold text-black">{v}</div>
            <div className="text-[7px] text-gray-400 mt-0.5">{l}</div>
          </div>
        ))}
      </div>

      <div className="space-y-1.5">
        {[["Clarity", 95], ["Tone match", 88], ["Audience fit", 92]].map(([l, v]) => (
          <div key={String(l)} className="flex items-center gap-2">
            <span className="text-[8px] text-gray-400 w-16">{l}</span>
            <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-black/20 rounded-full" style={{ width: `${v}%` }} />
            </div>
            <span className="text-[8px] text-gray-500">{v}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-1.5 mt-auto">
        <div className="flex-1 py-1.5 rounded-md border border-gray-200 text-center text-[8px] text-gray-500">Internal</div>
        <div className="flex-1 py-1.5 rounded-md border border-gray-200 text-center text-[8px] text-gray-500">Client</div>
        <div className="flex-1 py-1.5 rounded-md bg-black text-center text-[8px] font-bold text-white">↓ Export</div>
      </div>
    </div>
  </div>
);

const AnalyticsVisual = () => {
  const actual =   [22, 26, 24, 30, 28, 35, 32, 40, 38, 46, 43, 52, 50, 58];
  const predicted = [24, 28, 26, 32, 30, 37, 34, 42, 40, 48, 45, 54, 52, 60];
  const n = actual.length;
  const W = 280, H = 80;
  const xStep = W / (n - 1);
  const toY = (v: number) => H - 6 - ((v - 18) / 48) * (H - 12);

  const aPath = actual.map((v, i) => `${i === 0 ? "M" : "L"}${i * xStep},${toY(v)}`).join(" ");
  const pPath = predicted.map((v, i) => `${i === 0 ? "M" : "L"}${i * xStep},${toY(v)}`).join(" ");
  const aFill = `${aPath} L${(n-1)*xStep},${H} L0,${H} Z`;

  return (
    <div className="w-full h-full bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col"
      style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.07)" }}>
      <div className="px-5 pt-5 pb-0">
        <div className="flex items-start justify-between mb-1">
          <div>
            <div className="text-xs font-bold text-black">Predictive vs. Actual</div>
            <div className="text-[9px] text-gray-400 mt-0.5">Unified across all campaigns</div>
          </div>
          <div className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-100">
            <span className="text-[9px] font-bold text-emerald-700">Model accuracy: 94%</span>
          </div>
        </div>
      </div>

      <div className="px-4 pt-3 flex-1">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: 90 }} preserveAspectRatio="none">
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#111" stopOpacity="0.07" />
              <stop offset="100%" stopColor="#111" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={aFill} fill="url(#areaGrad)" />
          <path d={aPath} fill="none" stroke="#111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d={pPath} fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5 3" />
        </svg>
      </div>

      <div className="px-5 pb-4">
        <div className="flex items-center gap-5 mb-3">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-0.5 bg-black rounded" />
            <span className="text-[8px] text-gray-500">Actual</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-0.5 rounded" style={{ background: "repeating-linear-gradient(to right,#10b981 0,#10b981 4px,transparent 4px,transparent 7px)" }} />
            <span className="text-[8px] text-gray-500">Predicted</span>
          </div>
          <div className="ml-auto text-[8px] text-gray-400">GA4 · HubSpot · Looker</div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[["24.5k", "Avg reach"], ["8.2%", "CTR"], ["+37%", "Avg lift"]].map(([v, l]) => (
            <div key={l} className="p-2 rounded-lg bg-gray-50 text-center">
              <div className="text-xs font-bold text-black">{v}</div>
              <div className="text-[7px] text-gray-400 mt-0.5">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PublishingVisual = () => {
  const nodes = [
    { label: "Brief", sub: "Notion / Docs", x: 0 },
    { label: "Draft", sub: "Your editor", x: 1 },
    { label: "Score", sub: "intotheopen", x: 2, highlight: true },
    { label: "Publish", sub: "All channels", x: 3 },
    { label: "Track", sub: "Analytics", x: 4 },
  ];

  return (
    <div className="w-full h-full bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col p-5"
      style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.07)" }}>
      <div className="text-xs font-bold text-black mb-1">Your workflow, unchanged</div>
      <div className="text-[9px] text-gray-400 mb-5">intotheopen plugs in — not over</div>

      <div className="flex items-center justify-between relative mb-6">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-100 -translate-y-1/2 z-0" />
        {nodes.map((n, i) => (
          <div key={n.label} className="relative z-10 flex flex-col items-center gap-1.5">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-[9px] font-bold border-2 ${
              n.highlight
                ? "bg-black border-black text-white shadow-lg"
                : "bg-white border-gray-200 text-gray-600"
            }`}>
              {n.highlight ? "IO" : n.label[0]}
            </div>
            <span className={`text-[8px] font-semibold ${n.highlight ? "text-black" : "text-gray-400"}`}>{n.label}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2 mt-auto">
        {[
          ["Notion", "Brief →"],
          ["HubSpot", "CRM →"],
          ["WordPress", "Publish →"],
          ["LinkedIn", "Distribute →"],
          ["Webflow", "Deploy →"],
          ["+ 20 more", "via API →"],
        ].map(([name, action]) => (
          <div key={name} className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-gray-50 border border-gray-100">
            <span className="text-[9px] font-medium text-gray-600">{name}</span>
            <span className="text-[8px] text-gray-400">{action}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ExportsRow = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className="py-16 md:py-20 border-b border-gray-100">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <div
          style={{
            flex: 1,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0) translateY(0)' : 'translateX(-28px) translateY(16px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] bg-black/[0.05] text-black/40 mb-4">Seamless exports</span>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-black leading-[1.2] mb-4">
            Share a performance receipt with every campaign.
          </h3>
          <p className="text-base text-gray-500 leading-relaxed">
            After your content completes multi-agent validation, download a stylised performance receipt — a clean summary of every evaluation run. Share with your team internally or your client externally.
          </p>
        </div>
        <div
          style={{
            flex: 1,
            width: '100%',
            maxWidth: 380,
            height: 260,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'rotate3d(0,0,0,0deg) translateX(0) translateY(0) scale(1)' : 'rotate3d(0.4, 1, 0.1, 15deg) translateX(44px) translateY(28px) scale(0.93)',
            transition: isVisible ? 'opacity 0.75s ease, transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)' : 'none',
            transitionDelay: '120ms',
            willChange: 'transform',
          }}
        >
          <ExportsVisual />
        </div>
      </div>
    </div>
  );
};

const AnalyticsRow = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className="py-16 md:py-20 border-b border-gray-100">
      <div>
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] bg-black/[0.05] text-black/40 mb-3">Analytics and reporting</span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-black leading-[1.2] max-w-sm">
              One unified view of predictive and real-world performance.
            </h3>
          </div>
          <p className="text-base text-gray-500 leading-relaxed max-w-xs flex-shrink-0">
            Combine predictive scores with real-world results — a single view of content performance across every campaign.
          </p>
        </div>
        <div
          style={{
            width: '100%',
            height: 240,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'rotateX(0deg) translateY(0) scale(1)' : 'rotateX(10deg) translateY(40px) scale(0.96)',
            transition: isVisible ? 'opacity 0.75s ease, transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)' : 'none',
            transitionDelay: '140ms',
            willChange: 'transform',
          }}
        >
          <AnalyticsVisual />
        </div>
      </div>
    </div>
  );
};

const PublishingRow = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className="py-16 md:py-20">
      <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
        <div
          style={{
            flex: 1,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0) translateY(0)' : 'translateX(28px) translateY(16px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] bg-black/[0.05] text-black/40 mb-4">Content and publishing platforms</span>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-black leading-[1.2] mb-4">
            From brief to publication without changing how you work.
          </h3>
          <p className="text-base text-gray-500 leading-relaxed">
            Connect intotheopen with the tools your team already uses. It fits into your existing content workflow without requiring your team to change a thing.
          </p>
        </div>
        <div
          style={{
            flex: 1,
            width: '100%',
            maxWidth: 380,
            height: 260,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'rotate3d(0,0,0,0deg) translateX(0) translateY(0) scale(1)' : 'rotate3d(0.4, -1, 0.1, 15deg) translateX(-44px) translateY(28px) scale(0.93)',
            transition: isVisible ? 'opacity 0.75s ease, transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)' : 'none',
            transitionDelay: '120ms',
            willChange: 'transform',
          }}
        >
          <PublishingVisual />
        </div>
      </div>
    </div>
  );
};

const IntegrationsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="integrations" className="bg-white py-16 md:py-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <div
          ref={ref}
          className="mb-4 transition-all duration-700 ease-out"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] bg-black/[0.05] text-black/40 mb-4">Integrations</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-black leading-[1.1] mb-4 max-w-2xl">
            The performance layer across your entire content stack.
          </h2>
          <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
            Connect intotheopen with the tools your team already uses, and turn content intelligence into a natural part of how you work — not an extra step.
          </p>
        </div>

        <ExportsRow />
        <AnalyticsRow />
        <PublishingRow />

        <div className="pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-400 italic">An operating system does not replace your tools. It coordinates them.</p>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
