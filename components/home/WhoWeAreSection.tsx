import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Compass, Layers, ShieldCheck, Wrench } from "lucide-react";

export default function WhoWeAreSection() {
  const features = [
    {
      title: "Precision-oriented engineering",
      desc: "Extruded alloy profiles calculated for structural inertia and deflection limits.",
      icon: Compass,
    },
    {
      title: "Contemporary architectural design",
      desc: "Ultra-slim 25mm sightlines and frameless facades that maximize glass expanse.",
      icon: Layers,
    },
    {
      title: "Customised product solutions",
      desc: "Tailored to high-rise wind loads, coastal salinity, and acoustic specifications.",
      icon: Wrench,
    },
    {
      title: "Professional installation coordination",
      desc: "Laser-guided site surveying, factory certified teams, and rigorous water-hose testing.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-charcoal relative border-b border-graphite-border/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Architectural Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-graphite-border shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
                alt="Alutecksystems Slim-Frame Sliding Aluminium System"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />

              {/* Floating Architectural Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-sm bg-graphite/90 backdrop-blur-md border border-graphite-border text-xs flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gold font-bold block">
                    System Architecture
                  </span>
                  <span className="text-white font-medium">Slim Sightlines & Thermal Inertia</span>
                </div>
                <span className="text-xs text-textgrey font-mono">6063-T6 Alloy</span>
              </div>
            </div>

            {/* Subtle decorative framing */}
            <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-gold/40 pointer-events-none -z-0" />
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-gold/40 pointer-events-none -z-0" />
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-heading uppercase tracking-[0.25em] text-gold font-bold">
                WHO WE ARE
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
                We Are Alutecksystems
              </h2>
            </div>

            <p className="text-sm sm:text-base text-lightgrey leading-relaxed font-light">
              At Alutecksystems, we bring architectural vision and advanced engineering together through premium System Aluminium Windows, Doors and Façade Solutions. Our focus is on refined design, precision fabrication, dependable functionality and project-specific solutions that complement modern residential and commercial spaces.
            </p>

            {/* 4 Supporting Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-2">
              {features.map((feat, index) => {
                const IconComponent = feat.icon;
                return (
                  <div
                    key={index}
                    className="p-3.5 rounded-sm bg-graphite/60 border border-graphite-border/70 hover:border-gold/30 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="p-1 rounded bg-gold/10 text-gold">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h4 className="font-heading font-semibold text-xs text-white">
                        {feat.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-textgrey leading-normal">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="pt-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-heading font-semibold text-gold hover:text-gold-light tracking-wider uppercase group"
              >
                <span>Discover Our Company</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
