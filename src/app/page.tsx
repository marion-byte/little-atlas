import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#171717]">
      <header className="absolute left-0 top-0 z-50 w-full">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

    <Link
      href="/"
      className="text-3xl font-semibold tracking-tight text-white"
    >
      Little Atlas
    </Link>

    <nav className="hidden items-center gap-10 text-sm text-white md:flex">
      <Link href="/bestemmingen">Bestemmingen</Link>
      <Link href="/verblijven">Verblijven</Link>
      <Link href="/inspiratie">Inspiratie</Link>
    </nav>

    <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black">
      Plan jullie vakantie
    </button>

  </div>
</header>

      <section className="relative h-[80vh] overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="Little Atlas"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
          <p className="mb-5 text-sm uppercase tracking-[0.35em]">
            Places Families Love
          </p>

          <h1 className="mb-6 text-6xl font-bold md:text-7xl">
            Little Atlas
          </h1>

          <p className="max-w-3xl text-2xl">
            Ontdek de mooiste bestemmingen en verblijven voor gezinnen.
          </p>

          <Link
            href="/vakantie-planner"
            className="mt-8 rounded-full bg-white px-8 py-4 text-lg text-black"
          >
            Vind jullie volgende vakantie
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-12 pb-24">
        <h2 className="mb-10 text-3xl font-semibold">
          Vind jullie perfecte vakantie
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/vakantiesoorten"
            className="block overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-lg"
          >
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
          </Link>

          <Link
            href="/bestemmingen"
            className="block overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-lg"
          >
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
          </Link>

          <Link
            href="/verblijven"
            className="block overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-lg"
          >
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
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="mb-10 text-4xl font-semibold">
          Populaire bestemmingen
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/bestemmingen/mallorca"
            className="block overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-lg"
          >
            <div className="relative h-80">
              <Image
                src="/mallorca.jpg"
                alt="Mallorca"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold">Mallorca</h3>
              <p className="mt-2 text-gray-600">
                Zon, stranden en kindvriendelijke resorts.
              </p>
            </div>
          </Link>

          <Link
            href="/bestemmingen/toscane"
            className="block overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-lg"
          >
            <div className="relative h-80">
              <Image
                src="/toscane.jpeg"
                alt="Toscane"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold">Toscane</h3>
              <p className="mt-2 text-gray-600">
                Italiaanse charme, zwembaden en natuur.
              </p>
            </div>
          </Link>

          <Link
            href="/bestemmingen/algarve"
            className="block overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-lg"
          >
            <div className="relative h-80">
              <Image
                src="/algarve.jpeg"
                alt="Algarve"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold">Algarve</h3>
              <p className="mt-2 text-gray-600">
                Prachtige stranden en veel familieresorts.
              </p>
            </div>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="mb-10 text-4xl font-semibold">
          Uitgelichte verblijven
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/verblijven/zafiro-palace-mallorca"
            className="block overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-lg"
          >
            <Image
              src="/zafiro.jpg"
              alt="Zafiro Palace Mallorca"
              width={600}
              height={400}
              className="h-80 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="mb-2 text-2xl font-semibold">
                Zafiro Palace Mallorca
              </h3>
              <p className="text-gray-600">
                Luxe familiehotel met meerdere zwembaden.
              </p>
            </div>
          </Link>

          <Link
            href="/verblijven/martinhal-sagres"
            className="block overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-lg"
          >
            <Image
              src="/martinhal.jpg"
              alt="Martinhal Sagres"
              width={600}
              height={400}
              className="h-80 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="mb-2 text-2xl font-semibold">
                Martinhal Sagres
              </h3>
              <p className="text-gray-600">
                Eén van Europa&apos;s bekendste familiehotels.
              </p>
            </div>
          </Link>

          <Link
            href="/verblijven/falkensteiner-family-resort"
            className="block overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-lg"
          >
            <Image
              src="/falkensteiner.jpg"
              alt="Falkensteiner Family Resort"
              width={600}
              height={400}
              className="h-80 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="mb-2 text-2xl font-semibold">
                Falkensteiner Family Resort
              </h3>
              <p className="text-gray-600">
                Premium familieresort midden in de bergen.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}