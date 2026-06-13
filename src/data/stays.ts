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
  {
    id: "stay_zafiro_can_picafort",
    slug: "zafiro-can-picafort",
    status: "published",
  
    feed: {
      externalId: "zafiro-can-picafort-demo",
      provider: "booking",
  
      name: "Zafiro Can Picafort",
      slug: "zafiro-can-picafort",
  
      destination: "Mallorca",
      destinationSlug: "mallorca",
      region: "Can Picafort",
      country: "Spanje",
      countryCode: "ES",
  
      propertyType: "resort",
      stars: 4,
  
      location: {
        latitude: 39.765,
        longitude: 3.154,
        city: "Can Picafort",
        region: "Mallorca",
        country: "Spanje",
        beachDistanceMeters: 700,
        airportDistanceKm: 63,
        centerDistanceKm: 1,
        carRecommended: false,
        walkableToRestaurants: true,
        walkableToBeach: true,
      },
  
      images: [
        {
          url: "/mallorca.jpg",
          alt: "Zafiro Can Picafort",
          role: "hero",
          provider: "manual",
          position: 1,
        },
        {
          url: "/mallorca.jpg",
          alt: "Familieresort bij Can Picafort",
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
          score: 8.6,
          scale: 10,
          normalizedScore: 8.6,
          count: 980,
          label: "Excellent",
          url: "https://www.booking.com",
        },
      ],
  
      primaryReview: {
        provider: "booking",
        score: 8.6,
        scale: 10,
        normalizedScore: 8.6,
        count: 980,
        label: "Excellent",
        url: "https://www.booking.com",
      },
  
      reviewScore: 8.6,
      reviewCount: 980,
      reviewProvider: "booking",
      reviewLabel: "Excellent",
  
      priceFrom: 210,
      currency: "EUR",
      affiliateUrl: "https://www.booking.com",
  
      providers: [
        {
          provider: "booking",
          externalId: "zafiro-can-picafort-demo",
          affiliateUrl: "https://www.booking.com",
          deepLink: "https://www.booking.com",
          priceFrom: 210,
          currency: "EUR",
          available: true,
          priority: 1,
        },
      ],
  
      amenities: [
        { key: "kids_club", label: "Kidsclub", category: "family", source: "feed" },
        { key: "children_pool", label: "Kinderbad", category: "family", source: "feed" },
        { key: "multiple_pools", label: "Meerdere zwembaden", category: "pool", source: "feed" },
        { key: "family_rooms", label: "Familiekamers", category: "room", source: "feed" },
        { key: "restaurant", label: "Restaurant", category: "food", source: "feed" },
        { key: "near_beach", label: "Dicht bij strand", category: "beach", source: "feed" },
      ],
  
      rooms: [
        {
          id: "zafiro-can-picafort-family-room",
          name: "Family Room",
          description: "Praktische familiekamer voor gezinnen die comfort en resortfaciliteiten zoeken.",
          maxGuests: 4,
          bedrooms: 1,
          bathrooms: 1,
          hasSeparateBedroom: false,
          hasTerrace: true,
          provider: "booking",
        },
      ],
  
      rawAmenities: ["Kidsclub", "Kinderbad", "Meerdere zwembaden", "Familiekamers", "Restaurant", "Dicht bij strand"],
      rawRoomTypes: ["Family Room"],
    },
  
    editorial: {
      label: "Family Resort Selectie",
      title: "Zafiro Can Picafort",
      subtitle: "Een toegankelijk familieresort bij Can Picafort met veel waterplezier en praktische familiekamers.",
      summary: "Zafiro Can Picafort is een sterke keuze voor gezinnen die Mallorca, zwembaden en kindvriendelijke faciliteiten willen combineren.",
      whySelected: "We selecteren dit verblijf vanwege de combinatie van kinderfaciliteiten, zwembaden en ligging dicht bij strand en restaurants.",
      bestFor: ["Gezinnen met peuters", "Families met schoolgaande kinderen", "Ouders die gemak zoeken"],
      highlights: ["Kinderbad", "Kidsclub", "Dicht bij strand", "Familiekamers"],
      littleAtlasNotes: [
        "Goede keuze voor gezinnen die veel faciliteiten willen zonder extreem luxe prijsniveau.",
        "Past goed in peuter- en kidscollecties.",
        "Minder premium dan Zafiro Palace, maar praktisch sterk.",
      ],
      nearby: ["Can Picafort", "Playa de Muro", "Alcúdia", "S’Albufera"],
      faqs: [
        {
          question: "Is Zafiro Can Picafort geschikt voor peuters?",
          answer: "Ja, vooral door kinderbad, kidsclub en overzichtelijke resortfaciliteiten.",
        },
      ],
      seoTitle: "Zafiro Can Picafort met kinderen | Little Atlas",
      seoDescription: "Bekijk Zafiro Can Picafort als familieresort op Mallorca.",
      aiGenerated: false,
      reviewedByEditor: true,
    },
  
    familyAttributes: {
      babyFriendly: true,
      toddlerFriendly: true,
      kidsFriendly: true,
      teenFriendly: false,
  
      babyCots: true,
      babysitting: null,
      kidsClub: true,
      childrenPool: true,
      waterPark: false,
      playground: true,
      strollerFriendly: true,
  
      familyRooms: true,
      connectingRooms: null,
      kitchenOrKitchenette: null,
      laundryFacilities: null,
  
      shortTransfer: false,
      walkableArea: true,
      calmSetting: false,
  
      source: "hybrid",
      confidence: 82,
    },
  
    familyScores: {
      babies: {
        score: 80,
        label: "high",
        reasons: ["Babybedjes", "Familiekamers", "Dicht bij voorzieningen"],
        source: "hybrid",
        confidence: 78,
      },
      toddlers: {
        score: 90,
        label: "excellent",
        reasons: ["Kinderbad", "Kidsclub", "Korte afstanden"],
        source: "hybrid",
        confidence: 86,
      },
      kids: {
        score: 88,
        label: "excellent",
        reasons: ["Zwembaden", "Kidsclub", "Strand dichtbij"],
        source: "hybrid",
        confidence: 84,
      },
      teens: {
        score: 68,
        label: "medium",
        reasons: ["Strand en plaats dichtbij", "Minder uitgesproken tienerfaciliteiten"],
        source: "hybrid",
        confidence: 68,
      },
    },
  
    collectionMatches: [],
  },
  
  {
    id: "stay_ikos_porto_petro",
    slug: "ikos-porto-petro",
    status: "published",
  
    feed: {
      externalId: "ikos-porto-petro-demo",
      provider: "booking",
  
      name: "Ikos Porto Petro",
      slug: "ikos-porto-petro",
  
      destination: "Mallorca",
      destinationSlug: "mallorca",
      region: "Porto Petro",
      country: "Spanje",
      countryCode: "ES",
  
      propertyType: "all_inclusive_resort",
      stars: 5,
  
      location: {
        latitude: 39.36,
        longitude: 3.21,
        city: "Porto Petro",
        region: "Mallorca",
        country: "Spanje",
        beachDistanceMeters: 100,
        airportDistanceKm: 56,
        centerDistanceKm: 1,
        carRecommended: false,
        walkableToRestaurants: true,
        walkableToBeach: true,
      },
  
      images: [
        {
          url: "/mallorca.jpg",
          alt: "Ikos Porto Petro",
          role: "hero",
          provider: "manual",
          position: 1,
        },
        {
          url: "/mallorca.jpg",
          alt: "Luxe familieresort bij Porto Petro",
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
          score: 9.3,
          scale: 10,
          normalizedScore: 9.3,
          count: 420,
          label: "Excellent",
          url: "https://www.booking.com",
        },
      ],
  
      primaryReview: {
        provider: "booking",
        score: 9.3,
        scale: 10,
        normalizedScore: 9.3,
        count: 420,
        label: "Excellent",
        url: "https://www.booking.com",
      },
  
      reviewScore: 9.3,
      reviewCount: 420,
      reviewProvider: "booking",
      reviewLabel: "Excellent",
  
      priceFrom: 640,
      currency: "EUR",
      affiliateUrl: "https://www.booking.com",
  
      providers: [
        {
          provider: "booking",
          externalId: "ikos-porto-petro-demo",
          affiliateUrl: "https://www.booking.com",
          deepLink: "https://www.booking.com",
          priceFrom: 640,
          currency: "EUR",
          available: true,
          priority: 1,
        },
      ],
  
      amenities: [
        { key: "kids_club", label: "Kidsclub", category: "family", source: "feed" },
        { key: "children_pool", label: "Kinderbad", category: "family", source: "feed" },
        { key: "all_inclusive", label: "All Inclusive", category: "food", source: "feed" },
        { key: "spa", label: "Spa", category: "wellness", source: "feed" },
        { key: "restaurants", label: "Restaurants", category: "food", source: "feed" },
        { key: "near_beach", label: "Dicht bij strand", category: "beach", source: "feed" },
        { key: "fitness", label: "Fitness", category: "sports", source: "feed" },
      ],
  
      rooms: [
        {
          id: "ikos-porto-petro-family-suite",
          name: "Family Suite",
          description: "Ruime suite voor gezinnen die luxe, service en gemak willen combineren.",
          maxGuests: 4,
          bedrooms: 1,
          bathrooms: 1,
          hasSeparateBedroom: true,
          hasTerrace: true,
          provider: "booking",
        },
      ],
  
      rawAmenities: ["Kidsclub", "Kinderbad", "All Inclusive", "Spa", "Restaurants", "Dicht bij strand", "Fitness"],
      rawRoomTypes: ["Family Suite"],
    },
  
    editorial: {
      label: "Luxury Family Selectie",
      title: "Ikos Porto Petro",
      subtitle: "Een premium all-inclusive resort aan de zuidoostkust van Mallorca.",
      summary: "Ikos Porto Petro combineert luxe service, all-inclusive gemak en een rustige kustligging voor gezinnen die een zorgeloze premium vakantie zoeken.",
      whySelected: "We selecteren dit verblijf vanwege de sterke combinatie van luxe, family service, kidsfaciliteiten en hoge reviewscore.",
      bestFor: ["Luxe gezinnen", "Families met jonge kinderen", "Ouders die all-inclusive gemak zoeken"],
      highlights: ["Premium all-inclusive", "Kidsclub", "Dicht bij zee", "Restaurants op hoog niveau"],
      littleAtlasNotes: [
        "Sterke keuze voor families die luxe en gemak willen combineren.",
        "Past perfect in premium all-inclusive collecties.",
        "Hogere prijsklasse, maar sterke affiliatewaarde.",
      ],
      nearby: ["Porto Petro", "Cala Mondragó", "Santanyí", "Cala d’Or"],
      faqs: [
        {
          question: "Is Ikos Porto Petro geschikt voor gezinnen?",
          answer: "Ja, vooral voor gezinnen die luxe, service en all-inclusive gemak zoeken.",
        },
      ],
      seoTitle: "Ikos Porto Petro met kinderen | Little Atlas",
      seoDescription: "Bekijk Ikos Porto Petro als luxe familieverblijf op Mallorca.",
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
      confidence: 88,
    },
  
    familyScores: {
      babies: {
        score: 90,
        label: "excellent",
        reasons: ["Babyvoorzieningen", "Rustige resortopzet", "All-inclusive gemak"],
        source: "hybrid",
        confidence: 86,
      },
      toddlers: {
        score: 89,
        label: "excellent",
        reasons: ["Kinderbad", "Kidsclub", "Korte resortafstanden"],
        source: "hybrid",
        confidence: 86,
      },
      kids: {
        score: 86,
        label: "high",
        reasons: ["Kidsclub", "Zwembaden", "Strand dichtbij"],
        source: "hybrid",
        confidence: 84,
      },
      teens: {
        score: 78,
        label: "medium",
        reasons: ["Fitness", "Wateractiviteiten", "Rustige luxe setting"],
        source: "hybrid",
        confidence: 76,
      },
    },
  
    collectionMatches: [],
  },
  
  {
    id: "stay_martinhal_sagres",
    slug: "martinhal-sagres",
    status: "published",
  
    feed: {
      externalId: "martinhal-sagres-demo",
      provider: "booking",
  
      name: "Martinhal Sagres",
      slug: "martinhal-sagres",
  
      destination: "Algarve",
      destinationSlug: "algarve",
      region: "Sagres",
      country: "Portugal",
      countryCode: "PT",
  
      propertyType: "resort",
      stars: 5,
  
      location: {
        latitude: 37.009,
        longitude: -8.926,
        city: "Sagres",
        region: "Algarve",
        country: "Portugal",
        beachDistanceMeters: 200,
        airportDistanceKm: 116,
        centerDistanceKm: 2,
        carRecommended: true,
        walkableToRestaurants: false,
        walkableToBeach: true,
      },
  
      images: [
        {
          url: "/mallorca.jpg",
          alt: "Martinhal Sagres",
          role: "hero",
          provider: "manual",
          position: 1,
        },
        {
          url: "/mallorca.jpg",
          alt: "Familieresort aan de Algarve",
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
          score: 9.0,
          scale: 10,
          normalizedScore: 9.0,
          count: 720,
          label: "Excellent",
          url: "https://www.booking.com",
        },
      ],
  
      primaryReview: {
        provider: "booking",
        score: 9.0,
        scale: 10,
        normalizedScore: 9.0,
        count: 720,
        label: "Excellent",
        url: "https://www.booking.com",
      },
  
      reviewScore: 9.0,
      reviewCount: 720,
      reviewProvider: "booking",
      reviewLabel: "Excellent",
  
      priceFrom: 380,
      currency: "EUR",
      affiliateUrl: "https://www.booking.com",
  
      providers: [
        {
          provider: "booking",
          externalId: "martinhal-sagres-demo",
          affiliateUrl: "https://www.booking.com",
          deepLink: "https://www.booking.com",
          priceFrom: 380,
          currency: "EUR",
          available: true,
          priority: 1,
        },
      ],
  
      amenities: [
        { key: "kids_club", label: "Kidsclub", category: "family", source: "feed" },
        { key: "babysitting", label: "Babysitting", category: "family", source: "feed" },
        { key: "children_pool", label: "Kinderbad", category: "family", source: "feed" },
        { key: "family_rooms", label: "Familiekamers", category: "room", source: "feed" },
        { key: "near_beach", label: "Dicht bij strand", category: "beach", source: "feed" },
        { key: "restaurant", label: "Restaurant", category: "food", source: "feed" },
        { key: "sports", label: "Sportfaciliteiten", category: "sports", source: "feed" },
      ],
  
      rooms: [
        {
          id: "martinhal-family-villa",
          name: "Family Villa",
          description: "Ruime villa voor gezinnen die privacy, comfort en resortfaciliteiten willen combineren.",
          maxGuests: 5,
          bedrooms: 2,
          bathrooms: 2,
          hasSeparateBedroom: true,
          hasTerrace: true,
          provider: "booking",
        },
      ],
  
      rawAmenities: ["Kidsclub", "Babysitting", "Kinderbad", "Familiekamers", "Dicht bij strand", "Restaurant", "Sportfaciliteiten"],
      rawRoomTypes: ["Family Villa"],
    },
  
    editorial: {
      label: "Family Icon",
      title: "Martinhal Sagres",
      subtitle: "Een iconisch familieresort aan de westelijke Algarve.",
      summary: "Martinhal Sagres is een benchmark voor luxe familievakanties, met veel aandacht voor baby’s, jonge kinderen en ouders die comfort zoeken.",
      whySelected: "We selecteren dit verblijf omdat het vrijwel alle elementen van een sterke familievakantie combineert: ruimte, service, kindvriendelijkheid en ligging aan zee.",
      bestFor: ["Eerste vakantie met baby", "Gezinnen met jonge kinderen", "Luxe familievakanties"],
      highlights: ["Kidsclub", "Babysitting", "Villa’s", "Strand dichtbij"],
      littleAtlasNotes: [
        "Een van de beste benchmarks voor Family Intelligence.",
        "Sterk voor baby’s en peuters.",
        "Door de ligging is een auto handig.",
      ],
      nearby: ["Sagres", "Stranden van de westelijke Algarve", "Lagos", "Natuurkust"],
      faqs: [
        {
          question: "Is Martinhal Sagres geschikt voor baby’s?",
          answer: "Ja, dit is juist één van de sterkste voorbeelden van een babyvriendelijk premium familieresort.",
        },
      ],
      seoTitle: "Martinhal Sagres met kinderen | Little Atlas",
      seoDescription: "Bekijk Martinhal Sagres als luxe familieresort aan de Algarve.",
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
      waterPark: false,
      playground: true,
      strollerFriendly: true,
  
      familyRooms: true,
      connectingRooms: null,
      kitchenOrKitchenette: true,
      laundryFacilities: true,
  
      shortTransfer: false,
      walkableArea: false,
      calmSetting: true,
  
      source: "hybrid",
      confidence: 92,
    },
  
    familyScores: {
      babies: {
        score: 95,
        label: "excellent",
        reasons: ["Babyvoorzieningen", "Babysitting", "Villa’s", "Rustige opzet"],
        source: "hybrid",
        confidence: 92,
      },
      toddlers: {
        score: 94,
        label: "excellent",
        reasons: ["Kidsclub", "Kinderbad", "Speelruimte"],
        source: "hybrid",
        confidence: 92,
      },
      kids: {
        score: 90,
        label: "excellent",
        reasons: ["Sport", "Strand", "Kidsfaciliteiten"],
        source: "hybrid",
        confidence: 88,
      },
      teens: {
        score: 82,
        label: "high",
        reasons: ["Sportieve omgeving", "Strand", "Ruimte"],
        source: "hybrid",
        confidence: 80,
      },
    },
  
    collectionMatches: [],
  },

];

export function getStayBySlug(slug: string): Stay | undefined {
  return stays.find((stay) => stay.slug === slug);
}