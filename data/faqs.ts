export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  relatedLink?: {
    label: string;
    href: string;
  };
}

export const FAQ_CATEGORIES = [
  "All",
  "General Enquiries",
  "Aluminium Windows & Doors",
  "Façade Systems",
  "Customisation",
  "Glazing",
  "Installation",
  "Warranty",
  "Quotations",
  "Customer Support",
] as const;

export const FAQS_DATA: FAQItem[] = [
  {
    id: "gen-01",
    category: "General Enquiries",
    question: "What makes ALUTECKSYSTEMS distinct from conventional fabricators?",
    answer: "Alutecksystems combines precision structural engineering, international-standard system aluminium profiles (such as Cardinal system series), verified architectural hardware, and Saint-Gobain glazing solutions. We manage the entire lifecycle: consultation, site measurement, engineering shop drawings, precision CNC fabrication, and certified installation.",
    relatedLink: { label: "Learn About Us", href: "/about" },
  },
  {
    id: "gen-02",
    category: "General Enquiries",
    question: "Where does Alutecksystems execute architectural projects?",
    answer: "We undertake high-end residential, luxury villa, and commercial façade projects across India, with dedicated project teams coordinating site measurement, fabrication, and installation.",
    relatedLink: { label: "Locate Us", href: "/locate-us" },
  },
  {
    id: "alm-01",
    category: "Aluminium Windows & Doors",
    question: "What is the difference between standard aluminium and system aluminium?",
    answer: "Standard aluminium uses generic local profiles without certified load calculations, weather gasketing, or tested roller geometry. System Aluminium is an engineered fenestration solution where frames, multi-chambered shutters, interlocks, EPDM gaskets, and tandem rollers are designed as an integrated assembly tested for wind load, water tightness, and sound insulation.",
    relatedLink: { label: "Explore System Aluminium", href: "/products/system-aluminium" },
  },
  {
    id: "alm-02",
    category: "Aluminium Windows & Doors",
    question: "Which slim series is recommended for large panoramic living room openings?",
    answer: "For panoramic openings, we recommend the CS.25 (25.75 mm interlock) for minimalist sightlines, the CS.32 for large floor-to-ceiling glass panels, or the COS.49 heavy-duty Opulence system for monumental heights up to 3.5 metres.",
    relatedLink: { label: "View CS.25 Slim System", href: "/products/system-aluminium/cs-25" },
  },
  {
    id: "fac-01",
    category: "Façade Systems",
    question: "How do you ensure weather tightness on high-rise curtain walls during Indian monsoons?",
    answer: "Our curtain walls utilize Jindal 6063-T6 extrusions with pressure-equalized weep drainage paths, vulcanized continuous EPDM gaskets, and tested silicone weather seals compliant with ASTM E331 dynamic water penetration standards.",
    relatedLink: { label: "Explore Curtain Wall Glazing", href: "/products/facade-systems/curtain-wall-glazing" },
  },
  {
    id: "fac-02",
    category: "Façade Systems",
    question: "What are the engineering considerations for Spider Glazing?",
    answer: "Spider glazing uses AISI 316 cast stainless-steel point fittings and articulated rotules connected to structural glass fins or steel trusses. Hole locations, edge distances, and localized glass stresses must be verified through structural calculations adhering to IS 16231.",
    relatedLink: { label: "View Spider Glazing Details", href: "/products/facade-systems/spider-glazing" },
  },
  {
    id: "cst-01",
    category: "Customisation",
    question: "Can we customize profile colors to match interior architecture?",
    answer: "Yes, we support over 170+ RAL powder-coated shades, architectural matte finishes, champagne metallics, electrochemical anodising, and realistic timber grain sublimations.",
  },
  {
    id: "glz-01",
    category: "Glazing",
    question: "Which glass manufacturer do you recommend for solar heat control?",
    answer: "We specify Saint-Gobain architectural glass, particularly the Saint-Gobain Infinity and Cool-Lite solar-control ranges in Double Glazed Units (DGU), which reflect radiant heat while admitting comfortable natural daylight.",
    relatedLink: { label: "View Façade Systems", href: "/products/facade-systems" },
  },
  {
    id: "ins-01",
    category: "Installation",
    question: "Do you provide dedicated installation teams for projects?",
    answer: "Yes, all installations are executed by trained, factory-certified Alutecksystems teams adhering to strict quality protocols, laser plumb alignment, chemical anchor pull-out verification, and water hose tests before handover.",
  },
  {
    id: "war-01",
    category: "Warranty",
    question: "What warranty coverage is provided with Alutecksystems installations?",
    answer: "We provide comprehensive warranties: up to 10 years on aluminium extrusion structural integrity, 10 years on Qualicoat-compliant architectural powder coating, up to 3 years on certified hardware, and a 1-year installation workmanship warranty.",
  },
  {
    id: "quo-01",
    category: "Quotations",
    question: "How can architects or builders receive a project quotation?",
    answer: "Submit your architectural floor plans, window schedules, or BOQ through our online consultation form, or connect with our technical desk via WhatsApp. Our team will review the wind loads and provide a detailed system estimate.",
    relatedLink: { label: "Request a Consultation", href: "/#enquiry" },
  },
  {
    id: "sup-01",
    category: "Customer Support",
    question: "How do I lodge a customer service request or complaint?",
    answer: "You can submit an online ticket through our dedicated Customer Complaint portal. You will receive a unique tracking reference number (ALT-CMP-XXXX) to monitor inspection and resolution status in real time.",
    relatedLink: { label: "Go to Customer Complaint Portal", href: "/customer-complaint" },
  },
];
