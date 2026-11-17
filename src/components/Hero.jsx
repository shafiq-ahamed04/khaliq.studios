import React, { useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const copyRef = useRef(null);
  const metaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(".hero-mask-line", 
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, stagger: 0.12, delay: 0.2 }
      )
      .fromTo(copyRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 },
        "-=0.5"
      )
      .fromTo(".hero-meta-item",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.08 },
        "-=0.4"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      id="hero"
      className="relative min-h-[100svh] w-full bg-[#0D0D1A] text-[#F5F4F0] flex flex-col justify-between overflow-hidden"
    >
      {/* Background Architectural Atmosphere & Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-[#2D3480]/20 blur-[140px]" />
        <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-[#F5A623]/10 blur-[130px]" />
        {/* Subtle grid mesh */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="hero-shade-atelier" />

      {/* Main Content Container (Atelier Editorial Layout) */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-5 sm:px-8 lg:px-12 flex-1 flex flex-col justify-between pt-32 sm:pt-40 pb-10 sm:pb-12">
        
        {/* Top Studio Pill Badge */}
        <div className="mb-8">
          <div className="studio-pill studio-pill-dark">
            <span className="text-[#F5A623]">↗</span>
            <span className="tracking-[0.05em] uppercase font-mono-code text-[11px]">Khaliq Studios · Digital Systems Practice</span>
          </div>
        </div>

        {/* Hero Grid: Title on Left, Copy and Actions on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end my-auto py-6">
          
          {/* Left: Atelier-style Large Typography */}
          <div className="lg:col-span-7" ref={headlineRef}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] font-medium tracking-[-0.045em] leading-[0.94] text-[#F5F4F0]">
              <span className="block overflow-hidden">
                <span className="hero-mask-line block">We design &</span>
              </span>
              <span className="block overflow-hidden">
                <span className="hero-mask-line block text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F5F4F0] to-[#B0B0C4]">
                  build digital
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="hero-mask-line block text-[#F5A623] italic font-serif">
                  systems that move.
                </span>
              </span>
            </h1>
          </div>

          {/* Right: Thoughtful Editorial Copy & Shadcn Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-end" ref={copyRef}>
            <p className="text-base sm:text-lg text-[#C0C0D4] leading-[1.65] tracking-[-0.015em] mb-8 font-normal">
              Khaliq Studios engineers websites, Shopify stores, and business automation workflows that convert visitors into revenue. Based in Tamil Nadu, we work with businesses ready for calm, high-performance digital infrastructure.
            </p>

            {/* Shadcn-Style Editorial Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#work"
                className="btn-shadcn-primary"
              >
                <span>View Selected Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/917845301134?text=Hi%20Khaliq%20Studios,%20I%20would%20like%20to%20discuss%20a%20new%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shadcn-outline"
              >
                <span>Book Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Hero Meta: Atelier 4-Column Architectural Metadata Bar */}
        <div 
          ref={metaRef}
          className="border-t border-white/15 pt-6 mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
        >
          <div className="hero-meta-item">
            <span className="block text-[12px] text-[#8E8EA0] mb-1 font-normal tracking-wide">
              Studio
            </span>
            <span className="text-[14.5px] font-semibold text-[#F5F4F0] tracking-[-0.01em]">
              Khaliq Studios, India
            </span>
          </div>

          <div className="hero-meta-item">
            <span className="block text-[12px] text-[#8E8EA0] mb-1 font-normal tracking-wide">
              Speciality
            </span>
            <span className="text-[14.5px] font-semibold text-[#F5F4F0] tracking-[-0.01em]">
              Websites, Shopify & Automation
            </span>
          </div>

          <div className="hero-meta-item">
            <span className="block text-[12px] text-[#8E8EA0] mb-1 font-normal tracking-wide">
              Stack & Flow
            </span>
            <span className="text-[14.5px] font-semibold text-[#F5F4F0] tracking-[-0.01em]">
              Next.js · Liquid · Make / n8n
            </span>
          </div>

          <div className="hero-meta-item">
            <span className="block text-[12px] text-[#8E8EA0] mb-1 font-normal tracking-wide">
              Rating & Uptime
            </span>
            <span className="text-[14.5px] font-semibold text-[#F5A623] tracking-[-0.01em] flex items-center gap-1.5">
              <span>★ 4.9+</span>
              <span className="text-[#8E8EA0]">·</span>
              <span className="text-emerald-400">99.8% Uptime</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
