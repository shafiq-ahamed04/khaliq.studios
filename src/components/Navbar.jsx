import React, { useState, useEffect } from 'react';
import CircuitHouseLogo from './CircuitHouseLogo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0D0D1A]/95 backdrop-blur-md border-b border-[#2D3480]/50 py-3.5 sm:py-4 shadow-xl' 
          : 'bg-transparent py-4 sm:py-6 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo with Official Uploaded Emblem */}
        <CircuitHouseLogo theme="dark" size="md" />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs sm:text-sm uppercase tracking-[0.2em] font-mono-code font-semibold text-[#B0B0C4] hover:text-[#F5A623] transition-colors relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#F5A623] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Action: Professional High-Conversion Contact CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="https://wa.me/917845301134?text=Hi%20Khaliq%20Studios,%20I%20would%20like%20to%20start%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-transparent border border-[#F5A623] text-[#F5A623] hover:bg-[#F5A623] hover:text-[#0D0D1A] transition-all duration-200 text-xs sm:text-sm font-mono-code uppercase tracking-[0.2em] font-bold"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#F5F4F0] hover:text-[#F5A623] border border-[#2D3480]/60 active:bg-[#2D3480]/20"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[100%] bg-[#0D0D1A] border-b border-[#2D3480] px-6 py-8 flex flex-col gap-6 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-editorial text-2xl text-[#F5F4F0] hover:text-[#F5A623] transition-colors border-b border-[#2D3480]/30 pb-3"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-3">
            <a
              href="https://wa.me/917845301134?text=Hi%20Khaliq%20Studios,%20I%20would%20like%20to%20start%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3.5 bg-[#F5A623] text-[#0D0D1A] font-bold text-xs sm:text-sm uppercase tracking-[0.2em] font-mono-code active:bg-[#ffb947]"
            >
              WhatsApp Us (+91 78453 01134)
            </a>
            <a
              href="https://instagram.com/khaliq.studios"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3.5 border border-white/30 text-white font-bold text-xs sm:text-sm uppercase tracking-[0.2em] font-mono-code hover:bg-white/10"
            >
              Instagram @khaliq.studios
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
