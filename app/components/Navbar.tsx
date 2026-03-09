"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Section = "home" | "servicos" | "contato";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<Section>("home");
  const [manual, setManual] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ===== FECHA MENU COM ESC OU CLIQUE FORA =====
  useEffect(() => {
    if (!open) return;

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function handleClick(e: MouseEvent) {
      if (
        !(e.target as HTMLElement).closest("nav") &&
        !(e.target as HTMLElement).closest("button[aria-label='Toggle menu']")
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", handleKey);
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("mousedown", handleClick);
    };
  }, [open]);

  /* ================= SCROLL HEADER ================= */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
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

  /* ================= SCROLL SPY OTIMIZADO COM DEBOUNCE ================= */
  useEffect(() => {
    let lastCall = 0;
    let ticking = false;

    const sections: Section[] = ["home", "servicos", "contato"];
    
    const handleScroll = () => {
      if (manual) return;
      
      const now = Date.now();
      if (now - lastCall < 100) {
        if (!ticking) {
          ticking = true;
          setTimeout(() => {
            ticking = false;
            handleScroll();
          }, 120);
        }
        return;
      }
      lastCall = now;

      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      // Se está nos últimos 180px, ativa contato
      if (pageHeight - scrollPosition < 180) {
        setActive("contato");
        return;
      }

      let closest: Section = "home";
      let min = Infinity;

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - 96);

        if (rect.top <= 128 && distance < min) {
          min = distance;
          closest = id;
        }
      });

      setActive(closest);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [manual]);

  /* ================= CLICK HANDLER COM SCROLL SUAVE ================= */
  const handleClick = (section: Section) => () => {
    setActive(section);
    setOpen(false);
    setManual(true);

    if (closeTimeout.current) clearTimeout(closeTimeout.current);

    if (section === "contato") {
      // Vai direto ao rodapé
      setTimeout(() => {
        window.scrollTo(0, document.documentElement.scrollHeight);
        setActive("contato");
        closeTimeout.current = setTimeout(() => setManual(false), 1300);
      }, 60);
    } else {
      // Scroll suave para seções
      const el = document.getElementById(section);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 40);
        closeTimeout.current = setTimeout(() => setManual(false), 830);
      } else {
        closeTimeout.current = setTimeout(() => setManual(false), 600);
      }
    }
  };

  /* ================= CLASSES ================= */
  const linkClass = (id: Section) =>
    `relative pb-1 transition-all duration-300 font-medium ${
      active === id
        ? "text-white"
        : "text-gray-300 hover:text-white"
    }`;

  const glow = (id: Section) =>
    active === id && (
      <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-500 shadow-[0_0_14px_rgba(59,130,246,0.9)]" />
    );

  const mobileLinkClass = (id: Section) =>
    `block py-2 px-3 rounded transition-all duration-300 font-medium ${
      active === id
        ? "text-white bg-blue-500/20 border-l-4 border-blue-500"
        : "text-gray-300 hover:text-white border-l-4 border-transparent"
    }`;

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-black/80 backdrop-blur-xl shadow-lg" : "bg-black/30 backdrop-blur"}`}
      >
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

          {/* LOGO */}
          <Link
            href="/"
            onClick={handleClick("home")}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <Image
              src="/logo_menu.png"
              alt="Solution Eletronic"
              width={60}
              height={60}
              priority
              className="object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.35)]"
            />
            <span className="font-bold text-lg md:text-xl text-white">
              Solution Eletronic
            </span>
          </Link>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-10">
            <Link href="/" onClick={handleClick("home")} className={linkClass("home")}>
              Início
              {glow("home")}
            </Link>

            <Link href="/#servicos" onClick={handleClick("servicos")} className={linkClass("servicos")}>
              Serviços
              {glow("servicos")}
            </Link>

            <Link href="/#contato" onClick={handleClick("contato")} className={linkClass("contato")}>
              Contato
              {glow("contato")}
            </Link>
          </nav>

          {/* HAMBURGER MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 relative z-20"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <nav className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10">
            <div className="px-6 py-4 flex flex-col gap-2">
              <Link
                href="/"
                onClick={handleClick("home")}
                className={mobileLinkClass("home")}
              >
                Início
              </Link>

              <Link
                href="/#servicos"
                onClick={handleClick("servicos")}
                className={mobileLinkClass("servicos")}
              >
                Serviços
              </Link>

              <Link
                href="/contato"
                onClick={handleClick("contato")}
                className={mobileLinkClass("contato")}
              >
                Contato
              </Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}