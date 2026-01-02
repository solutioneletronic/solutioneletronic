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

  /* ================= SCROLL HEADER ================= */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= SCROLL SPY ================= */
  useEffect(() => {
    if (pathname !== "/") return;

    const sections: Section[] = ["home", "servicos", "contato"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id as Section);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  /* ================= CLASSES ================= */
  const linkClass = (id: Section) =>
    `relative pb-1 transition-all duration-300
     ${
       active === id
         ? "text-white"
         : "text-gray-300 hover:text-white"
     }`;

  const glowBar = (id: Section) =>
    active === id ? (
      <span
        className="
          absolute left-0 -bottom-1 h-[2px] w-full
          bg-blue-500
          shadow-[0_0_12px_rgba(59,130,246,0.9)]
          animate-pulse
        "
      />
    ) : null;

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
        {/* VIDEO BACKGROUND */}
        {!scrolled && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hidden md:block absolute inset-0 w-full h-full object-cover -z-10 opacity-30"
          >
            <source src="/header-video.mp4" type="video/mp4" />
          </video>
        )}

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
            <span className="font-bold text-lg tracking-wide text-white">
              Solution Eletronic
            </span>
          </Link>

          {/* ================= MENU DESKTOP ================= */}
          <nav className="hidden md:flex items-center gap-10">
            <Link href="/" className={linkClass("home")}>
              Início
              {glowBar("home")}
            </Link>

            <Link href="/#servicos" className={linkClass("servicos")}>
              Serviços
              {glowBar("servicos")}
            </Link>

            <Link href="/#contato" className={linkClass("contato")}>
              Contato
              {glowBar("contato")}
            </Link>

            <a
              href="https://wa.me/5592985080617"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-green-500 hover:bg-green-600
                text-black font-semibold
                px-5 py-2 rounded-lg
                transition-all shadow
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
        <div className="p-6 space-y-6">
          <button
            onClick={() => setOpen(false)}
            className="text-white text-2xl"
            aria-label="Fechar menu"
          >
            ✕
          </button>

          <nav className="flex flex-col gap-6 text-lg">
            <Link href="/" className={linkClass("home")}>
              Início
              {glowBar("home")}
            </Link>

            <Link href="/#servicos" className={linkClass("servicos")}>
              Serviços
              {glowBar("servicos")}
            </Link>

            <Link href="/#contato" className={linkClass("contato")}>
              Contato
              {glowBar("contato")}
            </Link>

            <a
              href="https://wa.me/5592985080617"
              target="_blank"
              className="
                bg-green-500 hover:bg-green-600
                text-black font-semibold
                px-5 py-3 rounded-lg text-center shadow
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