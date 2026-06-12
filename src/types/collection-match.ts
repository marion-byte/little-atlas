// src/types/collection-match.ts

import type {
    CollectionRule,
    CollectionRuleField,
    CollectionRuleValue,
  } from "@/types/collection";
  
  import type { StayAgeGroup } from "@/types/stay";
  
  export type CollectionMatchStatus =
    | "active"
    | "inactive"
    | "needs_review"
    | "excluded";
  
  export type CollectionMatchSource =
    | "rules"
    | "ai"
    | "editorial"
    | "manual"
    | "hybrid";
  
  export type CollectionMatchReasonType =
    | "family_score"
    | "family_attribute"
    | "feed_attribute"
    | "location"
    | "review"
    | "price"
    | "editorial"
    | "provider"
    | "other";
  
  export interface CollectionMatch {
    id: string;
  
    stayId: string;
    staySlug: string;
    stayName: string;
  
    collectionId: string;
    collectionSlug: string;
    collectionTitle: string;
  
    status: CollectionMatchStatus;
    source: CollectionMatchSource;
  
    matchScore: number;
    confidence: number;
  
    ranking: CollectionMatchRanking;
  
    matchedRules: MatchedCollectionRule[];
    failedRules: FailedCollectionRule[];
  
    reasons: CollectionMatchReason[];
  
    familyScoreSnapshot: CollectionFamilyScoreSnapshot;
  
    reviewSnapshot?: CollectionReviewSnapshot;
    priceSnapshot?: CollectionPriceSnapshot;
    providerSnapshot?: CollectionProviderSnapshot;
  
    generatedAt: string;
    updatedAt?: string;
  }
  
  export interface CollectionMatchRanking {
    sortPosition: number;
    previousSortPosition?: number;
  
    rankingScore: number;
  
    rankingSignals: {
      matchScore: number;
      familyScore?: number;
      reviewScore?: number;
      reviewCount?: number;
      priceScore?: number;
      affiliatePriority?: number;
      editorialBoost?: number;
    };
  }
  
  export interface MatchedCollectionRule {
    field: CollectionRuleField;
    operator: CollectionRule["operator"];
    expectedValue: CollectionRuleValue;
    actualValue: CollectionRuleValue;
  
    weight: number;
    scoreContribution: number;
  
    required: boolean;
    label?: string;
  }
  
  export interface FailedCollectionRule {
    field: CollectionRuleField;
    operator: CollectionRule["operator"];
    expectedValue: CollectionRuleValue;
    actualValue: CollectionRuleValue;
  
    required: boolean;
    label?: string;
  
    failureReason: string;
  }
  
  export interface CollectionMatchReason {
    type: CollectionMatchReasonType;
    label: string;
    description?: string;
  
    source: CollectionMatchSource;
    weight?: number;
  }
  
  export interface CollectionFamilyScoreSnapshot {
    primaryAgeGroup?: StayAgeGroup;
  
    babyScore?: number;
    toddlerScore?: number;
    kidsScore?: number;
    teenScore?: number;
  
    strongestAgeGroup?: StayAgeGroup;
    strongestScore?: number;
  
    familyComfortScore?: number;
  }
  
  export interface CollectionReviewSnapshot {
    reviewProvider: string;
    reviewScore: number | null;
    reviewCount: number | null;
    reviewLabel?: string;
  }
  
  export interface CollectionPriceSnapshot {
    priceFrom: number | null;
    currency: string;
    priceAvailable: boolean;
  }
  
  export interface CollectionProviderSnapshot {
    primaryProvider: string;
    affiliateUrl: string;
    affiliatePriority?: number;
    available?: boolean | null;
  }
  
  export interface CollectionMatchBatch {
    id: string;
  
    collectionSlug: string;
  
    totalStaysEvaluated: number;
    totalMatches: number;
    totalActiveMatches: number;
    totalNeedsReview: number;
  
    generatedAt: string;
    durationMs?: number;
  
    engineVersion: string;
  }