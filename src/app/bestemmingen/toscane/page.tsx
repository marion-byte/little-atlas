import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "Bestemmingen", href: "/bestemmingen" },
  { label: "Verblijven", href: "/verblijven" },
  { label: "Inspiratie", href: "/inspiratie" },
];

const destination = {
  name: "Toscane",
  image: "/toscane.jpeg",
  subtitle: "Heuvels, zwembaden, dorpjes en lange Italiaanse zomeravonden.",
  introTitle: "Toscane is langzaam reizen op z’n mooist.",
  introText:
    "Toscane is ideaal voor gezinnen die ruimte, rust en sfeer zoeken. Denk aan glooiende heuvels, zwembaden, dorpjes, lange lunches en verblijven waar kinderen gewoon buiten kunnen spelen.",
  introTextSecond:
    "Dit is geen bestemming voor een vol programma. Toscane werkt juist omdat je weinig hoeft en veel kunt: zwemmen, rondrijden, eten, marktjes bezoeken en samen buiten zijn.",
  idealFor: [
    ["Baby’s", "Rustige verblijven, veel buitenruimte en een ontspannen reistempo maken Toscane fijn met baby’s."],
    ["Peuters", "Zwembaden, tuinen en agriturismo’s geven peuters alle ruimte om te spelen."],
    ["Schoolgaande kinderen", "Dorpjes, ijsjes, kastelen, markten en natuur zorgen voor afwisseling."],
    ["Tieners", "Steden, stranddagen, kookworkshops en actieve uitstapjes maken Toscane ook leuk voor oudere kinderen."],
  ],
  regions: [
    ["Chianti", "Klassiek Toscane met heuvels, wijngaarden, dorpen en veel sfeervolle agriturismo’s."],
    ["Val d’Orcia", "Rust, uitzichten en fotogenieke plaatsen zoals Pienza, Montalcino en Montepulciano."],
    ["Toscaanse kust", "Fijn als je strand, natuur en een verblijf met zwembad wilt combineren."],
  ],
  collections: [
    {
      title: "Luxe familieverblijven",
      items: [
        ["Landgoed met familiesuites", "Toscaanse sfeer met comfort, service en veel buitenruimte."],
        ["Resort tussen de heuvels", "Zwembad, restaurant en uitzicht zonder dat het massaal voelt."],
        ["Historisch hotel met tuin", "Charmant verblijf voor gezinnen die stijl en rust zoeken."],
      ],
    },
    {
      title: "Villa’s & vakantiehuizen",
      items: [
        ["Villa met privézwembad", "Ideaal voor gezinnen die privacy en vrijheid zoeken."],
        ["Familievilla met uitzicht", "Lange avonden buiten met uitzicht over de heuvels."],
        ["Landhuis voor meerdere gezinnen", "Perfect als je met familie of vrienden reist."],
      ],
    },
    {
      title: "Boutique verblijven",
      items: [
        ["Kleinschalige agriturismo", "Persoonlijk, rustig en vol karakter."],
        ["Design verblijf in oude boerderij", "Modern comfort in een historische omgeving."],
        ["Boutique hotel bij een dorp", "Sfeervol verblijf met restaurants en pleinen dichtbij."],
      ],
    },
    {
      title: "Campings & glamping",
      items: [
        ["Glamping tussen olijfbomen", "Buitenleven met Toscaanse sfeer en comfort."],
        ["Safaritent met zwembad", "Avontuurlijk voor kinderen, ontspannen voor ouders."],
        ["Familiecamping in de natuur", "Ruimte, vrijheid en genoeg speelplekken."],
      ],
    },
    {
      title: "Verblijven midden in de natuur",
      items: [
        ["Agriturismo tussen de heuvels", "Rust, uitzicht en veel ruimte rondom het verblijf."],
        ["Boerderijverblijf met dieren", "Leuk voor jonge kinderen die graag buiten zijn."],
        ["Landgoed met wandelpaden", "Fijn voor gezinnen die natuur en comfort willen combineren."],
      ],
    },
    {
      title: "Beste vakantieparken en family resorts",
      items: [
        ["Resort met kinderzwembad", "Comfortabel verblijf met faciliteiten voor gezinnen."],
        ["Vakantiepark aan de kust", "Handig voor gezinnen die strand en zwembad willen combineren."],
        ["Familieresort bij een stad", "Een praktische basis voor uitstapjes en relaxdagen."],
      ],
    },
  ],
  notes: [
    ["Beste periode", "Mei, juni en september zijn ideaal: warm, groen en minder druk."],
    ["Niet missen", "Siena, San Gimignano, Val d’Orcia en een lange lunch op een agriturismo."],
    ["Handig om te weten", "Een auto is bijna onmisbaar als je Toscane goed wilt ontdekken."],
  ],
  places: [
    ["Val d’Orcia", "Een van de mooiste landschappen van Italië, met glooiende heuvels en cipressen."],
    ["San Gimignano", "Een sfeervol stadje met torens, pleinen en veel ijsmomenten."],
    ["Maremma", "Natuur, stranden en een wat rustiger kant van Toscane."],
  ],
  thingsToDo: [
    ["Bezoek Siena", "Compact genoeg voor een dag, indrukwekkend genoeg voor het hele gezin."],
    ["Zwemmen bij de agriturismo", "De beste Toscaanse dagen zijn vaak de langzaamste dagen."],
    ["Kookworkshop volgen", "Pasta maken is leuk, tastbaar en geschikt voor veel leeftijden."],
    ["Dorpjesroute rijden", "Stop voor koffie, ijs, uitzicht en kleine pleinen."],
  ],
  faqs: [
    ["Is Toscane geschikt met kinderen?", "Ja, vooral voor gezinnen die rust, ruimte, lekker eten en een ontspannen ritme zoeken."],
    ["Welke regio is het fijnst met kinderen?", "Chianti, Val d’Orcia en de Toscaanse kust zijn goede keuzes, afhankelijk van jullie reistempo."],
    ["Heb je een auto nodig in Toscane?", "Ja, voor de meeste gezinnen is een auto essentieel om dorpjes, stranden en verblijven goed te bereiken."],
  ],
};

export default function ToscanePage() {
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
        <h2 className="mb-10 text-4xl font-semibold">Mooiste natuurplekken en plekken voor gezinnen</h2>
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
          <Link href="/verblijven" className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-medium text-black">
            Bekijk verblijven
          </Link>
        </div>
      </section>
    </main>
  );
}