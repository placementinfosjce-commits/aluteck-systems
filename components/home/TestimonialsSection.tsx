import React from "react";
import { Star, Quote, ExternalLink } from "lucide-react";
import { CLIENT_REVIEWS, COMPANY_INFO } from "@/data/company";

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-heading uppercase tracking-[0.25em] text-gold font-bold">
            CLIENT ENDORSEMENTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-xs sm:text-sm text-textgrey leading-relaxed">
            Feedback from architects, structural consultants, and homeowners who have experienced Alutecksystems engineering and installation.
          </p>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {CLIENT_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-sm bg-graphite/80 border border-graphite-border hover:border-gold/40 flex flex-col justify-between shadow-xl transition-all duration-300 relative group"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-gold">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-textgrey/30 group-hover:text-gold/40 transition-colors" />
                </div>

                <p className="text-xs text-lightgrey leading-relaxed italic mb-6">
                  "{review.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-graphite-border/70 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">
                    {review.name}
                  </h4>
                  <p className="text-[11px] text-gold font-medium">
                    {review.category}
                  </p>
                </div>
                <span className="text-[10px] text-textgrey font-mono">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Reviews CTA */}
        <div className="text-center">
          <a
            href={COMPANY_INFO.googleRatingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-graphite hover:bg-gold hover:text-charcoal border border-graphite-border hover:border-gold text-xs font-heading font-semibold tracking-wider uppercase transition-all shadow-md group"
          >
            <span>Read More Reviews on Google</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
