"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Layers, Shield, Sparkles } from "lucide-react";
import { ALUMINIUM_FAMILIES } from "@/data/products-aluminium";
import { FACADE_SYSTEMS_DATA } from "@/data/products-facade";

export default function ProductShowcaseSection() {
  const [activeTab, setActiveTab] = useState<"aluminium" | "facade">("aluminium");

  return (
    <section id="showcase" className="py-20 lg:py-28 bg-graphite relative border-b border-graphite-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-heading uppercase tracking-[0.25em] text-gold font-bold">
            ARCHITECTURAL CATALOGUE
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Interactive Product Showcase
          </h2>
          <p className="text-xs sm:text-sm text-textgrey leading-relaxed">
            Engineered fenestration systems and high-performance building envelopes designed to elevate contemporary residential villas and commercial developments.
          </p>

          {/* Interactive Tab Controls */}
          <div className="inline-flex p-1.5 rounded-sm bg-charcoal border border-graphite-border shadow-inner mt-4 max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveTab("aluminium")}
              className={`px-5 py-2.5 rounded-sm text-xs font-heading font-semibold tracking-wider transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
                activeTab === "aluminium"
                  ? "bg-gold text-charcoal shadow-md"
                  : "text-lightgrey hover:text-white"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>SYSTEM ALUMINIUM WINDOWS & DOORS</span>
            </button>
            <button
              onClick={() => setActiveTab("facade")}
              className={`px-5 py-2.5 rounded-sm text-xs font-heading font-semibold tracking-wider transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
                activeTab === "facade"
                  ? "bg-gold text-charcoal shadow-md"
                  : "text-lightgrey hover:text-white"
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>FAÇADE SYSTEMS</span>
            </button>
          </div>
        </div>

        {/* TAB A: SYSTEM ALUMINIUM WINDOWS & DOORS */}
        {activeTab === "aluminium" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ALUMINIUM_FAMILIES.map((family, idx) => {
                // CTAs mapped to family
                const familyCtas: Record<string, { label: string; href: string }> = {
                  "slim-series": { label: "Explore Slim Series", href: "/products/system-aluminium#slim-series" },
                  "opulence-series": { label: "Explore Opulence Series", href: "/products/system-aluminium#opulence-series" },
                  "casement-series": { label: "Explore Casement Systems", href: "/products/system-aluminium#casement-series" },
                  "bifold-slide-series": { label: "Explore Bifold & Slide", href: "/products/system-aluminium#bifold-slide-series" },
                };

                const cta = familyCtas[family.slug] || {
                  label: "Explore Series",
                  href: "/products/system-aluminium",
                };

                return (
                  <div
                    key={family.slug}
                    className="group bg-charcoal border border-graphite-border hover:border-gold/50 rounded-sm overflow-hidden flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div>
                      {/* Image Preview */}
                      <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-900">
                        <Image
                          src={family.image}
                          alt={family.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />

                        {/* Series Badges */}
                        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                          {family.series.map((s) => (
                            <span
                              key={s}
                              className="px-2 py-0.5 rounded bg-charcoal/80 backdrop-blur-sm border border-graphite-border text-[10px] font-mono text-gold font-semibold uppercase"
                            >
                              {s.toUpperCase()}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 space-y-2.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-textgrey block">
                          Category 0{idx + 1}
                        </span>
                        <h3 className="font-heading font-bold text-lg text-white group-hover:text-gold transition-colors">
                          {family.name}
                        </h3>
                        <p className="text-xs text-textgrey leading-relaxed line-clamp-3">
                          {family.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-0">
                      <Link
                        href={cta.href}
                        className="w-full py-2.5 px-4 rounded-sm bg-graphite hover:bg-gold hover:text-charcoal border border-graphite-border hover:border-gold text-lightgrey text-xs font-heading font-semibold tracking-wider uppercase transition-colors flex items-center justify-between group/btn"
                      >
                        <span>{cta.label}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom info link to all 11 individual series */}
            <div className="p-4 rounded-sm bg-charcoal/80 border border-graphite-border text-xs text-lightgrey flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-textgrey text-center sm:text-left">
                Every individual series (CS.25, CS.29, CS.32, CS.37, COS.28, COS.35, COS.49, CC.40, CC.50, COC.40, BS.50) features certified Cardinal Aluminium catalogue specifications and 2D profile CAD drawings.
              </span>
              <Link
                href="/products/system-aluminium"
                className="text-gold font-medium hover:underline flex items-center gap-1 whitespace-nowrap"
              >
                <span>View Full Aluminium Catalogue</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* TAB B: FAÇADE SYSTEMS (8 Categories) */}
        {activeTab === "facade" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Saint-Gobain & Jindal Material Note */}
            <div className="p-4 rounded-sm bg-charcoal/90 border border-gold/30 text-xs text-lightgrey flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold flex-shrink-0" />
                <span>
                  <strong>Material Specification Preference:</strong> Saint-Gobain architectural glass (Infinity solar-control series) & Jindal Aluminium 6063-T6 profile extrusions, subject to approved project engineering.
                </span>
              </div>
              <Link
                href="/products/facade-systems"
                className="text-gold hover:underline whitespace-nowrap font-medium flex items-center gap-1 text-xs"
              >
                <span>View All 8 Systems</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {FACADE_SYSTEMS_DATA.map((facade, idx) => (
                <div
                  key={facade.slug}
                  className="group bg-charcoal border border-graphite-border hover:border-gold/50 rounded-sm overflow-hidden flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    {/* Image Preview */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-900">
                      <Image
                        src={facade.heroImage}
                        alt={facade.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-0.5 rounded bg-charcoal/80 backdrop-blur-sm border border-graphite-border text-[10px] font-mono text-gold font-semibold uppercase">
                          System 0{idx + 1}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-2">
                      <h3 className="font-heading font-bold text-base text-white group-hover:text-gold transition-colors">
                        {facade.name}
                      </h3>
                      <p className="text-xs text-textgrey leading-relaxed line-clamp-3">
                        {facade.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <Link
                      href={`/products/facade-systems/${facade.slug}`}
                      className="w-full py-2.5 px-4 rounded-sm bg-graphite hover:bg-gold hover:text-charcoal border border-graphite-border hover:border-gold text-lightgrey text-xs font-heading font-semibold tracking-wider uppercase transition-colors flex items-center justify-between group/btn"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
