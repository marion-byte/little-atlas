export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#171717]">
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <p className="mb-5 text-sm uppercase tracking-[0.35em] text-gray-500">
          Places Families Love
        </p>

        <h1 className="mb-6 text-6xl font-bold tracking-tight">
          Little Atlas
        </h1>

        <p className="mx-auto mb-10 max-w-3xl text-2xl leading-relaxed text-gray-700">
          Ontdek de mooiste bestemmingen, hotels en uitjes voor gezinnen.
        </p>

        <button className="rounded-full bg-black px-8 py-4 text-lg text-white">
          Ontdek plekken
        </button>
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