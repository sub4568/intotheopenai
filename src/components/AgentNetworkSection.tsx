import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AgentNetworkVisual = () => {
  const agents = [
    { id: "clarity", label: "Clarity", x: 50, y: 12, color: "#111" },
    { id: "tone", label: "Tone", x: 85, y: 38, color: "#111" },
    { id: "audience", label: "Audience", x: 75, y: 72, color: "#111" },
    { id: "cta", label: "CTA", x: 25, y: 72, color: "#111" },
    { id: "seo", label: "SEO", x: 15, y: 38, color: "#111" },
  ];

  const cx = 50;
  const cy = 47;

  return (
    <div className="w-full h-full bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col"
      style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.07)" }}>
      <div className="px-5 pt-5 pb-0 flex items-start justify-between">
        <div>
          <div className="text-xs font-bold text-black">Multi-agent validation</div>
          <div className="text-[9px] text-gray-400 mt-0.5">15 signals running in parallel</div>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-100">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[9px] font-bold text-emerald-700">Processing</span>
        </div>
      </div>

      <div className="flex-1 px-4 py-2">
        <svg viewBox="0 0 200 120" className="w-full h-full" style={{ maxHeight: 140 }}>
          {agents.map((a) => (
            <line
              key={a.id}
              x1={cx * 2}
              y1={cy * 2}
              x2={a.x * 2}
              y2={a.y * 2}
              stroke="#e5e7eb"
              strokeWidth="0.8"
              strokeDasharray="3 2"
            />
          ))}

          <circle cx={cx * 2} cy={cy * 2} r="14" fill="#111" />
          <text x={cx * 2} y={cy * 2 - 2} textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">IO</text>
          <text x={cx * 2} y={cy * 2 + 6} textAnchor="middle" fontSize="4.5" fill="white" opacity="0.7">core</text>

          {agents.map((a) => (
            <g key={a.id}>
              <circle cx={a.x * 2} cy={a.y * 2} r="9" fill="white" stroke="#e5e7eb" strokeWidth="1" />
              <text x={a.x * 2} y={a.y * 2 + 2} textAnchor="middle" fontSize="4.5" fill="#555" fontWeight="600">{a.label}</text>
            </g>
          ))}
        </svg>
      </div>

      <div className="px-5 pb-5">
        <div className="grid grid-cols-5 gap-1">
          {["Clarity", "Tone", "Audience", "CTA", "SEO"].map((label, i) => {
            const vals = [95, 88, 91, 76, 82];
            return (
              <div key={label} className="text-center">
                <div className="text-[10px] font-bold text-black">{vals[i]}</div>
                <div className="h-0.5 rounded-full bg-gray-100 overflow-hidden mt-0.5 mb-0.5">
                  <div className="h-full bg-black/20 rounded-full" style={{ width: `${vals[i]}%` }} />
                </div>
                <div className="text-[7px] text-gray-400">{label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const AgentNetworkSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-white border-t border-gray-100">
      <div className="max-w-[1100px] mx-auto px-6">
        <div
          ref={ref}
          className="flex flex-col md:flex-row items-center gap-12 md:gap-20"
        >
          <div
            style={{
              flex: 1,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0) translateY(0)' : 'translateX(-32px) translateY(20px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] bg-black/[0.05] text-black/40 mb-5">The shift</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black leading-[1.12] mb-5 max-w-[400px]">
              Content strategy is changing faster than most teams can adapt.
            </h2>
            <p className="text-base text-gray-500 leading-relaxed max-w-[360px] mb-6">
              The teams that will win are not the ones that produce the most content. They are the ones that know which content will perform before they invest in it.
            </p>
            <p className="text-base text-gray-500 leading-relaxed max-w-[360px]">
              intotheopen gives your team that advantage — a proprietary multi-agent system that evaluates every piece of content across 15 performance signals simultaneously.
            </p>
          </div>

          <div
            style={{
              flex: 1,
              width: '100%',
              maxWidth: 420,
              height: 300,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'rotate3d(0,0,0,0deg) translateX(0) translateY(0) scale(1)' : 'rotate3d(0.4, 1, 0.1, 15deg) translateX(44px) translateY(28px) scale(0.93)',
              transition: isVisible ? 'opacity 0.75s ease, transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)' : 'none',
              transitionDelay: '120ms',
              willChange: 'transform',
            }}
          >
            <AgentNetworkVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentNetworkSection;
