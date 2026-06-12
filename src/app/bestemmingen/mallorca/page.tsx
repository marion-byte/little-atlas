import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "Bestemmingen", href: "/bestemmingen" },
  { label: "Verblijven", href: "/verblijven" },
  { label: "Inspiratie", href: "/inspiratie" },
];

const destination = {
  name: "Mallorca",
  image: "/mallorca.jpg",
  subtitle: "Zon, baaien, familieresorts en mediterrane dorpen op korte vliegafstand.",
  introTitle: "Mallorca is makkelijk, zonnig en verrassend veelzijdig.",
  introText:
    "Mallorca is ideaal voor gezinnen die strand, comfort en afwisseling zoeken. Je vindt er rustige baaien, kindvriendelijke resorts, charmante dorpen en genoeg uitstapjes om stranddagen af te wisselen.",
  introTextSecond:
    "Vooral het noorden, oosten en zuidwesten van het eiland zijn fijn met kinderen: overzichtelijk, goed bereikbaar en met veel keuze in familievriendelijke verblijven.",
  idealFor: [
    ["Baby’s", "Korte vlucht, goede infrastructuur en veel hotels met babyfaciliteiten."],
    ["Peuters", "Ondiep water, rustige stranden en zwembaden maken Mallorca heel toegankelijk."],
    ["Schoolgaande kinderen", "Boottochten, grotten, dorpjes en natuur zorgen voor afwisseling."],
    ["Tieners", "Watersport, beachclubs en levendige badplaatsen geven genoeg vrijheid."],
  ],
  regions: [
    ["Noord-Mallorca", "Alcúdia en Playa de Muro zijn perfect met jonge kinderen door brede stranden en ondiep water."],
    ["Oostkust", "Cala d’Or en omgeving bieden kleine baaien, familieresorts en een ontspannen sfeer."],
    ["Zuidwesten", "Meer luxe, kortere transfer vanaf Palma en veel stijlvolle hotels voor gezinnen."],
  ],
  collections: [
    {
      title: "Luxe familieverblijven",
      items: [
        ["Zafiro Palace Mallorca", "Luxe familiehotel met zwembaden, ruime suites en veel comfort."],
        ["Ikos Porto Petro", "Premium resort aan zee met gemak, service en familiesuites."],
        ["Cap Vermell Grand Hotel", "Stijlvol verblijf voor gezinnen die luxe en rust zoeken."],
      ],
    },
    {
      title: "Villa’s & vakantiehuizen",
      items: [
        ["Villa met privézwembad", "Alle ruimte voor het gezin, met je eigen zwembad."],
        ["Finca tussen de olijfbomen", "Rustig, sfeervol en perfect voor slow family travel."],
        ["Familievilla aan zee", "Voor gezinnen die privacy en strand willen combineren."],
      ],
    },
    {
      title: "Boutique verblijven",
      items: [
        ["Kleinschalig hotel bij Sóller", "Voor gezinnen die charme en sfeer belangrijk vinden."],
        ["Design finca in het binnenland", "Rust, stijl en ruimte weg van de drukte."],
        ["Boutique hotel aan een baai", "Compact, persoonlijk en dicht bij zee."],
      ],
    },
    {
      title: "Campings & glamping",
      items: [
        ["Glamping tussen de pijnbomen", "Buitenleven met comfort en ruimte voor kinderen."],
        ["Safari tent met zwembad", "Avontuurlijk slapen zonder in te leveren op gemak."],
        ["Natuurcamping bij de kust", "Eenvoudig, vrij en dicht bij strand en natuur."],
      ],
    },
    {
      title: "Verblijven direct aan het strand",
      items: [
        ["Hotel aan Playa de Muro", "Fijn voor jonge kinderen door het ondiepe water."],
        ["Appartement aan zee", "Praktisch, flexibel en ideaal met kleine kinderen."],
        ["Resort aan een baai", "Strand, zwembad en restaurants dichtbij."],
      ],
    },
    {
      title: "Beste family resorts",
      items: [
        ["Resort met kidsclub", "Veel faciliteiten voor kinderen en comfort voor ouders."],
        ["All-suite familieresort", "Ruime kamers en genoeg plek voor langere vakanties."],
        ["Resort met meerdere zwembaden", "Ideaal voor gezinnen die vooral willen ontspannen."],
      ],
    },
  ],
  notes: [
    ["Beste periode", "Mei, juni en september zijn ideaal: warm, zonnig en minder druk."],
    ["Niet missen", "Playa de Muro, Cala Mondragó, Sóller en een boottocht langs de kust."],
    ["Handig om te weten", "Een huurauto maakt het makkelijker om baaien en dorpen te ontdekken."],
  ],
  places: [
    ["Playa de Muro", "Breed zandstrand met ondiep water, perfect voor jonge kinderen."],
    ["Cala Mondragó", "Een van de mooiste baaien van Mallorca, gelegen in een natuurpark."],
    ["Sóller", "Sfeervol stadje tussen de bergen, leuk te combineren met de historische trein."],
  ],
  thingsToDo: [
    ["Boottocht langs de kust", "Ontdek baaien die vanaf land minder makkelijk bereikbaar zijn."],
    ["Grotten van Drach", "Een klassiek uitstapje met ondergrondse meren en veel verwondering."],
    ["Trein naar Sóller", "Een ontspannen dagtrip met kinderen door het berglandschap."],
    ["Markt in Santanyí", "Sfeer, lokale producten en een fijne ochtend tussen de locals."],
  ],
  faqs: [
    ["Is Mallorca geschikt met jonge kinderen?", "Ja, vooral het noorden is heel geschikt door de brede stranden, korte afstanden en goede voorzieningen."],
    ["Heb je een huurauto nodig op Mallorca?", "Niet altijd, maar een auto geeft veel vrijheid om baaien, dorpen en rustige plekken te ontdekken."],
    ["Wat is de beste regio voor gezinnen?", "Alcúdia, Playa de Muro, Cala d’Or en het zuidwesten zijn populaire keuzes voor gezinnen."],
  ],
};

