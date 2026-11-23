export interface UpvcProduct {
  slug: string;
  category: "windows" | "doors";
  title: string;
  tagline: string;
  heroImage: string;
  galleryImages: string[];
  overview: string;
  types: { name: string; description: string; image: string }[];
  keyFeatures: { title: string; description: string }[];
  glazingOptions: string[];
  hardwareDetails: string;
  maintenanceGuidance: string[];
  faqs: { question: string; answer: string }[];
}

export const UPVC_WINDOWS_DATA: UpvcProduct = {
  slug: "upvc-windows",
  category: "windows",
  title: "Premium uPVC Windows",
  tagline: "Multi-chambered acoustic and thermal insulation for modern architectural fenestration.",
  heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  galleryImages: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  ],
  overview:
    "Our precision-engineered uPVC window systems offer acoustic comfort, thermal efficiency, and minimal maintenance. Built with multi-chambered profiles, galvanized steel reinforcements, and fusion-welded corners, these windows resist tropical heat, humidity, dust, and coastal salinity.",
  types: [
    {
      name: "uPVC Sliding Windows",
      description: "2-track and 3-track sliding windows with integrated insect mesh options, nylon rollers, and smooth operation.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "uPVC Casement Windows",
      description: "Side-hung and top-hung outward or inward opening windows with multi-point locking and dual EPDM weather seals.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Tilt & Turn Windows",
      description: "Dual-action German hardware allowing tilt ventilation from the top or full 90-degree swing for cleaning.",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Villa Windows (Grill + Mesh)",
      description: "Integrated security grill, bug screen, and glass shutter in a unified multi-track frame.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    },
  ],
  keyFeatures: [
    { title: "Multi-Chambered Thermal Barrier", description: "Internal profile air chambers drastically reduce heat conductivity, keeping interiors cool." },
    { title: "Galvanized Steel Core", description: "Internal hot-dip galvanized steel re-bars provide structural stiffness against high wind loads." },
    { title: "Fusion Welded Joints", description: "Homogeneous welded corners eliminate leaks and frame separation." },
    { title: "Acoustic Attenuation up to 40 dB", description: "Accommodates double glazed acoustic units for quiet indoor environments." },
  ],
  glazingOptions: [
    "5 mm to 8 mm Single Toughened Glass",
    "16 mm to 24 mm Double Glazed Units (DGU) with Argon gas fill",
    "Acoustic PVB Laminated Safety Glass",
    "Solar Control Low-E Reflective Glass",
  ],
  hardwareDetails:
    "European multipoint transmission gear rods, corrosion-resistant friction stays, concealed roller carriages, and key-locking ergonomic handles.",
  maintenanceGuidance: [
    "Clean uPVC profile surfaces using warm soapy water and a soft cloth; avoid abrasive solvents.",
    "Inspect weep holes along the bottom track periodically to keep rainwater drainage clear.",
    "Apply silicone lubricant spray to sliding rollers and casement hinges annually.",
  ],
  faqs: [
    { question: "Do uPVC windows yellow or discolour under intense Indian sunlight?", answer: "Our uPVC compounds use high-grade Titanium Dioxide (TiO2) stabilizers and UV blockers designed for tropical climates to prevent discolouration or chalking." },
    { question: "How does uPVC compare with aluminium windows?", answer: "uPVC provides superior natural thermal insulation, while aluminium excels in ultra-slim sightlines and large panoramic spans. Both have excellent longevity." },
  ],
};

export const UPVC_DOORS_DATA: UpvcProduct = {
  slug: "upvc-doors",
  category: "doors",
  title: "Premium uPVC Doors",
  tagline: "Durable, weatherproof, and sound-insulating uPVC doors for residences and commercial spaces.",
  heroImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
  galleryImages: [
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  ],
  overview:
    "Our uPVC door systems provide insulation, security, and aesthetics for patio entrances, balconies, and internal partitions. Built with heavy-duty door sashes, steel reinforcements, and multi-point shoot bolts, they resist warping, rotting, and corrosion.",
  types: [
    {
      name: "uPVC Sliding Patio Doors",
      description: "Expansive 2, 3, and 4-panel sliding door systems with heavy-duty tandem rollers and low threshold options.",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "uPVC Casement Hinged Doors",
      description: "Robust inward or outward opening balcony and main terrace doors with 3D adjustable security hinges.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Slide & Fold uPVC Doors",
      description: "Concertina-style folding door panels creating wide, unobstructed openings for terraces and garden lounges.",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
    },
  ],
  keyFeatures: [
    { title: "Reinforced Door Sashes", description: "Heavy-gauge steel reinforcement chambers engineered to carry high glass dead-weight." },
    { title: "Multipoint Shoot-Bolt Locking", description: "Latching at multiple perimeter points ensures airtight compression and anti-burglary defense." },
    { title: "Low-Threshold Design", description: "Wheelchair-friendly aluminium step thresholds for seamless transitions." },
    { title: "Zero Rot & Termite Proof", description: "Impervious to moisture, termites, and coastal saline humidity." },
  ],
  glazingOptions: [
    "6 mm to 12 mm Toughened Clear / Frosted Safety Glass",
    "20 mm to 28 mm Double Glazed Acoustic Units",
    "Laminated Security Glass with PVB interlayer",
  ],
  hardwareDetails:
    "Heavy-duty 3D adjustable butt hinges, multi-point euro cylinder security locks, architectural lever handles, and tandem stainless-steel rollers.",
  maintenanceGuidance: [
    "Clean the aluminium lower rail periodically to ensure roller tracks remain free of grit.",
    "Wipe EPDM perimeter gaskets with a damp cloth every 6 months to preserve elasticity.",
  ],
  faqs: [
    { question: "Can uPVC sliding doors be made in wood-finish textures?", answer: "Yes, we offer premium European laminate foils in Golden Oak, Walnut, Mahogany, and Anthracite Grey." },
    { question: "How secure are uPVC doors against forced entry?", answer: "Doors feature multi-point locking mechanisms where multiple steel hooks or shoot-bolts engage into steel keeps in the frame." },
  ],
};
