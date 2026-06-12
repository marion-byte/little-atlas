// src/app/verblijven/zafiro-palace-mallorca/page.tsx

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Stay } from "@/types/stay";

const navigation = [
  { label: "Bestemmingen", href: "/bestemmingen" },
  { label: "Mallorca", href: "/bestemmingen/mallorca" },
  { label: "Verblijven", href: "/verblijven" },
];

const stay: Stay = {
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

    heroImage: "/mallorca.jpg",
    gallery: ["/mallorca.jpg", "/mallorca.jpg", "/mallorca.jpg"],

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
      {
        url: "/mallorca.jpg",
        alt: "Familievakantie op Mallorca",
        role: "location",
        provider: "manual",
        position: 3,
      },
    ],

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
        key: "family_suites",
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
        id: "junior-suite",
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
        id: "family-suite",
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
        id: "swim-up-suite",
        name: "Swim-up Suite",
        description:
          "Populaire keuze voor gezinnen die direct toegang tot water willen.",
        maxGuests: 4,
        bedrooms: 1,
        bathrooms: 1,
        hasSeparateBedroom: true,
        hasTerrace: true,
        hasPrivatePool: false,
        provider: "booking",
      },
      {
        id: "penthouse-suite",
        name: "Penthouse Suite",
        description:
          "Voor gezinnen die meer privacy, uitzicht en een luxere beleving zoeken.",
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
    rawRoomTypes: [
      "Junior Suite",
      "Family Suite",
      "Swim-up Suite",
      "Penthouse Suite",
    ],
  },

  editorial: {
    label: "Little Atlas Selectie",
    title: "Zafiro Palace Mallorca",
    subtitle:
      "Een luxe familieverblijf bij Alcúdia met resortgevoel, veel zwembaden en ruime suites.",
    summary:
      "Zafiro Palace Mallorca is een ruim opgezet vijfsterrenresort voor gezinnen die comfort, zwembaden en strand binnen handbereik willen combineren met een premium vakantiegevoel.",
    whySelected:
      "We selecteren dit verblijf vanwege de combinatie van familiesuites, meerdere zwembaden, kindvriendelijke faciliteiten en de ligging bij het noorden van Mallorca. Het voelt verzorgd en compleet, zonder dat het zijn rustige, mediterrane uitstraling verliest.",
    bestFor: [
      "Gezinnen die luxe en gemak zoeken",
      "Families met jonge kinderen",
      "Ouders die strand en resort willen combineren",
      "Meer-generatie vakanties",
    ],
    highlights: [
      "Meerdere zwembaden voor verschillende leeftijden",
      "Suites die goed werken voor gezinnen",
      "Dicht bij strand en boulevard",
      "Restaurants op het resort",
      "Premium uitstraling zonder formeel te voelen",
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
      "Natuurgebied S’Albufera",
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
      {
        question: "Is dit een all-inclusive resort?",
        answer:
          "Beschikbare verzorging kan per aanbieder en seizoen verschillen. Controleer dit bij het boeken.",
      },
    ],
    seoTitle:
      "Zafiro Palace Mallorca met kinderen | Little Atlas familieverblijf",
    seoDescription:
      "Bekijk Zafiro Palace Mallorca als premium familieverblijf op Mallorca. Inclusief highlights, ligging, kamers, kindvriendelijkheid en boekingslink.",
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
        "Activiteiten voor kinderen",
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

  collectionMatches: [
    {
      collectionSlug: "luxe-familiehotels-mallorca",
      collectionTitle: "Luxe familiehotels Mallorca",
      matchScore: 94,
      reasons: ["5 sterren", "Hoge reviewscore", "Familiesuites", "Kidsclub"],
      ruleBased: true,
      aiAssisted: true,
    },
    {
      collectionSlug: "op-vakantie-met-peuters",
      collectionTitle: "Op vakantie met peuters",
      matchScore: 91,
      reasons: ["Kinderbad", "Kidsclub", "Resortopzet", "Dicht bij strand"],
      ruleBased: true,
      aiAssisted: true,
    },
  ],
};

