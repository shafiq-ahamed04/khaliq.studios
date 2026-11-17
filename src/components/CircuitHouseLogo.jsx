import React from 'react';

export function CircuitHouseIcon({ size = 34, className = "" }) {
  return (
    <div 
      className={`relative inline-flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105 ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <img 
        src="/logo-emblem.png" 
        alt="Khaliq Studios Emblem" 
        className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(245,166,35,0.25)]"
        loading="eager"
      />
    </div>
  );
}

export default function CircuitHouseLogo({ theme = "dark", className = "", size = "md", showSubtitle = true }) {
  const isLight = theme === "light";

  const iconSizes = {
    sm: 28,
    md: 36,
    lg: 48,
  };

  const currentSize = iconSizes[size] || 36;

  return (
    <a 
      href="#" 
      className={`group inline-flex items-center gap-3 transition-opacity duration-200 hover:opacity-95 ${className}`}
      aria-label="Khaliq Studios Home"
    >
      {/* Official Emblem */}
      <CircuitHouseIcon size={currentSize} />

      {/* Official Brand Typography */}
      <div className="flex flex-col">
        <span className={`font-sans font-extrabold tracking-[0.16em] uppercase text-base sm:text-lg leading-none transition-colors duration-300 ${
          isLight ? 'text-[#0D0D1A]' : 'text-[#F5F4F0]'
        }`}>
          KHALIQ <span className="text-[#F5A623]">STUDIOS</span>
        </span>
        {showSubtitle && (
          <span className={`text-[10px] sm:text-[11px] tracking-[0.28em] uppercase font-mono-code mt-1 font-semibold transition-colors duration-300 ${
            isLight ? 'text-[#2D3480]' : 'text-[#B0B0C4]'
          }`}>
            DIGITAL SYSTEMS
          </span>
        )}
      </div>
    </a>
  );
}
