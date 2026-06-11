import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#171717]">
      <section className="relative h-[80vh] overflow-hidden">
  <Image
    src="/hero.jpg"
    alt="Little Atlas"
    fill
    className="object-cover"
    priority
  />

  <div className="absolute inset-0 bg-black/30" />

  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
    <p className="mb-5 text-sm uppercase tracking-[0.35em]">
      Places Families Love
    </p>

    <h1 className="mb-6 text-7xl font-bold">
      Little Atlas
    </h1>

    <p className="max-w-3xl text-2xl">
      Ontdek de mooiste bestemmingen en verblijven voor gezinnen.
    </p>

    <button className="mt-8 rounded-full bg-white text-black px-8 py-4 text-lg">
      Ontdek plekken
    </button>
  </div>
</section>

<section className="mx-auto max-w-6xl px-6 pt-12 pb-24">
  <h2 className="mb-10 text-3xl font-semibold">
  Vind jullie perfecte vakantie
  </h2>

  <div className="grid gap-6 md:grid-cols-3">
  <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
    <div className="h-24 bg-[#d8cfc3]" />
    <div className="p-8">
      <p className="mb-3 text-sm uppercase tracking-[0.25em] text-gray-400">
        Step 01
      </p>
      <h3 className="mb-4 text-2xl font-semibold">Vacation Types</h3>
      <ul className="space-y-2 text-gray-600">
        <li>Strandvakantie met kinderen</li>
        <li>Actieve gezinsvakantie</li>
        <li>Eerste vakantie met baby</li>
        <li>Rondreis met kinderen</li>
        <li>Luxe familievakantie</li>
      </ul>
    </div>
  </div>

  <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
    <div className="h-24 bg-[#c8d6d9]" />
    <div className="p-8">
      <p className="mb-3 text-sm uppercase tracking-[0.25em] text-gray-400">
        Step 02
      </p>
      <h3 className="mb-4 text-2xl font-semibold">Destinations</h3>
      <ul className="space-y-2 text-gray-600">
        <li>Mallorca</li>
        <li>Toscane</li>
        <li>Algarve</li>
        <li>Zuid-Tirol</li>
        <li>Zeeland</li>
      </ul>
    </div>
  </div>

  <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
    <div className="h-24 bg-[#d9d1c7]" />
    <div className="p-8">
      <p className="mb-3 text-sm uppercase tracking-[0.25em] text-gray-400">
        Step 03
      </p>
      <h3 className="mb-4 text-2xl font-semibold">Stays</h3>
      <ul className="space-y-2 text-gray-600">
        <li>Zafiro Palace Mallorca</li>
        <li>Martinhal Sagres</li>
        <li>Landal Miggelenberg</li>
        <li>Falkensteiner Family Resort</li>
        <li>Glamping aan zee</li>
      </ul>
    </div>
  </div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 pb-24">
  <h2 className="mb-10 text-4xl font-semibold">
    Populaire bestemmingen
  </h2>

  <div className="grid gap-6 md:grid-cols-3">

    <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
      <div className="h-80 bg-[#d7d0c5]" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold">Mallorca</h3>
        <p className="mt-2 text-gray-600">
          Zon, stranden en kindvriendelijke resorts.
        </p>
      </div>
    </div>

    <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
      <div className="h-80 bg-[#c8d6d9]" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold">Toscane</h3>
        <p className="mt-2 text-gray-600">
          Italiaanse charme, zwembaden en natuur.
        </p>
      </div>
    </div>

    <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
      <div className="h-80 bg-[#d9d1c7]" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold">Algarve</h3>
        <p className="mt-2 text-gray-600">
          Prachtige stranden en veel familieresorts.
        </p>
      </div>
    </div>

  </div>
</section>

    </main>
  );
}