import InstagramEmbed from "./components/InstagramEmbed";
import CookieBanner from "./components/CookieBanner";

const services = [
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    titulo: "Clínico Geral",
    desc: "Consulta médica completa com atendimento humanizado e acompanhamento da sua saúde.",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
    titulo: "Medicina do Trabalho",
    desc: "Avaliações ocupacionais, ASO e laudos para empresas e trabalhadores.",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
    titulo: "Endocrinologia",
    desc: "Diagnóstico e tratamento de diabetes, tireoide e distúrbios hormonais.",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    titulo: "Nutrologia",
    desc: "Cuidado clínico com foco em alimentação, metabolismo e saúde integral.",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12h6m-3-3v6"/><circle cx="12" cy="12" r="10"/></svg>,
    titulo: "Pediatria",
    desc: "Atendimento especializado para bebês, crianças e adolescentes.",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>,
    titulo: "Ginecologia",
    desc: "Saúde da mulher com consultas, exames preventivos e acompanhamento completo.",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10"/><path d="M13 2.05S15 7 15 12"/><path d="M11 2.05S9 7 9 12"/><path d="M2.63 15.5H12"/><path d="M2.63 8.5H21"/><circle cx="19" cy="19" r="3"/><path d="M19 17v2l1 1"/></svg>,
    titulo: "Dermatologia",
    desc: "Tratamento de pele, cabelo e unhas com tecnologia e cuidado especializado.",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    titulo: "Psicologia",
    desc: "Suporte emocional e psicoterapia para saúde mental e bem-estar.",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2"/><path d="M18 2a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3"/></svg>,
    titulo: "Nutrição",
    desc: "Planejamento alimentar individualizado para emagrecimento, saúde e performance.",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="12" y1="12" x2="12" y2="18"/><line x1="9" y1="15" x2="15" y2="15"/></svg>,
    titulo: "Fisioterapia",
    desc: "Reabilitação física, alívio de dores e recuperação de lesões.",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4.5 12.5l3 3 5-5"/><path d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0z"/></svg>,
    titulo: "Tratamento de Feridas",
    desc: "Enfermagem especializada no cuidado e cicatrização de feridas complexas.",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="12" rx="10" ry="6"/><line x1="2" y1="12" x2="22" y2="12"/></svg>,
    titulo: "Ultrassonografia",
    desc: "Exames de imagem com equipamentos modernos e laudos ágeis.",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="2,12 6,6 10,14 14,10 18,16 22,12"/></svg>,
    titulo: "Holter",
    desc: "Monitoramento cardíaco contínuo de 24h para avaliação do ritmo do coração.",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    titulo: "Eletrocardiograma",
    desc: "Exame rápido para avaliação da saúde cardíaca com resultado imediato.",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>,
    titulo: "Atendimento Domiciliar",
    desc: "Cuidado médico e de enfermagem no conforto e segurança da sua casa.",
  },
];

const stats = [
  { value: "15+", label: "Anos de experiência" },
  { value: "12k+", label: "Pacientes atendidos" },
  { value: "30+", label: "Especialistas" },
  { value: "98%", label: "Satisfação" },
];

