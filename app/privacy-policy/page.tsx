import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { COMPANY_INFO } from "@/data/company";

export const metadata = {
  title: "Privacy Policy | ALUTECKSYSTEMS",
  description: "Privacy policy and client data protection practices of ALUTECKSYSTEMS.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-charcoal min-h-screen pb-24 text-lightgrey">
      <section className="py-14 bg-graphite border-b border-graphite-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mt-4">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-gold mt-1">
            Last Updated: November 2024 • Version 1.0
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="prose prose-invert max-w-none text-xs sm:text-sm leading-relaxed space-y-6 text-lightgrey">
          <p>
            At <strong>{COMPANY_INFO.legalName}</strong> (referred to as "ALUTECKSYSTEMS", "we", "us", or "our"), we respect your privacy and are committed to safeguarding the personal and architectural project information you share with us.
          </p>

          <h3 className="text-base font-heading font-bold text-white pt-2">
            1. Information We Collect
          </h3>
          <p>
            When you request an architectural quotation, download technical catalogues, or submit a customer support inquiry, we may collect:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-textgrey">
            <li>Contact details: Name, professional title, phone number, email address, city.</li>
            <li>Project information: Floor plans, elevation dimensions, site location, system series of interest.</li>
            <li>Customer service data: Details of complaints, photo uploads, site access logistics.</li>
            <li>Technical browsing data: Anonymous device IP, browser type, pages viewed, cookie preferences.</li>
          </ul>

          <h3 className="text-base font-heading font-bold text-white pt-2">
            2. How We Use Your Information
          </h3>
          <p>
            Your information is used strictly to provide architectural engineering consultations, prepare technical quotes, coordinate certified site installation teams, and service warranty tickets. We do not sell or trade your data to third-party marketing entities.
          </p>

          <h3 className="text-base font-heading font-bold text-white pt-2">
            3. Data Security & Storage
          </h3>
          <p>
            All submitted enquiries and complaints are stored securely in encrypted databases. Access is restricted to authorized company engineers and support personnel under strict role-based controls.
          </p>

          <h3 className="text-base font-heading font-bold text-white pt-2">
            4. Contact Our Privacy Officer
          </h3>
          <p>
            For privacy inquiries or to request data rectification, email our compliance team at{" "}
            <a href={`mailto:${COMPANY_INFO.email}`} className="text-gold underline">
              {COMPANY_INFO.email}
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
