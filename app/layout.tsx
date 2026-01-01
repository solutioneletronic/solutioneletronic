import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "SolutionEletronic | Segurança Eletrônica em Manaus",
  description:
    "SolutionEletronic oferece soluções em segurança eletrônica, CFTV, controle de acesso, biometria e tecnologia em Manaus-AM.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}