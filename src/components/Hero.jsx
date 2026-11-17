import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, ExternalLink, Play, Pause, Activity, Cpu } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const ruleRef = useRef(null);
  const bodyRef = useRef(null);
  const ctaRef = useRef(null);
  const telemetryRef = useRef(null);
  const deckRef = useRef(null);

  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const projects = [
    {
      id: "01",
      name: "Aarvana Verde",
      category: "Real Estate",
      location: "Chennai, India",
      tagline: "Architectural Floor Plan Explorer & Luxury Residential Showcase",
      url: "https://aarvana-verde-real-estates.vercel.app/",
      accent: "#1e3a2b",
      tech: "Next.js · Tailwind · 3D Floorplans",
      metric: "99% Performance Score",
      summary: "Scroll-driven storytelling for Chennai luxury residential property."
    },
    {
      id: "02",
      name: "Sultaan's Kitchen",
      category: "Restaurant",
      location: "Trichy, India",
      tagline: "Interactive Biryani Gastronomy with WhatsApp Direct Ordering",
      url: "https://sultaans-kitchen.vercel.app/",
      accent: "#4a1212",
      tech: "React · WhatsApp API · SEO Ops",
      metric: "Instant Menu Sync",
      summary: "High-conversion restaurant landing page with zero-friction WhatsApp order flow."
    },
    {
      id: "03",
      name: "Ashick Weds Rukshana",
      category: "Event",
      location: "Tamil Nadu, India",
      tagline: "Cinematic Royal Wedding Invitation with Mobile-First Narrative",
      url: "https://ashick-weds-rukshana.vercel.app/",
      accent: "#321d4d",
      tech: "Motion Web · Gold Typography · Audio",
      metric: "Mobile-First UX",
      summary: "Arched Islamic architectural aesthetics and scroll-driven royal storytelling."
    },
    {
      id: "04",
      name: "Atelier Interior Studio",
      category: "Interior Design",
      location: "India",
      tagline: "Editorial Spatial Portfolio & High-Conversion Client Inbound",
      url: "https://atelierinteriorstudio.pages.dev/",
      accent: "#20222e",
      tech: "Vite · Editorial Grid · Lead Funnel",
      metric: "Sub-second Page Load",
      summary: "Minimalist spatial showcase designed for high-ticket commercial interior clients."
    },
  ];

  // Auto-advance timer (4.2 seconds per project)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % projects.length);
    }, 4200);

    return () => clearInterval(timer);
  }, [isPaused, projects.length]);

  // Entrance animations with GSAP
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(".hero-line", 
        { y: 65, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0, stagger: 0.12, delay: 0.15 }
      )
      .fromTo(ruleRef.current,
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 0.6 },
        "-=0.4"
      )
      .fromTo([bodyRef.current, ctaRef.current],
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
        "-=0.3"
      )
      .fromTo(telemetryRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.2"
      )
      .fromTo(deckRef.current,
        { opacity: 0, x: 40, rotateY: 10 },
        { opacity: 1, x: 0, rotateY: 0, duration: 1.1 },
        "-=0.7"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Subtle interactive perspective tracking for desktop
  const handleMouseMove = (e) => {
    if (!deckRef.current) return;
    const rect = deckRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
    setIsPaused(false);
  };

  const activeProject = projects[activeTab];

  return (
    <section 
      ref={heroRef}
      id="hero"
      className="relative min-h-[95vh] w-full bg-[#0D0D1A] text-[#F5F4F0] flex flex-col justify-between pt-24 pb-8 sm:pt-32 sm:pb-12 overflow-hidden hero-gradient-bleed"
    >
      {/* Background architectural grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[linear-gradient(to_right,#F5F4F0_1px,transparent_1px),linear-gradient(to_bottom,#F5F4F0_1px,transparent_1px)] bg-[size:5rem_5rem]" />

      {/* Main Grid: Left Column Headline & CTAs, Right Column 3D Perspective Deck */}
      <div className="max-w-7xl w-full mx-auto px-5 sm:px-8 lg:px-12 my-auto py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Authority Headline, Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Top metadata badge */}
            <div className="mb-4">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#121226] border border-[#2D3480]/60 text-xs sm:text-sm font-mono-code text-[#A0A0B0] tracking-[0.2em] uppercase">
                <span className="w-2 h-2 bg-[#F5A623]"></span>
                <span>KHALIQ STUDIOS</span>
                <span className="text-[#2D3480]">/</span>
                <span>TAMIL NADU, INDIA</span>
              </div>
            </div>

            {/* Headline across 3 lines with responsive typography */}
            <div ref={headlineRef}>
              <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.4rem] font-normal leading-[0.98] sm:leading-[0.93] tracking-[-0.03em] text-[#F5F4F0] uppercase">
                <div className="overflow-hidden">
                  <span className="hero-line block">We Build</span>
                </div>
                <div className="overflow-hidden">
                  <span className="hero-line block text-transparent bg-clip-text bg-gradient-to-r from-[#F5F4F0] via-[#F5F4F0] to-[#A0A0B0]">
                    Digital Systems
                  </span>
                </div>
                <div className="overflow-hidden">
                  <span className="hero-line block text-[#F5A623] italic font-serif">
                    That Move.
                  </span>
                </div>
              </h1>
            </div>

            {/* Thin amber horizontal rule (60px wide) */}
            <div 
              ref={ruleRef}
              className="w-[60px] h-[2.5px] bg-[#F5A623] mt-6 sm:mt-7 mb-4 sm:mb-5" 
            />

            {/* Subheading: Confident, Larger Editorial Font */}
            <p 
              ref={bodyRef}
              className="text-base sm:text-xl md:text-2xl font-light text-[#D2D2E0] max-w-2xl leading-relaxed tracking-normal font-sans"
            >
              Custom websites. Shopify stores. Automation workflows. For businesses ready to grow.
            </p>

            {/* Two CTA buttons: Sharp corners, larger typography, professional tactile states */}
            <div 
              ref={ctaRef}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4"
            >
              {/* Button 1: See Our Work */}
              <a
                href="#work"
                className="px-8 sm:px-9 py-4 sm:py-4.5 bg-[#F5A623] text-[#0D0D1A] font-bold text-xs sm:text-sm uppercase tracking-[0.2em] font-mono-code transition-all duration-200 hover:bg-[#ffb947] hover:shadow-[0_4px_22px_rgba(245,166,35,0.35)] active:translate-y-0.5 flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <span>See Our Work</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              </a>

              {/* Button 2: Start a Project */}
              <a
                href="https://wa.me/917845301134?text=Hi%20Khaliq%20Studios,%20I%20would%20like%20to%20start%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 sm:px-9 py-4 sm:py-4.5 bg-transparent border border-[#F5F4F0] text-[#F5F4F0] font-bold text-xs sm:text-sm uppercase tracking-[0.2em] font-mono-code transition-all duration-200 hover:bg-[#F5F4F0] hover:text-[#0D0D1A] active:translate-y-0.5 flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Live Studio Telemetry Chips (Clear, larger font) */}
            <div 
              ref={telemetryRef}
              className="mt-9 pt-6 border-t border-[#2D3480]/40 flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm font-mono-code text-[#A0A0B0]"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#121226] border border-[#2D3480]/60">
                <span className="w-2 h-2 bg-emerald-400"></span>
                <span className="text-[#E0E0EC]">4 ACTIVE SYSTEMS</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#121226] border border-[#2D3480]/60">
                <Activity className="w-3.5 h-3.5 text-[#F5A623]" />
                <span className="text-[#E0E0EC]">0.8s AVG LOAD</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#121226] border border-[#2D3480]/60">
                <Cpu className="w-3.5 h-3.5 text-[#2D3480]" />
                <span className="text-[#E0E0EC]">MAKE & N8N SYNCED</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive 3D Perspective Project Deck */}
          <div 
            ref={deckRef}
            className="lg:col-span-5 flex flex-col"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={handleMouseLeave}
            style={{
              perspective: '1200px',
            }}
          >
            {/* Project Tabs Header */}
            <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#2D3480]/60">
              <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
                {projects.map((proj, idx) => (
                  <button
                    key={proj.id}
                    onClick={() => setActiveTab(idx)}
                    className={`px-3 py-1.5 text-xs sm:text-sm font-mono-code uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      activeTab === idx
                        ? 'bg-[#2D3480] text-[#F5A623] border border-[#F5A623] font-bold'
                        : 'bg-[#121226] text-[#A0A0B0] hover:text-[#F5F4F0] border border-[#2D3480]/40'
                    }`}
                  >
                    {proj.id}
                  </button>
                ))}
              </div>

              {/* Status indicator / pause notice */}
              <div className="flex items-center gap-2 text-xs font-mono-code text-[#A0A0B0]">
                {isPaused ? (
                  <span className="flex items-center gap-1.5 text-[#F5A623] font-semibold">
                    <Pause className="w-3 h-3" /> PAUSED
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <span className="w-2 h-2 bg-emerald-400"></span> AUTO-REEL
                  </span>
                )}
              </div>
            </div>

            {/* The 3D Floating Project Card Container */}
            <div 
              className="relative w-full bg-[#121226] border-2 border-[#2D3480] hover:border-[#F5A623] transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.6)] overflow-hidden"
              style={{
                transform: `rotateY(${mouseOffset.x}deg) rotateX(${mouseOffset.y}deg)`,
                transformStyle: 'preserve-3d',
                transition: isPaused ? 'transform 0.1s ease-out' : 'all 0.5s ease-out',
              }}
            >
              {/* Card Browser Top Chrome */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#0D0D1A] border-b border-[#2D3480]/60">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 bg-amber-500/80"></span>
                  <span className="w-2.5 h-2.5 bg-emerald-500/80"></span>
                </div>
                <div className="text-xs font-mono-code text-[#C0C0D0] truncate max-w-[210px] px-2.5 py-0.5 bg-[#121226] border border-white/5">
                  {activeProject.url.replace('https://', '')}
                </div>
                <span className="text-xs font-mono-code text-[#F5A623] font-bold uppercase">
                  LIVE
                </span>
              </div>

              {/* Visual Showcase Render with Project Identity */}
              <div 
                className="relative p-6 sm:p-7 min-h-[230px] sm:min-h-[260px] flex flex-col justify-between overflow-hidden"
                style={{
                  backgroundColor: '#0E1020',
                  backgroundImage: `radial-gradient(circle at 100% 0%, ${activeProject.accent} 0%, rgba(13,13,26,0.95) 75%)`
                }}
              >
                {/* Background architectural coordinate line */}
                <div className="absolute right-3 top-3 text-[56px] font-editorial text-white/5 font-bold select-none pointer-events-none">
                  {activeProject.id}
                </div>

                {/* Top Category and Location */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-[#F5A623] text-[#0D0D1A] text-xs font-mono-code font-bold uppercase tracking-wider">
                    {activeProject.category}
                  </span>
                  <span className="text-xs sm:text-sm font-mono-code text-[#C0C0D0]">
                    {activeProject.location}
                  </span>
                </div>

                {/* Project Title and Tagline */}
                <div className="my-4">
                  <h3 className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#F5F4F0] font-normal leading-tight mb-2">
                    {activeProject.name}
                  </h3>
                  <p className="text-sm sm:text-base font-sans text-[#C0C0D0] leading-relaxed">
                    {activeProject.tagline}
                  </p>
                </div>

                {/* Metrics / Tech Stack */}
                <div className="pt-3.5 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm font-mono-code text-[#A0A0B0]">
                  <span className="text-emerald-400 font-semibold">
                    ✓ {activeProject.metric}
                  </span>
                  <span className="text-[#C0C0D0] truncate max-w-[190px]">
                    {activeProject.tech}
                  </span>
                </div>
              </div>

              {/* Bottom Direct Launch Bar */}
              <a
                href={activeProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between px-5 py-3.5 bg-[#2D3480] hover:bg-[#F5A623] text-[#F5F4F0] hover:text-[#0D0D1A] font-mono-code text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-200 group"
              >
                <span>Launch {activeProject.name}</span>
                <span className="flex items-center gap-1.5">
                  <span>Visit Production</span>
                  <ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>

              {/* Progress timer bar for the active project */}
              <div className="w-full h-[2.5px] bg-[#0D0D1A]">
                <div 
                  key={activeTab}
                  className="h-full bg-[#F5A623] transition-all duration-100 ease-linear"
                  style={{
                    animation: isPaused ? 'none' : 'progress 4.2s linear infinite'
                  }}
                />
              </div>
            </div>

            {/* Micro Caption */}
            <div className="mt-2.5 text-right">
              <span className="text-[11px] sm:text-xs font-mono-code text-[#A0A0B0] uppercase tracking-wider">
                HOVER TO PAUSE & INSPECT · CLICK TO LAUNCH LIVE
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Clean, elegant bottom scroll indicator */}
      <div className="max-w-7xl w-full mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between pt-2">
        <a 
          href="#services"
          className="group inline-flex items-center gap-2.5 text-xs sm:text-sm font-mono-code tracking-[0.2em] uppercase text-[#C0C0D0] hover:text-[#F5A623] transition-colors"
        >
          <span className="w-2 h-2 bg-[#F5A623]"></span>
          <span>EXPLORE WHAT WE BUILD</span>
          <span className="inline-block transition-transform duration-300 group-hover:translate-y-1">↓</span>
        </a>

        <div className="hidden sm:flex items-center gap-4 text-xs font-mono-code tracking-[0.2em] text-[#A0A0B0] uppercase">
          <span>HIGH-PERFORMANCE ARCHITECTURE</span>
          <span>·</span>
          <span>EST. 2026</span>
        </div>
      </div>
    </section>
  );
}
