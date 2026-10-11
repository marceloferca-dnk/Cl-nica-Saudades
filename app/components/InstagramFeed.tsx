import InstagramEmbed from "./InstagramEmbed";
import { getInstagramMedia, InstagramMedia } from "../lib/instagram";

function MediaImage({ media, priority = false }: { media: InstagramMedia; priority?: boolean }) {
  const src = media.media_type === "VIDEO" ? media.thumbnail_url || media.media_url : media.media_url;
  if (!src) return null;
  return <img src={src} alt={media.caption?.slice(0, 120) || "Publicação da Clínica Saudades"} loading={priority ? "eager" : "lazy"} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]" />;
}

export default async function InstagramFeed() {
  const media = await getInstagramMedia();
  if (!media?.length) return <InstagramEmbed />;

  const ranked = [...media].sort((a, b) => (b.like_count ?? 0) - (a.like_count ?? 0));
  const featured = ranked[0];
  const recent = [...media].sort((a, b) => +new Date(b.timestamp) - +new Date(a.timestamp)).filter(item => item.id !== featured.id).slice(0, 4);

  return (
    <div className="grid gap-5 lg:grid-cols-[1.08fr_.92fr]">
      <a href={featured.permalink} target="_blank" rel="noopener noreferrer" className="group relative min-h-[520px] overflow-hidden rounded-[30px] bg-[#3d2416] shadow-[0_28px_80px_rgba(61,36,22,.18)] sm:min-h-[680px]">
        <MediaImage media={featured} priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2e1b11]/95 via-transparent to-black/10" />
        {featured.media_type === "VIDEO" && <span className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#3d2416]">▶</span>}
        <div className="absolute inset-x-7 bottom-7 text-white"><p className="line-clamp-3 text-sm leading-7 text-white/80">{featured.caption || "Veja esta publicação no Instagram da Clínica Saudades."}</p><div className="mt-4 flex gap-5 text-xs font-bold"><span>♥ {featured.like_count ?? 0}</span><span>◯ {featured.comments_count ?? 0}</span><span className="ml-auto">Ver no Instagram ↗</span></div></div>
      </a>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
        {recent.map(item => <a key={item.id} href={item.permalink} target="_blank" rel="noopener noreferrer" className="group overflow-hidden rounded-[24px] border border-[#6f3f1f]/10 bg-white shadow-[0_16px_50px_rgba(61,36,22,.08)]"><div className="relative aspect-square overflow-hidden bg-[#f3eadf]"><MediaImage media={item} />{item.media_type === "VIDEO" && <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-xs text-[#3d2416]">▶</span>}</div><div className="p-5"><p className="line-clamp-2 min-h-12 text-sm leading-6 text-[#684936]">{item.caption || "Nova publicação da Clínica Saudades."}</p><div className="mt-4 flex items-center gap-4 text-[10px] font-bold text-[#a45f1f]"><span>♥ {item.like_count ?? 0}</span><span>◯ {item.comments_count ?? 0}</span><span className="ml-auto">↗</span></div></div></a>)}
      </div>
    </div>
  );
}
