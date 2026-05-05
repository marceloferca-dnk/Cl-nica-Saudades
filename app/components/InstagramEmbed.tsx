"use client";

import { useEffect } from "react";

export default function InstagramEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <style>{`
        .ig-embeds-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1000px;
          margin: 0 auto 40px;
          align-items: start;
        }

        .ig-embeds-grid .instagram-media {
          margin: 0 auto !important;
          min-width: unset !important;
          width: 100% !important;
          max-width: 100% !important;
        }

        .ig-follow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border: 1px solid rgba(10,22,40,0.2);
          border-radius: 8px;
          color: #0a1628;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          font-family: 'DM Sans', sans-serif;
          transition: all 0.25s ease;
          background: transparent;
        }

        .ig-follow:hover {
          background: #0a1628;
          color: #fff;
          border-color: #0a1628;
        }

        @media (max-width: 768px) {
          .ig-embeds-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="ig-embeds-grid">

        {/* Post 01 */}
        <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink="https://www.instagram.com/reel/DVQ8TxCDgr6/?utm_source=ig_embed&utm_campaign=loading"
          data-instgrm-version="14"
        />

        {/* Post 02 */}
        <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink="https://www.instagram.com/reel/DXpg_PEj4sz/?utm_source=ig_embed&utm_campaign=loading"
          data-instgrm-version="14"
        />

        {/* Post 03 */}
        <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink="https://www.instagram.com/reel/DXKjnw5jGow/?utm_source=ig_embed&utm_campaign=loading"
          data-instgrm-version="14"
        />

      </div>

      <a
        href="https://www.instagram.com/clinicasaudades"
        target="_blank"
        rel="noopener noreferrer"
        className="ig-follow"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
        Seguir no Instagram
      </a>
    </>
  );
}