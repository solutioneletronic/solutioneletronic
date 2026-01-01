export default function Home() {
  return (
    <main className="min-h-screen pt-24 bg-black text-white flex flex-col items-center justify-center text-center px-6">

      <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
        Solution <span className="text-blue-500">Eletronic</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-300 max-w-2xl animate-fadeIn">
        Tecnologia que protege. Soluções que conectam.
      </p>

      <a
        href="https://wa.me/5592985080617"
        target="_blank"
        className="mt-8 bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-4 rounded-full transition"
      >
        Falar no WhatsApp
      </a>

    </main>
  );
}