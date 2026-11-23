"use client";

import React, { useState } from "react";
import { Download } from "lucide-react";
import SystemBrochureModal from "./SystemBrochureModal";

interface SystemBrochureClientCTAProps {
  systemCode: string;
  systemName: string;
  nominalSize?: string;
  category: string;
  specsSummary?: Record<string, string>;
}

export default function SystemBrochureClientCTA({
  systemCode,
  systemName,
  nominalSize,
  category,
  specsSummary,
}: SystemBrochureClientCTAProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="px-6 py-3.5 rounded-sm bg-charcoal hover:bg-graphite border border-graphite-border hover:border-gold/50 text-white font-heading font-medium text-xs tracking-wider uppercase transition-all flex items-center gap-2 group"
      >
        <Download className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
        <span>Download System Brochure</span>
      </button>

      <SystemBrochureModal
        systemCode={systemCode}
        systemName={systemName}
        nominalSize={nominalSize}
        category={category}
        specsSummary={specsSummary}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
