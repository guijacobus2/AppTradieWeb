"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const GOLD = "#00C472";
const BG   = "#0A0A0F";
const BORD = "#242430";
const TEXT = "#F0EDE8";
const MUTE = "#9A96A0";

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="20" y1="4" x2="4" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const navLinks = [
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Profissionais", href: "#profissionais" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        borderBottom: `1px solid ${BORD}`,
        background: `${BG}e8`,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="AppTradie - Página inicial"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: `${GOLD}18`, border: `1px solid ${GOLD}40` }}
            >
              <Image
                src="/tradie_logo_resized.png"
                alt="AppTradie logo"
                width={20}
                height={20}
                className="object-contain"
                priority
              />
            </div>
            <span
              className="text-base font-bold tracking-tight"
              style={{ fontFamily: "var(--font-jakarta)", color: TEXT }}
            >
              AppTradie
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-sm transition-colors duration-150"
                style={{
                  fontFamily: "var(--font-inter)",
                  color: MUTE,
                }}
                onMouseEnter={e => (e.currentTarget.style.color = TEXT)}
                onMouseLeave={e => (e.currentTarget.style.color = MUTE)}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#download"
              className="text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-150"
              style={{
                fontFamily: "var(--font-jakarta)",
                background: GOLD,
                color: BG,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.opacity = "0.88";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
              }}
            >
              Baixar App
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 cursor-pointer focus:outline-none rounded-lg"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            style={{ color: TEXT }}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div
            className="md:hidden py-5 flex flex-col gap-4"
            style={{ borderTop: `1px solid ${BORD}` }}
          >
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm px-1 py-1"
                style={{ fontFamily: "var(--font-inter)", color: MUTE }}
              >
                {label}
              </Link>
            ))}
            <a
              href="#download"
              onClick={() => setOpen(false)}
              className="text-sm font-semibold px-5 py-3 rounded-lg text-center mt-2"
              style={{ fontFamily: "var(--font-jakarta)", background: GOLD, color: BG }}
            >
              Baixar App
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
