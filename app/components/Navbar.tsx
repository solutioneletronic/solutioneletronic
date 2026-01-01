"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <div className="text-xl font-bold text-white">
          Solution <span className="text-blue-500">Eletronic</span>
        </div>

        {/* MENU */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li>
            <Link href="#inicio" className="text-white hover:text-blue-400 transition">
              Início
            </Link>
          </li>

          <li>
            <Link href="#servicos" className="text-white hover:text-blue-400 transition">
              Serviços
            </Link>
          </li>

          <li>
            <a
              href="https://wa.me/5592985080617"
              target="_blank"
              className="text-green-400 hover:text-green-300 transition font-semibold"
            >
              WhatsApp
            </a>
          </li>
        </ul>

      </nav>
    </header>
  );
}