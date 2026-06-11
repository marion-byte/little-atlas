export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold mb-6">
        Little Atlas
      </h1>

      <p className="text-xl text-gray-600 mb-8">
        Discover family-friendly places around you.
      </p>

      <button className="bg-black text-white px-6 py-3 rounded-xl">
        Get Started
      </button>
    </main>
  );
}