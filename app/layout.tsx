import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clínica Saudades | Saúde e cuidado",
  description: "Atendimento médico e multidisciplinar em Saudades, Santa Catarina. Consultas, exames e cuidado próximo para toda a família.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" data-scroll-behavior="smooth"><body><Header />{children}<Footer /></body></html>;
}
