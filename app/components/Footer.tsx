export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-400 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
        <p className="font-semibold text-white">
          Solution Eletronic
        </p>

        <p>Tecnologia que protege. Soluções que conectam.</p>

        <p className="text-sm">
          © {new Date().getFullYear()} - Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}