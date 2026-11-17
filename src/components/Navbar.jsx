import React, { useState, useEffect, useRef } from 'react';
import CircuitHouseLogo from './CircuitHouseLogo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [theme, setTheme] = useState('dark'); // 'dark' | 'light'
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Detect scroll direction: Hide when scrolling down, show when scrolling up
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY.current + 6) {
          // Scrolling down -> hide navbar
          setIsVisible(false);
          setMobileMenuOpen(false);
        } else if (currentScrollY < lastScrollY.current - 6) {
          // Scrolling up -> reveal navbar
          setIsVisible(true);
        }
      } else {
        // Near top of page -> always show
        setIsVisible(true);
      }

      setIsScrolled(currentScrollY > 20);
      lastScrollY.current = currentScrollY;

      // 2. Section theme detector: detects whether section at y=75px is light or dark
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
    <div 
      className={`fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-4 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0 pointer-events-none'
      }`}
    >
      {/* Floating Island Pill - Line Free & Section Adaptive */}
      <nav 
        className={`w-full max-w-5xl rounded-full px-5 sm:px-7 py-3 flex items-center justify-between transition-colors duration-300 shadow-xl backdrop-blur-md ${
          isLight
            ? 'bg-[#F6F4EE]/90 border border-black/10 text-[#1B1B1B]'
            : 'bg-[#121226]/85 border border-white/10 text-[#F5F4F0]'
        }`}
      >
        {/* Brand Logo - Automatic color adaptation */}
        <CircuitHouseLogo theme={isLight ? 'light' : 'dark'} size="sm" showSubtitle={false} />

        {/* Center Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7 lg:gap-9">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-[13.5px] font-medium tracking-tight transition-colors py-1 hover:text-[#F5A623] ${
                isLight ? 'text-[#4A4A5E]' : 'text-[#C0C0D4]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right CTA Button (Pill shape) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://wa.me/917845301134?text=Hi%20Khaliq%20Studios,%20I%20would%20like%20to%20discuss%20a%20new%20project."
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
              isLight
                ? 'bg-[#1B1B1B] text-[#F6F4EE] hover:bg-[#2D3480]'
                : 'bg-[#F5A623] text-[#0D0D1A] hover:bg-[#FFB947] font-bold'
            }`}
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-1.5 rounded-full transition-colors ${
            isLight ? 'text-[#1B1B1B] hover:bg-black/5' : 'text-[#F5F4F0] hover:bg-white/10'
          }`}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer Menu (Pill styled) */}
      {mobileMenuOpen && (
        <div 
          className={`md:hidden absolute top-16 inset-x-4 rounded-3xl p-6 shadow-2xl border transition-colors ${
            isLight 
              ? 'bg-[#F6F4EE] border-black/15 text-[#1B1B1B]' 
              : 'bg-[#121226] border-white/15 text-[#F5F4F0]'
          }`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium py-1.5 border-b border-black/10 dark:border-white/10"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href="https://wa.me/917845301134?text=Hi%20Khaliq%20Studios,%20I%20would%20like%20to%20start%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-[#F5A623] text-[#0D0D1A] font-bold text-xs uppercase tracking-wider rounded-full"
              >
                WhatsApp Us (+91 78453 01134)
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
