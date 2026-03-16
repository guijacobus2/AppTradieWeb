"use client";

import Image from "next/image";
import Link from "next/link";

const GOLD = "#00C472";
const BG   = "#0A0A0F";
const BORD = "#242430";
const TEXT = "#F0EDE8";
const MUTE = "#9A96A0";
const FAINT = "#3A3845";

const navLinks = [
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Para Profissionais", href: "#profissionais" },
  { label: "Baixar App", href: "#download" },
];

const legalLinks = [
  { label: "Política de Privacidade", href: "#" },
  { label: "Termos de Uso", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: BG, borderTop: `1px solid ${BORD}` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 pb-12"
          style={{ borderBottom: `1px solid ${BORD}` }}
        >

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="Uppi - Página inicial"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: `${GOLD}18`, border: `1px solid ${GOLD}40` }}
              >
                <Image
                  src="/tradie_logo_resized.png"
                  alt="Uppi logo"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
              <span
                className="font-bold text-base"
                style={{ fontFamily: "var(--font-jakarta)", color: TEXT }}
              >
                Uppi
              </span>
            </Link>
            <p
              className="leading-relaxed max-w-xs text-sm"
              style={{ fontFamily: "var(--font-inter)", color: MUTE }}
            >
              Conectando brasileiros com profissionais de serviços domésticos de forma rápida, segura e confiável.
            </p>

            {/* Made in Brazil */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-px" style={{ background: GOLD }} />
              <span
                className="text-[9px] uppercase tracking-widest"
                style={{ color: FAINT, fontFamily: "var(--font-inter)" }}
              >
                Feito no Brasil
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Links do rodapé">
            <p
              className="text-[9px] font-semibold uppercase tracking-[0.3em] mb-6"
              style={{ fontFamily: "var(--font-inter)", color: FAINT }}
            >
              Navegação
            </p>
            <ul className="flex flex-col gap-3" role="list">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm transition-colors duration-150"
                    style={{ fontFamily: "var(--font-inter)", color: MUTE }}
                    onMouseEnter={e => (e.currentTarget.style.color = TEXT)}
                    onMouseLeave={e => (e.currentTarget.style.color = MUTE)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Links legais">
            <p
              className="text-[9px] font-semibold uppercase tracking-[0.3em] mb-6"
              style={{ fontFamily: "var(--font-inter)", color: FAINT }}
            >
              Legal
            </p>
            <ul className="flex flex-col gap-3" role="list">
              {legalLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm transition-colors duration-150"
                    style={{ fontFamily: "var(--font-inter)", color: MUTE }}
                    onMouseEnter={e => (e.currentTarget.style.color = TEXT)}
                    onMouseLeave={e => (e.currentTarget.style.color = MUTE)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p
            className="text-[9px] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-inter)", color: FAINT }}
          >
            &copy; {year} Uppi. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: `${GOLD}60` }} />
            <p
              className="text-[9px] uppercase tracking-widest"
              style={{ fontFamily: "var(--font-inter)", color: FAINT }}
            >
              Brasil
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
