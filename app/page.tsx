// Importa o componente Image do Next.js para otimização de imagens
import Image from "next/image";

// Define e exporta o componente principal da página (Home)
export default function Home() {
  return (
    // Tag semântica principal da página
    // pt-24: padding-top
    // bg-black: fundo preto
    // text-white: texto branco
    <main className="pt-24 bg-black text-white">

      {/* ================= HERO SECTION ================= */}
      <section
        // max-w-7xl: largura máxima
        // mx-auto: centraliza horizontalmente
        // px-6 py-20: espaçamento interno
        // grid: layout em grid
        // md:grid-cols-2: duas colunas a partir do breakpoint md
        // gap-12: espaço entre colunas
        // items-center: centraliza verticalmente
        className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center"
      >

        {/* ===== TEXTO DO HERO ===== */}
        <div
          // space-y-6: espaçamento vertical automático entre elementos
          // animate-fadeIn: animação de entrada
          className="space-y-6 animate-fadeIn"
        >
          <h1
            // text-4xl: tamanho do texto no mobile
            // md:text-5xl: tamanho maior em telas médias
            // font-bold: negrito
            // leading-tight: espaçamento compacto entre linhas
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            {/* Texto principal */}
            Tecnologia que protege. <br />

            {/* Destaque em azul */}
            <span className="text-blue-500">
              Soluções que conectam.
            </span>
          </h1>

          <p
            // text-gray-300: cinza claro
            // text-lg: fonte maior para leitura
            className="text-gray-300 text-lg"
          >
            Segurança eletrônica, controle de acesso, automação e soluções
            tecnológicas sob medida para residências e empresas.
          </p>

          {/* ===== BOTÕES ===== */}
          <div
            // flex: ativa flexbox
            // flex-col: empilha no mobile
            // sm:flex-row: lado a lado em telas maiores
            // gap-4: espaço entre botões
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* Botão WhatsApp */}
            <a
              // Link direto para o WhatsApp
              href="https://wa.me/5592985080617"
              // Abre em nova aba
              target="_blank"
              // bg-green-500: fundo verde
              // hover:bg-green-600: escurece no hover
              // text-black: texto preto
              // font-semibold: seminegrito
              // px-6 py-3: padding
              // rounded-lg: bordas arredondadas
              // transition: animação suave
              className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-lg text-center transition"
            >
              Falar no WhatsApp
            </a>

            {/* Botão âncora para serviços */}
            <a
              // Link interno para a seção serviços
              href="#servicos"
              // Botão com borda
              className="border border-gray-600 hover:border-white px-6 py-3 rounded-lg text-center transition"
            >
              Nossos Serviços
            </a>
          </div>
        </div>

        {/* ===== LOGO EM DESTAQUE ===== */}
        <div
          // flex: layout flexível
          // justify-center: centraliza no mobile
          // md:justify-end: alinha à direita em telas médias
          // animate-fadeIn: animação
          className="flex justify-center md:justify-end animate-fadeIn"
        >
          <div
            // bg-transparent: fundo transparente
            // p-6: espaçamento interno
            className="bg-transparent p-6 nimete-logo"
          >
            <Image
              // Caminho da imagem
              src="/logo.png"
              // Texto alternativo (SEO e acessibilidade)
              alt="Solution Eletronic"
              // Dimensões base da imagem
              width={600}
              height={600}
              // Prioriza o carregamento da imagem
              priority
              // Tamanhos responsivos
              className="
                w-72
                sm:w-80
                md:w-[420px]
                lg:w-[500px]
                h-auto
              "
            />
          </div>
        </div>
      </section>

      {/* ================= SERVIÇOS ================= */}
      <section
        // id usado para navegação por âncora
        id="servicos"
        // bg-zinc-900: fundo cinza escuro
        // py-24 px-6: espaçamento
        // animate-fadeIn: animação
        className="bg-zinc-900 py-24 px-6 animate-fadeIn"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            // Título da seção
            className="text-3xl font-bold mb-14 text-center"
          >
            Nossos Serviços
          </h2>

          <div
            // Grid responsivo
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {[
              "Câmeras de Segurança",
              "Controle de Acesso",
              "Automação de Portões",
              "Manutenção Eletrônica",
              "Redes e Informática",
              "Soluções Personalizadas",
            ].map((servico, index) => (
              <div
                // key obrigatório para listas no React
                key={index}
                // Estilo do card
                className="bg-black border border-zinc-700 rounded-xl p-6 hover:border-blue-500 transition"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {servico}
                </h3>
                <p className="text-gray-400 text-sm">
                  Tecnologia moderna com instalação profissional e suporte
                  especializado.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section
        // Espaçamento e centralização
        className="py-24 text-center px-6 animate-fadeIn"
      >
        <h2 className="text-3xl font-bold mb-4">
          Precisa de uma solução agora?
        </h2>

        <p className="text-gray-400 mb-8">
          Fale direto no WhatsApp e solicite um orçamento sem compromisso.
        </p>

        <a
          // Link final para WhatsApp
          href="https://wa.me/5592985080617"
          target="_blank"
          // Botão CTA
          className="inline-block bg-green-500 hover:bg-green-600 text-black font-semibold px-10 py-4 rounded-xl transition"
        >
          Chamar no WhatsApp
        </a>
      </section>
    </main>
  );
}
