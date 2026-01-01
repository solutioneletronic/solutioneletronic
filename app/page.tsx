export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center min-h-screen px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Solution <span className="text-blue-500">Eletronic</span>
        </h1>

        <p className="text-lg opacity-80 mb-8">
          Tecnologia que protege. Soluções que conectam.
        </p>

        <a
          href="https://wa.me/5592985080617"
          target="_blank"
          className="bg-green-500 hover:bg-green-400 text-black px-8 py-4 rounded-full font-semibold transition"
        >
          Falar no WhatsApp
        </a>
      </section>

      {/* SERVIÇOS */}
      <section
        id="servicos"
        className="bg-black text-white py-24 px-6"
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          Nossos <span className="text-blue-500">Serviços</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-2">Segurança Eletrônica</h3>
            <p className="text-sm opacity-80">
              Câmeras, alarmes e monitoramento inteligente.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-2">Controle de Acesso</h3>
            <p className="text-sm opacity-80">
              Biometria, fechaduras, portas e cancelas.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-2">Suporte Técnico</h3>
            <p className="text-sm opacity-80">
              Manutenção em computadores e placas eletrônicas.
            </p>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
        <p>© {new Date().getFullYear()} Solution Eletronic</p>
        <p>Tecnologia que protege. Soluções que conectam.</p>
      </footer>

    </main>
  );
}