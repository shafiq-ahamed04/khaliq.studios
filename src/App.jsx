import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroImpact from './components/IntroImpact';
import Services from './components/Services';
import SelectedWork from './components/SelectedWork';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  useEffect(() => {
    // Lenis smooth inertia scrolling
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0D0D1A] text-[#F5F4F0] selection:bg-[#F5A623] selection:text-[#0D0D1A]">
      {/* Subtle Analog Texture */}
      <div className="film-grain" />

      {/* Studio Shutter Preloader */}
      <Preloader onComplete={() => setPreloaderDone(true)} />

      {/* Atelier-Style Header */}
      <Navbar />

      {/* Main Studio Narrative */}
      <main className="relative z-10 flex flex-col">
        {/* 1. HERO (Full Bleed Editorial Layout with 4-Column Studio Metadata) */}
        <Hero />

        {/* 2. WHO WE ARE & OUR IMPACT (Atelier Statement & Impact Grid) */}
        <IntroImpact />

        {/* 3. WHAT WE DO BEST / SERVICES (Interactive Capability Deck) */}
        <Services />

        {/* 4. SELECTED WORK (Editorial Project Rows with Live Deployments) */}
        <SelectedWork />

        {/* 5. PHILOSOPHY (We Don't Build Pages, We Build Systems) */}
        <Philosophy />

        {/* 6. CONTACT (Editorial Large CTA Card) */}
        <Contact />
      </main>

      {/* 7. FOOTER */}
      <Footer />
    </div>
  );
}
