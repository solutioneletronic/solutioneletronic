export default function Contato() {
  return (
    <main className="pt-24 bg-black text-white px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Contato</h1>

        <p className="text-gray-400 mb-10">
          Entre em contato conosco pelo WhatsApp e solicite um orçamento.
        </p>

        <a
          href="https://wa.me/5592985080617"
          target="_blank"
          className="inline-block bg-green-500 hover:bg-green-600 text-black font-semibold px-10 py-4 rounded-xl transition"
        >
          Falar no WhatsApp
        </a>

        <p className="mt-10 text-gray-500 text-sm">
          Manaus - AM
        </p>
      </div>
    </main>
  );
}