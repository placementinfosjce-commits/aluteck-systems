import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { COMPANY_INFO } from "@/data/company";

export const metadata = {
  title: "Terms and Conditions | ALUTECKSYSTEMS",
  description: "Terms and conditions of website use and architectural inquiries.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-charcoal min-h-screen pb-24 text-lightgrey">
      <section className="py-14 bg-graphite border-b border-graphite-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Terms and Conditions" }]} />
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mt-4">
            Terms & Conditions
          </h1>
          <p className="text-xs font-mono text-gold mt-1">
            Last Updated: November 2024
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="prose prose-invert max-w-none text-xs sm:text-sm leading-relaxed space-y-6 text-lightgrey">
          <p>
            Welcome to <strong>ALUTECKSYSTEMS</strong>. By accessing or using this website, you agree to be bound by the following terms and conditions.
          </p>

          <h3 className="text-base font-heading font-bold text-white pt-2">
            1. Technical Specifications & Engineering Calculations
          </h3>
          <p>
            The drawings, profile dimensions, weights, and glass compatibilities displayed on this website are derived from Cardinal Aluminium catalogues, Jindal Aluminium extrusion specifications, and Saint-Gobain glass engineering schedules. All website content is for illustrative and preliminary specification purposes.
          </p>
          <p className="text-textgrey">
            Final structural wind load calculations (under IS 875 Part 3), glass safety compliance (IS 16231), and anchor details must be verified by certified structural engineers and signed off via approved project shop drawings before manufacturing.
          </p>

          <h3 className="text-base font-heading font-bold text-white pt-2">
            2. Intellectual Property
          </h3>
          <p>
            All brand assets, 2D vector CAD drawings, design system layouts, and written content are the exclusive intellectual property of {COMPANY_INFO.legalName}.
          </p>

          <h3 className="text-base font-heading font-bold text-white pt-2">
            3. Inquiries and Quotations
          </h3>
          <p>
            Submission of an enquiry or consultation request does not constitute a binding fabrication contract. Official quotations are issued separately under formal commercial terms following site survey verification.
          </p>
        </div>
      </div>
    </div>
  );
}
