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
      Ontdek de mooiste bestemmingen, hotels en uitjes voor gezinnen.
    </p>

    <button className="mt-8 rounded-full bg-white text-black px-8 py-4 text-lg">
      Ontdek plekken
    </button>
  </div>
</section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="mb-8 text-3xl font-semibold">
          Waar ben je naar op zoek?
        </h2>

        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="mb-6 text-4xl">🏨</div>
            <h3 className="mb-2 text-xl font-semibold">Hotels</h3>
            <p className="text-gray-600">
              Kindvriendelijke hotels die gezinnen écht fijn vinden.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="mb-6 text-4xl">🌍</div>
            <h3 className="mb-2 text-xl font-semibold">Bestemmingen</h3>
            <p className="text-gray-600">
              Van Mallorca tot Toscane: plekken die werken met kinderen.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="mb-6 text-4xl">🎡</div>
            <h3 className="mb-2 text-xl font-semibold">Uitjes</h3>
            <p className="text-gray-600">
              Leuke plekken voor een dag weg met het gezin.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="mb-6 text-4xl">🍴</div>
            <h3 className="mb-2 text-xl font-semibold">Restaurants</h3>
            <p className="text-gray-600">
              Eten op plekken waar ouders én kinderen blij van worden.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}