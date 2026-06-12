# Family Scoring Model V1

## Purpose

The Family Scoring Model translates accommodation data into family relevance.

Booking.com tells users what a hotel has.

Little Atlas tells families whether the hotel is actually suitable for their family situation.

Scores range from:

0 – 100

The scoring model is designed to work automatically across 10,000+ stays.

---

# Scoring Philosophy

A score should never be based on a single facility.

Example:

A kids club alone does not make a hotel toddler friendly.

Scores are calculated from multiple signals.

Each signal contributes points.

The total score is capped at 100.

---

# Baby Score

Age:

0–2 years

Measures how easy and stress-free a holiday is for families with babies.

## Positive Signals

Baby cots available +10

Babysitting available +15

Family rooms available +10

Connecting rooms available +10

Children pool +10

Calm resort +10

Short airport transfer +10

Walkable resort layout +10

High review score +10

Premium family service indicators +5

## Negative Signals

Adults-only areas dominant -10

Large party destination -15

Very large walking distances -10

Steep terrain -10

No family room inventory -10

## Score Categories

90–100 Excellent

80–89 Strong

70–79 Good

60–69 Acceptable

Below 60 Limited suitability

---

# Toddler Score

Age:

2–5 years

Measures playability and convenience.

## Positive Signals

Children pool +15

Splash pool +15

Playground +15

Kids club +10

Family rooms +10

Walkable beach access +10

Car-free holiday potential +10

Multiple restaurants +5

High review score +10

## Negative Signals

Steep resort layout -10

No dedicated child facilities -20

Long internal walking distances -10

## Score Categories

90–100 Excellent

80–89 Strong

70–79 Good

60–69 Acceptable

Below 60 Limited suitability

---

# Kids Score

Age:

6–12 years

Measures activity level and entertainment value.

## Positive Signals

Waterpark +20

Kids club +15

Sports facilities +10

Multiple pools +10

Entertainment programme +10

Beach access +10

Family rooms +5

High review score +10

Strong family reputation +10

## Negative Signals

Very quiet adult-focused resort -15

Limited facilities -15

No pool -20

## Score Categories

90–100 Excellent

80–89 Strong

70–79 Good

60–69 Acceptable

Below 60 Limited suitability

---

# Teen Score

Age:

13–17 years

Measures freedom, independence and variety.

## Positive Signals

Sports facilities +15

Teen club +15

Nearby town +15

Beach access +10

Adventure activities +10

Large resort +10

Strong WiFi +5

Fitness facilities +10

High review score +10

## Negative Signals

Very baby-focused resort -15

Limited activities -20

Remote location -15

## Score Categories

90–100 Excellent

80–89 Strong

70–79 Good

60–69 Acceptable

Below 60 Limited suitability

---

# Confidence Score

Every family score receives a confidence score.

Range:

0–100

Purpose:

Measures confidence in available data.

Example:

### Hotel A

Booking provides:

* kids club
* pools
* room types
* reviews

Confidence:

90

### Hotel B

Booking provides:

* limited facility data

Confidence:

55

Lower confidence reduces ranking strength.

---

# Derived Collection Examples

## Holiday With Baby

Requirements:

Baby Score >= 85

Confidence >= 70

Review Score >= 8

---

## Best Hotels For Toddlers

Requirements:

Toddler Score >= 85

Confidence >= 70

---

## Teen Approved Resorts

Requirements:

Teen Score >= 90

Confidence >= 75

---

## Family All-Rounders

Requirements:

Baby Score >= 75

Toddler Score >= 75

Kids Score >= 75

Teen Score >= 75

---

# Future AI Layer

Version 1 uses rules.

Future versions may enrich scores using:

* hotel descriptions
* review analysis
* image analysis
* user behaviour

AI should improve scoring accuracy but never replace the scoring framework.

---

# Strategic Principle

The Family Scoring Model is proprietary Little Atlas intellectual property.

Booking provides hotel data.

Little Atlas provides family decision intelligence.
