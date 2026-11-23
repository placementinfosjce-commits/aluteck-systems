export interface ProjectItem {
  slug: string;
  title: string;
  category: "Residential" | "Commercial" | "Façade Systems" | "System Aluminium Windows" | "System Aluminium Doors" | "Structural Glazing";
  location: string;
  systemUsed: string;
  completionYear: string;
  featuredImage: string;
  galleryImages: string[];
  shortDesc: string;
  fullOverview: string;
  scopeOfWork: string[];
  challengeSection: {
    siteChallenge: string;
    technicalConsideration: string;
    solutionAdopted: string;
    finalOutcome: string;
  };
  results: string[];
  relatedSystems: string[];
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    slug: "luxury-villa-sliding-system",
    title: "The Glass Pavilion Villa",
    category: "Residential",
    location: "Alibaug, Maharashtra",
    systemUsed: "CS.25 Slim Aluminium Sliding System + Saint-Gobain DGU",
    completionYear: "2024",
    featuredImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDesc: "A continuous 9-metre panoramic sliding glass opening seamlessly connecting the living pavilion to the infinity pool.",
    fullOverview:
      "Commissioned for a contemporary coastal residence, this project required maximizing visual connection with the surrounding landscape while resisting strong monsoon wind-driven rain and coastal air salinity. We engineered a 6-panel Cardinal CS.25 system with custom flush-recessed drainage tracks.",
    scopeOfWork: [
      "Engineering shop drawings and wind load simulation under IS 875",
      "Precision CNC fabrication of Cardinal CS.25 mm slim profiles in Matte Jet Black",
      "Integration of Saint-Gobain 22 mm solar-control double glazed acoustic units",
      "Subfloor recessed track drainage integration and acoustic gasketing",
    ],
    challengeSection: {
      siteChallenge: "Continuous 9-metre wide opening facing direct open coastal sea breezes with extreme monsoon exposure.",
      technicalConsideration: "Ultra-slim 25.75 mm interlocks needed to withstand deflection under 1.8 kPa wind gusts without panel vibration.",
      solutionAdopted: "Engineered Section 1176 structural reinforcement interlocks coupled with 3-in-1 heavy bottom tracks with concealed drainage weep channels.",
      finalOutcome: "Unobstructed panoramic ocean views with smooth glide operation and zero water penetration during heavy monsoon storms.",
    },
    results: [
      "Zero deflection under certified monsoon gust wind pressures",
      "Sound attenuation of 38 dB from exterior coastal wind noise",
      "Subfloor flush track creating barrier-free living room to deck transit",
    ],
    relatedSystems: ["cs-25", "cs-32", "bs-50"],
  },
  {
    slug: "commercial-curtain-wall-project",
    title: "Apex Horizon Tech Park",
    category: "Commercial",
    location: "Bengaluru, Karnataka",
    systemUsed: "Engineered Curtain Wall Glazing + Saint-Gobain Infinity SKN DGU",
    completionYear: "2024",
    featuredImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDesc: "A 12-storey commercial office envelope featuring Jindal 6063-T6 curtain wall extrusions and solar-control double glazing.",
    fullOverview:
      "A flagship commercial building envelope balancing high energy efficiency, solar heat rejection, and acoustic isolation next to an arterial highway. Utilizing Jindal Aluminium heavy mullions and Saint-Gobain Infinity solar control glass.",
    scopeOfWork: [
      "Structural engineering design and inter-story drift calculations",
      "Installation of 4,200 sq. metres of captured stick curtain wall grid",
      "Integration of floor-edge fire smoke containment seals to NBC 2016",
      "Concealed top-hung openable vents for smoke evacuation",
    ],
    challengeSection: {
      siteChallenge: "High exterior heat radiation and highway traffic noise (78 dB) across the primary western elevation.",
      technicalConsideration: "Maintaining an overall building envelope SHGC below 0.25 and U-value under 1.8 W/m²K.",
      solutionAdopted: "Utilized Saint-Gobain Infinity SKN solar-control DGU units with thermal break polyamide isolators within Jindal E103004 mullions.",
      finalOutcome: "Achieved 24% reduction in building HVAC cooling loads and reduced indoor ambient noise to comfortable 36 dB levels.",
    },
    results: [
      "LEED Platinum energy rating contribution",
      "Tested water tightness under ASTM E331 dynamic chamber pressure",
      "Delivered on schedule with precision laser alignment",
    ],
    relatedSystems: ["curtain-wall-glazing", "structural-glazing", "facade-louvers"],
  },
  {
    slug: "architectural-structural-glazing",
    title: "Skyline Corporate Tower",
    category: "Structural Glazing",
    location: "Gurugram, NCR",
    systemUsed: "4-Sided Structural Silicone Glazing + Jindal Subframes",
    completionYear: "2023",
    featuredImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDesc: "Monolithic frameless glass facade with concealed structural silicone bonding and reflective solar control.",
    fullOverview:
      "A seamless glass facade for a prominent corporate tower, delivering an unbroken reflective envelope without exterior aluminium capping.",
    scopeOfWork: [
      "Factory clean-room structural silicone application with 100% peel testing",
      "Installation of Jindal 6063-T6 hollow structural vertical mullions",
      "Dead-load support brackets and thermal expansion anchors",
    ],
    challengeSection: {
      siteChallenge: "Strict architectural demand for zero visible frame lines while resisting extreme summer temperature swings (-2°C to 47°C).",
      technicalConsideration: "Differential thermal expansion between exterior glass panels and interior aluminium support framing.",
      solutionAdopted: "Engineered two-component structural silicone bite width with slotted floor brackets allowing 3-dimensional thermal movement.",
      finalOutcome: "A reflective mirror-finish facade with proven durability and zero joint degradation through seasonal weather cycles.",
    },
    results: [
      "Flawless monolithic aesthetic praised by lead design architects",
      "100% watertight seal verified by field hose testing",
    ],
    relatedSystems: ["structural-glazing", "curtain-wall-glazing", "spider-glazing"],
  },
  {
    slug: "contemporary-skylight-installation",
    title: "Atrium Celestial Skylight",
    category: "Commercial",
    location: "Hyderabad, Telangana",
    systemUsed: "Engineered Glazed Skylight + Laminated DGU + Jindal Rafters",
    completionYear: "2024",
    featuredImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDesc: "A monumental 250 sq. metre ridge-gable glass skylight flooding a corporate central atrium with glare-controlled daylight.",
    fullOverview:
      "A custom-engineered overhead glazing project over a triple-height atrium, balancing maximum daylight penetration with solar heat gain and overhead safety.",
    scopeOfWork: [
      "Overhead structural steel coordinate framing and Jindal rafter integration",
      "Installation of Saint-Gobain laminated double-glazed overhead safety glass",
      "Multi-tier internal condensation guttering and roof curb flashings",
    ],
    challengeSection: {
      siteChallenge: "Intense midday sun heat buildup and torrential monsoon rain pooling on high roof spans.",
      technicalConsideration: "Strict NBC 2016 overhead safety mandate requiring post-breakage glass retention and maintenance live-load capacity.",
      solutionAdopted: "Specified 15-degree pitch ridge-gable design with Saint-Gobain Cool-Lite solar control laminated DGU units and internal condensation weeps.",
      finalOutcome: "Dramatically illuminated central atrium with ambient interior temperatures and zero water pooling.",
    },
    results: [
      "Reduced daytime artificial lighting requirements by 65%",
      "Tested safety against high wind uplift and maintenance live loads",
    ],
    relatedSystems: ["skylights", "canopies", "structural-glazing"],
  },
  {
    slug: "premium-residence-casement-installation",
    title: "The Whispering Pines Residence",
    category: "Residential",
    location: "Pune, Maharashtra",
    systemUsed: "CC.50 mm Premium Casement + 3-in-1 Security Frame",
    completionYear: "2023",
    featuredImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDesc: "Custom casement fenestration across a 6,000 sq.ft private estate with multipoint locking and security mesh.",
    fullOverview:
      "A luxury residential project combining large hinged casement windows, French casement doors, and integrated bug screens in champagne gold powder coating.",
    scopeOfWork: [
      "Fabrication of CC.50 mm casement frames and outward-opening sashes",
      "Multipoint euro-groove shoot-bolt hardware installation",
      "Acoustic perimeter EPDM gasketing and brass architectural handles",
    ],
    challengeSection: {
      siteChallenge: "Client required maximum ventilation without compromising interior security or bug intrusion.",
      technicalConsideration: "Combining heavy casement glass weight with smooth friction stay operation and concealed bug mesh.",
      solutionAdopted: "Employed CC.50 heavy box frames with heavy-duty friction stays and 3-in-1 multi-track combination frames.",
      finalOutcome: "Effortless openable ventilation, airtight weather seal when locked, and seamless insect protection.",
    },
    results: [
      "High client satisfaction for aesthetic refinement and ease of use",
      "Airtight seal preventing dust ingress during dry summer months",
    ],
    relatedSystems: ["cc-50", "cc-40", "coc-40"],
  },
  {
    slug: "corporate-glass-partition",
    title: "FinTech Innovation Hub",
    category: "Commercial",
    location: "Mumbai, Maharashtra",
    systemUsed: "Saint-Gobain Stadip Silence Glass Partitions + Jindal Slim Channels",
    completionYear: "2024",
    featuredImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDesc: "Acoustic-rated frameless glass partitions for executive conference suites and private trading cabins.",
    fullOverview:
      "A state-of-the-art office interior combining acoustic privacy for high-stakes financial discussions with visual transparency and daylight penetration.",
    scopeOfWork: [
      "Laser surveying and fabrication of 12.76 mm Stadip Silence acoustic glass",
      "Jindal slim matte black perimeter channels with acoustic isolation tape",
      "Frameless pivot glass doors with concealed hydraulic floor springs and magnetic locks",
    ],
    challengeSection: {
      siteChallenge: "Ensuring complete speech privacy (Rw ≥ 40 dB) between adjoining executive boardrooms and open workstation clusters.",
      technicalConsideration: "Preventing sound flanking through ceiling plenum, perimeter channel joints, and door bottom undercuts.",
      solutionAdopted: "Installed Saint-Gobain Stadip Silence acoustic laminated glass with polycarbonate dry joints and automatic drop-down door seals.",
      finalOutcome: "Achieved verified 41 dB acoustic isolation while maintaining light transmission across the floorplate.",
    },
    results: [
      "Speech privacy certified by acoustic consultant testing",
      "Clean minimalist black frame perimeter lines matching office theme",
    ],
    relatedSystems: ["glass-partitions", "spider-glazing", "structural-glazing"],
  },
];
