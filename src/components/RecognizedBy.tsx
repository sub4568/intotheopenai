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
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-center text-gray-400 mb-10">
          Recognised by
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {logos.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              className="h-8 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-80 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecognizedBy;
