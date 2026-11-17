import React, { useState } from 'react';
import { ArrowUpRight, MessageCircle, Phone, Copy, Check } from 'lucide-react';

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
      <rect x="2" y="2" width="20" height="20" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [selectedService, setSelectedService] = useState('Website');

  const copyPhone = () => {
    navigator.clipboard.writeText('+917845301134');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getWhatsAppUrl = () => {
    const text = `Hi Khaliq Studios! I would like to build a ${selectedService} for my business. Let's discuss requirements and timeline.`;
    return `https://wa.me/917845301134?text=${encodeURIComponent(text)}`;
  };

  return (
    <section 
      id="contact"
      className="relative w-full bg-[#0D0D1A] text-[#F5F4F0] py-24 sm:py-36 lg:py-44 overflow-hidden"
    >
      {/* Background subtle diagonal amber gradient bleed */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#F5A623]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Metadata */}
        <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono-code text-[#A0A0B0] uppercase tracking-[0.25em] mb-10 sm:mb-14 font-bold">
          <span className="w-2.5 h-[2.5px] bg-[#F5A623]"></span>
          <span>GET IN TOUCH</span>
          <span className="text-[#2D3480]">/</span>
          <span>05 / 05 DIRECT LINE</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-8">
            {/* Large serif headline across two lines */}
            <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.8rem] font-normal tracking-[-0.03em] text-[#F5F4F0] leading-[0.98] sm:leading-[0.95]">
              Ready to<br />
              <span className="text-[#F5A623] italic font-serif">build?</span>
            </h2>

            {/* Subheading in confident larger font */}
            <p className="mt-8 text-base sm:text-xl md:text-2xl font-light text-[#D2D2E0] max-w-xl leading-relaxed">
              Tell us about your project. We respond within 24 hours with architectural scope and clear timelines.
            </p>

            {/* High-conversion Quick Service Selector */}
            <div className="mt-10 pt-7 border-t border-[#2D3480]/40">
              <span className="text-xs sm:text-sm font-mono-code text-[#C0C0D0] uppercase tracking-[0.2em] block mb-3.5 font-bold">
                SELECT PROJECT DISCIPLINE:
              </span>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {[
                  { id: 'Website', label: 'Custom Website' },
                  { id: 'Shopify Store', label: 'Shopify Store' },
                  { id: 'Business Automation', label: 'Make / n8n Automation' },
                  { id: 'Full Digital Overhaul', label: 'Full System' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedService(item.id)}
                    className={`px-4 py-2.5 text-xs sm:text-sm font-mono-code uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      selectedService === item.id 
                        ? 'bg-[#2D3480] text-[#F5A623] border border-[#F5A623] font-bold' 
                        : 'bg-[#121226] text-[#A0A0B0] border border-[#2D3480]/50 hover:border-white/40'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Two CTA buttons: Larger typography, tactile states */}
            <div className="mt-9 sm:mt-11 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
              {/* WhatsApp Us (amber filled) */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 sm:px-9 py-4.5 sm:py-5 bg-[#F5A623] text-[#0D0D1A] font-bold text-xs sm:text-sm uppercase tracking-[0.2em] font-mono-code transition-all duration-200 hover:bg-[#ffb947] hover:shadow-[0_4px_25px_rgba(245,166,35,0.35)] active:translate-y-0.5 flex items-center justify-center gap-3 group cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#0D0D1A]" />
                <span>WhatsApp Us</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Instagram (outlined white) */}
              <a
                href="https://instagram.com/khaliq.studios"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 sm:px-9 py-4.5 sm:py-5 bg-transparent border border-white text-white font-bold text-xs sm:text-sm uppercase tracking-[0.2em] font-mono-code transition-all duration-200 hover:bg-white hover:text-[#0D0D1A] active:translate-y-0.5 flex items-center justify-center gap-3 group cursor-pointer"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Instagram</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Quick stats / guarantees */}
            <div className="mt-12 pt-7 border-t border-[#2D3480]/40 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7">
              <div>
                <span className="text-xs sm:text-sm font-mono-code text-[#C0C0D0] uppercase tracking-wider block mb-1 font-bold">
                  STUDIO AVAILABILITY
                </span>
                <span className="text-sm sm:text-base font-sans text-[#F5F4F0] flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400"></span>
                  Accepting Q1 & Q2 Projects
                </span>
              </div>
              <div>
                <span className="text-xs sm:text-sm font-mono-code text-[#C0C0D0] uppercase tracking-wider block mb-1 font-bold">
                  RESPONSE PROTOCOL
                </span>
                <span className="text-sm sm:text-base font-sans text-[#F5F4F0]">
                  Within 24 Hours Guaranteed
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact & Phone */}
          <div className="lg:col-span-4 lg:text-right flex flex-col lg:items-end justify-between self-stretch pt-2">
            <div className="p-6 sm:p-7 border border-[#2D3480]/60 bg-[#121224] w-full max-w-sm lg:text-left">
              <span className="text-xs sm:text-sm font-mono-code text-[#F5A623] uppercase tracking-[0.2em] block mb-2.5 font-bold">
                DIRECT COMMUNICATIONS
              </span>
              <p className="text-sm text-[#C0C0D0] mb-5 leading-relaxed">
                Need immediate consultation or prefer direct voice communications? Connect with our engineering director:
              </p>

              {/* Direct Call action */}
              <div className="flex flex-col gap-2.5">
                <a
                  href="tel:+917845301134"
                  className="w-full flex items-center justify-between px-4 py-3.5 bg-[#0D0D1A] border border-[#2D3480] hover:border-[#F5A623] transition-colors text-sm font-mono-code text-[#F5F4F0] group cursor-pointer font-bold"
                >
                  <span className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#F5A623]" />
                    <span>+91 78453 01134</span>
                  </span>
                  <span className="text-xs uppercase text-[#A0A0B0] group-hover:text-[#F5A623]">
                    Call Direct ↗
                  </span>
                </a>

                {/* Copy phone button */}
                <button
                  type="button"
                  onClick={copyPhone}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-mono-code uppercase tracking-wider text-[#A0A0B0] hover:text-[#F5A623] border border-transparent hover:border-[#2D3480]/40 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied to clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Number</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Bottom right: +91 78453 01134 in small silver text */}
            <div className="mt-8 lg:mt-0">
              <span className="text-sm font-mono-code text-[#C0C0D0] tracking-[0.2em] font-semibold">
                DIRECT: +91 78453 01134
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
