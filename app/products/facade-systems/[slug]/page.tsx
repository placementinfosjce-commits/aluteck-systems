import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowRight,
  Download,
  Phone,
  ShieldCheck,
  CheckCircle2,
  FileText,
  HelpCircle,
  ExternalLink,
  Layers,
  ChevronRight,
  Sparkles,
  AlertTriangle,
  Compass,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ColourFinishSelector from "@/components/products/ColourFinishSelector";
import SystemBrochureClientCTA from "@/components/products/SystemBrochureClientCTA";
import { FACADE_SYSTEMS_DATA, FacadeSystem } from "@/data/products-facade";
import { COMPANY_INFO } from "@/data/company";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return FACADE_SYSTEMS_DATA.map((facade) => ({
    slug: facade.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const facade = FACADE_SYSTEMS_DATA.find((f) => f.slug === params.slug);
  if (!facade) return { title: "Façade System Not Found" };

  return {
    title: `${facade.name} | Architectural Façade Systems`,
    description: facade.shortDesc,
    openGraph: {
      title: `${facade.name} | ALUTECKSYSTEMS`,
      description: facade.shortDesc,
      images: [{ url: facade.heroImage }],
    },
  };
}

export default function FacadeDetailPage({ params }: PageProps) {
  const facade = FACADE_SYSTEMS_DATA.find((f) => f.slug === params.slug);

  if (!facade) {
    notFound();
  }

  // Related systems
  const relatedSystems = FACADE_SYSTEMS_DATA.filter((f) =>
    facade.relatedSystems.includes(f.slug)
  ).slice(0, 3);

  // WhatsApp enquiry pre-filled text
  const waText = `Hello Alutecksystems, I am inquiring about technical design and quotation for your ${facade.name} solution.`;
  const waUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(waText)}`;

  return (
    <div className="bg-charcoal min-h-screen pb-24 text-lightgrey">
      {/* 1. FULL-WIDTH HERO PHOTOGRAPH */}
      <section className="relative py-14 lg:py-24 bg-graphite border-b border-graphite-border overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('${facade.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Products", href: "/products/facade-systems" },
              { label: "Façade Systems", href: "/products/facade-systems" },
              { label: facade.name },
            ]}
          />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded bg-gold/15 text-gold text-xs font-mono font-bold uppercase">
                  Façade Engineering
                </span>
                <span className="text-xs text-textgrey font-mono">
                  Saint-Gobain Glass & Jindal 6063-T6
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
                {facade.name}
              </h1>

              <p className="text-base text-gold font-light">
                {facade.tagline}
              </p>

              <p className="text-xs sm:text-sm text-lightgrey/90 leading-relaxed max-w-2xl">
                {facade.shortDesc}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <a
                  href="#enquiry-cta"
                  className="px-6 py-3.5 rounded-sm bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-charcoal font-heading font-semibold text-xs tracking-wider uppercase transition-all shadow-lg flex items-center gap-2"
                >
                  <span>Request Project Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {/* Download System Brochure Trigger */}
                <SystemBrochureClientCTA
                  systemCode={facade.slug.toUpperCase()}
                  systemName={facade.name}
                  nominalSize="Architectural Grid"
                  category="Architectural Façade Systems"
                  specsSummary={{
                    "Glass System": facade.saintGobainGlazing.recommendedGlass,
                    "Aluminium Subframe": facade.jindalFraming.alloy,
                    "Hardware Standard": "AISI 316 / High-tensile fasteners",
                    "Standards Compliance": facade.standardsCompliance.join(", "),
                  }}
                />
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] rounded-sm overflow-hidden border border-graphite-border shadow-2xl">
              <Image
                src={facade.heroImage}
                alt={facade.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Design Notice Alert */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="p-4 rounded-sm bg-charcoal border border-gold/40 shadow-xl flex items-start gap-3 text-xs">
          <AlertTriangle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
          <p className="text-textgrey leading-relaxed">
            <strong className="text-white">Engineering Design Review Note:</strong> The descriptions and details presented on this page represent engineered system frameworks. Actual glass thickness, interlayer, mullion moment of inertia (Ixx), and anchor loads must be finalized through project-specific structural engineering shop drawings adhering to IS 16231, IS 875 (Part 3), and NBC 2016.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
        {/* 2. OVERVIEW & 3. SUITABLE APPLICATIONS */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[10px] uppercase font-mono tracking-widest text-gold block">
              Architectural Concept
            </span>
            <h2 className="text-2xl font-heading font-bold text-white">
              System Engineering & Design Intent
            </h2>
            <p className="text-xs sm:text-sm text-lightgrey leading-relaxed">
              {facade.overview}
            </p>
          </div>

          <div className="lg:col-span-5 p-6 rounded-sm bg-graphite border border-graphite-border space-y-4">
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold" />
              <span>Suitable Applications</span>
            </h3>
            <ul className="space-y-2 text-xs">
              {facade.applications.map((app, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. KEY FEATURES */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-mono tracking-widest text-gold block">
              Key Capabilities
            </span>
            <h2 className="text-2xl font-heading font-bold text-white">
              System Features & Performance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facade.keyFeatures.map((feat, i) => (
              <div
                key={i}
                className="p-5 rounded-sm bg-graphite border border-graphite-border space-y-2 hover:border-gold/40 transition-colors"
              >
                <h4 className="font-heading font-semibold text-sm text-gold">
                  {feat.title}
                </h4>
                <p className="text-xs text-textgrey leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. SYSTEM COMPONENTS & 6. SAINT-GOBAIN & 7. JINDAL */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Components */}
          <div className="lg:col-span-6 p-6 rounded-sm bg-graphite border border-graphite-border space-y-4">
            <h3 className="font-heading font-bold text-base text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-gold" />
              <span>5. System Components</span>
            </h3>
            <div className="space-y-2.5 text-xs">
              {facade.components.map((comp, idx) => (
                <div key={idx} className="p-3 rounded bg-charcoal border border-graphite-border flex flex-col gap-0.5">
                  <span className="font-bold text-white">{comp.name}</span>
                  <span className="text-[11px] text-textgrey font-mono">{comp.specification}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Saint-Gobain & Jindal Specs */}
          <div className="lg:col-span-6 space-y-6">
            {/* Saint-Gobain Box */}
            <div className="p-6 rounded-sm bg-graphite border border-graphite-border space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold" />
                <h3 className="font-heading font-bold text-base text-white">
                  6. Saint-Gobain Glazing Considerations
                </h3>
              </div>
              <p className="text-xs text-lightgrey leading-relaxed">
                {facade.saintGobainGlazing.description}
              </p>
              <div className="p-2.5 rounded bg-charcoal border border-gold/30 text-xs font-mono text-gold">
                Recommended: {facade.saintGobainGlazing.recommendedGlass}
              </div>
            </div>

            {/* Jindal Aluminium Box */}
            <div className="p-6 rounded-sm bg-graphite border border-graphite-border space-y-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <h3 className="font-heading font-bold text-base text-white">
                  7. Jindal Aluminium Framing (6063-T6)
                </h3>
              </div>
              <p className="text-xs text-lightgrey leading-relaxed">
                {facade.jindalFraming.profileDetails}
              </p>
              <div className="p-2.5 rounded bg-charcoal border border-graphite-border text-xs font-mono text-white">
                Alloy & Temper: {facade.jindalFraming.alloy}
              </div>
            </div>
          </div>
        </section>

        {/* 8. HARDWARE & FIXING ARRANGEMENTS & 9. PROFILE DRAWINGS */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 p-6 rounded-sm bg-graphite border border-graphite-border space-y-3">
            <h3 className="font-heading font-bold text-base text-white">
              8. Hardware & Fixing Arrangements
            </h3>
            <p className="text-xs text-lightgrey leading-relaxed">
              {facade.hardwareAndFixing}
            </p>
            <div className="space-y-1 pt-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-gold block">
                Standards Compliance:
              </span>
              <ul className="text-xs text-textgrey space-y-1">
                {facade.standardsCompliance.map((std, i) => (
                  <li key={i} className="font-mono text-[11px]">• {std}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3">
            <h3 className="font-heading font-bold text-base text-white">
              9. Engineering Profile Drawings & Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {facade.profileDrawings.map((draw) => (
                <div key={draw.id} className="p-4 rounded-sm bg-charcoal border border-graphite-border space-y-2">
                  <span className="text-[10px] font-mono text-gold px-2 py-0.5 rounded bg-gold/10">
                    {draw.sectionNo}
                  </span>
                  <h4 className="font-heading font-semibold text-xs text-white">
                    {draw.title}
                  </h4>
                  <p className="text-[11px] text-textgrey">
                    {draw.description}
                  </p>
                  <span className="text-[10px] font-mono text-lightgrey block">
                    Dims: {draw.dimensions}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. PRODUCT / PROJECT IMAGE SLIDER & GALLERY */}
        <section className="space-y-4">
          <h3 className="font-heading font-bold text-base text-white">
            10. Architectural Installations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {facade.galleryImages.map((img, i) => (
              <div key={i} className="relative aspect-[16/10] rounded-sm overflow-hidden border border-graphite-border group">
                <Image
                  src={img}
                  alt={`${facade.name} Installation ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 text-xs font-mono text-gold">
                  Elevation Detail {i + 1}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 11. COLOUR AND FINISH OPTIONS */}
        <section>
          <ColourFinishSelector systemName={facade.name} />
        </section>

        {/* 12. TECHNICAL SPECIFICATIONS TABLE */}
        <section className="space-y-4">
          <h3 className="font-heading font-bold text-base text-white">
            12. Technical Specifications
          </h3>
          <div className="overflow-x-auto rounded-sm border border-graphite-border">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-graphite text-white uppercase text-[10px] tracking-wider border-b border-graphite-border">
                <tr>
                  <th className="p-3">Specification Parameter</th>
                  <th className="p-3">Engineering Criteria</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-graphite-border bg-charcoal">
                {facade.specifications.map((spec, i) => (
                  <tr key={i} className="hover:bg-graphite/40 transition-colors">
                    <td className="p-3 font-sans text-lightgrey font-medium">{spec.label}</td>
                    <td className="p-3 text-gold">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 13. WARRANTY & 14. INSTALLATION CONSIDERATIONS */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 p-6 rounded-sm bg-graphite border border-graphite-border space-y-4">
            <h3 className="font-heading font-bold text-base text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>13. Warranty Information</span>
            </h3>
            <div className="space-y-2 text-xs font-mono">
              <div className="p-2.5 rounded bg-charcoal border border-graphite-border">
                <span className="text-textgrey block">Structural Framing:</span>
                <span className="text-white">{facade.warranty.structural}</span>
              </div>
              <div className="p-2.5 rounded bg-charcoal border border-graphite-border">
                <span className="text-textgrey block">Glazing / Coating:</span>
                <span className="text-white">{facade.warranty.glazing} • {facade.warranty.coating}</span>
              </div>
              <div className="p-2.5 rounded bg-charcoal border border-graphite-border">
                <span className="text-textgrey block">Installation:</span>
                <span className="text-white">{facade.warranty.installation}</span>
              </div>
            </div>
            <p className="text-[11px] text-textgrey leading-relaxed">
              {facade.warranty.disclaimer}
            </p>
          </div>

          <div className="lg:col-span-6 p-6 rounded-sm bg-graphite border border-graphite-border space-y-4">
            <h3 className="font-heading font-bold text-base text-white flex items-center gap-2">
              <Compass className="w-4 h-4 text-gold" />
              <span>14. Installation Considerations</span>
            </h3>
            <ul className="space-y-2.5 text-xs text-lightgrey">
              {facade.installationNotes.map((note, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 15. FAQS */}
        {facade.faqs && facade.faqs.length > 0 && (
          <section className="space-y-4">
            <h3 className="font-heading font-bold text-base text-white">
              15. Frequently Asked Questions
            </h3>
            <div className="space-y-3">
              {facade.faqs.map((faq, i) => (
                <div key={i} className="p-5 rounded bg-graphite border border-graphite-border space-y-2">
                  <h4 className="font-heading font-semibold text-sm text-white flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-gold flex-shrink-0" />
                    <span>{faq.question}</span>
                  </h4>
                  <p className="text-xs text-lightgrey leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 16. QUOTE ENQUIRY CTA */}
        <section id="enquiry-cta" className="p-8 sm:p-12 rounded-sm bg-charcoal border border-gold/40 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
              Engineering Consultation
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Plan Your {facade.name} Project
            </h2>
            <p className="text-xs sm:text-sm text-lightgrey leading-relaxed">
              Connect directly with our façade specialists. We calculate wind pressures under IS 875, specify Saint-Gobain solar-control glass, and coordinate Jindal 6063-T6 extrusion schedules.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href={`/#enquiry`}
                className="px-6 py-3.5 rounded-sm bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-charcoal font-heading font-semibold text-xs tracking-wider uppercase transition-all shadow-md flex items-center gap-2"
              >
                <span>Request {facade.name} Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-sm bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-heading font-semibold tracking-wider uppercase transition-all flex items-center gap-2 shadow"
              >
                <span>WhatsApp Consultation</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="px-5 py-3 rounded-sm bg-graphite hover:bg-graphite-light border border-graphite-border text-white text-xs font-heading font-semibold tracking-wider uppercase transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>Call Desk</span>
              </a>
            </div>
          </div>
        </section>

        {/* 17. RELATED FAÇADE SYSTEMS */}
        {relatedSystems.length > 0 && (
          <section className="space-y-6 border-t border-graphite-border pt-16">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-gold block">
                  Complementary Envelopes
                </span>
                <h3 className="text-xl font-heading font-bold text-white">
                  Related Façade Systems
                </h3>
              </div>
              <Link
                href="/products/facade-systems"
                className="text-xs text-gold hover:underline flex items-center gap-1 font-medium"
              >
                <span>View All 8 Systems</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedSystems.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/products/facade-systems/${rel.slug}`}
                  className="group p-4 rounded-sm bg-graphite border border-graphite-border hover:border-gold/50 flex items-center gap-4 transition-all"
                >
                  <div className="relative w-20 h-20 rounded-sm overflow-hidden flex-shrink-0 bg-charcoal">
                    <Image
                      src={rel.heroImage}
                      alt={rel.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading font-semibold text-xs text-white group-hover:text-gold transition-colors">
                      {rel.name}
                    </h4>
                    <span className="text-[11px] text-textgrey line-clamp-1">
                      {rel.tagline}
                    </span>
                    <span className="text-[11px] text-gold flex items-center gap-1">
                      View details →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
