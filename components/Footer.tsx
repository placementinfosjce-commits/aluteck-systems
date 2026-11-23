"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  Star,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Pin,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

interface FooterProps {
  onOpenCookiePreferences?: () => void;
}

export default function Footer({ onOpenCookiePreferences }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-950 border-t border-graphite-border text-lightgrey pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-graphite-border/70">
          {/* Column 1 — Brand */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-sm bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-lg shadow-gold/20">
                <span className="font-heading font-extrabold text-charcoal text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold tracking-wider text-white">
                  ALUTECK<span className="text-gold font-light">SYSTEMS</span>
                </span>
                <span className="text-[8px] uppercase tracking-[0.25em] text-textgrey font-medium">
                  Architectural Solutions
                </span>
              </div>
            </Link>

            <p className="text-xs text-textgrey leading-relaxed mt-2">
              {COMPANY_INFO.shortDescription}
            </p>

            <div className="flex items-center gap-2 text-xs text-gold/90 font-medium mt-1">
              <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
              <span>Engineered Architectural Quality</span>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-2.5 mt-2">
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded bg-graphite flex items-center justify-center text-textgrey hover:text-gold hover:bg-graphite-light border border-graphite-border transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded bg-graphite flex items-center justify-center text-textgrey hover:text-gold hover:bg-graphite-light border border-graphite-border transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded bg-graphite flex items-center justify-center text-textgrey hover:text-gold hover:bg-graphite-light border border-graphite-border transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded bg-graphite flex items-center justify-center text-textgrey hover:text-gold hover:bg-graphite-light border border-graphite-border transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="w-8 h-8 rounded bg-graphite flex items-center justify-center text-textgrey hover:text-gold hover:bg-graphite-light border border-graphite-border transition-colors"
              >
                <Pin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-heading text-xs uppercase tracking-widest text-gold font-semibold mb-1">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-gold/60" /> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-gold/60" /> About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-gold/60" /> Our Projects
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-gold/60" /> Blogs & Insights
                </Link>
              </li>
              <li>
                <Link href="/locate-us" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-gold/60" /> Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-gold/60" /> FAQs
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-textgrey hover:text-white transition-colors flex items-center gap-1.5 mt-2 pt-2 border-t border-graphite-border/30">
                  <ChevronRight className="w-3 h-3 text-textgrey" /> Staff Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Our Products */}
          <div className="flex flex-col gap-3">
            <h4 className="font-heading text-xs uppercase tracking-widest text-gold font-semibold mb-1">
              Our Products
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/products/system-aluminium"
                  className="hover:text-gold transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-gold/60" /> System Aluminium Windows & Doors
                </Link>
              </li>
              <li>
                <Link
                  href="/products/facade-systems"
                  className="hover:text-gold transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-gold/60" /> Architectural Façade Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/products/facade-systems/structural-glazing"
                  className="text-textgrey hover:text-lightgrey transition-colors pl-4"
                >
                  • Structural Glazing
                </Link>
              </li>
              <li>
                <Link
                  href="/products/facade-systems/curtain-wall-glazing"
                  className="text-textgrey hover:text-lightgrey transition-colors pl-4"
                >
                  • Curtain Wall Glazing
                </Link>
              </li>
              <li>
                <Link
                  href="/products/upvc-windows"
                  className="hover:text-gold transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-gold/60" /> uPVC Windows
                </Link>
              </li>
              <li>
                <Link
                  href="/products/upvc-doors"
                  className="hover:text-gold transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-gold/60" /> uPVC Doors
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 — Customer Support */}
          <div className="flex flex-col gap-3">
            <h4 className="font-heading text-xs uppercase tracking-widest text-gold font-semibold mb-1">
              Customer Support
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/customer-complaint"
                  className="hover:text-gold transition-colors flex items-center gap-1.5 font-medium text-white"
                >
                  <ChevronRight className="w-3 h-3 text-gold" /> Customer Complaint Portal
                </Link>
              </li>
              <li>
                <Link
                  href="/#support"
                  className="hover:text-gold transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-gold/60" /> Installation & After-Sales
                </Link>
              </li>
              <li>
                <Link
                  href="/locate-us"
                  className="hover:text-gold transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-gold/60" /> Locate Us / Studios
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-gold transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-gold/60" /> Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="hover:text-gold transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-gold/60" /> Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-gold transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-gold/60" /> Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5 — Contact Information */}
          <div className="flex flex-col gap-3">
            <h4 className="font-heading text-xs uppercase tracking-widest text-gold font-semibold mb-1">
              Contact & Studio
            </h4>
            <div className="space-y-2.5 text-xs text-textgrey">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {COMPANY_INFO.officeAddress.building}, {COMPANY_INFO.officeAddress.street},{" "}
                  {COMPANY_INFO.officeAddress.city}, {COMPANY_INFO.officeAddress.state} –{" "}
                  {COMPANY_INFO.officeAddress.postalCode}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>

              {/* Google Business Profile & Review Links */}
              <div className="pt-2 flex flex-col gap-1.5">
                <a
                  href={COMPANY_INFO.googleBusinessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline flex items-center gap-1 font-medium"
                >
                  <span>Google Business Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={COMPANY_INFO.googleRatingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-lightgrey hover:text-gold flex items-center gap-1"
                >
                  <Star className="w-3 h-3 fill-gold text-gold" />
                  <span>Rate Us on Google</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-textgrey gap-4">
          <div>
            © {currentYear} {COMPANY_INFO.legalName}. All Rights Reserved.
          </div>

          <div className="flex items-center flex-wrap gap-5">
            <Link href="/privacy-policy" className="hover:text-lightgrey transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms-and-conditions" className="hover:text-lightgrey transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link href="/cookie-policy" className="hover:text-lightgrey transition-colors">
              Cookie Policy
            </Link>
            <span>•</span>
            <button
              onClick={onOpenCookiePreferences}
              className="text-gold/90 hover:text-gold underline transition-colors"
            >
              Cookie Preferences
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
