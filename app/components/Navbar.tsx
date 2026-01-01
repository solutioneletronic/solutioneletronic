"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (path: string) =>
    `transition ${
      pathname === path
        ? "text-white border-b-2 border-blue-500"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <>
      {/* HEADER */}
      <header
        className={`
          fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${scrolled ? "bg-black/70 backdrop-blur-xl shadow-lg" : "bg-transparent"}
        `}
      >
        {/* VIDEO BACKGROUND (DESKTOP) */}
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
            <div className="bg-white rounded-md p-1 shadow">
              <Image
                src="/logo.png"
                alt="Solution Eletronic"
                width={44}
                height={44}
                priority
              />
            </div>
            <span className="font-bold text-lg text-white">
              Solution Eletronic
            </span>
          </Link>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className={linkClass("/")}>
              Início
            </Link>
            <Link href="/#servicos" className="text-gray-300 hover:text-white">
              Serviços
            </Link>
            <Link href="/contato" className={linkClass("/contato")}>
              Contato
            </Link>

            <a
              href="https://wa.me/5592985080617"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 text-black font-semibold px-5 py-2 rounded-lg transition"
            >
              WhatsApp
            </a>
          </nav>

          {/* BOTÃO MOBILE */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white text-3xl"
            aria-label="Abrir menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        />
      )}

      {/* MENU LATERAL (OFF-CANVAS) */}
      <aside
        className={`
          fixed top-0 right-0 h-full w-72 bg-black z-50 transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-6 space-y-6">
          <button
            onClick={() => setOpen(false)}
            className="text-white text-2xl"
          >
            ✕
          </button>

          <nav className="flex flex-col gap-6 text-lg">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={linkClass("/")}
            >
              Início
            </Link>

            <Link
              href="/#servicos"
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              Serviços
            </Link>

            <Link
              href="/contato"
              onClick={() => setOpen(false)}
              className={linkClass("/contato")}
            >
              Contato
            </Link>

            <a
              href="https://wa.me/5592985080617"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 text-black font-semibold px-5 py-3 rounded-lg text-center"
            >
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      </aside>
    </>
  );
}