// src/types/stay.ts

export type StayProviderKey =
  | "booking"
  | "expedia"
  | "awin"
  | "daisycon"
  | "tradedoubler"
  | "hotelbeds"
  | "direct"
  | "manual"
  | "other";

export type StayPropertyType =
  | "hotel"
  | "resort"
  | "villa"
  | "apartment"
  | "holiday_park"
  | "glamping"
  | "boutique_hotel"
  | "all_inclusive_resort"
  | "other";

export type StayCurrency = "EUR" | "GBP" | "USD" | string;

export type StayAgeGroup = "babies" | "toddlers" | "kids" | "teens";

export type StayReviewLabel =
  | "Exceptional"
  | "Excellent"
  | "Very Good"
  | "Good"
  | "Pleasant"
  | "Unrated";

export type StayImageRole =
  | "hero"
  | "gallery"
  | "room"
  | "pool"
  | "restaurant"
  | "kids"
  | "location"
  | "other";

export type StayAmenityCategory =
  | "family"
  | "pool"
  | "beach"
  | "food"
  | "wellness"
  | "room"
  | "location"
  | "accessibility"
  | "sports"
  | "other";

export interface Stay {
  id: string;
  slug: string;

  feed: StayFeed;
  editorial: StayEditorial;

  familyAttributes: FamilyAttributes;
  familyScores: FamilyScores;

  collectionMatches: CollectionMatch[];

  createdAt?: string;
  updatedAt?: string;
  status: "draft" | "published" | "archived";
}

export interface StayFeed {
  externalId: string;
  provider: StayProviderKey;

  name: string;
  slug: string;

  destination: string;
  destinationSlug: string;
  region: string;
  country: string;
  countryCode?: string;

  propertyType: StayPropertyType;
  stars: number | null;

  location: StayLocation;

  images: StayImage[];
  heroImage: string;
  gallery: string[];

  reviews: StayReview[];
  primaryReview?: StayReview;

  reviewScore: number | null;
  reviewCount: number | null;
  reviewProvider: StayProviderKey | null;
  reviewLabel: StayReviewLabel;

  priceFrom: number | null;
  currency: StayCurrency;
  affiliateUrl: string;

  providers: StayProvider[];

  amenities: StayAmenity[];
  rooms: StayRoom[];

  rawAmenities?: string[];
  rawRoomTypes?: string[];
  rawDataUpdatedAt?: string;
}

export interface StayProvider {
  provider: StayProviderKey;
  externalId: string;
  affiliateUrl: string;
  deepLink?: string;

  priceFrom?: number | null;
  currency?: StayCurrency;

  available?: boolean | null;
  lastCheckedAt?: string;

  priority: number;
}

export interface StayReview {
  provider: StayProviderKey;
  score: number | null;
  scale: 5 | 10 | 100;
  normalizedScore: number | null;
  count: number | null;
  label?: StayReviewLabel;
  url?: string;
  lastUpdatedAt?: string;
}

export interface StayImage {
  url: string;
  alt: string;
  role: StayImageRole;
  provider?: StayProviderKey;
  externalId?: string;
  position: number;
}

export interface StayAmenity {
  key: string;
  label: string;
  category: StayAmenityCategory;
  source: "feed" | "ai" | "editorial" | "manual";
  confidence?: number;
}

export interface StayRoom {
  id: string;
  name: string;
  description?: string;

  maxGuests?: number | null;
  adults?: number | null;
  children?: number | null;
  bedrooms?: number | null;
  bathrooms?: number | null;
  sizeM2?: number | null;

  hasKitchen?: boolean | null;
  hasSeparateBedroom?: boolean | null;
  hasTerrace?: boolean | null;
  hasPrivatePool?: boolean | null;

  image?: string;
  provider?: StayProviderKey;
  externalId?: string;
}

export interface StayLocation {
  latitude: number | null;
  longitude: number | null;

  address?: string;
  city?: string;
  region: string;
  country: string;

  beachDistanceMeters?: number | null;
  airportDistanceKm?: number | null;
  centerDistanceKm?: number | null;

  carRecommended?: boolean | null;
  walkableToRestaurants?: boolean | null;
  walkableToBeach?: boolean | null;
}

export interface StayEditorial {
  label: string;
  title: string;
  subtitle: string;
  summary: string;

  whySelected: string;
  bestFor: string[];

  highlights: string[];
  littleAtlasNotes: string[];

  nearby: string[];

  faqs: {
    question: string;
    answer: string;
  }[];

  seoTitle: string;
  seoDescription: string;

  aiGenerated?: boolean;
  reviewedByEditor?: boolean;
  editorialUpdatedAt?: string;
}

export interface FamilyAttributes {
  babyFriendly: boolean;
  toddlerFriendly: boolean;
  kidsFriendly: boolean;
  teenFriendly: boolean;

  babyCots?: boolean | null;
  babysitting?: boolean | null;
  kidsClub?: boolean | null;
  childrenPool?: boolean | null;
  waterPark?: boolean | null;
  playground?: boolean | null;
  strollerFriendly?: boolean | null;

  familyRooms?: boolean | null;
  connectingRooms?: boolean | null;
  kitchenOrKitchenette?: boolean | null;
  laundryFacilities?: boolean | null;

  shortTransfer?: boolean | null;
  walkableArea?: boolean | null;
  calmSetting?: boolean | null;

  source: "feed" | "ai" | "editorial" | "manual" | "hybrid";
  confidence: number;
}

export interface FamilyScores {
  babies: FamilyScore;
  toddlers: FamilyScore;
  kids: FamilyScore;
  teens: FamilyScore;
}

export interface FamilyScore {
  score: number;
  label: "low" | "medium" | "high" | "excellent";
  reasons: string[];
  source: "rules" | "ai" | "editorial" | "hybrid";
  confidence: number;
}

export interface CollectionMatch {
  collectionSlug: string;
  collectionTitle: string;

  matchScore: number;
  reasons: string[];

  ruleBased: boolean;
  aiAssisted: boolean;
}