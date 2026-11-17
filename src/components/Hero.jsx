import React, { useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import HeroCircuitCanvas from './HeroCircuitCanvas';

export default function Hero() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const buttonsRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(".hero-animate-title", 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.1, delay: 0.1 }
      )
      .fromTo(subtextRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.5"
      )
      .fromTo(buttonsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.4"
      )
      .fromTo(".hero-feature-card",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.08 },
        "-=0.4"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const featureCards = [
    {
      num: "01",
      title: "Custom Websites",
      desc: "Fast, production-grade Next.js & React architectures with sub-second page loads.",
    },
    {
      num: "02",
      title: "Shopify Stores",
      desc: "Conversion-optimized e-commerce funnels with direct WhatsApp ordering.",
    },
    {
      num: "03",
      title: "Business Automation",
      desc: "Make.com & n8n workflows that eliminate manual busywork while you sleep.",
    },
    {
      num: "04",
      title: "Tamil Nadu & India",
      desc: "Direct access to engineering lead with guaranteed 24-hour response SLA.",
    },
  ];

  return (
    <section 
      data-theme="dark"
      ref={heroRef}
      id="hero"
      className="relative min-h-[100svh] w-full bg-[#0D0D1A] text-[#F5F4F0] flex flex-col justify-between overflow-hidden pt-28 sm:pt-36 pb-12 sm:pb-16"
    >
      {/* 1. Kinetic Interactive Particle/Circuit Canvas (Full Background) */}
      <HeroCircuitCanvas />

      {/* Subtle Atmospheric Gradient Bleed */}
      <div className="absolute inset-0 pointer-events-none hero-radial-glow z-0" />

      {/* 2. Main Hero Editorial Content Container (Full Width, Zero Dead Voids) */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-5 sm:px-8 lg:px-12 my-auto flex flex-col items-center text-center py-6 sm:py-10">
        
        {/* Studio Pill */}
        <div className="mb-6 sm:mb-8">
          <div className="studio-pill studio-pill-dark">
            <span className="text-[#F5A623]">↗</span>
            <span className="tracking-[0.08em] uppercase font-mono-code text-[11px] font-semibold">
              KHALIQ STUDIOS · DIGITAL SERVICES AGENCY
            </span>
          </div>
        </div>

        {/* Slogan Headline in Manrope Typography */}
        <div ref={headlineRef} className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-extrabold tracking-[-0.04em] leading-[1.02] text-[#F5F4F0] uppercase">
            <span className="hero-animate-title block">
              Digital Systems For
            </span>
            <span className="hero-animate-title block text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F5F4F0] to-[#B0B0C4]">
              Businesses Ready
            </span>
            <span className="hero-animate-title block text-[#F5A623] italic font-serif">
              To Move.
            </span>
          </h1>
        </div>

        {/* Crisp Subtext */}
        <p 
          ref={subtextRef}
          className="mt-6 sm:mt-8 text-base sm:text-xl md:text-2xl text-[#C0C0D4] max-w-3xl mx-auto leading-relaxed font-normal"
        >
          We build websites, e-commerce stores, and automation workflows that help local businesses operate smarter, convert faster, and scale with confidence.
        </p>

        {/* High-Impact Responsive CTA Buttons: "See Works" & "Contact Us" */}
        <div 
          ref={buttonsRef}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#work"
            className="btn-shadcn-primary w-full sm:w-auto !py-4 !px-8 text-sm font-bold rounded-xl flex items-center justify-center gap-2"
          >
            <span>See Works</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="https://wa.me/917845301134?text=Hi%20Khaliq%20Studios,%20I%20would%20like%20to%20discuss%20a%20new%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shadcn-outline w-full sm:w-auto !py-4 !px-8 text-sm font-bold rounded-xl border-white/20 text-white hover:bg-white hover:text-[#0D0D1A] flex items-center justify-center gap-2"
          >
            <span>Contact Us</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* 3. Horizontal Studio Foundation Cards (Fulfills the big space with substance) */}
      <div 
        ref={cardsRef}
        className="relative z-10 max-w-7xl w-full mx-auto px-5 sm:px-8 lg:px-12 mt-6 sm:mt-10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {featureCards.map((card) => (
            <div 
              key={card.num}
              className="hero-feature-card p-5 sm:p-6 rounded-2xl bg-[#121226]/80 border border-white/10 hover:border-[#F5A623]/40 transition-colors backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                <span className="font-mono-code text-[11px] text-[#F5A623] font-bold block mb-2">
                  {card.num} // PILLAR
                </span>
                <h3 className="text-base sm:text-lg font-semibold text-[#F5F4F0] mb-1.5 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A0A0B0] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
