import React from 'react';

export default function IntroImpact() {
  const stats = [
    { num: "4+", label: "Production Platforms Live" },
    { num: "0.8s", label: "Avg Page Velocity" },
    { num: "99.8%", label: "System Reliability & Uptime" },
    { num: "24h", label: "Guaranteed Response Protocol" },
  ];

  const highlights = [
    {
      title: "Custom Engineering",
      desc: "Fast, production-grade Next.js & React architectures with sub-second page loads."
    },
    {
      title: "Shopify E-Commerce",
      desc: "Conversion-optimized product funnels, custom Liquid, and frictionless checkout."
    },
    {
      title: "Business Automation",
      desc: "Make.com and n8n pipelines that eliminate manual operations while you sleep."
    }
  ];

  return (
    <section 
      data-theme="light"
      id="intro"
      className="relative w-full bg-[#F6F4EE] text-[#1B1B1B] py-20 sm:py-28 lg:py-32 border-t border-[#1B1B1B]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Intro Top Header with Atelier Pill */}
        <div className="mb-6">
          <div className="studio-pill studio-pill-light">
            <span className="text-[#2D3480]">↗</span>
            <span className="tracking-[0.05em] uppercase font-mono-code text-[11px] font-semibold">Who We Are</span>
          </div>
        </div>

        {/* Shortened, Full Horizontal High-Impact Manifesto Statement */}
        <div className="w-full mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-medium tracking-[-0.04em] leading-[1.1] text-[#1B1B1B] w-full">
            We build digital systems that move your business forward — engineered for{" "}
            <span className="underline decoration-[#F5A623] decoration-[3px] underline-offset-8 text-[#2D3480]">speed</span>,{" "}
            <span className="underline decoration-[#2D3480] decoration-[3px] underline-offset-8 text-[#2D3480]">conversion</span>, and effortless operations.
          </h2>
        </div>

        {/* 3 Pillar Value Cards - Full Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-24">
          {highlights.map((item, idx) => (
            <div 
              key={item.title}
              className="p-8 bg-white border border-[#1B1B1B]/10 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono-code text-xs text-[#F5A623] font-bold uppercase tracking-wider block mb-3">
                  0{idx + 1} // DISCIPLINE
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#1B1B1B] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[#5A5A6E] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Our Impact Section (Full Horizontal Grid) */}
        <div className="pt-10 border-t border-[#1B1B1B]/10">
          <div className="mb-6">
            <div className="studio-pill studio-pill-light">
              <span className="text-[#2D3480]">↗</span>
              <span className="tracking-[0.05em] uppercase font-mono-code text-[11px] font-semibold">Our Impact</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat) => (
              <div 
                key={stat.label}
                className="p-6 sm:p-8 bg-white border border-[#1B1B1B]/10 rounded-2xl flex flex-col justify-between"
              >
                <div className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#2D3480] mb-2">
                  {stat.num}
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#5A5A6E] tracking-[-0.01em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
