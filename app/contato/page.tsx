export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* ================= INÍCIO ================= */}
      <section
        id="home"
        className="min-h-screen pt-24 px-6 flex items-center"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Solution Eletronic
            </h1>

            <p className="text-gray-300 mt-6 text-lg">
              Soluções em segurança eletrônica, controle de acesso e tecnologia
              aplicada para residências e empresas.
            </p>

            <a
              href="https://wa.me/5592985080617"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-4 rounded-xl transition"
            >
              Falar no WhatsApp
            </a>
          </div>

          <div className="hidden md:block">
            <div className="h-80 w-full rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-800/20 border border-blue-500/20 backdrop-blur" />
          </div>

        </div>
      </section>

      {/* ================= SERVIÇOS ================= */}
      <section
        id="servicos"
        className="min-h-screen pt-24 px-6 flex items-center"
      >
        <div className="max-w-7xl mx-auto w-full">
          
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Nossos Serviços
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition">
              <h3 className="text-xl font-semibold mb-3">
                Segurança Eletrônica
              </h3>
              <p className="text-gray-400">
                Instalação e manutenção de câmeras, alarmes e sistemas de
                monitoramento.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition">
              <h3 className="text-xl font-semibold mb-3">
                Controle de Acesso
              </h3>
              <p className="text-gray-400">
                Biometria, cartões, fechaduras eletrônicas e automação de portões.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition">
              <h3 className="text-xl font-semibold mb-3">
                Suporte Técnico
              </h3>
              <p className="text-gray-400">
                Manutenção em placas eletrônicas, computadores e sistemas.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CHAMADA FINAL ================= */}
      <section
        className="min-h-screen pt-24 px-6 flex items-center"
      >
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Precisa de uma solução sob medida?
          </h2>

          <p className="text-gray-300 text-lg mb-10">
            Entre em contato agora mesmo e solicite um orçamento sem compromisso.
          </p>

          <a
            href="https://wa.me/5592985080617"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-black font-semibold px-10 py-4 rounded-xl transition"
          >
            Atendimento via WhatsApp
          </a>

        </div>
      </section>

    </main>
  );
}