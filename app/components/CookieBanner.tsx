"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookie-consent");

    if (!cookieConsent) {
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 900);

      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <>
      <style>{`
        .cookie-banner {
          position: fixed;
          left: 50%;
          bottom: 24px;
          transform: translateX(-50%);
          width: calc(100% - 32px);
          max-width: 820px;
          z-index: 3000;
          background: rgba(255, 250, 244, 0.96);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border: 1px solid rgba(111, 63, 31, 0.12);
          box-shadow: 0 18px 48px rgba(58, 36, 23, 0.16);
          border-radius: 18px;
          padding: 18px;
          animation: cookieSlideUp 0.35s ease both;
          font-family: 'DM Sans', sans-serif;
        }

        .cookie-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .cookie-content {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .cookie-icon {
          width: 42px;
          height: 42px;
          border-radius: 14px;
          background: rgba(201, 127, 45, 0.12);
          color: #c97f2d;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cookie-text h3 {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 700;
          color: #3a2417;
          margin: 0 0 4px;
        }

        .cookie-text p {
          font-size: 13px;
          line-height: 1.55;
          color: #6f5a4d;
          margin: 0;
          max-width: 520px;
        }

        .cookie-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .cookie-btn {
          border: none;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 700;
          border-radius: 999px;
          padding: 10px 16px;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .cookie-btn-reject {
          color: #3a2417;
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid rgba(111, 63, 31, 0.14);
        }

        .cookie-btn-reject:hover {
          background: rgba(111, 63, 31, 0.06);
        }

        .cookie-btn-accept {
          color: #ffffff;
          background: #c97f2d;
          box-shadow: 0 10px 24px rgba(201, 127, 45, 0.26);
        }

        .cookie-btn-accept:hover {
          background: #d88a32;
          transform: translateY(-1px);
          box-shadow: 0 14px 30px rgba(201, 127, 45, 0.34);
        }

        @keyframes cookieSlideUp {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        @media (max-width: 720px) {
          .cookie-banner {
            bottom: 16px;
            padding: 16px;
          }

          .cookie-inner {
            flex-direction: column;
            align-items: stretch;
          }

          .cookie-actions {
            width: 100%;
          }

          .cookie-btn {
            flex: 1;
          }
        }
      `}</style>

      <div className="cookie-banner" role="dialog" aria-label="Aviso de cookies">
        <div className="cookie-inner">
          <div className="cookie-content">
            <div className="cookie-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 22C6.48 22 2 17.52 2 12.2C2 7.09 5.94 2.91 10.95 2.45C11.28 2.42 11.53 2.74 11.42 3.05C11.25 3.52 11.17 4.02 11.17 4.54C11.17 7.08 13.23 9.14 15.77 9.14C16.62 9.14 17.42 8.91 18.1 8.5C18.39 8.33 18.76 8.51 18.8 8.85C18.85 9.26 18.88 9.68 18.88 10.1C18.88 10.49 18.85 10.87 18.81 11.24C18.77 11.57 19.05 11.86 19.38 11.82C19.82 11.77 20.25 11.68 20.66 11.54C20.99 11.43 21.32 11.69 21.27 12.03C20.58 17.64 16.68 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M8.5 10.5H8.51" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M12 15H12.01" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M7.5 16.5H7.51" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
            </div>

            <div className="cookie-text">
              <h3>Cookies</h3>
              <p>
                Utilizamos cookies para melhorar sua experiência no site e analisar a navegação.
                Você pode aceitar ou recusar os cookies não essenciais.
              </p>
            </div>
          </div>

          <div className="cookie-actions">
            <button type="button" className="cookie-btn cookie-btn-reject" onClick={rejectCookies}>
              Recusar
            </button>

            <button type="button" className="cookie-btn cookie-btn-accept" onClick={acceptCookies}>
              Aceitar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}