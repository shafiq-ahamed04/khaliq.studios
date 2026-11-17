import React from 'react';
import { Layers, Zap, CheckCircle2, ShieldCheck } from 'lucide-react';

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
    <section className="relative w-full bg-[#F6F4EE] text-[#1B1B1B] py-24 sm:py-32 lg:py-36 border-t border-[#1B1B1B]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Intro Top Header with Atelier Pill */}
        <div className="mb-6">
          <div className="studio-pill studio-pill-light">
            <span className="text-[#2D3480]">↗</span>
            <span className="tracking-[0.05em] uppercase font-mono-code text-[11px] font-semibold">Who We Are</span>
          </div>
        </div>

        {/* Big Editorial Statement Headline with highlighted words */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-[-0.04em] leading-[1.12] text-[#1B1B1B]">
            We're not just developers. We're{" "}
            <span className="underline decoration-[#F5A623] decoration-2 underline-offset-4 text-[#2D3480]">listeners</span>,{" "}
            <span className="underline decoration-[#2D3480] decoration-2 underline-offset-4 text-[#2D3480]">architects</span>, and believers that your website and workflows should work for your business — not the other way around. Every project starts the same way: we sit down, we listen, we learn your operations.
          </h2>
        </div>

        {/* 3 Pillar Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20 sm:mb-28">
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

        {/* Our Impact Section (Atelier Impact Grid) */}
        <div className="pt-12 border-t border-[#1B1B1B]/10">
          <div className="mb-8">
            <div className="studio-pill studio-pill-light">
              <span className="text-[#2D3480]">↗</span>
              <span className="tracking-[0.05em] uppercase font-mono-code text-[11px] font-semibold">Our Impact</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat) => (
              <div 
                key={stat.label}
                className="p-6 sm:p-8 bg-white border border-[#1B1B1B]/10 rounded-2xl flex flex-col justify-between"
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#2D3480] mb-2">
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
