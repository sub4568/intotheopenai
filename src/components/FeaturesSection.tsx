import { Check, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ValidationSnippet = () => (
  <div className="p-4 pt-8">
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="text-[11px] font-medium text-black">Content Validation</div>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-[9px] text-emerald-600">Passed</span>
        </div>
      </div>
      <div className="flex items-baseline gap-1 mb-3">
        <span className="text-2xl font-bold text-black">87</span>
        <span className="text-xs text-gray-400">/100</span>
      </div>
      <div className="space-y-2.5">
        {[
          { label: "Readability", value: 95, color: "bg-emerald-400" },
          { label: "Tone Match", value: 88, color: "bg-emerald-400" },
          { label: "CTA Strength", value: 92, color: "bg-emerald-400" },
          { label: "SEO Score", value: 78, color: "bg-amber-400" },
          { label: "Engagement", value: 85, color: "bg-emerald-400" },
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between">
            <span className="text-[10px] text-gray-500 w-20">{item.label}</span>
            <div className="flex items-center gap-2 flex-1 ml-2">
              <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.value}%` }} />
              </div>
              <span className="text-[9px] font-medium text-gray-600 w-6 text-right">{item.value}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ForecastSnippet = () => (
  <div className="p-4 pt-8">
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="text-[11px] font-medium text-black">30-day Forecast</div>
        <span className="text-[9px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">+42%</span>
      </div>
      <div className="flex items-end gap-[3px] h-20 mb-3">
        {[25, 30, 28, 35, 32, 40, 38, 45, 42, 50, 48, 55, 52, 60, 58, 65, 62, 70, 68, 75].map((h, i) => (
          <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, backgroundColor: i < 12 ? '#e5e7eb' : '#10b981' }} />
        ))}
      </div>
      <div className="flex items-center justify-between text-[9px] text-gray-400 mb-3">
        <span>Past</span>
        <span>Projected</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="text-center p-2 rounded-lg bg-gray-50">
          <div className="text-sm font-bold text-black">24.5k</div>
          <div className="text-[8px] text-gray-400">Reach</div>
        </div>
        <div className="text-center p-2 rounded-lg bg-gray-50">
          <div className="text-sm font-bold text-black">8.2%</div>
          <div className="text-[8px] text-gray-400">CTR</div>
        </div>
        <div className="text-center p-2 rounded-lg bg-gray-50">
          <div className="text-sm font-bold text-black">1.4k</div>
          <div className="text-[8px] text-gray-400">Shares</div>
        </div>
      </div>
    </div>
  </div>
);

const OptimizeSnippet = () => (
  <div className="p-4 pt-8">
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="text-[11px] font-medium text-black">AI Variants</div>
        <span className="text-[9px] text-gray-400">3 generated</span>
      </div>
      <div className="space-y-2">
        <div className="p-2.5 rounded-lg border border-gray-100">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] text-gray-500">Variant A</span>
            <span className="text-[9px] font-medium text-emerald-600">+18%</span>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full w-full" />
          <div className="h-1.5 bg-gray-100 rounded-full w-4/5 mt-1" />
        </div>
        <div className="p-2.5 rounded-lg border-2 border-violet-300 bg-violet-50/50">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-medium text-black">Variant B</span>
              <span className="text-[7px] font-bold bg-violet-600 text-white px-1 py-0.5 rounded">BEST</span>
            </div>
            <span className="text-[9px] font-bold text-violet-700">+42%</span>
          </div>
          <div className="h-1.5 bg-violet-200 rounded-full w-full" />
          <div className="h-1.5 bg-violet-200 rounded-full w-3/4 mt-1" />
        </div>
        <div className="p-2.5 rounded-lg border border-gray-100">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] text-gray-500">Variant C</span>
            <span className="text-[9px] font-medium text-emerald-600">+24%</span>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full w-full" />
          <div className="h-1.5 bg-gray-100 rounded-full w-2/3 mt-1" />
        </div>
      </div>
    </div>
  </div>
);

const TrackingSnippet = () => (
  <div className="p-4 pt-8">
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="text-[11px] font-medium text-black">Live Channels</div>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[9px] text-gray-400">Live</span>
        </div>
      </div>
      <div className="space-y-2">
        {[
          { name: "LinkedIn", handle: "in", impressions: "12.4k", status: "emerald" },
          { name: "X / Twitter", handle: "X", impressions: "8.1k", status: "emerald" },
          { name: "Email", handle: "@", impressions: "4.0k", status: "amber" },
        ].map((ch, i) => (
          <div key={i} className="flex items-center gap-3 p-2 rounded-lg border border-gray-100">
            <div className="w-7 h-7 rounded-md bg-gray-100 flex items-center justify-center">
              <span className="text-[9px] font-bold text-gray-600">{ch.handle}</span>
            </div>
            <div className="flex-1">
              <div className="text-[10px] font-medium text-black">{ch.name}</div>
              <div className="text-[8px] text-gray-400">{ch.impressions} impressions</div>
            </div>
            <div className={`w-2 h-2 rounded-full ${ch.status === 'emerald' ? 'bg-emerald-500' : 'bg-amber-400'}`} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const RefineSnippet = () => (
  <div className="p-4 pt-8">
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="text-[11px] font-medium text-black mb-3">Auto-Optimizations</div>
      <div className="space-y-2">
        {[
          { action: "Headline adjusted for clarity", lift: "+12%", time: "2h ago" },
          { action: "CTA button copy optimized", lift: "+8%", time: "6h ago" },
          { action: "Tone realigned to audience", lift: "+5%", time: "1d ago" },
          { action: "Image alt text improved", lift: "+3%", time: "2d ago" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2 p-2 rounded-lg border border-gray-100">
            <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 text-emerald-600" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[9px] text-black truncate">{item.action}</div>
              <div className="text-[8px] text-gray-400">{item.time}</div>
            </div>
            <span className="text-[9px] font-medium text-emerald-600 flex-shrink-0">{item.lift}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CollabSnippet = () => (
  <div className="p-4 pt-8">
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="text-[11px] font-medium text-black mb-3">Team Activity</div>
      <div className="space-y-2.5">
        {[
          { initials: "AK", color: "bg-blue-200 text-blue-700", action: "Approved variant B", time: "2m ago" },
          { initials: "MJ", color: "bg-violet-200 text-violet-700", action: "Commented on draft", time: "15m ago" },
          { initials: "SR", color: "bg-amber-200 text-amber-700", action: "Published to LinkedIn", time: "1h ago" },
          { initials: "LP", color: "bg-rose-200 text-rose-700", action: "Created new campaign", time: "3h ago" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <div className={`w-6 h-6 rounded-full ${item.color} flex items-center justify-center flex-shrink-0`}>
              <span className="text-[8px] font-bold">{item.initials}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] text-black">{item.action}</div>
              <div className="text-[8px] text-gray-400">{item.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const features = [
  { snippet: ValidationSnippet, title: "Instant Validation", description: "Test against 10+ performance signals in seconds — know what works before you spend." },
  { snippet: ForecastSnippet, title: "Performance Forecasting", description: "AI-powered predictions before you publish. See projected reach, CTR, and engagement." },
  { snippet: OptimizeSnippet, title: "Message Optimization", description: "Generate high-impact content variants automatically. The best-performing version wins." },
  { snippet: TrackingSnippet, title: "Real-Time Tracking", description: "Monitor live performance across LinkedIn, X, email, and more from one dashboard." },
  { snippet: RefineSnippet, title: "Continuous Refinement", description: "Your content auto-improves after publication with AI-driven micro-optimizations." },
  { snippet: CollabSnippet, title: "Team Collaboration", description: "Work together seamlessly on content strategy. Review, approve, and publish as a team." },
];

const FeaturesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();
  const { ref: comparisonRef, isVisible: comparisonVisible } = useScrollAnimation();

  return (
    <section id="features" className="py-28 md:py-32 bg-[#f9f8f6] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-black leading-[1.1]">
            Everything you need to ship winning content
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            The complete platform for content intelligence
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-500 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: gridVisible ? `${index * 100}ms` : '0ms' }}
            >
              <div className="p-6 pb-0">
                <h3 className="text-lg font-semibold mb-2 text-black">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
              <div className="bg-gray-50/50">
                <feature.snippet />
              </div>
            </div>
          ))}
        </div>

        <div
          ref={comparisonRef}
          className={`transition-all duration-700 ${comparisonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 text-black text-center">
            Why teams choose intotheopen
          </h3>
          <p className="text-base text-gray-500 text-center mb-14 max-w-lg mx-auto">
            See how we compare to traditional content workflows
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-black">Predict before you launch</div>
                  <div className="text-xs text-gray-400">AI-powered performance forecasting</div>
                </div>
              </div>
              <div className="rounded-xl bg-gray-50 p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-medium text-gray-500">Predicted Performance</span>
                  <span className="text-[9px] font-medium text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">Before publish</span>
                </div>
                <div className="flex items-end gap-[3px] h-14 mb-2">
                  {[30, 35, 32, 40, 38, 45, 50, 48, 55, 60, 58, 65, 70, 72, 78, 82].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, backgroundColor: i < 10 ? '#bfdbfe' : '#3b82f6' }} />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[9px] text-gray-400">Historical</span>
                  <div className="flex items-center gap-1">
                    <span className="text-[9px] text-gray-400">Forecast:</span>
                    <span className="text-[10px] font-bold text-blue-600">+42% reach</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-black">Validate in seconds, not weeks</div>
                  <div className="text-xs text-gray-400">Instant content scoring</div>
                </div>
              </div>
              <div className="rounded-xl bg-gray-50 p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-medium text-gray-500">Content Score</span>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[9px] text-emerald-600 font-medium">Passed</span>
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { label: "Readability", value: 95 },
                    { label: "Tone Match", value: 88 },
                    { label: "SEO Score", value: 78 },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-[9px] text-gray-500 w-16">{item.label}</span>
                      <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${item.value}%` }} />
                      </div>
                      <span className="text-[9px] font-medium text-gray-600 w-7 text-right">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-black">Optimize continuously after publish</div>
                  <div className="text-xs text-gray-400">AI-driven micro-improvements</div>
                </div>
              </div>
              <div className="rounded-xl bg-gray-50 p-4">
                <div className="text-[10px] font-medium text-gray-500 mb-3">Auto-Optimizations</div>
                <div className="space-y-2">
                  {[
                    { action: "Headline adjusted for clarity", lift: "+12%" },
                    { action: "CTA copy optimized", lift: "+8%" },
                    { action: "Tone realigned to audience", lift: "+5%" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-gray-100">
                      <div className="w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-amber-600" strokeWidth={3} />
                      </div>
                      <span className="text-[10px] text-gray-700 flex-1">{item.action}</span>
                      <span className="text-[9px] font-semibold text-amber-600">{item.lift}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-black">Cut wasted campaign spend</div>
                  <div className="text-xs text-gray-400">Know what works before you invest</div>
                </div>
              </div>
              <div className="rounded-xl bg-gray-50 p-4">
                <div className="text-[10px] font-medium text-gray-500 mb-3">Budget Efficiency</div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-white rounded-lg p-3 border border-gray-100 text-center">
                    <div className="text-lg font-bold text-black">3.2x</div>
                    <div className="text-[9px] text-gray-400">Higher ROI</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-gray-100 text-center">
                    <div className="text-lg font-bold text-rose-600">-64%</div>
                    <div className="text-[9px] text-gray-400">Wasted spend</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-gray-100">
                  <div className="w-4 h-4 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 text-rose-600" strokeWidth={3} />
                  </div>
                  <span className="text-[10px] text-gray-700">Only invest in validated content</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
