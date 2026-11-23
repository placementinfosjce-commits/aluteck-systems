"use client";

import React, { useState } from "react";
import { Download, FileText, X, Check, Printer, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

interface SystemBrochureModalProps {
  systemCode: string;
  systemName: string;
  nominalSize?: string;
  category: string;
  specsSummary?: Record<string, string>;
  isOpen: boolean;
  onClose: () => void;
}

export default function SystemBrochureModal({
  systemCode,
  systemName,
  nominalSize,
  category,
  specsSummary,
  isOpen,
  onClose,
}: SystemBrochureModalProps) {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => {
      // Create text-based certified datasheet blob
      const content = `
=====================================================
ALUTECKSYSTEMS — TECHNICAL SYSTEM BROCHURE & SPECIFICATION
=====================================================
SYSTEM: ${systemName} (${systemCode})
CATEGORY: ${category}
NOMINAL SYSTEM SIZE: ${nominalSize || "Standard System"}
DATE OF ISSUE: November 2024
MANUFACTURER SPECIFICATION: Cardinal Aluminium / Saint-Gobain Certified

1. SYSTEM OVERVIEW
${systemName} is engineered with high-strength architectural aluminium alloy 6063-T6,
adhering to IS 16231 (use of glass in buildings) and IS 875 (wind load design).

2. KEY VERIFIED SPECIFICATIONS
${
  specsSummary
    ? Object.entries(specsSummary)
        .map(([k, v]) => `• ${k}: ${v}`)
        .join("\n")
    : "• Full profile drawings and weight schedules as verified in technical catalogue."
}

3. GLAZING & GASKETING
• Compatible with Saint-Gobain single, laminated, and double glazed units (DGU)
• EPDM continuous co-extruded weather seals (-30°C to +50°C rating)

4. WARRANTY SCHEDULE
• Extrusion Structural Integrity: 10 Years
• Qualicoat Architectural Surface Finish: 10 Years
• Approved Hardware & Rollers: 2–3 Years

For engineering consultations and CAD shop drawings:
Email: ${COMPANY_INFO.email}
Phone: ${COMPANY_INFO.phone}
Website: https://alutecksystems.com
=====================================================
      `.trim();

      const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `ALUTECK_${systemCode.replace(/[^a-zA-Z0-9]/g, "_")}_Technical_Brochure.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-graphite border border-graphite-border rounded-sm shadow-2xl z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Top Header */}
        <div className="p-5 bg-charcoal border-b border-graphite-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-gold/15 text-gold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-gold block">
                Technical System Brochure
              </span>
              <h3 className="font-heading font-bold text-white text-base">
                {systemName} ({systemCode})
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-textgrey hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Brochure Preview Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6 text-xs text-lightgrey">
          {/* Certificate Badge */}
          <div className="p-3.5 rounded bg-charcoal border border-gold/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0" />
              <div>
                <span className="font-bold text-white block">Official System Datasheet</span>
                <span className="text-[11px] text-textgrey">Cardinal Aluminium & Saint-Gobain Architecture</span>
              </div>
            </div>
            <span className="text-[10px] font-mono text-gold px-2 py-0.5 rounded bg-gold/10 font-bold">
              Verified
            </span>
          </div>

          {/* Quick Details Table */}
          <div className="space-y-2">
            <h4 className="font-heading font-semibold text-white text-xs uppercase tracking-wider text-gold">
              System Summary
            </h4>
            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
              <div className="p-2.5 rounded bg-charcoal border border-graphite-border">
                <span className="text-textgrey block">System Code:</span>
                <span className="text-white font-bold">{systemCode}</span>
              </div>
              <div className="p-2.5 rounded bg-charcoal border border-graphite-border">
                <span className="text-textgrey block">Category:</span>
                <span className="text-white font-bold">{category}</span>
              </div>
              <div className="p-2.5 rounded bg-charcoal border border-graphite-border">
                <span className="text-textgrey block">Profile Alloy:</span>
                <span className="text-white font-bold">Aluminium 6063-T6</span>
              </div>
              <div className="p-2.5 rounded bg-charcoal border border-graphite-border">
                <span className="text-textgrey block">Glazing Partner:</span>
                <span className="text-white font-bold">Saint-Gobain Glass</span>
              </div>
            </div>
          </div>

          {/* Specs List if provided */}
          {specsSummary && Object.keys(specsSummary).length > 0 && (
            <div className="space-y-2">
              <h4 className="font-heading font-semibold text-white text-xs uppercase tracking-wider text-gold">
                Key Parameters
              </h4>
              <div className="bg-charcoal rounded border border-graphite-border divide-y divide-graphite-border text-[11px]">
                {Object.entries(specsSummary).map(([key, val], i) => (
                  <div key={i} className="p-2.5 flex justify-between">
                    <span className="text-textgrey">{key}</span>
                    <span className="text-white font-medium">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <p className="text-[11px] text-textgrey leading-relaxed italic border-t border-graphite-border pt-3">
            Note: Engineering drawings, wind load calculations, and site measurement tolerances are project-specific. Refer to approved shop drawings prior to final fabrication.
          </p>
        </div>

        {/* Action Bottom Bar */}
        <div className="p-4 bg-charcoal border-t border-graphite-border flex items-center justify-between gap-3">
          <button
            onClick={handlePrint}
            className="px-3.5 py-2 rounded border border-graphite-border hover:border-gold/40 text-textgrey hover:text-white text-xs flex items-center gap-1.5 transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Sheet</span>
          </button>

          <button
            onClick={handleDownload}
            className="px-5 py-2.5 rounded-sm bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-charcoal font-heading font-semibold text-xs tracking-wider uppercase transition-all shadow-md flex items-center gap-2"
          >
            {downloaded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Downloaded System Datasheet</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Download Brochure (TXT / PDF)</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
