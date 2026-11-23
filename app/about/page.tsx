"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Layers,
  Wrench,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Play,
  X,
  ArrowRight,
  ChevronDown,
  Quote,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BLOGS_DATA } from "@/data/blogs";
import { CLIENT_REVIEWS } from "@/data/company";

export default function AboutUsPage() {
  const [selectedVideo, setSelectedVideo] = useState<{ title: string; client: string } | null>(null);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const stages = [
    {
      num: "01",
      title: "Consultation",
      desc: "Detailed architectural review of floor plans, elevation exposures, acoustic requirements, and wind maps.",
    },
    {
      num: "02",
      title: "Design & Planning",
      desc: "Structural engineering shop drawings, glass thickness optimization, interlock inertia analysis, and quotation schedules.",
    },
    {
      num: "03",
      title: "Fabrication & Installation",
      desc: "Precision CNC profile mitering, factory gasket assembly, clean-room structural glazing, and laser-guided site anchoring.",
    },
    {
      num: "04",
      title: "Handover & Support",
      desc: "Comprehensive water-spray testing, lock alignment, user maintenance guidance, and verified warranty documentation.",
    },
  ];

  const clientVideos = [
    {
      id: "v1",
      title: "Panoramic Villa Sliding System Walkthrough",
      client: "Ar. Vikramaditya Singhania (Alibaug Villa Project)",
      thumb: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "v2",
      title: "Commercial Curtain Wall Glazing Execution",
      client: "Skyline Developers Technical Team",
      thumb: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "v3",
      title: "CC.50 Casement Windows & Bug Screen Review",
      client: "Pooja Hegde (The Whispering Pines Estate)",
      thumb: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="bg-charcoal min-h-screen pb-24 text-lightgrey">
      {/* About Hero */}
      <section className="relative py-16 lg:py-28 bg-graphite border-b border-graphite-border overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "About Us" }]} />

          <div className="mt-8 max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold" />
              Corporate Profile
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              Creating Architectural Possibilities
            </h1>
            <p className="text-sm sm:text-base text-lightgrey leading-relaxed font-light">
              At ALUTECKSYSTEMS, our mission is to provide thoughtfully engineered architectural solutions that combine quality, functionality and sophisticated design.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-24">
        {/* Company Overview & Philosophy */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-[10px] uppercase font-mono tracking-widest text-gold block">
              Who We Are
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white leading-tight">
              Engineering Excellence Across Luxury Residential & Commercial Envelopes
            </h2>
            <p className="text-xs sm:text-sm text-lightgrey leading-relaxed">
              ALUTECKSYSTEMS is a specialized architectural fenestration company providing System Aluminium Windows, Doors, Façade Glazing, and uPVC solutions. We partner with architects, builders, and developers to transform structural designs into weatherproof, visually striking spaces.
            </p>
            <p className="text-xs sm:text-sm text-textgrey leading-relaxed">
              We leverage Cardinal system aluminium engineering profiles and Saint-Gobain architectural glazing. Every system is selected to withstand Indian climatic conditions—from coastal monsoons and high wind gusts to extreme summer solar radiation.
            </p>

            <div className="pt-2">
              <Link
                href="/products/system-aluminium"
                className="inline-flex items-center gap-2 text-xs font-heading font-semibold text-gold hover:underline uppercase"
              >
                <span>Explore our 11 Aluminium Series</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Mission Box */}
            <div className="p-6 rounded-sm bg-graphite border border-graphite-border space-y-3 shadow-lg">
              <span className="text-[10px] font-mono text-gold uppercase tracking-wider block font-bold">
                Our Mission
              </span>
              <p className="text-xs text-white leading-relaxed font-medium">
                "To provide thoughtfully engineered architectural solutions that combine quality, functionality and sophisticated design."
              </p>
            </div>

            {/* Vision Box */}
            <div className="p-6 rounded-sm bg-graphite border border-graphite-border space-y-3 shadow-lg">
              <span className="text-[10px] font-mono text-gold uppercase tracking-wider block font-bold">
                Our Vision
              </span>
              <p className="text-xs text-white leading-relaxed font-medium">
                "To contribute to modern architecture through reliable, aesthetically refined and project-specific aluminium and glazing systems."
              </p>
            </div>
          </div>
        </section>

        {/* 4-Stage Approach */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
              Execution Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Our 4-Stage Approach
            </h2>
            <p className="text-xs text-textgrey">
              Consultation → Design & Planning → Fabrication & Installation → Handover & Support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stages.map((st) => (
              <div
                key={st.num}
                className="p-6 rounded-sm bg-graphite border border-graphite-border space-y-3 relative group"
              >
                <span className="text-2xl font-mono font-bold text-gold/40 group-hover:text-gold transition-colors">
                  {st.num}
                </span>
                <h3 className="font-heading font-bold text-base text-white">
                  {st.title}
                </h3>
                <p className="text-xs text-textgrey leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Client Testimonial Videos Section */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
                On-Site Perspectives
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                Client Project Videos
              </h2>
            </div>
            <span className="text-xs text-textgrey">
              Hear directly from project architects and property owners
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clientVideos.map((vid) => (
              <div
                key={vid.id}
                onClick={() => setSelectedVideo(vid)}
                className="group cursor-pointer rounded-sm overflow-hidden bg-graphite border border-graphite-border hover:border-gold/50 shadow-xl transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-charcoal">
                  <Image
                    src={vid.thumb}
                    alt={vid.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/20 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gold/90 text-charcoal flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-charcoal ml-0.5" />
                    </div>
                  </div>
                </div>

                <div className="p-4 space-y-1">
                  <h4 className="font-heading font-semibold text-xs text-white group-hover:text-gold transition-colors">
                    {vid.title}
                  </h4>
                  <p className="text-[11px] text-textgrey">{vid.client}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Client Endorsement Reviews */}
        <section className="p-8 rounded-sm bg-graphite border border-graphite-border space-y-6">
          <h3 className="font-heading font-bold text-xl text-white">
            Client Testimonials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLIENT_REVIEWS.map((rev) => (
              <div key={rev.id} className="p-5 rounded bg-charcoal border border-graphite-border space-y-3">
                <Quote className="w-5 h-5 text-gold" />
                <p className="text-xs text-lightgrey italic leading-relaxed">
                  "{rev.review}"
                </p>
                <div className="pt-2 border-t border-graphite-border">
                  <span className="font-heading font-bold text-xs text-white block">{rev.name}</span>
                  <span className="text-[10px] text-gold">{rev.category}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blogs Accordion Section */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
              Engineering Knowledge
            </span>
            <h2 className="text-2xl font-heading font-bold text-white">
              Architectural Articles & Fenestration Insights
            </h2>
          </div>

          <div className="divide-y divide-graphite-border rounded-sm border border-graphite-border bg-graphite overflow-hidden">
            {BLOGS_DATA.map((blog, idx) => {
              const isOpen = openAccordion === idx;
              return (
                <div key={blog.slug} className="p-5">
                  <button
                    onClick={() => setOpenAccordion(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left text-sm font-heading font-semibold text-white hover:text-gold transition-colors"
                  >
                    <span>{blog.title}</span>
                    <ChevronDown className={`w-4 h-4 text-gold transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  {isOpen && (
                    <div className="pt-3 space-y-3 text-xs text-textgrey leading-relaxed animate-in fade-in duration-200">
                      <p>{blog.excerpt}</p>
                      <Link
                        href={`/blogs/${blog.slug}`}
                        className="text-gold font-medium hover:underline inline-flex items-center gap-1 text-xs"
                      >
                        <span>Read full article</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Video Modal Placeholder */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedVideo(null)} />
          <div className="relative bg-graphite border border-graphite-border rounded p-6 max-w-lg w-full z-10 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-heading font-bold text-sm text-white">{selectedVideo.title}</h4>
              <button onClick={() => setSelectedVideo(null)} className="text-textgrey hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-[16/9] bg-charcoal rounded flex items-center justify-center border border-graphite-border text-center p-4">
              <span className="text-xs text-textgrey">
                Video player container for {selectedVideo.client}. Verified client video stream ready to connect with hosting server.
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
