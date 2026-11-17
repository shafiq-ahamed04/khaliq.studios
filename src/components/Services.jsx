import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Websites",
      subtitle: "Professional, fast, conversion-focused.",
      description: "Professional websites that convert visitors into customers. Built fast, built right with clean architecture and modern web standards.",
      capabilities: ["Custom React / Next.js", "Ultra-fast Performance", "Mobile-First UX", "Search Engine Optimization"],
      ctaText: "Inquire Website",
      waMessage: "Hi Khaliq Studios, I want to inquire about custom website development.",
    },
    {
      title: "Shopify Stores",
      subtitle: "E-commerce built to sell from day one.",
      description: "E-commerce stores designed to sell. From custom product pages to high-converting checkout — fully optimized for Tamil Nadu & global brands.",
      capabilities: ["Shopify Liquid & Headless", "Conversion Rate Optimization", "Custom Payment & WhatsApp Checkout", "Inventory & Order Flow"],
      ctaText: "Build Your Store",
      waMessage: "Hi Khaliq Studios, I want to build or redesign a high-converting Shopify store.",
    },
    {
      title: "Automation",
      subtitle: "Workflows that run while you sleep.",
      description: "Eliminate repetitive manual work using Make and n8n. We build the automated operational pipelines so you don't have to.",
      capabilities: ["Make.com & n8n Workflows", "WhatsApp / CRM Integration", "Automated Lead Routing", "Custom API Integrations"],
      ctaText: "Automate Ops",
      waMessage: "Hi Khaliq Studios, I want to automate my business operations and workflows.",
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full bg-[#F5F4F0] text-[#0D0D1A] py-24 sm:py-36 lg:py-40 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Index / Meta Tag */}
        <div className="flex items-center justify-between mb-10 pb-4 border-b border-[#0D0D1A]/10">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono-code text-[#2D3480] uppercase tracking-[0.25em] font-bold">
            <span className="w-2.5 h-[2.5px] bg-[#F5A623]"></span>
            <span>CAPABILITIES</span>
          </div>
          <span className="font-mono-code text-xs sm:text-sm text-[#7A7A8A] tracking-[0.2em] uppercase font-semibold">
            02 / 05 SERVICES
          </span>
        </div>

        {/* Headline: Large, left-aligned serif */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#0D0D1A] leading-[1.05]">
            What We Build
          </h2>
          <p className="mt-5 text-base sm:text-lg md:text-xl font-sans text-[#4A4A5E] max-w-2xl leading-relaxed">
            We don't do superficial web design. We engineer resilient digital infrastructure that moves your business forward.
          </p>
        </div>

        {/* Three services displayed as large typographic blocks, not cards */}
        <div className="flex flex-col space-y-16 sm:space-y-24 lg:space-y-28">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col pt-2 relative"
            >
              {/* Big serif name on its own line - fluid responsive typography */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 sm:gap-4">
                <h3 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#0D0D1A] tracking-[-0.02em] font-normal transition-colors duration-300 group-hover:text-[#2D3480]">
                  {service.title}
                </h3>

                <a
                  href={`https://wa.me/917845301134?text=${encodeURIComponent(service.waMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono-code uppercase tracking-[0.2em] text-[#2D3480] hover:text-[#F5A623] transition-colors self-start sm:self-auto py-1 font-bold"
                >
                  <span>{service.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Thin amber underline */}
              <div className="w-full h-[2px] bg-[#0D0D1A]/15 my-6 sm:my-8 relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-24 sm:w-36 bg-[#F5A623] group-hover:w-full transition-all duration-700 ease-out" />
              </div>

              {/* Descriptions & Capabilities */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
                {/* 1-line description in confident editorial font */}
                <div className="lg:col-span-6">
                  <p className="font-editorial italic text-xl sm:text-2xl md:text-3xl text-[#2D3480] mb-3">
                    "{service.subtitle}"
                  </p>
                  <p className="font-sans text-base sm:text-lg md:text-xl text-[#4A4A5E] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Capabilities list */}
                <div className="lg:col-span-6 flex flex-wrap gap-2.5 sm:gap-3 items-center lg:justify-end">
                  {service.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="px-3.5 sm:px-4 py-2 bg-[#0D0D1A]/5 border border-[#0D0D1A]/10 text-xs sm:text-sm font-mono-code text-[#2D3480] tracking-wide font-medium"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
