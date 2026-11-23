export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    role: string;
  };
  publishedDate: string;
  readTime: string;
  coverImage: string;
  tags: string[];
}

export const BLOGS_DATA: BlogPost[] = [
  {
    slug: "benefits-of-slim-aluminium-sliding-windows",
    title: "Why Slim Aluminium Sliding Systems Suit Modern Indian Homes",
    category: "Aluminium Systems",
    excerpt: "Explore how 25mm to 37mm slim-profile sliding systems maximize panoramic views, natural illumination, and weather durability in modern architecture.",
    author: {
      name: "Engineering Strategy Team",
      role: "Alutecksystems Technical Advisory",
    },
    publishedDate: "November 15, 2024",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Slim Series", "Architecture", "Living Space", "CS.25", "CS.32"],
    content: `
### The Evolution of Modern Fenestration

Contemporary architectural design emphasizes minimalism, daylight, and seamless transitions between indoor living rooms and outdoor garden verandas. Traditional bulky window frames frequently obstructed external vistas. The introduction of high-precision slim system aluminium sliding windows—such as the CS.25, CS.29, and CS.32 series—has fundamentally transformed spatial design.

### Engineered Profiles vs Conventional Sections

Unlike standard local fabrications, system aluminium profiles are engineered with tight extrusion tolerances using structural aluminium alloys (predominantly 6063-T6). Key differentiators include:

1. **Ultra-Narrow Sightlines:** Slim vertical interlocks—such as the CS.25's 25.75 mm interlock profile—diminish visual barriers, maximizing natural illumination.
2. **Structural Reinforcement:** Internal reinforced chambers ensure that even under high wind pressures (typical of coastal high-rises or open villa plots), panel deflection remains within strict architectural standards (L/175).
3. **Engineered Tandem Rollers:** Heavy glass panels glide effortlessly on precision-milled stainless steel rails with tandem nylon-coated rollers.
4. **Effective Water Management:** Multi-tier weep drainage systems prevent water ingress during intense monsoon downpours.

### Glazing Compatibility: Single to Insulated Units

Modern slim systems are not limited to single glass. Advanced systems accommodate Double Glazed Units (DGU) from 16 mm up to 31 mm, enabling high thermal insulation (reducing AC power consumption) and blocking up to 38 dB of ambient city traffic noise.

When specifying systems for your residential villa or luxury apartment, select certified profiles with verified section weights and track dimensions to ensure lasting performance.
    `,
  },
  {
    slug: "understanding-structural-glazing-for-modern-architecture",
    title: "Understanding Structural Glazing for Modern Architecture",
    category: "Façade Systems",
    excerpt: "A comprehensive guide to 2-sided and 4-sided structural silicone glazing, engineering wind loads, and Saint-Gobain glass selection.",
    author: {
      name: "Façade Design Group",
      role: "Alutecksystems Façade Division",
    },
    publishedDate: "October 28, 2024",
    readTime: "7 min read",
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    tags: ["Structural Glazing", "Commercial", "Saint-Gobain", "Engineering"],
    content: `
### What Is Structural Glazing?

Structural glazing is an architectural building envelope system in which glass panels are bonded directly to an aluminium subframe using high-strength structural silicone sealant. The exterior presents a clean, monolithic glass surface with zero external aluminium capping or pressure plates.

### Two-Sided vs Four-Sided Silicone Glazing

- **Two-Sided Structural Glazing:** Two opposite sides of the glass panel (typically vertical) are bonded with structural silicone, while horizontal edges are mechanically retained in aluminium channels. This strikes a balance between minimalist aesthetics and mechanical restraint.
- **Four-Sided Structural Glazing:** All four edges of the glass panel are structurally silicone-bonded to an aluminium carrier cassette, presenting a completely frameless exterior curtain of glass.

### Engineering & Wind Load Compliance

In Indian construction, structural glazing must adhere strictly to **IS 16231 (Part 1 to 4)** for glass in buildings and **IS 875 (Part 3)** for wind loads. Key factors include:
- **Silicone Bite Calculation:** The width of the structural silicone contact area is determined by the design wind pressure and panel dimensions.
- **Dead-Load Support:** Structural dead-load brackets must support 100% of the glass weight, preventing continuous shear stress on the silicone adhesive.
- **Differential Thermal Movement:** Slotted bracket connections on Jindal 6063-T6 mullions allow expansion and contraction during extreme seasonal weather changes.

When properly designed and factory-glazed under controlled clean-room environments, structural glazing provides decades of weather tightness and architectural distinction.
    `,
  },
  {
    slug: "aluminium-vs-upvc-windows-and-doors",
    title: "Aluminium vs uPVC Windows: Understanding the Differences",
    category: "Technical Guide",
    excerpt: "Compare structural strength, profile sightlines, thermal performance, and design possibilities between system aluminium and uPVC fenestration.",
    author: {
      name: "Product Engineering Desk",
      role: "Technical Research Lead",
    },
    publishedDate: "October 12, 2024",
    readTime: "6 min read",
    coverImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Fenestration", "Aluminium", "uPVC", "Comparison"],
    content: `
### Making the Right Fenestration Choice

Architects and property owners frequently weigh the respective merits of System Aluminium versus uPVC windows and doors. Both materials have evolved significantly, and each serves distinct architectural requirements.

### 1. Structural Strength & Span Capability
Aluminium boasts significantly higher tensile strength and structural modulus compared to unplasticized PVC. This allows aluminium frames to support monumental panel heights (up to 3.5 metres in series like COS.49 or BS.50) with ultra-slim sightlines. uPVC, while reinforced with internal steel chambers, is typically restricted to moderate panel spans.

### 2. Thermal & Acoustic Performance
uPVC is naturally non-conductive, making it an excellent thermal insulator that minimizes heat transfer into air-conditioned spaces. Modern system aluminium bridges this gap through polyamide thermal breaks and insulated double glazed units (DGU) from glass manufacturers like Saint-Gobain.

### 3. Aesthetics & Finish Longevity
Aluminium offers unmatched finishing flexibility: over 170+ architectural RAL powder-coat colours, metallic champagne finishes, electrochemical anodising, and textured coatings that resist scratching and UV degradation. uPVC is available in classic white and specialized laminated timber foils.

### Summary Recommendation
- Choose **System Aluminium** for expansive living room sliders, monumental bifold doors, slim modern aesthetics, and coastal high-rises.
- Choose **uPVC** for bedroom casement windows, acoustic dampening in city centres, and cost-effective multi-chamber thermal comfort.
    `,
  },
  {
    slug: "choosing-the-right-glass-for-indian-weather-conditions",
    title: "Choosing the Right Glass for Indian Weather Conditions",
    category: "Glazing Solutions",
    excerpt: "How to specify solar heat gain coefficient (SHGC), visible light transmission (VLT), and acoustic laminated glass for tropical climates.",
    author: {
      name: "Glass Specification Desk",
      role: "Architectural Glazing Specialist",
    },
    publishedDate: "September 24, 2024",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    tags: ["Saint-Gobain", "Solar Control", "Energy Efficiency", "DGU"],
    content: `
### The Indian Climatic Challenge

In India, building envelopes face intense solar radiation for most of the year, followed by torrential monsoon downpours and ambient urban dust. Selecting standard clear float glass leads to uncomfortable indoor greenhouse heating, high air-conditioning electricity bills, and fading interior furnishings.

### Key Performance Metrics

When specifying architectural glass with our Saint-Gobain glazing partners, three metrics are paramount:
1. **Solar Heat Gain Coefficient (SHGC):** Measures the fraction of solar radiation admitted through the glass. In tropical India, a lower SHGC (between 0.20 and 0.35) is crucial to block radiant heat.
2. **Visible Light Transmission (VLT):** Represents the percentage of natural daylight passing through. A balanced VLT (typically 30% to 50%) prevents glaring indoor reflections while ensuring brightly lit interiors without artificial lighting.
3. **U-Value:** The rate of heat transfer through the glass. Double Glazed Units (DGU) with Argon gas filling reduce U-values from 5.8 W/m²K (single glass) down to 1.6–1.8 W/m²K.

### The Saint-Gobain Infinity Range

For villas and commercial facades, the **Saint-Gobain Infinity** solar-control range provides tailored coatings that selectively block infrared heat while maintaining high transparency and neutral aesthetics.

Always consult with an architectural fenestration specialist to align glass coatings with your building's solar orientation.
    `,
  },
  {
    slug: "maintaining-aluminium-windows-and-doors-for-long-term-performance",
    title: "Maintaining Aluminium Windows and Doors for Long-Term Performance",
    category: "Maintenance",
    excerpt: "Best practices for track cleaning, roller lubrication, gasket care, and finish protection to preserve smooth operation for decades.",
    author: {
      name: "After-Sales Support Team",
      role: "Client Care Division",
    },
    publishedDate: "August 18, 2024",
    readTime: "4 min read",
    coverImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    tags: ["Maintenance", "Durability", "Gaskets", "Rollers"],
    content: `
### Built for Durability, Maintained for Perfection

System aluminium windows and doors are inherently corrosion-resistant and engineered for decades of reliable use. However, proactive periodic maintenance ensures that sliding rollers remain smooth and weather seals maintain airtight compression.

### 1. Track Hygiene
Dust, sand, and construction grit can collect in bottom sliding tracks. Vacuum debris from the track grooves monthly and wipe the stainless steel running rails with a damp cloth. Never allow sand to accumulate beneath roller wheels.

### 2. Roller & Hardware Lubrication
Every 12 months, apply a light silicone-based lubricant spray to sliding roller bearings and casement friction stay pivots. Avoid petroleum-based grease, which attracts dust and creates sticky build-up.

### 3. Gasket Care
Inspect perimeter EPDM rubber gaskets twice a year. Wipe clean with warm water to maintain rubber elasticity and ensure the continuous seal prevents monsoon water intrusion.

### 4. Surface Finish Care
Clean powder-coated or anodised aluminium surfaces using a neutral pH detergent and a soft sponge. Never use harsh abrasive scouring pads, caustic acids, or solvent thinners that can strip the protective architectural coating.

Following these simple practices will preserve the smooth operation and visual appeal of your Alutecksystems installations for decades.
    `,
  },
];
