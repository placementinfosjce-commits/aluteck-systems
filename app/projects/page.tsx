"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Sparkles, Filter, ChevronRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PROJECTS_DATA, ProjectItem } from "@/data/projects";

const FILTER_OPTIONS = [
  "All Projects",
  "System Aluminium Windows",
  "System Aluminium Doors",
  "Façade Systems",
  "Structural Glazing",
  "Commercial",
  "Residential",
] as const;

export default function ProjectsListingPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All Projects");

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    if (activeFilter === "All Projects") return true;
    if (activeFilter === "System Aluminium Windows") {
      return proj.category.includes("Aluminium") || proj.systemUsed.includes("CS.") || proj.systemUsed.includes("CC.");
    }
    if (activeFilter === "System Aluminium Doors") {
      return proj.category.includes("Aluminium") || proj.systemUsed.includes("COS.") || proj.systemUsed.includes("BS.");
    }
    if (activeFilter === "Façade Systems") {
      return proj.category === "Façade Systems" || proj.systemUsed.includes("Curtain") || proj.systemUsed.includes("Glazing");
    }
    if (activeFilter === "Structural Glazing") {
      return proj.category === "Structural Glazing" || proj.systemUsed.includes("Structural Silicone");
    }
    return proj.category === activeFilter;
  });

  return (
    <div className="bg-charcoal min-h-screen pb-24 text-lightgrey">
      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-graphite border-b border-graphite-border overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Our Projects" }]} />

          <div className="mt-6 max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold" />
              Architectural Portfolio
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              Our Projects. Real Architectural Possibilities.
            </h1>
            <p className="text-sm sm:text-base text-lightgrey leading-relaxed font-light">
              Explore our completed residential villas, luxury estates, and commercial building envelopes. Each project represents engineered solutions to specific site, acoustic, and wind-load challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Controls Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          <span className="text-xs font-mono uppercase text-textgrey flex items-center gap-1.5 mr-2">
            <Filter className="w-3.5 h-3.5 text-gold" />
            Filter:
          </span>
          {FILTER_OPTIONS.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-1.5 rounded-sm text-xs font-heading tracking-wider transition-colors whitespace-nowrap ${
                activeFilter === cat
                  ? "bg-gold text-charcoal font-bold shadow-md"
                  : "bg-graphite text-lightgrey hover:text-white border border-graphite-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.slug}
              className="group bg-graphite border border-graphite-border hover:border-gold/50 rounded-sm overflow-hidden flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Photo */}
                <div className="relative aspect-[16/10] overflow-hidden bg-charcoal">
                  <Image
                    src={proj.featuredImage}
                    alt={proj.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded bg-charcoal/80 backdrop-blur-sm border border-graphite-border text-[10px] font-mono text-gold font-bold">
                      {proj.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-textgrey">
                    <MapPin className="w-3.5 h-3.5 text-gold" />
                    <span>{proj.location} • {proj.completionYear}</span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-white group-hover:text-gold transition-colors">
                    {proj.title}
                  </h3>

                  <div className="text-[11px] font-mono text-gold/90">
                    System: {proj.systemUsed}
                  </div>

                  <p className="text-xs text-textgrey leading-relaxed line-clamp-3">
                    {proj.shortDesc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  href={`/projects/${proj.slug}`}
                  className="w-full py-2.5 px-4 rounded-sm bg-charcoal hover:bg-gold hover:text-charcoal border border-graphite-border hover:border-gold text-lightgrey text-xs font-heading font-semibold tracking-wider uppercase transition-colors flex items-center justify-between group/btn"
                >
                  <span>View Project Details</span>
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
