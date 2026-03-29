import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ExportsVisual = () => (
  <div className="relative bg-white rounded-xl border border-gray-100 overflow-hidden h-full">
    <div className="p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="text-[11px] font-semibold text-black">Performance Receipt</div>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-[9px] text-emerald-600 font-medium">Ready to export</span>
        </div>
      </div>
      <div className="border border-gray-100 rounded-lg p-3.5 mb-3 bg-[#fafafa]">
        <div className="text-[10px] font-medium text-black mb-2">Q1 Campaign — LinkedIn Series</div>
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[{ l: "Score", v: "91/100" }, { l: "Signals", v: "15/15" }, { l: "Lift", v: "+42%" }].map((m) => (
            <div key={m.l} className="text-center">
              <div className="text-sm font-bold text-black">{m.v}</div>
              <div className="text-[8px] text-gray-400">{m.l}</div>
            </div>
          ))}
        </div>
        <div className="space-y-1.5">
          {["Clarity", "Tone match", "Audience fit"].map((l) => (
            <div key={l} className="flex items-center gap-2">
              <span className="text-[9px] text-gray-400 w-16">{l}</span>
              <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-black/30 rounded-full" style={{ width: "88%" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex-1 py-1.5 px-2 rounded-md border border-gray-200 text-center text-[9px] font-medium text-gray-500 cursor-pointer hover:border-black hover:text-black transition-colors">
          Internal
        </div>
        <div className="flex-1 py-1.5 px-2 rounded-md border border-gray-200 text-center text-[9px] font-medium text-gray-500 cursor-pointer hover:border-black hover:text-black transition-colors">
          Client
        </div>
        <div className="flex-1 py-1.5 px-2 rounded-md bg-black text-center text-[9px] font-medium text-white">
          Download
        </div>
      </div>
    </div>
  </div>
);

const AnalyticsVisual = () => (
  <div className="relative bg-white rounded-xl border border-gray-100 overflow-hidden h-full">
    <div className="p-5">
      <div className="text-[11px] font-semibold text-black mb-1">Unified performance view</div>
      <div className="text-[9px] text-gray-400 mb-4">Predictive + real-world, combined</div>
      <div className="space-y-3">
        {[
          { label: "Predicted score", value: "91", bar: 91, color: "bg-black/20" },
          { label: "Actual engagement", value: "+38%", bar: 76, color: "bg-emerald-400/60" },
          { label: "Predicted reach", value: "24.5k", bar: 82, color: "bg-black/20" },
          { label: "Actual reach", value: "22.1k", bar: 74, color: "bg-emerald-400/60" },
        ].map((row) => (
          <div key={row.label} className="flex items-center gap-2">
            <span className="text-[9px] text-gray-400 w-24 flex-shrink-0">{row.label}</span>
            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className={`h-full ${row.color} rounded-full`} style={{ width: `${row.bar}%` }} />
            </div>
            <span className="text-[9px] font-semibold text-black w-10 text-right">{row.value}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-3">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-black/20" />
          <span className="text-[8px] text-gray-400">Predicted</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-emerald-400/60" />
          <span className="text-[8px] text-gray-400">Actual</span>
        </div>
        <div className="ml-auto text-[8px] text-gray-400">Connected to GA4, HubSpot</div>
      </div>
    </div>
  </div>
);

const PublishingVisual = () => (
  <div className="relative bg-white rounded-xl border border-gray-100 overflow-hidden h-full">
    <div className="p-5">
      <div className="text-[11px] font-semibold text-black mb-4">Connected platforms</div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { name: "Notion", color: "bg-gray-100", text: "N" },
          { name: "HubSpot", color: "bg-orange-50", text: "HS" },
          { name: "WordPress", color: "bg-blue-50", text: "WP" },
          { name: "LinkedIn", color: "bg-blue-50", text: "in" },
          { name: "Webflow", color: "bg-gray-100", text: "WF" },
          { name: "Contentful", color: "bg-yellow-50", text: "CF" },
        ].map((p) => (
          <div key={p.name} className="flex flex-col items-center gap-1.5 p-2.5 rounded-lg border border-gray-100 hover:border-black/20 transition-colors cursor-pointer">
            <div className={`w-7 h-7 rounded-lg ${p.color} flex items-center justify-center`}>
              <span className="text-[8px] font-bold text-gray-600">{p.text}</span>
            </div>
            <span className="text-[8px] text-gray-400">{p.name}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 px-3 py-2 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-between">
        <span className="text-[10px] text-gray-500">Your workflow, unchanged.</span>
        <span className="text-[9px] font-semibold text-black">+ more</span>
      </div>
    </div>
  </div>
);

const integrations = [
  {
    tag: "Seamless exports",
    headline: "Share a performance receipt with every campaign.",
    body: "After your content completes multi-agent validation, download a stylised performance receipt — a clean summary of every evaluation run. Share with your team internally, your client externally, or both. What you share and with whom is entirely your call.",
    Visual: ExportsVisual,
  },
  {
    tag: "Analytics and reporting",
    headline: "One unified view of predictive and real-world performance.",
    body: "Connect intotheopen to your analytics stack to combine predictive scores with real-world results — creating a single, unified view of content performance across every campaign.",
    Visual: AnalyticsVisual,
  },
  {
    tag: "Content and publishing platforms",
    headline: "From brief to publication without changing how you work.",
    body: "Connect intotheopen with the tools your team already uses. From brief to publication, it fits into your existing content workflow without requiring your team to change a thing.",
    Visual: PublishingVisual,
  },
];

const IntegrationRow = ({ item, index }: { item: typeof integrations[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12 md:gap-20 py-16 md:py-20 border-b border-gray-100 last:border-0 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="flex-1 max-w-[400px]">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-black/35 mb-4">{item.tag}</p>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-black leading-[1.2] mb-4">{item.headline}</h3>
        <p className="text-base text-gray-500 leading-relaxed">{item.body}</p>
      </div>
      <div className="flex-1 w-full max-w-[340px] h-[220px]">
        <item.Visual />
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
          className={`mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-black/35 mb-4">Integrations</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-black leading-[1.1] mb-4 max-w-2xl">
            The performance layer across your entire content stack.
          </h2>
          <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
            Connect intotheopen with the tools your team already uses, and turn content intelligence into a natural part of how you work — not an extra step.
          </p>
        </div>

        {integrations.map((item, i) => (
          <IntegrationRow key={item.tag} item={item} index={i} />
        ))}

        <div className={`mt-2 pt-8 border-t border-gray-100 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <p className="text-base text-gray-400 italic">An operating system doesn't replace your tools. It coordinates them.</p>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
