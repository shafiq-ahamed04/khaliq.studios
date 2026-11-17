import React, { useState, useEffect } from 'react';
import CircuitHouseLogo from './CircuitHouseLogo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [theme, setTheme] = useState('dark'); // 'dark' | 'light'
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section theme detector: detects which section is currently beneath the header (y = 65px)
      const sections = document.querySelectorAll('section[data-theme], footer[data-theme]');
      let detectedTheme = 'dark';

      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 75 && rect.bottom >= 75) {
          const t = sec.getAttribute('data-theme');
          if (t) detectedTheme = t;
        }
      });

      setTheme(detectedTheme);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Contact', href: '#contact' },
  ];

  const isLight = theme === 'light';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isLight
          ? isScrolled 
            ? 'bg-[#F6F4EE]/90 backdrop-blur-md py-3.5 border-b border-[#1B1B1B]/10 shadow-sm' 
            : 'bg-transparent py-5 sm:py-6'
          : isScrolled 
            ? 'bg-[#0D0D1A]/90 backdrop-blur-md py-3.5 border-b border-white/10 shadow-lg' 
            : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo - automatically morphs color theme */}
        <CircuitHouseLogo theme={isLight ? 'light' : 'dark'} size="md" />

        {/* Desktop Nav Links with Atelier Hairline Underline */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`nav-link text-[13.5px] font-medium tracking-[-0.01em] transition-colors py-1 ${
                isLight 
                  ? 'text-[#4A4A5E] hover:text-[#1B1B1B]' 
                  : 'text-[#C0C0D0] hover:text-[#FFFFFF]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action: Shadcn-style Button dynamically themed */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="https://wa.me/917845301134?text=Hi%20Khaliq%20Studios,%20I%20would%20like%20to%20discuss%20a%20new%20project."
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-shadcn-outline !py-2.5 !px-5 text-xs font-semibold rounded-xl transition-all duration-300 ${
              isLight
                ? 'border-[#1B1B1B]/30 text-[#1B1B1B] hover:bg-[#1B1B1B] hover:text-[#F6F4EE] hover:border-[#1B1B1B]'
                : 'border-white/20 text-[#F5F4F0] hover:bg-white hover:text-[#0D0D1A] hover:border-white'
            }`}
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg border transition-colors ${
            isLight
              ? 'text-[#1B1B1B] border-black/15 hover:bg-black/5'
              : 'text-[#F5F4F0] border-white/10 hover:bg-white/5'
          }`}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Atelier Fine Header Rule */}
      <div 
        className={`w-full h-[1px] mt-3 sm:mt-4 transition-colors duration-300 ${
          isLight ? 'bg-black/10' : 'bg-white/10'
        }`} 
      />

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden fixed inset-x-0 top-[100%] border-b px-6 py-8 flex flex-col gap-6 shadow-2xl transition-colors ${
          isLight ? 'bg-[#F6F4EE] border-[#1B1B1B]/20 text-[#1B1B1B]' : 'bg-[#0D0D1A] border-[#2D3480] text-[#F5F4F0]'
        }`}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-medium hover:text-[#F5A623] transition-colors border-b border-black/10 dark:border-white/10 pb-3"
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
              className={`btn-shadcn-outline w-full text-center py-3.5 rounded-xl text-xs uppercase tracking-wider ${
                isLight ? 'border-black/20 text-[#1B1B1B]' : 'border-white/30 text-white'
              }`}
            >
              Instagram @khaliq.studios
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
