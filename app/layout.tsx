import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.clinicasaudades.com.br";
const title = "Clínica Saudades | Saúde e cuidado";
const description = "Atendimento médico e multidisciplinar em Saudades, Santa Catarina. Consultas, exames e cuidado próximo para toda a família.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: [{ url: "/logo-clinica-saudades.png", type: "image/png" }],
    shortcut: "/logo-clinica-saudades.png",
    apple: "/logo-clinica-saudades.png",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Clínica Saudades",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/logo-clinica-saudades.png", width: 1210, height: 1797, alt: "Logo da Clínica Saudades" }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/logo-clinica-saudades.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" data-scroll-behavior="smooth"><body><Header />{children}<Footer /></body></html>;
}
