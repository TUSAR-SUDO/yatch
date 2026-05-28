export interface YachtQuickSpec {
  label: string
  value: string
}

export interface YachtSpec {
  label: string
  value: string
}

export interface YachtSpecCategory {
  category: string
  specs: YachtSpec[]
}

export interface Yacht {
  id: string
  name: string
  tagline: string
  quickSpecs: YachtQuickSpec[]
  fullSpecs: YachtSpecCategory[]
}

export const yachts: Yacht[] = [
  {
    id: 'ocean-eclipse',
    name: 'OCEAN ECLIPSE',
    tagline: 'REFINED CRUISING FOR THE DISCERNING FEW',
    quickSpecs: [
      { label: 'LENGTH', value: '28M' },
      { label: 'BEAM', value: '6.8M' },
      { label: 'CRUISING SPEED', value: '22 KNOTS' },
      { label: 'GUESTS', value: 'UP TO 12' },
      { label: 'CABINS', value: '4 EN-SUITE' },
      { label: 'CREW', value: '5' },
    ],
    fullSpecs: [
      {
        category: 'DIMENSIONS',
        specs: [
          { label: 'LENGTH OVERALL', value: '28.4 METRES (93.2 FT)' },
          { label: 'BEAM', value: '6.8 METRES (22.3 FT)' },
          { label: 'DRAFT', value: '1.9 METRES (6.2 FT)' },
          { label: 'GROSS TONNAGE', value: '185 GT' },
        ],
      },
      {
        category: 'PERFORMANCE',
        specs: [
          { label: 'CRUISING SPEED', value: '22 KNOTS' },
          { label: 'TOP SPEED', value: '28 KNOTS' },
          { label: 'RANGE', value: '1,800 NM AT 12 KNOTS' },
          { label: 'ENGINES', value: '2 × MTU 12V 2000 M96L' },
          { label: 'FUEL CAPACITY', value: '12,000 LITRES' },
        ],
      },
      {
        category: 'CONSTRUCTION',
        specs: [
          { label: 'HULL', value: 'GRP COMPOSITE' },
          { label: 'SUPERSTRUCTURE', value: 'GRP WITH CARBON REINFORCEMENT' },
          { label: 'YEAR BUILT', value: '2019' },
          { label: 'REFIT', value: '2023 — FULL INTERIOR' },
        ],
      },
      {
        category: 'ONBOARD COMFORT',
        specs: [
          { label: 'GUESTS', value: 'UP TO 12 IN 4 EN-SUITE CABINS' },
          { label: 'MASTER SUITE', value: 'FULL-BEAM WITH PRIVATE TERRACE' },
          { label: 'AMENITIES', value: 'JACUZZI, BEACH CLUB, GYM' },
          { label: 'TENDER', value: 'WILLIAMS 505 DIESELJET' },
        ],
      },
      {
        category: 'NAVIGATION & SAFETY',
        specs: [
          { label: 'STABILISERS', value: 'ZERO-SPEED AT-ANCHOR SYSTEM' },
          { label: 'NAVIGATION', value: 'FULL SIMRAD INTEGRATED BRIDGE' },
          { label: 'CLASSIFICATION', value: 'RINA C ✠ HULL · MACH Y' },
          { label: 'FLAG', value: 'CAYMAN ISLANDS' },
        ],
      },
    ],
  },
  {
    id: 'black-sovereign',
    name: 'BLACK SOVEREIGN',
    tagline: 'POWER AND PRECISION REDEFINED',
    quickSpecs: [
      { label: 'LENGTH', value: '32M' },
      { label: 'BEAM', value: '7.4M' },
      { label: 'TOP SPEED', value: '28 KNOTS' },
      { label: 'GUESTS', value: 'UP TO 10' },
      { label: 'CABINS', value: '5 EN-SUITE' },
      { label: 'CREW', value: '6' },
    ],
    fullSpecs: [
      {
        category: 'DIMENSIONS',
        specs: [
          { label: 'LENGTH OVERALL', value: '32.0 METRES (105 FT)' },
          { label: 'BEAM', value: '7.4 METRES (24.3 FT)' },
          { label: 'DRAFT', value: '2.2 METRES (7.2 FT)' },
          { label: 'GROSS TONNAGE', value: '280 GT' },
        ],
      },
      {
        category: 'PERFORMANCE',
        specs: [
          { label: 'CRUISING SPEED', value: '24 KNOTS' },
          { label: 'TOP SPEED', value: '28 KNOTS' },
          { label: 'RANGE', value: '2,400 NM AT 14 KNOTS' },
          { label: 'ENGINES', value: '2 × MTU 16V 4000 M93L' },
          { label: 'FUEL CAPACITY', value: '18,000 LITRES' },
        ],
      },
      {
        category: 'CONSTRUCTION',
        specs: [
          { label: 'HULL', value: 'STEEL' },
          { label: 'SUPERSTRUCTURE', value: 'ALUMINIUM' },
          { label: 'YEAR BUILT', value: '2020' },
          { label: 'NAVAL ARCHITECT', value: 'PHILIPPE BRIAND' },
        ],
      },
      {
        category: 'ONBOARD COMFORT',
        specs: [
          { label: 'GUESTS', value: 'UP TO 10 IN 5 EN-SUITE CABINS' },
          { label: 'MASTER SUITE', value: 'UPPER-DECK WITH PANORAMIC VIEWS' },
          { label: 'AMENITIES', value: 'CINEMA, SPA, ZERO-EDGE POOL' },
          { label: 'TENDER', value: 'CUSTOM RIVA 38 RIVALE' },
        ],
      },
      {
        category: 'NAVIGATION & SAFETY',
        specs: [
          { label: 'STABILISERS', value: 'NAIAD DYNAMICS ROLL CONTROL' },
          { label: 'NAVIGATION', value: 'FURUNO NAVNET TZ PROFESSIONAL' },
          { label: 'CLASSIFICATION', value: 'LLOYD\'S 100A1 SSC YACHT' },
          { label: 'FLAG', value: 'MARSHALL ISLANDS' },
        ],
      },
    ],
  },
  {
    id: 'azure-horizon',
    name: 'AZURE HORIZON',
    tagline: 'WHERE THE SEA MEETS THE SKY',
    quickSpecs: [
      { label: 'LENGTH', value: '25M' },
      { label: 'BEAM', value: '6.2M' },
      { label: 'RANGE', value: '4100NM' },
      { label: 'GUESTS', value: '8+12 CREW' },
      { label: 'DECK', value: 'SUN DECK WITH JACUZZI' },
      { label: 'BUILD', value: '2021' },
    ],
    fullSpecs: [
      {
        category: 'DIMENSIONS',
        specs: [
          { label: 'LENGTH OVERALL', value: '25.0 METRES (82 FT)' },
          { label: 'BEAM', value: '6.2 METRES (20.3 FT)' },
          { label: 'DRAFT', value: '1.7 METRES (5.6 FT)' },
          { label: 'GROSS TONNAGE', value: '148 GT' },
        ],
      },
      {
        category: 'PERFORMANCE',
        specs: [
          { label: 'CRUISING SPEED', value: '14 KNOTS' },
          { label: 'TOP SPEED', value: '18 KNOTS' },
          { label: 'RANGE', value: '4,100 NM AT 12 KNOTS' },
          { label: 'ENGINES', value: '2 × CATERPILLAR C18 ACERT' },
          { label: 'FUEL CAPACITY', value: '22,000 LITRES' },
        ],
      },
      {
        category: 'CONSTRUCTION',
        specs: [
          { label: 'HULL', value: 'STEEL WITH ICE-CLASS RATING' },
          { label: 'SUPERSTRUCTURE', value: 'ALUMINIUM' },
          { label: 'YEAR BUILT', value: '2021' },
          { label: 'NAVAL ARCHITECT', value: 'DIANA YACHT DESIGN' },
        ],
      },
      {
        category: 'ONBOARD COMFORT',
        specs: [
          { label: 'GUESTS', value: '8 GUESTS + 12 CREW' },
          { label: 'MASTER SUITE', value: 'MAIN-DECK OWNER\'S CABIN' },
          { label: 'AMENITIES', value: 'SUN DECK JACUZZI, HELIPAD, DIVE CENTRE' },
          { label: 'TENDER', value: 'ZODIAC MEDLINE 740 + RESCUE RIB' },
        ],
      },
      {
        category: 'NAVIGATION & SAFETY',
        specs: [
          { label: 'STABILISERS', value: 'QUANTUM MAG SERIES' },
          { label: 'NAVIGATION', value: 'KELVIN HUGHES SHARPEYE RADAR' },
          { label: 'CLASSIFICATION', value: 'DNV GL ✠1A1 YACHT' },
          { label: 'FLAG', value: 'ISLE OF MAN' },
        ],
      },
    ],
  },
]
