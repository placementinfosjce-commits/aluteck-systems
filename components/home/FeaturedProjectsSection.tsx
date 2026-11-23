"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, ExternalLink } from "lucide-react";
import { PROJECTS_DATA } from "@/data/projects";

export default function FeaturedProjectsSection() {
  const featured = PROJECTS_DATA.slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-charcoal relative border-b border-graphite-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-heading uppercase tracking-[0.25em] text-gold font-bold">
              OUR PROJECTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
              Architectural Spaces Brought to Life
            </h2>
            <p className="text-xs sm:text-sm text-textgrey max-w-xl">
              Explore our portfolio of completed residential villa fenestration, commercial curtain walls, and precision structural glazing projects.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-heading font-semibold text-gold hover:text-gold-light tracking-wider uppercase group whitespace-nowrap"
          >
            <span>View More Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        {/* 6 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((proj) => (
            <div
              key={proj.slug}
              className="group bg-graphite border border-graphite-border hover:border-gold/50 rounded-sm overflow-hidden flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Project Photograph */}
                <div className="relative aspect-[16/10] overflow-hidden bg-charcoal-900">
                  <Image
                    src={proj.featuredImage}
                    alt={proj.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-transparent opacity-90" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded bg-charcoal/80 backdrop-blur-sm border border-graphite-border text-[10px] font-mono text-gold font-semibold uppercase">
                      {proj.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-textgrey">
                    <MapPin className="w-3.5 h-3.5 text-gold" />
                    <span>{proj.location}</span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-white group-hover:text-gold transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-textgrey leading-relaxed line-clamp-2">
                    {proj.shortDesc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  href={`/projects/${proj.slug}`}
                  className="w-full py-2.5 px-4 rounded-sm bg-charcoal hover:bg-gold hover:text-charcoal border border-graphite-border hover:border-gold text-lightgrey text-xs font-heading font-semibold tracking-wider uppercase transition-colors flex items-center justify-between group/btn"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
