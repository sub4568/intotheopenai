const logos = [
  { name: "AI Forge", src: "/logos/ai-forge.svg" },
  { name: "PurposeTech", src: "/logos/purposetech.svg" },
  { name: "AI Spy Media", src: "/logos/ai-spy.svg" },
  { name: "SaaStock", src: "/logos/saastock.svg" },
  { name: "NVIDIA Inception", src: "/logos/nvidia.svg" },
  { name: "Vestd", src: "/logos/vestd.svg" },
  { name: "BAE HQ", src: "/logos/bae.svg" },
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
                className="flex-shrink-0 mx-8"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-8 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-80 transition-all duration-300"
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
