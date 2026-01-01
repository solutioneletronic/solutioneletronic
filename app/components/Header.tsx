import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO + NOME */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Solution Eletronic"
            width={42}
            height={42}
          />
          <span className="text-lg font-bold tracking-wide">
            Solution<span className="text-blue-500">Eletronic</span>
          </span>
        </div>

        {/* MENU DESKTOP */}
<nav className="hidden md:flex gap-8 text-sm font-medium text-white">
  <a
    href="#"
    className="opacity-80 hover:opacity-100 hover:text-blue-400 transition"
  >
    Início
  </a>

  <a
    href="#servicos"
    className="opacity-80 hover:opacity-100 hover:text-blue-400 transition"
  >
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
      </div>
    </header>
  );
}