const clinicAddress = "Av. Brasil, 145 - Edificio Saudades - sala 9 - Centro, Saudades - SC, 89868-000";
const clinicMapsQuery = encodeURIComponent(clinicAddress);
const clinicMapsUrl = `https://www.google.com/maps/search/?api=1&query=${clinicMapsQuery}`;
const clinicMapsEmbedUrl = `https://www.google.com/maps?q=${clinicMapsQuery}&output=embed`;

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --navy: #6f3f1f;
          --navy-mid: #8a5128;
          --teal: #c97f2d;
          --teal-light: #d88a32;
          --gold: #c97f2d;
          --offwhite: #fbf6ef;
          --text: #3a2417;
          --muted: #8a6b55;
          --white: #ffffff;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'DM Sans', sans-serif;
          color: var(--text);
          background: var(--white);
        }

        .clinic-page {
          overflow-x: hidden;
          margin-top: 80px;
        }

        /* ── HERO ── */
        .hero {
          position: relative;
          min-height: 92vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: linear-gradient(180deg, #fffaf4 0%, #fbf1e5 100%);
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 55% at 70% 35%, rgba(201,127,45,0.16) 0%, transparent 60%),
            radial-gradient(ellipse 50% 70% at 10% 80%, rgba(111,63,31,0.08) 0%, transparent 55%);
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(111,63,31,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(111,63,31,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 60px 24px;
          max-width: 780px;
          animation: fadeUp 0.9s ease both;
        }

        .hero-logo {
          width: clamp(180px, 26vw, 320px);
          height: auto;
          display: block;
          margin: 0 auto 28px;
          filter: drop-shadow(0 18px 36px rgba(58, 36, 23, 0.22));
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(201,127,45,0.10);
          border: 1px solid rgba(201,127,45,0.28);
          color: var(--teal);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 8px 18px;
          border-radius: 100px;
          margin-bottom: 32px;
        }

        .hero-badge::before {
          content: '';
          width: 6px;
          height: 6px;
          background: var(--teal);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(44px, 7vw, 76px);
          font-weight: 700;
          color: var(--text);
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
        }

        .hero h1 span {
          color: var(--teal);
        }

        .hero-subtitle {
          font-size: 18px;
          color: var(--muted);
          font-weight: 300;
          line-height: 1.7;
          max-width: 540px;
          margin: 0 auto 44px;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          background: var(--teal);
          color: var(--white);
          border-radius: 8px;
          text-decoration: none;
          font-weight: 500;
          font-size: 15px;
          transition: all 0.25s ease;
          border: none;
          cursor: pointer;
        }

        .btn-primary:hover {
          background: var(--teal);
          transform: translateY(-2px);
          box-shadow: 0 16px 36px rgba(201,127,45,0.36);
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          border: 1px solid rgba(111,63,31,0.22);
          color: var(--text);
          border-radius: 8px;
          text-decoration: none;
          font-weight: 400;
          font-size: 15px;
          transition: all 0.25s ease;
          background: rgba(255,255,255,0.5);
          cursor: pointer;
        }

        .btn-outline:hover {
          background: rgba(201,127,45,0.08);
          border-color: rgba(201,127,45,0.45);
        }

        .hero-scroll {
          position: absolute;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: rgba(58,36,23,0.4);
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          animation: bounce 2s infinite;
        }

        /* ── STATS ── */
        .stats {
          background: var(--navy);
          border-top: 1px solid rgba(255,255,255,0.08);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding: 40px 24px;
        }

        .stats-inner {
          max-width: 900px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          text-align: center;
        }

        .stat-value {
          font-family: 'Playfair Display', serif;
          font-size: 36px;
          font-weight: 700;
          color: var(--teal);
          display: block;
        }

        .stat-label {
          font-size: 13px;
          color: rgba(255,255,255,0.66);
          font-weight: 300;
          margin-top: 4px;
          display: block;
        }

        /* ── SERVICES ── */
       /* ── SERVICES ── */
.services {
  padding: 110px 24px;
  background:
    radial-gradient(ellipse 70% 45% at 50% 0%, rgba(201,127,45,0.10) 0%, transparent 60%),
    var(--offwhite);
  overflow: hidden;
}

.services-modern {
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 56px;
  align-items: center;
}

.services-copy {
  position: relative;
}

.services-copy .section-header {
  text-align: left;
  margin-bottom: 0;
}

.section-header {
  text-align: center;
  margin-bottom: 64px;
}

.section-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--teal);
  margin-bottom: 16px;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(32px, 4vw, 52px);
  font-weight: 700;
  color: var(--navy);
  line-height: 1.08;
}

.section-desc {
  font-size: 16px;
  color: #6f5a4d;
  max-width: 560px;
  margin: 18px auto 0;
  line-height: 1.75;
  font-weight: 400;
}

.services-copy .section-desc {
  margin-left: 0;
  margin-right: 0;
}

