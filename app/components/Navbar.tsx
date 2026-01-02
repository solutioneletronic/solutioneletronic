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
  const [manualScroll, setManualScroll] = useState(false);

  /* ================= HEADER SCROLL ================= */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= SCROLL SPY REAL ================= */
  useEffect(() => {
    if (pathname !== "/") return;

    const sections: Section[] = ["home", "servicos", "contato"];

    const onScroll = () => {
      if (manualScroll) return;

      let closest: Section = "home";
      let minDistance = Infinity;

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - 120); // altura do navbar

        if (rect.top <= 150 && distance < minDistance) {
          minDistance = distance;
          closest = id;
        }
      });

      setActive(closest);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname, manualScroll]);

  /* ================= CLIQUE NO MENU ================= */
  const handleClick = (id: Section) => {
    setManualScroll(true);
    setActive(id);

    setTimeout(() => {
      setManualScroll(false);
    }, 800); // tempo do scroll suave
  };

  /* ================= CLASSES ================= */
  const linkClass = (id: Section) =>
    `relative pb-1 transition-all duration-300 ${
      active === id
        ? "text-white"
        : "text-gray-300 hover:text-white"
    }`;

  const glowBar = (id: Section) =>
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
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-white p-1 rounded-md shadow-md">
              <Image
                src="/logo.png"
                alt="Solution Eletronic"
                width={46}
                height={46}
                priority
              />
            </div>
            <span className="font-bold text-lg text-white">
              Solution Eletronic
            </span>
          </Link>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-10">
            <Link href="/" onClick={() => handleClick("home")} className={linkClass("home")}>
              Início
              {glowBar("home")}
            </Link>

            <Link
              href="/#servicos"
              onClick={() => handleClick("servicos")}
              className={linkClass("servicos")}
            >
              Serviços
              {glowBar("servicos")}
            </Link>

            <Link
              href="/#contato"
              onClick={() => handleClick("contato")}
              className={linkClass("contato")}
            >
              Contato
              {glowBar("contato")}
            </Link>

            <a
              href="https://wa.me/5592985080617"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 text-black font-semibold px-5 py-2 rounded-lg"
            >
              WhatsApp
            </a>
          </nav>

          {/* MOBILE */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white text-3xl"
          >
            ☰
          </button>
        </div>
      </header>
    </>
  );
}