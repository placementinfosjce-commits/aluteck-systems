import React from "react";
import HeroSection from "@/components/home/HeroSection";
import WhoWeAreSection from "@/components/home/WhoWeAreSection";
import ProductShowcaseSection from "@/components/home/ProductShowcaseSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import InstallationSupportSection from "@/components/home/InstallationSupportSection";
import FeaturedProjectsSection from "@/components/home/FeaturedProjectsSection";
import ClientLogosSection from "@/components/home/ClientLogosSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      {/* SECTION 1 — HERO BANNER WITH LEAD GENERATION FORM */}
      <HeroSection />

      {/* SECTION 2 — WE ARE ALUTECKSYSTEMS */}
      <WhoWeAreSection />

      {/* SECTION 3 — INTERACTIVE PRODUCT SHOWCASE (TABS: ALUMINIUM & FAÇADE) */}
      <ProductShowcaseSection />

      {/* SECTION 4 — WHY CHOOSE ALUTECKSYSTEMS (6 TRUST CARDS) */}
      <WhyChooseUsSection />

      {/* SECTION 5 — INSTALLATION & AFTER-SALES SUPPORT (6 INDICATORS) */}
      <InstallationSupportSection />

      {/* SECTION 6 — OUR PROJECTS (HORIZONTAL GALLERY) */}
      <FeaturedProjectsSection />

      {/* SECTION 7 — TRUSTED BY OUR CLIENTS (6 MONOCHROME TO COLOR LOGOS) */}
      <ClientLogosSection />

      {/* SECTION 8 — CLIENT REVIEWS (TESTIMONIALS & GOOGLE CTA) */}
      <TestimonialsSection />
    </>
  );
}