.services-highlights {
  margin-top: 34px;
  display: grid;
  gap: 14px;
}

.services-highlight {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #3a2417;
  font-size: 14px;
  font-weight: 600;
}

.services-highlight span {
  width: 9px;
  height: 9px;
  border-radius: 999px;
  background: #c97f2d;
  box-shadow: 0 0 0 6px rgba(201,127,45,0.10);
  flex-shrink: 0;
}

.services-copy-actions {
  margin-top: 34px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.services-vertical {
  position: relative;
  height: 620px;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 28px;
  padding-right: 8px;
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
}

.services-vertical:hover {
  scrollbar-color: rgba(201,127,45,0.55) rgba(111,63,31,0.08);
}

.services-vertical::-webkit-scrollbar {
  width: 8px;
}

.services-vertical::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 999px;
}

.services-vertical::-webkit-scrollbar-thumb {
  background: transparent;
  border-radius: 999px;
}

.services-vertical:hover::-webkit-scrollbar-track {
  background: rgba(111,63,31,0.08);
}

.services-vertical:hover::-webkit-scrollbar-thumb {
  background: rgba(201,127,45,0.55);
}

.services-vertical:hover::-webkit-scrollbar-thumb:hover {
  background: rgba(201,127,45,0.85);
}
.services-vertical::before,
.services-vertical::after {
  content: '';
  position: sticky;
  left: 0;
  right: 0;
  height: 80px;
  z-index: 3;
  pointer-events: none;
  display: block;
}

.services-vertical::before {
  top: 0;
  background: linear-gradient(180deg, var(--offwhite) 0%, rgba(251,246,239,0) 100%);
}

.services-vertical::after {
  bottom: 0;
  background: linear-gradient(0deg, var(--offwhite) 0%, rgba(251,246,239,0) 100%);
}

.services-vertical-track {
  display: flex;
  flex-direction: column;
  gap: 18px;
  animation: servicesVertical 95s linear infinite;
  will-change: transform;
}

.services-vertical:hover .services-vertical-track {
  animation-play-state: paused;
}

.service-card {
  min-height: 170px;
  background:
    linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.88) 100%);
  border-radius: 24px;
  padding: 26px;
  border: 1px solid rgba(111,63,31,0.08);
  transition: all 0.35s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 18px 44px rgba(111,63,31,0.07);
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 18px;
  align-items: flex-start;
}

.service-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at top right, rgba(201,127,45,0.13), transparent 38%);
  opacity: 0;
  transition: opacity 0.35s ease;
}

.service-card::after {
  content: '';
  position: absolute;
  top: 24px;
  bottom: 24px;
  left: 0;
  width: 3px;
  background: linear-gradient(180deg, #c97f2d, #e8b06a);
  border-radius: 0 999px 999px 0;
  opacity: 0;
  transition: opacity 0.35s ease;
}

.service-card:hover {
  transform: translateX(-8px);
  box-shadow: 0 30px 70px rgba(111,63,31,0.16);
  border-color: rgba(201,127,45,0.24);
}

.service-card:hover::before,
.service-card:hover::after {
  opacity: 1;
}

.service-icon {
  position: relative;
  z-index: 1;
  width: 56px;
  height: 56px;
  background: rgba(58,36,23,0.06);
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2b211b;
  transition: all 0.3s ease;
}

.service-card:hover .service-icon {
  background: rgba(201,127,45,0.13);
  color: #c97f2d;
  transform: scale(1.05);
}

.service-card h3 {
  position: relative;
  z-index: 1;
  font-family: 'Playfair Display', serif;
  font-size: 21px;
  font-weight: 700;
  color: #16110e;
  margin-bottom: 8px;
  line-height: 1.25;
}

.service-card p {
  position: relative;
  z-index: 1;
  font-size: 14px;
  color: #5f524b;
  line-height: 1.7;
  font-weight: 400;
}

.services-note {
  margin-top: 18px;
  font-size: 13px;
  color: #8a6b55;
}

@keyframes servicesVertical {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-50%);
  }
}

