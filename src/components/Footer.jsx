import React from 'react';
import CircuitHouseLogo from './CircuitHouseLogo';

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0D0D1A] text-[#F5F4F0] overflow-hidden">
      {/* Center: thin amber line separator above footer only */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="w-full h-[1.5px] bg-[#F5A623]/80" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: "© 2026 Khaliq Studios. Built with purpose." with Official Emblem */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 text-center sm:text-left">
            <CircuitHouseLogo theme="dark" size="sm" showSubtitle={false} />
            <span className="text-xs sm:text-sm font-mono-code text-[#B0B0C4] tracking-wider">
              © 2026 Khaliq Studios. Built with purpose.
            </span>
          </div>

          {/* Right: Three links — Work · Services · Contact */}
          <div className="flex items-center gap-6 sm:gap-8 text-xs sm:text-sm font-mono-code uppercase tracking-[0.2em] font-semibold text-[#B0B0C4]">
            <a 
              href="#work" 
              className="hover:text-[#F5A623] transition-colors"
            >
              Work
            </a>
            <span className="text-[#2D3480]">·</span>
            <a 
              href="#services" 
              className="hover:text-[#F5A623] transition-colors"
            >
              Services
            </a>
            <span className="text-[#2D3480]">·</span>
            <a 
              href="#contact" 
              className="hover:text-[#F5A623] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Micro subtext */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono-code text-[#8A8A9E] gap-2">
          <span>HIGH-CONVERSION DIGITAL SYSTEMS & AUTOMATION</span>
          <span>TAMIL NADU · INDIA</span>
        </div>
      </div>
    </footer>
  );
}
