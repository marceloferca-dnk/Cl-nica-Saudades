import HeroInstagramCarousel, { HeroInstagramSlide } from "./HeroInstagramCarousel";
import { getInstagramMedia } from "../lib/instagram";

const fallback: HeroInstagramSlide[] = [
  { id: "DeShzSFFDnr", permalink: "https://www.instagram.com/p/DeShzSFFDnr/?img_index=1", embedUrl: "https://www.instagram.com/p/DeShzSFFDnr/embed/", caption: "Conteúdo da Clínica Saudades." },
  { id: "Dd1qkCUR4BD", permalink: "https://www.instagram.com/p/Dd1qkCUR4BD/", embedUrl: "https://www.instagram.com/p/Dd1qkCUR4BD/embed/", caption: "Informação e cuidado para você." },
  { id: "Dd6hFGbERPo", permalink: "https://www.instagram.com/p/Dd6hFGbERPo/?img_index=1", embedUrl: "https://www.instagram.com/p/Dd6hFGbERPo/embed/", caption: "Cuidado e saúde em cada fase da vida." },
  { id: "Dd4ysAXh7Fd", permalink: "https://www.instagram.com/p/Dd4ysAXh7Fd/", embedUrl: "https://www.instagram.com/p/Dd4ysAXh7Fd/embed/", caption: "Novidades da Clínica Saudades." },
  { id: "Dc6ERkUR1aP", permalink: "https://www.instagram.com/p/Dc6ERkUR1aP/", embedUrl: "https://www.instagram.com/p/Dc6ERkUR1aP/embed/", caption: "Acompanhe a Clínica Saudades." },
  { id: "Dc6EKcTRDhq", permalink: "https://www.instagram.com/p/Dc6EKcTRDhq/", embedUrl: "https://www.instagram.com/p/Dc6EKcTRDhq/embed/", caption: "Informação para cuidar melhor da sua saúde." },
  { id: "Ddr3kgTN-Ww", permalink: "https://www.instagram.com/p/Ddr3kgTN-Ww/", embedUrl: "https://www.instagram.com/p/Ddr3kgTN-Ww/embed/", caption: "Conteúdo preparado pela Clínica Saudades." },
  { id: "DcMfzqDhIyZ", permalink: "https://www.instagram.com/p/DcMfzqDhIyZ/", embedUrl: "https://www.instagram.com/p/DcMfzqDhIyZ/embed/", caption: "Saúde, informação e cuidado." },
  { id: "Dcb2vrqBxEF", permalink: "https://www.instagram.com/p/Dcb2vrqBxEF/", embedUrl: "https://www.instagram.com/p/Dcb2vrqBxEF/embed/", caption: "Mais uma publicação da Clínica Saudades." },
];

export default async function HeroInstagram() {
  const media = await getInstagramMedia(12);
  const slides: HeroInstagramSlide[] = media?.map(item => ({
    id: item.id,
    imageUrl: item.media_type === "VIDEO" ? item.thumbnail_url || item.media_url : item.media_url,
    permalink: item.permalink,
    caption: item.caption,
  })) ?? fallback;

  return <HeroInstagramCarousel slides={slides} />;
}
