"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { COMPANY_INFO } from "@/data/company";
import { submitEnquiryAction } from "@/app/actions";

export default function LocateUsPage() {
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
        source: "Locate Us Contact Form",
      });

      if (res.success) {
        setSuccess(true);
      } else {
        setErrorMsg(res.message || "Failed to submit enquiry.");
      }
    } catch (err: any) {
      setErrorMsg(err?.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const waUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber.replace(/[^0-9]/g, "")}?text=Hello%20Alutecksystems%2C%20I%20would%20like%20to%20visit%20your%20design%20studio%20and%20consult%20on%20my%20project.`;

  return (
    <div className="bg-charcoal min-h-screen pb-24 text-lightgrey">
      {/* Hero */}
      <section className="relative py-14 lg:py-20 bg-graphite border-b border-graphite-border overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Locate Us & Contact" }]} />

          <div className="mt-6 max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold" />
              Design Studio & Technical Center
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              Locate Us & Connect
            </h1>
            <p className="text-sm sm:text-base text-lightgrey leading-relaxed font-light">
              Visit our architectural experience center to explore full-scale sliding systems, sample Saint-Gobain glazing mockups, and discuss structural specifications with our engineering team.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Details & Studio Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-sm bg-graphite border border-graphite-border space-y-5">
              <h3 className="font-heading font-bold text-lg text-white">
                Corporate Office & Studio
              </h3>

              <div className="space-y-4 text-xs text-lightgrey">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">
                      {COMPANY_INFO.officeAddress.building}
                    </span>
                    <span className="text-textgrey">
                      {COMPANY_INFO.officeAddress.street}, {COMPANY_INFO.officeAddress.city},{" "}
                      {COMPANY_INFO.officeAddress.state} – {COMPANY_INFO.officeAddress.postalCode},{" "}
                      {COMPANY_INFO.officeAddress.country}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                  <div>
                    <span className="text-textgrey block">Telephone:</span>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-white hover:text-gold font-mono font-medium">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                  <div>
                    <span className="text-textgrey block">Enquiries:</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-white hover:text-gold font-medium">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-textgrey block">Working Hours:</span>
                    <span className="text-white">{COMPANY_INFO.workingHours}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Get Directions & WhatsApp */}
              <div className="pt-4 border-t border-graphite-border flex flex-wrap gap-3">
                <a
                  href={COMPANY_INFO.officeAddress.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-sm bg-charcoal hover:bg-gold hover:text-charcoal border border-graphite-border hover:border-gold text-xs font-heading font-semibold tracking-wider uppercase transition-colors flex items-center gap-2"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-sm bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-heading font-semibold tracking-wider uppercase transition-colors flex items-center gap-2"
                >
                  <span>WhatsApp Studio</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-sm overflow-hidden border border-graphite-border aspect-[16/10] bg-charcoal relative shadow-xl">
              <iframe
                title="Alutecksystems Corporate Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120615.82276536098!2d72.825838!3d19.119702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa801930494793b!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(90%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Contact Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-sm bg-graphite border border-graphite-border shadow-2xl space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold font-bold">
                  Send an Inquiry
                </span>
                <h3 className="font-heading font-bold text-2xl text-white mt-1">
                  Connect with Our Technical Desk
                </h3>
                <p className="text-xs text-textgrey mt-1">
                  Share your floor plans, opening schedules, or façade scope.
                </p>
              </div>

              {success ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-gold/20 text-gold flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-white">
                    Message Sent Successfully
                  </h4>
                  <p className="text-xs text-textgrey max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-lightgrey">{formData.fullName}</strong>. Our fenestration engineering desk has received your request.
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
                    className="mt-4 px-5 py-2 text-xs rounded bg-charcoal border border-graphite-border text-gold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  {errorMsg && (
                    <div className="p-3 rounded bg-red-950/60 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-lightgrey font-medium mb-1">
                        Full Name <span className="text-gold">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Ar. Priya Sen"
                        className="w-full bg-charcoal border border-graphite-border rounded px-3.5 py-2.5 text-white placeholder:text-textgrey focus:outline-none focus:border-gold"
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
                        placeholder="+91 98765 43210"
                        className="w-full bg-charcoal border border-graphite-border rounded px-3.5 py-2.5 text-white placeholder:text-textgrey focus:outline-none focus:border-gold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-lightgrey font-medium mb-1">
                        Email Address <span className="text-gold">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="priya@architecture.in"
                        className="w-full bg-charcoal border border-graphite-border rounded px-3.5 py-2.5 text-white placeholder:text-textgrey focus:outline-none focus:border-gold"
                      />
                    </div>

                    <div>
                      <label className="block text-lightgrey font-medium mb-1">
                        City / Site Location <span className="text-gold">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Mumbai, Bengaluru"
                        className="w-full bg-charcoal border border-graphite-border rounded px-3.5 py-2.5 text-white placeholder:text-textgrey focus:outline-none focus:border-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-lightgrey font-medium mb-1">
                      Project Requirements <span className="text-gold">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      placeholder="Specify system series of interest (CS.25, COS.49, Structural Glazing), dimensions, or site stage..."
                      className="w-full bg-charcoal border border-graphite-border rounded px-3.5 py-2.5 text-white placeholder:text-textgrey focus:outline-none focus:border-gold"
                    />
                  </div>

                  {/* Consent */}
                  <div className="flex items-start gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="contact-consent"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 accent-gold cursor-pointer"
                    />
                    <label htmlFor="contact-consent" className="text-[11px] text-textgrey leading-tight">
                      I agree to Alutecksystems storing my details for project consultation under the terms of the Privacy Policy.
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 rounded-sm bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-charcoal font-heading font-semibold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Project Request</span>
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
    </div>
  );
}
