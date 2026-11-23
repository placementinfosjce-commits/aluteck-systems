"use client";

import React, { useState } from "react";
import { X, CheckCircle, AlertCircle, Loader2, Send } from "lucide-react";
import Link from "next/link";
import { submitEnquiryAction } from "@/app/actions";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export default function EnquiryModal({ isOpen, onClose, defaultProduct }: EnquiryModalProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    requirements: "",
    productSeries: defaultProduct || "",
    consent: false,
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      setErrorMsg("Please accept the privacy policy consent to proceed.");
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
        productSeries: formData.productSeries || defaultProduct || undefined,
        source: "Quote Modal",
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-graphite border border-graphite-border rounded-sm shadow-2xl p-6 sm:p-8 z-10 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-textgrey hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-gold/15 text-gold flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-bold text-xl text-white">
              Consultation Request Received
            </h3>
            <p className="text-xs text-textgrey max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-lightgrey">{formData.fullName}</strong>. Our architectural engineering team has received your details and will contact you within 24 business hours.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSuccess(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-sm bg-gold text-charcoal font-heading font-semibold text-xs tracking-wider uppercase"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-widest text-gold font-bold">
                Project Consultation
              </span>
              <h3 className="font-heading font-bold text-xl text-white mt-1">
                Request an Architectural Quote
              </h3>
              <p className="text-xs text-textgrey mt-1">
                {defaultProduct ? `Inquiring about ${defaultProduct}` : "Share your project dimensions and fenestration requirements."}
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 rounded bg-red-900/30 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-lightgrey font-medium mb-1">
                    Full Name <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ar. Rajesh Sharma"
                    className="w-full bg-charcoal border border-graphite-border rounded px-3 py-2 text-white placeholder:text-textgrey focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-lightgrey font-medium mb-1">
                    Phone Number <span className="text-gold">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full bg-charcoal border border-graphite-border rounded px-3 py-2 text-white placeholder:text-textgrey focus:outline-none focus:border-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-lightgrey font-medium mb-1">
                    Email Address <span className="text-gold">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rajesh@studio.com"
                    className="w-full bg-charcoal border border-graphite-border rounded px-3 py-2 text-white placeholder:text-textgrey focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-lightgrey font-medium mb-1">
                    City / Project Location <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Mumbai, Bengaluru"
                    className="w-full bg-charcoal border border-graphite-border rounded px-3 py-2 text-white placeholder:text-textgrey focus:outline-none focus:border-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-lightgrey font-medium mb-1">
                  Product / System of Interest
                </label>
                <input
                  type="text"
                  value={formData.productSeries}
                  onChange={(e) => setFormData({ ...formData, productSeries: e.target.value })}
                  placeholder="e.g. CS.25 Slim Sliding / Curtain Wall Glazing"
                  className="w-full bg-charcoal border border-graphite-border rounded px-3 py-2 text-white placeholder:text-textgrey focus:outline-none focus:border-gold"
                />
              </div>

              <div>
                <label className="block text-lightgrey font-medium mb-1">
                  Your Requirements & Dimensions <span className="text-gold">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  placeholder="Mention opening dimensions, villa/commercial, floor level, and glass preferences..."
                  className="w-full bg-charcoal border border-graphite-border rounded px-3 py-2 text-white placeholder:text-textgrey focus:outline-none focus:border-gold"
                />
              </div>

              {/* Consent checkbox */}
              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="modal-consent"
                  required
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-0.5 accent-gold cursor-pointer"
                />
                <label htmlFor="modal-consent" className="text-[11px] text-textgrey leading-tight cursor-pointer">
                  I consent to Alutecksystems contacting me regarding this project enquiry as outlined in the{" "}
                  <Link href="/privacy-policy" className="text-gold underline" target="_blank">
                    Privacy Policy
                  </Link>.
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-sm bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-charcoal font-heading font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Consultation Request</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
