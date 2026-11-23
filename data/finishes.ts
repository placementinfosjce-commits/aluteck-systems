export interface FinishItem {
  id: string;
  name: string;
  category: "Matte" | "Gloss" | "Metallic" | "Anodised" | "Textured Powder Coat" | "Architectural Woodgrain" | "Custom RAL";
  hex: string;
  ralCode?: string;
  description: string;
}

export const FINISH_CATEGORIES = [
  "All",
  "Matte",
  "Gloss",
  "Metallic",
  "Anodised",
  "Textured Powder Coat",
  "Architectural Woodgrain",
  "Custom RAL",
] as const;

// Base curated swatches representing 170+ architectural color possibilities
export const FINISHES_DATA: FinishItem[] = [
  // Matte
  { id: "mat-01", name: "Architectural Jet Black Matte", category: "Matte", hex: "#111111", ralCode: "RAL 9005", description: "Signature deep matte black preferred by modern luxury villa architects." },
  { id: "mat-02", name: "Anthracite Charcoal Matte", category: "Matte", hex: "#293133", ralCode: "RAL 7016", description: "Contemporary architectural grey-black with ultra-low gloss index." },
  { id: "mat-03", name: "Graphite Slate Matte", category: "Matte", hex: "#3A3F44", ralCode: "RAL 7024", description: "Refined dark slate tone offering subtle visual contrast." },
  { id: "mat-04", name: "Umbra Grey Matte", category: "Matte", hex: "#4B4D4B", ralCode: "RAL 7022", description: "Earth-toned dark grey complimenting exposed concrete and travertine." },
  { id: "mat-05", name: "Basalt Grey Matte", category: "Matte", hex: "#52595D", ralCode: "RAL 7012", description: "Subtle neutral matte tone suited for minimalist facades." },
  { id: "mat-06", name: "Signal White Matte", category: "Matte", hex: "#F4F4F4", ralCode: "RAL 9003", description: "Pure, pristine white with satin-matte surface protection." },
  { id: "mat-07", name: "Oyster White Matte", category: "Matte", hex: "#E3DAC9", ralCode: "RAL 1013", description: "Warm architectural off-white matching limestone masonry." },
  { id: "mat-08", name: "Bronze Olive Matte", category: "Matte", hex: "#423E37", ralCode: "RAL 7006", description: "Understated olive-tinged bronze with non-reflective finish." },

  // Gloss
  { id: "glo-01", name: "Piano Black High-Gloss", category: "Gloss", hex: "#080808", ralCode: "RAL 9005G", description: "High-spec mirror-like reflective black for statement entrances." },
  { id: "glo-02", name: "Pure White High-Gloss", category: "Gloss", hex: "#FFFFFF", ralCode: "RAL 9016G", description: "Ultra-clean high reflectance white with UV-resistant acrylic gloss." },
  { id: "glo-03", name: "Crimson Royal Gloss", category: "Gloss", hex: "#7E191B", ralCode: "RAL 3004G", description: "Deep architectural wine gloss for boutique commercial accents." },
  { id: "glo-04", name: "Cobalt Blue Gloss", category: "Gloss", hex: "#1C39BB", ralCode: "RAL 5002G", description: "Vibrant high-gloss finish for corporate identity elements." },

  // Metallic
  { id: "met-01", name: "Champagne Gold Metallic", category: "Metallic", hex: "#C5A46D", ralCode: "Custom Met-101", description: "Alutecksystems signature champagne gold metallic with mica flecks." },
  { id: "met-02", name: "Titanium Silver Metallic", category: "Metallic", hex: "#8A9EA7", ralCode: "RAL 9006", description: "Clean industrial silver with fine metallic shimmer." },
  { id: "met-03", name: "Dark Bronze Metallic", category: "Metallic", hex: "#4A3B32", ralCode: "RAL 8019M", description: "Deep architectural bronze with warm metallic undertones." },
  { id: "met-04", name: "Copper Sunburst Metallic", category: "Metallic", hex: "#9E5B40", ralCode: "Custom Met-204", description: "Warm burnished copper tone for luxury residential highlights." },
  { id: "met-05", name: "Gunmetal Shimmer", category: "Metallic", hex: "#434B4D", ralCode: "RAL 9007", description: "Metallic grey-graphite engineered for large curtain wall grids." },
  { id: "met-06", name: "Pearl Platinum Metallic", category: "Metallic", hex: "#A6A6A8", ralCode: "RAL 9022", description: "Luminous light platinum with pearlescent mica finish." },

  // Anodised
  { id: "ano-01", name: "Natural Satin Anodised 25μm", category: "Anodised", hex: "#B8C0C2", description: "Electrolytically sealed natural aluminium silver anodising." },
  { id: "ano-02", name: "Architectural Champagne Anodised", category: "Anodised", hex: "#BFA98A", description: "Refined light champagne electrochemical anodised finish." },
  { id: "ano-03", name: "Medium Bronze Anodised", category: "Anodised", hex: "#5C4B3A", description: "Authentic deep bronze anodised finish showing raw metallic sheen." },
  { id: "ano-04", name: "Midnight Black Anodised", category: "Anodised", hex: "#1E1E20", description: "Class 1 architectural hard-coat black anodised finish." },

  // Textured Powder Coat
  { id: "tex-01", name: "Sablé Noir Cast Texture", category: "Textured Powder Coat", hex: "#1A1A1A", description: "Micro-sand textured dark finish offering tactile grip and scratch resistance." },
  { id: "tex-02", name: "Sablé Corten Rust Texture", category: "Textured Powder Coat", hex: "#7E3E26", description: "Textured faux-corten weathering steel finish without rust runoff." },
  { id: "tex-03", name: "Sablé Basalt Texture", category: "Textured Powder Coat", hex: "#41464B", description: "Fine coarse-grained architectural grey texture." },
  { id: "tex-04", name: "Desert Sand Structured", category: "Textured Powder Coat", hex: "#C2B280", description: "Granular warm beige texture for desert and Mediterranean villas." },

  // Architectural Woodgrain
  { id: "wod-01", name: "Sublimated Golden Teak", category: "Architectural Woodgrain", hex: "#8A5A2B", description: "Rich golden teak sublimation finish with realistic timber grain." },
  { id: "wod-02", name: "Dark American Walnut", category: "Architectural Woodgrain", hex: "#4C3224", description: "Deep dark walnut timber texture combining wood warmth with aluminium rigidity." },
  { id: "wod-03", name: "Natural Scandinavian Oak", category: "Architectural Woodgrain", hex: "#A88358", description: "Light modern oak timber sublimation suited for minimalist interiors." },
  { id: "wod-04", name: "Smoked Wenge Wood", category: "Architectural Woodgrain", hex: "#2E211A", description: "Near-black smoked exotic wood texture for dramatic luxury entrances." },

  // Custom RAL
  { id: "ral-01", name: "RAL 7035 Light Grey", category: "Custom RAL", hex: "#D7D7D7", ralCode: "RAL 7035", description: "Standard international light industrial grey." },
  { id: "ral-02", name: "RAL 7015 Slate Grey", category: "Custom RAL", hex: "#51565C", ralCode: "RAL 7015", description: "Versatile medium-dark grey for commercial framing." },
  { id: "ral-03", name: "RAL 6005 Moss Green", category: "Custom RAL", hex: "#114232", ralCode: "RAL 6005", description: "Classic British racing green for botanical conservatories." },
  { id: "ral-04", name: "RAL 8017 Chocolate Brown", category: "Custom RAL", hex: "#45322E", ralCode: "RAL 8017", description: "Deep earthy brown complimenting natural timber and terracotta." },
  { id: "ral-05", name: "RAL 9010 Pure White", category: "Custom RAL", hex: "#FFFFFF", ralCode: "RAL 9010", description: "Classic architectural warm white." },
  { id: "ral-06", name: "RAL 1019 Grey Beige", category: "Custom RAL", hex: "#9E978E", ralCode: "RAL 1019", description: "Muted contemporary greige for modern facades." },
];
