import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, ChevronRight, Layers, ShieldCheck, Sparkles, SlidersHorizontal, Check } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ALUMINIUM_FAMILIES, ALUMINIUM_SERIES_DATA } from "@/data/products-aluminium";

export const metadata: Metadata = {
  title: "System Aluminium Windows & Doors | Architectural Catalogue",
  description:
    "Explore Cardinal system aluminium sliding, casement, and bifold fenestration: Slim Series (CS.25, CS.29, CS.32, CS.37), Opulence Series (COS.28, COS.35, COS.49), Casement Series (CC.40, CC.50, COC.40) and Bifold (BS.50).",
};

export default function SystemAluminiumListingPage() {
  return (
    <div className="bg-charcoal min-h-screen pb-24">
      {/* Page Hero Banner */}
      <section className="relative py-16 lg:py-24 bg-graphite border-b border-graphite-border overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Products", href: "/products/system-aluminium" },
              { label: "System Aluminium Windows & Doors" },
            ]}
          />

          <div className="mt-6 max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold" />
              Cardinal System Architecture
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              System Aluminium Windows & Doors
            </h1>
            <p className="text-sm sm:text-base text-lightgrey leading-relaxed font-light">
              Architecturally engineered fenestration solutions combining structural 6063-T6 alloy profiles, ultra-slim sightlines, certified wind-load resistance, and smooth tandem gliding. Explore our 4 product families containing 11 dedicated system series.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Product Family Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-24">
        {ALUMINIUM_FAMILIES.map((family, idx) => {
          // Find all series belonging to this family
          const seriesInFamily = ALUMINIUM_SERIES_DATA.filter(
            (s) => s.familySlug === family.slug
          );

          return (
            <section
              key={family.slug}
              id={family.slug}
              className="scroll-mt-24 space-y-8"
            >
              {/* Family Header Card */}
              <div className="p-8 rounded-sm bg-graphite border border-graphite-border shadow-2xl relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-mono font-bold uppercase tracking-wider">
                        Product Family 0{idx + 1}
                      </span>
                      <span className="text-xs text-textgrey font-mono">
                        {seriesInFamily.length} Dedicated Series
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                      {family.name}
                    </h2>
                    <h3 className="text-sm font-heading font-semibold text-gold">
                      {family.headline}
                    </h3>

                    <p className="text-xs sm:text-sm text-lightgrey leading-relaxed">
                      {family.description}
                    </p>

                    {/* Series Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {family.series.map((code) => (
                        <Link
                          key={code}
                          href={`/products/system-aluminium/${code}`}
                          className="px-3 py-1 rounded bg-charcoal border border-graphite-border hover:border-gold/60 text-xs font-mono text-gold transition-colors"
                        >
                          {code.toUpperCase()} →
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5 relative aspect-[16/10] rounded-sm overflow-hidden border border-graphite-border">
                    <Image
                      src={family.image}
                      alt={family.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                </div>
              </div>

              {/* Individual Series Cards within this Family */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {seriesInFamily.map((series) => (
                  <div
                    key={series.slug}
                    className="group bg-graphite/70 border border-graphite-border hover:border-gold/50 rounded-sm overflow-hidden flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div>
                      {/* Image Preview */}
                      <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-900">
                        <Image
                          src={series.heroImage}
                          alt={series.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />
                        <div className="absolute top-3 left-3">
                          <span className="px-2 py-0.5 rounded bg-charcoal/90 backdrop-blur-sm border border-graphite-border text-[10px] font-mono text-gold font-bold">
                            {series.seriesCode}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 space-y-2">
                        <span className="text-[10px] font-mono text-textgrey uppercase">
                          Nominal Size: {series.nominalSize}
                        </span>
                        <h4 className="font-heading font-bold text-base text-white group-hover:text-gold transition-colors">
                          {series.name}
                        </h4>
                        <p className="text-xs text-textgrey leading-relaxed line-clamp-3">
                          {series.shortDesc}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-0 space-y-2">
                      <Link
                        href={`/products/system-aluminium/${series.slug}`}
                        className="w-full py-2.5 px-4 rounded-sm bg-charcoal hover:bg-gold hover:text-charcoal border border-graphite-border hover:border-gold text-lightgrey text-xs font-heading font-semibold tracking-wider uppercase transition-colors flex items-center justify-between group/btn"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
