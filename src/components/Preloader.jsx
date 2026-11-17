import React, { useEffect, useState } from 'react';

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [isFinishing, setIsFinishing] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Precise numeric counter easing from 0 to 100
    const duration = 1350; // ms
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Quartic ease out
      const ease = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(ease * 100);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(100);
        setTimeout(() => {
          setIsFinishing(true);
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 700);
        }, 160);
      }
    };

    const animFrame = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animFrame);
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col justify-between p-6 sm:p-12 lg:p-14 bg-[#0D0D1A] text-[#F5F4F0] pointer-events-auto transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isFinishing ? '-translate-y-full opacity-95' : 'translate-y-0 opacity-100'
      }`}
      style={{ willChange: 'transform, opacity' }}
    >
      {/* Top Bar info */}
      <div className="flex items-center justify-between border-b border-[#2D3480]/40 pb-4">
        <div className="flex items-center gap-3">
          <img 
            src="/logo-emblem.png" 
            alt="Khaliq Studios Emblem" 
            className="w-6 h-6 object-contain"
          />
          <span className="font-mono-code text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#A0A0B0]">
            KHALIQ STUDIOS · OFFICIAL
          </span>
        </div>
        <div className="font-mono-code text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#F5A623]">
          SYSTEM INIT // 2026
        </div>
      </div>

      {/* Centerpiece: Official Logo with Animated Ambient Glow */}
      <div className="my-auto flex flex-col items-center justify-center text-center px-4">
        <div className="relative mb-6 sm:mb-8 group">
          {/* Subtle amber backlight */}
          <div className="absolute inset-0 bg-[#F5A623]/20 blur-2xl transform scale-125 rounded-full pointer-events-none" />
          
          {/* Logo Frame */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 border border-[#2D3480] bg-[#121226]/80 flex items-center justify-center p-4 overflow-hidden">
            <img 
              src="/logo-emblem.png" 
              alt="Khaliq Studios Logo" 
              className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(245,166,35,0.35)]"
            />
            {/* Ambient loading scanline */}
            <div 
              className="absolute bottom-0 left-0 right-0 bg-[#F5A623]/25 transition-all duration-100"
              style={{ height: `${count}%` }}
            />
          </div>

          {/* Micro status pin */}
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#F5A623]" />
        </div>

        {/* Wordmark */}
        <h2 className="font-sans font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-[0.18em] uppercase text-[#F5F4F0] mb-2">
          KHALIQ <span className="text-[#F5A623]">STUDIOS</span>
        </h2>

        <p className="font-editorial italic text-base sm:text-xl text-[#A0A0B0] max-w-lg mb-2">
          “Digital systems for businesses ready to move.”
        </p>

        <p className="font-mono-code text-[10px] sm:text-xs text-[#2D3480] uppercase tracking-[0.25em]">
          TAMIL NADU · INDIA
        </p>

        {/* Large Counter */}
        <div className="mt-6 sm:mt-8 flex items-baseline gap-1">
          <span className="font-editorial text-5xl sm:text-7xl font-bold text-[#F5F4F0] tabular-nums tracking-tighter">
            {count < 10 ? `0${count}` : count}
          </span>
          <span className="text-[#F5A623] font-mono-code text-lg sm:text-xl font-bold">
            %
          </span>
        </div>
      </div>

      {/* Bottom status bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-[#2D3480]/40 gap-3">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[10px] sm:text-xs font-mono-code text-[#A0A0B0]">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-[#F5A623]"></span>
            <span>CUSTOM WEBSITES</span>
          </span>
          <span className="hidden sm:inline text-[#2D3480]">/</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-[#2D3480]"></span>
            <span>SHOPIFY STORES</span>
          </span>
          <span className="hidden sm:inline text-[#2D3480]">/</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-[#F5A623]"></span>
            <span>AUTOMATION</span>
          </span>
        </div>

        <button 
          onClick={() => {
            setIsFinishing(true);
            setTimeout(() => {
              setIsDone(true);
              if (onComplete) onComplete();
            }, 400);
          }}
          className="text-[10px] font-mono-code tracking-[0.2em] uppercase text-[#A0A0B0] hover:text-[#F5A623] transition-colors self-end sm:self-auto cursor-pointer py-1"
        >
          [ SKIP INTRO ]
        </button>
      </div>
    </div>
  );
}
