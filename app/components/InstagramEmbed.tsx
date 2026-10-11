"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window { instgrm?: { Embeds: { process: () => void } } }
}

const posts = [
  "https://www.instagram.com/p/DeShzSFFDnr/?img_index=1",
  "https://www.instagram.com/p/Dd1qkCUR4BD/",
  "https://www.instagram.com/p/Dd6hFGbERPo/?img_index=1",
  "https://www.instagram.com/p/Dd4ysAXh7Fd/",
  "https://www.instagram.com/p/Dc6ERkUR1aP/",
  "https://www.instagram.com/p/Dc6EKcTRDhq/",
  "https://www.instagram.com/p/Ddr3kgTN-Ww/",
  "https://www.instagram.com/p/DcMfzqDhIyZ/",
  "https://www.instagram.com/p/Dcb2vrqBxEF/",
];

export default function InstagramEmbed() {
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>('script[src="https://www.instagram.com/embed.js"]');
    if (existing) { window.instgrm?.Embeds.process(); return; }
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => window.instgrm?.Embeds.process();
    document.body.appendChild(script);
  }, []);

  return (
    <div className="relative">
      <button type="button" aria-label="Ver publicações anteriores" onClick={() => railRef.current?.scrollBy({ left: -380, behavior: "smooth" })} className="absolute left-2 top-[180px] z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#6f3f1f]/10 bg-white/70 text-2xl text-[#3d2416]/70 shadow-lg backdrop-blur transition hover:scale-105 hover:bg-white hover:text-[#3d2416]">‹</button>
      <div ref={railRef} className="grid snap-x snap-mandatory auto-cols-[minmax(290px,360px)] grid-flow-col items-start gap-5 overflow-x-auto pb-5 [scrollbar-color:#bd742a_#f3eadf]">
        {posts.map(url => <article key={url} className="relative h-[620px] self-start snap-start overflow-hidden rounded-[24px] border border-[#6f3f1f]/10 bg-white p-3 shadow-[0_18px_55px_rgba(61,36,22,.08)] sm:h-[650px]"><blockquote className="instagram-media !mx-auto !mb-0 !min-w-0 !max-w-full" data-instgrm-captioned data-instgrm-permalink={url} data-instgrm-version="14" /><div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-white via-white/95 to-transparent px-5 pb-5 pt-14"><a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-full border border-[#6f3f1f]/10 bg-[#fffaf4] px-5 py-3 text-xs font-bold text-[#684936] shadow-sm transition hover:border-[#bd742a]/30 hover:text-[#bd742a]"><span>… continuar no Instagram</span><span>↗</span></a></div></article>)}
      </div>
      <button type="button" aria-label="Ver próximas publicações" onClick={() => railRef.current?.scrollBy({ left: 380, behavior: "smooth" })} className="absolute right-2 top-[180px] z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#6f3f1f]/10 bg-white/70 text-2xl text-[#3d2416]/70 shadow-lg backdrop-blur transition hover:scale-105 hover:bg-white hover:text-[#3d2416]">›</button>
    </div>
  );
}
