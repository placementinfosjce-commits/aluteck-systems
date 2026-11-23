"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  ArrowRight,
  Shield,
  Layers,
  Sparkles,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

interface HeaderProps {
  onOpenQuoteModal?: (productName?: string) => void;
}

export default function Header({ onOpenQuoteModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  const handleQuoteClick = () => {
    if (onOpenQuoteModal) {
      onOpenQuoteModal();
    } else {
      const el = document.getElementById("enquiry");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = "/#enquiry";
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-charcoal/95 backdrop-blur-md border-b border-graphite-border shadow-xl py-3.5"
            : "bg-charcoal/80 backdrop-blur-sm border-b border-white/5 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-lg shadow-gold/20 group-hover:scale-105 transition-transform">
                <span className="font-heading font-extrabold text-charcoal text-xl tracking-tighter">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold tracking-wider text-white flex items-center gap-1.5">
                  ALUTECK<span className="text-gold font-light">SYSTEMS</span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-textgrey font-medium -mt-0.5">
                  Architectural Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
              <Link
                href="/"
                className={`transition-colors hover:text-gold ${
                  pathname === "/" ? "text-gold font-semibold" : "text-lightgrey"
                }`}
              >
                HOME
              </Link>

              <Link
                href="/about"
                className={`transition-colors hover:text-gold ${
                  pathname === "/about" ? "text-gold font-semibold" : "text-lightgrey"
                }`}
              >
                ABOUT US
              </Link>

              {/* PRODUCTS DROPDOWN */}
              <div
                className="relative group py-2"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 transition-colors hover:text-gold ${
                    pathname.startsWith("/products") ? "text-gold font-semibold" : "text-lightgrey"
                  }`}
                  aria-expanded={productsOpen}
                >
                  PRODUCTS
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Dropdown Menu */}
                {productsOpen && (
                  <div className="absolute top-full left-0 w-80 bg-graphite border border-graphite-border shadow-2xl rounded-sm p-3 py-2 flex flex-col gap-1 text-sm animate-in fade-in slide-in-from-top-2 duration-150">
                    <Link
                      href="/products/system-aluminium"
                      className="p-2.5 rounded-sm hover:bg-charcoal/80 transition-colors flex items-start gap-3 group/item"
                    >
                      <div className="p-1.5 rounded bg-gold/10 text-gold group-hover/item:bg-gold group-hover/item:text-charcoal transition-colors">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-white font-medium group-hover/item:text-gold transition-colors">
                          System Aluminium Windows & Doors
                        </div>
                        <div className="text-xs text-textgrey">Slim, Opulence, Casement & Bifold</div>
                      </div>
                    </Link>

                    <Link
                      href="/products/facade-systems"
                      className="p-2.5 rounded-sm hover:bg-charcoal/80 transition-colors flex items-start gap-3 group/item"
                    >
                      <div className="p-1.5 rounded bg-gold/10 text-gold group-hover/item:bg-gold group-hover/item:text-charcoal transition-colors">
                        <Shield className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-white font-medium group-hover/item:text-gold transition-colors">
                          Façade Systems
                        </div>
                        <div className="text-xs text-textgrey">Structural Glazing, Curtain Wall, Spider & Louvers</div>
                      </div>
                    </Link>

                    <div className="my-1 border-t border-graphite-border/50" />

                    <Link
                      href="/products/upvc-windows"
                      className="p-2.5 rounded-sm hover:bg-charcoal/80 transition-colors flex items-start gap-3 group/item"
                    >
                      <div className="p-1.5 rounded bg-white/5 text-lightgrey group-hover/item:text-gold transition-colors">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-white font-medium group-hover/item:text-gold transition-colors">
                          uPVC Windows
                        </div>
                        <div className="text-xs text-textgrey">Acoustic & thermal multi-chamber systems</div>
                      </div>
                    </Link>

                    <Link
                      href="/products/upvc-doors"
                      className="p-2.5 rounded-sm hover:bg-charcoal/80 transition-colors flex items-start gap-3 group/item"
                    >
                      <div className="p-1.5 rounded bg-white/5 text-lightgrey group-hover/item:text-gold transition-colors">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-white font-medium group-hover/item:text-gold transition-colors">
                          uPVC Doors
                        </div>
                        <div className="text-xs text-textgrey">Patio sliding, casement & slide-and-fold</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* MORE DROPDOWN */}
              <div
                className="relative group py-2"
                onMouseEnter={() => setMoreOpen(true)}
                onMouseLeave={() => setMoreOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-lightgrey hover:text-gold transition-colors"
                  aria-expanded={moreOpen}
                >
                  MORE
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Dropdown Menu */}
                {moreOpen && (
                  <div className="absolute top-full -left-12 w-64 bg-graphite border border-graphite-border shadow-2xl rounded-sm p-2 flex flex-col gap-0.5 text-sm animate-in fade-in slide-in-from-top-2 duration-150">
                    <Link
                      href="/projects"
                      className="px-3 py-2 rounded-sm text-lightgrey hover:text-gold hover:bg-charcoal/70 transition-colors"
                    >
                      Our Projects
                    </Link>
                    <Link
                      href="/locate-us"
                      className="px-3 py-2 rounded-sm text-lightgrey hover:text-gold hover:bg-charcoal/70 transition-colors"
                    >
                      Locate Us
                    </Link>
                    <Link
                      href="/customer-complaint"
                      className="px-3 py-2 rounded-sm text-lightgrey hover:text-gold hover:bg-charcoal/70 transition-colors flex items-center justify-between"
                    >
                      <span>Customer Complaint</span>
                      <span className="text-[10px] bg-gold/15 text-gold px-1.5 py-0.5 rounded">Support</span>
                    </Link>
                    <Link
                      href="/blogs"
                      className="px-3 py-2 rounded-sm text-lightgrey hover:text-gold hover:bg-charcoal/70 transition-colors"
                    >
                      Blogs & Insights
                    </Link>
                    <Link
                      href="/faq"
                      className="px-3 py-2 rounded-sm text-lightgrey hover:text-gold hover:bg-charcoal/70 transition-colors"
                    >
                      Frequently Asked Questions
                    </Link>
                    <div className="my-1 border-t border-graphite-border/50" />
                    <Link
                      href="/cookie-policy"
                      className="px-3 py-1.5 text-xs text-textgrey hover:text-lightgrey transition-colors"
                    >
                      Cookie Policy
                    </Link>
                    <Link
                      href="/privacy-policy"
                      className="px-3 py-1.5 text-xs text-textgrey hover:text-lightgrey transition-colors"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      href="/locate-us"
                      className="px-3 py-2 mt-1 rounded-sm text-gold hover:bg-gold/10 font-medium transition-colors"
                    >
                      Contact Us →
                    </Link>
                  </div>
                )}
              </div>
            </nav>

            {/* Right Action: Phone + Get a Quote */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-2 text-xs font-medium text-lightgrey hover:text-gold transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-graphite flex items-center justify-center border border-graphite-border text-gold">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{COMPANY_INFO.phone}</span>
              </a>

              <button
                onClick={handleQuoteClick}
                className="px-5 py-2.5 rounded-sm bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-charcoal font-heading font-semibold text-xs tracking-wider uppercase shadow-md shadow-gold/20 hover:shadow-gold/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="lg:hidden flex items-center gap-3">
              <button
                onClick={handleQuoteClick}
                className="px-3 py-1.5 rounded-sm bg-gold text-charcoal font-heading font-semibold text-xs uppercase"
              >
                Quote
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-lightgrey hover:text-white focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-graphite border-l border-graphite-border p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-graphite-border">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-sm bg-gold flex items-center justify-center text-charcoal font-bold">
                    A
                  </div>
                  <span className="font-heading font-bold text-white tracking-wider">
                    ALUTECK<span className="text-gold">SYSTEMS</span>
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-textgrey hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="py-6 flex flex-col gap-4 text-sm font-medium">
                <Link
                  href="/"
                  className="py-2 text-white hover:text-gold transition-colors"
                >
                  HOME
                </Link>

                <Link
                  href="/about"
                  className="py-2 text-white hover:text-gold transition-colors"
                >
                  ABOUT US
                </Link>

                {/* Mobile Products Accordion */}
                <div className="py-2 border-y border-graphite-border/50">
                  <button
                    onClick={() => setProductsOpen(!productsOpen)}
                    className="w-full flex items-center justify-between text-white hover:text-gold py-1"
                  >
                    <span>PRODUCTS</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
                  </button>

                  {productsOpen && (
                    <div className="pl-4 pt-3 pb-1 flex flex-col gap-2.5 text-xs text-lightgrey">
                      <Link
                        href="/products/system-aluminium"
                        className="py-1 hover:text-gold flex items-center justify-between"
                      >
                        <span>System Aluminium Windows & Doors</span>
                        <ArrowRight className="w-3 h-3 text-gold" />
                      </Link>
                      <Link
                        href="/products/facade-systems"
                        className="py-1 hover:text-gold flex items-center justify-between"
                      >
                        <span>Façade Systems (8 Categories)</span>
                        <ArrowRight className="w-3 h-3 text-gold" />
                      </Link>
                      <Link
                        href="/products/upvc-windows"
                        className="py-1 hover:text-gold flex items-center justify-between"
                      >
                        <span>uPVC Windows</span>
                        <ArrowRight className="w-3 h-3 text-gold" />
                      </Link>
                      <Link
                        href="/products/upvc-doors"
                        className="py-1 hover:text-gold flex items-center justify-between"
                      >
                        <span>uPVC Doors</span>
                        <ArrowRight className="w-3 h-3 text-gold" />
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/projects"
                  className="py-1 text-white hover:text-gold transition-colors"
                >
                  OUR PROJECTS
                </Link>

                <Link
                  href="/locate-us"
                  className="py-1 text-white hover:text-gold transition-colors"
                >
                  LOCATE US / CONTACT
                </Link>

                <Link
                  href="/customer-complaint"
                  className="py-1 text-white hover:text-gold transition-colors flex items-center gap-2"
                >
                  <span>CUSTOMER COMPLAINT</span>
                  <span className="text-[10px] bg-gold/20 text-gold px-1.5 py-0.5 rounded">Support</span>
                </Link>

                <Link
                  href="/blogs"
                  className="py-1 text-white hover:text-gold transition-colors"
                >
                  BLOGS & INSIGHTS
                </Link>

                <Link
                  href="/faq"
                  className="py-1 text-white hover:text-gold transition-colors"
                >
                  FAQS
                </Link>
              </div>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-6 border-t border-graphite-border flex flex-col gap-3">
              <button
                onClick={handleQuoteClick}
                className="w-full py-3 rounded-sm bg-gradient-to-r from-gold to-gold-dark text-charcoal font-heading font-semibold text-xs tracking-wider uppercase text-center shadow-lg"
              >
                Request a Consultation
              </button>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full py-2.5 rounded-sm border border-graphite-border text-center text-xs text-lightgrey hover:text-white flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
