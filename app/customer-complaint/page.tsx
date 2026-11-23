"use client";

import React, { useState } from "react";
import {
  LifeBuoy,
  Search,
  CheckCircle,
  AlertCircle,
  Loader2,
  FileText,
  Clock,
  ShieldCheck,
  Send,
  Upload,
  ArrowRight,
  Headphones,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { submitComplaintAction, trackComplaintAction } from "@/app/actions";

export default function CustomerComplaintPage() {
  const [activeTab, setActiveTab] = useState<"register" | "track">("register");

  // Registration Form State
  const [loadingReg, setLoadingReg] = useState(false);
  const [regSuccess, setRegSuccess] = useState<string | null>(null);
  const [regError, setRegError] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    productSeries: "",
    projectRef: "",
    complaintText: "",
    preferredContact: "Phone",
    fileName: "",
  });

  // Tracking State
  const [trackRef, setTrackRef] = useState("");
  const [loadingTrack, setLoadingTrack] = useState(false);
  const [trackResult, setTrackResult] = useState<any | null>(null);
  const [trackError, setTrackError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingReg(true);
    setRegError("");

    try {
      const res = await submitComplaintAction({
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        city: formData.city,
        productSeries: formData.productSeries || undefined,
        projectRef: formData.projectRef || undefined,
        complaintText: formData.complaintText,
      });

      if (res.success && res.referenceNumber) {
        setRegSuccess(res.referenceNumber);
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          city: "",
          productSeries: "",
          projectRef: "",
          complaintText: "",
          preferredContact: "Phone",
          fileName: "",
        });
      } else {
        setRegError(res.message || "Failed to register complaint.");
      }
    } catch (err: any) {
      setRegError(err?.message || "An unexpected error occurred.");
    } finally {
      setLoadingReg(false);
    }
  };

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackRef.trim()) return;

    setLoadingTrack(true);
    setTrackError("");
    setTrackResult(null);

    try {
      const res = await trackComplaintAction(trackRef.trim());
      if (res.success && res.data) {
        setTrackResult(res.data);
      } else {
        setTrackError(res.message || "No ticket found with this reference number.");
      }
    } catch (err: any) {
      setTrackError(err?.message || "Error tracking complaint status.");
    } finally {
      setLoadingTrack(false);
    }
  };

  const statusSteps = ["Submitted", "Under Review", "In Progress", "Resolved", "Closed"];

  const getStatusIndex = (current: string) => {
    const idx = statusSteps.indexOf(current);
    return idx >= 0 ? idx : 0;
  };

  return (
    <div className="bg-charcoal min-h-screen pb-24 text-lightgrey">
      {/* Hero */}
      <section className="relative py-14 lg:py-20 bg-graphite border-b border-graphite-border overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Customer Complaint & Support" }]} />

          <div className="mt-6 max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold font-bold flex items-center gap-2">
              <Headphones className="w-4 h-4 text-gold" />
              After-Sales & Technical Support
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              Customer Complaints & Support
            </h1>
            <p className="text-sm sm:text-base text-lightgrey leading-relaxed font-light">
              Tell us about your concern so our team can review the issue and assist you through the appropriate support process. Every complaint is tracked under a unique reference ticket.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-8">
        {/* Tab Controls: Register vs Track */}
        <div className="flex items-center gap-3 border-b border-graphite-border pb-4">
          <button
            onClick={() => setActiveTab("register")}
            className={`px-5 py-2.5 rounded-sm text-xs font-heading font-semibold tracking-wider transition-colors flex items-center gap-2 ${
              activeTab === "register"
                ? "bg-gold text-charcoal shadow-md"
                : "bg-graphite text-lightgrey hover:text-white border border-graphite-border"
            }`}
          >
            <LifeBuoy className="w-4 h-4" />
            <span>Register a Complaint</span>
          </button>

          <button
            onClick={() => setActiveTab("track")}
            className={`px-5 py-2.5 rounded-sm text-xs font-heading font-semibold tracking-wider transition-colors flex items-center gap-2 ${
              activeTab === "track"
                ? "bg-gold text-charcoal shadow-md"
                : "bg-graphite text-lightgrey hover:text-white border border-graphite-border"
            }`}
          >
            <Search className="w-4 h-4" />
            <span>Track Existing Ticket</span>
          </button>
        </div>

        {/* TAB 1: REGISTER COMPLAINT */}
        {activeTab === "register" && (
          <div className="bg-graphite border border-graphite-border p-6 sm:p-8 rounded-sm shadow-2xl">
            {regSuccess ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gold/15 text-gold flex items-center justify-center mx-auto">
                  <CheckCircle className="w-9 h-9" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-white">
                  Complaint Ticket Registered
                </h3>
                <p className="text-xs text-textgrey max-w-md mx-auto leading-relaxed">
                  Your issue has been logged into our support database. Please save your unique reference number for tracking:
                </p>
                <div className="p-3 bg-charcoal rounded border border-gold/40 text-gold font-mono font-bold text-lg inline-block tracking-wider">
                  {regSuccess}
                </div>
                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={() => {
                      setTrackRef(regSuccess);
                      setActiveTab("track");
                    }}
                    className="px-5 py-2 text-xs rounded bg-gold text-charcoal font-semibold hover:bg-gold-light"
                  >
                    Track Status Now
                  </button>
                  <button
                    onClick={() => setRegSuccess(null)}
                    className="px-5 py-2 text-xs rounded bg-charcoal border border-graphite-border text-white hover:border-gold/40"
                  >
                    Register Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleRegister} className="space-y-4 text-xs">
                <div className="border-b border-graphite-border pb-3">
                  <h3 className="font-heading font-bold text-lg text-white">
                    Submit Service Request
                  </h3>
                  <p className="text-xs text-textgrey">
                    Mandatory fields are marked with <span className="text-gold">*</span>
                  </p>
                </div>

                {regError && (
                  <div className="p-3 rounded bg-red-950/60 border border-red-500/50 text-red-200 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{regError}</span>
                  </div>
                )}

                {/* 1. Full Name & 2. Phone Number */}
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
                      placeholder="e.g. Anand Mahindra"
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

                {/* 3. Email & 4. City */}
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
                      placeholder="anand@company.in"
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
                      placeholder="e.g. Mumbai, Pune, Hyderabad"
                      className="w-full bg-charcoal border border-graphite-border rounded px-3.5 py-2.5 text-white placeholder:text-textgrey focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                {/* Optional Product Concerned & Project Ref */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-lightgrey font-medium mb-1">
                      Product / System Concerned (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.productSeries}
                      onChange={(e) => setFormData({ ...formData, productSeries: e.target.value })}
                      placeholder="e.g. CS.25 Sliding Shutter / Spider Glazing"
                      className="w-full bg-charcoal border border-graphite-border rounded px-3.5 py-2.5 text-white placeholder:text-textgrey focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-lightgrey font-medium mb-1">
                      Project Reference / Invoice No. (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.projectRef}
                      onChange={(e) => setFormData({ ...formData, projectRef: e.target.value })}
                      placeholder="e.g. ALT-INV-2024-88"
                      className="w-full bg-charcoal border border-graphite-border rounded px-3.5 py-2.5 text-white placeholder:text-textgrey focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                {/* 5. Complaint Text */}
                <div>
                  <label className="block text-lightgrey font-medium mb-1">
                    Your Complaint / Support Issue <span className="text-gold">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.complaintText}
                    onChange={(e) => setFormData({ ...formData, complaintText: e.target.value })}
                    placeholder="Describe the issue in detail (e.g. roller stiffness, water weep block, hardware latch alignment)..."
                    className="w-full bg-charcoal border border-graphite-border rounded px-3.5 py-2.5 text-white placeholder:text-textgrey focus:outline-none focus:border-gold"
                  />
                </div>

                {/* Optional Photo Attachment */}
                <div>
                  <label className="block text-lightgrey font-medium mb-1">
                    Attach Site Photograph / Supporting File (Optional)
                  </label>
                  <div className="flex items-center gap-3">
                    <label className="px-3.5 py-2 rounded bg-charcoal border border-graphite-border hover:border-gold/50 cursor-pointer text-xs flex items-center gap-2">
                      <Upload className="w-3.5 h-3.5 text-gold" />
                      <span>{formData.fileName || "Choose JPG / PNG / PDF..."}</span>
                      <input
                        type="file"
                        accept="image/*,.pdf"
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files?.[0]) {
                            setFormData({ ...formData, fileName: e.target.files[0].name });
                          }
                        }}
                      />
                    </label>
                    {formData.fileName && (
                      <span className="text-[11px] text-gold font-mono truncate max-w-xs">
                        {formData.fileName}
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={loadingReg}
                    className="w-full py-3.5 rounded-sm bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-charcoal font-heading font-semibold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    {loadingReg ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Registering Ticket...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Support Ticket</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* TAB 2: TRACK EXISTING TICKET */}
        {activeTab === "track" && (
          <div className="bg-graphite border border-graphite-border p-6 sm:p-8 rounded-sm shadow-2xl space-y-6">
            <div>
              <h3 className="font-heading font-bold text-lg text-white">
                Live Support Ticket Tracking
              </h3>
              <p className="text-xs text-textgrey mt-1">
                Enter your unique complaint reference number (e.g. ALT-CMP-2026-1234) to check status.
              </p>
            </div>

            <form onSubmit={handleTrack} className="flex gap-2">
              <input
                type="text"
                required
                value={trackRef}
                onChange={(e) => setTrackRef(e.target.value)}
                placeholder="Enter Reference Number (e.g. ALT-CMP-2026-XXXX)"
                className="flex-1 bg-charcoal border border-graphite-border rounded px-4 py-2.5 text-xs text-white placeholder:text-textgrey font-mono uppercase focus:outline-none focus:border-gold"
              />
              <button
                type="submit"
                disabled={loadingTrack}
                className="px-5 py-2.5 rounded bg-gold text-charcoal font-heading font-semibold text-xs tracking-wider uppercase hover:bg-gold-light transition-colors flex items-center gap-1.5"
              >
                {loadingTrack ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                <span>Track</span>
              </button>
            </form>

            {trackError && (
              <div className="p-3 rounded bg-red-950/60 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{trackError}</span>
              </div>
            )}

            {trackResult && (
              <div className="p-6 rounded bg-charcoal border border-graphite-border space-y-6 animate-in fade-in duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-graphite-border pb-4">
                  <div>
                    <span className="text-[10px] font-mono text-gold uppercase tracking-wider block">
                      Ticket Reference
                    </span>
                    <span className="font-mono font-bold text-base text-white">
                      {trackResult.referenceNumber}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-textgrey block">
                      Registered On
                    </span>
                    <span className="text-xs text-lightgrey">
                      {new Date(trackResult.createdAt).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>

                {/* Visual Progress Steps: Submitted -> Under Review -> In Progress -> Resolved -> Closed */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-textgrey uppercase block">
                    Current Support Progress:
                  </span>
                  <div className="grid grid-cols-5 gap-1.5 text-center text-[10px] font-mono">
                    {statusSteps.map((st, idx) => {
                      const currentIdx = getStatusIndex(trackResult.status);
                      const isComplete = idx <= currentIdx;
                      return (
                        <div key={st} className="space-y-1">
                          <div
                            className={`h-2 rounded-full transition-colors ${
                              isComplete ? "bg-gold shadow-sm shadow-gold/30" : "bg-graphite"
                            }`}
                          />
                          <span className={isComplete ? "text-gold font-bold" : "text-textgrey"}>
                            {st}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Ticket Details */}
                <div className="grid grid-cols-2 gap-3 text-xs font-mono pt-2">
                  <div className="p-3 rounded bg-graphite border border-graphite-border">
                    <span className="text-textgrey block text-[10px]">Client Name:</span>
                    <span className="text-white font-medium">{trackResult.fullName}</span>
                  </div>
                  <div className="p-3 rounded bg-graphite border border-graphite-border">
                    <span className="text-textgrey block text-[10px]">Site Location:</span>
                    <span className="text-white font-medium">{trackResult.city}</span>
                  </div>
                </div>

                {trackResult.adminNotes && (
                  <div className="p-3.5 rounded bg-graphite border border-gold/30 text-xs space-y-1">
                    <span className="text-gold font-semibold text-[11px] block">
                      Resolution Note from Aluteck Engineering Desk:
                    </span>
                    <p className="text-lightgrey">{trackResult.adminNotes}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
