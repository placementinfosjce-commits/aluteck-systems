# ALUTECKSYSTEMS — Architectural Fenestration & Façade Solutions

A production-ready multi-page corporate website for **ALUTECKSYSTEMS**, specializing in System Aluminium Windows & Doors, Architectural Façade Systems, and Precision Glazing.

## 1. Project Overview & Features

- **Luxury Architectural Aesthetic**: Deep charcoal (`#101820`), Graphite (`#1D2730`), and Champagne Gold (`#C5A46D`) palette with glassmorphism and Plus Jakarta Sans / Inter typography.
- **System Aluminium Catalogue (11 Dedicated Series)**:
  - **Slim Series**: CS.25, CS.29, CS.32, CS.37
  - **Opulence & Grill Series**: COS.28, COS.35, COS.49
  - **Casement Series**: CC.40, CC.50, COC.40
  - **Bifold & Slide Series**: BS.50 (S&F 50)
  - Verified section numbers, profile weights (kg/m), dimensions, glass compatibility, and 2D CAD profile blueprints.
- **Architectural Façade Systems (8 Categories)**:
  - Structural Glazing, Curtain Wall Glazing, Spider Glazing, ACP Elevation, Glass Partitions, Glass Canopies, Skylights, Façade Louvers.
  - Specified with Saint-Gobain glass (Infinity solar-control) and Jindal Aluminium 6063-T6 extrusions.
- **uPVC Windows & Doors**: Dedicated multi-chamber insulation landing pages.
- **Interactive 2D CAD Blueprint Viewer**: Zoomable vector cross-sections with SVG export.
- **Surface Engineering (170+ Finishes)**: Real-time interactive profile swatch selector.
- **Architectural Project Portfolio**: 4-line challenge breakdown (Site challenge, Technical consideration, Solution adopted, Final outcome).
- **Customer Support & Complaint Desk**: Unique ticket generator (`ALT-CMP-2026-XXXX`) with real-time status tracker.
- **Secure Administrator Portal (`/admin`)**: Lead management with CSV export, complaint resolution, product catalogues, and site settings.
- **Interactive Chatbot & Floating Communications**: Quick action guidance, click-to-call, and WhatsApp enquiry integration.

---

## 2. Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: SQLite with Prisma ORM (production ready for PostgreSQL)
- **Icons**: Lucide React
- **Validation**: Zod + React Hook Form
- **SEO**: Dynamic XML sitemap, robots.txt, Organization schema markup

---

## 3. Environment Variables

Create `.env` in the root directory:

```env
DATABASE_URL="file:./dev.db"
NEXT_PUBLIC_SITE_URL="https://alutecksystems.com"
NEXT_PUBLIC_COMPANY_NAME="ALUTECKSYSTEMS"
NEXT_PUBLIC_PHONE="+91 98765 43210"
NEXT_PUBLIC_EMAIL="enquiry@alutecksystems.com"
NEXT_PUBLIC_WHATSAPP="+919876543210"
ADMIN_PIN="aluteck2026"
```

---

## 4. Getting Started

### Install Dependencies
```bash
npm install
```

### Setup Database & Prisma
```bash
npx prisma generate
npx prisma db push
```

### Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the website.

### Production Build
```bash
npm run build
npm run start
```

---

## 5. Administrator Portal

- **Route**: `/admin`
- **Default PIN**: `aluteck2026`
- Features: View and filter leads, change lead status, export leads to CSV, review customer complaint tickets, and view catalogue configurations.
