import React from 'react';

export default function Philosophy() {
  const pillars = [
    {
      num: "01",
      title: "We build, not just design",
      text: "Every project is functional, fast, and production-ready. No superficial mockups or abandoned prototypes. We deliver battle-tested code that serves your revenue.",
    },
    {
      num: "02",
      title: "Local business focus",
      text: "We understand businesses in Tamil Nadu and India. WhatsApp integration, regional consumer patterns, UPI checkout, and rapid mobile performance come standard.",
    },
    {
      num: "03",
      title: "Full-stack thinking",
      text: "From your consumer-facing website to your backend automation workflows with Make and n8n, we connect your entire digital architecture into a synchronized engine.",
    },
  ];

  return (
    <section 
      data-theme="light"
      id="philosophy"
      className="relative w-full bg-[#F6F4EE] text-[#1B1B1B] py-28 sm:py-36 lg:py-40 border-t border-[#1B1B1B]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Top Section Tag with Real Emblem */}
        <div className="flex flex-col items-center justify-center mb-12 sm:mb-16 text-center">
          <div className="w-14 h-14 mb-4 p-1">
            <img 
              src="/logo-emblem.png" 
              alt="Khaliq Studios Seal" 
              className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(45,52,128,0.15)]"
            />
          </div>
          <div className="studio-pill studio-pill-light">
            <span className="text-[#2D3480]">↗</span>
            <span className="tracking-[0.05em] uppercase font-mono-code text-[11px] font-semibold">Our Philosophy</span>
          </div>
        </div>

        {/* Single large centered quote */}
        <div className="max-w-4xl mx-auto text-center mb-20 sm:mb-24">
          <blockquote className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal text-[#1B1B1B] leading-[1.1] sm:leading-[1.08] tracking-tight">
            “We don't build pages.<br />
            <span className="text-[#2D3480] italic">We build systems.</span>”
          </blockquote>

          <p className="mt-8 text-lg sm:text-xl md:text-2xl font-sans text-[#5A5A6E] max-w-2xl mx-auto leading-relaxed font-normal">
            Khaliq Studios combines digital presence with business operations — websites, stores, and automation built to work together.
          </p>

          <div className="w-20 h-[2.5px] bg-[#F5A623] mx-auto mt-10" />
        </div>

        {/* 3 Pillars: Shadcn Style Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {pillars.map((pillar) => (
            <div 
              key={pillar.num} 
              className="p-8 bg-white border border-[#1B1B1B]/10 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono-code text-xs text-[#F5A623] uppercase tracking-[0.2em] mb-4 font-bold block">
                  [ PILLAR {pillar.num} ]
                </span>
                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#1B1B1B] mb-3">
                  {pillar.title}
                </h3>
                <p className="font-sans text-base sm:text-lg text-[#5A5A6E] leading-relaxed">
                  {pillar.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
