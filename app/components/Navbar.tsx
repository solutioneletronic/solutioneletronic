"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Section = "home" | "servicos" | "contato";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<Section>("home");
  const [manual, setManual] = useState(false);

  /* ================= SCROLL HEADER ================= */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= HASH SYNC ================= */
  useEffect(() => {
    const syncActive = () => {
      const hash = window.location.hash;

      if (hash === "#servicos") setActive("servicos");
      else if (hash === "#contato") setActive("contato");
      else setActive("home");
    };

    syncActive();
    window.addEventListener("hashchange", syncActive);
    return () => window.removeEventListener("hashchange", syncActive);
  }, []);

  /* ================= SCROLL SPY ================= */
  useEffect(() => {
    const sections: Section[] = ["home", "servicos", "contato"];

    const onScroll = () => {
      if (manual) return;

      let closest: Section = "home";
      let min = Infinity;

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - 96);

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
  }, [manual]);

  /* ================= CLICK ================= */
  const handleClick = (section: Section) => {
    setManual(true);
    setActive(section);
    setOpen(false);
    setTimeout(() => setManual(false), 700);
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
      <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-500 shadow-[0_0_14px_rgba(59,130,246,0.9)]" />
    );

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-black/80 backdrop-blur-xl shadow-lg" : "bg-black/30 backdrop-blur"}`}
      >
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

          {/* ===== LOGO (AJUSTADA) ===== */}
          <Link
            href="/"
            onClick={() => handleClick("home")}
            className="flex items-center gap-3"
          >
            <Image
              src="/logo_menu.png"
              alt="Solution Eletronic"
              width={76}
              height={76}
              priority
              className="
                object-contain
                drop-shadow-[0_0_8px_rgba(255,255,255,0.35)]
              "
            />
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