import Image from "next/image"

export default function Home() {
  return (
    <main className="pt-24 bg-black text-white">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Tecnologia que protege. <br />
            <span className="text-blue-500">Soluções que conectam.</span>
          </h1>

          <p className="text-gray-300 text-lg">
            Segurança eletrônica, controle de acesso, automação e soluções tecnológicas sob medida para residências e
            empresas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5592985080617"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-lg text-center transition"
              rel="noreferrer"
            >
              Falar no WhatsApp
            </a>

            <a
              href="#servicos"
              className="border border-gray-600 hover:border-white px-6 py-3 rounded-lg text-center transition"
            >
              Nossos Serviços
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end animate-fadeIn">
          <div className="bg-transparent p-6">
            <Image
              src="/images/favicon.png"
              alt="Solution Eletronic"
              width={600}
              height={600}
              priority
              className="w-72 sm:w-80 md:w-[420px] lg:w-[500px] h-auto"
            />
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="bg-zinc-900 py-24 px-6 animate-fadeIn">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-14 text-center">Nossos Serviços</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              "Câmeras de Segurança",
              "Controle de Acesso",
              "Automação de Portões",
              "Manutenção Eletrônica",
              "Redes e Informática",
              "Soluções Personalizadas",
            ].map((servico, index) => (
              <div
                key={index}
                className="bg-black border border-zinc-700 rounded-xl p-6 hover:border-blue-500 transition"
              >
                <h3 className="text-xl font-semibold mb-2">{servico}</h3>
                <p className="text-gray-400 text-sm">
                  Tecnologia moderna com instalação profissional e suporte especializado.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 text-center px-6 animate-fadeIn">
        <h2 className="text-3xl font-bold mb-4">Precisa de uma solução agora?</h2>

        <p className="text-gray-400 mb-8">Fale direto no WhatsApp e solicite um orçamento sem compromisso.</p>

        <a
          href="https://wa.me/5592985080617"
          target="_blank"
          className="inline-block bg-green-500 hover:bg-green-600 text-black font-semibold px-10 py-4 rounded-xl transition"
          rel="noreferrer"
        >
          Chamar no WhatsApp
        </a>
      </section>
    </main>
  )
}
