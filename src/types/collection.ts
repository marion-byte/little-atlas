// src/types/collection.ts

import type {
    StayAgeGroup,
    StayAmenityCategory,
    StayPropertyType,
    StayProviderKey,
    StayReviewLabel,
  } from "@/types/stay";
  
  export type CollectionStatus = "draft" | "published" | "archived";
  
  export type CollectionType =
    | "manual"
    | "dynamic"
    | "hybrid"
    | "editorial"
    | "seo";
  
  export type CollectionIntent =
    | "destination"
    | "family_age"
    | "amenity"
    | "luxury"
    | "budget"
    | "property_type"
    | "theme"
    | "seasonal"
    | "comparison"
    | "inspiration";
  
  export type CollectionSortOption =
    | "editorial"
    | "match_score"
    | "review_score"
    | "review_count"
    | "price_low_to_high"
    | "price_high_to_low"
    | "stars_high_to_low"
    | "family_score"
    | "newest";
  
  export type CollectionRuleOperator =
    | "equals"
    | "not_equals"
    | "includes"
    | "not_includes"
    | "greater_than"
    | "greater_than_or_equal"
    | "less_than"
    | "less_than_or_equal"
    | "between"
    | "exists";
  
  export type CollectionRuleField =
    | "destinationSlug"
    | "country"
    | "region"
    | "propertyType"
    | "stars"
    | "reviewScore"
    | "reviewCount"
    | "reviewProvider"
    | "reviewLabel"
    | "priceFrom"
    | "amenities"
    | "amenityCategory"
    | "babyFriendly"
    | "toddlerFriendly"
    | "kidsFriendly"
    | "teenFriendly"
    | "babyScore"
    | "toddlerScore"
    | "kidsScore"
    | "teenScore"
    | "kidsClub"
    | "childrenPool"
    | "waterPark"
    | "babysitting"
    | "familyRooms"
    | "kitchenOrKitchenette"
    | "walkableToBeach"
    | "walkableArea"
    | "carRecommended";
  
  export type CollectionRuleValue =
    | string
    | number
    | boolean
    | null
    | string[]
    | number[]
    | [number, number];
  
  export interface Collection {
    id: string;
    slug: string;
    status: CollectionStatus;
  
    type: CollectionType;
    intent: CollectionIntent;
  
    title: string;
    subtitle: string;
    description: string;
  
    destination?: CollectionDestination;
    seo: CollectionSEO;
  
    rules: CollectionRuleGroup;
    display: CollectionDisplay;
  
    manualStayIds?: string[];
  
    relatedCollectionSlugs: string[];
  
    ai: CollectionAI;
    analytics?: CollectionAnalytics;
  
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
  }
  
  export interface CollectionDestination {
    name: string;
    slug: string;
    region?: string;
    country?: string;
    countryCode?: string;
  }
  
  export interface CollectionSEO {
    title: string;
    description: string;
    h1: string;
    intro: string;
  
    canonicalPath: string;
  
    keywords?: string[];
    noIndex?: boolean;
  }
  
  export interface CollectionRuleGroup {
    mode: "all" | "any";
    rules: CollectionRule[];
  
    minimumMatchScore?: number;
    limit?: number;
  
    sortBy: CollectionSortOption;
  }
  
  export interface CollectionRule {
    field: CollectionRuleField;
    operator: CollectionRuleOperator;
    value: CollectionRuleValue;
  
    weight?: number;
    required?: boolean;
  
    label?: string;
    source: "feed" | "family_intelligence" | "editorial" | "manual" | "ai";
  }
  
  export interface CollectionDisplay {
    heroImage?: string;
    cardImage?: string;
  
    badge?: string;
    eyebrow?: string;
  
    showFilters: boolean;
    showMap: boolean;
    showPrices: boolean;
    showReviewScores: boolean;
    showFamilyScores: boolean;
  
    primaryAgeGroup?: StayAgeGroup;
  
    highlightedAmenities?: string[];
    highlightedAmenityCategories?: StayAmenityCategory[];
  
    preferredPropertyTypes?: StayPropertyType[];
  
    providerPreference?: StayProviderKey[];
  }
  
  export interface CollectionAI {
    aiGenerated: boolean;
    aiAssistedRules: boolean;
  
    prompt?: string;
    generationSource?: "rules" | "stays" | "destination" | "hybrid";
  
    confidence?: number;
    reviewedByEditor: boolean;
    editorNotes?: string;
  
    lastGeneratedAt?: string;
  }
  
  export interface CollectionAnalytics {
    impressions?: number;
    clicks?: number;
    outboundClicks?: number;
    conversionRate?: number;
    averagePosition?: number;
    revenueEstimate?: number;
  }
  
  export interface CollectionResult {
    collectionSlug: string;
    stayId: string;
    staySlug: string;
  
    matchScore: number;
    matchedRules: CollectionRule[];
    missingRules?: CollectionRule[];
  
    primaryReasons: string[];
  
    sortPosition: number;
  }
  
  export interface CollectionFilterPreset {
    label: string;
    field: CollectionRuleField;
    value: CollectionRuleValue;
  }
  
  export interface CollectionTemplate {
    id: string;
    name: string;
  
    intent: CollectionIntent;
    defaultRules: CollectionRuleGroup;
  
    titlePattern: string;
    subtitlePattern: string;
    seoTitlePattern: string;
    seoDescriptionPattern: string;
  
    examples: string[];
  }
  
  export interface DynamicCollectionSeed {
    destinationSlug?: string;
    destinationName?: string;
  
    country?: string;
    region?: string;
  
    ageGroup?: StayAgeGroup;
    propertyType?: StayPropertyType;
  
    amenityKey?: string;
    amenityCategory?: StayAmenityCategory;
  
    minStars?: number;
    minReviewScore?: number;
    reviewProvider?: StayProviderKey;
    reviewLabel?: StayReviewLabel;
  }