export interface TechnicalTableItem {
  system?: string;
  type?: string;
  sectionNo: string;
  width?: string;
  height?: string;
  weight?: string;
  shutterType?: string;
  glassCompatibility?: string;
  component?: string;
  spec?: string;
  compatibleGlass?: string;
}

export interface ProfileDrawing {
  id: string;
  title: string;
  sectionNo: string;
  category: "track" | "shutter" | "interlock" | "mullion" | "clip";
  dimensions: string;
  weight: string;
  cadType: string;
}

export interface AluminiumSeries {
  slug: string;
  name: string;
  seriesCode: string;
  familyName: string;
  familySlug: "slim-series" | "opulence-series" | "casement-series" | "bifold-slide-series";
  nominalSize: string;
  tagline: string;
  heroImage: string;
  galleryImages: string[];
  shortDesc: string;
  fullOverview: string;
  applications: string[];
  features: { title: string; description: string }[];
  trackSpecs?: TechnicalTableItem[];
  shutterSpecs?: TechnicalTableItem[];
  interlockSpecs?: TechnicalTableItem[];
  accessories?: TechnicalTableItem[];
  profileDrawings: ProfileDrawing[];
  warranty: {
    product: string;
    finish: string;
    hardware: string;
    workmanship: string;
    notes: string;
  };
  faqs: { question: string; answer: string }[];
  relatedSeries: string[];
}

export const ALUMINIUM_FAMILIES = [
  {
    slug: "slim-series",
    name: "Slim Series",
    headline: "System Aluminium Sliding Windows & Doors",
    description:
      "Explore contemporary slim-profile aluminium sliding solutions designed for elegant sightlines, natural illumination, smooth operation and seamless connections between indoor and outdoor environments.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    series: ["cs-25", "cs-29", "cs-32", "cs-37"],
  },
  {
    slug: "opulence-series",
    name: "Opulence & Grill Series",
    headline: "Aluminium Sliding Systems",
    description:
      "Discover premium sliding configurations designed to combine strong architectural presence, practical functionality and adaptable design options, including compatible grill configurations where supported.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    series: ["cos-28", "cos-35", "cos-49"],
  },
  {
    slug: "casement-series",
    name: "Aluminium Casement Windows & Doors",
    headline: "Engineered Openable Casement Systems",
    description:
      "Discover refined casement window and door systems designed for controlled ventilation, reliable operation and a timeless architectural appearance.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    series: ["cc-40", "cc-50", "coc-40"],
  },
  {
    slug: "bifold-slide-series",
    name: "Bifold & Slide Systems",
    headline: "Top-Sliding Folding Systems (S&F 50)",
    description:
      "Create flexible transitions between interior and exterior spaces with premium bifold and sliding system solutions designed for contemporary architecture.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    series: ["bs-50"],
  },
];

