import { useEffect, useRef, useState } from "react";

const ProductPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-page-light pt-6 pb-16">
      <div className="max-w-[1100px] mx-auto px-6" ref={ref}>
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="relative mx-auto overflow-hidden rounded-[20px]" style={{ maxHeight: "480px" }}>
            <div
              className="rounded-[20px] overflow-hidden bg-[#1a1a1a] p-2.5"
              style={{
                boxShadow: "0 25px 80px rgba(0,0,0,0.12), 0 8px 30px rgba(0,0,0,0.08)",
              }}
            >
              <div className="rounded-xl overflow-hidden bg-[#fafafa]">
                <div className="flex h-[500px]">
                  <div className="w-14 bg-white border-r border-gray-100 flex flex-col items-center pt-4 gap-3">
                    <div className="w-7 h-7 rounded-lg bg-black flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">IO</span>
                    </div>
                    <div className="w-6 h-[1px] bg-gray-200 my-1" />
                    <div className="w-5 h-5 rounded bg-gray-100" />
                    <div className="w-5 h-5 rounded bg-gray-100" />
                    <div className="w-5 h-5 rounded bg-gray-100" />
                    <div className="w-5 h-5 rounded bg-black/5" />
                    <div className="w-5 h-5 rounded bg-gray-100" />
                  </div>

                  <div className="w-48 bg-white border-r border-gray-100 p-4 hidden sm:block">
                    <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-3">Dashboard</div>
                    <div className="space-y-1">
                      <div className="px-2 py-1.5 rounded-md bg-black/5 text-[11px] font-medium text-black">Signals</div>
                      <div className="px-2 py-1.5 text-[11px] text-gray-400">Benchmarks</div>
                      <div className="px-2 py-1.5 text-[11px] text-gray-400">Campaigns</div>
                      <div className="px-2 py-1.5 text-[11px] text-gray-400">Reports</div>
                      <div className="px-2 py-1.5 text-[11px] text-gray-400">Settings</div>
                    </div>
                    <div className="mt-6 text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-3">Recent</div>
                    <div className="space-y-2">
                      <div className="p-2 rounded-md border border-gray-100">
                        <div className="text-[10px] font-medium text-black">Q1 Campaign</div>
                        <div className="text-[9px] text-gray-400 mt-0.5">Score: 87/100</div>
                      </div>
                      <div className="p-2 rounded-md border border-gray-100">
                        <div className="text-[10px] font-medium text-black">Blog Series</div>
                        <div className="text-[9px] text-gray-400 mt-0.5">Score: 92/100</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 p-5 overflow-hidden">
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <div className="text-sm font-semibold text-black">Content Performance</div>
                        <div className="text-[10px] text-gray-400 mt-0.5">Real-time analysis across all channels</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="px-2.5 py-1 rounded-md bg-black text-white text-[9px] font-medium">New Analysis</div>
                        <div className="px-2.5 py-1 rounded-md border border-gray-200 text-[9px] text-gray-500">Export</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-3 mb-5">
                      <div className="p-3 rounded-lg border border-gray-100 bg-white">
                        <div className="text-[9px] text-gray-400 mb-1">Confidence</div>
                        <div className="text-lg font-bold text-black">91%</div>
                        <div className="text-[8px] text-blue-500 font-medium mt-0.5">+12% vs avg</div>
                      </div>
                      <div className="p-3 rounded-lg border border-gray-100 bg-white">
                        <div className="text-[9px] text-gray-400 mb-1">Engagement</div>
                        <div className="text-lg font-bold text-black">+42%</div>
                        <div className="text-[8px] text-blue-500 font-medium mt-0.5">High impact</div>
                      </div>
                      <div className="p-3 rounded-lg border border-gray-100 bg-white">
                        <div className="text-[9px] text-gray-400 mb-1">Breakout</div>
                        <div className="text-lg font-bold text-black">8d</div>
                        <div className="text-[8px] text-gray-400 font-medium mt-0.5">Window</div>
                      </div>
                      <div className="p-3 rounded-lg border border-gray-100 bg-white">
                        <div className="text-[9px] text-gray-400 mb-1">Momentum</div>
                        <div className="text-lg font-bold text-blue-600">+37%</div>
                        <div className="text-[8px] text-blue-500 font-medium mt-0.5">Trending up</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="col-span-2 p-4 rounded-lg border border-gray-100 bg-white">
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-[10px] font-semibold text-black">Emerging Narrative</div>
                          <div className="flex gap-1">
                            <div className="px-1.5 py-0.5 rounded text-[8px] bg-blue-50 text-blue-500">LinkedIn</div>
                            <div className="px-1.5 py-0.5 rounded text-[8px] bg-gray-100 text-gray-500">Search</div>
                            <div className="px-1.5 py-0.5 rounded text-[8px] bg-gray-100 text-gray-500">X</div>
                          </div>
                        </div>
                        <div className="text-xs font-medium text-black mb-3">AI trust messaging is accelerating across fintech audiences</div>
                        <div className="h-16 flex items-end gap-[2px]">
                          {[20, 22, 25, 24, 28, 30, 27, 32, 35, 33, 38, 40, 42, 45, 48, 52, 55, 53, 58, 62, 65, 68, 72, 75].map((h, i) => {
                            const colors = ['#e2e8f0', '#cbd5e1', '#93c5fd', '#60a5fa', '#3b82f6'];
                            const colorIndex = Math.min(Math.floor((h / 75) * colors.length), colors.length - 1);
                            return (
                              <div
                                key={i}
                                className="flex-1 rounded-t-sm"
                                style={{
                                  height: `${h}%`,
                                  backgroundColor: colors[colorIndex],
                                }}
                              />
                            );
                          })}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="p-3 rounded-lg border border-gray-100 bg-white">
                          <div className="text-[9px] text-gray-400 mb-1">Audience Match</div>
                          <div className="space-y-1.5 mt-2">
                            <div className="flex items-center justify-between">
                              <span className="text-[9px] text-gray-500">Personas</span>
                              <div className="w-3 h-3 rounded-full bg-blue-100 flex items-center justify-center">
                                <span className="text-[7px] text-blue-600">&#10003;</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-[9px] text-gray-500">Tone</span>
                              <div className="w-3 h-3 rounded-full bg-blue-100 flex items-center justify-center">
                                <span className="text-[7px] text-blue-600">&#10003;</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-[9px] text-gray-500">Clarity</span>
                              <div className="w-3 h-3 rounded-full bg-blue-100 flex items-center justify-center">
                                <span className="text-[7px] text-blue-600">&#10003;</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-3 rounded-lg border border-gray-100 bg-white">
                          <div className="text-[9px] text-gray-400 mb-1">Status</div>
                          <div className="flex items-center gap-1 mt-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            <span className="text-[10px] font-medium text-black">Ready</span>
                          </div>
                        </div>
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

export default ProductPreview;
