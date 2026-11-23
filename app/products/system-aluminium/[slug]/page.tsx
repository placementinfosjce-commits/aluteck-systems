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
  Sliders,
  Sparkles,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import CadProfileViewer from "@/components/products/CadProfileViewer";
import ColourFinishSelector from "@/components/products/ColourFinishSelector";
import SystemBrochureClientCTA from "@/components/products/SystemBrochureClientCTA";
import { ALUMINIUM_SERIES_DATA, AluminiumSeries } from "@/data/products-aluminium";
import { COMPANY_INFO } from "@/data/company";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return ALUMINIUM_SERIES_DATA.map((series) => ({
    slug: series.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const series = ALUMINIUM_SERIES_DATA.find((s) => s.slug === params.slug);
  if (!series) return { title: "Series Not Found" };

  return {
    title: `${series.name} (${series.seriesCode}) | System Aluminium`,
    description: series.shortDesc,
    openGraph: {
      title: `${series.name} | ALUTECKSYSTEMS`,
      description: series.shortDesc,
      images: [{ url: series.heroImage }],
    },
  };
}

export default function AluminiumSeriesDetailPage({ params }: PageProps) {
  const series = ALUMINIUM_SERIES_DATA.find((s) => s.slug === params.slug);

  if (!series) {
    notFound();
  }

  // Find related products
  const relatedProducts = ALUMINIUM_SERIES_DATA.filter((s) =>
    series.relatedSeries.includes(s.slug)
  ).slice(0, 3);

  // WhatsApp enquiry pre-filled text
  const waText = `Hello Alutecksystems, I am inquiring about technical specifications and a quotation for the ${series.name} (${series.seriesCode}) system.`;
  const waUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(waText)}`;

  return (
    <div className="bg-charcoal min-h-screen pb-24 text-lightgrey">
      {/* A. PRODUCT HERO */}
      <section className="relative py-12 lg:py-20 bg-graphite border-b border-graphite-border overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('${series.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Products", href: "/products/system-aluminium" },
              { label: series.familyName, href: `/products/system-aluminium#${series.familySlug}` },
              { label: series.name },
            ]}
          />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded bg-gold/15 text-gold text-xs font-mono font-bold">
                  {series.seriesCode}
                </span>
                <span className="text-xs text-textgrey font-mono uppercase tracking-wider">
                  {series.familyName} • {series.nominalSize}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
                {series.name}
              </h1>

              <p className="text-base text-gold font-light">
                {series.tagline}
              </p>

              <p className="text-xs sm:text-sm text-lightgrey/90 leading-relaxed max-w-2xl">
                {series.shortDesc}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <a
                  href="#enquiry-cta"
                  className="px-6 py-3.5 rounded-sm bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-charcoal font-heading font-semibold text-xs tracking-wider uppercase transition-all shadow-lg flex items-center gap-2"
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {/* Download System Brochure Trigger */}
                <SystemBrochureClientCTA
                  systemCode={series.seriesCode}
                  systemName={series.name}
                  nominalSize={series.nominalSize}
                  category={series.familyName}
                  specsSummary={{
                    "Nominal Size": series.nominalSize,
                    "Alloy Grade": "Aluminium 6063-T6",
                    "Glazing Range": series.shutterSpecs?.[0]?.glassCompatibility || "5–24 mm",
                    "Catalogue Source": "Cardinal Aluminium Official Catalogue",
                  }}
                />
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-sm overflow-hidden border border-graphite-border shadow-2xl">
              <Image
                src={series.heroImage}
                alt={series.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
        {/* B. PRODUCT OVERVIEW & C. APPLICATIONS */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[10px] uppercase font-mono tracking-widest text-gold block">
              Architectural Overview
            </span>
            <h2 className="text-2xl font-heading font-bold text-white">
              Engineering Design & Characteristics
            </h2>
            <p className="text-xs sm:text-sm text-lightgrey leading-relaxed">
              {series.fullOverview}
            </p>
          </div>

          <div className="lg:col-span-5 p-6 rounded-sm bg-graphite border border-graphite-border space-y-4">
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold" />
              <span>Suitable Applications</span>
            </h3>
            <ul className="space-y-2 text-xs">
              {series.applications.map((app, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* D. VERIFIED FEATURES */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-mono tracking-widest text-gold block">
              Cardinal Verified Specifications
            </span>
            <h2 className="text-2xl font-heading font-bold text-white">
              System Engineering Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {series.features.map((feat, i) => (
              <div
                key={i}
                className="p-5 rounded-sm bg-graphite border border-graphite-border space-y-2 hover:border-gold/40 transition-colors"
              >
                <h4 className="font-heading font-semibold text-sm text-white text-gold">
                  {feat.title}
                </h4>
                <p className="text-xs text-textgrey leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* F. PROFILE TECHNICAL DRAWINGS (2D CAD BLUEPRINT GALLERY) */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-mono tracking-widest text-gold block">
              Section Schedules & Extrusions
            </span>
            <h2 className="text-2xl font-heading font-bold text-white">
              2D Profile Drawings & Technical Blueprints
            </h2>
            <p className="text-xs text-textgrey">
              Zoomable 2D CAD engineering cross-sections verified against the official Cardinal Aluminium catalogue.
            </p>
          </div>

          <CadProfileViewer
            seriesName={series.name}
            drawings={series.profileDrawings}
          />
        </section>

        {/* I. DETAILED TECHNICAL SPECIFICATIONS TABLE */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-mono tracking-widest text-gold block">
              Official Technical Data
            </span>
            <h2 className="text-2xl font-heading font-bold text-white">
              Catalogue Profile Schedules
            </h2>
          </div>

          {/* Track Profile Table */}
          {series.trackSpecs && series.trackSpecs.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-heading font-bold text-sm text-gold">
                1. Main Track / Frame Profile Specifications
              </h3>
              <div className="overflow-x-auto rounded-sm border border-graphite-border">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-graphite text-white uppercase text-[10px] tracking-wider border-b border-graphite-border">
                    <tr>
                      <th className="p-3">System / Frame</th>
                      <th className="p-3">Section No.</th>
                      <th className="p-3">Width</th>
                      <th className="p-3">Height</th>
                      <th className="p-3">Weight (kg/m)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-graphite-border bg-charcoal">
                    {series.trackSpecs.map((t, idx) => (
                      <tr key={idx} className="hover:bg-graphite/40 transition-colors">
                        <td className="p-3 font-sans font-medium text-white">{t.system || t.type}</td>
                        <td className="p-3 text-gold font-bold">{t.sectionNo}</td>
                        <td className="p-3">{t.width}</td>
                        <td className="p-3">{t.height}</td>
                        <td className="p-3 text-lightgrey">{t.weight}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Shutter Profile Table */}
          {series.shutterSpecs && series.shutterSpecs.length > 0 && (
            <div className="space-y-3 pt-4">
              <h3 className="font-heading font-bold text-sm text-gold">
                2. Shutter & Glass Retention Specifications
              </h3>
              <div className="overflow-x-auto rounded-sm border border-graphite-border">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-graphite text-white uppercase text-[10px] tracking-wider border-b border-graphite-border">
                    <tr>
                      <th className="p-3">Section No.</th>
                      <th className="p-3">Shutter Type</th>
                      <th className="p-3">Glass Compatibility</th>
                      <th className="p-3">Weight / Dimensions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-graphite-border bg-charcoal">
                    {series.shutterSpecs.map((s, idx) => (
                      <tr key={idx} className="hover:bg-graphite/40 transition-colors">
                        <td className="p-3 text-gold font-bold">{s.sectionNo}</td>
                        <td className="p-3 font-sans font-medium text-white">{s.shutterType}</td>
                        <td className="p-3 text-lightgrey">{s.glassCompatibility || s.spec || "As specified"}</td>
                        <td className="p-3">
                          {s.weight ? `${s.weight}` : s.width ? `${s.width} × ${s.height}` : "Catalogue standard"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Additional Components & Accessories Table if present */}
          {series.accessories && series.accessories.length > 0 && (
            <div className="space-y-3 pt-4">
              <h3 className="font-heading font-bold text-sm text-gold">
                3. Additional Components & Reducers
              </h3>
              <div className="overflow-x-auto rounded-sm border border-graphite-border">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-graphite text-white uppercase text-[10px] tracking-wider border-b border-graphite-border">
                    <tr>
                      <th className="p-3">Component Description</th>
                      <th className="p-3">Section Number</th>
                      <th className="p-3">Weight / Compatibility</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-graphite-border bg-charcoal">
                    {series.accessories.map((acc, idx) => (
                      <tr key={idx} className="hover:bg-graphite/40 transition-colors">
                        <td className="p-3 font-sans text-white">{acc.component}</td>
                        <td className="p-3 text-gold font-bold">{acc.sectionNo}</td>
                        <td className="p-3">{acc.weight || "System compatible"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </section>

        {/* H. COLOUR AND FINISH SELECTOR (170+ FINISHES) */}
        <section>
          <ColourFinishSelector systemName={series.name} />
        </section>

        {/* E. WARRANTY SECTION */}
        <section className="p-8 rounded-sm bg-graphite border border-graphite-border space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-mono tracking-widest text-gold block">
              Quality Assurance
            </span>
            <h2 className="text-xl font-heading font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-gold" />
              <span>Warranty & Certification Schedule</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-4 rounded bg-charcoal border border-graphite-border">
              <span className="text-textgrey block mb-1">Product Extrusion:</span>
              <span className="text-white font-bold">{series.warranty.product}</span>
            </div>
            <div className="p-4 rounded bg-charcoal border border-graphite-border">
              <span className="text-textgrey block mb-1">Surface Finish:</span>
              <span className="text-white font-bold">{series.warranty.finish}</span>
            </div>
            <div className="p-4 rounded bg-charcoal border border-graphite-border">
              <span className="text-textgrey block mb-1">Fittings & Hardware:</span>
              <span className="text-white font-bold">{series.warranty.hardware}</span>
            </div>
            <div className="p-4 rounded bg-charcoal border border-graphite-border">
              <span className="text-textgrey block mb-1">Workmanship:</span>
              <span className="text-white font-bold">{series.warranty.workmanship}</span>
            </div>
          </div>

          <p className="text-[11px] text-textgrey leading-relaxed">
            <strong>Warranty Conditions:</strong> {series.warranty.notes}
          </p>
        </section>

        {/* J. SYSTEM FAQ */}
        {series.faqs && series.faqs.length > 0 && (
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-mono tracking-widest text-gold block">
                Technical Inquiries
              </span>
              <h2 className="text-2xl font-heading font-bold text-white">
                Frequently Asked Questions about {series.seriesCode}
              </h2>
            </div>

            <div className="space-y-3">
              {series.faqs.map((faq, i) => (
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

        {/* K. ENQUIRY CTA */}
        <section id="enquiry-cta" className="p-8 sm:p-12 rounded-sm bg-charcoal border border-gold/40 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
              Planning a Project with This System?
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Consult with Our Engineers on {series.name}
            </h2>
            <p className="text-xs sm:text-sm text-lightgrey leading-relaxed">
              Share your structural dimensions or architectural elevation drawings. We calculate glass thickness, interlock wind deflection, and deliver comprehensive project quotes.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href={`/#enquiry`}
                className="px-6 py-3.5 rounded-sm bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-charcoal font-heading font-semibold text-xs tracking-wider uppercase transition-all shadow-md flex items-center gap-2"
              >
                <span>Request Quote for {series.seriesCode}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-sm bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-heading font-semibold tracking-wider uppercase transition-all flex items-center gap-2 shadow"
              >
                <span>WhatsApp Enquiry</span>
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

        {/* L. RELATED PRODUCTS */}
        {relatedProducts.length > 0 && (
          <section className="space-y-6 border-t border-graphite-border pt-16">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-gold block">
                  Complementary Fenestration
                </span>
                <h3 className="text-xl font-heading font-bold text-white">
                  Related Aluminium Systems
                </h3>
              </div>
              <Link
                href="/products/system-aluminium"
                className="text-xs text-gold hover:underline flex items-center gap-1 font-medium"
              >
                <span>All Aluminium Systems</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/products/system-aluminium/${rel.slug}`}
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
                    <span className="text-[10px] font-mono text-gold block font-bold">
                      {rel.seriesCode}
                    </span>
                    <h4 className="font-heading font-semibold text-xs text-white group-hover:text-gold transition-colors">
                      {rel.name}
                    </h4>
                    <span className="text-[11px] text-textgrey flex items-center gap-1">
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
