[12:33 PM, 01/01/2026] solucoes.ti.am@gmail.com: import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "SolutionEletronic | Segurança Eletrônica em Manaus",
  description:
    "SolutionEletronic oferece soluções em segurança eletrônica, CFTV, controle de acesso, biometria e tecnologia em Manaus-AM.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
[12:46 PM, 01/01/2026] solucoes.ti.am@gmail.com: import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen">

      {/* HERO PREMIUM */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 animate-fadeIn">
        <Image
          src="/logo.png"
          alt="SolutionEletronic"
          width={150}
          height={150}
          className="mb-8"
        />

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Solution<span className="text-blue-500">Eletronic</span>
        </h1>

        <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-3xl">
          Tecnologia que protege. Soluções que conectam.
        </p>

        <div className="flex flex-col md:flex-row gap-4 text-gray-400">
          <span>📍 Manaus - AM</span>
          <span>📞 (55) 92 98508-0617</span>
        </div>

        <a
          href="/servicos"
          className="mt-10 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 transition font-bold"
        >
          Conheça nossos serviços
        </a>
      </section>

      {/* SERVIÇOS PREMIUM */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-14">
          Soluções Profissionais
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Card title="CFTV Inteligente" icon="📹">
            Monitoramento moderno com alta definição e acesso remoto.
          </Card>

          <Card title="Controle de Acesso" icon="🔐">
            Biometria, cartões, fechaduras e automação de portões.
          </Card>

          <Card title="Suporte Técnico" icon="🛠️">
            Manutenção especializada em eletrônica e informática.
          </Card>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-blue-600 text-black text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-6">
          Proteja seu patrimônio hoje
        </h2>
        <p className="text-xl mb-8">
          Fale com um especialista da SolutionEletronic
        </p>

        <a
          href="https://wa.me/5592985080617"
          target="_blank"
          className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition"
        >
          💬 WhatsApp
        </a>
      </section>

      {/* BOTÃO WHATSAPP FIXO */}
      <a
        href="https://wa.me/5592985080617"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-black px-5 py-4 rounded-full shadow-2xl text-xl"
      >
        💬
      </a>

    </main>
  );
}

function Card({
  title,
  icon,
  children,
}: {
  title: string;
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-900/70 backdrop-blur rounded-2xl p-8 text-center hover:scale-105 transition shadow-lg">
      <div className="text-5xl mb-6">{icon}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300">{children}</p>
    </div>
  );
}