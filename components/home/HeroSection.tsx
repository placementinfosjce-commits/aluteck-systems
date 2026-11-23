"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, AlertCircle, Loader2, Send, ShieldCheck, Sparkles } from "lucide-react";
import { submitEnquiryAction } from "@/app/actions";

export default function HeroSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    requirements: "",
    consent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      setErrorMsg("Please accept the privacy policy to submit your enquiry.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const res = await submitEnquiryAction({
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        city: formData.city,
        requirements: formData.requirements,
        source: "Homepage Hero Lead Form",
      });

      if (res.success) {
        setSuccess(true);
      } else {
        setErrorMsg(res.message || "Could not submit enquiry. Please try again.");
      }
    } catch (err: any) {
      setErrorMsg(err?.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background Architectural Photography with Subtle Gradient Overlays */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 scale-105 transform duration-1000 ease-out"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85')",
        }}
      >
        {/* Dark Charcoal Vignette & Luxury Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/95 via-charcoal-900/85 to-charcoal-950/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal-950/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-graphite/80 border border-gold/30 text-gold text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
              <span>Architectural Fenestration & Façades</span>
            </div>

            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-heading tracking-[0.3em] uppercase text-textgrey font-semibold block">
                ALUTECKSYSTEMS
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.12]">
                Engineered for Strength. <br />
                <span className="gold-gradient-text">Designed for Elegance.</span>
              </h1>
            </div>

            <p className="text-sm sm:text-base text-lightgrey/90 max-w-xl leading-relaxed font-light">
              Discover premium System Aluminium Windows, Doors and Façade Solutions designed to elevate modern architecture through precision engineering, sophisticated aesthetics and dependable performance.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#showcase"
                className="px-6 py-3.5 rounded-sm bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-charcoal font-heading font-semibold text-xs tracking-wider uppercase transition-all shadow-lg shadow-gold/20 flex items-center gap-2 group"
              >
                <span>Explore Our Systems</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                href="/projects"
                className="px-6 py-3.5 rounded-sm bg-graphite/80 hover:bg-graphite border border-graphite-border hover:border-gold/50 text-white font-heading font-medium text-xs tracking-wider uppercase transition-all backdrop-blur-sm"
              >
                View Our Projects
              </Link>
            </div>

            {/* Key Trust Highlights */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10 w-full max-w-lg">
              <div>
                <span className="block font-heading font-bold text-lg sm:text-xl text-white">11 Series</span>
                <span className="text-[11px] text-textgrey">Aluminium Systems</span>
              </div>
              <div>
                <span className="block font-heading font-bold text-lg sm:text-xl text-gold">8 Types</span>
                <span className="text-[11px] text-textgrey">Façade Solutions</span>
              </div>
              <div>
                <span className="block font-heading font-bold text-lg sm:text-xl text-white">Saint-Gobain</span>
                <span className="text-[11px] text-textgrey">& Jindal Extrusions</span>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Generation Form */}
          <div className="lg:col-span-5" id="enquiry">
            <div className="bg-graphite/90 backdrop-blur-xl border border-graphite-border p-6 sm:p-8 rounded-sm shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl pointer-events-none" />

              <div className="mb-5">
                <span className="text-[10px] uppercase tracking-widest text-gold font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                  Direct Consultation Desk
                </span>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mt-1">
                  Let's Build Something Exceptional
                </h3>
                <p className="text-xs text-textgrey mt-1">
                  Connect with our fenestration engineers for technical quotes and shop drawings.
                </p>
              </div>

              {success ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-gold/20 text-gold flex items-center justify-center mx-auto">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h4 className="font-heading font-semibold text-lg text-white">
                    Consultation Request Registered
                  </h4>
                  <p className="text-xs text-lightgrey max-w-xs mx-auto leading-relaxed">
                    Thank you, <strong className="text-gold">{formData.fullName}</strong>. Our architectural team has saved your enquiry and will contact you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSuccess(false);
                      setFormData({
                        fullName: "",
                        phone: "",
                        email: "",
                        city: "",
                        requirements: "",
                        consent: false,
                      });
                    }}
                    className="mt-3 px-4 py-2 text-xs rounded bg-graphite border border-graphite-border text-gold hover:text-white"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                  {errorMsg && (
                    <div className="p-2.5 rounded bg-red-950/50 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* 1. Full Name */}
                  <div>
                    <label className="block text-lightgrey font-medium mb-1">
                      Full Name <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ar. Vikramaditya"
                      className="w-full bg-charcoal/90 border border-graphite-border rounded px-3 py-2.5 text-white placeholder:text-textgrey focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  {/* 2. Phone Number & 3. Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-lightgrey font-medium mb-1">
                        Phone Number <span className="text-gold">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-charcoal/90 border border-graphite-border rounded px-3 py-2.5 text-white placeholder:text-textgrey focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-lightgrey font-medium mb-1">
                        Email Address <span className="text-gold">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="vikram@design.in"
                        className="w-full bg-charcoal/90 border border-graphite-border rounded px-3 py-2.5 text-white placeholder:text-textgrey focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  </div>

                  {/* 4. City */}
                  <div>
                    <label className="block text-lightgrey font-medium mb-1">
                      City / Project Location <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Mumbai, Bengaluru, Delhi NCR"
                      className="w-full bg-charcoal/90 border border-graphite-border rounded px-3 py-2.5 text-white placeholder:text-textgrey focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  {/* 5. Requirements */}
                  <div>
                    <label className="block text-lightgrey font-medium mb-1">
                      Your Requirements <span className="text-gold">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      placeholder="Describe your window, door, or façade specifications (e.g. villa sliding doors, curtain wall glass)..."
                      className="w-full bg-charcoal/90 border border-graphite-border rounded px-3 py-2.5 text-white placeholder:text-textgrey focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  {/* Consent checkbox */}
                  <div className="flex items-start gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="hero-consent"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 accent-gold cursor-pointer"
                    />
                    <label htmlFor="hero-consent" className="text-[11px] text-textgrey leading-tight cursor-pointer">
                      I agree to the processing of my project details in accordance with the{" "}
                      <Link href="/privacy-policy" className="text-gold underline" target="_blank">
                        Privacy Policy
                      </Link>.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 rounded-sm bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-charcoal font-heading font-semibold text-xs tracking-wider uppercase transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Saving to Database...</span>
                        </>
                      ) : (
                        <>
                          <span>Request a Consultation</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
