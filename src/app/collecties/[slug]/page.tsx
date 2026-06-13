// src/app/collecties/[slug]/page.tsx

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { collections, getCollectionBySlug } from "@/data/collections";
import { stays } from "@/data/stays";
import { matchStaysToCollections } from "@/lib/collection-engine";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return collections.map((collection) => ({
    slug: collection.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    return {
      title: "Collectie niet gevonden | Little Atlas",
    };
  }

  return {
    title: collection.seo.title,
    description: collection.seo.description,
  };
}

export default async function CollectionPage({ params }: PageProps) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  const matches = matchStaysToCollections(stays, [collection]);

  const matchedStays = matches
    .map((match) => {
      const stay = stays.find((item) => item.id === match.stayId);
      return stay ? { stay, match } : null;
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  const heroImage =
    collection.display.heroImage ??
    matchedStays[0]?.stay.feed.heroImage ??
    "/mallorca.jpg";

  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#171717]">
      <header className="border-b border-black/10 bg-[#faf7f2]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            Little Atlas
          </Link>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            <Link href="/bestemmingen" className="text-black/70">
              Bestemmingen
            </Link>
            <Link
              href="/collecties/op-vakantie-met-baby"
              className="text-black/70"
            >
              Collecties
            </Link>
            <Link
              href="/verblijven/zafiro-palace-mallorca"
              className="text-black/70"
            >
              Verblijven
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:py-16">
        <div className="mb-8 flex flex-wrap items-center gap-3 text-sm">
          <Link href="/" className="text-black/45 hover:text-black">
            Home
          </Link>
          <span className="text-black/25">/</span>
          <span className="text-black/45">Collecties</span>
          <span className="text-black/25">/</span>
          <span>{collection.title}</span>
        </div>

        <div className="overflow-hidden rounded-[2.5rem] bg-white/60 ring-1 ring-black/5">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="p-8 md:p-12 lg:p-14">
              <Eyebrow>
                {collection.display.eyebrow ?? "Little Atlas Collectie"}
              </Eyebrow>

              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
                {collection.seo.h1}
              </h1>

              <p className="mt-6 max-w-2xl text-xl leading-8 text-black/70">
                {collection.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {collection.display.badge && (
                  <Badge>{collection.display.badge}</Badge>
                )}
                <Badge>{matchedStays.length} verblijven</Badge>
                <Badge>Family Intelligence</Badge>
                <Badge>{collection.rules.sortBy}</Badge>
              </div>

              <p className="mt-8 max-w-2xl text-base leading-7 text-black/60">
                {collection.seo.intro}
              </p>
            </div>

            <div className="relative min-h-[420px]">
              <Image
                src={heroImage}
                alt={collection.title}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-[#faf7f2]/90 p-5 backdrop-blur">
                <p className="text-sm font-semibold">Geselecteerd op</p>
                <p className="mt-2 text-sm leading-6 text-black/65">
                  Matchscore, family fit, reviewscore en relevante
                  voorzieningen voor gezinnen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-4 md:grid-cols-4">
          <InfoCard title="Selectie" value="Family-first" />
          <InfoCard title="Resultaten" value={`${matchedStays.length}`} />
          <InfoCard
            title="Min. match"
            value={`${collection.rules.minimumMatchScore ?? 0}`}
          />
          <InfoCard title="Type" value={collection.intent} />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <Eyebrow>Waarom deze collectie</Eyebrow>
          <h2 className="text-4xl font-semibold tracking-tight">
            Een selectie die verder kijkt dan sterren en prijs
          </h2>
        </div>

        <div>
          <p className="text-xl leading-9 text-black/70">
            {collection.description}
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {collection.rules.rules.slice(0, 3).map((rule) => (
              <div
                key={`${rule.field}-${rule.label}`}
                className="rounded-3xl bg-white/70 p-5 ring-1 ring-black/5"
              >
                <p className="text-sm font-semibold">
                  {rule.label ?? rule.field}
                </p>
                <p className="mt-2 text-sm leading-6 text-black/55">
                  Gewicht {rule.weight ?? 1} · {rule.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>Little Atlas selectie</Eyebrow>
            <h2 className="text-4xl font-semibold tracking-tight">
              Verblijven in deze collectie
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-black/55">
            De volgorde is gebaseerd op matchscore, Family Intelligence,
            reviewkwaliteit en beschikbaarheid bij partners.
          </p>
        </div>

        {matchedStays.length > 0 ? (
          <div className="grid gap-7 md:grid-cols-2">
            {matchedStays.map(({ stay, match }) => (
              <article
                key={stay.id}
                className="group overflow-hidden rounded-[2rem] bg-white/75 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-80">
                  <Image
                    src={stay.feed.heroImage}
                    alt={stay.feed.name}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                    <BadgeDark>Match {match.matchScore}</BadgeDark>
                    {stay.feed.stars && <BadgeDark>{stay.feed.stars} sterren</BadgeDark>}
                  </div>
                </div>

                <div className="p-7">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {stay.feed.reviewScore && (
                      <Badge>
                        {stay.feed.reviewLabel} {stay.feed.reviewScore}
                      </Badge>
                    )}
                    {stay.feed.priceFrom && (
                      <Badge>
                        vanaf {stay.feed.currency} {stay.feed.priceFrom}
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-2xl font-semibold tracking-tight">
                    {stay.feed.name}
                  </h3>

                  <p className="mt-2 text-black/60">
                    {stay.feed.region}, {stay.feed.country}
                  </p>

                  <p className="mt-5 leading-7 text-black/70">
                    {stay.editorial.summary}
                  </p>

                  <div className="mt-6 rounded-3xl bg-[#faf7f2] p-5">
                    <p className="text-sm font-semibold">Waarom geselecteerd</p>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-black/70">
                      {match.reasons.slice(0, 3).map((reason) => (
                        <li key={reason.label}>• {reason.label}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={`/verblijven/${stay.slug}`}
                      className="inline-flex flex-1 items-center justify-center rounded-full border border-black/15 px-5 py-3 text-sm font-semibold transition hover:bg-black hover:text-white"
                    >
                      Bekijk verblijf
                    </Link>

                    <a
                      href={stay.feed.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center rounded-full bg-[#171717] px-5 py-3 text-sm font-semibold text-white transition hover:bg-black"
                    >
                      Bekijk beschikbaarheid
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] bg-white/70 p-10 text-center ring-1 ring-black/5">
            <Eyebrow>Geen matches</Eyebrow>
            <h3 className="text-3xl font-semibold tracking-tight">
              Deze collectie heeft nog geen verblijven
            </h3>
            <p className="mx-auto mt-4 max-w-xl leading-7 text-black/65">
              De collectie bestaat al, maar er zijn nog geen stays die voldoen
              aan de ingestelde matchregels. Voeg meer verblijven toe of verlaag
              tijdelijk de minimum matchscore.
            </p>
            <Link
              href="/collecties/luxe-familiehotels"
              className="mt-8 inline-flex rounded-full bg-[#171717] px-6 py-3 text-sm font-semibold text-white"
            >
              Bekijk andere collecties
            </Link>
          </div>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] bg-[#171717] p-8 text-white md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <Eyebrow light>Little Atlas Method</Eyebrow>
              <h2 className="text-4xl font-semibold tracking-tight">
                Hoe we deze selectie samenstellen
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <MethodCard
                title="Feed-data"
                text="We gebruiken neutrale velden zoals sterren, reviewscore, voorzieningen en locatie."
              />
              <MethodCard
                title="Family Intelligence"
                text="Daarbovenop berekenen we family fit per leeftijd en gezinssituatie."
              />
              <MethodCard
                title="Matchscore"
                text="Elke collectie heeft eigen regels en gewichten waarmee verblijven worden gerankt."
              />
              <MethodCard
                title="Affiliate-ready"
                text="Elke kaart kan direct doorklikken naar de beste beschikbare partner."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="mb-8 text-4xl font-semibold tracking-tight">FAQ</h2>

        <div className="space-y-4">
          <FaqCard
            question={`Hoe selecteert Little Atlas verblijven voor ${collection.title}?`}
            answer="We combineren feed-data zoals reviewscore, sterren, voorzieningen en locatie met onze eigen Family Intelligence Layer."
          />
          <FaqCard
            question="Zijn de prijzen realtime?"
            answer="In deze eerste versie gebruiken we prijsindicaties. Beschikbaarheid en actuele prijzen controleer je bij de aanbieder."
          />
          <FaqCard
            question="Waarom staat een verblijf hoger dan een ander?"
            answer="De volgorde wordt bepaald door matchscore, family score, reviewscore, reviewvolume en affiliatebeschikbaarheid."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="overflow-hidden rounded-[2.5rem] bg-[#171717] text-white">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 md:p-14">
              <Eyebrow light>Places Families Love</Eyebrow>

              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
                Vind een verblijf dat past bij jouw gezin
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Little Atlas combineert hoteldata, family-first criteria en
                premium selectie om gezinnen sneller de juiste plek te laten
                vinden.
              </p>

              <Link
                href="/collecties/luxe-familiehotels"
                className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#171717] transition hover:bg-white/90"
              >
                Bekijk meer collecties
              </Link>
            </div>

            <div className="relative min-h-[320px]">
              <Image
                src={heroImage}
                alt={collection.title}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover opacity-80"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full bg-[#faf7f2] px-4 py-2 text-sm text-black/70 ring-1 ring-black/10">
      {children}
    </span>
  );
}

function BadgeDark({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full bg-black/70 px-4 py-2 text-sm text-white backdrop-blur">
      {children}
    </span>
  );
}

function InfoCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-3xl bg-white/70 p-6 ring-1 ring-black/5">
      <p className="text-sm text-black/50">{title}</p>
      <p className="mt-3 text-xl font-semibold">{value}</p>
    </div>
  );
}

function MethodCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl bg-white/10 p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-3 leading-7 text-white/65">{text}</p>
    </div>
  );
}

function FaqCard({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="rounded-3xl bg-white/70 p-6 ring-1 ring-black/5">
      <h3 className="text-lg font-semibold">{question}</h3>
      <p className="mt-3 leading-7 text-black/70">{answer}</p>
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