"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type Section = "home" | "servicos" | "contato";

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<Section>("home");
  const [manual, setManual] = useState(false);

  /* ================= HEADER SCROLL ================= */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= SCROLL SPY (SÓ NA HOME) ================= */
  useEffect(() => {
    if (pathname !== "/") {
      setActive("contato");
      return;
    }

    const sections: Section[] = ["home", "servicos"];

    const onScroll = () => {
      if (manual) return;

      let closest: Section = "home";
      let min = Infinity;

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - 96); // navbar ~ pt-24

        if (rect.top <= 120 && distance < min) {
          min = distance;
          closest = id;
        }
      });

      setActive(closest);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname, manual]);

  /* ================= CLIQUE DO MENU ================= */
  const handleClick = (id: Section) => {
    setManual(true);
    setActive(id);
    setOpen(false);

    setTimeout(() => {
      setManual(false);
    }, 700);
  };

  /* ================= CLASSES ================= */
  const linkClass = (id: Section) =>
    `relative pb-1 transition-all duration-300 ${
      active === id
        ? "text-white"
        : "text-gray-300 hover:text-white"
    }`;

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

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl shadow-lg"
            : "bg-black/30 backdrop-blur"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          
          {/* ================= LOGO ================= */}
          <Link href="/" onClick={() => handleClick("home")} className="flex items-center gap-3">
            <div className="bg-white rounded-lg p-1.5 shadow-lg">
              <Image
                src="/logo.png"
                alt="Solution Eletronic"
                width={52}
                height={52}
                priority
                className="object-contain"
              />
            </div>
            <span className="font-bold text-lg md:text-xl tracking-wide text-white">
              Solution Eletronic
            </span>
          </Link>

          {/* ================= MENU DESKTOP ================= */}
          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              onClick={() => handleClick("home")}
              className={linkClass("home")}
            >
              Início
              {glow("home")}
            </Link>

            <Link
              href="/#servicos"
              onClick={() => handleClick("servicos")}
              className={linkClass("servicos")}
            >
              Serviços
              {glow("servicos")}
            </Link>

            <Link
              href="/contato"
              onClick={() => handleClick("contato")}
              className={linkClass("contato")}
            >
              Contato
              {glow("contato")}
            </Link>

            <a
              href="https://wa.me/5592985080617"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-green-500 hover:bg-green-600
                text-black font-semibold
                px-6 py-3 rounded-xl
                transition shadow
              "
            >
              WhatsApp
            </a>
          </nav>

          {/* ================= BOTÃO MOBILE ================= */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white text-3xl"
            aria-label="Abrir menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* ================= OVERLAY ================= */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        />
      )}

      {/* ================= MENU MOBILE ================= */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-black z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 space-y-8 pt-24">
          <button
            onClick={() => setOpen(false)}
            className="text-white text-2xl"
            aria-label="Fechar menu"
          >
            ✕
          </button>

          <nav className="flex flex-col gap-8 text-lg">
            <Link
              href="/"
              onClick={() => handleClick("home")}
              className={linkClass("home")}
            >
              Início
              {glow("home")}
            </Link>

            <Link
              href="/#servicos"
              onClick={() => handleClick("servicos")}
              className={linkClass("servicos")}
            >
              Serviços
              {glow("servicos")}
            </Link>

            <Link
              href="/contato"
              onClick={() => handleClick("contato")}
              className={linkClass("contato")}
            >
              Contato
              {glow("contato")}
            </Link>

            <a
              href="https://wa.me/5592985080617"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-green-500 hover:bg-green-600
                text-black font-semibold
                px-6 py-4 rounded-xl
                text-center transition shadow
              "
            >
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      </aside>
    </>
  );
}