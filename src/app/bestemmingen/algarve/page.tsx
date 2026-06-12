import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "Bestemmingen", href: "/bestemmingen" },
  { label: "Verblijven", href: "/verblijven" },
  { label: "Inspiratie", href: "/inspiratie" },
];

const destination = {
  name: "Algarve",
  image: "/algarve.jpeg",
  subtitle: "Gouden stranden, rustige baaien, kliffen en ontspannen familieresorts.",
  introTitle: "De Algarve is zonnig, overzichtelijk en heel fijn met kinderen.",
  introText:
    "De Algarve is ideaal voor gezinnen die strand, comfort en een rustig reistempo willen combineren. Je vindt er brede zandstranden, beschutte baaien, charmante kustplaatsen en veel familievriendelijke resorts.",
  introTextSecond:
    "Vooral de centrale en westelijke Algarve zijn populair bij gezinnen: veel keuze in verblijven, mooie stranden en genoeg uitstapjes zonder lange reisdagen.",
  idealFor: [
    ["Baby’s", "Rustige resorts, korte afstanden en veel verblijven met familiefaciliteiten."],
    ["Peuters", "Zandstranden, zwembaden en beschutte baaien maken het makkelijk reizen."],
    ["Schoolgaande kinderen", "Boottochten, grotten, stranden en dorpjes zorgen voor afwisseling."],
    ["Tieners", "Surflessen, kustplaatsen en actieve uitstapjes maken de Algarve leuk voor oudere kinderen."],
  ],
  regions: [
    ["Lagos & omgeving", "Mooi voor gezinnen die stranden, stadje, restaurants en boottochten willen combineren."],
    ["Carvoeiro", "Gezellig, compact en fijn als je dicht bij baaien en familievriendelijke stranden wilt zitten."],
    ["Sagres", "Rustiger, ruiger en ideaal voor gezinnen die natuur, ruimte en zee zoeken."],
  ],
  collections: [
    {
      title: "Luxe familieverblijven",
      items: [
        ["Martinhal Sagres Beach Family Resort", "Premium familieresort aan zee met veel comfort en ruimte."],
        ["Vila Vita Parc", "Luxe resort met strand, zwembaden en veel faciliteiten voor gezinnen."],
        ["Pine Cliffs Resort", "Stijlvol verblijf boven de kliffen met suites en familievilla’s."],
      ],
    },
    {
      title: "Villa’s & vakantiehuizen",
      items: [
        ["Villa met privézwembad", "Ideaal voor gezinnen die vrijheid, privacy en ruimte zoeken."],
        ["Familievilla bij de kust", "Strand dichtbij en toch alle rust van een eigen verblijf."],
        ["Vakantiehuis met tuin", "Fijn voor jonge kinderen die buiten willen spelen."],
      ],
    },
    {
      title: "Boutique verblijven",
      items: [
        ["Boutique hotel in Lagos", "Sfeervol verblijf met restaurants en stranden dichtbij."],
        ["Kleinschalig kusthotel", "Persoonlijk, rustig en ideaal voor gezinnen die sfeer zoeken."],
        ["Design verblijf bij de kliffen", "Modern comfort met uitzicht en een ontspannen sfeer."],
      ],
    },
    {
      title: "Campings & glamping",
      items: [
        ["Glamping bij de kust", "Buitenleven met comfort en stranden op rijafstand."],
        ["Safaritent onder de pijnbomen", "Avontuurlijk slapen met genoeg gemak voor gezinnen."],
        ["Natuurcamping in West-Algarve", "Rustiger, ruiger en fijn voor gezinnen die buiten willen zijn."],
      ],
    },
    {
      title: "Verblijven direct aan het strand",
      items: [
        ["Appartement aan zee", "Praktisch, flexibel en ideaal voor gezinnen met kleine kinderen."],
        ["Resort bij een beschutte baai", "Strand, zwembad en restaurants binnen handbereik."],
        ["Boutique hotel aan de kust", "Kleinschalig, sfeervol en comfortabel voor gezinnen."],
      ],
    },
    {
      title: "Beste family resorts",
      items: [
        ["Resort met kidsclub", "Veel faciliteiten voor kinderen en rust voor ouders."],
        ["All-inclusive familieresort", "Makkelijk reizen met maaltijden, zwembad en entertainment geregeld."],
        ["Resort met ruime appartementen", "Ideaal voor gezinnen die comfort en flexibiliteit zoeken."],
      ],
    },
  ],
  notes: [
    ["Beste periode", "Mei, juni en september zijn ideaal: zonnig, warm en minder druk."],
    ["Niet missen", "Ponta da Piedade, Benagil, Praia da Marinha en een boottocht langs de kust."],
    ["Handig om te weten", "Een huurauto is handig als je meerdere stranden en kustplaatsen wilt ontdekken."],
  ],
  places: [
    ["Praia da Marinha", "Een van de bekendste stranden van de Algarve, met kliffen en helder water."],
    ["Ponta da Piedade", "Spectaculaire rotsformaties bij Lagos, mooi vanaf het water of de wandelpaden."],
    ["Praia do Camilo", "Kleine baai bij Lagos met trappen, uitzicht en een intieme strandsfeer."],
  ],
  thingsToDo: [
    ["Boottocht naar grotten", "Een klassiek Algarve-uitstapje dat kinderen vaak geweldig vinden."],
    ["Surflessen volgen", "Vooral rond Sagres en de westkust leuk met oudere kinderen."],
    ["Dolfijnen spotten", "Een bijzondere activiteit op zee, vooral bij rustig weer."],
    ["Avondwandeling in Lagos", "Terrassen, ijsjes en een ontspannen vakantiesfeer."],
  ],
  faqs: [
    ["Is de Algarve geschikt met jonge kinderen?", "Ja, vooral door de stranden, resorts, korte afstanden en ontspannen sfeer."],
    ["Welke plek is fijn voor gezinnen?", "Lagos, Carvoeiro en Sagres zijn goede keuzes, afhankelijk van hoeveel levendigheid of rust je zoekt."],
    ["Heb je een huurauto nodig in de Algarve?", "Niet altijd, maar een auto maakt het veel makkelijker om stranden, baaien en dorpen te combineren."],
  ],
};

export default function AlgarvePage() {
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
          <Link href="/verblijven" className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-medium text-black">
            Bekijk verblijven
          </Link>
        </div>
      </section>
    </main>
  );
}