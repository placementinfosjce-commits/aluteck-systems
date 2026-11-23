import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Wrench, Layers } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { UPVC_WINDOWS_DATA } from "@/data/products-upvc";

export const metadata: Metadata = {
  title: "Premium uPVC Windows | Multi-Chamber Thermal & Acoustic Insulation",
  description:
    "Explore precision-engineered uPVC sliding, casement, tilt & turn, and villa windows with steel reinforcement and Saint-Gobain acoustic glazing.",
};

export default function UpvcWindowsPage() {
  const data = UPVC_WINDOWS_DATA;

  return (
    <div className="bg-charcoal min-h-screen pb-24 text-lightgrey">
      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-graphite border-b border-graphite-border overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url('${data.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Products", href: "/products/system-aluminium" },
              { label: data.title },
            ]}
          />

          <div className="mt-6 max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold" />
              Thermal & Acoustic Comfort
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              {data.title}
            </h1>
            <p className="text-sm sm:text-base text-lightgrey leading-relaxed font-light">
              {data.overview}
            </p>

            <div className="pt-2">
              <a
                href="#enquiry-cta"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-charcoal font-heading font-semibold text-xs tracking-wider uppercase transition-all shadow-md"
              >
                <span>Request Window Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
        {/* Window Opening Types Grid */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-mono tracking-widest text-gold block">
              Architectural Opening Styles
            </span>
            <h2 className="text-2xl font-heading font-bold text-white">
              uPVC Window Configurations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.types.map((type, idx) => (
              <div
                key={idx}
                className="group bg-graphite border border-graphite-border hover:border-gold/40 rounded-sm overflow-hidden flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-charcoal">
                    <Image
                      src={type.image}
                      alt={type.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="font-heading font-bold text-base text-white group-hover:text-gold transition-colors">
                      {type.name}
                    </h3>
                    <p className="text-xs text-textgrey leading-relaxed">
                      {type.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features & Glazing */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 p-6 rounded-sm bg-graphite border border-graphite-border space-y-4">
            <h3 className="font-heading font-bold text-base text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>Multi-Chamber Performance</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.keyFeatures.map((feat, i) => (
                <div key={i} className="p-3.5 rounded bg-charcoal border border-graphite-border space-y-1">
                  <span className="font-heading font-semibold text-xs text-gold block">{feat.title}</span>
                  <p className="text-[11px] text-textgrey leading-relaxed">{feat.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 p-6 rounded-sm bg-graphite border border-graphite-border space-y-4">
            <h3 className="font-heading font-bold text-base text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-gold" />
              <span>Compatible Glazing Options</span>
            </h3>
            <ul className="space-y-2.5 text-xs text-lightgrey">
              {data.glazingOptions.map((opt, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                  <span>{opt}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Maintenance Guidance */}
        <section className="p-6 rounded-sm bg-graphite border border-graphite-border space-y-4">
          <h3 className="font-heading font-bold text-base text-white flex items-center gap-2">
            <Wrench className="w-4 h-4 text-gold" />
            <span>Maintenance Guidance</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-lightgrey">
            {data.maintenanceGuidance.map((guide, i) => (
              <div key={i} className="p-3 rounded bg-charcoal border border-graphite-border">
                {guide}
              </div>
            ))}
          </div>
        </section>

        {/* Enquiry CTA */}
        <section id="enquiry-cta" className="p-8 sm:p-12 rounded-sm bg-charcoal border border-gold/40 shadow-2xl">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
              Project Consultation
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Consult on Custom uPVC Windows
            </h2>
            <p className="text-xs sm:text-sm text-lightgrey leading-relaxed">
              Connect with our fenestration team for opening schedules, acoustic STC ratings, and quotations for residential or commercial installations.
            </p>
            <div className="pt-2">
              <Link
                href="/#enquiry"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-gradient-to-r from-gold to-gold-dark text-charcoal font-heading font-semibold text-xs tracking-wider uppercase"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