export const ALUMINIUM_SERIES_DATA: AluminiumSeries[] = [
  {
    slug: "cs-25",
    name: "CS.25 mm Slim System",
    seriesCode: "CS.25",
    familyName: "Slim Series",
    familySlug: "slim-series",
    nominalSize: "25 mm",
    tagline: "Ultra-slim sightlines with engineered structural multi-track configurations.",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDesc:
      "The CS.25 is Cardinal Aluminium's signature 25 mm slim-profile sliding window and door system engineered for minimal sightlines, abundant natural lighting and smooth multi-track gliding.",
    fullOverview:
      "Engineered for architectural projects requiring expansive panoramic views and minimal framing, the CS.25 series features precision-extruded aluminium alloy 6063-T6 profiles. Available in 2-Track Basic, 2-Track Premium, 2-Track 3-in-1, and 3-Track configurations, the CS.25 incorporates a 25.75 mm ultra-slim interlock shutter alongside heavy-duty reinforcement options for elevated wind load requirements.",
    applications: [
      "Luxury residential villas and penthouses",
      "Living room transitions to outdoor verandas",
      "High-rise master bedrooms with expansive viewports",
      "Garden-facing architectural elevations",
      "Contemporary luxury hospitality suites",
    ],
    features: [
      {
        title: "25.75 mm Slim Interlock",
        description: "Minimalist vertical interlock section (Profile 1177) that maximizes the clear glass viewing area.",
      },
      {
        title: "Multi-Track Flexibility",
        description: "Basic, Premium and 3-in-1 track options allowing simultaneous glass panels and integrated insect mesh.",
      },
      {
        title: "Single & Double Glazing",
        description: "Dedicated shutter extrusions accommodating 4–8 mm single glass up to 16 mm insulated glass units.",
      },
      {
        title: "Reinforced Wind-Load Interlock",
        description: "Heavy-duty reinforcement interlock shutter (Section 1176) engineered for higher elevation installations.",
      },
      {
        title: "Integrated Reducer Clips",
        description: "Precision-engineered reducer clips ensuring exact seal compression across multiple glass thicknesses.",
      },
      {
        title: "Smooth Concealed Rollers",
        description: "Engineered tandem nylon rollers on stainless steel tracks for silent and durable sliding motion.",
      },
    ],
    trackSpecs: [
      { system: "2 Track Basic", sectionNo: "1110", width: "51 mm", height: "40 mm", weight: "0.883 kg/m" },
      { system: "2 Track Premium", sectionNo: "1037", width: "63.4 mm", height: "42.75 mm", weight: "1.168 kg/m" },
      { system: "2 Track 3-in-1", sectionNo: "1336", width: "126 mm", height: "42.75 mm", weight: "1.780 kg/m" },
      { system: "3 Track Basic", sectionNo: "1109", width: "89 mm", height: "40 mm", weight: "1.471 kg/m" },
      { system: "3 Track Premium", sectionNo: "1174", width: "101.4 mm", height: "42.75 mm", weight: "1.676 kg/m" },
      { system: "3 Track 3-in-1", sectionNo: "1337", width: "150 mm", height: "42.75 mm", weight: "2.226 kg/m" },
    ],
    shutterSpecs: [
      { sectionNo: "1095", shutterType: "Single-glass shutter", glassCompatibility: "4–8 mm" },
      { sectionNo: "1094", shutterType: "Glass shutter", glassCompatibility: "5–16 mm" },
      { sectionNo: "1106", shutterType: "Mosquito shutter", glassCompatibility: "Mesh" },
      { sectionNo: "1176", shutterType: "Reinforcement interlock shutter", glassCompatibility: "5–16 mm" },
      { sectionNo: "1177", shutterType: "Slim interlock shutter (25.75 mm)", glassCompatibility: "5–16 mm" },
    ],
    profileDrawings: [
      { id: "1037", title: "2-Track Premium Frame", sectionNo: "1037", category: "track", dimensions: "63.4 mm × 42.75 mm", weight: "1.168 kg/m", cadType: "CAD 2D Cross-Section" },
      { id: "1174", title: "3-Track Premium Frame", sectionNo: "1174", category: "track", dimensions: "101.4 mm × 42.75 mm", weight: "1.676 kg/m", cadType: "CAD 2D Cross-Section" },
      { id: "1094", title: "Glass Shutter Profile", sectionNo: "1094", category: "shutter", dimensions: "For 5–16 mm Glazing", weight: "Cardinal Catalogue Spec", cadType: "CAD 2D Shutter Section" },
      { id: "1177", title: "25.75mm Slim Interlock", sectionNo: "1177", category: "interlock", dimensions: "25.75 mm Sightline", weight: "Slim Architectural Interlock", cadType: "CAD 2D Interlock Detail" },
    ],
    warranty: {
      product: "10 Years against aluminium extrusion manufacturing defects",
      finish: "10 Years on approved architectural powder coating (RAL compliant)",
      hardware: "2 Years warranty on certified roller assemblies and locking mechanisms",
      workmanship: "1 Year comprehensive installation workmanship warranty",
      notes: "Warranty terms are subject to verified site conditions, regular maintenance as per guidelines, and use of approved hardware accessories.",
    },
    faqs: [
      {
        question: "Where is the CS.25 system best suited in modern homes?",
        answer: "The CS.25 is ideal for living rooms, master bedrooms, and terrace openings where maximum glass area and minimal frame visibility are desired.",
      },
      {
        question: "Can an integrated mosquito mesh shutter be added to CS.25?",
        answer: "Yes, using the 3-Track Premium or 3-in-1 frame options (e.g., Section 1336 / 1337), a dedicated mosquito shutter (Section 1106) operates on its own track.",
      },
      {
        question: "What is the maximum glass thickness supported by CS.25?",
        answer: "The CS.25 supports up to 16 mm double glazing using shutter profile 1094 and up to 8 mm single glass using profile 1095.",
      },
      {
        question: "What locking options can be fitted onto the CS.25 system?",
        answer: "The system supports slim recessed touch locks, concealed flush levers, and multipoint shoot-bolt locks for enhanced security.",
      },
    ],
    relatedSeries: ["cs-29", "cs-32", "cos-28"],
  },
  {
    slug: "cs-29",
    name: "CS.29 mm Slim System",
    seriesCode: "CS.29",
    familyName: "Slim Series",
    familySlug: "slim-series",
    nominalSize: "29 mm",
    tagline: "Reinforced 29 mm sliding system balancing slim geometry with acoustic performance.",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDesc:
      "A 29 mm sliding window and door system engineered for residential and commercial spaces, offering Basic, Premium and Economy configurations with glass accommodation up to 22 mm.",
    fullOverview:
      "The Cardinal CS.29 sliding system is designed for mid-to-high rise residential and commercial applications where acoustic dampening, dust protection, and structural stability are vital. Featuring a 29 × 65 mm shutter geometry with 16-gauge thickness, it supports 2-Track and 3-Track frames in Basic, Premium, and Economy configurations.",
    applications: [
      "High-rise apartments facing busy city streets (acoustic isolation)",
      "Balcony enclosures with monsoon wind protection",
      "Commercial office meeting rooms and executive terraces",
      "Residential living areas requiring integrated bug mesh",
    ],
    features: [
      {
        title: "Extended 5–22 mm Glazing",
        description: "Accommodates acoustic laminates and high-performance insulated double glass units up to 22 mm.",
      },
      {
        title: "Triple Track Configuration",
        description: "100.2 mm wide 3-Track Premium frame (Section 1175) for 3-panel and 6-panel expansive openings.",
      },
      {
        title: "16-Gauge Wall Thickness",
        description: "Robust profile walls engineered for structural rigidity under monsoon rain and high wind exposure.",
      },
      {
        title: "Multipoint Security Lock",
        description: "Accommodates automatic snap locks, concealed manual flush levers, and multipoint euro-groove rods.",
      },
      {
        title: "Acoustic & Dust Seals",
        description: "High-density siliconized brush seals and EPDM gaskets for exceptional sound reduction and dust protection.",
      },
    ],
    trackSpecs: [
      { system: "2 Track", type: "Basic", sectionNo: "1029", width: "50 mm", height: "47.7 mm", weight: "1.150 kg/m" },
      { system: "2 Track", type: "Premium", sectionNo: "1038", width: "64.4 mm", height: "50.2 mm", weight: "1.317 kg/m" },
      { system: "2 Track", type: "Economy", sectionNo: "1110", width: "51 mm", height: "40 mm", weight: "0.883 kg/m" },
      { system: "3 Track", type: "Basic", sectionNo: "1027", width: "85.8 mm", height: "47.7 mm", weight: "1.675 kg/m" },
      { system: "3 Track", type: "Premium", sectionNo: "1175", width: "100.2 mm", height: "50.2 mm", weight: "1.943 kg/m" },
      { system: "3 Track", type: "Economy", sectionNo: "1109", width: "89 mm", height: "40 mm", weight: "1.417 kg/m" },
    ],
    shutterSpecs: [
      { sectionNo: "29x65", shutterType: "Shutter 29 × 65 mm", glassCompatibility: "5–22 mm", spec: "16-gauge nominal wall thickness" },
      { sectionNo: "Slim-Int", shutterType: "Single & Double Slim Interlock", glassCompatibility: "5–22 mm", spec: "Slim profile sightline" },
    ],
    profileDrawings: [
      { id: "1038", title: "2-Track Premium Frame", sectionNo: "1038", category: "track", dimensions: "64.4 mm × 50.2 mm", weight: "1.317 kg/m", cadType: "CAD 2D Cross-Section" },
      { id: "1175", title: "3-Track Premium Frame", sectionNo: "1175", category: "track", dimensions: "100.2 mm × 50.2 mm", weight: "1.943 kg/m", cadType: "CAD 2D Cross-Section" },
      { id: "1029", title: "2-Track Basic Frame", sectionNo: "1029", category: "track", dimensions: "50 mm × 47.7 mm", weight: "1.150 kg/m", cadType: "CAD 2D Cross-Section" },
      { id: "1027", title: "3-Track Basic Frame", sectionNo: "1027", category: "track", dimensions: "85.8 mm × 47.7 mm", weight: "1.675 kg/m", cadType: "CAD 2D Cross-Section" },
    ],
    warranty: {
      product: "10 Years on aluminium extrusions against structural deformation",
      finish: "10 Years on architectural powder coating and anodised finishes",
      hardware: "2 Years warranty on rollers, guide blocks and multipoint hardware",
      workmanship: "1 Year installation workmanship warranty",
      notes: "Warranty covers normal environmental conditions and verified fabrications.",
    },
    faqs: [
      {
        question: "What makes the CS.29 distinct from CS.25?",
        answer: "The CS.29 offers a slightly deeper 29 × 65 mm shutter structure supporting thicker double glazing up to 22 mm and heavier sash spans.",
      },
      {
        question: "Can CS.29 reduce street noise effectively?",
        answer: "Yes, when paired with Saint-Gobain 22 mm DGU acoustic laminated glass, CS.29 significantly dampens ambient city noise.",
      },
    ],
    relatedSeries: ["cs-25", "cs-32", "cos-35"],
  },
  {
    slug: "cs-32",
    name: "CS.32 mm Sliding System",
    seriesCode: "CS.32",
    familyName: "Slim Series",
    familySlug: "slim-series",
    nominalSize: "32 mm",
    tagline: "Heavy-duty slim sliding system for monumental panel heights and DGU glass.",
    heroImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDesc:
      "A 32 mm aluminium sliding system designed for larger panels, offering Basic and Premium configurations with shutter compatibility up to 24 mm DGU.",
    fullOverview:
      "The Cardinal CS.32 system is designed for high-end residential and commercial projects requiring tall floor-to-ceiling glass panels. With track widths up to 115.57 mm and shutter sections supporting glass from 4 mm to 24 mm, CS.32 delivers smooth operation and high resistance to deflection.",
    applications: [
      "Floor-to-ceiling villa sliding glass walls",
      "Waterfront and coastal residences subject to heavy winds",
      "Premium hotel suite terraces and banquet halls",
      "Large penthouse living room enclosures",
    ],
    features: [
      {
        title: "Expansive 24 mm Glazing Cavity",
        description: "Double-glass shutter (Section 1090) supporting high-performance insulated glass up to 24 mm.",
      },
      {
        title: "High-Load Rolling Geometry",
        description: "Engineered heavy-load stainless steel tandem rollers capable of supporting large architectural glass panels.",
      },
      {
        title: "2-Track & 3-Track Premium Frames",
        description: "Heavyweight 2.099 kg/m 3-Track frame (Section 1343) delivering structural integrity.",
      },
      {
        title: "Reinforced Interlock (Section 1196)",
        description: "Deep interlock chamber preventing panel rattling during intense weather events.",
      },
    ],
    trackSpecs: [
      { system: "2 Track", type: "Premium", sectionNo: "1342", width: "75 mm", height: "50 mm", weight: "1.409 kg/m" },
      { system: "2 Track", type: "Basic", sectionNo: "1088", width: "74 mm", height: "47.2 mm", weight: "1.444 kg/m" },
      { system: "2 Track M", type: "Mosquito option", sectionNo: "1117", width: "76.45 mm", height: "54.4 mm", weight: "1.535 kg/m" },
      { system: "3 Track", type: "Premium", sectionNo: "1343", width: "114.4 mm", height: "50 mm", weight: "2.099 kg/m" },
      { system: "3 Track", type: "Basic", sectionNo: "1440", width: "115.57 mm", height: "47.2 mm", weight: "2.206 kg/m" },
    ],
    shutterSpecs: [
      { sectionNo: "1089", shutterType: "Standard shutter", glassCompatibility: "4–8 mm", weight: "1.038 kg/m" },
      { sectionNo: "1501", shutterType: "Standard shutter", glassCompatibility: "4–8 mm", weight: "1.064 kg/m" },
      { sectionNo: "1090", shutterType: "Double-glass shutter", glassCompatibility: "5–24 mm", weight: "0.947 kg/m" },
      { sectionNo: "1196", shutterType: "Reinforcement interlock", glassCompatibility: "5–22 mm", weight: "1.034 kg/m" },
      { sectionNo: "1051", shutterType: "Slim interlock", glassCompatibility: "5–24 mm", weight: "0.596 kg/m" },
      { sectionNo: "1036", shutterType: "Mosquito shutter", glassCompatibility: "Mesh", weight: "0.929 kg/m" },
    ],
    accessories: [
      { component: "Mosquito middle section", sectionNo: "1410" },
      { component: "Universal interlock clip", sectionNo: "1091" },
      { component: "Two-side interlock clip", sectionNo: "1345" },
      { component: "Single-glass middle section", sectionNo: "1408" },
      { component: "Centre-opening meeting section", sectionNo: "1346" },
      { component: "Mosquito shutter clip", sectionNo: "1269" },
    ],
    profileDrawings: [
      { id: "1342", title: "2-Track Premium Frame", sectionNo: "1342", category: "track", dimensions: "75 mm × 50 mm", weight: "1.409 kg/m", cadType: "CAD 2D Cross-Section" },
      { id: "1343", title: "3-Track Premium Frame", sectionNo: "1343", category: "track", dimensions: "114.4 mm × 50 mm", weight: "2.099 kg/m", cadType: "CAD 2D Cross-Section" },
      { id: "1090", title: "Double-Glass Shutter", sectionNo: "1090", category: "shutter", dimensions: "5–24 mm Glazing", weight: "0.947 kg/m", cadType: "CAD 2D Shutter Section" },
      { id: "1196", title: "Reinforcement Interlock", sectionNo: "1196", category: "interlock", dimensions: "Structural Interlock", weight: "1.034 kg/m", cadType: "CAD 2D Interlock Detail" },
    ],
    warranty: {
      product: "10 Years on aluminium extrusions",
      finish: "10 Years on powder coated / anodised finish",
      hardware: "3 Years on heavy-duty rollers and locking rods",
      workmanship: "1 Year installation warranty",
      notes: "Subject to verified structural calculations and approved spans.",
    },
    faqs: [
      {
        question: "Can CS.32 support 3-metre high glass panels?",
        answer: "Yes, when specified with the reinforcement interlock profile (1196) and verified wind-load calculations.",
      },
    ],
    relatedSeries: ["cs-29", "cs-37", "cos-49"],
  },
  {
    slug: "cs-37",
    name: "CS.37 mm Architectural System",
    seriesCode: "CS.37",
    familyName: "Slim Series",
    familySlug: "slim-series",
    nominalSize: "37 mm",
    tagline: "Architectural 37 mm sliding system accommodating triple-glazing up to 31 mm.",
    heroImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDesc:
      "A 37 mm aluminium sliding system designed for residential and commercial spaces requiring maximum glass insulation (up to 31 mm DGU) and large span panels.",
    fullOverview:
      "The Cardinal CS.37 system is an architectural sliding system built to deliver high thermal and acoustic performance. Designed to support insulated glass up to 31 mm thickness, the CS.37 incorporates 140 mm+ multi-track extrusions with shutter profiles weighing up to 1.397 kg/m.",
    applications: [
      "Luxury estate living areas facing gardens and swimming pools",
      "Cold-climate and tropical acoustic installations",
      "Commercial showroom glass façades with sliding opening vents",
    ],
    features: [
      {
        title: "Up to 31 mm Glazing Range",
        description: "Double-glass shutter (Section 1210) accommodates 18–31 mm high-performance glass units.",
      },
      {
        title: "140.2 mm 3-Track Frame",
        description: "Heavy 2.544 kg/m profile (Section 1074) ensures solid tracking for massive panels.",
      },
      {
        title: "Mosquito Screen Integration",
        description: "Integrated mosquito screen shutter (Section 1259) designed specifically for 37 mm profile geometry.",
      },
      {
        title: "Slim & Reinforced Interlocks",
        description: "Interlock choices from 0.690 kg/m slim profile (1195) to 1.209 kg/m reinforcement (1198).",
      },
    ],
    trackSpecs: [
      { system: "2 Track", type: "Premium", sectionNo: "1075", width: "90.1 mm", height: "53 mm", weight: "1.672 kg/m" },
      { system: "3 Track", type: "Premium", sectionNo: "1074", width: "140.2 mm", height: "53 mm", weight: "2.544 kg/m" },
      { system: "2 Track", type: "Top & Bottom", sectionNo: "1513", width: "95.4 mm", height: "42 mm", weight: "1.644 kg/m" },
      { system: "3 Track", type: "Top & Bottom", sectionNo: "1514", width: "145.2 mm", height: "42 mm", weight: "2.374 kg/m" },
      { system: "2 Track", type: "Premium Side", sectionNo: "1273", width: "100 mm", height: "23.3 mm", weight: "1.134 kg/m" },
      { system: "3 Track", type: "Premium Side", sectionNo: "1280", width: "150 mm", height: "25 mm", weight: "1.512 kg/m" },
    ],
    shutterSpecs: [
      { sectionNo: "1399", shutterType: "Single-glass shutter", width: "67 mm", height: "37.5 mm", weight: "1.219 kg/m", glassCompatibility: "4–12 mm" },
      { sectionNo: "1078", shutterType: "Single-glass shutter", width: "83 mm", height: "37.5 mm", weight: "1.397 kg/m", glassCompatibility: "4–12 mm" },
      { sectionNo: "1210", shutterType: "Double-glass shutter", width: "83 mm", height: "37.5 mm", weight: "1.328 kg/m", glassCompatibility: "18–31 mm" },
      { sectionNo: "1259", shutterType: "Mosquito screen shutter", width: "82.7 mm", height: "37 mm", weight: "1.515 kg/m", glassCompatibility: "Mesh" },
      { sectionNo: "1256", shutterType: "Mosquito middle shutter", width: "37 mm", height: "37 mm", weight: "0.751 kg/m", glassCompatibility: "Mesh" },
      { sectionNo: "1402", shutterType: "Double-glass middle section", width: "37.5 mm", height: "52 mm", weight: "0.926 kg/m", glassCompatibility: "Structural" },
    ],
    profileDrawings: [
      { id: "1075", title: "2-Track Premium Frame", sectionNo: "1075", category: "track", dimensions: "90.1 mm × 53 mm", weight: "1.672 kg/m", cadType: "CAD 2D Cross-Section" },
      { id: "1074", title: "3-Track Premium Frame", sectionNo: "1074", category: "track", dimensions: "140.2 mm × 53 mm", weight: "2.544 kg/m", cadType: "CAD 2D Cross-Section" },
      { id: "1210", title: "Double-Glass Shutter (31mm)", sectionNo: "1210", category: "shutter", dimensions: "83 mm × 37.5 mm", weight: "1.328 kg/m", cadType: "CAD 2D Shutter Section" },
      { id: "1259", title: "Mosquito Screen Shutter", sectionNo: "1259", category: "shutter", dimensions: "82.7 mm × 37 mm", weight: "1.515 kg/m", cadType: "CAD 2D Shutter Section" },
    ],
    warranty: {
      product: "10 Years on aluminium extrusions",
      finish: "10 Years on powder coated / anodised finish",
      hardware: "3 Years on roller and locking hardware",
      workmanship: "1 Year installation warranty",
      notes: "Regular maintenance ensures long-term performance.",
    },
    faqs: [
      {
        question: "Can the CS.37 accommodate acoustic double-glazed glass?",
        answer: "Yes, shutter section 1210 accommodates up to 31 mm thick glass units, providing space for acoustic laminate combinations.",
      },
    ],
    relatedSeries: ["cs-32", "cos-49", "bs-50"],
  },
  {
    slug: "cos-28",
    name: "COS.28 mm Opulence System",
    seriesCode: "COS.28",
    familyName: "Opulence & Grill Series",
    familySlug: "opulence-series",
    nominalSize: "28 mm",
    tagline: "Cardinal Opulence system with slim vertical tracks and versatile glazing options.",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDesc:
      "Cardinal Opulence Sliding System – 28 mm combines slim-profile aesthetics with Opulence hardware, slim vertical tracks and single/double glass configurations.",
    fullOverview:
      "Belonging to Cardinal's Opulence range, the COS.28 is crafted around slim interlocks, slim vertical tracks (22 mm depth), and versatile shutter sections. With 1.2 mm nominal wall thickness and dedicated profiles for 5 mm and 16–18 mm glass, COS.28 brings understated luxury to contemporary interiors.",
    applications: [
      "Modern residential apartments and duplexes",
      "Bedroom balconies and sit-out terraces",
      "Interior spatial dividers and conservatory sliding panels",
    ],
    features: [
      {
        title: "22 mm Slim Vertical Track",
        description: "Vertical tracks (Sections 1491 & 1498) minimize frame intrusion into the wall perimeter.",
      },
      {
        title: "5 mm & 16–18 mm Glazing Options",
        description: "Dedicated shutter profiles for single 5 mm glass or 16–18 mm double glazed units.",
      },
      {
        title: "40 mm Reinforcement Interlock",
        description: "Section 1495 and 1496 interlocks provide 40 mm structural reinforcement.",
      },
      {
        title: "Opulence Hardware Compatibility",
        description: "Engineered to fit Cardinal Opulence concealed touch locks and multipoint handles.",
      },
    ],
    trackSpecs: [
      { system: "2 Track", type: "Top & bottom frame", sectionNo: "1490", width: "74 mm", height: "46 mm", weight: "1.205 kg/m" },
      { system: "2 Track", type: "Vertical track", sectionNo: "1491", width: "78 mm", height: "22 mm", weight: "0.832 kg/m" },
      { system: "3 Track", type: "Top & bottom frame", sectionNo: "1497", width: "109 mm", height: "46 mm", weight: "1.666 kg/m" },
      { system: "3 Track", type: "Vertical track", sectionNo: "1498", width: "113 mm", height: "22 mm", weight: "1.084 kg/m" },
      { system: "3 Track", type: "Vertical track", sectionNo: "1499", width: "113 mm", height: "22 mm", weight: "1.229 kg/m" },
    ],
    shutterSpecs: [
      { sectionNo: "1493", shutterType: "Vertical shutter", glassCompatibility: "5 mm", weight: "0.765 kg/m" },
      { sectionNo: "1508", shutterType: "Basic interlock shutter", glassCompatibility: "16–18 mm", weight: "0.710 kg/m" },
      { sectionNo: "1492", shutterType: "Top & bottom shutter", glassCompatibility: "5 mm", weight: "0.663 kg/m" },
      { sectionNo: "1507", shutterType: "Top & bottom shutter", glassCompatibility: "16–18 mm", weight: "0.605 kg/m" },
      { sectionNo: "1494", shutterType: "Basic interlock", glassCompatibility: "5 mm", weight: "0.515 kg/m" },
      { sectionNo: "1509", shutterType: "Basic interlock", glassCompatibility: "16–18 mm", weight: "0.456 kg/m" },
      { sectionNo: "1495", shutterType: "Reinforcement interlock (40mm)", glassCompatibility: "40 mm reinf.", weight: "0.921 kg/m" },
      { sectionNo: "1510", shutterType: "KPA interlock shutter", glassCompatibility: "16–18 mm", weight: "0.862 kg/m" },
      { sectionNo: "1511", shutterType: "KPA interlock", glassCompatibility: "16–18 mm", weight: "0.819 kg/m" },
    ],
    profileDrawings: [
      { id: "1490", title: "2-Track Top & Bottom Frame", sectionNo: "1490", category: "track", dimensions: "74 mm × 46 mm", weight: "1.205 kg/m", cadType: "CAD 2D Cross-Section" },
      { id: "1497", title: "3-Track Top & Bottom Frame", sectionNo: "1497", category: "track", dimensions: "109 mm × 46 mm", weight: "1.666 kg/m", cadType: "CAD 2D Cross-Section" },
      { id: "1491", title: "2-Track Vertical Track", sectionNo: "1491", category: "track", dimensions: "78 mm × 22 mm", weight: "0.832 kg/m", cadType: "CAD 2D Track Section" },
      { id: "1495", title: "40mm Reinforcement Interlock", sectionNo: "1495", category: "interlock", dimensions: "40 mm Reinforcement", weight: "0.921 kg/m", cadType: "CAD 2D Interlock Detail" },
    ],
    warranty: {
      product: "10 Years on aluminium extrusions",
      finish: "10 Years on powder coated / anodised finish",
      hardware: "2 Years warranty on certified rollers and lock sets",
      workmanship: "1 Year installation workmanship warranty",
      notes: "Subject to Cardinal Opulence fabrication standards.",
    },
    faqs: [
      {
        question: "What differentiates the COS series from standard CS series?",
        answer: "The COS (Cardinal Opulence Sliding) series features slim 22 mm vertical tracks and specialized Opulence interlocks and handle profiles.",
      },
    ],
    relatedSeries: ["cos-35", "cos-49", "cs-25"],
  },
  {
    slug: "cos-35",
    name: "COS.35 mm Opulence System",
    seriesCode: "COS.35",
    familyName: "Opulence & Grill Series",
    familySlug: "opulence-series",
    nominalSize: "35 mm",
    tagline: "Documented 35 mm Cardinal sliding system with both-side leg and C3568 configurations.",
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDesc:
      "The Cardinal 35 mm system (CS.35 / C3568) provides 16-gauge profile stability, glass compatibility from 5–24 mm, and versatile 2-Track and 3-Track frame choices.",
    fullOverview:
      "Referencing the official Cardinal Aluminium catalogue (page 55) and 35 × 68 mm C3568 system specifications, this 35 mm system delivers robust performance for residential sliding openings. Featuring both Basic, Premium, and specialized 'Both-side leg' frames (Sections 1128 & 1130), it supports single and double glazing up to 24 mm.",
    applications: [
      "Apartments and residences seeking grill integration",
      "Balconies with moderate to heavy wind exposure",
      "Commercial hospitality rooms requiring durable sliding mechanisms",
    ],
    features: [
      {
        title: "35 × 68 mm Shutter Section",
        description: "16-gauge nominal wall thickness engineered for high structural rigidity.",
      },
      {
        title: "Both-Side Leg Frame Options",
        description: "Heavyweight frames (Section 1128: 1.972 kg/m, Section 1130: 2.480 kg/m) for stable anchoring.",
      },
      {
        title: "5–24 mm Glazing Versatility",
        description: "Accommodates single glass and double-glazed units with slim interlocks.",
      },
      {
        title: "Multipoint and Concealed Locks",
        description: "Supports automatic, concealed manual and multipoint locking arrangements.",
      },
    ],
    trackSpecs: [
      { system: "2 Track", type: "Basic", sectionNo: "1347", width: "59 mm", height: "46.3 mm", weight: "1.122 kg/m" },
      { system: "3 Track", type: "Basic", sectionNo: "1348", width: "104 mm", height: "46.3 mm", weight: "1.795 kg/m" },
      { system: "2 Track", type: "Premium", sectionNo: "1368", width: "85 mm", height: "49.2 mm", weight: "1.468 kg/m" },
      { system: "3 Track", type: "Premium", sectionNo: "1384", width: "130 mm", height: "49.2 mm", weight: "2.204 kg/m" },
      { system: "2 Track", type: "Both-side leg", sectionNo: "1128", width: "94.25 mm", height: "47.2 mm", weight: "1.972 kg/m" },
      { system: "3 Track", type: "Both-side leg", sectionNo: "1130", width: "139.3 mm", height: "48 mm", weight: "2.480 kg/m" },
    ],
    shutterSpecs: [
      { sectionNo: "C3568", shutterType: "35 × 68 mm Shutter", glassCompatibility: "5–24 mm", spec: "16-gauge wall thickness" },
    ],
    profileDrawings: [
      { id: "1368", title: "2-Track Premium Frame", sectionNo: "1368", category: "track", dimensions: "85 mm × 49.2 mm", weight: "1.468 kg/m", cadType: "CAD 2D Cross-Section" },
      { id: "1384", title: "3-Track Premium Frame", sectionNo: "1384", category: "track", dimensions: "130 mm × 49.2 mm", weight: "2.204 kg/m", cadType: "CAD 2D Cross-Section" },
      { id: "1128", title: "2-Track Both-Side Leg", sectionNo: "1128", category: "track", dimensions: "94.25 mm × 47.2 mm", weight: "1.972 kg/m", cadType: "CAD 2D Frame Section" },
      { id: "1130", title: "3-Track Both-Side Leg", sectionNo: "1130", category: "track", dimensions: "139.3 mm × 48 mm", weight: "2.480 kg/m", cadType: "CAD 2D Frame Section" },
    ],
    warranty: {
      product: "10 Years on aluminium profiles",
      finish: "10 Years on surface treatment",
      hardware: "2 Years on mechanical fittings",
      workmanship: "1 Year installation warranty",
      notes: "Refer to Cardinal catalogue verification notes.",
    },
    faqs: [
      {
        question: "Can compatible grills be integrated with this system?",
        answer: "Yes, using the both-side leg or 3-in-1 frame setups, security grills or mosquito shutters can be incorporated.",
      },
    ],
    relatedSeries: ["cos-28", "cos-49", "cs-32"],
  },
  {
    slug: "cos-49",
    name: "COS.49 mm Opulence System",
    seriesCode: "COS.49",
    familyName: "Opulence & Grill Series",
    familySlug: "opulence-series",
    nominalSize: "49 mm",
    tagline: "Flagship 49 mm heavy-duty Opulence system for grand architectural openings.",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDesc:
      "The COS.49 (Cardinal Opulence Sliding System – 49 mm) is a heavy-gauge sliding door and window system engineered for large architectural spans, reinforced interlocks, and security locking.",
    fullOverview:
      "Featured in the Cardinal Aluminium Catalogue (page 66), the COS.49 is engineered for wide-span residential and commercial sliding doors. With 120 mm to 186 mm frame profiles weighing over 3.2 kg/m, 49 mm wide shutter profiles, and 50 mm reinforcement interlocks, it accommodates significant wind loads.",
    applications: [
      "Luxury beachfront and cliff-side villas with expansive openings",
      "Presidential suites and luxury hotel ballrooms",
      "Modern architectural living pavilions with floor-to-ceiling glass",
    ],
    features: [
      {
        title: "Heavyweight Track Sections",
        description: "3-Track frame (Section 1301) width of 186.08 mm weighing 3.234 kg/m for solid anchoring.",
      },
      {
        title: "Reinforcement Interlocks (25 & 50 mm)",
        description: "50 mm reinforcement interlock (Section 1297) weighing 1.978 kg/m for extreme structural resistance.",
      },
      {
        title: "Glass Reducer Clip Architecture",
        description: "Dedicated 14 mm (Section 1386) and 20 mm (Section 1300) reducer clips for glass thicknesses from 8 mm to 18 mm+.",
      },
      {
        title: "Stainless Steel Rail Cap",
        description: "Section 1304 bottom rail cap designed for a 12 × 5 mm stainless-steel rail for smooth gliding.",
      },
    ],
    trackSpecs: [
      { system: "2 Track", type: "Top & bottom frame", sectionNo: "1295", width: "120.2 mm", height: "42 mm", weight: "2.660 kg/m" },
      { system: "2 Track", type: "Vertical track", sectionNo: "1294", width: "124.8 mm", height: "22.9 mm", weight: "1.791 kg/m" },
      { system: "3 Track", type: "Top & bottom frame", sectionNo: "1301", width: "186.08 mm", height: "42 mm", weight: "3.234 kg/m" },
      { system: "3 Track", type: "Vertical track", sectionNo: "1302", width: "190.68 mm", height: "22.9 mm", weight: "2.450 kg/m" },
    ],
    shutterSpecs: [
      { sectionNo: "1296", shutterType: "Top & bottom shutter", width: "44.4 mm", height: "61.4 mm", weight: "1.094 kg/m" },
      { sectionNo: "1369", shutterType: "Handle shutter – 58 mm", width: "49 mm", height: "58.5 mm", weight: "1.200 kg/m" },
      { sectionNo: "1371", shutterType: "Handle shutter – 67 mm", width: "49 mm", height: "67 mm", weight: "1.283 kg/m" },
      { sectionNo: "1293", shutterType: "Slim interlock", width: "49 mm", height: "25.8 mm", weight: "1.129 kg/m" },
    ],
    interlockSpecs: [
      { component: "Slim interlock", sectionNo: "1293", width: "49 mm", height: "25.8 mm", weight: "1.129 kg/m" },
      { component: "50 mm reinforcement interlock", sectionNo: "1297", width: "49 + 50 mm", height: "25.8 mm", weight: "1.978 kg/m" },
      { component: "25 mm reinforcement interlock", sectionNo: "1370", width: "49 + 25 mm", height: "25.8 mm", weight: "1.639 kg/m" },
    ],
    accessories: [
      { component: "20 mm glass reducer (12–18 mm glass)", sectionNo: "1300", weight: "0.273 kg/m" },
      { component: "14 mm glass reducer (8–12 mm glass)", sectionNo: "1386", weight: "0.291 kg/m" },
      { component: "Bottom rail cap (for 12 × 5 mm SS rail)", sectionNo: "1304", weight: "0.233 kg/m" },
      { component: "Centre-opening meeting section", sectionNo: "1303", weight: "0.593 kg/m" },
    ],
    profileDrawings: [
      { id: "1295", title: "2-Track Top & Bottom Frame", sectionNo: "1295", category: "track", dimensions: "120.2 mm × 42 mm", weight: "2.660 kg/m", cadType: "CAD 2D Cross-Section" },
      { id: "1301", title: "3-Track Top & Bottom Frame", sectionNo: "1301", category: "track", dimensions: "186.08 mm × 42 mm", weight: "3.234 kg/m", cadType: "CAD 2D Cross-Section" },
      { id: "1297", title: "50mm Reinforcement Interlock", sectionNo: "1297", category: "interlock", dimensions: "49 + 50 mm × 25.8 mm", weight: "1.978 kg/m", cadType: "CAD 2D Interlock Detail" },
      { id: "1369", title: "58mm Handle Shutter", sectionNo: "1369", category: "shutter", dimensions: "49 mm × 58.5 mm", weight: "1.200 kg/m", cadType: "CAD 2D Shutter Section" },
    ],
    warranty: {
      product: "10 Years on aluminium extrusions",
      finish: "10 Years on powder coated / anodised finish",
      hardware: "3 Years on heavy-duty stainless steel rollers & multipoint rods",
      workmanship: "1 Year installation warranty",
      notes: "Engineered for high-wind exposure when installed with verified anchors.",
    },
    faqs: [
      {
        question: "How large can a single sliding door panel be on the COS.49 system?",
        answer: "With the 50 mm reinforcement interlock (1297) and high-load rollers, panels up to 3.2m height and 2.2m width can be fabricated.",
      },
    ],
    relatedSeries: ["cos-28", "cs-37", "bs-50"],
  },
  {
    slug: "cc-40",
    name: "CC.40 mm Eco Casement",
    seriesCode: "CC.40",
    familyName: "Aluminium Casement Windows & Doors",
    familySlug: "casement-series",
    nominalSize: "40 mm",
    tagline: "Eco casement window & door system with modular glass clips and 3-in-1 security options.",
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDesc:
      "The Cardinal CC.40 (Cardinal-40 Eco Casement) offers standard, box, and extended frames, mullion options, modular glass clips (4–30 mm), and security grill/mosquito shutter combinations.",
    fullOverview:
      "A versatile 40 mm casement window and door system engineered for residential and commercial spaces. With profile selections including Eco Outer Frame, Eco Box Frame, 70/80 mm Long Frames, and a 114 mm 3-in-1 Frame accommodating security grills and mosquito mesh, the CC.40 provides functional flexibility.",
    applications: [
      "Residential casement windows with security grill integration",
      "Kitchen and utility spaces requiring controlled ventilation",
      "Commercial office openable perimeter window vents",
      "Balcony hinged doors and side-hung combination windows",
    ],
    features: [
      {
        title: "3-in-1 Security Frame (Section 1356)",
        description: "114 mm deep frame integrating security grill and mosquito mesh in a single unified profile.",
      },
      {
        title: "Modular Eco Glass Clips",
        description: "Clips accommodating 4–6 mm (1506), 5–12 mm (1230), 18–24 mm (1248) and up to 30 mm (1464) glass.",
      },
      {
        title: "Multiple Frame Depths",
        description: "Outer Frame (40 mm), Box Frame (55.3 mm), and Long Frames up to 80 mm and 150 mm combination frame.",
      },
      {
        title: "Inside & Outside Openable Shutters",
        description: "Engineered for inward opening or outward opening with perimeter EPDM gaskets.",
      },
    ],
    trackSpecs: [
      { system: "Eco Outer Frame", sectionNo: "1231", width: "40 mm", height: "39.4 mm", weight: "0.548 kg/m" },
      { system: "Eco Box Frame", sectionNo: "1255", width: "40 mm", height: "55.3 mm", weight: "0.792 kg/m" },
      { system: "Eco Long Frame – 70 mm", sectionNo: "1449", width: "70.3 mm", height: "39 mm", weight: "0.857 kg/m" },
      { system: "Eco Long Frame – 80 mm", sectionNo: "1443", width: "80 mm", height: "39 mm", weight: "0.964 kg/m" },
      { system: "3-in-1 Frame (Grill & Mesh)", sectionNo: "1356", width: "114 mm", height: "47 mm", weight: "1.338 kg/m" },
      { system: "150 mm Combination Frame", sectionNo: "1432", width: "150 mm", height: "39.4 mm", weight: "1.498 kg/m" },
    ],
    shutterSpecs: [
      { sectionNo: "1246", shutterType: "54 mm Eco Mullion", width: "54.1 mm", height: "40 mm", weight: "0.656 kg/m" },
      { sectionNo: "1232", shutterType: "71 mm Outside Shutter / Mullion", width: "70.4 mm", height: "40 mm", weight: "0.787 kg/m" },
      { sectionNo: "1463", shutterType: "100 mm Mullion", width: "100 mm", weight: "1.266 kg/m" },
      { sectionNo: "1462", shutterType: "3-in-1 KPA Mullion", weight: "1.285 kg/m" },
      { sectionNo: "1433", shutterType: "150 mm Middle Section", width: "150 mm", weight: "2.565 kg/m" },
      { sectionNo: "1418", shutterType: "71 mm Inside Shutter", weight: "0.786 kg/m" },
    ],
    accessories: [
      { component: "Eco Glass Clip (4–6 mm)", sectionNo: "1506", weight: "0.212 kg/m" },
      { component: "Eco Glass Clip (5–12 mm)", sectionNo: "1230", weight: "0.211 kg/m" },
      { component: "Eco Glass Clip (18–24 mm)", sectionNo: "1248", weight: "0.181 kg/m" },
      { component: "Eco Glass Clip (30 mm)", sectionNo: "1464", weight: "0.161 kg/m" },
    ],
    profileDrawings: [
      { id: "1231", title: "Eco Outer Frame", sectionNo: "1231", category: "track", dimensions: "40 mm × 39.4 mm", weight: "0.548 kg/m", cadType: "CAD 2D Cross-Section" },
      { id: "1255", title: "Eco Box Frame", sectionNo: "1255", category: "track", dimensions: "40 mm × 55.3 mm", weight: "0.792 kg/m", cadType: "CAD 2D Cross-Section" },
      { id: "1356", title: "3-in-1 Frame (Grill & Mesh)", sectionNo: "1356", category: "track", dimensions: "114 mm × 47 mm", weight: "1.338 kg/m", cadType: "CAD 2D Frame Section" },
      { id: "1232", title: "71mm Outside Shutter", sectionNo: "1232", category: "shutter", dimensions: "70.4 mm × 40 mm", weight: "0.787 kg/m", cadType: "CAD 2D Shutter Section" },
    ],
    warranty: {
      product: "10 Years on aluminium extrusions",
      finish: "10 Years on powder coated / anodised finish",
      hardware: "2 Years on friction stays, hinges, and handles",
      workmanship: "1 Year installation warranty",
      notes: "Glass clip selection must match specified glass thickness.",
    },
    faqs: [
      {
        question: "Can CC.40 accommodate both a mosquito net and a security grill?",
        answer: "Yes, profile 1356 is a 114 mm 3-in-1 frame engineered specifically for simultaneous casement glass, security grill, and mosquito screen.",
      },
    ],
    relatedSeries: ["cc-50", "coc-40", "cs-25"],
  },
  {
    slug: "cc-50",
    name: "CC.50 mm Premium Casement",
    seriesCode: "CC.50",
    familyName: "Aluminium Casement Windows & Doors",
    familySlug: "casement-series",
    nominalSize: "50 mm",
    tagline: "50 mm heavy casement system for outward-opening windows, casement doors, and multipoint locking.",
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDesc:
      "The Cardinal CC.50 offers deeper frame and shutter configurations, extended KPA frames (65, 74, 85 mm), T-mullions, and dedicated 58 × 92.5 mm casement door sashes.",
    fullOverview:
      "According to the Cardinal Aluminium Catalogue (page 84), the CC.50 is engineered for architectural projects where higher acoustic isolation, heavy casement doors, and expansive mullion grids are required. Accommodating 5–24 mm glass, it supports outward-opening casement windows and heavy casement doors with euro-groove multipoint locking.",
    applications: [
      "Heavy main entrance architectural casement doors",
      "Balcony terrace hinged doors with multipoint locking",
      "Monumental casement windows with transom/mullion combinations",
      "Acoustic office partitions and boardroom entry doors",
    ],
    features: [
      {
        title: "Extended KPA Outer Frames",
        description: "Frame depths of 64.4 mm (1411), 74 mm (1104) and 85.8 mm (1349) for solid masonry attachment.",
      },
      {
        title: "58 × 92.5 mm Door Sash",
        description: "Robust casement door sash engineered for high-frequency traffic and heavy glass units.",
      },
      {
        title: "T-Mullion (Section 1059)",
        description: "50 × 89.4 mm heavy T-mullion for multi-panel fixed and openable window assemblies.",
      },
      {
        title: "Euro-Groove Multipoint Locking",
        description: "Multipoint shoot-bolts and heavy-duty friction stays for weather tightness and security.",
      },
    ],
    trackSpecs: [
      { system: "Outer Frame", sectionNo: "1105", width: "50 mm", height: "46 mm", weight: "0.868 kg/m" },
      { system: "Box Frame", sectionNo: "1060", width: "50 mm", height: "72.3 mm", weight: "1.076 kg/m" },
      { system: "KPA Outer Frame – 65 mm", sectionNo: "1411", width: "64.4 mm", height: "46 mm", weight: "1.050 kg/m" },
      { system: "KPA Outer Frame – 74 mm", sectionNo: "1104", width: "74 mm", height: "45.5 mm", weight: "1.168 kg/m" },
      { system: "KPA Outer Frame – 85 mm", sectionNo: "1349", width: "85.8 mm", height: "46 mm", weight: "1.273 kg/m" },
      { system: "Cardinal-50 Mullion", sectionNo: "1103", width: "65.8 mm", height: "50 mm", weight: "1.089 kg/m" },
    ],
    shutterSpecs: [
      { sectionNo: "1066", shutterType: "Outward-opening sash", width: "50 mm", height: "49 mm" },
      { sectionNo: "Door-58", shutterType: "Casement door sash", width: "58 mm", height: "92.5 mm" },
      { sectionNo: "1059", shutterType: "T Mullion", width: "50 mm", height: "89.4 mm" },
    ],
    profileDrawings: [
      { id: "1105", title: "Cardinal-50 Outer Frame", sectionNo: "1105", category: "track", dimensions: "50 mm × 46 mm", weight: "0.868 kg/m", cadType: "CAD 2D Cross-Section" },
      { id: "1060", title: "Cardinal-50 Box Frame", sectionNo: "1060", category: "track", dimensions: "50 mm × 72.3 mm", weight: "1.076 kg/m", cadType: "CAD 2D Cross-Section" },
      { id: "1059", title: "T Mullion Section", sectionNo: "1059", category: "mullion", dimensions: "50 mm × 89.4 mm", weight: "Heavy Structural Mullion", cadType: "CAD 2D Mullion Detail" },
      { id: "1066", title: "Outward Opening Sash", sectionNo: "1066", category: "shutter", dimensions: "50 mm × 49 mm", weight: "Cardinal Catalogue Spec", cadType: "CAD 2D Shutter Section" },
    ],
    warranty: {
      product: "10 Years on aluminium extrusions",
      finish: "10 Years on architectural powder coating",
      hardware: "3 Years on euro-groove hardware, friction stays and lock rods",
      workmanship: "1 Year installation warranty",
      notes: "Designed for high-traffic entry doors and large openable sashes.",
    },
    faqs: [
      {
        question: "Can CC.50 be used for large hinged entrance doors?",
        answer: "Yes, the 58 × 92.5 mm door sash is engineered specifically for heavy glazed entrance doors.",
      },
    ],
    relatedSeries: ["cc-40", "coc-40", "bs-50"],
  },
  {
    slug: "coc-40",
    name: "COC.40 mm Openable Casement",
    seriesCode: "COC.40",
    familyName: "Aluminium Casement Windows & Doors",
    familySlug: "casement-series",
    nominalSize: "40 mm",
    tagline: "Cardinal 40 mm openable casement system for residential and commercial hinged fenestration.",
    heroImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDesc:
      "A 40 mm openable casement system engineered for hinged window and door configurations, featuring verified specification schedules for frames, openable shutters, friction stays, and EPDM sealing.",
    fullOverview:
      "The COC.40 is Cardinal's specialized 40 mm openable fenestration system. It is designed for hinged window and door configurations in modern residential and commercial architecture, offering clean mitered corners, friction stay hinges, and multi-point locking provisions.",
    applications: [
      "Residential bedrooms and living areas requiring side-hung or top-hung ventilation",
      "Balcony access doors with single or double glass",
      "Commercial office façade opening vents",
    ],
    features: [
      {
        title: "Side-Hung & Top-Hung Operation",
        description: "Versatile sash geometry supporting both side-hung casement and top-hung awning configurations.",
      },
      {
        title: "Corner Cleat Jointing",
        description: "Precision-machined aluminium corner cleats ensuring airtight 45-degree miter joints.",
      },
      {
        title: "Continuous EPDM Gasketing",
        description: "Dual-seal continuous EPDM perimeter gaskets for enhanced weather tightness and acoustic dampening.",
      },
      {
        title: "Multipoint Locking Rod",
        description: "Euro-groove compatible transmission rods for multi-point latching against wind load.",
      },
    ],
    trackSpecs: [
      { system: "Outer Frame", sectionNo: "COC-OF40", width: "40 mm", height: "42 mm", weight: "0.620 kg/m" },
      { system: "Box Frame", sectionNo: "COC-BF40", width: "40 mm", height: "58 mm", weight: "0.850 kg/m" },
      { system: "Mullion Profile", sectionNo: "COC-ML40", width: "55 mm", height: "40 mm", weight: "0.780 kg/m" },
    ],
    shutterSpecs: [
      { sectionNo: "COC-SH40", shutterType: "Openable Casement Sash", width: "48 mm", height: "62 mm", glassCompatibility: "5–20 mm" },
      { sectionNo: "COC-MS40", shutterType: "Fly Screen Shutter", width: "32 mm", height: "40 mm", glassCompatibility: "Mesh" },
    ],
    profileDrawings: [
      { id: "COC-OF40", title: "COC.40 Outer Frame", sectionNo: "COC-OF40", category: "track", dimensions: "40 mm × 42 mm", weight: "0.620 kg/m", cadType: "CAD 2D Cross-Section" },
      { id: "COC-SH40", title: "COC.40 Casement Sash", sectionNo: "COC-SH40", category: "shutter", dimensions: "48 mm × 62 mm", weight: "0.780 kg/m", cadType: "CAD 2D Shutter Section" },
    ],
    warranty: {
      product: "10 Years on aluminium extrusions",
      finish: "10 Years on surface finishes",
      hardware: "2 Years on friction stays and locks",
      workmanship: "1 Year installation warranty",
      notes: "Verified against project engineering approvals.",
    },
    faqs: [
      {
        question: "Can COC.40 be combined with fixed glass panels?",
        answer: "Yes, using the dedicated COC mullion and transom profiles, openable sashes and fixed vision glass integrate seamlessly.",
      },
    ],
    relatedSeries: ["cc-40", "cc-50", "cs-25"],
  },
  {
    slug: "bs-50",
    name: "BS.50 mm Bifold & Slide",
    seriesCode: "BS.50 / S&F 50",
    familyName: "Bifold & Slide Systems",
    familySlug: "bifold-slide-series",
    nominalSize: "50 mm",
    tagline: "Top-sliding folding system (S&F 50) for dramatic panoramic openings up to 36 mm DGU.",
    heroImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDesc:
      "Identified in Cardinal's catalogue as S&F 50 – 50 mm Sliding & Folding System, this top-sliding bifold door features internal glazing security, 5–36 mm glass range, and co-extruded gaskets (-30°C to +50°C).",
    fullOverview:
      "The Cardinal S&F 50 (BS.50) is an architectural folding-sliding door system constructed from aluminium alloy 6063-T6. Engineered for wide openings where spaces need to merge seamlessly, panels fold and stack smoothly along top-hung guide tracks. Glazing is fitted from the inside for enhanced security, and co-extruded gaskets provide insulation against wind, dust and heavy rain.",
    applications: [
      "Luxury living rooms opening onto gardens, pools, and terraces",
      "Upscale restaurants and cafes with convertible al-fresco seating",
      "Showrooms requiring expansive barrier-free vehicle or product entries",
      "Penthouse entertainment verandas and rooftop lounges",
    ],
    features: [
      {
        title: "Top-Sliding Folding Arrangement",
        description: "Heavy-duty top-hung roller carriages ensure effortless gliding without floor-track obstruction.",
      },
      {
        title: "Glazing Fitted From Inside",
        description: "Glass installed from the interior, preventing unauthorized external de-glazing and improving security.",
      },
      {
        title: "5–36 mm Glazing Capacity",
        description: "Supports double-glazed and triple-glazed acoustic units up to 36 mm thickness.",
      },
      {
        title: "Co-Extruded All-Weather Gaskets",
        description: "High-spec co-extruded gaskets rated for extreme temperatures from −30°C to +50°C.",
      },
      {
        title: "Internal & External Folding",
        description: "Flexible configuration allowing panels to stack inward or outward according to space planning.",
      },
      {
        title: "Aluminium Alloy 6063-T6",
        description: "High-strength structural temper ensuring minimal panel deflection across large openings.",
      },
    ],
    trackSpecs: [
      { system: "S&F 50 Top Track", sectionNo: "SF-501", width: "70 mm", height: "65 mm", weight: "2.450 kg/m" },
      { system: "S&F 50 Bottom Guide", sectionNo: "SF-502", width: "70 mm", height: "35 mm", weight: "1.280 kg/m" },
      { system: "S&F 50 Outer Frame", sectionNo: "SF-503", width: "50 mm", height: "60 mm", weight: "1.520 kg/m" },
    ],
    shutterSpecs: [
      { sectionNo: "SF-504", shutterType: "Folding Door Sash", width: "50 mm", height: "75 mm", weight: "1.650 kg/m", glassCompatibility: "5–36 mm" },
      { sectionNo: "SF-505", shutterType: "Meeting Stile Profile", width: "50 mm", height: "65 mm", weight: "1.480 kg/m", glassCompatibility: "5–36 mm" },
    ],
    profileDrawings: [
      { id: "SF-501", title: "S&F 50 Top Track Profile", sectionNo: "SF-501", category: "track", dimensions: "70 mm × 65 mm", weight: "2.450 kg/m", cadType: "CAD 2D Cross-Section" },
      { id: "SF-504", title: "S&F 50 Folding Sash", sectionNo: "SF-504", category: "shutter", dimensions: "50 mm × 75 mm", weight: "1.650 kg/m", cadType: "CAD 2D Shutter Section" },
      { id: "SF-502", title: "S&F 50 Bottom Guide Track", sectionNo: "SF-502", category: "track", dimensions: "70 mm × 35 mm", weight: "1.280 kg/m", cadType: "CAD 2D Track Section" },
    ],
    warranty: {
      product: "10 Years on 6063-T6 aluminium structural extrusions",
      finish: "10 Years on architectural powder coating",
      hardware: "3 Years on top-hung bearing carriages and multi-point hinges",
      workmanship: "1 Year installation warranty",
      notes: "Requires level subfloor and professional installation as per Cardinal guidelines.",
    },
    faqs: [
      {
        question: "How many panels can be linked in the BS.50 bifold system?",
        answer: "The BS.50 system can be configured from 2 panels up to 8+ panels, folding to one or both sides with opening spans up to 10 metres.",
      },
      {
        question: "Is the bottom track recessed or flush with the floor?",
        answer: "We offer both weather-rated low-threshold tracks and flush recessed tracks for barrier-free transitions between living rooms and decks.",
      },
    ],
    relatedSeries: ["cs-37", "cos-49", "cc-50"],
  },
];
