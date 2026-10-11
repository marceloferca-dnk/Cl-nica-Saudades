import InstagramFeed from "./InstagramFeed";

export default function InstagramSection() {
  return (
    <section id="instagram" aria-label="Publicações da Clínica Saudades" className="scroll-mt-[82px] border-b border-[#6f3f1f]/10 bg-white px-6 py-14 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1180px]">
        <InstagramFeed />
      </div>
    </section>
  );
}
