"use client";

import React from "react";
import { CLIENT_LOGOS } from "@/data/company";

export default function ClientLogosSection() {
  return (
    <section className="py-16 bg-graphite/50 relative border-b border-graphite-border/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-[10px] font-heading uppercase tracking-[0.25em] text-textgrey font-semibold block">
            COLLABORATION & PARTNERSHIPS
          </span>
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-white mt-1">
            Trusted By Our Clients
          </h2>
          <p className="text-xs text-textgrey mt-1">
            Partnering with premier architectural practices, developer groups, and luxury builders.
          </p>
        </div>

        {/* Logo Placeholders: Monochrome default, Color Reveal on hover */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {CLIENT_LOGOS.map((client) => (
            <div
              key={client.id}
              className="group p-5 rounded-sm bg-charcoal/70 border border-graphite-border/70 hover:border-gold/40 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-10 h-10 rounded-full bg-graphite flex items-center justify-center text-textgrey group-hover:text-gold group-hover:bg-gold/15 transition-colors mb-2 font-mono text-xs font-bold">
                {client.name.replace("Client Logo ", "CL")}
              </div>
              <span className="font-heading font-semibold text-xs text-lightgrey/80 group-hover:text-white transition-colors block">
                {client.label}
              </span>
              <span className="text-[9px] text-textgrey/80 font-mono mt-0.5">
                {client.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
