"use client";

import React, { useState } from "react";
import { Check, Sparkles, SlidersHorizontal, Info } from "lucide-react";
import { FINISHES_DATA, FINISH_CATEGORIES, FinishItem } from "@/data/finishes";

interface ColourFinishSelectorProps {
  systemName?: string;
}

export default function ColourFinishSelector({ systemName = "System Aluminium" }: ColourFinishSelectorProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedFinish, setSelectedFinish] = useState<FinishItem>(FINISHES_DATA[0]);

  const filteredFinishes =
    selectedCategory === "All"
      ? FINISHES_DATA
      : FINISHES_DATA.filter((f) => f.category === selectedCategory);

  return (
    <div className="bg-graphite border border-graphite-border rounded-sm p-6 sm:p-8 shadow-2xl space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-graphite-border pb-6">
        <div className="space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gold font-bold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            Surface Engineering & Finishes
          </span>
          <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
            Explore 170+ Colour & Finish Possibilities
          </h3>
          <p className="text-xs text-textgrey max-w-xl">
            Select an architectural finish below to preview how it renders across {systemName} framing. Over 170 Qualicoat-certified finishes available upon request.
          </p>
        </div>

        {/* Selected Swatch Summary Badge */}
        <div className="flex items-center gap-3 p-2.5 rounded-sm bg-charcoal border border-graphite-border">
          <div
            className="w-10 h-10 rounded-sm border border-white/20 shadow-inner flex-shrink-0"
            style={{ backgroundColor: selectedFinish.hex }}
          />
          <div>
            <span className="text-[10px] font-mono text-gold uppercase block">
              Active Selection
            </span>
            <span className="font-heading font-bold text-xs text-white block">
              {selectedFinish.name}
            </span>
            <span className="text-[10px] text-textgrey font-mono">
              {selectedFinish.ralCode || selectedFinish.category}
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Profile Visualization Box */}
      <div className="p-6 rounded-sm bg-charcoal border border-graphite-border relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Interactive Dynamic Profile Rendering */}
          <div className="md:col-span-5 flex flex-col items-center justify-center p-6 bg-[#0a0f14] rounded border border-graphite-border/70 relative">
            <div className="text-[10px] font-mono text-textgrey uppercase tracking-widest mb-3">
              Real-time Profile Render Preview
            </div>

            {/* Profile Cross-Section Box rendered in selected color */}
            <div className="relative w-44 h-36 flex items-center justify-center">
              <div
                className="w-40 h-32 rounded-sm border-4 transition-colors duration-300 shadow-2xl relative flex items-center justify-center"
                style={{
                  backgroundColor: selectedFinish.hex,
                  borderColor: selectedFinish.hex === "#FFFFFF" ? "#C5A46D" : "rgba(255,255,255,0.15)",
                }}
              >
                {/* Simulated Glass Insert */}
                <div className="w-28 h-20 bg-gradient-to-br from-cyan-900/30 via-cyan-500/10 to-transparent border border-cyan-400/30 rounded-sm flex items-center justify-center backdrop-blur-xs">
                  <span className="text-[9px] font-mono text-cyan-300 tracking-wider">
                    Saint-Gobain Glass
                  </span>
                </div>

                {/* Sleek metallic highlight */}
                <div className="absolute top-1 left-1 right-1 h-1 bg-white/25 rounded-full pointer-events-none" />
              </div>
            </div>

            <div className="mt-3 text-center">
              <span className="text-xs font-mono text-white font-bold block">
                {selectedFinish.name}
              </span>
              <span className="text-[10px] text-textgrey">
                {selectedFinish.description}
              </span>
            </div>
          </div>

          {/* Details & Specs */}
          <div className="md:col-span-7 space-y-3.5 text-xs">
            <div className="flex items-center gap-2 text-gold">
              <Info className="w-4 h-4 flex-shrink-0" />
              <span className="font-semibold text-xs">Coating Specifications</span>
            </div>
            <p className="text-lightgrey leading-relaxed">
              Applied using Qualicoat Class 1 & Class 2 architectural powder coatings, marine-grade electrochemical anodising (up to 25 microns), or high-durability fluoropolymer (PVDF) formulations designed to resist UV bleaching, chalking, and coastal humidity.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2 text-[11px] font-mono text-textgrey">
              <div className="p-2.5 rounded bg-graphite border border-graphite-border">
                <span className="text-lightgrey block font-bold">Micron Thickness:</span>
                <span>60–80 μm (Powder) / 25 μm (Anodised)</span>
              </div>
              <div className="p-2.5 rounded bg-graphite border border-graphite-border">
                <span className="text-lightgrey block font-bold">Salt Spray Resistance:</span>
                <span>1,000+ Hours ASTM B117</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div>
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar">
          <span className="text-xs text-textgrey font-mono uppercase mr-2 flex items-center gap-1">
            <SlidersHorizontal className="w-3.5 h-3.5 text-gold" /> Filter:
          </span>
          {FINISH_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-sm text-xs font-heading tracking-wider transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-gold text-charcoal font-bold"
                  : "bg-charcoal text-textgrey hover:text-white border border-graphite-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Swatches Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
        {filteredFinishes.map((finish) => {
          const isSelected = selectedFinish.id === finish.id;
          return (
            <button
              key={finish.id}
              onClick={() => setSelectedFinish(finish)}
              className={`p-2 rounded-sm border text-left transition-all group flex flex-col justify-between ${
                isSelected
                  ? "bg-charcoal border-gold shadow-md scale-105"
                  : "bg-charcoal/60 border-graphite-border hover:border-gold/40"
              }`}
            >
              <div
                className="w-full aspect-[4/3] rounded-sm mb-2 shadow-inner border border-white/10 flex items-center justify-center relative"
                style={{ backgroundColor: finish.hex }}
              >
                {isSelected && (
                  <div className="w-5 h-5 rounded-full bg-charcoal/90 text-gold flex items-center justify-center shadow">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                )}
              </div>
              <div>
                <span className="text-[11px] font-heading font-medium text-white group-hover:text-gold transition-colors block truncate">
                  {finish.name}
                </span>
                <span className="text-[9px] text-textgrey font-mono block">
                  {finish.ralCode || finish.category}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
