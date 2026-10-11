"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Início" },
  { href: "#servicos", label: "Especialidades" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#instagram", label: "Instagram" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled ? "border-[#6f3f1f]/15 bg-[#fffaf4]/95 shadow-[0_12px_35px_rgba(61,36,22,.08)] backdrop-blur-xl" : "border-[#6f3f1f]/10 bg-[#fffaf4]/85 backdrop-blur-lg"}`}>
      <div className="mx-auto flex h-[82px] max-w-[1200px] items-center justify-between px-5 sm:px-7">
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#bd742a]/20 bg-white shadow-sm sm:h-20 sm:w-20"><Image src="/logo-clinica-saudades.png" alt="Clínica Saudades" width={120} height={120} className="h-14 w-14 object-contain sm:h-[72px] sm:w-[72px]" priority /></span>
          <span><strong className="font-editorial block text-[21px] leading-none text-[#3d2416] sm:text-[24px]">Clínica Saudades</strong><span className="mt-1.5 block text-[9px] font-bold uppercase tracking-[.24em] text-[#bd742a]">Saúde & cuidado</span></span>
        </a>
        <nav className="hidden items-center gap-1 lg:flex">{links.map(link => <a key={link.href} href={link.href} className="rounded-full px-4 py-2 text-sm font-semibold text-[#765542] transition hover:bg-[#bd742a]/10 hover:text-[#3d2416]">{link.label}</a>)}</nav>
        <div className="hidden items-center gap-3 md:flex"><a href="https://www.instagram.com/clinicasaudades" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#765542] transition hover:text-[#bd742a]">Instagram</a><a href="https://wa.me/5549988659389" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#3d2416] px-5 py-3 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#bd742a]">Agendar consulta</a></div>
        <button type="button" aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen(!open)} className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-[#6f3f1f]/15 md:hidden"><span className={`h-px w-5 bg-[#3d2416] transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} /><span className={`h-px w-5 bg-[#3d2416] transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} /></button>
      </div>
      <div className={`overflow-hidden border-t border-[#6f3f1f]/10 bg-[#fffaf4] transition-all duration-300 md:hidden ${open ? "max-h-[430px] opacity-100" : "max-h-0 opacity-0"}`}><nav className="flex flex-col px-5 py-4">{links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="border-b border-[#6f3f1f]/10 py-3.5 text-sm font-semibold text-[#684936] last:border-0">{link.label}</a>)}<a href="https://wa.me/5549988659389" target="_blank" rel="noopener noreferrer" className="mt-4 rounded-xl bg-[#3d2416] px-5 py-3 text-center text-sm font-bold text-white">Agendar pelo WhatsApp</a></nav></div>
    </header>
  );
}
