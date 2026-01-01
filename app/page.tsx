export default function Home() {
  return (
    <main className="pt-24 bg-black text-white min-h-screen">

      {/* HERO / TOPO */}
      <section
        id="inicio"
        className="flex flex-col items-center justify-center text-center min-h-[90vh] px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
          Solution <span className="text-blue-500">Eletronic</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 animate-fadeIn">
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
        className="py-24 px-6 bg-gradient-to-b from-black to-gray-900"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Nossos <span className="text-blue-500">Serviços</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white/5 p-8 rounded-xl hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-3">
              Segurança Eletrônica
            </h3>
            <p className="text-sm text-gray-300">
              Sistemas de câmeras, alarmes e monitoramento inteligente.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-xl hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-3">
              Controle de Acesso
            </h3>
            <p className="text-sm text-gray-300">
              Biometria, fechaduras eletrônicas, portas, portões e cancelas.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-xl hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-3">
              Suporte Técnico
            </h3>
            <p className="text-sm text-gray-300">
              Manutenção em computadores, placas eletrônicas e sistemas.
            </p>
          </div>

        </div>
      </section>

      {/* CHAMADA FINAL */}
      <section className="py-24 px-6 text-center bg-black">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Precisa de uma solução confiável?
        </h2>

        <p className="text-gray-300 mb-8">
          Atendemos Manaus e região com tecnologia e compromisso.
        </p>

        <a
          href="https://wa.me/5592985080617"
          target="_blank"
          className="inline-block bg-green-500 hover:bg-green-400 text-black px-10 py-4 rounded-full font-semibold transition"
        >
          Solicitar Orçamento
        </a>
      </section>

      {/* RODAPÉ */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} Solution Eletronic — Todos os direitos reservados
        </p>
        <p className="mt-2">
          Tecnologia que protege. Soluções que conectam.
        </p>
      </footer>

    </main>
  );
}