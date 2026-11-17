import React, { useState, useEffect } from 'react';
import CircuitHouseLogo from './CircuitHouseLogo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
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
          ? 'bg-[#0D0D1A]/90 backdrop-blur-md py-3.5 shadow-lg' 
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <CircuitHouseLogo theme="dark" size="md" />

        {/* Desktop Nav Links with Atelier Hairline Underline Animation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link text-[13.5px] font-medium tracking-[-0.01em] text-[#C0C0D0] hover:text-[#FFFFFF] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action: Shadcn-style Editorial Button */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="https://wa.me/917845301134?text=Hi%20Khaliq%20Studios,%20I%20would%20like%20to%20discuss%20a%20new%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shadcn-outline !py-2.5 !px-5 text-xs font-semibold rounded-xl border-white/20 hover:border-white"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#F5F4F0] hover:text-[#F5A623] rounded-lg border border-white/10"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Atelier Fine Header Rule */}
      <div className="w-full h-[1px] bg-white/10 mt-3 sm:mt-4" />

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[100%] bg-[#0D0D1A] border-b border-[#2D3480] px-6 py-8 flex flex-col gap-6 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-medium text-[#F5F4F0] hover:text-[#F5A623] transition-colors border-b border-white/10 pb-3"
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
              className="btn-shadcn-primary w-full text-center py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider"
            >
              WhatsApp Us (+91 78453 01134)
            </a>
            <a
              href="https://instagram.com/khaliq.studios"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-shadcn-outline w-full text-center py-3.5 rounded-xl text-xs uppercase tracking-wider"
            >
              Instagram @khaliq.studios
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