export default function MallorcaPage() {
  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#171717]">
      <header className="absolute left-0 top-0 z-50 w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
          <Link href="/" className="text-3xl font-semibold text-white">
            Little Atlas
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-white md:flex">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/verblijven"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
          >
            Bekijk verblijven
          </Link>
        </div>
      </header>

      <section className="relative h-[72vh] overflow-hidden">
        <Image src={destination.image} alt={`${destination.name} met kinderen`} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
          <p className="mb-5 text-sm uppercase tracking-[0.35em]">Family Destination</p>
          <h1 className="mb-6 text-6xl font-bold md:text-7xl">{destination.name} met kinderen</h1>
          <p className="max-w-3xl text-2xl">{destination.subtitle}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">Waarom gaan</p>
          <h2 className="text-5xl font-semibold leading-tight">{destination.introTitle}</h2>
        </div>
        <div className="text-lg leading-8 text-gray-600">
          <p>{destination.introText}</p>
          <p className="mt-6">{destination.introTextSecond}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="mb-10 text-4xl font-semibold">Voor welk gezin is deze bestemming ideaal?</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {destination.idealFor.map(([title, text]) => (
            <div key={title} className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">{title}</h3>
              <p className="text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm md:grid md:grid-cols-2">
          <div className="relative h-96 md:h-auto">
            <Image src={destination.image} alt={`${destination.name} landschap`} fill className="object-cover" />
          </div>
          <div className="p-10 md:p-14">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-400">Waar verblijf je het beste?</p>
            <h2 className="mb-8 text-4xl font-semibold">Kies de regio die past bij jullie manier van reizen.</h2>
            <div className="space-y-6 text-gray-600">
              {destination.regions.map(([title, text]) => (
                <div key={title}>
                  <h3 className="mb-2 text-2xl font-semibold text-[#171717]">{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {destination.collections.map((section) => (
        <section key={section.title} className="mx-auto max-w-7xl px-6 pb-24">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-400">Little Atlas Selection</p>
          <h2 className="mb-10 text-4xl font-semibold">{section.title}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {section.items.map(([title, text]) => (
              <article key={title} className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <Image src={destination.image} alt={title} width={700} height={500} className="h-80 w-full object-cover" />
                <div className="p-7">
                  <h3 className="mb-3 text-2xl font-semibold">{title}</h3>
                  <p className="text-gray-600">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2rem] bg-white p-10 shadow-sm md:p-14">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-400">Little Atlas Notes</p>
          <h2 className="mb-10 text-4xl font-semibold">Fijn om te weten voor je boekt</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {destination.notes.map(([title, text]) => (
              <div key={title}>
                <h3 className="mb-3 text-2xl font-semibold">{title}</h3>
                <p className="text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="mb-10 text-4xl font-semibold">Mooiste stranden en plekken voor gezinnen</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {destination.places.map(([title, text]) => (
            <article key={title} className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <Image src={destination.image} alt={title} width={700} height={500} className="h-72 w-full object-cover" />
              <div className="p-7">
                <h3 className="mb-3 text-2xl font-semibold">{title}</h3>
                <p className="text-gray-600">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="mb-10 text-4xl font-semibold">Leuke dingen om te doen</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {destination.thingsToDo.map(([title, text]) => (
            <div key={title} className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">{title}</h3>
              <p className="text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <h2 className="mb-10 text-4xl font-semibold">Veelgestelde vragen</h2>
        <div className="space-y-4">
          {destination.faqs.map(([question, answer]) => (
            <div key={question} className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">{question}</h3>
              <p className="text-gray-600">{answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2rem] bg-[#171717] p-10 text-center text-white md:p-16">
          <h2 className="mb-6 text-5xl font-semibold">Klaar om {destination.name} te ontdekken?</h2>
          <Link href="/" className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-medium text-black">
            Bekijk verblijven
          </Link>
        </div>
      </section>
    </main>
  );
}