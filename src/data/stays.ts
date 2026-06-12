// src/data/stays.ts

import type { Stay } from "@/types/stay";

export const stays: Stay[] = [
  {
    id: "stay_zafiro_palace_mallorca",
    slug: "zafiro-palace-mallorca",
    status: "published",

    feed: {
      externalId: "zafiro-palace-mallorca-demo",
      provider: "booking",

      name: "Zafiro Palace Mallorca",
      slug: "zafiro-palace-mallorca",

      destination: "Mallorca",
      destinationSlug: "mallorca",
      region: "Alcúdia",
      country: "Spanje",
      countryCode: "ES",

      propertyType: "resort",
      stars: 5,

      location: {
        latitude: 39.843,
        longitude: 3.132,
        city: "Alcúdia",
        region: "Alcúdia",
        country: "Spanje",
        beachDistanceMeters: 500,
        airportDistanceKm: 61,
        centerDistanceKm: 1.5,
        carRecommended: false,
        walkableToRestaurants: true,
        walkableToBeach: true,
      },

      images: [
        {
          url: "/mallorca.jpg",
          alt: "Zafiro Palace Mallorca",
          role: "hero",
          provider: "manual",
          position: 1,
        },
        {
          url: "/mallorca.jpg",
          alt: "Zwembad en resortomgeving bij Zafiro Palace Mallorca",
          role: "gallery",
          provider: "manual",
          position: 2,
        },
      ],

      heroImage: "/mallorca.jpg",
      gallery: ["/mallorca.jpg", "/mallorca.jpg"],

      reviews: [
        {
          provider: "booking",
          score: 9.1,
          scale: 10,
          normalizedScore: 9.1,
          count: 1248,
          label: "Excellent",
          url: "https://www.booking.com",
        },
      ],

      primaryReview: {
        provider: "booking",
        score: 9.1,
        scale: 10,
        normalizedScore: 9.1,
        count: 1248,
        label: "Excellent",
        url: "https://www.booking.com",
      },

      reviewScore: 9.1,
      reviewCount: 1248,
      reviewProvider: "booking",
      reviewLabel: "Excellent",

      priceFrom: 312,
      currency: "EUR",
      affiliateUrl: "https://www.booking.com",

      providers: [
        {
          provider: "booking",
          externalId: "zafiro-palace-mallorca-demo",
          affiliateUrl: "https://www.booking.com",
          deepLink: "https://www.booking.com",
          priceFrom: 312,
          currency: "EUR",
          available: true,
          priority: 1,
        },
      ],

      amenities: [
        {
          key: "kids_club",
          label: "Kidsclub",
          category: "family",
          source: "feed",
        },
        {
          key: "multiple_pools",
          label: "Meerdere zwembaden",
          category: "pool",
          source: "feed",
        },
        {
          key: "family_rooms",
          label: "Familiesuites",
          category: "room",
          source: "feed",
        },
        {
          key: "spa",
          label: "Spa",
          category: "wellness",
          source: "feed",
        },
        {
          key: "restaurants",
          label: "Restaurants",
          category: "food",
          source: "feed",
        },
        {
          key: "children_pool",
          label: "Kinderbad",
          category: "family",
          source: "feed",
        },
        {
          key: "near_beach",
          label: "Dicht bij strand",
          category: "beach",
          source: "feed",
        },
        {
          key: "fitness",
          label: "Fitness",
          category: "sports",
          source: "feed",
        },
      ],

      rooms: [
        {
          id: "zafiro-junior-suite",
          name: "Junior Suite",
          description:
            "Comfortabele suite voor gezinnen die extra ruimte willen ten opzichte van een standaardkamer.",
          maxGuests: 3,
          bedrooms: 1,
          bathrooms: 1,
          hasSeparateBedroom: false,
          hasTerrace: true,
          provider: "booking",
        },
        {
          id: "zafiro-family-suite",
          name: "Family Suite",
          description:
            "Ruimere optie voor families die slapen en leven beter willen scheiden.",
          maxGuests: 4,
          bedrooms: 1,
          bathrooms: 1,
          hasSeparateBedroom: true,
          hasTerrace: true,
          provider: "booking",
        },
        {
          id: "zafiro-swim-up-suite",
          name: "Swim-up Suite",
          description:
            "Populaire keuze voor gezinnen die direct toegang tot water willen.",
          maxGuests: 4,
          bedrooms: 1,
          bathrooms: 1,
          hasSeparateBedroom: true,
          hasTerrace: true,
          provider: "booking",
        },
      ],

      rawAmenities: [
        "Kidsclub",
        "Meerdere zwembaden",
        "Familiesuites",
        "Spa",
        "Restaurants",
        "Kinderbad",
        "Dicht bij strand",
        "Fitness",
      ],
      rawRoomTypes: ["Junior Suite", "Family Suite", "Swim-up Suite"],
    },

    editorial: {
      label: "Little Atlas Selectie",
      title: "Zafiro Palace Mallorca",
      subtitle:
        "Een luxe familieverblijf bij Alcúdia met resortgevoel, veel zwembaden en ruime suites.",
      summary:
        "Zafiro Palace Mallorca is een ruim opgezet vijfsterrenresort voor gezinnen die comfort, zwembaden en strand binnen handbereik willen combineren met een premium vakantiegevoel.",
      whySelected:
        "We selecteren dit verblijf vanwege de combinatie van familiesuites, meerdere zwembaden, kindvriendelijke faciliteiten en de ligging bij het noorden van Mallorca.",
      bestFor: [
        "Gezinnen die luxe en gemak zoeken",
        "Families met jonge kinderen",
        "Ouders die strand en resort willen combineren",
      ],
      highlights: [
        "Meerdere zwembaden voor verschillende leeftijden",
        "Suites die goed werken voor gezinnen",
        "Dicht bij strand en boulevard",
        "Restaurants op het resort",
      ],
      littleAtlasNotes: [
        "Beste keuze als je Noord-Mallorca wilt combineren met resortcomfort.",
        "Let bij boeken goed op kamertype: swim-up en family suites verschillen sterk in beleving.",
        "Interessant voor gezinnen die niet elke avond buiten de deur willen eten.",
      ],
      nearby: [
        "Strand van Alcúdia",
        "Port d’Alcúdia",
        "Oude centrum van Alcúdia",
        "Playa de Muro",
      ],
      faqs: [
        {
          question: "Is Zafiro Palace Mallorca geschikt voor jonge kinderen?",
          answer:
            "Ja, vooral door de zwembaden, familiesuites en kindvriendelijke resortopzet.",
        },
        {
          question: "Ligt het hotel direct aan het strand?",
          answer:
            "Het verblijf ligt dicht bij het strand van Alcúdia, maar controleer altijd de exacte afstand per aanbieder.",
        },
      ],
      seoTitle:
        "Zafiro Palace Mallorca met kinderen | Little Atlas familieverblijf",
      seoDescription:
        "Bekijk Zafiro Palace Mallorca als premium familieverblijf op Mallorca.",
      aiGenerated: false,
      reviewedByEditor: true,
    },

    familyAttributes: {
      babyFriendly: true,
      toddlerFriendly: true,
      kidsFriendly: true,
      teenFriendly: true,

      babyCots: true,
      babysitting: null,
      kidsClub: true,
      childrenPool: true,
      waterPark: false,
      playground: null,
      strollerFriendly: true,

      familyRooms: true,
      connectingRooms: null,
      kitchenOrKitchenette: null,
      laundryFacilities: null,

      shortTransfer: false,
      walkableArea: true,
      calmSetting: true,

      source: "hybrid",
      confidence: 82,
    },

    familyScores: {
      babies: {
        score: 88,
        label: "excellent",
        reasons: [
          "Ruime kamers",
          "Kinderbad aanwezig",
          "Rustige resortopzet",
          "Goed beloopbare omgeving",
        ],
        source: "hybrid",
        confidence: 82,
      },
      toddlers: {
        score: 91,
        label: "excellent",
        reasons: [
          "Meerdere zwembaden",
          "Kidsclub",
          "Korte afstanden binnen het resort",
          "Dicht bij strand",
        ],
        source: "hybrid",
        confidence: 86,
      },
      kids: {
        score: 89,
        label: "excellent",
        reasons: [
          "Veel waterplezier",
          "Restaurants op het resort",
          "Ruime suites",
        ],
        source: "hybrid",
        confidence: 84,
      },
      teens: {
        score: 74,
        label: "medium",
        reasons: [
          "Zwembaden en fitness aanwezig",
          "Dicht bij Alcúdia",
          "Minder uitgesproken tienerprogramma",
        ],
        source: "hybrid",
        confidence: 72,
      },
    },

    collectionMatches: [],
  },

  {
    id: "stay_falkensteiner_family_resort_lido",
    slug: "falkensteiner-family-resort-lido",
    status: "published",

    feed: {
      externalId: "falkensteiner-family-resort-lido-demo",
      provider: "booking",

      name: "Falkensteiner Family Resort Lido",
      slug: "falkensteiner-family-resort-lido",

      destination: "Zuid-Tirol",
      destinationSlug: "zuid-tirol",
      region: "Pustertal",
      country: "Italië",
      countryCode: "IT",

      propertyType: "resort",
      stars: 5,

      location: {
        latitude: 46.785,
        longitude: 11.91,
        city: "Ehrenburg",
        region: "Zuid-Tirol",
        country: "Italië",
        beachDistanceMeters: null,
        airportDistanceKm: 85,
        centerDistanceKm: 2,
        carRecommended: true,
        walkableToRestaurants: false,
        walkableToBeach: false,
      },

      images: [
        {
          url: "/mallorca.jpg",
          alt: "Falkensteiner Family Resort Lido",
          role: "hero",
          provider: "manual",
          position: 1,
        },
        {
          url: "/mallorca.jpg",
          alt: "Familieresort in Zuid-Tirol",
          role: "gallery",
          provider: "manual",
          position: 2,
        },
      ],

      heroImage: "/mallorca.jpg",
      gallery: ["/mallorca.jpg", "/mallorca.jpg"],

      reviews: [
        {
          provider: "booking",
          score: 9.2,
          scale: 10,
          normalizedScore: 9.2,
          count: 642,
          label: "Excellent",
          url: "https://www.booking.com",
        },
      ],

      primaryReview: {
        provider: "booking",
        score: 9.2,
        scale: 10,
        normalizedScore: 9.2,
        count: 642,
        label: "Excellent",
        url: "https://www.booking.com",
      },

      reviewScore: 9.2,
      reviewCount: 642,
      reviewProvider: "booking",
      reviewLabel: "Excellent",

      priceFrom: 420,
      currency: "EUR",
      affiliateUrl: "https://www.booking.com",

      providers: [
        {
          provider: "booking",
          externalId: "falkensteiner-family-resort-lido-demo",
          affiliateUrl: "https://www.booking.com",
          deepLink: "https://www.booking.com",
          priceFrom: 420,
          currency: "EUR",
          available: true,
          priority: 1,
        },
      ],

      amenities: [
        {
          key: "kids_club",
          label: "Kidsclub",
          category: "family",
          source: "feed",
        },
        {
          key: "waterpark",
          label: "Waterpark",
          category: "pool",
          source: "feed",
        },
        {
          key: "children_pool",
          label: "Kinderbad",
          category: "family",
          source: "feed",
        },
        {
          key: "family_rooms",
          label: "Familiekamers",
          category: "room",
          source: "feed",
        },
        {
          key: "spa",
          label: "Wellness",
          category: "wellness",
          source: "feed",
        },
        {
          key: "restaurant",
          label: "Restaurant",
          category: "food",
          source: "feed",
        },
        {
          key: "playground",
          label: "Speelruimte",
          category: "family",
          source: "feed",
        },
      ],

      rooms: [
        {
          id: "lido-family-room",
          name: "Family Room",
          description:
            "Ruime familiekamer voor gezinnen die comfort en directe toegang tot resortfaciliteiten zoeken.",
          maxGuests: 4,
          bedrooms: 1,
          bathrooms: 1,
          hasSeparateBedroom: false,
          hasTerrace: true,
          provider: "booking",
        },
        {
          id: "lido-family-suite",
          name: "Family Suite",
          description:
            "Grotere suite met meer leefruimte, ideaal voor gezinnen die langer verblijven.",
          maxGuests: 5,
          bedrooms: 2,
          bathrooms: 1,
          hasSeparateBedroom: true,
          hasTerrace: true,
          provider: "booking",
        },
      ],

      rawAmenities: [
        "Kidsclub",
        "Waterpark",
        "Kinderbad",
        "Familiekamers",
        "Wellness",
        "Restaurant",
        "Speelruimte",
      ],
      rawRoomTypes: ["Family Room", "Family Suite"],
    },

    editorial: {
      label: "Family Resort Selectie",
      title: "Falkensteiner Family Resort Lido",
      subtitle:
        "Een uitgesproken familieresort in Zuid-Tirol met waterplezier, kidsfaciliteiten en alpine comfort.",
      summary:
        "Falkensteiner Family Resort Lido is ontworpen voor gezinnen die veel faciliteiten, comfort en een actieve bergomgeving willen combineren.",
      whySelected:
        "We selecteren dit resort vanwege de sterke focus op families, het waterpark, de kidsfaciliteiten en de combinatie van comfort met Zuid-Tiroolse natuur.",
      bestFor: [
        "Gezinnen die veel faciliteiten willen",
        "Families met peuters en schoolgaande kinderen",
        "Actieve gezinnen",
      ],
      highlights: [
        "Waterpark en kinderbad",
        "Kidsclub en speelruimte",
        "Ruime familiekamers",
        "Bergomgeving met activiteiten",
      ],
      littleAtlasNotes: [
        "Sterke keuze voor gezinnen die veel faciliteiten op één plek willen.",
        "Vooral interessant voor peuters en schoolgaande kinderen.",
        "Minder geschikt als je een rustige, kleinschalige boutique sfeer zoekt.",
      ],
      nearby: [
        "Pustertal",
        "Kronplatz",
        "Zuid-Tiroolse dorpen",
        "Bergwandelroutes",
      ],
      faqs: [
        {
          question:
            "Is Falkensteiner Family Resort Lido geschikt voor peuters?",
          answer:
            "Ja, vooral door het kinderbad, de kidsclub en de duidelijke familiefocus.",
        },
        {
          question: "Is dit een goede keuze voor een actieve familievakantie?",
          answer:
            "Ja, de ligging in Zuid-Tirol maakt het geschikt voor gezinnen die natuur, waterpret en comfort willen combineren.",
        },
      ],
      seoTitle:
        "Falkensteiner Family Resort Lido met kinderen | Little Atlas",
      seoDescription:
        "Bekijk Falkensteiner Family Resort Lido als premium familieresort in Zuid-Tirol.",
      aiGenerated: false,
      reviewedByEditor: true,
    },

    familyAttributes: {
      babyFriendly: true,
      toddlerFriendly: true,
      kidsFriendly: true,
      teenFriendly: true,

      babyCots: true,
      babysitting: true,
      kidsClub: true,
      childrenPool: true,
      waterPark: true,
      playground: true,
      strollerFriendly: true,

      familyRooms: true,
      connectingRooms: null,
      kitchenOrKitchenette: null,
      laundryFacilities: null,

      shortTransfer: false,
      walkableArea: false,
      calmSetting: false,

      source: "hybrid",
      confidence: 88,
    },

    familyScores: {
      babies: {
        score: 82,
        label: "high",
        reasons: [
          "Babybedjes beschikbaar",
          "Familiekamers",
          "Veel resortfaciliteiten",
        ],
        source: "hybrid",
        confidence: 82,
      },
      toddlers: {
        score: 94,
        label: "excellent",
        reasons: [
          "Kinderbad",
          "Waterpark",
          "Kidsclub",
          "Speelruimte",
        ],
        source: "hybrid",
        confidence: 90,
      },
      kids: {
        score: 96,
        label: "excellent",
        reasons: [
          "Waterpark",
          "Kidsclub",
          "Bergactiviteiten",
          "Sterke familiefocus",
        ],
        source: "hybrid",
        confidence: 92,
      },
      teens: {
        score: 86,
        label: "high",
        reasons: [
          "Sportieve omgeving",
          "Bergactiviteiten",
          "Veel faciliteiten",
        ],
        source: "hybrid",
        confidence: 82,
      },
    },

    collectionMatches: [],
  },
];

export function getStayBySlug(slug: string): Stay | undefined {
  return stays.find((stay) => stay.slug === slug);
}