import CookieBanner from "./components/CookieBanner";
import HeroInstagram from "./components/HeroInstagram";
import InstagramSection from "./components/InstagramSection";
import ServiceIcon from "./components/ServiceIcon";

const services = [
  ["01", "Clínico Geral", "Consulta completa, prevenção e acompanhamento contínuo da sua saúde.", "stethoscope"],
  ["02", "Medicina do Trabalho", "Avaliações ocupacionais, ASO e cuidado para empresas e trabalhadores.", "work"],
  ["03", "Endocrinologia", "Diagnóstico e acompanhamento de diabetes, tireoide e alterações hormonais.", "endocrine"],
  ["04", "Nutrologia", "Cuidado clínico com foco em metabolismo, alimentação e saúde integral.", "apple"],
  ["05", "Pediatria", "Atendimento dedicado a bebês, crianças e adolescentes.", "child"],
  ["06", "Ginecologia", "Saúde da mulher, prevenção e acompanhamento em todas as fases.", "woman"],
  ["07", "Dermatologia", "Cuidado especializado para pele, cabelos e unhas.", "skin"],
  ["08", "Psicologia", "Escuta e acompanhamento para saúde emocional e bem-estar.", "mind"],
  ["09", "Nutrição", "Planejamento alimentar individualizado para saúde e qualidade de vida.", "nutrition"],
  ["10", "Fisioterapia", "Reabilitação, alívio de dores e recuperação funcional.", "physio"],
  ["11", "Tratamento de Feridas", "Enfermagem especializada no cuidado de feridas complexas.", "bandage"],
  ["12", "Ultrassonografia", "Exames de imagem com cuidado, precisão e agilidade.", "ultrasound"],
  ["13", "Holter", "Monitoramento cardíaco contínuo de 24 horas.", "holter"],
  ["14", "Eletrocardiograma", "Avaliação rápida e segura da atividade elétrica do coração.", "ecg"],
  ["15", "Atendimento Domiciliar", "Cuidado médico e de enfermagem no conforto da sua casa.", "home"],
];