@media (max-width: 900px) {
  .services-modern {
    grid-template-columns: 1fr;
    gap: 42px;
  }

  .services-copy .section-header {
    text-align: center;
  }

  .services-copy .section-desc {
    margin-left: auto;
    margin-right: auto;
  }

  .services-highlights {
    max-width: 420px;
    margin-left: auto;
    margin-right: auto;
  }

  .services-copy-actions {
    justify-content: center;
  }

  .services-vertical {
    height: 560px;
  }

  .service-card:hover {
    transform: translateY(-4px);
  }
}

@media (max-width: 600px) {
  .services {
    padding: 84px 18px;
  }

  .services-vertical {
    height: 520px;
    border-radius: 22px;
  }

  .services-vertical::before,
  .services-vertical::after {
    height: 70px;
  }

  .services-vertical-track {
    gap: 14px;
    animation-duration: 120s;
  }

  .service-card {
    min-height: 180px;
    grid-template-columns: 1fr;
    gap: 14px;
    padding: 24px;
  }

  .service-icon {
    width: 52px;
    height: 52px;
  }

  .service-card h3 {
    font-size: 19px;
  }

  .service-card p {
    font-size: 13px;
  }
}

        /* ── SOBRE ── */
        .sobre {
          padding: 100px 24px;
          background: var(--white);
        }

        .sobre-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .sobre-visual {
          position: relative;
        }

        .sobre-card {
          background: var(--navy);
          border-radius: 20px;
          padding: 48px 40px;
          color: var(--white);
          position: relative;
          overflow: hidden;
        }

        .sobre-card-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 60% at 80% 20%, rgba(201,127,45,0.28) 0%, transparent 60%);
        }

        .sobre-card-content {
          position: relative;
          z-index: 1;
        }

        .sobre-quote {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-style: italic;
          line-height: 1.6;
          color: rgba(255,255,255,0.9);
          margin-bottom: 24px;
        }

        .sobre-quote-author {
          font-size: 13px;
          color: var(--teal);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 500;
        }

        .sobre-decoration {
          position: absolute;
          bottom: -20px;
          right: -20px;
          width: 120px;
          height: 120px;
          border: 2px solid rgba(201,127,45,0.25);
          border-radius: 50%;
        }

        .sobre-text h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 3.5vw, 40px);
          font-weight: 600;
          color: var(--navy);
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .sobre-text p {
          font-size: 15px;
          color: var(--muted);
          line-height: 1.8;
          font-weight: 300;
          margin-bottom: 16px;
        }

        .sobre-features {
          margin-top: 32px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .sobre-feature {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          color: var(--text);
          font-weight: 400;
        }

        .sobre-feature-dot {
          width: 8px;
          height: 8px;
          background: var(--teal);
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* ── INSTAGRAM ── */
        .instagram {
          padding: 100px 24px;
          background: var(--offwhite);
          text-align: center;
        }

        /* ── CTA ── */
        .cta {
          padding: 100px 24px;
          background: var(--navy);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 70% at 50% 50%, rgba(201,127,45,0.18) 0%, transparent 60%);
        }

        .cta-content {
          position: relative;
          z-index: 1;
          max-width: 600px;
          margin: 0 auto;
        }

        .cta h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(30px, 4vw, 48px);
          font-weight: 700;
          color: var(--white);
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .cta p {
          font-size: 16px;
          color: rgba(255,255,255,0.68);
          font-weight: 300;
          margin-bottom: 40px;
          line-height: 1.7;
        }

        .btn-whatsapp {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 18px 36px;
          background: #25D366;
          color: var(--white);
          border-radius: 10px;
          text-decoration: none;
          font-weight: 500;
          font-size: 16px;
          transition: all 0.25s ease;
          box-shadow: 0 8px 32px rgba(37,211,102,0.3);
        }

        .btn-whatsapp:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(37,211,102,0.4);
        }

        /* ── MAPA / CONTATO ── */
        .map-section {
          padding: 100px 24px;
          background: var(--offwhite);
        }

        .map-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 32px;
          align-items: stretch;
        }

        .map-info {
          background: var(--white);
          border: 1px solid rgba(111,63,31,0.08);
          border-radius: 20px;
          padding: 36px;
          box-shadow: 0 24px 48px rgba(111,63,31,0.08);
        }

        .map-info h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 3.5vw, 40px);
          font-weight: 700;
          color: var(--navy);
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .map-info p {
          font-size: 15px;
          color: #5f524b;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .map-address {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 16px;
          border-radius: 14px;
          background: rgba(58,36,23,0.04);
          color: var(--text);
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .map-address svg {
          color: var(--teal);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .map-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn-map {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 22px;
          background: var(--teal);
          color: var(--white);
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.25s ease;
          box-shadow: 0 12px 28px rgba(201,127,45,0.24);
        }

        .btn-map:hover {
          background: var(--teal-light);
          transform: translateY(-2px);
          box-shadow: 0 16px 36px rgba(201,127,45,0.32);
        }

        .map-frame-wrap {
          min-height: 420px;
          border-radius: 22px;
          overflow: hidden;
          border: 1px solid rgba(111,63,31,0.10);
          box-shadow: 0 28px 60px rgba(111,63,31,0.12);
          background: var(--white);
        }

        .map-frame-wrap iframe {
          width: 100%;
          height: 100%;
          min-height: 420px;
          border: 0;
          display: block;
        }

        /* ── ANIMATIONS ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .stats-inner {
            grid-template-columns: repeat(2, 1fr);
          }

          .sobre-inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .sobre-visual {
            order: -1;
          }

          .map-inner {
            grid-template-columns: 1fr;
          }

          .map-info {
            padding: 28px;
          }
        }

        @media (max-width: 480px) {
          .stats-inner {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .stat-value {
            font-size: 28px;
          }
        }
      `}</style>

      <main className="clinic-page">

        {/* ── HERO ── */}
        <section id="home" className="hero">
          <div className="hero-bg" />
          <div className="hero-grid" />

          <div className="hero-content">
            <img
              src="/logo-clinica-saudades.png"
              alt="Clínica Saudades"
              className="hero-logo"
            />

            <div className="hero-badge">
              Excelência em Saúde
            </div>

            <h1>
              Cuidamos de você<br />
              com <span>dedicação</span> e<br />
              tecnologia
            </h1>

            <p className="hero-subtitle">
              Atendimento humanizado, diagnósticos precisos e equipe especializada — tudo em um só lugar para a sua saúde.
            </p>

            <div className="hero-actions">
              <a href="https://wa.me/5549988659389" target="_blank" className="btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.527 5.847L.057 23.5l5.783-1.516A11.949 11.949 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-4.954-1.34l-.355-.211-3.693.968.987-3.606-.23-.37A9.818 9.818 0 1 1 12 21.818z"/>
                </svg>
                Agendar Consulta
              </a>
              <a href="#sobre" className="btn-outline">
                Conheça a Clínica
              </a>
            </div>
          </div>

          <div className="hero-scroll">
            <span>Rolar</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </div>
        </section>

        {/* ── STATS ── */}
        <div className="stats">
          <div className="stats-inner">
            {stats.map((s, i) => (
              <div key={i}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── SERVIÇOS ── */}
       <section id="servicos" className="services">
  <div className="services-modern">
    <div className="services-copy">
      <div className="section-header">
        <span className="section-tag">O que oferecemos</span>
        <h2 className="section-title">
          Especialidades e cuidados<br />em um só lugar
        </h2>
        <p className="section-desc">
          Uma estrutura completa para acompanhar sua saúde em diferentes fases da vida,
          com atendimento humanizado, tecnologia e profissionais especializados.
        </p>
      </div>

      <div className="services-highlights">
        <div className="services-highlight">
          <span />
          Atendimento multidisciplinar
        </div>
        <div className="services-highlight">
          <span />
          Cuidado próximo e personalizado
        </div>
        <div className="services-highlight">
          <span />
          Consultas, exames e acompanhamento
        </div>
      </div>

      <div className="services-copy-actions">
        <a href="#contato" className="btn-primary">
          Agendar atendimento
        </a>
        <a href="#sobre" className="btn-outline">
          Conhecer a clínica
        </a>
      </div>

      <p className="services-note">
          Passe o mouse para pausar a animação e role a lista para explorar as especialidades.

      </p>
    </div>

    <div className="services-vertical">
      <div className="services-vertical-track">
        {[...services, ...services].map((item, i) => (
          <div key={`${item.titulo}-${i}`} className="service-card">
            <div className="service-icon">{item.icon}</div>
            <div>
              <h3>{item.titulo}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

        {/* ── SOBRE ── */}
        <section id="sobre" className="sobre">
          <div className="sobre-inner">
            <div className="sobre-visual">
              <div className="sobre-card">
                <div className="sobre-card-bg" />
                <div className="sobre-card-content">
                  <p className="sobre-quote">
                    "Nossa missão é tratar cada paciente como único, combinando tecnologia moderna com cuidado humano genuíno."
                  </p>
                  <span className="sobre-quote-author">— Clínica Saudades</span>
                </div>
              </div>
              <div className="sobre-decoration" />
            </div>

            <div className="sobre-text">
              <span className="section-tag">Nossa história</span>
              <h2>Mais de 15 anos cuidando de quem importa</h2>
              <p>
                Fundada com o propósito de transformar a experiência em saúde, a Clínica Saudades une profissionais altamente qualificados a uma estrutura moderna e acolhedora.
              </p>
              <p>
                Cada detalhe do nosso atendimento é pensado para que você se sinta seguro, ouvido e bem cuidado.
              </p>
              <div className="sobre-features">
                {[
                  "Equipe multidisciplinar experiente",
                  "Equipamentos de última geração",
                  "Atendimento humanizado e personalizado",
                  "Resultados e laudos digitais rápidos",
                ].map((f, i) => (
                  <div key={i} className="sobre-feature">
                    <div className="sobre-feature-dot" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── INSTAGRAM ── */}
        <section className="instagram">
          <div className="section-header">
            <span className="section-tag">Redes sociais</span>
            <h2 className="section-title">Conheça nossa clínica</h2>
            <p className="section-desc">
              Acompanhe nossos conteúdos de saúde e novidades da clínica no Instagram.
            </p>
          </div>
          <InstagramEmbed />
        </section>

        {/* ── CTA ── */}
        <section id="contato" className="cta">
          <div className="cta-bg" />
          <div className="cta-content">
            <h2>Pronto para cuidar<br />da sua saúde?</h2>
            <p>
              Entre em contato agora mesmo e agende sua consulta. Estamos aqui para te atender com toda atenção que você merece.
            </p>
            <a href="https://wa.me/5549988659389" target="_blank" className="btn-whatsapp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.527 5.847L.057 23.5l5.783-1.516A11.949 11.949 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-4.954-1.34l-.355-.211-3.693.968.987-3.606-.23-.37A9.818 9.818 0 1 1 12 21.818z"/>
              </svg>
              Falar no WhatsApp
            </a>
          </div>
        </section>

        {/* ── MAPA ── */}
        <section className="map-section">
          <div className="map-inner">
            <div className="map-info">
              <span className="section-tag">Localização</span>
              <h2>Como chegar até a clínica</h2>
              <p>
                Veja nossa localização no mapa ou clique no botão para abrir a rota diretamente no Google Maps.
              </p>

              <div className="map-address">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{clinicAddress}</span>
              </div>

              <div className="map-actions">
                <a href={clinicMapsUrl} target="_blank" rel="noopener noreferrer" className="btn-map">
                  Abrir no Google Maps
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="map-frame-wrap">
              <iframe
                title="Mapa da Clínica Saudades"
                src={clinicMapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>

      </main>
      <CookieBanner />
    </>
  );
}