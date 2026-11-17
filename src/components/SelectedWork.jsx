import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

export default function SelectedWork() {
  const projects = [
    {
      id: "01",
      name: "Aarvana Verde",
      category: "Real Estate",
      location: "Chennai, India",
      description: "Production-grade real estate platform for a luxury residential developer in Chennai. Features interactive architectural floor plan explorer, scroll-driven property storytelling, and high-conversion inquiry funnels.",
      tags: ["Website Development", "Real Estate", "3D Floorplans"],
      url: "https://aarvana-verde-real-estates.vercel.app/",
      accent: "#264634",
      gradient: "from-[#1a3829] to-[#0D0D1A]",
      metric: "99% Performance Score",
      impact: "3.2x Lead Engagement",
    },
    {
      id: "02",
      name: "Sultaan's Kitchen",
      category: "Restaurant",
      location: "Trichy, India",
      description: "Interactive dining & takeaway platform for a renowned Trichy biryani brand. Built with real-time dynamic menu, direct WhatsApp order routing, and rapid mobile checkout.",
      tags: ["Website Development", "Restaurant", "WhatsApp Integration"],
      url: "https://sultaans-kitchen.vercel.app/",
      accent: "#5a1a1a",
      gradient: "from-[#4a1212] to-[#0D0D1A]",
      metric: "Direct WhatsApp Order Flow",
      impact: "Zero Friction Ordering",
    },
    {
      id: "03",
      name: "Ashick Weds Rukshana",
      category: "Cinematic Event",
      location: "Tamil Nadu, India",
      description: "Royal Islamic wedding invitation website designed with cinematic scroll-driven storytelling, arched Islamic architectural aesthetics, gold calligraphy, and bespoke audio narrative.",
      tags: ["Website Development", "Event", "Mobile-First Narrative"],
      url: "https://ashick-weds-rukshana.vercel.app/",
      accent: "#43226a",
      gradient: "from-[#351854] to-[#0D0D1A]",
      metric: "Audio & Scroll Storytelling",
      impact: "10,000+ Guest Views",
    },
    {
      id: "04",
      name: "Atelier Interior Studio",
      category: "Interior Design",
      location: "India",
      description: "Premium editorial landing page for a professional interior design studio. Clean minimalist layout with spatial portfolio showcase, high-res photography, and high-ticket client inbound capture.",
      tags: ["Website Development", "Interior Design", "Editorial Spatial Layout"],
      url: "https://atelierinteriorstudio.pages.dev/",
      accent: "#2b2d3d",
      gradient: "from-[#1e202e] to-[#0D0D1A]",
      metric: "Sub-second Page Load",
      impact: "High-Ticket Inbound Engine",
    },
  ];

  return (
    <section 
      data-theme="dark"
      id="work"
      className="relative w-full bg-[#0D0D1A] text-[#F5F4F0] py-28 sm:py-36 lg:py-40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Pill */}
        <div className="mb-6">
          <div className="studio-pill studio-pill-dark">
            <span className="text-[#F5A623]">↗</span>
            <span className="tracking-[0.05em] uppercase font-mono-code text-[11px] font-semibold">Selected Work</span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-[-0.04em] text-[#F5F4F0] leading-none">
              This is what we build.
            </h2>
            <p className="mt-3.5 text-base sm:text-lg text-[#A0A0B0] max-w-xl leading-relaxed">
              Real businesses, live production deployments. Systems that turn attention into operational momentum.
            </p>
          </div>

          <div className="text-xs sm:text-sm font-mono-code text-[#A0A0B0] uppercase tracking-wider">
            [ 2025–2026 ARCHIVE ]
          </div>
        </div>

        {/* Atelier-Style Editorial Project Rows */}
        <div className="space-y-12 sm:space-y-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 rounded-3xl bg-[#121224] border border-white/10 hover:border-[#F5A623]/50 transition-all duration-300 shadow-xl"
            >
              {/* Left Column: Visual Media Box */}
              <div className="lg:col-span-5 h-[260px] sm:h-[300px] rounded-2xl overflow-hidden relative border border-white/10 bg-[#0E1020] flex flex-col justify-between p-6">
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90 transition-transform duration-700 group-hover:scale-105`} 
                />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 bg-[#F5A623] text-[#0D0D1A] rounded-full text-xs font-mono-code font-bold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono-code text-white/70">
                    {project.location}
                  </span>
                </div>

                <div className="relative z-10">
                  <span className="text-5xl font-extrabold text-white/15 block select-none">
                    {project.id}
                  </span>
                  <div className="text-2xl sm:text-3xl font-medium text-white tracking-tight mt-1">
                    {project.name}
                  </div>
                  <div className="text-xs font-mono-code text-[#F5A623] mt-1 font-semibold">
                    ✓ {project.metric}
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between text-xs font-mono-code text-white/60 pt-3 border-t border-white/10">
                  <span>DEPLOYED // LIVE</span>
                  <span className="text-emerald-400 font-semibold">{project.impact}</span>
                </div>
              </div>

              {/* Right Column: Project Story, Tags, and Direct Actions */}
              <div className="lg:col-span-7 flex flex-col justify-between py-2">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-mono-code text-[#F5A623] font-bold">
                      PROJECT // {project.id}
                    </span>
                    <span className="text-white/20">|</span>
                    <span className="text-xs font-mono-code text-[#A0A0B0] uppercase tracking-wider">
                      {project.category} · {project.location}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#F5F4F0] mb-4 group-hover:text-[#F5A623] transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-base sm:text-lg text-[#C0C0D4] leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2.5 mb-8">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3.5 py-1.5 bg-[#0D0D1A] text-xs font-mono-code uppercase tracking-wider text-[#C0C0D0] border border-white/10 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shadcn-primary !py-3 !px-6 rounded-xl"
                  >
                    <span>Launch Live Site</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <span className="text-xs font-mono-code text-[#A0A0B0] hidden sm:inline">
                    {project.url.replace('https://', '')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
