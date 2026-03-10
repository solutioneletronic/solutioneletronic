"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Section = "home" | "servicos" | "contato";

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Section>("home");
  const [scrolled, setScrolled] = useState(false);

  /* ================= HEADER SHADOW ================= */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= SCROLL SPY PROFISSIONAL ================= */
  useEffect(() => {

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id as Section);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px"
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();

  }, []);

  /* ================= LINK STYLE ================= */

  const linkClass = (id: Section) =>
    `relative pb-1 transition-all duration-300 ${
      active === id
        ? "text-white"
        : "text-gray-400 hover:text-white"
    }`;

  const glow = (id: Section) =>
    active === id && (
      <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.9)]" />
    );

  const mobileLink = (id: Section) =>
    `block py-2 px-3 rounded transition ${
      active === id
        ? "bg-blue-500/20 text-white border-l-4 border-blue-500"
        : "text-gray-300 border-l-4 border-transparent"
    }`;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300
      ${scrolled ? "bg-black/80 backdrop-blur-xl shadow-lg" : "bg-black/40 backdrop-blur"}
      `}
    >

      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

        {/* LOGO */}

        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/logo_menu.png"
            alt="Solution Eletronic"
            width={60}
            height={60}
            priority
          />

          <span className="text-white font-bold text-lg">
            Solution Eletronic
          </span>

        </Link>

        {/* MENU DESKTOP */}

        <nav className="hidden md:flex gap-10">

          <Link href="#home" className={linkClass("home")}>
            Início
            {glow("home")}
          </Link>

          <Link href="#servicos" className={linkClass("servicos")}>
            Serviços
            {glow("servicos")}
          </Link>

          <Link href="#contato" className={linkClass("contato")}>
            Contato
            {glow("contato")}
          </Link>

        </nav>

        {/* BOTÃO MOBILE */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className="w-6 h-0.5 bg-white"/>
          <span className="w-6 h-0.5 bg-white"/>
          <span className="w-6 h-0.5 bg-white"/>
        </button>

      </div>

      {/* MENU MOBILE */}

      {open && (

        <nav className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">

          <div className="px-6 py-4 flex flex-col gap-2">

            <Link
              href="#home"
              onClick={() => setOpen(false)}
              className={mobileLink("home")}
            >
              Início
            </Link>

            <Link
              href="#servicos"
              onClick={() => setOpen(false)}
              className={mobileLink("servicos")}
            >
              Serviços
            </Link>

            <Link
              href="#contato"
              onClick={() => setOpen(false)}
              className={mobileLink("contato")}
            >
              Contato
            </Link>

          </div>

        </nav>

      )}

    </header>
  );
}