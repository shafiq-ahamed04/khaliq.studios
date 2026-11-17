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
      id="philosophy"
      className="relative w-full bg-[#F5F4F0] text-[#0D0D1A] py-24 sm:py-36 lg:py-44 overflow-hidden border-t border-[#0D0D1A]/5"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Top Section Tag with Real Emblem */}
        <div className="flex flex-col items-center justify-center mb-14 sm:mb-18 text-center">
          <div className="w-14 h-14 mb-4 p-1">
            <img 
              src="/logo-emblem.png" 
              alt="Khaliq Studios Seal" 
              className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(45,52,128,0.15)]"
            />
          </div>
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono-code text-[#2D3480] uppercase tracking-[0.25em] font-bold">
            <span className="w-2.5 h-[2.5px] bg-[#F5A623]"></span>
            <span>AGENCY PHILOSOPHY</span>
            <span className="w-2.5 h-[2.5px] bg-[#F5A623]"></span>
          </div>
        </div>

        {/* Single large centered serif quote, no box, no card */}
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#0D0D1A] leading-[1.1] sm:leading-[1.08] tracking-tight">
            “We don't build pages.<br />
            <span className="text-[#2D3480] italic">We build systems.</span>”
          </blockquote>

          {/* Below in confident larger editorial sans */}
          <p className="mt-8 sm:mt-10 text-lg sm:text-xl md:text-2xl font-sans text-[#4A4A5E] max-w-2xl mx-auto leading-relaxed font-light">
            Khaliq Studios combines digital presence with business operations — websites, stores, and automation built to work together.
          </p>

          <div className="w-20 h-[2.5px] bg-[#F5A623] mx-auto mt-10 mb-16 sm:mb-24" />
        </div>

        {/* 3 Columns: WHY KHALIQ STUDIOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 lg:gap-14 pt-12 border-t border-[#0D0D1A]/10">
          {pillars.map((pillar) => (
            <div key={pillar.num} className="flex flex-col">
              <span className="font-mono-code text-xs sm:text-sm text-[#F5A623] uppercase tracking-[0.2em] mb-3 font-bold">
                [ PILLAR {pillar.num} ]
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#0D0D1A] font-normal mb-3 leading-snug">
                {pillar.title}
              </h3>
              <p className="font-sans text-sm sm:text-base md:text-lg text-[#4A4A5E] leading-relaxed">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
