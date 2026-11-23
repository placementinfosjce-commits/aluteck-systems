import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { COMPANY_INFO } from "@/data/company";

export const metadata = {
  title: "Cookie Policy | ALUTECKSYSTEMS",
  description: "Cookie and tracking technologies policy of ALUTECKSYSTEMS.",
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-charcoal min-h-screen pb-24 text-lightgrey">
      <section className="py-14 bg-graphite border-b border-graphite-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Cookie Policy" }]} />
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mt-4">
            Cookie Policy
          </h1>
          <p className="text-xs font-mono text-gold mt-1">
            Last Updated: November 2024 • Version 1.0
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="prose prose-invert max-w-none text-xs sm:text-sm leading-relaxed space-y-6 text-lightgrey">
          <p>
            This Cookie Policy explains how <strong>{COMPANY_INFO.legalName}</strong> uses cookies and similar technologies to improve website performance, remember user preferences (such as selected color swatches and drawing zoom settings), and analyze traffic patterns.
          </p>

          <h3 className="text-base font-heading font-bold text-white pt-2">
            1. Cookie Categories We Use
          </h3>
          <div className="space-y-3">
            <div className="p-3.5 rounded bg-graphite border border-graphite-border">
              <strong className="text-white block font-heading">Strictly Necessary Cookies</strong>
              <span className="text-textgrey text-xs">Essential for site security, navigation session persistence, and form anti-spam tokens. Always active.</span>
            </div>
            <div className="p-3.5 rounded bg-graphite border border-graphite-border">
              <strong className="text-white block font-heading">Functional Cookies</strong>
              <span className="text-textgrey text-xs">Remember selected system swatches, blueprint zoom scale, and chat preferences.</span>
            </div>
            <div className="p-3.5 rounded bg-graphite border border-graphite-border">
              <strong className="text-white block font-heading">Analytics Cookies</strong>
              <span className="text-textgrey text-xs">Anonymous aggregate metrics via Google Analytics 4 to understand which product series receive the most interest.</span>
            </div>
            <div className="p-3.5 rounded bg-graphite border border-graphite-border">
              <strong className="text-white block font-heading">Marketing Cookies</strong>
              <span className="text-textgrey text-xs">Used only with explicit consent to deliver tailored architectural fenestration updates.</span>
            </div>
          </div>

          <h3 className="text-base font-heading font-bold text-white pt-2">
            2. Managing Your Consent
          </h3>
          <p>
            You can modify your cookie settings at any time using our Cookie Consent manager available in the website footer, or by clearing cookies in your browser settings.
          </p>
        </div>
      </div>
    </div>
  );
}
