"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-white">
          Solution <span className="text-blue-500">Eletronic</span>
        </h1>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-white">
          <a href="#" className="opacity-80 hover:opacity-100 hover:text-blue-400 transition">
            Início
          </a>
          <a href="#servicos" className="opacity-80 hover:opacity-100 hover:text-blue-400 transition">
            Serviços
          </a>
          <a
            href="https://wa.me/5592985080617"
            target="_blank"
            className="text-green-400 hover:text-green-300 transition"
          >
            WhatsApp
          </a>
        </nav>

        {/* BOTÃO MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-4 space-y-4 text-white animate-fadeIn">
          <a href="#" className="block" onClick={() => setOpen(false)}>
            Início
          </a>
          <a href="#servicos" className="block" onClick={() => setOpen(false)}>
            Serviços
          </a>
          <a
            href="https://wa.me/5592985080617"
            target="_blank"
            className="block text-green-400"
          >
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}