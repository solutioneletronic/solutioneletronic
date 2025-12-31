export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Solution<span className="text-blue-500">Eletronic</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-6">
          Tecnologia que protege. Soluções que conectam.
        </p>

        <div className="text-gray-400 space-y-2">
          <p>📍 Manaus - AM</p>
          <p>📞 (55) 92 98508-0617</p>
          <p>🔐 Segurança Eletrônica & Tecnologia</p>
        </div>
      </div>
    </main>
  );
}