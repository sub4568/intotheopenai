import { Check, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ValidationSnippet = () => (
  <div className="p-4 pt-8">
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div className="px-4 py-2.5 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-gray-200" />
            <div className="w-2 h-2 rounded-full bg-gray-200" />
            <div className="w-2 h-2 rounded-full bg-gray-200" />
          </div>
          <span className="text-[10px] font-medium text-gray-500">Content Validation</span>
        </div>
        <div className="flex items-center gap-1 bg-emerald-50 px-1.5 py-0.5 rounded">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-[8px] font-medium text-emerald-600">All checks passed</span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="relative w-12 h-12">
            <svg className="w-12 h-12 -rotate-90" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="15.5" fill="none" stroke="#f3f4f6" strokeWidth="3" />
              <circle cx="18" cy="18" r="15.5" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="97.4" strokeDashoffset="12.7" strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[11px] font-bold text-black">87</span>
            </div>
          </div>
          <div>
            <div className="text-[10px] font-medium text-black">Overall Score</div>
            <div className="text-[8px] text-gray-400">5 signals analyzed</div>
          </div>
        </div>
        <div className="space-y-2">
          {[
            { label: "Readability", value: 95, color: "bg-emerald-400" },
            { label: "Tone Match", value: 88, color: "bg-emerald-400" },
            { label: "CTA Strength", value: 92, color: "bg-emerald-400" },
            { label: "SEO Score", value: 78, color: "bg-amber-400" },
            { label: "Engagement", value: 85, color: "bg-emerald-400" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between">
              <span className="text-[9px] text-gray-500 w-20">{item.label}</span>
              <div className="flex items-center gap-2 flex-1 ml-2">
                <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.value}%` }} />
                </div>
                <span className="text-[8px] font-medium text-gray-500 w-6 text-right">{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ForecastSnippet = () => (
  <div className="p-4 pt-8">
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div className="px-4 py-2.5 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-gray-200" />
            <div className="w-2 h-2 rounded-full bg-gray-200" />
            <div className="w-2 h-2 rounded-full bg-gray-200" />
          </div>
          <span className="text-[10px] font-medium text-gray-500">30-Day Forecast</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[8px] text-gray-400 px-1.5 py-0.5 rounded border border-gray-150">7d</span>
          <span className="text-[8px] text-white bg-black px-1.5 py-0.5 rounded font-medium">30d</span>
          <span className="text-[8px] text-gray-400 px-1.5 py-0.5 rounded border border-gray-150">90d</span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-xs font-semibold text-black">Projected Engagement</div>
            <div className="text-[9px] text-gray-400">Based on current signals</div>
          </div>
          <span className="text-[9px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">↑ 42%</span>
        </div>
        <div className="relative h-20 mb-2">
          <svg className="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
            <defs>
              <linearGradient id="forecastFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,45 C15,42 25,38 40,35 C55,32 65,30 80,26 C95,22 105,20 120,18" stroke="#94a3b8" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M120,18 C135,14 145,10 160,7 C175,4 185,2 200,1" stroke="#3b82f6" strokeWidth="1.5" fill="none" strokeDasharray="4 3" strokeLinecap="round" />
            <path d="M0,45 C15,42 25,38 40,35 C55,32 65,30 80,26 C95,22 105,20 120,18 C135,14 145,10 160,7 C175,4 185,2 200,1 L200,60 L0,60 Z" fill="url(#forecastFill)" />
            <circle cx="120" cy="18" r="3" fill="white" stroke="#3b82f6" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="flex items-center justify-between text-[8px] text-gray-400 mb-3">
          <span>Nov 1</span>
          <div className="flex-1 mx-2 border-t border-dashed border-gray-200" />
          <span className="text-blue-500 font-medium">Today</span>
          <div className="flex-1 mx-2 border-t border-dashed border-gray-200" />
          <span>Dec 1</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="text-center p-2 rounded-lg bg-gray-50 border border-gray-100">
            <div className="text-xs font-bold text-black">24.5k</div>
            <div className="text-[8px] text-gray-400">Est. Reach</div>
          </div>
          <div className="text-center p-2 rounded-lg bg-gray-50 border border-gray-100">
            <div className="text-xs font-bold text-black">8.2%</div>
            <div className="text-[8px] text-gray-400">Est. CTR</div>
          </div>
          <div className="text-center p-2 rounded-lg bg-gray-50 border border-gray-100">
            <div className="text-xs font-bold text-black">1.4k</div>
            <div className="text-[8px] text-gray-400">Est. Shares</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const OptimizeSnippet = () => (
  <div className="p-4 pt-8">
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div className="px-4 py-2.5 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-gray-200" />
            <div className="w-2 h-2 rounded-full bg-gray-200" />
            <div className="w-2 h-2 rounded-full bg-gray-200" />
          </div>
          <span className="text-[10px] font-medium text-gray-500">AI Variants</span>
        </div>
        <span className="text-[8px] text-gray-400">3 of 3 generated</span>
      </div>
      <div className="p-4 space-y-2">
        <div className="p-2.5 rounded-lg border border-gray-100 bg-gray-50/50">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded bg-gray-200 flex items-center justify-center">
                <span className="text-[7px] font-bold text-gray-500">A</span>
              </div>
              <span className="text-[10px] text-gray-500">Direct & authoritative</span>
            </div>
            <span className="text-[9px] font-medium text-emerald-600">+18%</span>
          </div>
          <div className="h-1 bg-gray-200 rounded-full w-full" />
          <div className="h-1 bg-gray-200 rounded-full w-4/5 mt-1" />
        </div>
        <div className="p-2.5 rounded-lg border-2 border-blue-300 bg-blue-50/40 relative">
          <div className="absolute -top-1.5 right-3 text-[7px] font-bold bg-blue-600 text-white px-1.5 py-0.5 rounded-full">RECOMMENDED</div>
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded bg-blue-200 flex items-center justify-center">
                <span className="text-[7px] font-bold text-blue-700">B</span>
              </div>
              <span className="text-[10px] font-medium text-black">Conversational & empathetic</span>
            </div>
            <span className="text-[9px] font-bold text-blue-700">+42%</span>
          </div>
          <div className="h-1 bg-blue-200 rounded-full w-full" />
          <div className="h-1 bg-blue-200 rounded-full w-3/4 mt-1" />
        </div>
        <div className="p-2.5 rounded-lg border border-gray-100 bg-gray-50/50">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded bg-gray-200 flex items-center justify-center">
                <span className="text-[7px] font-bold text-gray-500">C</span>
              </div>
              <span className="text-[10px] text-gray-500">Data-driven & precise</span>
            </div>
            <span className="text-[9px] font-medium text-emerald-600">+24%</span>
          </div>
          <div className="h-1 bg-gray-200 rounded-full w-full" />
          <div className="h-1 bg-gray-200 rounded-full w-2/3 mt-1" />
        </div>
      </div>
    </div>
  </div>
);

const TrackingSnippet = () => (
  <div className="p-4 pt-8">
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div className="px-4 py-2.5 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-gray-200" />
            <div className="w-2 h-2 rounded-full bg-gray-200" />
            <div className="w-2 h-2 rounded-full bg-gray-200" />
          </div>
          <span className="text-[10px] font-medium text-gray-500">Live Channels</span>
        </div>
        <div className="flex items-center gap-1 bg-emerald-50 px-1.5 py-0.5 rounded">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[8px] font-medium text-emerald-600">Tracking</span>
        </div>
      </div>
      <div className="p-4 space-y-2">
        {[
          { name: "LinkedIn", handle: "in", impressions: "12.4k", clicks: "1.2k", color: "bg-blue-100 text-blue-700", status: "emerald" },
          { name: "X / Twitter", handle: "X", impressions: "8.1k", clicks: "640", color: "bg-gray-200 text-gray-700", status: "emerald" },
          { name: "Email", handle: "@", impressions: "4.0k", clicks: "380", color: "bg-amber-100 text-amber-700", status: "amber" },
        ].map((ch, i) => (
          <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg border border-gray-100 hover:bg-gray-50/50">
            <div className={`w-7 h-7 rounded-lg ${ch.color} flex items-center justify-center`}>
              <span className="text-[9px] font-bold">{ch.handle}</span>
            </div>
            <div className="flex-1">
              <div className="text-[10px] font-medium text-black">{ch.name}</div>
              <div className="text-[8px] text-gray-400">{ch.impressions} views · {ch.clicks} clicks</div>
            </div>
            <div className="flex flex-col items-end gap-0.5">
              <div className={`w-1.5 h-1.5 rounded-full ${ch.status === 'emerald' ? 'bg-emerald-500' : 'bg-amber-400'}`} />
              <span className="text-[7px] text-gray-400">{ch.status === 'emerald' ? 'Active' : 'Slow'}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const RefineSnippet = () => (
  <div className="p-4 pt-8">
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div className="px-4 py-2.5 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-gray-200" />
            <div className="w-2 h-2 rounded-full bg-gray-200" />
            <div className="w-2 h-2 rounded-full bg-gray-200" />
          </div>
          <span className="text-[10px] font-medium text-gray-500">Auto-Optimizations</span>
        </div>
        <span className="text-[8px] text-gray-400">4 applied</span>
      </div>
      <div className="p-4 space-y-2">
        {[
          { action: "Headline adjusted for clarity", lift: "+12%", time: "2h ago", icon: "Aa" },
          { action: "CTA button copy optimized", lift: "+8%", time: "6h ago", icon: "→" },
          { action: "Tone realigned to audience", lift: "+5%", time: "1d ago", icon: "♪" },
          { action: "Image alt text improved", lift: "+3%", time: "2d ago", icon: "▣" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 p-2 rounded-lg border border-gray-100">
            <div className="w-6 h-6 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
              <span className="text-[8px] font-bold text-emerald-600">{item.icon}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[9px] font-medium text-black truncate">{item.action}</div>
              <div className="text-[8px] text-gray-400">{item.time}</div>
            </div>
            <span className="text-[9px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded flex-shrink-0">{item.lift}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CollabSnippet = () => (
  <div className="p-4 pt-8">
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div className="px-4 py-2.5 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-gray-200" />
            <div className="w-2 h-2 rounded-full bg-gray-200" />
            <div className="w-2 h-2 rounded-full bg-gray-200" />
          </div>
          <span className="text-[10px] font-medium text-gray-500">Team Activity</span>
        </div>
        <div className="flex -space-x-1.5">
          <div className="w-4 h-4 rounded-full bg-blue-200 border border-white" />
          <div className="w-4 h-4 rounded-full bg-violet-200 border border-white" />
          <div className="w-4 h-4 rounded-full bg-amber-200 border border-white" />
          <div className="w-4 h-4 rounded-full bg-rose-200 border border-white" />
        </div>
      </div>
      <div className="p-4 space-y-2">
        {[
          { initials: "AK", color: "bg-blue-100 text-blue-700 border-blue-200", action: "Approved variant B", detail: "Q1 Campaign", time: "2m ago" },
          { initials: "MJ", color: "bg-violet-100 text-violet-700 border-violet-200", action: "Commented on draft", detail: "Blog Series", time: "15m ago" },
          { initials: "SR", color: "bg-amber-100 text-amber-700 border-amber-200", action: "Published to LinkedIn", detail: "Product Update", time: "1h ago" },
          { initials: "LP", color: "bg-rose-100 text-rose-700 border-rose-200", action: "Created new campaign", detail: "Q2 Launch", time: "3h ago" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 p-1.5 rounded-lg hover:bg-gray-50 transition-colors">
            <div className={`w-7 h-7 rounded-full ${item.color} border flex items-center justify-center flex-shrink-0`}>
              <span className="text-[8px] font-bold">{item.initials}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[9px] font-medium text-black">{item.action}</div>
              <div className="text-[8px] text-gray-400">{item.detail} · {item.time}</div>
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
                  <span className="text-[10px] font-medium text-gray-500">Pre-Publish Signals</span>
                  <span className="text-[9px] font-medium text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">Before publish</span>
                </div>
                <div className="space-y-2.5 mb-3">
                  {[
                    { label: "Reach", before: "~6k", after: "24.5k", pct: 85 },
                    { label: "CTR", before: "~2.1%", after: "8.2%", pct: 72 },
                    { label: "Shares", before: "~200", after: "1.4k", pct: 90 },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] text-gray-500">{item.label}</span>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[8px] text-gray-400 line-through">{item.before}</span>
                          <span className="text-[9px] font-semibold text-blue-600">{item.after}</span>
                        </div>
                      </div>
                      <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-400 rounded-full" style={{ width: `${item.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center text-[8px] text-gray-400">Predicted vs. industry average</div>
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
                  <span className="text-[10px] font-medium text-gray-500">Quick Scan Results</span>
                  <span className="text-[8px] text-gray-400">0.8s</span>
                </div>
                <div className="space-y-1.5">
                  {[
                    { label: "Brand voice alignment", status: "pass" },
                    { label: "Target audience match", status: "pass" },
                    { label: "Competitive differentiation", status: "pass" },
                    { label: "CTA effectiveness", status: "warn" },
                    { label: "Channel optimization", status: "pass" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white rounded-lg px-3 py-1.5 border border-gray-100">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${item.status === 'pass' ? 'bg-emerald-100' : 'bg-amber-100'}`}>
                        {item.status === 'pass'
                          ? <Check className="w-2.5 h-2.5 text-emerald-600" strokeWidth={3} />
                          : <span className="text-[8px] font-bold text-amber-600">!</span>
                        }
                      </div>
                      <span className="text-[9px] text-gray-700 flex-1">{item.label}</span>
                      <span className={`text-[8px] font-medium ${item.status === 'pass' ? 'text-emerald-500' : 'text-amber-500'}`}>
                        {item.status === 'pass' ? 'Pass' : 'Review'}
                      </span>
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
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-medium text-gray-500">Performance Over Time</span>
                  <span className="text-[9px] font-medium text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">+25% total</span>
                </div>
                <div className="space-y-0">
                  {[
                    { day: "Day 1", score: 68, delta: "Published" },
                    { day: "Day 3", score: 74, delta: "+6" },
                    { day: "Day 7", score: 81, delta: "+7" },
                    { day: "Day 14", score: 85, delta: "+4" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex flex-col items-center">
                        <div className={`w-2.5 h-2.5 rounded-full border-2 ${i === 3 ? 'bg-amber-500 border-amber-500' : 'bg-white border-amber-300'}`} />
                        {i < 3 && <div className="w-px h-5 bg-amber-200" />}
                      </div>
                      <div className="flex items-center justify-between flex-1 py-1.5">
                        <div>
                          <span className="text-[9px] font-medium text-black">{item.day}</span>
                          <span className="text-[8px] text-gray-400 ml-1.5">Score: {item.score}</span>
                        </div>
                        <span className={`text-[8px] font-semibold ${i === 0 ? 'text-gray-400' : 'text-amber-600'}`}>{item.delta}</span>
                      </div>
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
                <div className="text-[10px] font-medium text-gray-500 mb-3">Budget Allocation</div>
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <svg className="w-20 h-20 -rotate-90" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#f3f4f6" strokeWidth="4" />
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#f43f5e" strokeWidth="4" strokeDasharray="87.96" strokeDashoffset="56.3" strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[11px] font-bold text-rose-600">36%</span>
                    </div>
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-rose-500 flex-shrink-0" />
                      <span className="text-[9px] text-gray-600">Saved from waste</span>
                      <span className="text-[9px] font-semibold text-rose-600 ml-auto">$24k</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gray-200 flex-shrink-0" />
                      <span className="text-[9px] text-gray-600">Optimized spend</span>
                      <span className="text-[9px] font-semibold text-gray-700 ml-auto">$42k</span>
                    </div>
                    <div className="mt-2 pt-2 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] text-gray-400">ROI improvement</span>
                        <span className="text-[9px] font-bold text-black">3.2x</span>
                      </div>
                    </div>
                  </div>
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
