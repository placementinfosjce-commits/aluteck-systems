import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowRight,
  MapPin,
  Calendar,
  CheckCircle2,
  Sparkles,
  Layers,
  ChevronRight,
  ShieldCheck,
  AlertCircle,
  Award,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PROJECTS_DATA, ProjectItem } from "@/data/projects";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return PROJECTS_DATA.map((proj) => ({
    slug: proj.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = PROJECTS_DATA.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Our Projects`,
    description: project.shortDesc,
    openGraph: {
      title: `${project.title} | ALUTECKSYSTEMS`,
      description: project.shortDesc,
      images: [{ url: project.featuredImage }],
    },
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = PROJECTS_DATA.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-charcoal min-h-screen pb-24 text-lightgrey">
      {/* Hero */}
      <section className="relative py-14 lg:py-24 bg-graphite border-b border-graphite-border overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('${project.featuredImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Our Projects", href: "/projects" },
              { label: project.title },
            ]}
          />

          <div className="mt-8 max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded bg-gold/15 text-gold text-xs font-mono font-bold uppercase">
                {project.category}
              </span>
              <span className="text-xs text-textgrey font-mono flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-gold" />
                {project.location} • Completed {project.completionYear}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              {project.title}
            </h1>

            <p className="text-sm font-mono text-gold">
              System Specification: {project.systemUsed}
            </p>

            <p className="text-sm sm:text-base text-lightgrey leading-relaxed font-light">
              {project.fullOverview}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
        {/* MANDATORY 4-LINE CHALLENGE & OUTCOME SECTION */}
        <section className="p-8 sm:p-10 rounded-sm bg-graphite border border-graphite-border shadow-2xl space-y-6">
          <div className="space-y-1 border-b border-graphite-border pb-4">
            <span className="text-[10px] uppercase font-mono tracking-widest text-gold block">
              Architectural Case Study Breakdown
            </span>
            <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-gold" />
              <span>Project Challenge & Engineering Resolution</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            {/* 1. Main Site Challenge */}
            <div className="p-5 rounded bg-charcoal border border-graphite-border space-y-2">
              <span className="text-[10px] font-mono text-gold uppercase tracking-wider block font-bold">
                1. Main Site & Architectural Challenge
              </span>
              <p className="text-lightgrey leading-relaxed">
                {project.challengeSection.siteChallenge}
              </p>
            </div>

            {/* 2. Technical Consideration */}
            <div className="p-5 rounded bg-charcoal border border-graphite-border space-y-2">
              <span className="text-[10px] font-mono text-gold uppercase tracking-wider block font-bold">
                2. Technical & Installation Consideration
              </span>
              <p className="text-lightgrey leading-relaxed">
                {project.challengeSection.technicalConsideration}
              </p>
            </div>

            {/* 3. Solution Adopted */}
            <div className="p-5 rounded bg-charcoal border border-graphite-border space-y-2">
              <span className="text-[10px] font-mono text-gold uppercase tracking-wider block font-bold">
                3. Engineered Solution Adopted
              </span>
              <p className="text-lightgrey leading-relaxed">
                {project.challengeSection.solutionAdopted}
              </p>
            </div>

            {/* 4. Final Project Outcome */}
            <div className="p-5 rounded bg-charcoal border border-gold/40 space-y-2">
              <span className="text-[10px] font-mono text-gold uppercase tracking-wider block font-bold">
                4. Final Project Outcome & Performance
              </span>
              <p className="text-lightgrey leading-relaxed">
                {project.challengeSection.finalOutcome}
              </p>
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="space-y-6">
          <h3 className="font-heading font-bold text-xl text-white">
            Project Architectural Gallery
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-[4/3] rounded-sm overflow-hidden border border-graphite-border bg-charcoal group shadow-lg"
              >
                <Image
                  src={img}
                  alt={`${project.title} Architectural Detail ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Scope of Work & Results */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 p-6 rounded-sm bg-graphite border border-graphite-border space-y-4">
            <h3 className="font-heading font-bold text-base text-white">
              Scope of Work Executed
            </h3>
            <ul className="space-y-2 text-xs">
              {project.scopeOfWork.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 p-6 rounded-sm bg-graphite border border-graphite-border space-y-4">
            <h3 className="font-heading font-bold text-base text-white">
              Verified Project Results
            </h3>
            <ul className="space-y-2.5 text-xs text-lightgrey">
              {project.results.map((res, i) => (
                <li key={i} className="p-3 rounded bg-charcoal border border-graphite-border font-medium">
                  • {res}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Consultation CTA */}
        <section className="p-8 sm:p-12 rounded-sm bg-charcoal border border-gold/40 shadow-2xl">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
              Inspired by This Project?
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Consult with Our Architectural Engineers
            </h2>
            <p className="text-xs sm:text-sm text-lightgrey leading-relaxed">
              We collaborate with project architects, interior designers, and general contractors from schematic design through final site handover.
            </p>
            <div className="pt-2">
              <Link
                href="/#enquiry"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-gradient-to-r from-gold to-gold-dark text-charcoal font-heading font-semibold text-xs tracking-wider uppercase shadow-md"
              >
                <span>Request Project Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
