export interface FacadeSystem {
  slug: string;
  name: string;
  heroImage: string;
  galleryImages: string[];
  tagline: string;
  shortDesc: string;
  overview: string;
  applications: string[];
  keyFeatures: { title: string; description: string }[];
  components: { name: string; specification: string }[];
  saintGobainGlazing: {
    title: string;
    description: string;
    recommendedGlass: string;
  };
  jindalFraming: {
    title: string;
    alloy: string;
    profileDetails: string;
  };
  hardwareAndFixing: string;
  profileDrawings: {
    id: string;
    title: string;
    sectionNo: string;
    dimensions: string;
    description: string;
  }[];
  specifications: { label: string; value: string }[];
  warranty: {
    structural: string;
    glazing: string;
    coating: string;
    installation: string;
    disclaimer: string;
  };
  installationNotes: string[];
  standardsCompliance: string[];
  faqs: { question: string; answer: string }[];
  relatedSystems: string[];
}

export const FACADE_SYSTEMS_DATA: FacadeSystem[] = [
  {
    slug: "structural-glazing",
    name: "Structural Glazing",
    tagline: "Frameless exterior glass façades engineered with structural silicone bonding.",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDesc:
      "Continuous exterior glass façades utilizing concealed aluminium framing and project-certified structural silicone bonding for monolithic, reflective commercial envelopes.",
    overview:
      "Structural glazing creates a continuous, uninterrupted glass surface where the exterior aluminium framing is entirely concealed. The system utilizes either two-sided or four-sided structural silicone glazing techniques. Glass panels are bonded to precision Jindal Aluminium subframes using tested structural silicone adhesives and mechanical dead-load supports, transferring wind loads and dead loads efficiently to the primary structure.",
    applications: [
      "Corporate headquarters and IT tech park elevations",
      "Commercial office towers and iconic retail complexes",
      "High-rise hotel envelopes and podium elevations",
      "Modern airport terminals and institutional buildings",
    ],
    keyFeatures: [
      {
        title: "Monolithic Glass Surface",
        description: "Zero external frame protrusion; creates a sleek, mirror-like curtain of glass.",
      },
      {
        title: "2-Sided or 4-Sided Bonding",
        description: "Flexible structural silicone bonding configurations tailored to site wind pressures and design criteria.",
      },
      {
        title: "Dual Weather Sealing",
        description: "High-grade structural silicone bonding backed by secondary weather seals and mechanical retainers.",
      },
      {
        title: "Thermal & Solar Control",
        description: "Integrates Saint-Gobain solar-control coatings to significantly lower building HVAC loads.",
      },
      {
        title: "Acoustic Attenuation",
        description: "Insulated glass configurations dampen exterior urban traffic noise by up to 40 dB.",
      },
      {
        title: "Dead-Load Support Brackets",
        description: "Engineered stainless steel dead-load brackets prevent glass slippage and long-term silicone fatigue.",
      },
    ],
    components: [
      { name: "Structural Mullions & Transoms", specification: "Jindal Aluminium alloy 6063-T6 custom hollow box extrusions" },
      { name: "Glass Bonding Carrier Frame", specification: "Extruded aluminium carrier cassettes designed for factory silicone application" },
      { name: "Structural Sealant", specification: "Two-component high-modulus neutral silicone sealant (Dow Corning / Sika approved)" },
      { name: "Weather Seal", specification: "Low-modulus neutral cure silicone with ±50% joint movement capability" },
      { name: "Dead Load & Setting Blocks", specification: "High-durometer silicone / EPDM setting blocks located at quarter points" },
    ],
    saintGobainGlazing: {
      title: "Saint-Gobain Solar Control Solutions",
      description:
        "We specify Saint-Gobain architectural glass, featuring the Saint-Gobain Infinity solar-control range, clear or tinted toughened glass, and Double Glazed Units (DGU). The Infinity range optimizes visible light transmission while reflecting solar heat (low SHGC), crucial for Indian climatic conditions.",
      recommendedGlass: "Saint-Gobain Infinity Neutral / Blue / Grey DGU (6mm + 12mm Air/Argon + 6mm Toughened)",
    },
    jindalFraming: {
      title: "Jindal Aluminium Extrusion System",
      alloy: "Aluminium Alloy 6063-T6",
      profileDetails:
        "Profiles are manufactured from Jindal Aluminium architectural extrusions sized according to panel wind-load calculations, deflection criteria (L/175 or 20mm max), and building anchor specifications.",
    },
    hardwareAndFixing:
      "Heavy-duty galvanized steel brackets with slotted holes for 3-way thermal and seismic movement adjustment, fitted with high-tensile Grade 8.8 bolts and chemical anchor fasteners.",
    profileDrawings: [
      { id: "SG-01", title: "Mullion Cross-Section", sectionNo: "Jindal 6063-T6 Mullion", dimensions: "65 mm × 150 mm", description: "Hollow aluminium structural vertical mullion" },
      { id: "SG-02", title: "Structural Glass Carrier Cassette", sectionNo: "Cassette Frame", dimensions: "38 mm × 45 mm", description: "Structural silicone bonding cassette" },
    ],
    specifications: [
      { label: "Glazing Type", value: "2-sided or 4-sided Structural Silicone Glazing" },
      { label: "Glass Manufacturer", value: "Saint-Gobain (Infinity / Planilux / SGG Cool-Lite)" },
      { label: "Aluminium Extrusions", value: "Jindal Aluminium 6063-T6" },
      { label: "Wind Load Suitability", value: "Custom engineered to IS 875 (Part 3) project wind map" },
      { label: "Seismic Movement", value: "Designed for inter-story drift as per IS 1893" },
      { label: "Structural Sealant", value: "Factory-applied structural silicone with verified peel tests" },
    ],
    warranty: {
      structural: "10 Years warranty on Jindal aluminium framing profiles against deformation",
      glazing: "5 to 10 Years warranty on Saint-Gobain DGU seal integrity",
      coating: "10 Years on PVDF / Architectural Powder Coating",
      installation: "2 Years comprehensive project workmanship warranty",
      disclaimer: "Final performance criteria require verified project-specific structural engineering shop drawings and calculations.",
    },
    installationNotes: [
      "Subframe anchoring verified through on-site pull-out testing of chemical fasteners.",
      "Structural silicone bonding strictly executed in a climate-controlled clean room.",
      "Degreasing with two-cloth solvent wipe technique prior to silicone application.",
      "Thermal expansion joints allowed at every floor level.",
    ],
    standardsCompliance: [
      "IS 16231 (Part 1 to 4): Code of practice for use of glass in buildings",
      "IS 875 (Part 3): Wind loads on buildings and structures",
      "National Building Code of India (NBC 2016) - Glazing & Fire Safety",
    ],
    faqs: [
      {
        question: "How does structural glazing resist high monsoon wind loads in India?",
        answer: "Wind loads are calculated based on IS 875 (Part 3). The structural silicone bite width is calculated mathematically and verified through finite element analysis, transferring the wind pressure safely into the Jindal aluminium mullions.",
      },
      {
        question: "Can opening window sashes be integrated into structural glazing?",
        answer: "Yes, concealed top-hung openable vents can be integrated into the cassette grid, completely matching the exterior frameless glass appearance when closed.",
      },
    ],
    relatedSystems: ["curtain-wall-glazing", "spider-glazing", "acp-elevation"],
  },
  {
    slug: "curtain-wall-glazing",
    name: "Curtain Wall Glazing",
    tagline: "Engineered stick-built & unitized aluminium curtain wall grids with pressure caps.",
    heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDesc:
      "A captured curtain wall system using an engineered aluminium mullion-and-transom grid with exterior pressure plates and decorative cover caps for high-rise building envelopes.",
    overview:
      "Curtain Wall Glazing is a non-load-bearing building envelope system designed to resist wind loads, seismic forces, air infiltration, and water penetration while transferring dead loads to floor slabs. Built with Jindal Aluminium mullions, transoms, and external pressure plates, it accommodates vision glass, insulated spandrel panels, and internal weep drainage paths.",
    applications: [
      "Commercial skyscrapers and high-rise office developments",
      "Hospitality towers and shopping mall main atriums",
      "Educational institutions and research laboratories",
      "Mixed-use high-rise developments",
    ],
    keyFeatures: [
      {
        title: "Controlled Drainage Paths",
        description: "Engineered internal weep channels route accidental water infiltration safely outdoors.",
      },
      {
        title: "Jindal E103004 Profile Series",
        description: "Utilizes documented heavy-duty 6063-T6 curtain wall sections engineered for tall floor-to-floor spans.",
      },
      {
        title: "Thermal Break Barriers",
        description: "Polyamide thermal isolators prevent interior condensation and reduce thermal bridge conduction.",
      },
      {
        title: "Spandrel & Slab Fire Containment",
        description: "Integrated smoke seals and mineral wool fire stops at floor slab edges to meet NBC fire codes.",
      },
      {
        title: "Architectural Cap Variations",
        description: "Aerofoil, bullnose, and square snap-on exterior cover caps to create expressive façade lines.",
      },
      {
        title: "Acoustic Glazing Integration",
        description: "Deep glazing pockets supporting up to 34 mm Saint-Gobain acoustic DGU panels.",
      },
    ],
    components: [
      { name: "Vertical Mullions", specification: "Jindal 6063-T6 box sections (50 mm × 125/150/175 mm)" },
      { name: "Horizontal Transoms", specification: "Jindal matching horizontal profiles with weep holes" },
      { name: "Pressure Plates", specification: "Extruded aluminium pressure bars with stainless steel torque screws" },
      { name: "Cover Caps", specification: "Snap-on decorative architectural caps in powder coated or anodised finishes" },
      { name: "Glazing Gaskets", specification: "Dense vulcanized EPDM inner and outer gaskets" },
    ],
    saintGobainGlazing: {
      title: "Saint-Gobain Vision & Spandrel Glazing",
      description:
        "High-performance double glazed units with Saint-Gobain solar-control coatings for vision zones, paired with color-matched ceramic-fritted or opaque back-painted spandrel glass at slab edges.",
      recommendedGlass: "Saint-Gobain Cool-Lite / Infinity SKN series DGU with 12mm Argon spacer",
    },
    jindalFraming: {
      title: "Jindal Curtain Wall Series",
      alloy: "Aluminium Alloy 6063-T6",
      profileDetails:
        "High moment of inertia (Ixx) sections based on Jindal published curtain wall catalogues (e.g., Section E103004 series) to withstand gust wind pressures.",
    },
    hardwareAndFixing:
      "Cast-in embedment channels or heavy-duty chemical anchors with slotted floor brackets allowing building sway and vertical thermal expansion.",
    profileDrawings: [
      { id: "CW-01", title: "Vertical Mullion Assembly", sectionNo: "E103004 Series", dimensions: "50 mm × 150 mm", description: "Curtain wall mullion with thermal isolator and pressure plate" },
      { id: "CW-02", title: "Horizontal Transom Detail", sectionNo: "Transom 50x125", dimensions: "50 mm × 125 mm", description: "Transom with integrated weep hole drainage" },
    ],
    specifications: [
      { label: "System Type", value: "Captured Stick Curtain Wall / Semi-Unitized" },
      { label: "Mullion Depth", value: "100 mm, 125 mm, 150 mm, 175 mm up to 200 mm" },
      { label: "Glass Compatibility", value: "Single 6–12 mm, Double Glazed 24–34 mm" },
      { label: "Air Permeability", value: "Tested in accordance with ASTM E283 / IS standards" },
      { label: "Water Resistance", value: "Dynamic water penetration tested under ASTM E331" },
      { label: "Thermal Insulation", value: "Polyamide thermal barrier U-value compliant" },
    ],
    warranty: {
      structural: "10 Years on Jindal aluminium mullions and anchors",
      glazing: "10 Years on Saint-Gobain insulated glass seal",
      coating: "10 Years on architectural powder coating / PVDF",
      installation: "2 Years comprehensive project warranty",
      disclaimer: "Subject to approved project engineering calculations and shop drawings.",
    },
    installationNotes: [
      "Floor bracket alignment established using optical laser levels.",
      "Mullion expansion sleeves installed with 15 mm thermal gap at every story.",
      "Pressure plate screws torqued with calibrated instruments to prevent gasket over-compression.",
      "Slab edge smoke and fire stop installed prior to interior finishing.",
    ],
    standardsCompliance: [
      "IS 16231: Glazing and safety in buildings",
      "IS 875 (Part 3): Wind load criteria",
      "NBC 2016: Fire and smoke containment requirements",
    ],
    faqs: [
      {
        question: "What is the difference between Structural Glazing and Curtain Wall Glazing?",
        answer: "Curtain Wall Glazing has external aluminium pressure plates and decorative caps visible on the exterior, whereas Structural Glazing has a completely flush, frameless glass exterior secured by silicone.",
      },
    ],
    relatedSystems: ["structural-glazing", "facade-louvers", "acp-elevation"],
  },
  {
    slug: "spider-glazing",
    name: "Spider Glazing",
    tagline: "Point-supported architectural glass façades using stainless steel spider fittings.",
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDesc:
      "Point-supported architectural glazing systems using engineered stainless-steel spider arms and articulated rotules connected to steel trusses or structural glass fins for open glass façades.",
    overview:
      "Spider Glazing creates an open, transparent architectural elevation by supporting glass panels at discrete points rather than within continuous framing. Utilizing precision-machined 316-grade stainless steel spider arms and articulated point fittings (rotules), the system connects glass panels directly to back-up structural steelwork, tension cables, or glass fins.",
    applications: [
      "Monumental building entrance atriums and lobbies",
      "Automobile and luxury retail showrooms with unobstructed views",
      "Commercial office canopies and link bridges",
      "Museums and cultural exhibition spaces",
    ],
    keyFeatures: [
      {
        title: "Maximum Architectural Transparency",
        description: "Eliminates opaque vertical and horizontal frame members, maximizing visibility.",
      },
      {
        title: "Articulated Rotule Fittings",
        description: "Swivel ball-joint rotules relieve bending stress around countersunk or button glass holes.",
      },
      {
        title: "316 Marine-Grade Stainless Steel",
        description: "Investment cast AISI 316 stainless steel spider arms offering superior corrosion resistance.",
      },
      {
        title: "Glass Fin or Steelwork Support",
        description: "Can be mounted to glass fin columns, structural steel pipe columns, or tension cable trusses.",
      },
      {
        title: "Countersunk Flush Appearance",
        description: "Countersunk rotules sit flush with the glass surface, allowing clean external maintenance.",
      },
      {
        title: "Weatherproof Silicone Joints",
        description: "Open joints between panels sealed with weather-resistant structural silicone and backer rods.",
      },
    ],
    components: [
      { name: "Spider Arms", specification: "1-way, 2-way, 3-way, and 4-way AISI 316 stainless steel cast fittings" },
      { name: "Articulated Rotules", specification: "AISI 316 stainless steel ball-jointed fittings with POM / aluminium isolation washers" },
      { name: "Perimeter Channels", specification: "Jindal Aluminium extruded edge channels and perimeter trims" },
      { name: "Backup Structure", specification: "Structural glass fins or mild steel hollow sections (MS/SS304)" },
      { name: "Joint Sealant", specification: "UV-stable non-staining neutral silicone sealant" },
    ],
    saintGobainGlazing: {
      title: "Saint-Gobain Toughened & Laminated Safety Glass",
      description:
        "All glass panels must be heat-treated safety glass with precision CNC water-jet drilled holes and polished bevelled edges before tempering. Laminated glass with SentryGlas (SG) or heavy-duty PVB interlayers is utilized for post-breakage retention.",
      recommendedGlass: "Saint-Gobain 12mm / 15mm Toughened or 17.52mm / 21.52mm Toughened Laminated Glass",
    },
    jindalFraming: {
      title: "Jindal Perimeter Retaining Profiles",
      alloy: "Aluminium Alloy 6063-T6",
      profileDetails:
        "Jindal Aluminium perimeter channels, top flashing sections, and base gutters designed to accommodate building movement and drain perimeter moisture.",
    },
    hardwareAndFixing:
      "Engineered articulated rotules torqued to specific Newton-metre limits with calibrated tools, isolated from glass surfaces via elastomer washers.",
    profileDrawings: [
      { id: "SP-01", title: "4-Way Spider Assembly Detail", sectionNo: "SS316 4-Way", dimensions: "200 mm Pitch", description: "Stainless steel 4-way spider fitting connected to glass panel corners" },
      { id: "SP-02", title: "Articulated Rotule Cross-Section", sectionNo: "Countersunk Rotule", dimensions: "Ø 50 mm Head", description: "Swivel ball joint rotule with elastomer isolation bushings" },
    ],
    specifications: [
      { label: "System Category", value: "Point-Supported Architectural Glazing" },
      { label: "Hardware Grade", value: "Investment Cast AISI 316 Stainless Steel" },
      { label: "Fitting Configuration", value: "1-Way, 2-Way, 4-Way Spider Fittings" },
      { label: "Rotule Type", value: "Countersunk or Button-Head Articulated Swivel Rotules" },
      { label: "Support Options", value: "Glass Fins, Steel Trusses, Tension Cable Truss" },
      { label: "Safety Standard", value: "Point-Supported Glazing guidelines & IS 16231" },
    ],
    warranty: {
      structural: "10 Years on SS 316 spider castings and Jindal perimeter channels",
      glazing: "5 Years on Saint-Gobain laminated safety glass",
      coating: "Mirror or Satin finish on stainless steel hardware",
      installation: "2 Years comprehensive installation workmanship warranty",
      disclaimer: "Stress concentrations around glass holes must be validated by licensed structural engineering calculations.",
    },
    installationNotes: [
      "Glass fabrication and hole drilling strictly completed prior to heat toughening.",
      "Direct glass-to-metal contact strictly avoided using engineered POM bushings.",
      "Spider bolts torqued using calibrated digital torque wrenches.",
      "Perimeter gaps sealed with weather-resistant silicone.",
    ],
    standardsCompliance: [
      "IS 16231 (Glazing in Buildings)",
      "IS 875 (Wind Loads)",
      "Point Supported Glazing standard guidelines (Glass Association of North America / GANA guidelines)",
    ],
    faqs: [
      {
        question: "Can Spider Glazing withstand high wind pressures in coastal zones?",
        answer: "Yes, because the spider fittings are connected to structural glass fins or heavy steel trusses engineered to absorb coastal wind pressures without deflecting beyond safety limits.",
      },
    ],
    relatedSystems: ["structural-glazing", "canopies", "skylights"],
  },
  {
    slug: "acp-elevation",
    name: "Aluminium Composite Panel (ACP) Elevation",
    tagline: "Exterior-grade fire-retardant aluminium composite cladding for modern building elevations.",
    heroImage: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDesc:
      "Exterior-grade ACP cladding systems engineered to IS 17682 requirements, using Jindal Aluminium subframe runners, engineered brackets, and folded cassette tray joints.",
    overview:
      "Aluminium Composite Panel (ACP) cladding delivers a flat, contemporary exterior finish for façade bands, columns, parapets, soffits, and building entrance features. Utilizing 4 mm fire-retardant (FR) composite panels with PVDF surface coatings, panels are fabricated into folded cassettes and mechanically secured to Jindal Aluminium subframes.",
    applications: [
      "Commercial office façades and retail brand store frontage",
      "Building parapet capping and entrance portico soffits",
      "Elevated column cladding and architectural louvers",
      "Modern residential villa architectural accents",
    ],
    keyFeatures: [
      {
        title: "IS 17682 Compliant FR Panels",
        description: "4 mm mineral-filled fire-retardant core meeting modern building fire codes.",
      },
      {
        title: "PVDF / Lumiflon Coating",
        description: "70% Kynar 500 PVDF exterior coating offering superior resistance to UV fading, acid rain, and chalking.",
      },
      {
        title: "Folded Cassette Tray System",
        description: "CNC routed and folded cassette panels with aluminium corner angles for crisp joints and panel flatness.",
      },
      {
        title: "Jindal Subframe Architecture",
        description: "Heavy-duty Jindal Aluminium tubular and hat-channel subframe brackets engineered for wind resistance.",
      },
      {
        title: "Ventilated Rainscreen Principle",
        description: "Rear ventilated cavity prevents moisture accumulation and reduces solar heat transfer into masonry.",
      },
      {
        title: "Flexible Architectural Forms",
        description: "Can be roll-curved for curved columns, folded for geometric soffits, and perforated for design screens.",
      },
    ],
    components: [
      { name: "ACP Cladding Panels", specification: "4 mm Fire-Retardant (FR Core) with 0.5 mm aluminium skins (IS 17682)" },
      { name: "Subframe Runners", specification: "Jindal Aluminium 6063-T6 tubular sections (50 × 25 mm / 50 × 50 mm)" },
      { name: "Wall Brackets (Cleats)", specification: "Heavy extruded aluminium L-brackets (50 × 50 × 4 mm) with slotted holes" },
      { name: "Fasteners", specification: "Stainless steel SS 304 / SS 316 rivets and anti-corrosive screws" },
      { name: "Joint Sealant", specification: "Non-staining weather silicone sealant over closed-cell polyethylene foam backer rod" },
    ],
    saintGobainGlazing: {
      title: "Glazing Integration",
      description:
        "Where ACP cladding interfaces with structural glazing or vision windows, Saint-Gobain glass is utilized with color-coordinated transition flashing.",
      recommendedGlass: "Saint-Gobain Cool-Lite / Planilux for window apertures within the ACP grid",
    },
    jindalFraming: {
      title: "Jindal Aluminium Support Substructure",
      alloy: "Aluminium Alloy 6063-T6",
      profileDetails:
        "Extruded Jindal aluminium runners, brackets, and perimeter flashings engineered to absorb dead load and positive/negative wind pressures.",
    },
    hardwareAndFixing:
      "Heavy-duty mechanical expansion anchors into concrete masonry, with SS 304 blind rivets fixing panels to the aluminium runners.",
    profileDrawings: [
      { id: "ACP-01", title: "Folded Cassette Joint Detail", sectionNo: "Cassette 4mm", dimensions: "4 mm Panel / 12 mm Joint", description: "Cassette tray joint with aluminium angle and backer rod" },
      { id: "ACP-02", title: "Wall Bracket Subframe Section", sectionNo: "Jindal L-Cleat", dimensions: "50 mm × 50 mm × 4 mm", description: "Aluminium wall bracket anchoring to concrete structure" },
    ],
    specifications: [
      { label: "Panel Thickness", value: "4 mm (0.5 mm Aluminium Skin / FR Mineral Core / 0.5 mm Skin)" },
      { label: "Surface Finish", value: "PVDF 3-coat finish (minimum 28–35 microns)" },
      { label: "Fire Classification", value: "Class B-s1, d0 / Class A2 (IS 17682 compliant)" },
      { label: "Subframe Material", value: "Jindal Aluminium Alloy 6063-T6" },
      { label: "Joint Width", value: "Standard 10 mm to 15 mm sealed or open rainscreen" },
      { label: "Peel Strength", value: "≥ 7.0 N/mm (ASTM D903)" },
    ],
    warranty: {
      structural: "10 Years on Jindal aluminium subframe integrity",
      glazing: "10 Years on ACP PVDF coating against chalking and peeling",
      coating: "PVDF Kynar 500 guarantee",
      installation: "2 Years comprehensive installation warranty",
      disclaimer: "Fire retardancy core must be specified as per NBC 2016 building height guidelines.",
    },
    installationNotes: [
      "Subframe plumbness and squareness verified with optical laser levels.",
      "Cassette corners reinforced with aluminium cleat rivets.",
      "Cavity fire stops installed at floor slab boundaries as mandated by NBC 2016.",
      "Protective film removed within 30 days of installation to avoid adhesive bake-in.",
    ],
    standardsCompliance: [
      "IS 17682: Aluminium Composite Panel Specification",
      "NBC 2016 (Fire and Life Safety Part 4)",
      "ASTM D1781 / ASTM E84 for flame spread and smoke development",
    ],
    faqs: [
      {
        question: "Why is Fire-Retardant (FR) ACP essential under modern Indian building codes?",
        answer: "The National Building Code of India (NBC 2016) mandates fire-retardant (FR) mineral core cladding for commercial and high-rise structures to eliminate vertical fire spread across exterior elevations.",
      },
    ],
    relatedSystems: ["curtain-wall-glazing", "facade-louvers", "structural-glazing"],
  },
  {
    slug: "glass-partitions",
    name: "Glass Partitions",
    tagline: "Acoustic-rated framed and frameless architectural glass partition systems.",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDesc:
      "Framed and frameless interior glass partition systems utilizing Saint-Gobain acoustic laminated or toughened safety glass and Jindal slim perimeter aluminium channels for corporate interiors.",
    overview:
      "Architectural glass partitions transform corporate offices, conference suites, executive cabins, and showroom interiors. Utilizing Saint-Gobain acoustic laminated or clear toughened safety glass with Jindal slim aluminium perimeter profiles, these systems offer visual openness alongside tested acoustic privacy (up to 42 dB sound attenuation).",
    applications: [
      "Corporate boardrooms and executive conference halls",
      "Private manager cabins and open-plan acoustic dividers",
      "Commercial showroom display areas and banks",
      "Contemporary luxury residential home offices",
    ],
    keyFeatures: [
      {
        title: "Tested Acoustic Attenuation",
        description: "Acoustic laminated glass assemblies delivering sound insulation from 35 dB up to 42 dB.",
      },
      {
        title: "Jindal Slim Perimeter Profiles",
        description: "Minimalist 25 mm × 25 mm or 45 mm × 25 mm Jindal aluminium head, floor, and jamb channels.",
      },
      {
        title: "Frameless Dry-Joint Glazing",
        description: "Crystal clear polycarbonate I-joints or structural VHB tape create virtually invisible glass-to-glass seams.",
      },
      {
        title: "Premium Door Hardware",
        description: "Heavy-duty hydraulic floor springs, magnetic lock patch fittings, and architectural stainless steel pull handles.",
      },
      {
        title: "Privacy Glazing Upgrades",
        description: "Compatible with switchable smart PDLC glass, frosted manifestation films, or ceramic fritted designs.",
      },
      {
        title: "Reconfigurable Modularity",
        description: "Demountable channel architecture allowing office spatial reconfiguration with minimal downtime.",
      },
    ],
    components: [
      { name: "Perimeter Head & Floor Channels", specification: "Jindal Aluminium 6063-T6 slim U-channels with acoustic base gaskets" },
      { name: "Vertical Glazing Joints", specification: "Clear UV-stable polycarbonate dry joints / structural clear VHB tape" },
      { name: "Door Patch Fittings", specification: "AISI 304 stainless steel top/bottom patch fittings and pivot assemblies" },
      { name: "Floor Spring Closers", specification: "EN 1154 certified concealed hydraulic floor springs with 90° hold-open" },
      { name: "Acoustic Drop Seals", specification: "Automatic concealed acoustic drop-down bottom door seals" },
    ],
    saintGobainGlazing: {
      title: "Saint-Gobain Acoustic & Safety Glass",
      description:
        "Saint-Gobain Stadip Silence acoustic laminated safety glass provides sound damping across speech frequencies, preventing sound transmission between meeting rooms.",
      recommendedGlass: "Saint-Gobain Stadip Silence (10.76 mm or 12.76 mm Acoustic Laminated) or 12 mm Toughened",
    },
    jindalFraming: {
      title: "Jindal Slim Channel Architecture",
      alloy: "Aluminium Alloy 6063-T6",
      profileDetails:
        "Precision extruded Jindal aluminium channels with clip-in snap-fit covers in matte black, champagne gold, or anodised finishes.",
    },
    hardwareAndFixing:
      "Concealed screw fixings into ceiling grid reinforcement and finished flooring, cushioned by EPDM setting blocks.",
    profileDrawings: [
      { id: "GP-01", title: "Slim Head Channel Detail", sectionNo: "Jindal U-Channel", dimensions: "25 mm × 45 mm", description: "Perimeter ceiling channel with acoustic isolation foam" },
      { id: "GP-02", title: "Glass-to-Glass Dry Joint", sectionNo: "Clear I-Joint", dimensions: "10–12 mm Glass", description: "Polycarbonate dry joint detail between partition glass panels" },
    ],
    specifications: [
      { label: "Glass Options", value: "10 mm / 12 mm Toughened or 10.76 mm / 12.76 mm Acoustic Laminated" },
      { label: "Acoustic Rating", value: "Rw 36 dB (Single Glazed) up to Rw 46 dB (Double Glazed Acoustic)" },
      { label: "Max Partition Height", value: "Up to 3600 mm panel heights" },
      { label: "Channel Finishes", value: "Matte Black, Champagne Gold, Silver Anodised, Architectural White" },
      { label: "Door Options", value: "Frameless Glass Pivot Door, Sliding Glass Door, Timber Flush Door" },
      { label: "Safety Standard", value: "IS 16231 (Part 4) Interior impact safety regulations" },
    ],
    warranty: {
      structural: "10 Years on Jindal aluminium perimeter profiles",
      glazing: "5 Years on Saint-Gobain acoustic glass against delamination",
      coating: "10 Years on channel powder coat finish",
      installation: "2 Years on hardware alignment and floor springs",
      disclaimer: "Acoustic performance depends on ceiling plenum and peripheral perimeter sealing integrity.",
    },
    installationNotes: [
      "Perimeter channels installed over continuous acoustic dampening foam tape.",
      "Glass setting blocks placed at quarter points to prevent corner glass chipping.",
      "Floor springs grouted flush with finished flooring using anti-shrink cement mortar.",
      "Glass manifestation lines applied between 900 mm and 1500 mm as per safety standards.",
    ],
    standardsCompliance: [
      "IS 16231 Part 4 (Human Impact Safety in Interiors)",
      "ISO 10140 (Laboratory measurement of sound insulation)",
    ],
    faqs: [
      {
        question: "How do glass partitions achieve acoustic privacy for executive meeting rooms?",
        answer: "By utilizing Saint-Gobain Stadip Silence acoustic laminated glass (with sound-dampening PVB interlayer) paired with acoustic perimeter gaskets and drop-down door bottom seals.",
      },
    ],
    relatedSystems: ["spider-glazing", "structural-glazing", "canopies"],
  },
  {
    slug: "canopies",
    name: "Glass Canopies",
    tagline: "Architectural entrance and overhead canopy systems with engineered glass retention.",
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDesc:
      "Overhead glass entrance and walkway canopies using Saint-Gobain laminated safety glass, stainless steel tension tie-rods, and Jindal aluminium perimeter gutter profiles.",
    overview:
      "Architectural Glass Canopies provide sheltered access at luxury villa entries, corporate building reception drop-offs, and commercial retail walkways. Engineered to withstand wind uplift, dead loads, and maintenance loads as mandated by the National Building Code (NBC 2016), systems use cantilever steel brackets or stainless steel tension tie-rods.",
    applications: [
      "Corporate headquarters reception entrance drop-offs",
      "Luxury villa front porticos and rear garden verandas",
      "Commercial shopping arcade covered pedestrian walkways",
      "Hotel main lobby carriage porches",
    ],
    keyFeatures: [
      {
        title: "SentryGlas Laminated Safety",
        description: "Saint-Gobain laminated safety glass engineered for post-breakage load retention.",
      },
      {
        title: "Engineered Tie-Rod Cantilevers",
        description: "Grade 316 stainless steel adjustable tension rods anchoring the canopy cleanly to structural beams.",
      },
      {
        title: "Controlled Rainwater Drainage",
        description: "Built-in 2° to 5° positive slope directing rainwater into concealed Jindal aluminium gutter channels.",
      },
      {
        title: "Wind Uplift Engineering",
        description: "Anchorage designed against upward aerodynamic suction as per IS 875 (Part 3) wind calculations.",
      },
      {
        title: "Clean Modern Detailing",
        description: "Minimalist stainless steel point fixings or continuous aluminium clamping shoe bars.",
      },
      {
        title: "Integrated Drip Edge",
        description: "Engineered aluminium front drip flashings prevent dirty rainwater back-flow underneath the glass.",
      },
    ],
    components: [
      { name: "Overhead Safety Glass", specification: "Saint-Gobain 17.52 mm / 21.52 mm Heat-Strengthened Laminated Glass" },
      { name: "Tension Rods & Brackets", specification: "AISI 316 stainless steel machined tie-rods (M16/M20) with fork connectors" },
      { name: "Perimeter Gutters & Profiles", specification: "Jindal Aluminium 6063-T6 extruded drainage gutter and wall flashing" },
      { name: "Wall Connection Anchors", specification: "Hilti high-tensile chemical anchors into RCC lintels" },
      { name: "Point Clamps", specification: "SS 316 articulated swivel clamp fittings with EPDM isolation pads" },
    ],
    saintGobainGlazing: {
      title: "Saint-Gobain Overhead Laminated Safety Glazing",
      description:
        "Overhead glazing strictly mandates laminated safety glass. Heat-strengthened glass with structural PVB or SentryGlas interlayer ensures that even in the unlikely event of breakage, the glass maintains structural integrity without falling.",
      recommendedGlass: "Saint-Gobain 8mm HS + 1.52mm SGP/PVB + 8mm HS Laminated Safety Glass",
    },
    jindalFraming: {
      title: "Jindal Extruded Edge Gutter Profiles",
      alloy: "Aluminium Alloy 6063-T6",
      profileDetails:
        "Custom Jindal aluminium edge trims, continuous rear wall mounting profiles, and integrated drainage gutters powder coated for exterior durability.",
    },
    hardwareAndFixing:
      "Grade 316 stainless steel tension forks and chemical epoxy anchors engineered for cyclic wind uplift and dead load moments.",
    profileDrawings: [
      { id: "GC-01", title: "Wall Flashing & Rear Gutter Section", sectionNo: "Jindal Flashing", dimensions: "120 mm × 80 mm", description: "Rear wall flashing with integrated rainwater gutter channel" },
      { id: "GC-02", title: "Tension Rod Clamping Bracket", sectionNo: "SS316 Clamp", dimensions: "Ø 60 mm Clamp", description: "Stainless steel tie rod articulated bracket clamping the front glass edge" },
    ],
    specifications: [
      { label: "Glazing Spec", value: "17.52 mm or 21.52 mm Laminated Safety Glass (Overhead Rated)" },
      { label: "Hardware Material", value: "Investment Cast AISI 316 Marine-Grade Stainless Steel" },
      { label: "Slope Requirement", value: "Minimum 3 degrees (50 mm per metre run) for positive drainage" },
      { label: "Wind Uplift Design", value: "Calculated to IS 875 (Part 3) with safety factor 2.0" },
      { label: "Drainage Detail", value: "Front drip edge and integrated Jindal aluminium collection gutter" },
    ],
    warranty: {
      structural: "10 Years on SS 316 hardware and Jindal aluminium gutter profiles",
      glazing: "5 Years on Saint-Gobain laminated glass against interlayer clouding",
      coating: "10 Years on powder coated aluminium extrusions",
      installation: "2 Years comprehensive installation warranty",
      disclaimer: "Overhead canopy installations require project-specific structural engineer sign-off on masonry load capacity.",
    },
    installationNotes: [
      "Structural beam or RCC lintel core drilling verified to avoid rebar cutting.",
      "Chemical anchor cure times strictly observed before hanging glass dead weight.",
      "Minimum 50 mm slope verified with digital inclinometer.",
      "Perimeter flashing sealed with two layers of polyurethane exterior sealant.",
    ],
    standardsCompliance: [
      "National Building Code of India (NBC 2016 - Overhead Glazing)",
      "IS 16231 (Part 3 - Fire & Impact safety for overhead glass)",
      "IS 875 (Part 3 - Aerodynamic wind uplift forces)",
    ],
    faqs: [
      {
        question: "Why cannot monolithic toughened glass be used for overhead canopies?",
        answer: "Monolithic toughened glass can shatter into small granules upon rare impact; building codes strictly mandate laminated safety glass overhead so the interlayer holds the fragments securely in place.",
      },
    ],
    relatedSystems: ["skylights", "spider-glazing", "structural-glazing"],
  },
  {
    slug: "skylights",
    name: "Architectural Skylights",
    tagline: "Overhead roof glazing engineered for natural daylighting and weatherproof drainage.",
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDesc:
      "Engineered roof and atrium glazing systems utilizing Saint-Gobain solar-control laminated DGU, Jindal aluminium rafters, and multi-tier condensation drainage channels.",
    overview:
      "Architectural Skylights bring natural daylight into luxury villas, central atriums, grand stairwells, and commercial lobbies while safeguarding the interior against torrential monsoons and intense solar heat. Designed with sloped Jindal Aluminium rafters, exterior pressure caps, and Saint-Gobain insulated laminated glass, systems feature multi-tier internal condensation channels.",
    applications: [
      "Luxury villa double-height living spaces and staircases",
      "Corporate office central atriums and light wells",
      "Shopping mall interior courtyards and covered plazas",
      "High-end restaurant dining courtyards and greenhouse verandas",
    ],
    keyFeatures: [
      {
        title: "Dual-Seal Condensation Management",
        description: "Internal rafter gutter channels route condensation safely to the exterior roof curb.",
      },
      {
        title: "Solar Control DGU Glazing",
        description: "Saint-Gobain solar-control outer pane combined with laminated inner safety pane reflects heat.",
      },
      {
        title: "Heavy Jindal Structural Rafters",
        description: "Engineered extruded aluminium box rafters sized to support dead weight, wind uplift, and maintenance loads.",
      },
      {
        title: "Multi-Pitch Geometry",
        description: "Custom fabrication in mono-pitch, ridge gable, pyramid, hip, and barrel-vault configurations.",
      },
      {
        title: "EPDM Weatherproof Seals",
        description: "Continuous vulcanized EPDM gaskets engineered for long-term resistance to high UV roof exposure.",
      },
      {
        title: "Smoke Vent Integration",
        description: "Compatible with motorized smoke exhaust and natural ventilation actuator vents.",
      },
    ],
    components: [
      { name: "Aluminium Rafters & Purlins", specification: "Jindal Aluminium 6063-T6 structural hollow profiles with internal gutter grooves" },
      { name: "Pressure Bars & Caps", specification: "Extruded aluminium clamping bars with snap-on weather cover caps" },
      { name: "Roof Curb Flashing", specification: "Heavy 2 mm aluminium custom-bent perimeter curb flashing" },
      { name: "Overhead DGU Glazing", specification: "Saint-Gobain 6 mm Solar Control Toughened + 12 mm Argon + 10.76 mm Laminated" },
      { name: "Fasteners", specification: "Grade 316 stainless steel torque screws with bonded EPDM washers" },
    ],
    saintGobainGlazing: {
      title: "Saint-Gobain High-Performance Roof Glazing",
      description:
        "For occupied interior spaces, skylights require double glazed units featuring a solar-control toughened outer pane, an argon-filled warm edge spacer, and a laminated safety inner pane.",
      recommendedGlass: "Saint-Gobain Infinity SKN / Cool-Lite DGU (6mm Toughened + 12mm Argon + 10.76mm Laminated Inner)",
    },
    jindalFraming: {
      title: "Jindal Aluminium Rafter Grid",
      alloy: "Aluminium Alloy 6063-T6",
      profileDetails:
        "Heavy moment-of-inertia rafters featuring dual condensation collection gutters extruded directly into the aluminium profile.",
    },
    hardwareAndFixing:
      "Perimeter base anchoring to raised RCC roof curbs with chemical anchors and multi-layer bitumen/polyurethane roof membrane lap joints.",
    profileDrawings: [
      { id: "SK-01", title: "Structural Rafter Cross-Section", sectionNo: "Jindal Rafter Box", dimensions: "60 mm × 140 mm", description: "Rafter profile showing internal condensation drainage gutters and pressure cap" },
      { id: "SK-02", title: "Curb Flashing Detail", sectionNo: "Perimeter Curb", dimensions: "150 mm High Curb", description: "Perimeter base junction with roof flashing and water drainage weep" },
    ],
    specifications: [
      { label: "Glazing Construction", value: "Double Glazed Unit with Laminated Inner Safety Pane (28–34 mm DGU)" },
      { label: "Frame Material", value: "Jindal Aluminium Alloy 6063-T6" },
      { label: "Minimum Pitch", value: "10 degrees (to ensure rapid self-cleaning rainwater run-off)" },
      { label: "Water Tightness", value: "Tested in accordance with ASTM E331 dynamic water pressure" },
      { label: "Thermal Insulation", value: "U-value ≤ 1.6 W/m²K with argon-filled low-E glass unit" },
    ],
    warranty: {
      structural: "10 Years on Jindal aluminium rafters and framing",
      glazing: "10 Years on Saint-Gobain insulated glass seal",
      coating: "10 Years on exterior architectural powder coating",
      installation: "2 Years comprehensive installation warranty",
      disclaimer: "Roof curb height and waterproofing tie-ins must follow building civil waterproofing specifications.",
    },
    installationNotes: [
      "RCC curb minimum height of 150 mm required above finished roof waterproof level.",
      "Internal condensation drainage ports inspected for clear outward flow.",
      "Pressure cap screws tightened with calibrated clutch drivers.",
      "Double sealing executed at all glass-to-aluminium junctions.",
    ],
    standardsCompliance: [
      "National Building Code of India (NBC 2016)",
      "IS 16231 (Part 3 - Overhead Glazing Codes)",
      "IS 875 (Wind Loads on Pitched Roof Structures)",
    ],
    faqs: [
      {
        question: "How do skylights prevent indoor greenhouse overheating in Indian summers?",
        answer: "By specifying Saint-Gobain solar-control coatings (such as Infinity SKN series) with high selectivity, reflecting up to 70% of solar heat while allowing pleasant daylight.",
      },
    ],
    relatedSystems: ["canopies", "structural-glazing", "curtain-wall-glazing"],
  },
  {
    slug: "facade-louvers",
    name: "Façade Louvers",
    tagline: "Architectural aluminium louvers engineered for solar screening, privacy, and HVAC airflow.",
    heroImage: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDesc:
      "Custom architectural aluminium louver systems manufactured with Jindal 6063-T6 extrusions for solar shading, visual screening, mechanical ventilation, and AMCA 500-L rain defense.",
    overview:
      "Façade Louver systems provide visual screening, solar shading, and ventilation for HVAC mechanical floors, parking garages, and building service shafts. Fabricated with Jindal Aluminium aerofoil, Z-blade, or box-blade extrusions, systems balance free aerodynamic air flow with wind-driven rain defense.",
    applications: [
      "HVAC chiller plant and generator room ventilation screens",
      "Multi-level parking podium screening elevations",
      "Stairwell and elevator shaft ventilation louvers",
      "Architectural solar shading fins on glass elevations",
    ],
    keyFeatures: [
      {
        title: "AMCA 500-L Performance Criteria",
        description: "Tested blade profiles balancing free area percentage (up to 55%) with wind-driven rain rejection.",
      },
      {
        title: "Aerofoil & Z-Blade Profiles",
        description: "Aerofoil blades (100–300 mm width) and dual/triple-bank drainable Z-blades extruded from Jindal aluminium.",
      },
      {
        title: "Solar Heat Reduction",
        description: "External solar screening reduces direct sun radiation on building vision glass by up to 60%.",
      },
      {
        title: "Bird & Insect Screens",
        description: "Stainless steel or aluminium mesh fitted to the rear to block pests while preserving airflow.",
      },
      {
        title: "Durable Architectural Finishes",
        description: "PVDF or Qualicoat architectural powder coatings resisting corrosion and dust build-up.",
      },
      {
        title: "Continuous Line Aesthetics",
        description: "Concealed mullions and clip-fixing systems provide unbroken horizontal or vertical architectural lines.",
      },
    ],
    components: [
      { name: "Louver Blades", specification: "Jindal Aluminium 6063-T6 extruded aerofoil / Z-blades / box profiles" },
      { name: "Vertical Support Mullions", specification: "Jindal extruded aluminium structural mullions with blade clips" },
      { name: "Perimeter Framing", specification: "Extruded aluminium perimeter channel with integrated base sill flashing" },
      { name: "Pest Screening", specification: "Grade 304 stainless steel woven mesh (12 × 12 mm bird mesh or 2 × 2 mm insect mesh)" },
      { name: "Brackets & Anchors", specification: "Heavy aluminium angle brackets with stainless steel fasteners" },
    ],
    saintGobainGlazing: {
      title: "Glazing Integration",
      description:
        "Where louvers are integrated into curtain walls or structural glazing, Jindal louver frames snap directly into the Saint-Gobain glazing pockets.",
      recommendedGlass: "Saint-Gobain Cool-Lite glass on adjacent vision panels",
    },
    jindalFraming: {
      title: "Jindal Aluminium Louver Extrusions",
      alloy: "Aluminium Alloy 6063-T6",
      profileDetails:
        "High-rigidity extruded aluminium blades engineered to withstand design wind pressure across specified support spans without blade chatter.",
    },
    hardwareAndFixing:
      "Aluminium clip-brackets or stainless steel mechanical screws securing blades to vertical support uprights.",
    profileDrawings: [
      { id: "LV-01", title: "Aerofoil Louver Blade Cross-Section", sectionNo: "Jindal 150 Aerofoil", dimensions: "150 mm × 32 mm", description: "Extruded aerofoil architectural sunshade blade" },
      { id: "LV-02", title: "Drainable Z-Blade Profile Detail", sectionNo: "Jindal 75mm Z-Blade", dimensions: "75 mm × 50 mm", description: "Weather drainable Z-blade with integrated gutter lip" },
    ],
    specifications: [
      { label: "Blade Profiles", value: "Aerofoil (100–300 mm), Drainable Z-Blade (50–100 mm), Box Blades" },
      { label: "Material", value: "Jindal Aluminium Alloy 6063-T6" },
      { label: "Free Area Percentage", value: "45% to 58% dependent on blade pitch and angle" },
      { label: "Airflow Resistance", value: "Low pressure drop compliant with mechanical HVAC design" },
      { label: "Rain Defense", value: "Class A / Class B under AMCA 500-L wind-driven rain testing" },
    ],
    warranty: {
      structural: "10 Years on Jindal aluminium extrusions against structural deformation",
      glazing: "Not applicable (mesh backed)",
      coating: "10 Years on PVDF / Architectural powder coating finish",
      installation: "2 Years comprehensive installation warranty",
      disclaimer: "Free area and airflow calculations must be coordinated with mechanical HVAC consultant.",
    },
    installationNotes: [
      "Vertical support spacing strictly aligned with structural deflection limits.",
      "Thermal expansion joints allowed at louver blade splice points.",
      "Base sill flashing sloped outward to prevent rainwater collection inside shafts.",
      "Pest mesh secured with continuous aluminium retaining strips.",
    ],
    standardsCompliance: [
      "AMCA Standard 500-L: Laboratory methods of testing louvers for rating",
      "IS 875 (Part 3): Wind load criteria on building envelopes",
    ],
    faqs: [
      {
        question: "Can these louvers prevent rainwater from entering mechanical HVAC rooms?",
        answer: "Yes, our drainable Z-blade profiles feature integrated catch gutters on each blade edge, routing water sideways down jamb drains as per AMCA 500-L rain screening standards.",
      },
    ],
    relatedSystems: ["curtain-wall-glazing", "acp-elevation", "structural-glazing"],
  },
];
