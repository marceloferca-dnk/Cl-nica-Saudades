"use client";

import { useEffect, useState } from "react";

export interface HeroInstagramSlide {
  id: string;
  imageUrl?: string;
  permalink: string;
  caption?: string;
  embedUrl?: string;
}

export default function HeroInstagramCarousel({ slides }: { slides: HeroInstagramSlide[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive(value => (value + 1) % slides.length), 7000);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[500px]">
      <div className="absolute -inset-8 rounded-full bg-[#bd742a]/15 blur-3xl" />
      <div className="relative h-full overflow-hidden rounded-[44px] border border-[#6f3f1f]/10 bg-[#efe3d6] shadow-[0_35px_100px_-30px_rgba(61,36,22,.3)]">
        {slides.map((slide, index) => (
          <a key={slide.id} href={slide.permalink} target="_blank" rel="noopener noreferrer" aria-hidden={index !== active} tabIndex={index === active ? 0 : -1} className={`absolute inset-0 will-change-[opacity,transform,filter] transition-[opacity,transform,filter] duration-[1800ms] ease-in-out ${index === active ? "scale-100 opacity-100 blur-0" : "pointer-events-none scale-[1.025] opacity-0 blur-[2px]"}`}>
            {slide.imageUrl ? <img src={slide.imageUrl} alt={slide.caption?.slice(0, 100) || "Publicação da Clínica Saudades"} className="h-full w-full object-cover" /> : <iframe src={slide.embedUrl} title="Publicação da Clínica Saudades no Instagram" loading={index === 0 ? "eager" : "lazy"} className="pointer-events-none h-[120%] w-full border-0 bg-white" />}
            <span className="absolute inset-0 bg-gradient-to-t from-[#27140a]/90 via-transparent to-[#27140a]/20" />
          </a>
        ))}
        <div className="pointer-events-none absolute inset-x-4 bottom-4 z-10 rounded-[16px] border border-white/15 bg-[#2e180d]/55 px-4 py-3 text-white shadow-xl backdrop-blur-sm">
          <p className="line-clamp-1 text-xs leading-5 text-white/85">{slides[active].caption || "Acompanhe os conteúdos, profissionais e novidades da Clínica Saudades."}</p>
          <div className="mt-2 flex items-center justify-between"><div className="flex gap-1.5">{slides.map((slide, index) => <button key={slide.id} type="button" aria-label={`Ver publicação ${index + 1}`} onClick={() => setActive(index)} className={`pointer-events-auto h-1 rounded-full transition-all ${index === active ? "w-6 bg-[#e2a85e]" : "w-1 bg-white/45"}`} />)}</div><span className="text-[8px] font-bold uppercase tracking-[.12em]">Ver publicação ↗</span></div>
        </div>
      </div>
    </div>
  );
}
