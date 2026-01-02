"use client"; 
// Diz ao Next.js que este componente roda no navegador (client-side)
// Obrigatório para usar useState, useEffect e eventos como scroll

import { useEffect, useState } from "react";
// useState  → cria estados (variáveis reativas)
// useEffect → executa código quando algo acontece (scroll, carregamento etc)

import Link from "next/link";
// Componente de link do Next.js (navegação otimizada)

import Image from "next/image";
// Componente otimizado para imagens (melhor performance)

/* ================= TIPOS ================= */
// Define quais seções existem no site
// Isso evita erros de digitação e ajuda o TypeScript
type Section = "home" | "servicos" | "contato";

/* ================= COMPONENTE NAVBAR ================= */
export default function Navbar() {

  /* ====== ESTADOS ====== */

  // Controla se o menu mobile está aberto ou fechado
  const [open, setOpen] = useState(false);

  // Controla se a página foi rolada (para mudar fundo da navbar)
  const [scrolled, setScrolled] = useState(false);

  // Controla qual item do menu está ativo (linha azul)
  const [active, setActive] = useState<Section>("home");

  // Evita que o scroll sobrescreva o clique do usuário
  const [manual, setManual] = useState(false);

  /* ================= EFEITO: SCROLL DO HEADER ================= */
  useEffect(() => {

    // Função que verifica se o usuário rolou a página
    const onScroll = () => {
      // Se rolou mais de 20px, ativa o estado "scrolled"
      setScrolled(window.scrollY > 20);
    };

    // Adiciona o evento de scroll
    window.addEventListener("scroll", onScroll);

    // Remove o evento quando o componente sair da tela
    return () => window.removeEventListener("scroll", onScroll);

  }, []);
  // [] vazio → executa apenas uma vez quando o componente carrega

  /* ================= EFEITO: SINCRONIZA HASH (#) ================= */
  useEffect(() => {

    // Função que verifica o hash da URL (#home, #servicos, #contato)
    const syncActive = () => {
      const hash = window.location.hash;

      if (hash === "#servicos") {
        setActive("servicos");
      } else if (hash === "#contato") {
        setActive("contato");
      } else {
        // Se não tiver hash, considera como Home
        setActive("home");
      }
    };

    // Executa assim que a página carrega
    syncActive();

    // Escuta quando o hash muda (ex: clicar em /#contato)
    window.addEventListener("hashchange", syncActive);

    // Remove o evento ao desmontar o componente
    return () => window.removeEventListener("hashchange", syncActive);

  }, []);

  /* ================= EFEITO: SCROLL SPY ================= */
  useEffect(() => {

    // Lista das seções que existem na Home
    const sections: Section[] = ["home", "servicos", "contato"];

    // Função executada sempre que a página é rolada
    const onScroll = () => {

      // Se o usuário acabou de clicar no menu, ignora o scroll
      if (manual) return;

      // Começa assumindo que estamos na Home
      let closest: Section = "home";

      // Valor inicial muito alto
      let min = Infinity;

      // Percorre cada seção
      sections.forEach((id) => {
        // Pega o elemento pelo ID
        const el = document.getElementById(id);
        if (!el) return;

        // Posição da seção na tela
        const rect = el.getBoundingClientRect();

        // Distância da seção até o topo da navbar
        const distance = Math.abs(rect.top - 96);
        // 96px ≈ pt-24 (altura da navbar)

        // Se a seção está visível e mais próxima do topo
        if (rect.top <= 120 && distance < min) {
          min = distance;
          closest = id;
        }
      });

      // Atualiza o menu ativo
      setActive(closest);
    };

    // Adiciona evento de scroll
    window.addEventListener("scroll", onScroll);

    // Executa imediatamente
    onScroll();

    // Remove evento ao desmontar
    return () => window.removeEventListener("scroll", onScroll);

  }, [manual]);
  // Roda novamente se "manual" mudar

  /* ================= CLIQUE NO MENU ================= */
  const handleClick = (section: Section) => {

    // Marca que o clique foi manual
    setManual(true);

    // Atualiza o item ativo
    setActive(section);

    // Fecha o menu mobile
    setOpen(false);

    // Após a rolagem, libera o scroll spy novamente
    setTimeout(() => setManual(false), 700);
  };

  /* ================= CLASSES VISUAIS ================= */

  // Classe do link (ativo ou não)
  const linkClass = (id: Section) =>
    `relative pb-1 transition-all duration-300 ${
      active === id
        ? "text-white"
        : "text-gray-300 hover:text-white"
    }`;

  // Linha azul animada embaixo do item ativo
  const glow = (id: Section) =>
    active === id && (
      <span
        className="
          absolute left-0 -bottom-1 h-[2px] w-full
          bg-blue-500
          shadow-[0_0_14px_rgba(59,130,246,0.9)]
          transition-all duration-300
        "
      />
    );

  /* ================= JSX (HTML) ================= */
  return (
    <>
      {/* HEADER FIXO */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl shadow-lg"
            : "bg-black/30 backdrop-blur"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" onClick={() => handleClick("home")} className="flex items-center gap-3">
            <div className="rounded-lg p-2 bg-black/30 backdrop-blur">
              <Image
                src="/logo.png"
                alt="Solution Eletronic"
                width={54}
                height={54}
                priority
                className="object-contain"
              />
            </div>
            <span className="font-bold text-lg md:text-xl text-white">
              Solution Eletronic
            </span>
          </Link>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-10">
            <Link href="/" onClick={() => handleClick("home")} className={linkClass("home")}>
              Início
              {glow("home")}
            </Link>

            <Link href="/#servicos" onClick={() => handleClick("servicos")} className={linkClass("servicos")}>
              Serviços
              {glow("servicos")}
            </Link>

            <Link href="/#contato" onClick={() => handleClick("contato")} className={linkClass("contato")}>
              Contato
              {glow("contato")}
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}