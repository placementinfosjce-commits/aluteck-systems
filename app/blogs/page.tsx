"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User, Search, Tag, Sparkles } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BLOGS_DATA, BlogPost } from "@/data/blogs";

export default function BlogsListingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(BLOGS_DATA.map((b) => b.category)))];

  const filteredBlogs = BLOGS_DATA.filter((blog) => {
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-charcoal min-h-screen pb-24 text-lightgrey">
      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-graphite border-b border-graphite-border overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blogs & Architectural Insights" }]} />

          <div className="mt-6 max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold" />
              Technical Knowledge & Perspectives
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              Blogs & Architectural Insights
            </h1>
            <p className="text-sm sm:text-base text-lightgrey leading-relaxed font-light">
              Engineering guides, glazing specifications, weather durability analysis, and design strategies from our fenestration advisory group.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-8 border-b border-graphite-border">
          {/* Category Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-sm text-xs font-heading tracking-wider transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-gold text-charcoal font-bold"
                    : "bg-graphite text-lightgrey hover:text-white border border-graphite-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-textgrey absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles & topics..."
              className="w-full bg-graphite border border-graphite-border rounded px-3 pl-9 py-1.5 text-xs text-white placeholder:text-textgrey focus:outline-none focus:border-gold"
            />
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {filteredBlogs.map((blog) => (
            <article
              key={blog.slug}
              className="group bg-graphite border border-graphite-border hover:border-gold/50 rounded-sm overflow-hidden flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-charcoal">
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded bg-charcoal/80 backdrop-blur-sm border border-graphite-border text-[10px] font-mono text-gold font-bold">
                      {blog.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-textgrey font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gold" />
                      {blog.publishedDate}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      {blog.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-gold transition-colors leading-snug">
                    {blog.title}
                  </h3>

                  <p className="text-xs text-textgrey leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="w-full py-2.5 px-4 rounded-sm bg-charcoal hover:bg-gold hover:text-charcoal border border-graphite-border hover:border-gold text-lightgrey text-xs font-heading font-semibold tracking-wider uppercase transition-colors flex items-center justify-between group/btn"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
