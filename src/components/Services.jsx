import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Custom Websites",
      subtitle: "Professional, fast, conversion-focused.",
      description: "Production-grade websites built with clean architecture, ultra-fast load times, and intuitive mobile UX designed to turn cold visitors into paying clients.",
      capabilities: ["Next.js & React 18 Architecture", "Sub-second Page Load & SEO", "Mobile-First Responsive Layouts", "Interactive Component UI"],
      metric: "0.8s Avg Velocity",
      waMessage: "Hi Khaliq Studios, I want to inquire about custom website development.",
    },
    {
      title: "Shopify Stores",
      subtitle: "E-commerce built to sell from day one.",
      description: "End-to-end Shopify engineering from custom product showcases to seamless checkout, optimized for high conversion and regional payment flows.",
      capabilities: ["Shopify Liquid & Custom Themes", "Checkout Conversion Optimization", "WhatsApp Direct Order Integration", "Inventory & CRM Sync"],
      metric: "Zero-Friction Checkout",
      waMessage: "Hi Khaliq Studios, I want to build or redesign a high-converting Shopify store.",
    },
    {
      title: "Business Automation",
      subtitle: "Workflows that run while you sleep.",
      description: "Eliminate repetitive manual busywork using Make.com and n8n. We design the backend operational pipelines so your team can focus on growth.",
      capabilities: ["Make.com & n8n Scenario Design", "WhatsApp Automated Lead Routing", "Payment & Accounting Sync", "Custom Webhooks & REST APIs"],
      metric: "99.8% Reliability",
      waMessage: "Hi Khaliq Studios, I want to automate my business operations and workflows.",
    },
  ];

  return (
    <section 
      data-theme="light"
      id="services"
      className="relative w-full bg-[#EEEAE1] text-[#1B1B1B] py-24 sm:py-32 lg:py-36 border-t border-[#1B1B1B]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Pill */}
        <div className="mb-6">
          <div className="studio-pill studio-pill-light">
            <span className="text-[#2D3480]">↗</span>
            <span className="tracking-[0.05em] uppercase font-mono-code text-[11px] font-semibold">What We Do Best</span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-[-0.04em] text-[#1B1B1B] leading-[1.08]">
            Digital systems crafted with intention & precision.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5A5A6E] max-w-xl leading-relaxed">
            We don't build generic template pages. We engineer resilient systems that directly support your revenue and day-to-day operations.
          </p>
        </div>

        {/* Services Interactive Grid (Atelier Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Service Selector Cards */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            {services.map((service, index) => {
              const isActive = activeService === index;

              return (
                <div
                  key={service.title}
                  onClick={() => setActiveService(index)}
                  className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'bg-white border-[#2D3480] shadow-md' 
                      : 'bg-white/60 hover:bg-white border-[#1B1B1B]/10 hover:border-[#1B1B1B]/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono-code text-xs text-[#F5A623] font-bold uppercase tracking-wider">
                      0{index + 1} // CAPABILITY
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-[#2D3480]/10 text-[#2D3480] rounded-full">
                      {service.metric}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-[#1B1B1B] mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#5A5A6E] leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[#1B1B1B]/10">
                    {service.capabilities.map((cap) => (
                      <span 
                        key={cap}
                        className="px-3 py-1 bg-[#F6F4EE] border border-[#1B1B1B]/10 rounded-lg text-xs font-medium text-[#2D3480]"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Featured Focus Card (Atelier Style) */}
          <div className="lg:col-span-5 sticky top-28 p-8 sm:p-10 bg-[#0D0D1A] text-[#F5F4F0] rounded-3xl border border-white/10 shadow-2xl flex flex-col justify-between min-h-[460px]">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <span className="text-xs font-mono-code text-[#F5A623] uppercase tracking-wider font-semibold">
                  ACTIVE FOCUS // 0{activeService + 1}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              </div>

              <h4 className="text-3xl sm:text-4xl font-normal font-serif text-[#F5F4F0] mb-3">
                {services[activeService].title}
              </h4>

              <p className="font-editorial italic text-lg text-[#F5A623] mb-4">
                "{services[activeService].subtitle}"
              </p>

              <p className="text-sm sm:text-base text-[#A0A0B0] leading-relaxed mb-8">
                {services[activeService].description}
              </p>

              <div className="space-y-2.5 mb-8">
                {services[activeService].capabilities.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#E0E0EC]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={`https://wa.me/917845301134?text=${encodeURIComponent(services[activeService].waMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shadcn-primary w-full text-center py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Inquire This System</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
