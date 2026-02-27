const RecognisedBy = () => {
  const logos = [
    { src: '/ai-forge.png', alt: 'AI FORGE', size: 'h-10 md:h-16' },
    { src: '/purposetech.png', alt: 'PurposeTech', size: 'h-14 md:h-24' },
    { src: '/aispymedia.png', alt: 'AI SPY', size: 'h-14 md:h-24' },
    { src: '/saastock.png', alt: 'SaaStock', size: 'h-10 md:h-16' },
    { src: '/nvidia.png', alt: 'NVIDIA', size: 'h-10 md:h-16' },
    { src: '/vestd.png', alt: 'vestd', size: 'h-12 md:h-20' },
    { src: '/bae.png', alt: 'BAE Systems', size: 'h-10 md:h-16' },
  ];

  return (
    <section className="w-full py-20 bg-[#F2F7FA]"> 
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
        
        <div className="shrink-0">
        <p className="text-[#164B82] font-bold text-sm tracking-tight uppercase">
                Recognised by
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14">
          {logos.map((logo) => (
            <img 
              key={logo.alt}
              src={logo.src} 
              alt={logo.alt} 
              className={`${logo.size} w-auto object-contain transition-all duration-300 hover:scale-110`} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecognisedBy;