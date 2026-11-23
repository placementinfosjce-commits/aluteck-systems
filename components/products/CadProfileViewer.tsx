"use client";

import React, { useState } from "react";
import { ZoomIn, ZoomOut, RotateCcw, Download, Maximize2, FileText, Check } from "lucide-react";
import { ProfileDrawing } from "@/data/products-aluminium";

interface CadProfileViewerProps {
  seriesName: string;
  drawings: ProfileDrawing[];
}

export default function CadProfileViewer({ seriesName, drawings }: CadProfileViewerProps) {
  const [selectedDrawing, setSelectedDrawing] = useState<ProfileDrawing>(drawings[0] || null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [downloading, setDownloading] = useState(false);

  if (!drawings || drawings.length === 0) {
    return (
      <div className="p-8 text-center bg-charcoal border border-graphite-border rounded-sm text-textgrey text-xs">
        Technical profile drawings available upon request from the engineering desk.
      </div>
    );
  }

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.3, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.3, 0.7));
  const handleReset = () => setZoomLevel(1);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      // Create a downloadable SVG blob
      const svgElement = document.getElementById("cad-svg-canvas");
      if (svgElement) {
        const svgData = new XMLSerializer().serializeToString(svgElement);
        const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${seriesName.replace(/\s+/g, "_")}_Section_${selectedDrawing.sectionNo}.svg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }
      setDownloading(false);
    }, 400);
  };

  return (
    <div className="bg-graphite border border-graphite-border rounded-sm overflow-hidden shadow-2xl">
      {/* Top Bar: Selector Tabs + Controls */}
      <div className="p-4 bg-charcoal border-b border-graphite-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] uppercase font-mono tracking-widest text-gold block">
            CAD Profile Blueprint Gallery
          </span>
          <h4 className="font-heading font-bold text-white text-base">
            {seriesName} — 2D Engineering Profiles
          </h4>
        </div>

        {/* Zoom & Action Controls */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-graphite border border-graphite-border rounded-sm p-1">
            <button
              onClick={handleZoomOut}
              className="p-1.5 text-lightgrey hover:text-white hover:bg-charcoal rounded transition-colors"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="px-2 text-xs font-mono text-gold min-w-[50px] text-center">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              className="p-1.5 text-lightgrey hover:text-white hover:bg-charcoal rounded transition-colors"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={handleReset}
              className="p-1.5 text-lightgrey hover:text-white hover:bg-charcoal rounded transition-colors border-l border-graphite-border/70 ml-1"
              title="Reset Zoom"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={handleDownload}
            disabled={downloading}
            className="px-3.5 py-2 rounded-sm bg-gold/15 hover:bg-gold text-gold hover:text-charcoal border border-gold/40 text-xs font-heading font-semibold tracking-wider uppercase transition-colors flex items-center gap-1.5"
          >
            {downloading ? <Check className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
            <span>Download CAD (SVG)</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Drawing Selector Sidebar */}
        <div className="lg:col-span-4 p-4 border-b lg:border-b-0 lg:border-r border-graphite-border space-y-2 bg-charcoal/40">
          <span className="text-[10px] uppercase font-mono tracking-wider text-textgrey block mb-2">
            Select Extrusion Section:
          </span>
          {drawings.map((drawing) => {
            const isSelected = selectedDrawing?.id === drawing.id;
            return (
              <button
                key={drawing.id}
                onClick={() => {
                  setSelectedDrawing(drawing);
                  setZoomLevel(1);
                }}
                className={`w-full text-left p-3 rounded-sm border transition-all flex flex-col gap-1 ${
                  isSelected
                    ? "bg-graphite border-gold shadow-md"
                    : "bg-charcoal/70 border-graphite-border hover:border-gold/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-heading font-semibold text-xs text-white">
                    {drawing.title}
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-gold/10 text-gold font-bold">
                    Sec {drawing.sectionNo}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-textgrey font-mono">
                  <span>{drawing.dimensions}</span>
                  <span>{drawing.weight}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive 2D Blueprint Canvas */}
        <div className="lg:col-span-8 p-6 flex flex-col items-center justify-center min-h-[380px] bg-[#0c1218] relative overflow-hidden">
          {/* Blueprint Grid Lines Pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(to right, #2a3742 1px, transparent 1px), linear-gradient(to bottom, #2a3742 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Blueprint Metadata Watermark */}
          <div className="absolute top-4 left-4 z-10 pointer-events-none space-y-0.5">
            <span className="text-[10px] font-mono text-gold/80 block uppercase tracking-widest">
              Cardinal Catalogue Verification
            </span>
            <span className="text-xs font-mono text-white font-bold block">
              Section No. {selectedDrawing?.sectionNo} | {selectedDrawing?.dimensions}
            </span>
            <span className="text-[10px] font-mono text-textgrey block">
              Weight: {selectedDrawing?.weight} • Alloy: 6063-T6
            </span>
          </div>

          {/* SVG 2D Cross-Section Diagram */}
          <div
            className="transition-transform duration-200 ease-out z-10"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <svg
              id="cad-svg-canvas"
              viewBox="0 0 400 240"
              className="w-72 sm:w-96 h-56 drop-shadow-[0_0_15px_rgba(197,164,109,0.2)]"
            >
              {/* Profile Outer Blueprint Contour */}
              {selectedDrawing?.category === "track" && (
                <g stroke="#C5A46D" strokeWidth="2.5" fill="none">
                  {/* Outer Frame Wall */}
                  <path d="M 50 180 L 350 180 L 350 120 L 330 120 L 330 160 L 220 160 L 220 70 L 195 70 L 195 160 L 85 160 L 85 120 L 50 120 Z" />
                  {/* Internal Reinforcement Cavity & Screw Ports */}
                  <rect x="65" y="165" width="270" height="8" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="3 2" />
                  <circle cx="100" cy="140" r="4.5" stroke="#38bdf8" strokeWidth="1.5" />
                  <circle cx="210" cy="115" r="4.5" stroke="#38bdf8" strokeWidth="1.5" />
                  <circle cx="300" cy="140" r="4.5" stroke="#38bdf8" strokeWidth="1.5" />
                  {/* Running Track Rails */}
                  <path d="M 140 160 L 140 148 L 145 148 L 145 160" stroke="#FFFFFF" strokeWidth="2" />
                  <path d="M 275 160 L 275 148 L 280 148 L 280 160" stroke="#FFFFFF" strokeWidth="2" />
                </g>
              )}

              {selectedDrawing?.category === "shutter" && (
                <g stroke="#C5A46D" strokeWidth="2.5" fill="none">
                  {/* Shutter Box Geometry */}
                  <rect x="120" y="40" width="160" height="150" rx="3" />
                  {/* Glass Pocket Cavity */}
                  <rect x="160" y="40" width="45" height="110" stroke="#38bdf8" strokeWidth="1.5" fill="rgba(56, 189, 248, 0.08)" />
                  {/* EPDM Gasket Cavities */}
                  <path d="M 152 50 L 160 50 L 160 60 L 152 60 Z" fill="#66727D" stroke="none" />
                  <path d="M 205 50 L 213 50 L 213 60 L 205 60 Z" fill="#66727D" stroke="none" />
                  {/* Roller Carriage Chamber */}
                  <circle cx="200" cy="165" r="14" stroke="#FFFFFF" strokeWidth="1.8" />
                  <circle cx="200" cy="165" r="4" fill="#C5A46D" />
                </g>
              )}

              {selectedDrawing?.category === "interlock" && (
                <g stroke="#C5A46D" strokeWidth="2.5" fill="none">
                  {/* Slim Interlock Hook Geometry */}
                  <path d="M 170 30 L 230 30 L 230 90 L 210 90 L 210 170 L 230 170 L 230 210 L 170 210 L 170 190 L 190 190 L 190 50 L 170 50 Z" />
                  {/* Interlock Overlap Hook */}
                  <path d="M 230 110 L 245 110 L 245 150 L 230 150" stroke="#FFFFFF" strokeWidth="2" />
                  {/* Wool Pile Brush Grooves */}
                  <rect x="175" y="80" width="8" height="25" stroke="#38bdf8" strokeWidth="1.2" />
                  <rect x="175" y="135" width="8" height="25" stroke="#38bdf8" strokeWidth="1.2" />
                </g>
              )}

              {selectedDrawing?.category === "mullion" && (
                <g stroke="#C5A46D" strokeWidth="2.5" fill="none">
                  {/* Heavy Structural Mullion Box */}
                  <rect x="130" y="30" width="140" height="170" rx="2" />
                  {/* Internal I-Beam Stiffener Web */}
                  <line x1="200" y1="30" x2="200" y2="200" stroke="#38bdf8" strokeWidth="2" />
                  {/* Screw Ports at Corners */}
                  <circle cx="150" cy="50" r="5" stroke="#FFFFFF" strokeWidth="1.5" />
                  <circle cx="250" cy="50" r="5" stroke="#FFFFFF" strokeWidth="1.5" />
                  <circle cx="150" cy="180" r="5" stroke="#FFFFFF" strokeWidth="1.5" />
                  <circle cx="250" cy="180" r="5" stroke="#FFFFFF" strokeWidth="1.5" />
                </g>
              )}

              {/* Dimensional Callout Lines */}
              <g stroke="#66727D" strokeWidth="1" strokeDasharray="2 2">
                <line x1="40" y1="30" x2="40" y2="210" />
                <line x1="35" y1="30" x2="45" y2="30" strokeDasharray="none" stroke="#C5A46D" />
                <line x1="35" y1="210" x2="45" y2="210" strokeDasharray="none" stroke="#C5A46D" />
              </g>
              <text x="25" y="125" fill="#C5A46D" fontSize="10" fontFamily="monospace" transform="rotate(-90 25,125)">
                {selectedDrawing?.dimensions.split("×")[1] || "Height"}
              </text>
            </svg>
          </div>

          <div className="absolute bottom-3 right-4 text-[10px] text-textgrey font-mono z-10">
            Scale: 1:1 CAD Vector • Cardinal System
          </div>
        </div>
      </div>
    </div>
  );
}
