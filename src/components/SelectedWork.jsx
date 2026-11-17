import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

export default function SelectedWork() {
  const [activeProject, setActiveProject] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const projects = [
    {
      id: "01",
      name: "Aarvana Verde",
      category: "Real Estate",
      location: "Chennai, India",
      description: "Production-grade real estate website for a Chennai luxury residential developer. Features architectural floor plan explorer, scroll-driven storytelling, and premium property showcase.",
      tags: ["Website Development", "Real Estate", "Premium UI"],
      url: "https://aarvana-verde-real-estates.vercel.app/",
      accentColor: "#395B47",
      themeSummary: "Luxury Residential Architecture",
      features: "Interactive Floor Plans · Scroll-Driven Storytelling",
    },
    {
      id: "02",
      name: "Sultaan's Kitchen",
      category: "Restaurant",
      location: "Trichy, India",
      description: "Interactive restaurant landing page for a Trichy biryani brand. Full menu with WhatsApp ordering, gallery, testimonials, and SEO optimization.",
      tags: ["Website Development", "Restaurant", "WhatsApp Integration"],
      url: "https://sultaans-kitchen.vercel.app/",
      accentColor: "#932720",
      themeSummary: "Heritage Gastronomy & Quick Order",
      features: "WhatsApp Direct Ordering · Dynamic Menu · High Conversion",
    },
    {
      id: "03",
      name: "Ashick Weds Rukshana",
      category: "Event",
      location: "Tamil Nadu, India",
      description: "Cinematic Muslim wedding invitation website with scroll-driven storytelling, royal arched aesthetics, gold calligraphy, and mobile-first design.",
      tags: ["Website Development", "Event", "Mobile-First"],
      url: "https://ashick-weds-rukshana.vercel.app/",
      accentColor: "#7A5229",
      themeSummary: "Cinematic Royal Digital Invitation",
      features: "Arched Islamic Architecture · Audio Narrative · Mobile-First",
    },
    {
      id: "04",
      name: "Atelier Interior Studio",
      category: "Interior Design",
      location: "India",
      description: "Premium landing page for a professional interior design studio. Clean editorial layout with portfolio showcase and lead generation focus.",
      tags: ["Website Development", "Interior Design", "Premium"],
      url: "https://atelierinteriorstudio.pages.dev/",
      accentColor: "#4B4C53",
      themeSummary: "Editorial Spatial Design",
      features: "Minimalist Grid · High-Res Imagery · Inbound Funnel",
    },
  ];

  // Smooth mouse interpolation for the floating preview card (desktop only)
  useEffect(() => {
    const handleMouseMove = (e) => {
      setTargetPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animId;
    const updateFloat = () => {
      setCursorPos(prev => ({
        x: prev.x + (targetPos.x - prev.x) * 0.16,
        y: prev.y + (targetPos.y - prev.y) * 0.16,
      }));
      animId = requestAnimationFrame(updateFloat);
    };
    animId = requestAnimationFrame(updateFloat);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, [targetPos]);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative w-full bg-[#0D0D1A] text-[#F5F4F0] py-24 sm:py-36 lg:py-40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Top Header Row with Right-Aligned Headline */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 sm:mb-20 gap-4 sm:gap-6">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono-code text-[#A0A0B0] uppercase tracking-[0.25em] font-bold">
            <span className="w-2.5 h-[2.5px] bg-[#F5A623]"></span>
            <span>PORTFOLIO SHOWCASE</span>
          </div>

          {/* Headline: Right-aligned serif in off-white - responsive sizing */}
          <div className="sm:text-right">
            <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#F5F4F0] leading-none">
              Selected Work
            </h2>
            <p className="mt-3 text-sm sm:text-base font-mono-code text-[#C0C0D0] tracking-[0.15em] uppercase font-semibold">
              Production Deployments (2025–2026)
            </p>
          </div>
        </div>

        {/* 4 Project Entries — Large horizontal rows with hairline dividers between rows only */}
        <div className="border-t border-[#2D3480]/40">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setActiveProject(project)}
              onMouseLeave={() => setActiveProject(null)}
              className="project-row group block relative border-b border-[#2D3480]/40 py-8 sm:py-12 lg:py-14 px-4 sm:px-8 transition-all duration-400 ease-out hover:bg-[#2D3480] cursor-pointer"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
                {/* Left: Project number in small amber */}
                <div className="w-14 sm:w-20 flex-shrink-0">
                  <span className="font-mono-code text-base sm:text-xl text-[#F5A623] tracking-wider font-semibold">
                    {project.id}
                  </span>
                </div>

                {/* Center: Project name in large serif + category in letter-spaced sans */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-6">
                    <h3 className="font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#F5F4F0] transition-colors duration-300 group-hover:text-[#F5A623]">
                      {project.name}
                    </h3>
                    <span className="text-xs sm:text-sm font-mono-code uppercase tracking-[0.2em] text-[#C0C0D0] group-hover:text-white mt-1 sm:mt-0 font-medium">
                      {project.category} · {project.location}
                    </span>
                  </div>

                  <p className="mt-3.5 text-sm sm:text-base md:text-lg font-sans text-[#B0B0C4] group-hover:text-[#F5F4F0] max-w-2xl leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-black/40 text-xs font-mono-code uppercase tracking-wider text-[#C0C0D0] group-hover:text-[#F5F4F0] group-hover:bg-black/60 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: "View →" in amber, no decoration, responsive touch */}
                <div className="lg:text-right flex items-center lg:justify-end pt-2 lg:pt-0">
                  <div className="inline-flex items-center gap-2 text-sm sm:text-base font-mono-code text-[#F5A623] font-bold group-hover:translate-x-2 transition-transform duration-300">
                    <span>View Project</span>
                    <span className="text-lg sm:text-xl">→</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Floating Dynamic Preview Card for desktop viewports */}
      {activeProject && (
        <div
          className="hidden lg:flex pointer-events-none fixed z-[9000] -translate-x-1/2 -translate-y-1/2 flex-col w-[340px] bg-[#0D0D1A] border-2 border-[#F5A623] shadow-2xl p-4 transition-opacity duration-200"
          style={{
            left: `${cursorPos.x + 190}px`,
            top: `${cursorPos.y}px`,
          }}
        >
          {/* Card Top Header */}
          <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-[#2D3480]/50 text-xs font-mono-code tracking-[0.15em] text-[#A0A0B0]">
            <span className="flex items-center gap-2 text-[#F5A623] font-bold">
              <span className="w-2 h-2 bg-[#F5A623] animate-pulse"></span>
              <span>LIVE SYSTEM</span>
            </span>
            <span>{activeProject.id} // {activeProject.category}</span>
          </div>

          {/* Architectural Preview Frame */}
          <div
            className="w-full h-40 relative flex flex-col justify-between p-4 border border-[#2D3480]/60 overflow-hidden"
            style={{
              backgroundColor: '#121226',
              backgroundImage: `radial-gradient(circle at 100% 0%, ${activeProject.accentColor}40 0%, transparent 70%)`
            }}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono-code text-white/70 tracking-widest uppercase">
                {activeProject.location}
              </span>
              <ExternalLink className="w-4 h-4 text-[#F5A623]" />
            </div>

            <div>
              <div className="text-xl font-editorial text-white font-normal mb-1">
                {activeProject.name}
              </div>
              <div className="text-xs font-mono-code text-[#F5A623] font-medium">
                {activeProject.themeSummary}
              </div>
            </div>

            <div className="text-xs font-mono-code text-white/70 border-t border-white/10 pt-2 truncate">
              {activeProject.features}
            </div>
          </div>

          {/* Card Bottom CTA */}
          <div className="pt-3 flex items-center justify-between text-xs font-mono-code text-[#F5A623] font-semibold">
            <span>Click row to open live deployment</span>
            <span>↗</span>
          </div>
        </div>
      )}
    </section>
  );
}
