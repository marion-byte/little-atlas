// src/app/verblijven/zafiro-palace-mallorca/page.tsx

import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "Bestemmingen", href: "/bestemmingen" },
  { label: "Mallorca", href: "/bestemmingen/mallorca" },
  { label: "Verblijven", href: "/verblijven" },
];

const stay = {
  feed: {
    name: "Zafiro Palace Mallorca",
    slug: "zafiro-palace-mallorca",
    destination: "Mallorca",
    destinationSlug: "mallorca",
    region: "Alcúdia",
    country: "Spanje",
    propertyType: "Luxury family resort",
    stars: 5,
    reviewScore: 9.1,
    reviewCount: 1248,
    priceFrom: 312,
    currency: "EUR",
    heroImage: "/mallorca.jpg",
    gallery: ["/mallorca.jpg", "/mallorca.jpg", "/mallorca.jpg"],
    affiliateUrl: "https://www.booking.com",
    amenities: [
      "Kidsclub",
      "Meerdere zwembaden",
      "Familiesuites",
      "Spa",
      "Restaurants",
      "Kinderbad",
      "Dicht bij strand",
      "Fitness",
    ],
    provider: "booking",
    externalId: "zafiro-palace-mallorca-demo",
    latitude: 39.843,
    longitude: 3.132,
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
    seoTitle:
      "Zafiro Palace Mallorca met kinderen | Little Atlas familieverblijf",
    seoDescription:
      "Bekijk Zafiro Palace Mallorca als premium familieverblijf op Mallorca. Inclusief highlights, ligging, kamers, kindvriendelijkheid en boekingslink.",
  },

  familyFit: [
    {
      title: "Baby’s",
      text: "Ruime kamers, liftvoorzieningen en resortfaciliteiten maken dit een comfortabele keuze met baby.",
    },
    {
      title: "Peuters",
      text: "De zwembaden, korte afstanden en kindvriendelijke sfeer zijn ideaal voor peuters.",
    },
    {
      title: "Schoolgaande kinderen",
      text: "Schoolgaande kinderen hebben veel afwisseling met water, activiteiten en restaurants.",
    },
    {
      title: "Tieners",
      text: "Tieners waarderen vooral de ruimte, zwembaden, fitness en ligging dicht bij Alcúdia.",
    },
  ],

  highlights: [
    "Meerdere zwembaden voor verschillende leeftijden",
    "Suites die goed werken voor gezinnen",
    "Dicht bij strand en boulevard",
    "Restaurants op het resort",
    "Premium uitstraling zonder formeel te voelen",
  ],

  rooms: [
    {
      name: "Junior Suite",
      description:
        "Comfortabele suite voor gezinnen die extra ruimte willen ten opzichte van een standaardkamer.",
    },
    {
      name: "Family Suite",
      description:
        "Ruimere optie voor families die slapen en leven beter willen scheiden.",
    },
    {
      name: "Swim-up Suite",
      description:
        "Populaire keuze voor gezinnen die direct toegang tot water willen.",
    },
    {
      name: "Penthouse Suite",
      description:
        "Voor gezinnen die meer privacy, uitzicht en een luxere beleving zoeken.",
    },
  ],

  location: [
    "Strand van Alcúdia",
    "Port d’Alcúdia",
    "Oude centrum van Alcúdia",
    "Playa de Muro",
    "Natuurgebied S’Albufera",
  ],

  notes: [
    "Beste keuze als je Noord-Mallorca wilt combineren met resortcomfort.",
    "Let bij boeken goed op kamertype: swim-up en family suites verschillen sterk in beleving.",
    "Interessant voor gezinnen die niet elke avond buiten de deur willen eten.",
  ],

  similarStays: [
    {
      name: "Ikos Porto Petro",
      location: "Porto Petro, Mallorca",
      image: "/mallorca.jpg",
      href: "/verblijven/ikos-porto-petro",
    },
    {
      name: "Martinhal Sagres",
      location: "Algarve, Portugal",
      image: "/mallorca.jpg",
      href: "/verblijven/martinhal-sagres",
    },
    {
      name: "Luxe familiehotel Toscane",
      location: "Toscane, Italië",
      image: "/mallorca.jpg",
      href: "/bestemmingen/toscane",
    },
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
};

export default function ZafiroPalaceMallorcaPage() {
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
              <Badge>Score {stay.feed.reviewScore}</Badge>
              <Badge>
                vanaf {stay.feed.currency} {stay.feed.priceFrom}
              </Badge>
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
              Partnerlink via {stay.feed.provider}
            </p>
          </div>
        </div>

        <div className="relative mt-12 h-[520px] overflow-hidden rounded-[2rem]">
          <Image
            src={stay.feed.heroImage}
            alt={stay.feed.name}
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      <SectionGrid>
        <InfoCard title="Type verblijf" value={stay.feed.propertyType} />
        <InfoCard
          title="Reviewscore"
          value={`${stay.feed.reviewScore} / 10 uit ${stay.feed.reviewCount} reviews`}
        />
        <InfoCard
          title="Prijsindicatie"
          value={`Vanaf ${stay.feed.currency} ${stay.feed.priceFrom} per nacht`}
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
          {stay.familyFit.map((item) => (
            <Card key={item.title}>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-4 leading-7 text-black/70">{item.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2">
        <ListBlock title="In één oogopslag" items={stay.feed.amenities} />
        <ListBlock title="Hoogtepunten" items={stay.highlights} />
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
              {stay.rooms.map((room) => (
                <div key={room.name} className="rounded-3xl bg-white/10 p-6">
                  <h3 className="text-lg font-semibold">{room.name}</h3>
                  <p className="mt-3 leading-7 text-white/70">
                    {room.description}
                  </p>
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
            Dit verblijf ligt in de regio {stay.feed.region}, op{" "}
            {stay.feed.destination}. De locatievelden zijn neutraal opgezet,
            zodat ze later uit meerdere feeds kunnen komen.
          </p>

          <p className="mt-4 text-sm text-black/50">
            Coördinaten: {stay.feed.latitude}, {stay.feed.longitude}
          </p>
        </div>

        <ListBlock title="In de buurt" items={stay.location} />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] bg-white/70 p-8 ring-1 ring-black/5 md:p-12">
          <Eyebrow>Little Atlas Notes</Eyebrow>

          <h2 className="mb-8 text-4xl font-semibold tracking-tight">
            Onze redactionele notities
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            {stay.notes.map((note) => (
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
          {stay.faqs.map((item) => (
            <Card key={item.question}>
              <h3 className="text-lg font-semibold">{item.question}</h3>
              <p className="mt-3 leading-7 text-black/70">{item.answer}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-8 text-4xl font-semibold tracking-tight">
          Vergelijkbare verblijven
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {stay.similarStays.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group overflow-hidden rounded-[2rem] bg-white/70 ring-1 ring-black/5"
            >
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="mt-2 text-black/60">{item.location}</p>
              </div>
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

function SectionGrid({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-3">
      {children}
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-[#faf7f2] px-4 py-2 text-sm text-black/70 ring-1 ring-black/10">
      {children}
    </span>
  );
}

function Card({ children }: { children: React.ReactNode }) {
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
  children: React.ReactNode;
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