import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 animate-fadeIn">
        <Image
          src="/logo.png"
          alt="SolutionEletronic"
          width={140}
          height={140}
          className="mb-6"
        />

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Solution<span className="text-blue-500">Eletronic</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-6">
          Tecnologia que protege. Soluções que conectam.
        </p>

        <p className="text-gray-400">
          📍 Manaus - AM • 📞 (55) 92 98508-0617
        </p>
      </section>

      {/* SERVIÇOS */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Nossos Serviços
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Service icon="📹" title="Câmeras de Segurança">
            Monitoramento, instalação e manutenção de CFTV.
          </Service>

          <Service icon="🔐" title="Controle de Acesso">
            Biometria, cartões, fechaduras e portões eletrônicos.
          </Service>

          <Service icon="🛠️" title="Manutenção Técnica">
            Conserto de placas, computadores e sistemas eletrônicos.
          </Service>
        </div>
      </section>

      {/* CONTATO */}
      <section className="bg-black/40 px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Contato</h2>

        <p className="text-gray-300 mb-2">📞 WhatsApp: (55) 92 98508-0617</p>
        <p className="text-gray-300 mb-6">📍 Manaus - Amazonas</p>

        <a
          href="https://wa.me/5592985080617"
          target="_blank"
          className="inline-block bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-3 rounded-full transition"
        >
          💬 Falar no WhatsApp
        </a>
      </section>

      {/* BOTÃO WHATSAPP FIXO */}
      <a
        href="https://wa.me/5592985080617"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-black px-4 py-3 rounded-full shadow-lg text-lg"
      >
        💬
      </a>

    </main>
  );
}

/* COMPONENTE SERVIÇO */
function Service({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 text-center hover:scale-105 transition">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{children}</p>
    </div>
  );
}