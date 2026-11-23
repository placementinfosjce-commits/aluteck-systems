import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Wrench, ClipboardCheck, Users, Headphones, Sparkles } from "lucide-react";
import { INSTALLATION_STEPS } from "@/data/company";

const stepIcons = [
  ClipboardCheck,
  Users,
  ShieldCheck,
  CheckCircle2,
  Wrench,
  Headphones,
];

export default function InstallationSupportSection() {
  return (
    <section id="support" className="py-20 lg:py-28 bg-graphite relative border-b border-graphite-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-heading uppercase tracking-[0.25em] text-gold font-bold">
            DEPENDABLE EXECUTION
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Professional Installation. Dependable Support.
          </h2>
          <p className="text-xs sm:text-sm text-textgrey leading-relaxed">
            Our service approach extends beyond product selection, with attention to installation planning, operational performance, maintenance guidance and timely customer communication.
          </p>
        </div>

        {/* 6 Service Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {INSTALLATION_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx] || CheckCircle2;
            return (
              <div
                key={step.number}
                className="p-6 rounded-sm bg-charcoal/80 border border-graphite-border hover:border-gold/40 transition-colors shadow-lg relative group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded bg-graphite flex items-center justify-center text-gold border border-graphite-border">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-mono font-bold text-textgrey/50 group-hover:text-gold transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-sm text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-textgrey leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Professional Installation Feature Banner */}
        <div className="relative rounded-sm overflow-hidden border border-graphite-border bg-charcoal shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-5">
              <span className="text-[10px] uppercase tracking-widest text-gold font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                Engineering Site Standards
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white leading-tight">
                Trained Technicians. Certified Weather Sealing.
              </h3>
              <p className="text-xs sm:text-sm text-lightgrey leading-relaxed">
                Every installation is coordinated by specialized fenestration teams trained in laser plumb alignment, certified chemical anchor depths, and multi-tier weather gasket fitting to ensure effortless glide and verified water tightness under heavy monsoon rains.
              </p>

              <div className="pt-2">
                <a
                  href="#enquiry"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-charcoal font-heading font-semibold text-xs tracking-wider uppercase transition-all shadow-md"
                >
                  <span>Request Installation Assistance</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-72 lg:h-full min-h-[300px]">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1200&q=80"
                alt="Alutecksystems Professional Installation Team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal lg:via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
