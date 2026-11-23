import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, ShieldCheck, Sparkles, ChevronRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FACADE_SYSTEMS_DATA } from "@/data/products-facade";

export const metadata: Metadata = {
  title: "Architectural Façade Systems | Structural, Curtain Wall & Glazing Solutions",
  description:
    "Explore our 8 high-performance Façade Systems: Structural Glazing, Curtain Wall Glazing, Spider Glazing, ACP Elevation, Glass Partitions, Canopies, Skylights, and Façade Louvers featuring Saint-Gobain glass and Jindal Aluminium extrusions.",
};

export default function FacadeSystemsListingPage() {
  return (
    <div className="bg-charcoal min-h-screen pb-24">
      {/* Page Hero Banner */}
      <section className="relative py-16 lg:py-24 bg-graphite border-b border-graphite-border overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Products", href: "/products/facade-systems" },
              { label: "Façade Systems" },
            ]}
          />

          <div className="mt-6 max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold" />
              High-Performance Building Envelopes
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              Architectural Façade Systems
            </h1>
            <p className="text-sm sm:text-base text-lightgrey leading-relaxed font-light">
              Engineering monolithic glass facades, stick and unitized curtain wall grids, spider point-supported glazing, and climate-responsive louvers. Built with Saint-Gobain solar-control glass and Jindal 6063-T6 architectural extrusions.
            </p>
          </div>
        </div>
      </section>

      {/* Materials Preference Highlight Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="p-4 sm:p-5 rounded-sm bg-charcoal border border-gold/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-gold/15 flex items-center justify-center text-gold flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-xs">
              <span className="font-bold text-white block">Project Material Preferences</span>
              <span className="text-textgrey">
                Saint-Gobain Glass (Infinity solar-control, acoustic DGU) & Jindal Aluminium 6063-T6 profiles, subject to engineering approval.
              </span>
            </div>
          </div>

          <a
            href="#enquiry"
            className="text-xs font-heading font-semibold text-gold hover:underline whitespace-nowrap flex items-center gap-1"
          >
            <span>Request Façade Consultation</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* 8 Façade System Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FACADE_SYSTEMS_DATA.map((facade, idx) => (
            <div
              key={facade.slug}
              className="group bg-graphite border border-graphite-border hover:border-gold/50 rounded-sm overflow-hidden flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-900">
                  <Image
                    src={facade.heroImage}
                    alt={facade.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 rounded bg-charcoal/80 backdrop-blur-sm border border-graphite-border text-[10px] font-mono text-gold font-bold">
                      0{idx + 1}
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
                  className="w-full py-2.5 px-4 rounded-sm bg-charcoal hover:bg-gold hover:text-charcoal border border-graphite-border hover:border-gold text-lightgrey text-xs font-heading font-semibold tracking-wider uppercase transition-colors flex items-center justify-between group/btn"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
