import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";
import CookieConsent from "@/components/CookieConsent";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: {
    default: "ALUTECKSYSTEMS | Premium Architectural Aluminium Windows, Doors & Façade Systems",
    template: "%s | ALUTECKSYSTEMS",
  },
  description:
    "Engineered for strength, designed for elegance. Premium System Aluminium Windows & Doors (Slim, Opulence, Casement, Bifold) and Architectural Façade Systems with Saint-Gobain glazing and Jindal Aluminium extrusions.",
  keywords: [
    "System Aluminium Windows",
    "Slim Aluminium Sliding Windows",
    "Cardinal CS.25",
    "Cardinal CS.32",
    "Cardinal COS.49",
    "Aluminium Casement Windows",
    "Curtain Wall Glazing",
    "Structural Glazing",
    "Spider Glazing",
    "ACP Elevation",
    "Saint-Gobain Facade Glass",
    "Jindal Aluminium Profiles",
    "Architectural Glazing India",
  ],
  authors: [{ name: "ALUTECKSYSTEMS" }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://alutecksystems.com"),
  openGraph: {
    title: "ALUTECKSYSTEMS | Engineered for Strength. Designed for Elegance.",
    description:
      "Discover premium System Aluminium Windows, Doors and Façade Solutions designed to elevate modern architecture.",
    url: "https://alutecksystems.com",
    siteName: "ALUTECKSYSTEMS",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "ALUTECKSYSTEMS Architectural Pavilion",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ALUTECKSYSTEMS | Architectural Windows & Façades",
    description: "Premium System Aluminium Windows, Doors and Façade Solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_INFO.name,
    legalName: COMPANY_INFO.legalName,
    url: "https://alutecksystems.com",
    logo: "https://alutecksystems.com/logo.png",
    description: COMPANY_INFO.shortDescription,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${COMPANY_INFO.officeAddress.building}, ${COMPANY_INFO.officeAddress.street}`,
      addressLocality: COMPANY_INFO.officeAddress.city,
      addressRegion: COMPANY_INFO.officeAddress.state,
      postalCode: COMPANY_INFO.officeAddress.postalCode,
      addressCountry: "IN",
    },
    sameAs: [
      COMPANY_INFO.socials.facebook,
      COMPANY_INFO.socials.instagram,
      COMPANY_INFO.socials.linkedin,
      COMPANY_INFO.socials.youtube,
      COMPANY_INFO.socials.pinterest,
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-charcoal text-offwhite antialiased">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <FloatingWidgets />
        <CookieConsent />
      </body>
    </html>
  );
}
