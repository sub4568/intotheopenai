import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const DraftScreen = () => (
  <div className="w-full h-full bg-white rounded-xl p-5 flex flex-col">
    <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-100">
      <div className="w-6 h-6 rounded-md bg-black flex items-center justify-center">
        <span className="text-white text-[8px] font-bold">IO</span>
      </div>
      <div className="text-xs font-semibold text-black">Content Submission</div>
      <div className="ml-auto flex gap-1.5">
        <div className="px-2 py-0.5 rounded-md text-[8px] font-medium bg-gray-100 text-gray-500">LinkedIn</div>
        <div className="px-2 py-0.5 rounded-md text-[8px] font-medium bg-black text-white">Ad Copy</div>
      </div>
    </div>
    <div className="flex-1 rounded-lg bg-gray-50 border border-gray-100 p-3 mb-3 relative">
      <div className="text-[9px] font-medium text-gray-700 mb-2 leading-relaxed">
        "AI governance is moving faster than most boards can track. Here's what every fintech leadership team needs to know before Q2…"
      </div>
      <div className="space-y-1.5">
        <div className="h-1.5 bg-gray-200 rounded-full w-full" />
        <div className="h-1.5 bg-gray-200 rounded-full w-10/12" />
        <div className="h-1.5 bg-gray-200 rounded-full w-9/12" />
        <div className="h-1.5 bg-gray-100 rounded-full w-5/12" />
      </div>
      <div className="absolute bottom-2 right-2 flex items-center gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
        <span className="text-[7px] text-gray-400">typing…</span>
      </div>
    </div>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-[9px] text-gray-400">248 words</span>
        <div className="w-px h-3 bg-gray-200" />
        <span className="text-[9px] text-gray-400">Fintech · Leadership</span>
      </div>
      <div className="px-2.5 py-1 rounded-md bg-black text-white text-[8px] font-semibold">Submit for scoring →</div>
    </div>
  </div>
);

const ValidateScreen = () => (
  <div className="w-full h-full bg-white rounded-xl p-5">
    <div className="flex items-center justify-between mb-4">
      <div className="text-xs font-semibold text-black">Content Validation</div>
      <div className="flex items-center gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        <span className="text-[9px] text-emerald-600 font-medium">All checks passed</span>
      </div>
    </div>
    <div className="flex items-baseline gap-1.5 mb-4">
      <span className="text-3xl font-bold text-black">87</span>
      <span className="text-sm text-gray-400">/100</span>
    </div>
    <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-5">
      <div className="h-full bg-black/20 rounded-full" style={{ width: "87%" }} />
    </div>
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-gray-500">Clarity</span>
        <div className="flex items-center gap-2">
          <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-black/15 rounded-full" style={{ width: "95%" }} />
          </div>
          <span className="text-[10px] font-medium text-black w-7 text-right">95%</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-gray-500">Tone match</span>
        <div className="flex items-center gap-2">
          <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-black/15 rounded-full" style={{ width: "88%" }} />
          </div>
          <span className="text-[10px] font-medium text-black w-7 text-right">88%</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-gray-500">Audience fit</span>
        <div className="flex items-center gap-2">
          <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-black/15 rounded-full" style={{ width: "92%" }} />
          </div>
          <span className="text-[10px] font-medium text-black w-7 text-right">92%</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-gray-500">Engagement</span>
        <div className="flex items-center gap-2">
          <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-black/15 rounded-full" style={{ width: "78%" }} />
          </div>
          <span className="text-[10px] font-medium text-black w-7 text-right">78%</span>
        </div>
      </div>
    </div>
  </div>
);

const OptimizeScreen = () => (
  <div className="w-full h-full bg-white rounded-xl p-5">
    <div className="flex items-center justify-between mb-4">
      <div className="text-xs font-semibold text-black">AI Variants</div>
      <div className="px-2 py-0.5 rounded text-[9px] bg-black text-white">3 generated</div>
    </div>
    <div className="space-y-2.5">
      <div className="p-3 rounded-lg border border-gray-100">
        <div className="flex items-center justify-between mb-1.5">
          <div className="text-[10px] font-medium text-gray-400">Variant A</div>
          <span className="text-[10px] font-medium text-emerald-600">+18%</span>
        </div>
        <div className="h-1.5 bg-gray-200 rounded-full w-full" />
        <div className="h-1.5 bg-gray-200 rounded-full w-4/5 mt-1" />
      </div>
      <div className="p-3 rounded-lg border-2 border-black/20 bg-black/[0.02]">
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-1.5">
            <div className="text-[10px] font-medium text-black">Variant B</div>
            <div className="px-1 py-0.5 rounded text-[7px] bg-emerald-100 text-emerald-700 font-bold">BEST</div>
          </div>
          <span className="text-[10px] font-bold text-black">+42%</span>
        </div>
        <div className="h-1.5 bg-gray-300 rounded-full w-full" />
        <div className="h-1.5 bg-gray-300 rounded-full w-3/4 mt-1" />
      </div>
      <div className="p-3 rounded-lg border border-gray-100">
        <div className="flex items-center justify-between mb-1.5">
          <div className="text-[10px] font-medium text-gray-400">Variant C</div>
          <span className="text-[10px] font-medium text-emerald-600">+24%</span>
        </div>
        <div className="h-1.5 bg-gray-200 rounded-full w-full" />
        <div className="h-1.5 bg-gray-200 rounded-full w-2/3 mt-1" />
      </div>
    </div>
  </div>
);

