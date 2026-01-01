export default function Servicos() {
  return (
    <main className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-10 text-center">
          Nossos Serviços
        </h1>

        <Service
          title="📹 Câmeras de Segurança (CFTV)"
          text="Instalação, configuração e manutenção de sistemas de monitoramento residencial, comercial e empresarial."
        />

        <Service
          title="🔐 Controle de Acesso"
          text="Controle de acesso por biometria, cartões, senhas, fechaduras eletrônicas, portões e cancelas."
        />

        <Service
          title="🛠️ Manutenção Técnica"
          text="Conserto de placas eletrônicas, manutenção em computadores, ajustes e configurações técnicas."
        />

        <Service
          title="⚡ Eletrônica Aplicada"
          text="Soluções personalizadas em eletrônica aplicada à segurança e automação."
        />

      </div>
    </main>
  );
}

function Service({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 mb-6 hover:scale-[1.02] transition">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-300">{text}</p>
    </div>
  );
}