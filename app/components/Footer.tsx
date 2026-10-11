import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2e1b11] text-white">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-6 py-14 md:grid-cols-[1.2fr_.8fr_.8fr] lg:px-10">
        <div><div className="flex items-center gap-3"><span className="flex h-12 w-12 items-center justify-center rounded-full bg-white"><Image src="/logo-clinica-saudades.png" alt="" width={80} height={80} className="h-10 w-10 object-contain" /></span><div><strong className="font-editorial block text-xl">Clínica Saudades</strong><span className="text-[9px] uppercase tracking-[.22em] text-[#e2a85e]">Saúde & cuidado</span></div></div><p className="mt-5 max-w-sm text-sm leading-7 text-white/60">Atendimento médico e multidisciplinar com escuta, proximidade e cuidado para toda a família.</p></div>
        <div><p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#e2a85e]">Contato</p><p className="mt-4 text-sm leading-7 text-white/70">Av. Brasil, 145<br />Edifício Saudades, sala 9<br />Centro · Saudades/SC</p></div>
        <div><p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#e2a85e]">Canais</p><div className="mt-4 flex flex-col gap-3 text-sm text-white/70"><a href="https://wa.me/5549988659389" target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp</a><a href="https://www.instagram.com/clinicasaudades" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a></div></div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/40">© {new Date().getFullYear()} Clínica Saudades. Todos os direitos reservados.</div>
    </footer>
  );
}
