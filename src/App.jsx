import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroImpact from './components/IntroImpact';
import Services from './components/Services';
import SelectedWork from './components/SelectedWork';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  useEffect(() => {
    // Ultra-optimized, zero-lag 60/120fps inertia scrolling with Lenis
    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0D0D1A] text-[#F5F4F0] selection:bg-[#F5A623] selection:text-[#0D0D1A]">
      {/* Studio Preloader */}
      <Preloader onComplete={() => setPreloaderDone(true)} />

      {/* Dynamic Section-Aware Navbar */}
      <Navbar />

      {/* Main Studio Narrative */}
      <main className="relative z-10 flex flex-col">
        {/* 1. HERO (Dark #0D0D1A) */}
        <Hero />

        {/* 2. WHO WE ARE & OUR IMPACT (Light #F6F4EE) */}
        <IntroImpact />

        {/* 3. WHAT WE DO BEST / SERVICES (Light #EEEAE1) */}
        <Services />

        {/* 4. SELECTED WORK (Dark #0D0D1A) */}
        <SelectedWork />

        {/* 5. PHILOSOPHY (Light #F6F4EE) */}
        <Philosophy />

        {/* 6. CONTACT (Dark #0D0D1A) */}
        <Contact />
      </main>

      {/* 7. FOOTER (Dark #0D0D1A) */}
      <Footer />
    </div>
  );
}
