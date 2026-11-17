import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import SelectedWork from './components/SelectedWork';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  useEffect(() => {
    // Initialize Lenis smooth scroll
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
      {/* Subtle Analog Film Grain */}
      <div className="film-grain" />

      {/* Cinematic Studio Shutter Preloader with Real Logo */}
      <Preloader onComplete={() => setPreloaderDone(true)} />

      {/* Luxury Navigation Header */}
      <Navbar />

      {/* Main Agency Sections */}
      <main className="relative z-10 flex flex-col">
        {/* 1. HERO (Dark #0D0D1A) */}
        <Hero />

        {/* 2. SERVICES (Off-White #F5F4F0) */}
        <Services />

        {/* 3. SELECTED WORK (Near-Black #0D0D1A) */}
        <SelectedWork />

        {/* 4. PHILOSOPHY / WHY KHALIQ STUDIOS (Off-White #F5F4F0) */}
        <Philosophy />

        {/* 5. CONTACT (Near-Black #0D0D1A) */}
        <Contact />
      </main>

      {/* 6. FOOTER (Minimal Dark) */}
      <Footer />
    </div>
  );
}
