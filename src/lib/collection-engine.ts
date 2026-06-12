// src/lib/collection-engine.ts

import type {
    Collection,
    CollectionRule,
    CollectionRuleValue,
  } from "@/types/collection";
  import type { CollectionMatch } from "@/types/collection-match";
  import type { Stay } from "@/types/stay";
  
  type RuleEvaluation = {
    matched: boolean;
    field: CollectionRule["field"];
    operator: CollectionRule["operator"];
    expectedValue: CollectionRuleValue;
    actualValue: CollectionRuleValue;
    weight: number;
    scoreContribution: number;
    required: boolean;
    label?: string;
    failureReason?: string;
  };
  
  export function matchStaysToCollections(
    stays: Stay[],
    collections: Collection[]
  ): CollectionMatch[] {
    const matches: CollectionMatch[] = [];
  
    for (const collection of collections) {
      const collectionMatches = stays
        .map((stay) => matchStayToCollection(stay, collection))
        .filter((match): match is CollectionMatch => Boolean(match))
        .sort((a, b) => b.ranking.rankingScore - a.ranking.rankingScore)
        .slice(0, collection.rules.limit ?? 24)
        .map((match, index) => ({
          ...match,
          ranking: {
            ...match.ranking,
            sortPosition: index + 1,
          },
        }));
  
      matches.push(...collectionMatches);
    }
  
    return matches;
  }
  
  export function matchStayToCollection(
    stay: Stay,
    collection: Collection
  ): CollectionMatch | null {
    const evaluations = collection.rules.rules.map((rule) =>
      evaluateRule(stay, rule)
    );
  
    const failedRequiredRule = evaluations.some(
      (evaluation) => evaluation.required && !evaluation.matched
    );
  
    if (failedRequiredRule) {
      return null;
    }
  
    const matchScore = calculateMatchScore(evaluations);
  
    if (
      typeof collection.rules.minimumMatchScore === "number" &&
      matchScore < collection.rules.minimumMatchScore
    ) {
      return null;
    }
  
    const rankingScore = calculateRankingScore(stay, collection, matchScore);
  
    return createCollectionMatch({
      stay,
      collection,
      evaluations,
      matchScore,
      rankingScore,
    });
  }
  
  export function evaluateRule(
    stay: Stay,
    rule: CollectionRule
  ): RuleEvaluation {
    const actualValue = getStayValueByRuleField(stay, rule.field);
    const matched = compareRuleValue(actualValue, rule.operator, rule.value);
    const weight = rule.weight ?? 1;
  
    return {
      matched,
      field: rule.field,
      operator: rule.operator,
      expectedValue: rule.value,
      actualValue,
      weight,
      scoreContribution: matched ? weight : 0,
      required: rule.required ?? false,
      label: rule.label,
      failureReason: matched
        ? undefined
        : `Expected ${String(rule.field)} to ${rule.operator} ${String(
            rule.value
          )}`,
    };
  }
  
  export function calculateMatchScore(evaluations: RuleEvaluation[]): number {
    const totalWeight = evaluations.reduce(
      (total, evaluation) => total + evaluation.weight,
      0
    );
  
    if (totalWeight === 0) {
      return 0;
    }
  
    const matchedWeight = evaluations.reduce(
      (total, evaluation) => total + evaluation.scoreContribution,
      0
    );
  
    return Math.round((matchedWeight / totalWeight) * 100);
  }
  
  export function calculateRankingScore(
    stay: Stay,
    collection: Collection,
    matchScore: number
  ): number {
    const familyScore = getPrimaryFamilyScore(stay, collection);
    const reviewScore = normalizeReviewScore(stay.feed.reviewScore);
    const reviewCountScore = normalizeReviewCount(stay.feed.reviewCount);
    const affiliatePriority = normalizeAffiliatePriority(stay);
    const priceAvailability = stay.feed.priceFrom ? 100 : 0;
  
    return Math.round(
      matchScore * 0.4 +
        familyScore * 0.25 +
        reviewScore * 0.15 +
        reviewCountScore * 0.1 +
        affiliatePriority * 0.05 +
        priceAvailability * 0.05
    );
  }
  
  export function createCollectionMatch({
    stay,
    collection,
    evaluations,
    matchScore,
    rankingScore,
  }: {
    stay: Stay;
    collection: Collection;
    evaluations: RuleEvaluation[];
    matchScore: number;
    rankingScore: number;
  }): CollectionMatch {
    const matchedRules = evaluations.filter((evaluation) => evaluation.matched);
    const failedRules = evaluations.filter((evaluation) => !evaluation.matched);
  
    const primaryAgeGroup = collection.display.primaryAgeGroup;
    const strongestAgeGroup = getStrongestAgeGroup(stay);
  
    return {
      id: `${collection.slug}__${stay.slug}`,
  
      stayId: stay.id,
      staySlug: stay.slug,
      stayName: stay.feed.name,
  
      collectionId: collection.id,
      collectionSlug: collection.slug,
      collectionTitle: collection.title,
  
      status: "active",
      source: "rules",
  
      matchScore,
      confidence: calculateConfidence(stay, matchScore),
  
      ranking: {
        sortPosition: 0,
        rankingScore,
        rankingSignals: {
          matchScore,
          familyScore: getPrimaryFamilyScore(stay, collection),
          reviewScore: normalizeReviewScore(stay.feed.reviewScore),
          reviewCount: normalizeReviewCount(stay.feed.reviewCount),
          affiliatePriority: normalizeAffiliatePriority(stay),
          priceScore: stay.feed.priceFrom ? 100 : 0,
        },
      },
  
      matchedRules: matchedRules.map((evaluation) => ({
        field: evaluation.field,
        operator: evaluation.operator,
        expectedValue: evaluation.expectedValue,
        actualValue: evaluation.actualValue,
        weight: evaluation.weight,
        scoreContribution: evaluation.scoreContribution,
        required: evaluation.required,
        label: evaluation.label,
      })),
  
      failedRules: failedRules.map((evaluation) => ({
        field: evaluation.field,
        operator: evaluation.operator,
        expectedValue: evaluation.expectedValue,
        actualValue: evaluation.actualValue,
        required: evaluation.required,
        label: evaluation.label,
        failureReason: evaluation.failureReason ?? "Rule did not match",
      })),
  
      reasons: matchedRules.slice(0, 5).map((evaluation) => ({
        type: getReasonType(evaluation.field),
        label: evaluation.label ?? String(evaluation.field),
        source:
          evaluation.field.includes("Score") ||
          evaluation.field.includes("Friendly")
            ? "rules"
            : "rules",
        weight: evaluation.weight,
      })),
  
      familyScoreSnapshot: {
        primaryAgeGroup,
        babyScore: stay.familyScores.babies.score,
        toddlerScore: stay.familyScores.toddlers.score,
        kidsScore: stay.familyScores.kids.score,
        teenScore: stay.familyScores.teens.score,
        strongestAgeGroup,
        strongestScore: getFamilyScoreByAgeGroup(stay, strongestAgeGroup),
        familyComfortScore: calculateFamilyComfortScore(stay),
      },
  
      reviewSnapshot: {
        reviewProvider: stay.feed.reviewProvider ?? "booking",
        reviewScore: stay.feed.reviewScore,
        reviewCount: stay.feed.reviewCount,
        reviewLabel: stay.feed.reviewLabel,
      },
  
      priceSnapshot: {
        priceFrom: stay.feed.priceFrom,
        currency: stay.feed.currency,
        priceAvailable: Boolean(stay.feed.priceFrom),
      },
  
      providerSnapshot: {
        primaryProvider: stay.feed.provider,
        affiliateUrl: stay.feed.affiliateUrl,
        affiliatePriority: stay.feed.providers[0]?.priority,
        available: stay.feed.providers[0]?.available,
      },
  
      generatedAt: new Date().toISOString(),
    };
  }
  
  function getStayValueByRuleField(
    stay: Stay,
    field: CollectionRule["field"]
  ): CollectionRuleValue {
    switch (field) {
      case "destinationSlug":
        return stay.feed.destinationSlug;
      case "country":
        return stay.feed.country;
      case "region":
        return stay.feed.region;
      case "propertyType":
        return stay.feed.propertyType;
      case "stars":
        return stay.feed.stars;
      case "reviewScore":
        return stay.feed.reviewScore;
      case "reviewCount":
        return stay.feed.reviewCount;
      case "reviewProvider":
        return stay.feed.reviewProvider;
      case "reviewLabel":
        return stay.feed.reviewLabel;
      case "priceFrom":
        return stay.feed.priceFrom;
      case "amenities":
        return stay.feed.amenities.map((amenity) => amenity.key);
      case "amenityCategory":
        return stay.feed.amenities.map((amenity) => amenity.category);
      case "babyFriendly":
        return stay.familyAttributes.babyFriendly;
      case "toddlerFriendly":
        return stay.familyAttributes.toddlerFriendly;
      case "kidsFriendly":
        return stay.familyAttributes.kidsFriendly;
      case "teenFriendly":
        return stay.familyAttributes.teenFriendly;
      case "babyScore":
        return stay.familyScores.babies.score;
      case "toddlerScore":
        return stay.familyScores.toddlers.score;
      case "kidsScore":
        return stay.familyScores.kids.score;
      case "teenScore":
        return stay.familyScores.teens.score;
      case "kidsClub":
        return stay.familyAttributes.kidsClub ?? false;
      case "childrenPool":
        return stay.familyAttributes.childrenPool ?? false;
      case "waterPark":
        return stay.familyAttributes.waterPark ?? false;
      case "babysitting":
        return stay.familyAttributes.babysitting ?? false;
      case "familyRooms":
        return stay.familyAttributes.familyRooms ?? false;
      case "kitchenOrKitchenette":
        return stay.familyAttributes.kitchenOrKitchenette ?? false;
      case "walkableToBeach":
        return stay.feed.location.walkableToBeach ?? false;
      case "walkableArea":
        return stay.familyAttributes.walkableArea ?? false;
      case "carRecommended":
        return stay.feed.location.carRecommended ?? null;
      default:
        return null;
    }
  }
  
  function compareRuleValue(
    actualValue: CollectionRuleValue,
    operator: CollectionRule["operator"],
    expectedValue: CollectionRuleValue
  ): boolean {
    switch (operator) {
      case "equals":
        return actualValue === expectedValue;
  
      case "not_equals":
        return actualValue !== expectedValue;
  
      case "includes":
        if (Array.isArray(actualValue) && Array.isArray(expectedValue)) {
          return expectedValue.some((value) => actualValue.includes(value));
        }
  
        if (Array.isArray(actualValue)) {
          return actualValue.includes(expectedValue as never);
        }
  
        return false;
  
      case "not_includes":
        if (Array.isArray(actualValue) && Array.isArray(expectedValue)) {
          return expectedValue.every((value) => !actualValue.includes(value));
        }
  
        if (Array.isArray(actualValue)) {
          return !actualValue.includes(expectedValue as never);
        }
  
        return false;
  
      case "greater_than":
        return toNumber(actualValue) > toNumber(expectedValue);
  
      case "greater_than_or_equal":
        return toNumber(actualValue) >= toNumber(expectedValue);
  
      case "less_than":
        return toNumber(actualValue) < toNumber(expectedValue);
  
      case "less_than_or_equal":
        return toNumber(actualValue) <= toNumber(expectedValue);
  
      case "between":
        if (!Array.isArray(expectedValue) || expectedValue.length !== 2) {
          return false;
        }
  
        return (
          toNumber(actualValue) >= toNumber(expectedValue[0]) &&
          toNumber(actualValue) <= toNumber(expectedValue[1])
        );
  
      case "exists":
        return actualValue !== null && actualValue !== undefined;
  
      default:
        return false;
    }
  }
  
  function toNumber(value: CollectionRuleValue): number {
    if (typeof value === "number") {
      return value;
    }
  
    if (typeof value === "string") {
      const parsed = Number(value);
      return Number.isNaN(parsed) ? 0 : parsed;
    }
  
    return 0;
  }
  
  function normalizeReviewScore(score: number | null): number {
    if (!score) {
      return 0;
    }
  
    return Math.min(100, Math.max(0, score * 10));
  }
  
  function normalizeReviewCount(count: number | null): number {
    if (!count) {
      return 0;
    }
  
    if (count >= 2000) return 100;
    if (count >= 1000) return 90;
    if (count >= 500) return 75;
    if (count >= 100) return 55;
    if (count >= 25) return 35;
  
    return 15;
  }
  
  function normalizeAffiliatePriority(stay: Stay): number {
    const priority = stay.feed.providers[0]?.priority;
  
    if (!priority) {
      return 50;
    }
  
    return Math.max(0, 100 - (priority - 1) * 20);
  }
  
  function getPrimaryFamilyScore(stay: Stay, collection: Collection): number {
    switch (collection.display.primaryAgeGroup) {
      case "babies":
        return stay.familyScores.babies.score;
      case "toddlers":
        return stay.familyScores.toddlers.score;
      case "kids":
        return stay.familyScores.kids.score;
      case "teens":
        return stay.familyScores.teens.score;
      default:
        return calculateFamilyComfortScore(stay);
    }
  }
  
  function calculateFamilyComfortScore(stay: Stay): number {
    return Math.round(
      (stay.familyScores.babies.score +
        stay.familyScores.toddlers.score +
        stay.familyScores.kids.score +
        stay.familyScores.teens.score) /
        4
    );
  }
  
  function getStrongestAgeGroup(stay: Stay) {
    const scores = [
      { ageGroup: "babies" as const, score: stay.familyScores.babies.score },
      { ageGroup: "toddlers" as const, score: stay.familyScores.toddlers.score },
      { ageGroup: "kids" as const, score: stay.familyScores.kids.score },
      { ageGroup: "teens" as const, score: stay.familyScores.teens.score },
    ];
  
    return scores.sort((a, b) => b.score - a.score)[0].ageGroup;
  }
  
  function getFamilyScoreByAgeGroup(
    stay: Stay,
    ageGroup: ReturnType<typeof getStrongestAgeGroup>
  ): number {
    switch (ageGroup) {
      case "babies":
        return stay.familyScores.babies.score;
      case "toddlers":
        return stay.familyScores.toddlers.score;
      case "kids":
        return stay.familyScores.kids.score;
      case "teens":
        return stay.familyScores.teens.score;
    }
  }
  
  function calculateConfidence(stay: Stay, matchScore: number): number {
    return Math.round(
      matchScore * 0.6 + stay.familyAttributes.confidence * 0.4
    );
  }
  
  function getReasonType(
    field: CollectionRule["field"]
  ): CollectionMatch["reasons"][number]["type"] {
    if (field.includes("Score")) return "family_score";
    if (field.includes("Friendly")) return "family_attribute";
  
    if (
      field === "destinationSlug" ||
      field === "country" ||
      field === "region"
    ) {
      return "location";
    }
  
    if (
      field === "reviewScore" ||
      field === "reviewCount" ||
      field === "reviewLabel"
    ) {
      return "review";
    }
  
    if (field === "priceFrom") return "price";
  
    return "feed_attribute";
  }