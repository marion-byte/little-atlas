# Feed Mapping Booking V1

## Purpose

This document defines where Little Atlas stay data originates.

Every field in the Stay Schema should belong to one of four categories:

* Booking Feed
* Other Feed
* Little Atlas Derived
* Little Atlas Editorial

This separation is critical for scalability.

The goal is to support 10,000+ stays without manual data entry.

---

# Booking Feed

These fields are expected to come directly from Booking.com or similar accommodation feeds.

## Identity

* externalId
* provider
* name
* slug

## Location

* country
* countryCode
* region
* city
* latitude
* longitude

## Property

* propertyType
* stars

## Reviews

* reviewScore
* reviewCount

## Pricing

* priceFrom
* currency

## Media

* heroImage
* gallery

## Booking

* affiliateUrl

## Amenities

Examples:

* swimmingPool
* kidsPool
* restaurant
* spa
* fitness
* wifi
* parking
* kidsClub
* babysitting
* playground

## Rooms

Examples:

* roomTypes
* occupancy
* suite
* familyRoom
* villa

---

# Other Feed

Potential future sources.

## Hotelbeds

May provide:

* room inventory
* availability
* additional facilities

## Expedia

May provide:

* alternative review counts
* additional room data

## Direct Hotel Feed

May provide:

* premium images
* resort specific facilities
* branded room names

## Google Places

May provide:

* nearby attractions
* location validation

---

# Little Atlas Derived

These fields are calculated automatically.

They do not exist in Booking.

They are generated through Family Intelligence.

---

## Family Attributes

Derived from feed data.

Examples:

### babyFriendly

Signals:

* baby cot available
* family rooms
* calm environment
* short transfer

### toddlerFriendly

Signals:

* children pool
* playground
* splash area

### kidsFriendly

Signals:

* kids club
* water activities
* sports

### teenFriendly

Signals:

* sports facilities
* nearby town
* independence

---

## Family Scores

Calculated from multiple feed signals.

### babyScore

0–100

### toddlerScore

0–100

### kidsScore

0–100

### teenScore

0–100

---

## Secondary Scores

### walkabilityScore

Measures:

* restaurants nearby
* beach access
* town access

### convenienceScore

Measures:

* transfer time
* ease of stay
* resort layout

### luxuryScore

Measures:

* stars
* review score
* facilities
* accommodation quality

### familyComfortScore

Measures:

* overall family suitability

---

## Collection Matching

Generated automatically.

Examples:

* baby collection score
* luxury collection score
* teen collection score

---

# Little Atlas Editorial

Editorial enrichment created by Little Atlas.

These fields may be written manually or AI-assisted.

---

## Labels

Examples:

* Little Atlas Selectie
* Editor's Pick
* Family Favourite

## Editorial Positioning

* title
* summary
* whySelected

## Family Guidance

* bestFor
* familyFit
* familyHighlights

## Notes

* littleAtlasNotes

## Nearby Recommendations

Examples:

* beaches
* villages
* attractions

## FAQ

Editorial FAQs created from feed and destination data.

---

# Ownership Model

## Feed Layer

Responsible for:

* factual hotel data

Examples:

* stars
* reviews
* rooms
* amenities

---

## Intelligence Layer

Responsible for:

* family suitability
* family scores
* collection eligibility

Examples:

* babyScore
* teenScore
* luxuryScore

---

## Editorial Layer

Responsible for:

* inspiration
* curation
* storytelling

Examples:

* whySelected
* Little Atlas Notes
* Family Recommendations

---

# Strategic Principle

Booking provides accommodation data.

Little Atlas provides family decision-making.

The long-term value of the platform is not the feed itself.

The long-term value is the Intelligence Layer built on top of the feed.
