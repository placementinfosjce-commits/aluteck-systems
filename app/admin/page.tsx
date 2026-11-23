"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Lock,
  Unlock,
  Users,
  LifeBuoy,
  Layers,
  FileSpreadsheet,
  Search,
  Filter,
  CheckCircle,
  AlertCircle,
  Clock,
  Settings,
  FolderKanban,
  Download,
  ExternalLink,
  ChevronRight,
  LogOut,
  Sparkles,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  getAdminDataAction,
  updateEnquiryStatusAction,
  updateComplaintStatusAction,
} from "@/app/actions";
import { ALUMINIUM_SERIES_DATA } from "@/data/products-aluminium";
import { FACADE_SYSTEMS_DATA } from "@/data/products-facade";
import { PROJECTS_DATA } from "@/data/projects";
import { COMPANY_INFO } from "@/data/company";

const ENQUIRY_STATUSES = [
  "New",
  "Contacted",
  "Qualified",
  "Quotation Sent",
  "Converted",
  "Closed",
];

const COMPLAINT_STATUSES = [
  "Submitted",
  "Under Review",
  "In Progress",
  "Resolved",
  "Closed",
];

export default function AdminDashboardPage() {
  const [pin, setPin] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");
  const [loading, setLoading] = useState(false);

  // Dashboard Data
  const [adminData, setAdminData] = useState<{
    enquiries: any[];
    complaints: any[];
    stats: {
      totalEnquiries: number;
      newEnquiries: number;
      totalComplaints: number;
      openComplaints: number;
    };
  } | null>(null);

  const [activeTab, setActiveTab] = useState<"leads" | "complaints" | "products" | "projects" | "settings">("leads");
  const [searchLead, setSearchLead] = useState("");
  const [leadStatusFilter, setLeadStatusFilter] = useState("All");

  // Load from session if already entered
  useEffect(() => {
    const savedPin = sessionStorage.getItem("aluteck_admin_pin");
    if (savedPin) {
      handleLogin(savedPin);
    }
  }, []);

  const handleLogin = async (pinToTry?: string) => {
    const targetPin = pinToTry || pin;
    if (!targetPin) return;

    setLoading(true);
    setAuthError("");

    try {
      const res = await getAdminDataAction(targetPin);
      if (res.success && res.data) {
        setIsAuthenticated(true);
        setAdminData(res.data);
        sessionStorage.setItem("aluteck_admin_pin", targetPin);
      } else {
        setAuthError(res.message || "Invalid administrator credentials.");
      }
    } catch (err: any) {
      setAuthError(err?.message || "Authentication error.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("aluteck_admin_pin");
    setIsAuthenticated(false);
    setPin("");
    setAdminData(null);
  };

  const handleUpdateEnquiryStatus = async (id: string, newStatus: string) => {
    const currentPin = sessionStorage.getItem("aluteck_admin_pin") || pin;
    const res = await updateEnquiryStatusAction(id, newStatus, undefined, currentPin);
    if (res.success) {
      // Refresh local state
      handleLogin(currentPin);
    }
  };

  const handleUpdateComplaintStatus = async (id: string, newStatus: string, adminNotes?: string) => {
    const currentPin = sessionStorage.getItem("aluteck_admin_pin") || pin;
    const res = await updateComplaintStatusAction(id, newStatus, adminNotes, currentPin);
    if (res.success) {
      handleLogin(currentPin);
    }
  };

  // CSV Export for Leads
  const handleExportCSV = () => {
    if (!adminData || !adminData.enquiries.length) return;

    const headers = ["ID", "Date", "Full Name", "Phone", "Email", "City", "Product Series", "Source", "Status", "Requirements"];
    const rows = adminData.enquiries.map((e) => [
      e.id,
      new Date(e.createdAt).toISOString(),
      `"${e.fullName}"`,
      `"${e.phone}"`,
      `"${e.email}"`,
      `"${e.city}"`,
      `"${e.productSeries || ""}"`,
      `"${e.source || ""}"`,
      e.status,
      `"${(e.requirements || "").replace(/"/g, '""')}"`,
    ]);

    const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Aluteck_Leads_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Login Screen if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="bg-charcoal min-h-[85vh] flex items-center justify-center p-4 text-lightgrey">
        <div className="max-w-md w-full bg-graphite border border-graphite-border p-8 rounded-sm shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-gold/15 text-gold flex items-center justify-center mx-auto">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="font-heading font-extrabold text-2xl text-white">
              Administrator Portal
            </h2>
            <p className="text-xs text-textgrey">
              Secure access for ALUTECKSYSTEMS authorized engineering and management staff.
            </p>
          </div>

          {authError && (
            <div className="p-3 rounded bg-red-950/60 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{authError}</span>
            </div>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
            className="space-y-4 text-xs"
          >
            <div>
              <label className="block text-lightgrey font-medium mb-1.5">
                Staff Authorization PIN
              </label>
              <input
                type="password"
                required
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Enter PIN (Default: aluteck2026)"
                className="w-full bg-charcoal border border-graphite-border rounded px-4 py-3 text-white text-sm font-mono placeholder:text-textgrey focus:outline-none focus:border-gold"
              />
              <span className="text-[10px] text-textgrey font-mono mt-1 block">
                Standard configured PIN: <code className="text-gold">aluteck2026</code>
              </span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-sm bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-charcoal font-heading font-semibold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Unlock className="w-4 h-4" />
              <span>{loading ? "Authenticating..." : "Sign In to Admin Portal"}</span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  const filteredEnquiries = (adminData?.enquiries || []).filter((e) => {
    const matchesStatus = leadStatusFilter === "All" || e.status === leadStatusFilter;
    const matchesSearch =
      e.fullName.toLowerCase().includes(searchLead.toLowerCase()) ||
      e.email.toLowerCase().includes(searchLead.toLowerCase()) ||
      e.phone.toLowerCase().includes(searchLead.toLowerCase()) ||
      e.city.toLowerCase().includes(searchLead.toLowerCase()) ||
      (e.productSeries || "").toLowerCase().includes(searchLead.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="bg-charcoal min-h-screen pb-24 text-lightgrey">
      {/* Admin Header */}
      <section className="bg-graphite border-b border-graphite-border py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-gold block">
                ALUTECKSYSTEMS CONTROL CENTER
              </span>
              <h1 className="font-heading font-extrabold text-2xl text-white">
                Administrator Dashboard
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-textgrey">
                Connected: SQLite DB (dev.db)
              </span>
              <button
                onClick={handleLogout}
                className="px-3.5 py-1.5 rounded bg-charcoal border border-graphite-border hover:border-gold/50 text-xs text-lightgrey hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <LogOut className="w-3.5 h-3.5 text-gold" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="p-4 rounded bg-charcoal border border-graphite-border">
              <span className="text-[10px] font-mono text-textgrey uppercase block">
                Total Leads Received
              </span>
              <span className="font-heading font-extrabold text-2xl text-white mt-1 block">
                {adminData?.stats.totalEnquiries || 0}
              </span>
            </div>

            <div className="p-4 rounded bg-charcoal border border-gold/40">
              <span className="text-[10px] font-mono text-gold uppercase block">
                New Actionable Enquiries
              </span>
              <span className="font-heading font-extrabold text-2xl text-gold mt-1 block">
                {adminData?.stats.newEnquiries || 0}
              </span>
            </div>

            <div className="p-4 rounded bg-charcoal border border-graphite-border">
              <span className="text-[10px] font-mono text-textgrey uppercase block">
                Total Complaints Registered
              </span>
              <span className="font-heading font-extrabold text-2xl text-white mt-1 block">
                {adminData?.stats.totalComplaints || 0}
              </span>
            </div>

            <div className="p-4 rounded bg-charcoal border border-red-500/30">
              <span className="text-[10px] font-mono text-red-400 uppercase block">
                Open Support Tickets
              </span>
              <span className="font-heading font-extrabold text-2xl text-red-400 mt-1 block">
                {adminData?.stats.openComplaints || 0}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Modules Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-center gap-2 overflow-x-auto border-b border-graphite-border pb-4 no-scrollbar">
          <button
            onClick={() => setActiveTab("leads")}
            className={`px-4 py-2 rounded-sm text-xs font-heading font-semibold tracking-wider transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === "leads" ? "bg-gold text-charcoal shadow" : "bg-graphite text-lightgrey hover:text-white"
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Lead Management ({adminData?.enquiries.length || 0})</span>
          </button>

          <button
            onClick={() => setActiveTab("complaints")}
            className={`px-4 py-2 rounded-sm text-xs font-heading font-semibold tracking-wider transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === "complaints" ? "bg-gold text-charcoal shadow" : "bg-graphite text-lightgrey hover:text-white"
            }`}
          >
            <LifeBuoy className="w-4 h-4" />
            <span>Complaint Management ({adminData?.complaints.length || 0})</span>
          </button>

          <button
            onClick={() => setActiveTab("products")}
            className={`px-4 py-2 rounded-sm text-xs font-heading font-semibold tracking-wider transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === "products" ? "bg-gold text-charcoal shadow" : "bg-graphite text-lightgrey hover:text-white"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Product Catalogues (19 Systems)</span>
          </button>

          <button
            onClick={() => setActiveTab("projects")}
            className={`px-4 py-2 rounded-sm text-xs font-heading font-semibold tracking-wider transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === "projects" ? "bg-gold text-charcoal shadow" : "bg-graphite text-lightgrey hover:text-white"
            }`}
          >
            <FolderKanban className="w-4 h-4" />
            <span>Portfolio Projects ({PROJECTS_DATA.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("settings")}
            className={`px-4 py-2 rounded-sm text-xs font-heading font-semibold tracking-wider transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === "settings" ? "bg-gold text-charcoal shadow" : "bg-graphite text-lightgrey hover:text-white"
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Website Settings</span>
          </button>
        </div>

        {/* TAB 1: LEAD MANAGEMENT */}
        {activeTab === "leads" && (
          <div className="pt-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {/* Search */}
                <div className="relative min-w-[240px]">
                  <Search className="w-4 h-4 text-textgrey absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchLead}
                    onChange={(e) => setSearchLead(e.target.value)}
                    placeholder="Search leads by name, city, phone..."
                    className="w-full bg-graphite border border-graphite-border rounded px-3 pl-9 py-2 text-xs text-white placeholder:text-textgrey focus:outline-none focus:border-gold"
                  />
                </div>

                {/* Status Filter */}
                <select
                  value={leadStatusFilter}
                  onChange={(e) => setLeadStatusFilter(e.target.value)}
                  className="bg-graphite border border-graphite-border rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-gold"
                >
                  <option value="All">All Statuses</option>
                  {ENQUIRY_STATUSES.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>

              {/* CSV Export Button */}
              <button
                onClick={handleExportCSV}
                className="px-4 py-2 rounded bg-charcoal border border-gold/40 hover:bg-gold hover:text-charcoal text-gold text-xs font-heading font-semibold tracking-wider uppercase transition-colors flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export CSV</span>
              </button>
            </div>

            {/* Leads Table */}
            <div className="overflow-x-auto rounded-sm border border-graphite-border shadow-xl">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-graphite text-white uppercase text-[10px] tracking-wider border-b border-graphite-border">
                  <tr>
                    <th className="p-3">Date</th>
                    <th className="p-3">Client Contact</th>
                    <th className="p-3">Location</th>
                    <th className="p-3">Product of Interest</th>
                    <th className="p-3">Requirements</th>
                    <th className="p-3">Status Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-graphite-border bg-charcoal">
                  {filteredEnquiries.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="p-8 text-center text-textgrey">
                        No enquiries matching current filters.
                      </td>
                    </tr>
                  ) : (
                    filteredEnquiries.map((enq) => (
                      <tr key={enq.id} className="hover:bg-graphite/40 transition-colors">
                        <td className="p-3 text-[11px] text-textgrey whitespace-nowrap">
                          {new Date(enq.createdAt).toLocaleDateString("en-IN", {
                            month: "short",
                            day: "numeric",
                          })}
                        </td>
                        <td className="p-3 font-sans">
                          <span className="font-bold text-white block">{enq.fullName}</span>
                          <span className="text-[11px] text-textgrey block font-mono">{enq.phone}</span>
                          <span className="text-[11px] text-textgrey block font-mono">{enq.email}</span>
                        </td>
                        <td className="p-3 text-lightgrey whitespace-nowrap">{enq.city}</td>
                        <td className="p-3 text-gold font-bold">{enq.productSeries || "General Fenestration"}</td>
                        <td className="p-3 font-sans text-lightgrey max-w-xs truncate" title={enq.requirements}>
                          {enq.requirements}
                        </td>
                        <td className="p-3">
                          <select
                            value={enq.status}
                            onChange={(e) => handleUpdateEnquiryStatus(enq.id, e.target.value)}
                            className="bg-graphite border border-graphite-border rounded px-2.5 py-1 text-[11px] text-gold font-bold focus:outline-none focus:border-gold"
                          >
                            {ENQUIRY_STATUSES.map((st) => (
                              <option key={st} value={st}>
                                {st}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: COMPLAINT MANAGEMENT */}
        {activeTab === "complaints" && (
          <div className="pt-6 space-y-4">
            <div className="overflow-x-auto rounded-sm border border-graphite-border shadow-xl">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-graphite text-white uppercase text-[10px] tracking-wider border-b border-graphite-border">
                  <tr>
                    <th className="p-3">Reference No.</th>
                    <th className="p-3">Date</th>
                    <th className="p-3">Client</th>
                    <th className="p-3">Product / System</th>
                    <th className="p-3">Complaint Details</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-graphite-border bg-charcoal">
                  {(adminData?.complaints || []).length === 0 ? (
                    <tr>
                      <td colSpan={6} className="p-8 text-center text-textgrey">
                        No customer complaints currently registered in database.
                      </td>
                    </tr>
                  ) : (
                    adminData?.complaints.map((cmp) => (
                      <tr key={cmp.id} className="hover:bg-graphite/40 transition-colors">
                        <td className="p-3 text-gold font-bold whitespace-nowrap">{cmp.referenceNumber}</td>
                        <td className="p-3 text-textgrey whitespace-nowrap">
                          {new Date(cmp.createdAt).toLocaleDateString("en-IN")}
                        </td>
                        <td className="p-3 font-sans">
                          <span className="font-bold text-white block">{cmp.fullName}</span>
                          <span className="text-[11px] text-textgrey block font-mono">{cmp.phone} • {cmp.city}</span>
                        </td>
                        <td className="p-3 text-lightgrey">{cmp.productSeries || "Unspecified"}</td>
                        <td className="p-3 font-sans text-lightgrey max-w-sm">
                          <p>{cmp.complaintText}</p>
                          {cmp.adminNotes && (
                            <span className="text-[10px] text-gold font-mono block mt-1">
                              Note: {cmp.adminNotes}
                            </span>
                          )}
                        </td>
                        <td className="p-3">
                          <select
                            value={cmp.status}
                            onChange={(e) => handleUpdateComplaintStatus(cmp.id, e.target.value)}
                            className="bg-graphite border border-graphite-border rounded px-2.5 py-1 text-[11px] text-gold font-bold focus:outline-none"
                          >
                            {COMPLAINT_STATUSES.map((st) => (
                              <option key={st} value={st}>
                                {st}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: PRODUCT CATALOGUES OVERVIEW */}
        {activeTab === "products" && (
          <div className="pt-6 space-y-6">
            <div>
              <h3 className="font-heading font-bold text-base text-white">
                11 System Aluminium Series
              </h3>
              <p className="text-xs text-textgrey">
                Direct links to manage, verify Cardinal catalogue tables, and preview 2D profile blueprints.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-mono">
              {ALUMINIUM_SERIES_DATA.map((s) => (
                <div key={s.slug} className="p-4 rounded bg-graphite border border-graphite-border flex justify-between items-center">
                  <div>
                    <span className="text-gold font-bold block">{s.seriesCode}</span>
                    <span className="text-white block font-sans font-medium">{s.name}</span>
                    <span className="text-[11px] text-textgrey">{s.familyName}</span>
                  </div>
                  <Link
                    href={`/products/system-aluminium/${s.slug}`}
                    target="_blank"
                    className="p-2 rounded bg-charcoal text-gold hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-graphite-border">
              <h3 className="font-heading font-bold text-base text-white">
                8 Architectural Façade Systems
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
              {FACADE_SYSTEMS_DATA.map((f) => (
                <div key={f.slug} className="p-4 rounded bg-graphite border border-graphite-border flex justify-between items-center">
                  <div>
                    <span className="text-white font-bold block font-sans">{f.name}</span>
                    <span className="text-[11px] text-gold">Saint-Gobain / Jindal</span>
                  </div>
                  <Link
                    href={`/products/facade-systems/${f.slug}`}
                    target="_blank"
                    className="p-2 rounded bg-charcoal text-gold hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: PORTFOLIO PROJECTS */}
        {activeTab === "projects" && (
          <div className="pt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PROJECTS_DATA.map((p) => (
                <div key={p.slug} className="p-4 rounded bg-graphite border border-graphite-border flex justify-between items-start text-xs">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-gold uppercase">{p.category}</span>
                    <h4 className="font-heading font-bold text-white text-sm">{p.title}</h4>
                    <p className="text-textgrey font-mono text-[11px]">{p.location} • {p.completionYear}</p>
                    <p className="text-textgrey">{p.shortDesc}</p>
                  </div>
                  <Link
                    href={`/projects/${p.slug}`}
                    target="_blank"
                    className="p-2 rounded bg-charcoal text-gold hover:text-white transition-colors flex-shrink-0"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: WEBSITE SETTINGS */}
        {activeTab === "settings" && (
          <div className="pt-6 max-w-2xl space-y-6 text-xs">
            <div className="p-6 rounded bg-graphite border border-graphite-border space-y-4">
              <h3 className="font-heading font-bold text-base text-white">
                Live System Configurations
              </h3>

              <div className="space-y-3 font-mono">
                <div className="flex justify-between border-b border-graphite-border pb-2">
                  <span className="text-textgrey">Company Name:</span>
                  <span className="text-white font-bold">{COMPANY_INFO.name}</span>
                </div>
                <div className="flex justify-between border-b border-graphite-border pb-2">
                  <span className="text-textgrey">Phone:</span>
                  <span className="text-gold">{COMPANY_INFO.phone}</span>
                </div>
                <div className="flex justify-between border-b border-graphite-border pb-2">
                  <span className="text-textgrey">Email:</span>
                  <span className="text-white">{COMPANY_INFO.email}</span>
                </div>
                <div className="flex justify-between border-b border-graphite-border pb-2">
                  <span className="text-textgrey">WhatsApp:</span>
                  <span className="text-[#25D366]">{COMPANY_INFO.whatsappNumber}</span>
                </div>
                <div className="flex justify-between border-b border-graphite-border pb-2">
                  <span className="text-textgrey">Studio Address:</span>
                  <span className="text-white text-right max-w-xs">{COMPANY_INFO.officeAddress.street}, {COMPANY_INFO.officeAddress.city}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-textgrey">Working Hours:</span>
                  <span className="text-white">{COMPANY_INFO.workingHours}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
