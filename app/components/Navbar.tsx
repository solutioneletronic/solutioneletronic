"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detecta scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-black shadow-lg" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-white rounded-md p-1">
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
        <nav className="hidden md:flex items-center gap-8 text-gray-300">
          <Link href="/" className="hover:text-white transition">
            Início
          </Link>
          <Link href="/#servicos" className="hover:text-white transition">
            Serviços
          </Link>
          <Link href="/contato" className="hover:text-white transition">
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
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
          aria-label="Abrir menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MENU MOBILE ANIMADO */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          bg-black border-t border-zinc-800
        `}
      >
        <div className="px-6 py-6 space-y-4">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block text-gray-300 hover:text-white"
          >
            Início
          </Link>

          <Link
            href="/#servicos"
            onClick={() => setOpen(false)}
            className="block text-gray-300 hover:text-white"
          >
            Serviços
          </Link>

          <Link
            href="/contato"
            onClick={() => setOpen(false)}
            className="block text-gray-300 hover:text-white"
          >
            Contato
          </Link>

          <a
            href="https://wa.me/5592985080617"
            target="_blank"
            className="block bg-green-500 hover:bg-green-600 text-black font-semibold px-5 py-3 rounded-lg text-center"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}