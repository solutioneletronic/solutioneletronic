import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Solution Eletronic",
  description: "Tecnologia que protege. Soluções que conectam.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white antialiased">
        {/* NAVBAR */}
        <Navbar />

        {/* CONTEÚDO DAS PÁGINAS */}
        {children}
        <Footer />
      </body>
    </html>
  );
}