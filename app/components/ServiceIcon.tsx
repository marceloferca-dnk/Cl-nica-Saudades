import type { ReactNode } from "react";

const icons: Record<string, ReactNode> = {
  stethoscope: <><path d="M6 3v5a4 4 0 0 0 8 0V3" /><path d="M4 3h4M12 3h4M10 12v2a5 5 0 0 0 10 0v-1" /><circle cx="20" cy="10" r="2" /></>,
  work: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M9 13h6M12 10v6" /></>,
  endocrine: <><circle cx="12" cy="12" r="3" /><circle cx="5" cy="7" r="2" /><circle cx="19" cy="7" r="2" /><circle cx="6" cy="19" r="2" /><circle cx="18" cy="19" r="2" /><path d="m7 8.5 2.5 2M17 8.5l-2.5 2M8 18l2.5-3.5M16 18l-2.5-3.5" /></>,
  apple: <><path d="M12 7c-3-3-8-1-8 5 0 5 4 9 8 9s8-4 8-9c0-6-5-8-8-5Z" /><path d="M12 7c0-3 2-5 5-5M12 7c-1-2-3-3-5-3" /></>,
  child: <><circle cx="12" cy="8" r="4" /><path d="M5 21c.7-5 3-7 7-7s6.3 2 7 7M9 8h.01M15 8h.01M10 11c1 .7 3 .7 4 0" /></>,
  woman: <><circle cx="12" cy="8" r="5" /><path d="M12 13v8M8.5 18h7" /></>,
  skin: <><path d="M6 21c7-1 11-6 11-12V3M9 4c2 2 5 3 8 3M7 9c2 1 4 1 6 0M16 15l2 2 4-4" /></>,
  mind: <><path d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0-1 5 3 3 0 0 0 3 4h1v3M15 4a3 3 0 0 1 3 3v1a3 3 0 0 1 1 5 3 3 0 0 1-3 4h-1v3M9 4v13M15 4v13M9 8h3M12 12h3" /></>,
  nutrition: <><path d="M4 21c5-8 9-12 16-17M7 16c-4-1-4-6-3-9 3 0 8 1 9 5M13 10c0-4 4-7 8-7 0 4-1 9-7 10" /></>,
  physio: <><circle cx="12" cy="4" r="2" /><path d="m8 21 2-7-3-3M16 21l-2-7 3-3M7 11l5-3 5 3M12 8v6" /></>,
  bandage: <><path d="m7 17 10-10a3 3 0 0 0-4-4L3 13a3 3 0 0 0 4 4Zm0 0 4 4a3 3 0 0 0 4 0l6-6a3 3 0 0 0 0-4l-4-4" /><path d="M10 10h.01M14 14h.01" /></>,
  ultrasound: <><rect x="3" y="3" width="18" height="14" rx="2" /><path d="M7 21h10M12 17v4M7 11c2-4 4 4 6 0s3 0 4-2" /></>,
  holter: <><rect x="6" y="3" width="12" height="18" rx="3" /><path d="M9 7h6M9 11h2l1-2 2 5 1-3h2M10 18h4" /></>,
  ecg: <><path d="M3 12h4l2-5 4 10 2-5h6" /><path d="M12 21C5 17 2 13 3 8c1-5 7-5 9-1 2-4 8-4 9 1 1 5-2 9-9 13Z" /></>,
  home: <><path d="m3 11 9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1Z" /><path d="M16 5v4M14 7h4" /></>,
};

export default function ServiceIcon({ name }: { name: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-full w-full">{icons[name]}</svg>;
}
