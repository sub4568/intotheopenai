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
    <section className="py-12 md:py-16 bg-page-light">
      <div className="container mx-auto px-4 max-w-5xl">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-center text-muted-foreground/60 mb-8">
          Recognised by
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
          {logos.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              className="h-9 md:h-11 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecognizedBy;
