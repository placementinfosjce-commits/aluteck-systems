"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ChevronDown, HelpCircle, ArrowRight, Sparkles } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FAQS_DATA, FAQ_CATEGORIES } from "@/data/faqs";

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>("gen-01");

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-charcoal min-h-screen pb-24 text-lightgrey">
      {/* Hero */}
      <section className="relative py-14 lg:py-20 bg-graphite border-b border-graphite-border overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Frequently Asked Questions" }]} />

          <div className="mt-6 max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold" />
              Technical & Commercial Clarifications
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-sm sm:text-base text-lightgrey leading-relaxed font-light">
              Find detailed explanations regarding system aluminium engineering, glass thermal performance, warranties, installation procedures, and quotation logistics.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-5 h-5 text-textgrey absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. glass thickness, wind load, warranty, rollers)..."
            className="w-full bg-graphite border border-graphite-border rounded px-4 pl-12 py-3 text-sm text-white placeholder:text-textgrey focus:outline-none focus:border-gold shadow-lg"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar">
          {FAQ_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-sm text-xs font-heading tracking-wider transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-gold text-charcoal font-bold shadow"
                  : "bg-graphite text-lightgrey hover:text-white border border-graphite-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQs Accordion List */}
        <div className="divide-y divide-graphite-border rounded-sm border border-graphite-border bg-graphite shadow-xl overflow-hidden">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center text-textgrey text-xs">
              No matching questions found. Contact our technical desk directly for personalized assistance.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="p-5">
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full flex items-start justify-between text-left gap-4 group"
                  >
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-textgrey block mb-0.5">
                          {faq.category}
                        </span>
                        <h3 className="font-heading font-semibold text-sm sm:text-base text-white group-hover:text-gold transition-colors">
                          {faq.question}
                        </h3>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="mt-3 pl-7 pr-2 space-y-3 text-xs sm:text-sm text-lightgrey/90 leading-relaxed animate-in fade-in duration-200">
                      <p>{faq.answer}</p>
                      {faq.relatedLink && (
                        <div className="pt-1">
                          <Link
                            href={faq.relatedLink.href}
                            className="text-gold font-medium hover:underline inline-flex items-center gap-1 text-xs"
                          >
                            <span>{faq.relatedLink.label}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
