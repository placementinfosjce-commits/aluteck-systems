import React from "react";
import { ShieldCheck, CloudRain, Wrench, Layers, Gem, Compass } from "lucide-react";
import { TRUST_INDICATORS } from "@/data/company";

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  CloudRain,
  Wrench,
  Layers,
  Gem,
  Compass,
};

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-charcoal relative border-b border-graphite-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-heading uppercase tracking-[0.25em] text-gold font-bold">
            TRUST & PERFORMANCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Why Choose Alutecksystems?
          </h2>
          <p className="text-xs sm:text-sm text-textgrey leading-relaxed">
            Every architectural project deserves solutions that balance visual elegance, functional reliability and long-term value. We focus on carefully selected materials, technical attention to detail and tailored system configurations.
          </p>
        </div>

        {/* 6 Premium Trust-Indicator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUST_INDICATORS.map((indicator, index) => {
            const Icon = iconMap[indicator.icon] || ShieldCheck;
            return (
              <div
                key={index}
                className="group p-6 rounded-sm bg-graphite/60 border border-graphite-border hover:border-gold/40 transition-all duration-300 hover:-translate-y-1 shadow-lg relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-sm bg-charcoal border border-graphite-border text-gold flex items-center justify-center mb-5 group-hover:bg-gold group-hover:text-charcoal transition-colors">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-heading font-bold text-base text-white group-hover:text-gold transition-colors">
                    {indicator.title}
                  </h3>
                  <p className="text-xs text-textgrey leading-relaxed">
                    {indicator.description}
                  </p>
                </div>

                {/* Subtle indicator number */}
                <span className="absolute top-4 right-4 text-xs font-mono text-graphite-border font-bold">
                  0{index + 1}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