const PublishScreen = () => (
  <div className="w-full h-full bg-white rounded-xl p-5">
    <div className="flex items-center justify-between mb-4">
      <div className="text-xs font-semibold text-black">Multi-channel Deploy</div>
      <div className="text-[9px] text-gray-400">3 channels</div>
    </div>
    <div className="space-y-3">
      <div className="flex items-center gap-3 p-2.5 rounded-lg border border-gray-100">
        <div className="w-7 h-7 rounded-md bg-[#0A66C2]/10 flex items-center justify-center">
          <span className="text-[9px] font-bold text-[#0A66C2]">in</span>
        </div>
        <div className="flex-1">
          <div className="text-[10px] font-medium text-black">LinkedIn</div>
          <div className="text-[8px] text-gray-400">Scheduled 9:00 AM</div>
        </div>
        <div className="w-2 h-2 rounded-full bg-emerald-500" />
      </div>
      <div className="flex items-center gap-3 p-2.5 rounded-lg border border-gray-100">
        <div className="w-7 h-7 rounded-md bg-black/5 flex items-center justify-center">
          <span className="text-[9px] font-bold text-black">X</span>
        </div>
        <div className="flex-1">
          <div className="text-[10px] font-medium text-black">X / Twitter</div>
          <div className="text-[8px] text-gray-400">Scheduled 9:15 AM</div>
        </div>
        <div className="w-2 h-2 rounded-full bg-emerald-500" />
      </div>
      <div className="flex items-center gap-3 p-2.5 rounded-lg border border-gray-100">
        <div className="w-7 h-7 rounded-md bg-black/5 flex items-center justify-center">
          <span className="text-[9px] font-bold text-black">@</span>
        </div>
        <div className="flex-1">
          <div className="text-[10px] font-medium text-black">Email Campaign</div>
          <div className="text-[8px] text-gray-400">Draft ready</div>
        </div>
        <div className="w-2 h-2 rounded-full bg-yellow-400" />
      </div>
    </div>
    <div className="mt-3 px-3 py-2 rounded-lg bg-black text-white text-[10px] font-medium text-center">
      Deploy All
    </div>
  </div>
);

const RefineScreen = () => (
  <div className="w-full h-full bg-white rounded-xl p-5">
    <div className="flex items-center justify-between mb-4">
      <div className="text-xs font-semibold text-black">Live Performance</div>
      <div className="flex items-center gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
        <span className="text-[9px] text-gray-500">Live</span>
      </div>
    </div>
    <div className="flex items-end gap-[3px] h-16 mb-3">
      {[25, 30, 28, 35, 32, 40, 38, 45, 42, 50, 48, 55, 52, 60, 58, 65, 62, 70, 68, 75].map((h, i) => (
        <div key={i} className="flex-1 bg-black/10 rounded-t-sm" style={{ height: `${h}%` }} />
      ))}
    </div>
    <div className="flex items-center justify-between mb-3">
      <span className="text-[9px] text-gray-400">30-day trend</span>
      <span className="text-xs font-bold text-emerald-600">+37%</span>
    </div>
    <div className="grid grid-cols-3 gap-2">
      <div className="p-2 rounded-md bg-gray-50 text-center">
        <div className="text-sm font-bold text-black">24.5k</div>
        <div className="text-[8px] text-gray-400">Reach</div>
      </div>
      <div className="p-2 rounded-md bg-gray-50 text-center">
        <div className="text-sm font-bold text-black">8.2%</div>
        <div className="text-[8px] text-gray-400">CTR</div>
      </div>
      <div className="p-2 rounded-md bg-gray-50 text-center">
        <div className="text-sm font-bold text-black">1.4k</div>
        <div className="text-[8px] text-gray-400">Shares</div>
      </div>
    </div>
  </div>
);

const steps = [
  {
    screen: DraftScreen,
    title: "Draft",
    subtitle: "Create content that's built to perform",
    description: "Write in our intelligent editor that understands your audience, brand voice, and goals. Tag channels and let the system prepare your content for validation.",
  },
  {
    screen: ValidateScreen,
    title: "Validate",
    subtitle: "Test in seconds, not weeks",
    description: "Get instant AI-powered scoring across clarity, tone, audience fit, and predicted engagement. No more guessing — know what works before you spend.",
  },
  {
    screen: OptimizeScreen,
    title: "Optimize",
    subtitle: "AI-generated variants that outperform",
    description: "Automatically generate high-performing variants of your content. The system identifies the best-performing version based on predicted engagement lift.",
  },
  {
    screen: PublishScreen,
    title: "Publish",
    subtitle: "Deploy everywhere at once",
    description: "Push optimized content to LinkedIn, X, email, and more — all from one place. Schedule, sequence, and coordinate across every channel.",
  },
  {
    screen: RefineScreen,
    title: "Refine",
    subtitle: "Content that improves itself",
    description: "Track live performance metrics and let the system auto-optimize. Your content gets smarter over time with continuous feedback loops.",
  },
];

const HowItWorksSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="how-it-works" className="py-28 md:py-32 bg-[#f9f8f6]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center mb-24 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-black leading-[1.1]">
            From draft to performance
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            A continuous workflow that engineers content success
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return <StepRow key={index} step={step} index={index} isEven={isEven} />;
          })}
        </div>
      </div>
    </section>
  );
};

const StepRow = ({ step, index, isEven }: { step: typeof steps[0]; index: number; isEven: boolean }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-16`}
    >
      <div
        className="flex-1 w-full max-w-md transition-all duration-700 ease-out"
        style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(28px)', transitionDelay: '0ms' }}
      >
        <div className="rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <step.screen />
        </div>
      </div>

      <div
        className="flex-1 max-w-lg transition-all duration-700 ease-out"
        style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)', transitionDelay: '100ms' }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
            {index + 1}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-black">{step.title}</h3>
        </div>
        <p className="text-lg font-medium text-black mb-3">{step.subtitle}</p>
        <p className="text-base text-gray-500 leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
};

export default HowItWorksSection;
