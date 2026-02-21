"use client";

import { useState } from "react";
import { Facebook, Instagram, Youtube, MessageCircle, Plus, X } from "lucide-react";

const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: Facebook,
    bg: "bg-[#1877F2]",
    glow: "shadow-[0_0_12px_rgba(24,119,242,0.5)]",
    hoverGlow: "hover:shadow-[0_0_20px_rgba(24,119,242,0.7)]",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: Instagram,
    bg: "bg-gradient-to-br from-[#F58529] via-[#E1306C] to-[#833AB4]",
    glow: "shadow-[0_0_12px_rgba(225,48,108,0.5)]",
    hoverGlow: "hover:shadow-[0_0_20px_rgba(225,48,108,0.7)]",
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: Youtube,
    bg: "bg-[#FF0000]",
    glow: "shadow-[0_0_12px_rgba(255,0,0,0.45)]",
    hoverGlow: "hover:shadow-[0_0_20px_rgba(255,0,0,0.65)]",
  },
  {
    label: "Viber",
    href: "viber://chat?number=+639000000000",
    icon: MessageCircle,
    bg: "bg-[#7360F2]",
    glow: "shadow-[0_0_12px_rgba(115,96,242,0.5)]",
    hoverGlow: "hover:shadow-[0_0_20px_rgba(115,96,242,0.7)]",
  },
];

export default function SocialFloat() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ── Desktop: fixed RIGHT MIDDLE ── */}
      <div className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-2 py-2 px-1.5">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`group relative flex items-center justify-center w-10 h-10 rounded-xl text-white transition-all duration-300 hover:-translate-x-1 hover:scale-110 ${social.bg} ${social.glow} ${social.hoverGlow}`}
            >
              <Icon size={17} />
              {/* Tooltip slides left */}
              <span className="absolute right-full mr-3 px-2.5 py-1 rounded-lg bg-foreground text-background text-xs font-body whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 translate-x-2 group-hover:translate-x-0 shadow-lg">
                {social.label}
              </span>
            </a>
          );
        })}
      </div>

      {/* ── Mobile: fixed BOTTOM RIGHT, expands UPWARD ── */}
      <div className="md:hidden fixed bottom-6 right-4 z-50">

        {/* Icons stack above the FAB button — absolutely positioned upward */}
        <div className="absolute bottom-14 right-0 flex flex-col-reverse items-center gap-3">
          {socials.map((social, i) => {
            const Icon = social.icon;
            return (
             <a 
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`flex items-center justify-center w-11 h-11 rounded-full text-white transition-all duration-300 ${social.bg} ${social.glow} ${social.hoverGlow} ${
                  mobileOpen
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-6 scale-75 pointer-events-none"
                }`}
                style={{
                  transitionProperty: "opacity, transform",
                  transitionDuration: "300ms",
                  transitionDelay: mobileOpen
                    ? `${i * 55}ms`
                    : `${(socials.length - 1 - i) * 40}ms`,
                }}
              >
                <Icon size={17} />
              </a>
            );
          })}
        </div>

        {/* FAB Toggle — always anchored at bottom */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle social links"
          className={`flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground transition-all duration-300 hover:scale-110 ${
            mobileOpen ? "rotate-45" : "rotate-0"
          }`}
          style={{
            boxShadow: "0 4px 24px rgba(0,0,0,0.22)",
          }}
        >
          {mobileOpen ? <X size={20} /> : <Plus size={20} />}
        </button>
      </div>
    </>
  );
}