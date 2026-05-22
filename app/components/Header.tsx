"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#servicos", label: "Serviços" },
    { href: "#sobre", label: "Sobre" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        :root {
          --hdr-brown: #6f3f1f;
          --hdr-brown-dark: #3a2417;
          --hdr-caramel: #c97f2d;
          --hdr-caramel-light: #d88a32;
          --hdr-cream: #fffaf4;
          --hdr-muted: #8a6b55;
          --hdr-white: #ffffff;
          --wa-green: #25D366;
          --wa-green-hover: #1ebe5d;
          --ig-pink: #e1306c;
        }

        .hdr {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.35s ease;
          font-family: 'DM Sans', sans-serif;
        }

        .hdr--transparent {
          background: rgba(255, 250, 244, 0.82);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(111, 63, 31, 0.08);
        }

        .hdr--scrolled {
          background: rgba(255, 250, 244, 0.97);
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
          border-bottom: 1px solid rgba(201, 127, 45, 0.22);
          box-shadow: 0 10px 34px rgba(111, 63, 31, 0.12);
        }

        .hdr-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 28px;
          height: 88px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }

        /* Logo */
        .hdr-logo {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .hdr-logo-mark {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.78);
          border: 1px solid rgba(201, 127, 45, 0.22);
          box-shadow: 0 8px 22px rgba(111, 63, 31, 0.10);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hdr-logo-img {
          width: 42px;
          height: 42px;
          object-fit: contain;
        }

        .hdr-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .hdr-logo-title {
          font-family: 'Playfair Display', serif;
          font-size: 26px;
          font-weight: 700;
          color: var(--hdr-brown-dark);
          letter-spacing: 0.01em;
        }

        .hdr-logo-subtitle {
          margin-top: 6px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--hdr-caramel);
        }

        /* Nav */
        .hdr-nav {
          display: flex;
          align-items: center;
          gap: 6px;
          flex: 1;
          justify-content: center;
        }

        .hdr-nav a {
          color: var(--hdr-brown);
          text-decoration: none;
          font-size: 15px;
          font-weight: 600;
          padding: 9px 16px;
          border-radius: 999px;
          transition: all 0.2s ease;
          letter-spacing: 0.01em;
          position: relative;
        }

        .hdr-nav a::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 1px;
          background: var(--hdr-caramel);
          transition: width 0.25s ease;
        }

        .hdr-nav a:hover {
          color: var(--hdr-brown-dark);
          background: rgba(201, 127, 45, 0.12);
        }

        .hdr-nav a:hover::after {
          width: calc(100% - 30px);
        }

        /* Actions */
        .hdr-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .hdr-btn-ig {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 16px;
          border-radius: 999px;
          border: 1px solid rgba(225, 48, 108, 0.28);
          background: #ffffff;
          color: var(--ig-pink);
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          transition: all 0.2s ease;
          font-family: 'DM Sans', sans-serif;
        }

        .hdr-btn-ig:hover {
          background: var(--ig-pink);
          border-color: var(--ig-pink);
          color: #ffffff;
          transform: translateY(-1px);
          box-shadow: 0 10px 24px rgba(225, 48, 108, 0.25);
        }

        .hdr-btn-wa {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 18px;
          border-radius: 999px;
          background: var(--wa-green);
          color: #ffffff;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          transition: all 0.25s ease;
          font-family: 'DM Sans', sans-serif;
          border: 1px solid var(--wa-green);
          box-shadow: 0 10px 24px rgba(37, 211, 102, 0.25);
        }

        .hdr-btn-wa:hover {
          background: var(--wa-green-hover);
          border-color: var(--wa-green-hover);
          box-shadow: 0 14px 30px rgba(37, 211, 102, 0.34);
          transform: translateY(-1px);
        }

        /* Hamburger */
        .hdr-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 8px;
          border: 1px solid rgba(111, 63, 31, 0.14);
          background: rgba(255, 255, 255, 0.64);
          border-radius: 10px;
        }

        .hdr-hamburger span {
          display: block;
          width: 22px;
          height: 1.5px;
          background: var(--hdr-brown-dark);
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .hdr-hamburger.open span:nth-child(1) {
          transform: translateY(6.5px) rotate(45deg);
        }

        .hdr-hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hdr-hamburger.open span:nth-child(3) {
          transform: translateY(-6.5px) rotate(-45deg);
        }

        /* Mobile menu */
        .hdr-mobile {
          display: none;
          position: fixed;
          top: 88px;
          left: 0;
          right: 0;
          background: rgba(255, 250, 244, 0.98);
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
          border-bottom: 1px solid rgba(201, 127, 45, 0.22);
          box-shadow: 0 18px 36px rgba(111, 63, 31, 0.12);
          padding: 16px 24px 24px;
          flex-direction: column;
          gap: 4px;
          animation: slideDown 0.2s ease;
          z-index: 999;
        }

        .hdr-mobile.open {
          display: flex;
        }

        .hdr-mobile a {
          color: var(--hdr-brown);
          text-decoration: none;
          font-size: 15px;
          font-weight: 600;
          padding: 13px 10px;
          border-bottom: 1px solid rgba(111, 63, 31, 0.08);
          transition: all 0.2s;
          border-radius: 8px;
        }

        .hdr-mobile a:hover {
          color: var(--hdr-brown-dark);
          background: rgba(201, 127, 45, 0.08);
        }

        .hdr-mobile-actions {
          display: flex;
          gap: 10px;
          margin-top: 14px;
          flex-wrap: wrap;
        }

        .hdr-mobile-actions a {
          border: none !important;
          flex: 1;
          justify-content: center;
          min-width: 120px;
          text-align: center;
          padding: 12px !important;
        }

        .hdr-mobile-actions .hdr-btn-ig {
          border: 1px solid rgba(225, 48, 108, 0.28) !important;
          color: var(--ig-pink);
          background: #ffffff;
        }

        .hdr-mobile-actions .hdr-btn-ig:hover {
          color: #ffffff;
          background: var(--ig-pink);
        }

        .hdr-mobile-actions .hdr-btn-wa {
          background: var(--wa-green);
          color: #ffffff;
        }

        .hdr-mobile-actions .hdr-btn-wa:hover {
          background: var(--wa-green-hover);
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 900px) {
          .hdr-inner {
            gap: 20px;
          }

          .hdr-nav a {
            font-size: 14px;
            padding: 8px 12px;
          }

          .hdr-btn-ig,
          .hdr-btn-wa {
            padding: 8px 13px;
          }
        }

        @media (max-width: 768px) {
          .hdr-inner {
            height: 76px;
            padding: 0 20px;
          }

          .hdr-mobile {
            top: 76px;
          }

          .hdr-nav {
            display: none;
          }

          .hdr-actions {
            display: none;
          }

          .hdr-hamburger {
            display: flex;
          }

          .hdr-logo-mark {
            width: 46px;
            height: 46px;
          }

          .hdr-logo-img {
            width: 36px;
            height: 36px;
          }

          .hdr-logo-title {
            font-size: 21px;
          }

          .hdr-logo-subtitle {
            font-size: 10px;
          }
        }

        @media (max-width: 420px) {
          .hdr-logo-text {
            display: none;
          }
        }
      `}</style>

      <header className={`hdr ${scrolled ? "hdr--scrolled" : "hdr--transparent"}`}>
        <div className="hdr-inner">

          {/* Logo */}
          <a href="#home" className="hdr-logo" onClick={() => setMenuOpen(false)}>
            <span className="hdr-logo-mark">
              <Image
                src="/logo-clinica-saudades.png"
                alt="Clínica Saudades"
                width={84}
                height={84}
                className="hdr-logo-img"
                priority
              />
            </span>

            <span className="hdr-logo-text">
              <span className="hdr-logo-title">Clínica Saudades</span>
              <span className="hdr-logo-subtitle">Saúde & cuidado</span>
            </span>
          </a>

          {/* Nav desktop */}
          <nav className="hdr-nav">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          {/* Ações desktop */}
          <div className="hdr-actions">
            <a
              href="https://www.instagram.com/clinicasaudades"
              target="_blank"
              rel="noopener noreferrer"
              className="hdr-btn-ig"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Instagram
            </a>

            <a
              href="https://wa.me/5549988659389"
              target="_blank"
              rel="noopener noreferrer"
              className="hdr-btn-wa"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.527 5.847L.057 23.5l5.783-1.516A11.949 11.949 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-4.954-1.34l-.355-.211-3.693.968.987-3.606-.23-.37A9.818 9.818 0 1 1 12 21.818z" />
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Hamburger mobile */}
          <button
            className={`hdr-hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            type="button"
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </header>

      {/* Menu mobile */}
      <nav className={`hdr-mobile ${menuOpen ? "open" : ""}`}>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}

        <div className="hdr-mobile-actions">
          <a
            href="https://www.instagram.com/clinicasaudades"
            target="_blank"
            rel="noopener noreferrer"
            className="hdr-btn-ig"
          >
            Instagram
          </a>

          <a
            href="https://wa.me/5549988659389"
            target="_blank"
            rel="noopener noreferrer"
            className="hdr-btn-wa"
          >
            WhatsApp
          </a>
        </div>
      </nav>
    </>
  );
}