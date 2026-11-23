"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, Shield, Check, X, Settings2 } from "lucide-react";

interface CookiePreferences {
  strictlyNecessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    strictlyNecessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem("aluteck_cookie_consent");
    if (!saved) {
      // Delay display slightly for smooth page entry
      const timer = setTimeout(() => setShowBanner(true), 1200);
      return () => clearTimeout(timer);
    } else {
      try {
        setPreferences(JSON.parse(saved));
      } catch (e) {
        // ignore
      }
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem("aluteck_cookie_consent", JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    setShowCustomize(false);
  };

  const handleAcceptAll = () => {
    savePreferences({
      strictlyNecessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    });
  };

  const handleRejectNonEssential = () => {
    savePreferences({
      strictlyNecessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    });
  };

  const handleSaveCustom = () => {
    savePreferences(preferences);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:max-w-lg z-50 bg-graphite/95 backdrop-blur-md border border-graphite-border p-5 rounded-sm shadow-2xl animate-in fade-in slide-in-from-bottom-5 duration-300">
      {!showCustomize ? (
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded bg-gold/15 text-gold flex-shrink-0 mt-0.5">
              <Cookie className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-semibold text-white text-sm">
                Cookie & Privacy Choices
              </h4>
              <p className="text-xs text-textgrey leading-relaxed mt-1">
                We use cookies to optimize navigation, analyze architectural traffic, and deliver personalized system enquiries. You can accept all or customize preferences.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <button
              onClick={handleAcceptAll}
              className="px-3.5 py-2 text-xs font-heading font-semibold rounded-sm bg-gold text-charcoal hover:bg-gold-light transition-colors"
            >
              Accept All
            </button>
            <button
              onClick={handleRejectNonEssential}
              className="px-3 py-2 text-xs font-heading font-medium rounded-sm bg-charcoal border border-graphite-border text-lightgrey hover:text-white hover:border-gold/40 transition-colors"
            >
              Reject Non-Essential
            </button>
            <button
              onClick={() => setShowCustomize(true)}
              className="px-2.5 py-2 text-xs text-textgrey hover:text-gold flex items-center gap-1 transition-colors"
            >
              <Settings2 className="w-3.5 h-3.5" />
              <span>Customize</span>
            </button>
          </div>

          <div className="text-[10px] text-textgrey pt-1 border-t border-graphite-border/50 flex justify-between">
            <Link href="/cookie-policy" className="hover:underline text-gold/80">
              Cookie Policy
            </Link>
            <Link href="/privacy-policy" className="hover:underline text-gold/80">
              Privacy Policy
            </Link>
          </div>
        </div>
      ) : (
        /* Customize Modal */
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-graphite-border pb-2">
            <h4 className="font-heading font-semibold text-white text-sm flex items-center gap-2">
              <Shield className="w-4 h-4 text-gold" />
              <span>Customize Preferences</span>
            </h4>
            <button
              onClick={() => setShowCustomize(false)}
              className="p-1 text-textgrey hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2.5 text-xs max-h-60 overflow-y-auto pr-1">
            {/* Strictly Necessary */}
            <div className="flex items-center justify-between p-2 rounded bg-charcoal border border-graphite-border">
              <div>
                <span className="font-medium text-white block">Strictly Necessary</span>
                <span className="text-[10px] text-textgrey">Essential for website operation and security</span>
              </div>
              <span className="text-[10px] bg-gold/20 text-gold px-2 py-0.5 rounded font-mono">Always Active</span>
            </div>

            {/* Analytics */}
            <label className="flex items-center justify-between p-2 rounded bg-charcoal border border-graphite-border cursor-pointer">
              <div>
                <span className="font-medium text-white block">Analytics Cookies</span>
                <span className="text-[10px] text-textgrey">Anonymous metrics on page visits and system usage</span>
              </div>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                className="w-4 h-4 accent-gold cursor-pointer"
              />
            </label>

            {/* Functional */}
            <label className="flex items-center justify-between p-2 rounded bg-charcoal border border-graphite-border cursor-pointer">
              <div>
                <span className="font-medium text-white block">Functional Cookies</span>
                <span className="text-[10px] text-textgrey">Remember selected swatches and drawing zoom settings</span>
              </div>
              <input
                type="checkbox"
                checked={preferences.functional}
                onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                className="w-4 h-4 accent-gold cursor-pointer"
              />
            </label>

            {/* Marketing */}
            <label className="flex items-center justify-between p-2 rounded bg-charcoal border border-graphite-border cursor-pointer">
              <div>
                <span className="font-medium text-white block">Marketing Cookies</span>
                <span className="text-[10px] text-textgrey">Tailored architectural project communications</span>
              </div>
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                className="w-4 h-4 accent-gold cursor-pointer"
              />
            </label>
          </div>

          <div className="flex items-center justify-end gap-2 pt-2 border-t border-graphite-border">
            <button
              onClick={() => setShowCustomize(false)}
              className="px-3 py-1.5 text-xs rounded border border-graphite-border text-lightgrey hover:text-white"
            >
              Back
            </button>
            <button
              onClick={handleSaveCustom}
              className="px-4 py-1.5 text-xs font-semibold rounded bg-gold text-charcoal hover:bg-gold-light"
            >
              Save Preferences
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
