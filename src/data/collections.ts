// src/data/collections.ts

import type { Collection } from "@/types/collection";

export const collections: Collection[] = [
  {
    id: "collection_op_vakantie_met_baby",
    slug: "op-vakantie-met-baby",
    status: "published",
    type: "dynamic",
    intent: "family_age",

    title: "Op vakantie met baby",
    subtitle: "De fijnste verblijven voor een ontspannen eerste familievakantie",
    description:
      "Een selectie van verblijven die bijzonder geschikt zijn voor gezinnen met baby's, gebaseerd op comfort, voorzieningen, ligging en Little Atlas Family Intelligence.",

    seo: {
      title: "Op vakantie met baby | Little Atlas",
      description:
        "Ontdek de beste hotels en resorts voor een vakantie met baby. Geselecteerd op comfort, babyvriendelijke voorzieningen en ontspannen ligging.",
      h1: "Op vakantie met baby",
      intro:
        "Een vakantie met baby vraagt om rust, comfort en gemak. Deze verblijven zijn geselecteerd op babyvriendelijke voorzieningen, korte afstanden en een ontspannen familiegevoel.",
      canonicalPath: "/collecties/op-vakantie-met-baby",
      keywords: [
        "op vakantie met baby",
        "babyvriendelijk hotel",
        "vakantie baby",
        "familiehotel baby",
      ],
    },

    rules: {
      mode: "all",
      minimumMatchScore: 75,
      limit: 24,
      sortBy: "family_score",
      rules: [
        {
          field: "babyFriendly",
          operator: "equals",
          value: true,
          weight: 40,
          required: true,
          label: "Babyvriendelijk verblijf",
          source: "family_intelligence",
        },
        {
          field: "babyScore",
          operator: "greater_than_or_equal",
          value: 85,
          weight: 40,
          required: true,
          label: "Hoge Baby Score",
          source: "family_intelligence",
        },
        {
          field: "reviewScore",
          operator: "greater_than_or_equal",
          value: 8,
          weight: 20,
          required: false,
          label: "Sterke reviewscore",
          source: "feed",
        },
      ],
    },

    display: {
      badge: "Baby friendly",
      eyebrow: "Family Intelligence",
      showFilters: true,
      showMap: false,
      showPrices: true,
      showReviewScores: true,
      showFamilyScores: true,
      primaryAgeGroup: "babies",
      highlightedAmenities: ["baby_cots", "children_pool", "family_rooms"],
      providerPreference: ["booking"],
    },

    relatedCollectionSlugs: [
      "op-vakantie-met-peuter",
      "luxe-familiehotels",
      "luxe-familiehotels-mallorca",
    ],

    ai: {
      aiGenerated: false,
      aiAssistedRules: true,
      generationSource: "hybrid",
      confidence: 85,
      reviewedByEditor: true,
    },
  },

  {
    id: "collection_op_vakantie_met_peuter",
    slug: "op-vakantie-met-peuter",
    status: "published",
    type: "dynamic",
    intent: "family_age",

    title: "Op vakantie met peuter",
    subtitle: "Verblijven met speelruimte, zwembaden en gemak voor jonge gezinnen",
    description:
      "Een selectie van hotels en resorts die goed passen bij gezinnen met peuters, met focus op kinderbaden, speelplekken, korte afstanden en familievriendelijke faciliteiten.",

    seo: {
      title: "Op vakantie met peuter | Little Atlas",
      description:
        "Ontdek de beste verblijven voor een vakantie met peuter. Met kinderbad, speelruimte, familiesuites en ontspannen ligging.",
      h1: "Op vakantie met peuter",
      intro:
        "Met een peuter wil je een verblijf dat veilig, overzichtelijk en leuk is. Deze selectie richt zich op gemak, waterplezier en kindvriendelijke faciliteiten.",
      canonicalPath: "/collecties/op-vakantie-met-peuter",
      keywords: [
        "op vakantie met peuter",
        "peutervriendelijk hotel",
        "familievakantie peuter",
        "hotel met peuter",
      ],
    },

    rules: {
      mode: "all",
      minimumMatchScore: 75,
      limit: 24,
      sortBy: "family_score",
      rules: [
        {
          field: "toddlerFriendly",
          operator: "equals",
          value: true,
          weight: 40,
          required: true,
          label: "Peutervriendelijk verblijf",
          source: "family_intelligence",
        },
        {
          field: "toddlerScore",
          operator: "greater_than_or_equal",
          value: 85,
          weight: 40,
          required: true,
          label: "Hoge Toddler Score",
          source: "family_intelligence",
        },
        {
          field: "childrenPool",
          operator: "equals",
          value: true,
          weight: 20,
          required: false,
          label: "Kinderbad aanwezig",
          source: "feed",
        },
      ],
    },

    display: {
      badge: "Peuter proof",
      eyebrow: "Family Intelligence",
      showFilters: true,
      showMap: false,
      showPrices: true,
      showReviewScores: true,
      showFamilyScores: true,
      primaryAgeGroup: "toddlers",
      highlightedAmenities: ["children_pool", "playground", "kids_club"],
      providerPreference: ["booking"],
    },

    relatedCollectionSlugs: [
      "op-vakantie-met-baby",
      "hotels-met-waterpark",
      "luxe-familiehotels",
    ],

    ai: {
      aiGenerated: false,
      aiAssistedRules: true,
      generationSource: "hybrid",
      confidence: 85,
      reviewedByEditor: true,
    },
  },

  {
    id: "collection_luxe_familiehotels",
    slug: "luxe-familiehotels",
    status: "published",
    type: "dynamic",
    intent: "luxury",

    title: "Luxe familiehotels",
    subtitle: "Premium verblijven waar comfort en kindvriendelijkheid samenkomen",
    description:
      "Een collectie van luxe hotels en resorts voor gezinnen die service, design, comfort en familievoorzieningen willen combineren.",

    seo: {
      title: "Luxe familiehotels | Little Atlas",
      description:
        "Ontdek luxe familiehotels en premium resorts voor gezinnen. Geselecteerd op comfort, stijl, reviewscore en family fit.",
      h1: "Luxe familiehotels",
      intro:
        "Luxe familiehotels combineren comfort voor ouders met gemak voor kinderen. Deze selectie richt zich op premium verblijven die gezinnen serieus nemen.",
      canonicalPath: "/collecties/luxe-familiehotels",
      keywords: [
        "luxe familiehotels",
        "luxe hotel met kinderen",
        "premium familieresort",
        "familiehotel luxe",
      ],
    },

    rules: {
      mode: "all",
      minimumMatchScore: 80,
      limit: 24,
      sortBy: "match_score",
      rules: [
        {
          field: "stars",
          operator: "greater_than_or_equal",
          value: 5,
          weight: 35,
          required: true,
          label: "5 sterren of vergelijkbaar premium niveau",
          source: "feed",
        },
        {
          field: "reviewScore",
          operator: "greater_than_or_equal",
          value: 8.5,
          weight: 30,
          required: true,
          label: "Sterke reviewscore",
          source: "feed",
        },
        {
          field: "propertyType",
          operator: "includes",
          value: ["hotel", "resort", "boutique_hotel", "all_inclusive_resort"],
          weight: 20,
          required: true,
          label: "Hotel of resort",
          source: "feed",
        },
        {
          field: "kidsFriendly",
          operator: "equals",
          value: true,
          weight: 15,
          required: false,
          label: "Geschikt voor gezinnen",
          source: "family_intelligence",
        },
      ],
    },

    display: {
      badge: "Premium family stays",
      eyebrow: "Little Atlas Selectie",
      showFilters: true,
      showMap: false,
      showPrices: true,
      showReviewScores: true,
      showFamilyScores: true,
      highlightedAmenities: ["family_rooms", "kids_club", "spa", "restaurant"],
      preferredPropertyTypes: ["hotel", "resort", "boutique_hotel"],
      providerPreference: ["booking"],
    },

    relatedCollectionSlugs: [
      "luxe-familiehotels-mallorca",
      "op-vakantie-met-baby",
      "premium-all-inclusive",
    ],

    ai: {
      aiGenerated: false,
      aiAssistedRules: true,
      generationSource: "hybrid",
      confidence: 90,
      reviewedByEditor: true,
    },
  },

  {
    id: "collection_hotels_met_waterpark",
    slug: "hotels-met-waterpark",
    status: "published",
    type: "dynamic",
    intent: "amenity",

    title: "Hotels met waterpark",
    subtitle: "Waterpret, glijbanen en resorts waar kinderen zich geen moment vervelen",
    description:
      "Een collectie van familiehotels en resorts met waterpark, glijbanen of uitgebreide zwembaden voor kinderen.",

    seo: {
      title: "Hotels met waterpark | Little Atlas",
      description:
        "Ontdek familiehotels met waterpark, glijbanen en kinderbaden. Ideaal voor gezinnen die waterpret centraal willen zetten.",
      h1: "Hotels met waterpark",
      intro:
        "Voor kinderen is een waterpark vaak het hoogtepunt van de vakantie. Deze verblijven combineren waterpret met comfort voor het hele gezin.",
      canonicalPath: "/collecties/hotels-met-waterpark",
      keywords: [
        "hotels met waterpark",
        "familiehotel waterpark",
        "resort met glijbanen",
        "hotel met aquapark",
      ],
    },

    rules: {
      mode: "all",
      minimumMatchScore: 70,
      limit: 24,
      sortBy: "match_score",
      rules: [
        {
          field: "waterPark",
          operator: "equals",
          value: true,
          weight: 50,
          required: true,
          label: "Waterpark aanwezig",
          source: "feed",
        },
        {
          field: "kidsScore",
          operator: "greater_than_or_equal",
          value: 75,
          weight: 30,
          required: false,
          label: "Sterke Kids Score",
          source: "family_intelligence",
        },
        {
          field: "reviewScore",
          operator: "greater_than_or_equal",
          value: 8,
          weight: 20,
          required: false,
          label: "Goede reviewscore",
          source: "feed",
        },
      ],
    },

    display: {
      badge: "Water fun",
      eyebrow: "Family Facilities",
      showFilters: true,
      showMap: false,
      showPrices: true,
      showReviewScores: true,
      showFamilyScores: true,
      primaryAgeGroup: "kids",
      highlightedAmenities: ["waterpark", "children_pool", "multiple_pools"],
      highlightedAmenityCategories: ["pool", "family"],
      providerPreference: ["booking"],
    },

    relatedCollectionSlugs: [
      "op-vakantie-met-peuter",
      "luxe-familiehotels",
      "beste-hotels-voor-kinderen",
    ],

    ai: {
      aiGenerated: false,
      aiAssistedRules: true,
      generationSource: "hybrid",
      confidence: 80,
      reviewedByEditor: true,
    },
  },

  {
    id: "collection_luxe_familiehotels_mallorca",
    slug: "luxe-familiehotels-mallorca",
    status: "published",
    type: "dynamic",
    intent: "destination",

    title: "Luxe familiehotels Mallorca",
    subtitle: "De mooiste premium familieverblijven op Mallorca",
    description:
      "Een selectie van luxe familiehotels en resorts op Mallorca, samengesteld op basis van sterren, reviewscore, locatie, familievoorzieningen en Little Atlas Family Intelligence.",

    destination: {
      name: "Mallorca",
      slug: "mallorca",
      country: "Spanje",
      countryCode: "ES",
    },

    seo: {
      title: "Luxe familiehotels Mallorca | Little Atlas",
      description:
        "Ontdek luxe familiehotels op Mallorca. Premium resorts en stijlvolle verblijven voor gezinnen, geselecteerd door Little Atlas.",
      h1: "Luxe familiehotels Mallorca",
      intro:
        "Mallorca heeft een sterke selectie premium familiehotels: van resorts bij Alcúdia tot stijlvolle verblijven aan rustige baaien. Deze collectie toont de beste luxe opties voor gezinnen.",
      canonicalPath: "/collecties/luxe-familiehotels-mallorca",
      keywords: [
        "luxe familiehotels Mallorca",
        "familiehotel Mallorca luxe",
        "luxe resort Mallorca kinderen",
        "Mallorca met kinderen luxe",
      ],
    },

    rules: {
      mode: "all",
      minimumMatchScore: 80,
      limit: 24,
      sortBy: "match_score",
      rules: [
        {
          field: "destinationSlug",
          operator: "equals",
          value: "mallorca",
          weight: 30,
          required: true,
          label: "Bestemming Mallorca",
          source: "feed",
        },
        {
          field: "stars",
          operator: "greater_than_or_equal",
          value: 5,
          weight: 30,
          required: true,
          label: "5 sterren",
          source: "feed",
        },
        {
          field: "reviewScore",
          operator: "greater_than_or_equal",
          value: 8.5,
          weight: 25,
          required: true,
          label: "Hoge reviewscore",
          source: "feed",
        },
        {
          field: "kidsFriendly",
          operator: "equals",
          value: true,
          weight: 15,
          required: false,
          label: "Geschikt voor gezinnen",
          source: "family_intelligence",
        },
      ],
    },

    display: {
      heroImage: "/mallorca.jpg",
      cardImage: "/mallorca.jpg",
      badge: "Mallorca",
      eyebrow: "Premium family stays",
      showFilters: true,
      showMap: true,
      showPrices: true,
      showReviewScores: true,
      showFamilyScores: true,
      highlightedAmenities: ["family_rooms", "kids_club", "children_pool"],
      preferredPropertyTypes: ["hotel", "resort", "boutique_hotel"],
      providerPreference: ["booking"],
    },

    relatedCollectionSlugs: [
      "luxe-familiehotels",
      "op-vakantie-met-baby",
      "hotels-met-waterpark",
    ],

    ai: {
      aiGenerated: false,
      aiAssistedRules: true,
      generationSource: "hybrid",
      confidence: 90,
      reviewedByEditor: true,
    },
  },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((collection) => collection.slug === slug);
}