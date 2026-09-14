export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  image: string;
  category: 'featured' | 'trending';
  dimensions: {
    lensWidth: string;
    bridge: string;
    temple: string;
    totalWidth: string;
    weight: string;
  };
  optics: {
    lensType: string;
    protection: string;
    coating: string;
    category: string;
  };
  materials: {
    frame: string;
    hinges: string;
    pads: string;
  };
}

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'aviator-classic',
    name: 'AVERUNE CLASSIC',
    tagline: 'Titanium & Hand-Finished Acetate',
    description: 'Our defining silhouette. Precision-machined Japanese beta-titanium subframe wrapped in hand-buffed organic black cellulose acetate.',
    price: 460,
    image: '/images/products/aviator-classic.jpg',
    category: 'featured',
    dimensions: {
      lensWidth: '54 mm',
      bridge: '18 mm',
      temple: '145 mm',
      totalWidth: '142 mm',
      weight: '18 grams',
    },
    optics: {
      lensType: 'Japanese Polarized Mineral Crystal',
      protection: '100% UVA / UVB 400 Protection',
      coating: 'Multi-layer internal anti-reflective',
      category: 'Filter Category 3',
    },
    materials: {
      frame: 'Aerospace-Grade Beta Titanium & Bio-Acetate',
      hinges: 'Custom 5-barrel titanium hinge with locking screw',
      pads: 'Solid pure titanium hypallergenic nose pads',
    },
  },
  {
    id: 'stealth-titanium',
    name: 'STEALTH TITANIUM',
    tagline: 'Ultralight Monobloc Construction',
    description: 'Sculpted from a continuous block of surgical-grade titanium. Weighing just 14 grams, engineered for frictionless presence.',
    price: 520,
    image: '/images/products/stealth-titanium.jpg',
    category: 'featured',
    dimensions: {
      lensWidth: '52 mm',
      bridge: '19 mm',
      temple: '140 mm',
      totalWidth: '138 mm',
      weight: '14 grams',
    },
    optics: {
      lensType: 'Silver Mirror Polarized Crystal',
      protection: '100% UVA / UVB 400 Protection',
      coating: 'Hydrophobic & oleophobic smudge shield',
      category: 'Filter Category 3',
    },
    materials: {
      frame: 'Solid block milled Grade 5 Titanium',
      hinges: 'Integrated flex-pivot screwless joint',
      pads: 'Directly sculpted titanium contour pads',
    },
  },
  {
    id: 'horizon-gold',
    name: 'HORIZON GOLD',
    tagline: '18K Champagne Gold Wireframe',
    description: 'An architectural reinterpretation of the teardrop pilot silhouette. Plated with 5 microns of champagne gold over titanium wire.',
    price: 490,
    image: '/images/products/horizon-gold.jpg',
    category: 'featured',
    dimensions: {
      lensWidth: '55 mm',
      bridge: '17 mm',
      temple: '142 mm',
      totalWidth: '140 mm',
      weight: '16 grams',
    },
    optics: {
      lensType: 'Amber Gradient Optical Glass',
      protection: '100% UVA / UVB 400 Protection',
      coating: 'Dual-side sapphire anti-scratch armor',
      category: 'Filter Category 2',
    },
    materials: {
      frame: '18K Champagne Gold on Pure Titanium Wire',
      hinges: 'Micro-precision cylindrical lock hinges',
      pads: 'Adjustable titanium pad arms with soft-seat pads',
    },
  },
  {
    id: 'eclipse-mono',
    name: 'ECLIPSE MONO',
    tagline: 'Architectural Geometric Acetate',
    description: 'Substantial, angular, and sculpted with bold discipline. Thick-cut 8mm Japanese acetate carved to maintain optimal facial balance.',
    price: 440,
    image: '/images/products/eclipse-mono.jpg',
    category: 'featured',
    dimensions: {
      lensWidth: '51 mm',
      bridge: '21 mm',
      temple: '145 mm',
      totalWidth: '144 mm',
      weight: '26 grams',
    },
    optics: {
      lensType: 'Pure Smoked Polarized Shield',
      protection: '100% UVA / UVB 400 Protection',
      coating: 'Anti-static and diamond-tough hardcoat',
      category: 'Filter Category 3',
    },
    materials: {
      frame: '8mm Cured Takiron Organic Bio-Acetate',
      hinges: '7-barrel reinforced wire-core titanium hinges',
      pads: 'Saddle bridge ergonomic acetate saddle',
    },
  },
];

export const TRENDING_PRODUCTS: Product[] = [
  {
    id: 'mirage-amber',
    name: 'MIRAGE AMBER',
    tagline: 'Warm Honey Celluloid & Olive Optics',
    description: 'A vintage silhouette infused with modern minimalist geometry. Japanese honey acetate with contrasting deep olive polarized lenses.',
    price: 420,
    image: '/images/products/mirage-amber.jpg',
    category: 'trending',
    dimensions: {
      lensWidth: '50 mm',
      bridge: '20 mm',
      temple: '145 mm',
      totalWidth: '139 mm',
      weight: '22 grams',
    },
    optics: {
      lensType: 'Deep Olive Polarized Mineral',
      protection: '100% UVA / UVB 400 Protection',
      coating: 'Backside anti-reflective coating',
      category: 'Filter Category 3',
    },
    materials: {
      frame: 'Hand-polished Japanese Honey Acetate',
      hinges: 'Embedded silver nickel 5-barrel joints',
      pads: 'Integral keyhole nose bridge',
    },
  },
  {
    id: 'phantom-matte',
    name: 'PHANTOM MATTE',
    tagline: 'Ultra-Lightweight Dark Double Bridge',
    description: 'Zero excess. Matte black anodized titanium double-bar aviator with low-profile smoke gradient optics.',
    price: 480,
    image: '/images/products/phantom-matte.jpg',
    category: 'trending',
    dimensions: {
      lensWidth: '53 mm',
      bridge: '18 mm',
      temple: '142 mm',
      totalWidth: '141 mm',
      weight: '15 grams',
    },
    optics: {
      lensType: 'Smoke Gradient Polarized',
      protection: '100% UVA / UVB 400 Protection',
      coating: 'Fingerprint-resistant oleophobic surface',
      category: 'Filter Category 3',
    },
    materials: {
      frame: 'Matte Anodized Japanese Beta Titanium',
      hinges: 'Precision micro-dovetail hinges',
      pads: 'Acoustic-machined grip titanium pads',
    },
  },
  {
    id: 'solstice-titanium',
    name: 'SOLSTICE GRAPHITE',
    tagline: 'Linear Browline in Satin Graphite',
    description: 'Subtle tension between sharp industrial lines and soft organic curves. Finished in non-reflective satin graphite.',
    price: 510,
    image: '/images/products/stealth-titanium.jpg',
    category: 'trending',
    dimensions: {
      lensWidth: '52 mm',
      bridge: '19 mm',
      temple: '144 mm',
      totalWidth: '139 mm',
      weight: '16 grams',
    },
    optics: {
      lensType: 'Graphite Neutral Polarized',
      protection: '100% UVA / UVB 400 Protection',
      coating: 'Full spectrum UV400 suppression',
      category: 'Filter Category 3',
    },
    materials: {
      frame: 'Milled Titanium & Wire Substructure',
      hinges: 'Spring-loaded dampening titanium barrels',
      pads: 'Medical-grade titanium pads',
    },
  },
];

export const ALL_PRODUCTS = [...FEATURED_PRODUCTS, ...TRENDING_PRODUCTS];
