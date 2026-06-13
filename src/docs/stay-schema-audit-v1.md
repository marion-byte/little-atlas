Stay Schema Audit V1
Objective

Validate whether the current Stay Schema V1 is sufficient for:

Collection Engine
Family Intelligence
Stay Pages
Destination Pages
Affiliate Monetization

before scaling from:

2 demo stays
25 demo stays
10,000+ production stays
Executive Summary

Current Stay Schema V1 is sufficient for:

✅ Collection Engine V1
✅ Family Intelligence V1
✅ Basic Stay Pages
✅ Initial Collection Pages

However, the schema is not yet sufficient for:

⚠ Destination Engine
⚠ Advanced SEO generation
⚠ Large-scale affiliate optimization
⚠ AI-generated destination content
⚠ Future recommendation systems

The current model is approximately:

70% production ready

for Little Atlas.

1. Collection Engine
Current Status

Good.

Current schema already contains:

destinationSlug
country
region
propertyType
amenities
familyAttributes
familyScores
review data
pricing data

This is enough to support:

Family Collections
Luxury Collections
Destination Collections
Amenity Collections

Examples:

Op vakantie met baby
Hotels met waterpark
Luxe familiehotels
Luxe familiehotels Mallorca

Assessment:

✅ Ready

2. Family Intelligence
Current Status

Strong foundation.

Current schema supports:

Baby Score
Toddler Score
Kids Score
Teen Score

and

Family Attributes

Examples:

waterPark
kidsClub
familyRooms
babysitting
walkableArea

Assessment:

✅ Ready for V1

Missing Family Intelligence Signals

Future versions should support:

Family Style

Examples:

activeFamilies
beachFamilies
luxuryFamilies
natureFamilies

Reason:

Two hotels can have identical Baby Scores but attract completely different family types.

Assessment:

⚠ Missing

Family Situations

Examples:

singleParentFriendly
multigenerationalFriendly
largeFamilyFriendly

Reason:

Important future collection opportunities.

Assessment:

⚠ Missing

3. Stay Pages
Current Status

Almost ready.

Current data is sufficient for:

Hero
Description
Family Scores
Amenities
Review data

Assessment:

✅ Ready

Missing Stay Page Fields
Gallery

Current model is too limited.

Need:

gallery[]

instead of only hero image.

Reason:

Premium travel pages require image storytelling.

Assessment:

🔴 Missing

Highlights

Need:

highlights[]

Examples:

Beachfront location
Excellent baby facilities
Heated pools

Reason:

Hero section becomes much stronger.

Assessment:

🔴 Missing

Quick Facts

Need:

quickFacts[]

Examples:

Airport transfer
Kids club age
Number of pools

Assessment:

🟡 Recommended

4. Destination Pages
Current Status

Not fully ready.

Destination pages require aggregation.

Examples:

Mallorca page needs:

best luxury hotels
best baby hotels
best resorts with waterpark

Current schema supports part of this.

Missing Fields
Coordinates

Need:

latitude
longitude

Reason:

Future maps.

Assessment:

🔴 Missing

Area

Need:

area

Examples:

Alcúdia
Port de Sóller
Elounda

Reason:

Destination clustering.

Assessment:

🔴 Missing

Beach Distance

Need:

distanceToBeach

Assessment:

🟡 Recommended

Airport Distance

Need:

distanceToAirport

Assessment:

🟡 Recommended

5. Affiliate Monetization
Current Status

Good for V1.

Current schema already contains:

provider
affiliateUrl
priceFrom

Assessment:

✅ Ready

Missing Affiliate Fields
Deep Link Tracking

Need:

affiliateTrackingId

Assessment:

🟡 Recommended

Multiple Providers

Need:

providers[]

with:

Booking
Expedia
Hotels.com
TravelPayouts

Assessment:

🔴 Essential

Commission Score

Need:

commissionScore

Reason:

Ranking optimization.

Assessment:

🟡 Recommended

6. SEO Readiness
Current Status

Not yet sufficient.

Current schema focuses on operational data.

SEO requires editorial data.

Missing SEO Fields
Editorial Summary

Need:

editorialSummary

Assessment:

🔴 Essential

Editorial Verdict

Need:

editorialVerdict

Example:

"One of Mallorca's best luxury family resorts."

Assessment:

🔴 Essential

Ideal For

Need:

idealFor[]

Examples:

babies
toddlers
luxury families

Assessment:

🔴 Essential

Reasons We Love It

Need:

reasonsWeLoveIt[]

Assessment:

🟡 Recommended

7. Scaling To 10,000+ Stays

The most important missing concept is:

Separation Between Feed Data And Editorial Data

Current schema risks mixing:

Booking data
Family Intelligence data
Editorial data

Recommended structure:

stay
 ├ feed
 ├ familyAttributes
 ├ familyScores
 ├ editorial
 ├ seo
 └ affiliate

This separation will become critical once:

10,000+
stays

are imported.

Assessment:

🔴 Strategic Priority

Recommended Actions

Before importing the first 25 demo stays:

Must Have
gallery[]
area
latitude
longitude
editorialSummary
idealFor[]
providers[]
Nice To Have
distanceToBeach
distanceToAirport
quickFacts[]
commissionScore
Can Wait
recommendation engine fields
AI personalization fields
user behaviour fields
Final Verdict

Current Stay Schema V1 is strong enough to continue development.

However, before scaling beyond the first 25 demo stays, Little Atlas should introduce:

stronger editorial fields
location intelligence fields
multi-provider affiliate fields

to avoid future migration work.

Current readiness score:

Collection Engine      95%
Family Intelligence    90%
Stay Pages             80%
Destination Pages      65%
Affiliate Layer        75%
SEO Layer              60%

Overall: 78%