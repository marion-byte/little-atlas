# Little Atlas Family Intelligence Model V1

## Purpose

Little Atlas is not designed to be another hotel database.

Booking.com explains what a hotel has.

Little Atlas explains who a hotel is for.

The Family Intelligence Layer is the core system that translates accommodation data into meaningful recommendations for families.

This layer powers:

* Stay Pages
* Collection Pages
* Search & Filters
* AI Recommendations
* Personalisation
* Family Discovery

---

# Family Attributes

Family Attributes are factual characteristics.

They are either available from feeds or derived from feed data.

These attributes are used for filtering, scoring and collection matching.

## Age Suitability

* babyFriendly
* toddlerFriendly
* kidsFriendly
* teenFriendly

## Accommodation

* familyRooms
* connectingRooms
* suitesAvailable
* villaAvailable
* kitchenetteAvailable
* laundryFacilities

## Family Facilities

* kidsClub
* teenClub
* babysitting
* childrenPool
* splashPool
* waterPark
* playground
* indoorPlayArea

## Convenience

* strollerFriendly
* walkableArea
* walkableToBeach
* walkableToRestaurants
* shortTransfer

## Resort Style

* allInclusive
* premiumAllInclusive
* boutiqueStyle
* luxuryResort
* quietResort
* activityResort

## Beach & Nature

* beachfront
* shallowBeach
* natureFocused
* mountainSetting

---

# Family Scores

Scores translate raw hotel data into family relevance.

Each score ranges from:

0 – 100

### Baby Score

Measures suitability for babies aged 0–2.

Signals:

* baby cots
* babysitting
* children pool
* stroller friendliness
* short transfer
* family rooms
* calm environment

### Toddler Score

Measures suitability for children aged 2–5.

Signals:

* splash pools
* playgrounds
* shallow water
* kids club
* walkability
* family rooms

### Kids Score

Measures suitability for children aged 6–12.

Signals:

* waterparks
* activities
* sports
* kids clubs
* family entertainment

### Teen Score

Measures suitability for children aged 13–17.

Signals:

* sports facilities
* social activities
* nearby town
* freedom of movement
* adventure opportunities

---

# Secondary Scores

These scores are unique to Little Atlas.

## Walkability Score

Can families comfortably stay without a car?

Measures:

* restaurants nearby
* beach access
* town access
* safety
* pedestrian infrastructure

## Convenience Score

How easy is the holiday experience?

Measures:

* transfer time
* family room availability
* resort layout
* accessibility

## Luxury Score

Measures overall premium positioning.

Signals:

* stars
* review score
* service quality
* room quality
* food offering

## Family Comfort Score

Measures overall family experience.

Combination of:

* Baby Score
* Toddler Score
* Kids Score
* Convenience Score

---

# Family Situations

Family Situations are Little Atlas recommendation layers.

A hotel may belong to multiple situations.

## First Holiday With Baby

Requirements:

* high Baby Score
* short transfer
* calm environment
* family rooms

## Family Resort Classic

Requirements:

* children pool
* kids club
* family rooms

## Large Family Friendly

Requirements:

* suites
* connecting rooms
* larger occupancy options

## Car Free Holiday

Requirements:

* high Walkability Score

## Luxury Family Escape

Requirements:

* high Luxury Score
* strong Family Comfort Score

## Teen Approved

Requirements:

* high Teen Score

## Water Fun Favourite

Requirements:

* waterpark
* multiple pools
* strong Kids Score

## Multi Generation Travel

Requirements:

* room variety
* restaurants
* accessibility
* broad age suitability

---

# Collection Examples

The Collection Engine uses Family Intelligence to build collections automatically.

### Holiday With Baby

Rules:

* Baby Score >= 85

### Best Hotels For Toddlers

Rules:

* Toddler Score >= 85

### Teen Approved Resorts

Rules:

* Teen Score >= 90

### Luxury Family Hotels Mallorca

Rules:

* destination = Mallorca
* Luxury Score >= 85

### Hotels With Waterpark

Rules:

* waterPark = true

---

# Strategic Principle

Booking.com categorises hotels.

Little Atlas categorises family holidays.

This Family Intelligence Layer is the core differentiator of the platform and should become a proprietary dataset that improves over time through editorial input, AI enrichment and user behaviour.
