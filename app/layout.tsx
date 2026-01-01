import "./globals.css";
import { ReactNode } from "react";
import Header from "./components/Header";

export const metadata = {
  title: "SolutionEletronic | Segurança Eletrônica em Manaus",
  description:
    "Segurança eletrônica, CFTV, controle de acesso e tecnologia em Manaus-AM.",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.png",
  },
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white antialiased">
        <Header/>
        {children}
      </body>
    </html>
  );
}