export default function ZafiroPalaceMallorcaPage() {
  const primaryReview = stay.feed.primaryReview;

  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#171717]">
      <header className="border-b border-black/10 bg-[#faf7f2]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            Little Atlas
          </Link>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-black/70">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:py-16">
        <div className="mb-8 flex flex-wrap items-center gap-3 text-sm">
          <Link href="/" className="text-black/50">
            Home
          </Link>
          <span className="text-black/30">/</span>
          <Link
            href={`/bestemmingen/${stay.feed.destinationSlug}`}
            className="text-black/50"
          >
            {stay.feed.destination}
          </Link>
          <span className="text-black/30">/</span>
          <span>{stay.feed.name}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-black/50">
              {stay.editorial.label}
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
              {stay.editorial.title}
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-black/70">
              {stay.editorial.subtitle}
            </p>
          </div>

          <div className="rounded-3xl bg-white/70 p-6 shadow-sm ring-1 ring-black/5">
            <p className="text-lg leading-8 text-black/70">
              {stay.editorial.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Badge>{stay.feed.region}</Badge>
              <Badge>{stay.feed.stars} sterren</Badge>
              {primaryReview?.normalizedScore && (
                <Badge>
                  {primaryReview.label} {primaryReview.normalizedScore}
                </Badge>
              )}
              {stay.feed.priceFrom && (
                <Badge>
                  vanaf {stay.feed.currency} {stay.feed.priceFrom}
                </Badge>
              )}
            </div>

            <a
              href={stay.feed.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#171717] px-6 py-4 text-sm font-semibold text-white transition hover:bg-black"
            >
              Bekijk beschikbaarheid
            </a>

            <p className="mt-3 text-center text-xs text-black/40">
              Partnerlink via {stay.feed.reviewProvider}
            </p>
          </div>
        </div>

        <div className="relative mt-12 h-[520px] overflow-hidden rounded-[2rem]">
          <Image
            src={stay.feed.heroImage}
            alt={stay.feed.name}
            fill
            priority
            sizes="(min-width: 1280px) 1184px, calc(100vw - 48px)"
            className="object-cover"
          />
        </div>
      </section>

      <SectionGrid>
        <InfoCard title="Type verblijf" value={stay.feed.propertyType} />
        <InfoCard
          title="Reviewscore"
          value={
            stay.feed.reviewScore && stay.feed.reviewCount
              ? `${stay.feed.reviewScore} / 10 uit ${stay.feed.reviewCount} reviews`
              : "Nog geen reviewscore"
          }
        />
        <InfoCard
          title="Prijsindicatie"
          value={
            stay.feed.priceFrom
              ? `Vanaf ${stay.feed.currency} ${stay.feed.priceFrom} per nacht`
              : "Prijs op aanvraag"
          }
        />
      </SectionGrid>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Eyebrow>Waarom geselecteerd</Eyebrow>
          <h2 className="text-4xl font-semibold tracking-tight">
            Premium resortcomfort voor gezinnen
          </h2>
        </div>

        <p className="text-xl leading-9 text-black/70">
          {stay.editorial.whySelected}
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="mb-8 text-4xl font-semibold tracking-tight">
          Perfect voor
        </h2>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <h3 className="text-xl font-semibold">Baby’s</h3>
            <p className="mt-4 leading-7 text-black/70">
              {stay.familyScores.babies.reasons.join(", ")}.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold">Peuters</h3>
            <p className="mt-4 leading-7 text-black/70">
              {stay.familyScores.toddlers.reasons.join(", ")}.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold">Schoolgaande kinderen</h3>
            <p className="mt-4 leading-7 text-black/70">
              {stay.familyScores.kids.reasons.join(", ")}.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold">Tieners</h3>
            <p className="mt-4 leading-7 text-black/70">
              {stay.familyScores.teens.reasons.join(", ")}.
            </p>
          </Card>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2">
        <ListBlock
          title="In één oogopslag"
          items={stay.feed.amenities.map((amenity) => amenity.label)}
        />
        <ListBlock title="Hoogtepunten" items={stay.editorial.highlights} />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] bg-[#171717] p-8 text-white md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Eyebrow light>Kamers & suites</Eyebrow>
              <h2 className="text-4xl font-semibold tracking-tight">
                Ruime opties voor gezinnen
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {stay.feed.rooms.map((room) => (
                <div key={room.id} className="rounded-3xl bg-white/10 p-6">
                  <h3 className="text-lg font-semibold">{room.name}</h3>
                  {room.description && (
                    <p className="mt-3 leading-7 text-white/70">
                      {room.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2">
        <div>
          <Eyebrow>Ligging</Eyebrow>
          <h2 className="text-4xl font-semibold tracking-tight">
            Noord-Mallorca, dicht bij Alcúdia
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/70">
            Dit verblijf ligt in de regio {stay.feed.location.region}, op{" "}
            {stay.feed.destination}. De locatievelden zijn neutraal opgezet,
            zodat ze later uit meerdere feeds kunnen komen.
          </p>

          <p className="mt-4 text-sm text-black/50">
            Coördinaten: {stay.feed.location.latitude},{" "}
            {stay.feed.location.longitude}
          </p>
        </div>

        <ListBlock title="In de buurt" items={stay.editorial.nearby} />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] bg-white/70 p-8 ring-1 ring-black/5 md:p-12">
          <Eyebrow>Little Atlas Notes</Eyebrow>

          <h2 className="mb-8 text-4xl font-semibold tracking-tight">
            Onze redactionele notities
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            {stay.editorial.littleAtlasNotes.map((note) => (
              <div key={note} className="rounded-3xl bg-[#faf7f2] p-6">
                <p className="leading-7 text-black/70">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="mb-8 text-4xl font-semibold tracking-tight">FAQ</h2>

        <div className="space-y-4">
          {stay.editorial.faqs.map((item) => (
            <Card key={item.question}>
              <h3 className="text-lg font-semibold">{item.question}</h3>
              <p className="mt-3 leading-7 text-black/70">{item.answer}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-8 text-4xl font-semibold tracking-tight">
          Vergelijkbare collecties
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {stay.collectionMatches.map((item) => (
            <Link
              key={item.collectionSlug}
              href={`/collecties/${item.collectionSlug}`}
              className="rounded-[2rem] bg-white/70 p-8 ring-1 ring-black/5"
            >
              <p className="text-sm text-black/50">
                Matchscore {item.matchScore}
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                {item.collectionTitle}
              </h3>
              <p className="mt-4 leading-7 text-black/70">
                {item.reasons.join(", ")}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] bg-[#171717] px-8 py-12 text-center text-white md:px-16 md:py-20">
          <Eyebrow light>Klaar om te vergelijken?</Eyebrow>

          <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            Bekijk prijzen en beschikbaarheid bij onze partner
          </h2>

          <a
            href={stay.feed.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#171717] transition hover:bg-white/90"
          >
            Naar aanbieder
          </a>
        </div>
      </section>
    </main>
  );
}

function SectionGrid({ children }: { children: ReactNode }) {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-3">
      {children}
    </section>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full bg-[#faf7f2] px-4 py-2 text-sm text-black/70 ring-1 ring-black/10">
      {children}
    </span>
  );
}

function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-3xl bg-white/70 p-7 ring-1 ring-black/5">
      {children}
    </div>
  );
}

function InfoCard({ title, value }: { title: string; value: string }) {
  return (
    <Card>
      <p className="text-sm text-black/50">{title}</p>
      <p className="mt-3 text-xl font-semibold">{value}</p>
    </Card>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[2rem] bg-white/70 p-8 ring-1 ring-black/5">
      <h2 className="mb-6 text-3xl font-semibold tracking-tight">{title}</h2>

      <div className="grid gap-3">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-2xl bg-[#faf7f2] px-5 py-4 text-black/70"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`mb-3 text-xs font-semibold uppercase tracking-[0.25em] ${
        light ? "text-white/50" : "text-black/50"
      }`}
    >
      {children}
    </p>
  );
}