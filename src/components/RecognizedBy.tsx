const logos = [
  { name: "AI Forge", src: "/logos/ai-forge.svg", tall: false },
  { name: "PurposeTech", src: "/logos/purposetech.svg", tall: false },
  { name: "AI Spy Media", src: "/logos/ai-spy.svg", tall: false },
  { name: "SaaStock", src: "/logos/saastock.svg", tall: false },
  { name: "NVIDIA Inception", src: "/logos/nvidia.svg", tall: false },
  { name: "Vestd", src: "/logos/vestd.svg", tall: false },
  { name: "BAE HQ", src: "/logos/bae.svg", tall: false },
  { name: "Barclays Eagle Labs", src: "/logos/eagle-labs.png", tall: true },
  { name: "Foundervine", src: "/logos/foundervine.webp", tall: true },
];

const RecognizedBy = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-center text-gray-400 mb-10">
          Recognised by
        </p>
        <div className="relative">
          <div className="flex animate-scroll">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className={`w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 ${logo.tall ? 'h-14' : 'h-10'}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecognizedBy;