const highlights = [
  ["Cuidado", "integrado"],
  ["Equipe", "multidisciplinar"],
  ["Atendimento", "humanizado"],
  ["Saúde", "para toda a família"],
];
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Av.%20Brasil%2C%20145%20-%20Edificio%20Saudades%20-%20sala%209%20-%20Centro%2C%20Saudades%20-%20SC%2C%2089868-000";
const mapsEmbed = "https://www.google.com/maps?q=Av.%20Brasil%2C%20145%20-%20Edificio%20Saudades%20-%20sala%209%20-%20Centro%2C%20Saudades%20-%20SC%2C%2089868-000&output=embed";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#fbf7f1] pt-[82px] text-[#3d2416]">
      <section id="home" className="relative scroll-mt-[82px] border-b border-[#6f3f1f]/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(189,116,42,.2),transparent_32%),radial-gradient(circle_at_10%_85%,rgba(111,63,31,.08),transparent_35%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(111,63,31,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(111,63,31,.12)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="relative mx-auto grid max-w-[1180px] items-center gap-14 px-6 py-12 lg:min-h-[640px] lg:grid-cols-[1.05fr_.95fr] lg:items-start lg:px-10 lg:pb-16 lg:pt-10">
          <div><div className="inline-flex items-center gap-3 rounded-full border border-[#bd742a]/25 bg-white/65 px-4 py-2 text-[10px] font-bold uppercase tracking-[.22em] text-[#a45f1f] backdrop-blur"><span className="h-2 w-2 rounded-full bg-[#bd742a]" />Cuidado perto de você</div><h1 className="font-editorial mt-7 max-w-3xl text-5xl font-bold leading-[1.02] tracking-[-.045em] sm:text-6xl lg:text-[72px]">Saúde completa.<span className="block text-[#bd742a]">Cuidado de verdade.</span></h1><p className="mt-7 max-w-xl text-base leading-8 text-[#80624f] sm:text-lg">Consultas, exames e acompanhamento multidisciplinar em um só lugar — com escuta, proximidade e atenção em cada etapa.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="https://wa.me/5549988659389" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-13 items-center justify-center rounded-full bg-[#3d2416] px-7 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#bd742a]">Agendar pelo WhatsApp <span className="ml-3">↗</span></a><a href="#servicos" className="inline-flex min-h-13 items-center justify-center rounded-full border border-[#6f3f1f]/20 bg-white/60 px-7 py-3 text-sm font-bold text-[#684936] transition hover:border-[#bd742a]/40 hover:bg-white">Ver especialidades</a></div></div>
          <HeroInstagram />
        </div>
      </section>

      <section aria-label="Diferenciais da Clínica Saudades" className="bg-[#3d2416] text-white"><div className="mx-auto grid max-w-[1000px] grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">{highlights.map(([title,label]) => <div key={label} className="bg-[#3d2416] px-5 py-8 text-center"><strong className="font-editorial block text-2xl text-[#e2a85e] sm:text-3xl">{title}</strong><span className="mt-2 block text-[10px] uppercase tracking-[.16em] text-white/55">{label}</span></div>)}</div></section>

      <InstagramSection />

      <section id="servicos" className="scroll-mt-[82px] px-6 py-24 lg:px-10 lg:py-28"><div className="mx-auto max-w-[1180px]"><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#bd742a]">Especialidades e exames</p><h2 className="font-editorial mt-4 text-4xl font-bold tracking-[-.04em] sm:text-6xl">Cuidado para cada fase da vida.</h2></div><p className="max-w-xl text-base leading-8 text-[#80624f] lg:ml-auto">Uma equipe multidisciplinar para acompanhar sua saúde de forma próxima, coordenada e conveniente.</p></div><div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{services.map(([number,title,description,icon]) => <article key={number} className="group relative overflow-hidden rounded-[24px] border border-[#6f3f1f]/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#bd742a]/35 hover:shadow-[0_22px_55px_rgba(61,36,22,.1)]"><div className="pointer-events-none absolute -right-3 -top-3 h-24 w-24 rotate-[-8deg] text-[#bd742a] opacity-[.09] transition duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:opacity-[.16]"><ServiceIcon name={icon} /></div><div className="relative"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#bd742a]/10 text-[10px] font-bold text-[#a45f1f]">{number}</span><h3 className="font-editorial mt-7 text-xl font-bold">{title}</h3><p className="mt-3 max-w-[88%] text-sm leading-7 text-[#80624f]">{description}</p></div></article>)}</div></div></section>

      <section id="atendimento" className="scroll-mt-[82px] border-y border-[#6f3f1f]/10 bg-[#f3eadf] px-6 py-24 lg:px-10 lg:py-28"><div className="mx-auto max-w-[1180px]"><div className="max-w-2xl"><p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#bd742a]">Sua experiência na clínica</p><h2 className="font-editorial mt-4 text-4xl font-bold tracking-[-.04em] sm:text-6xl">Um atendimento pensado para acolher.</h2><p className="mt-6 text-base leading-8 text-[#80624f]">Do primeiro contato ao acompanhamento, cada etapa é organizada para oferecer clareza, proximidade e tranquilidade.</p></div><div className="mt-14 grid gap-5 md:grid-cols-3">{[["01","Escuta e proximidade","Cada atendimento começa entendendo você, sua rotina e suas necessidades."],["02","Cuidado integrado","Especialidades, exames e acompanhamento reunidos para tornar sua jornada mais simples."],["03","Acompanhamento contínuo","Orientação clara e cuidado que continua além do momento da consulta."]].map(([n,t,d]) => <div key={n} className="rounded-[28px] border border-[#6f3f1f]/10 bg-white/70 p-7"><span className="text-xs font-bold text-[#bd742a]">{n}</span><h3 className="font-editorial mt-8 text-2xl font-bold">{t}</h3><p className="mt-4 text-sm leading-7 text-[#80624f]">{d}</p></div>)}</div></div></section>

      <section id="contato" className="scroll-mt-[82px] border-t border-[#6f3f1f]/10 bg-[#f3eadf] px-6 py-24 lg:px-10 lg:py-28"><div className="mx-auto grid max-w-[1180px] overflow-hidden rounded-[34px] border border-[#6f3f1f]/10 bg-white shadow-[0_30px_90px_rgba(61,36,22,.12)] lg:grid-cols-[.88fr_1.12fr]"><div className="p-8 sm:p-12"><p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#bd742a]">Contato e localização</p><h2 className="font-editorial mt-4 text-4xl font-bold tracking-[-.04em] sm:text-5xl">Vamos cuidar da sua saúde?</h2><p className="mt-5 leading-8 text-[#80624f]">Agende sua consulta ou fale com nossa equipe para encontrar o atendimento ideal.</p><div className="mt-8 space-y-4 text-sm text-[#684936]"><p><strong className="block text-[#3d2416]">Endereço</strong>Av. Brasil, 145 · Edifício Saudades, sala 9<br />Centro · Saudades/SC</p><p><strong className="block text-[#3d2416]">WhatsApp</strong>(49) 98865-9389</p></div><div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="https://wa.me/5549988659389" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#3d2416] px-6 py-3 text-center text-sm font-bold text-white hover:bg-[#bd742a]">Agendar consulta</a><a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#6f3f1f]/20 px-6 py-3 text-center text-sm font-bold">Abrir no mapa</a></div></div><iframe src={mapsEmbed} title="Localização da Clínica Saudades" className="min-h-[440px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></section>
      <CookieBanner />
    </main>
  );
}
