import React, { useState } from 'react';
import { ArrowUpRight, MessageCircle, Phone, Copy, Check } from 'lucide-react';

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
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
      data-theme="dark"
      id="contact"
      className="relative w-full bg-[#0D0D1A] text-[#F5F4F0] py-28 sm:py-36 lg:py-40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Pill */}
        <div className="mb-6">
          <div className="studio-pill studio-pill-dark">
            <span className="text-[#F5A623]">↗</span>
            <span className="tracking-[0.05em] uppercase font-mono-code text-[11px] font-semibold">Get In Touch</span>
          </div>
        </div>

        {/* Atelier-Style Large CTA Card */}
        <div className="p-8 sm:p-14 lg:p-16 rounded-3xl bg-[#121224] border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Heading, Subtext, Selectors & Buttons */}
            <div className="lg:col-span-8">
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-[#F5F4F0] leading-[1.02]">
                Ready to build your<br />
                <span className="text-[#F5A623] italic font-serif">digital system?</span>
              </h2>

              <p className="mt-6 text-lg sm:text-xl text-[#C0C0D4] max-w-xl leading-relaxed">
                Tell us about your project. We respond within 24 hours with architectural scope, technology recommendations, and clear delivery timelines.
              </p>

              {/* Quick Project Discipline Selector */}
              <div className="mt-10 pt-7 border-t border-white/10">
                <span className="text-xs sm:text-sm font-mono-code text-[#A0A0B0] uppercase tracking-wider block mb-3.5 font-bold">
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
                      className={`px-4 py-2.5 text-xs sm:text-sm font-mono-code uppercase tracking-wider rounded-xl transition-all duration-200 cursor-pointer ${
                        selectedService === item.id 
                          ? 'bg-[#2D3480] text-[#F5A623] border border-[#F5A623] font-bold shadow-md' 
                          : 'bg-[#0D0D1A] text-[#A0A0B0] border border-white/10 hover:border-white/30'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Two CTA Buttons: Shadcn Styling */}
              <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shadcn-primary !py-4 !px-8 rounded-xl font-bold"
                >
                  <MessageCircle className="w-4 h-4 text-[#0D0D1A]" />
                  <span>WhatsApp Us</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="https://instagram.com/khaliq.studios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shadcn-outline !py-4 !px-8 rounded-xl font-bold"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Instagram @khaliq.studios</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Direct Telephony & SLA Info */}
            <div className="lg:col-span-4 flex flex-col justify-between self-stretch lg:border-l lg:border-white/10 lg:pl-10">
              <div className="p-6 bg-[#0D0D1A] rounded-2xl border border-white/10 mb-8">
                <span className="text-xs font-mono-code text-[#F5A623] uppercase tracking-wider block mb-2 font-bold">
                  DIRECT LINE // ENGINEERING LEAD
                </span>
                <p className="text-xs sm:text-sm text-[#A0A0B0] mb-5 leading-relaxed">
                  Prefer direct phone conversation? Call our technical director directly:
                </p>

                <div className="flex flex-col gap-2.5">
                  <a
                    href="tel:+917845301134"
                    className="w-full flex items-center justify-between px-4 py-3 bg-[#121224] border border-[#2D3480] hover:border-[#F5A623] rounded-xl text-sm font-mono-code text-[#F5F4F0] transition-colors font-bold"
                  >
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#F5A623]" />
                      <span>+91 78453 01134</span>
                    </span>
                    <span className="text-xs text-[#A0A0B0]">Call ↗</span>
                  </a>

                  <button
                    type="button"
                    onClick={copyPhone}
                    className="w-full flex items-center justify-center gap-2 py-2 text-xs font-mono-code uppercase tracking-wider text-[#A0A0B0] hover:text-[#F5A623] rounded-lg transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Copied to clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Phone Number</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs sm:text-sm font-mono-code border-b border-white/10 pb-3">
                  <span className="text-[#A0A0B0]">AVAILABILITY</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Accepting Q1 & Q2
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm font-mono-code border-b border-white/10 pb-3">
                  <span className="text-[#A0A0B0]">RESPONSE SLA</span>
                  <span className="text-[#F5F4F0] font-semibold">Under 24 Hours</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
