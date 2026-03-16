"use client";

import { motion } from "framer-motion";
import { MapPinIcon, CheckCircleIcon, StarIcon } from "./icons/StrokeIcons";

const GOLD = "#00C472";
const BG   = "#0A0A0F";
const SURF = "#111118";
const RAIS = "#1A1A24";
const BORD = "#242430";
const TEXT = "#F0EDE8";
const MUTE = "#9A96A0";

function GridIcon({ size = 24, stroke = "currentColor" }: { size?: number; stroke?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1" stroke={stroke} strokeWidth={1.5} />
      <rect x="14" y="3" width="7" height="7" rx="1" stroke={stroke} strokeWidth={1.5} />
      <rect x="3" y="14" width="7" height="7" rx="1" stroke={stroke} strokeWidth={1.5} />
      <rect x="14" y="14" width="7" height="7" rx="1" stroke={stroke} strokeWidth={1.5} />
    </svg>
  );
}

function FileIcon({ size = 24, stroke = "currentColor" }: { size?: number; stroke?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="14 2 14 8 20 8" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <line x1="8" y1="13" x2="16" y2="13" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" />
      <line x1="8" y1="17" x2="13" y2="17" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  );
}

function BellIcon({ size = 24, stroke = "currentColor" }: { size?: number; stroke?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  );
}

const features = [
  {
    Icon: MapPinIcon,
    title: "Profissionais perto de você",
    description: "Filtre por distância (5 a 20 km) e veja apenas quem pode atender seu endereço.",
    hero: false,
  },
  {
    Icon: GridIcon,
    title: "Mais de 40 categorias",
    description: "Encanador, eletricista, diarista, marceneiro, pintor, pedreiro e muito mais.",
    hero: true,
  },
  {
    Icon: FileIcon,
    title: "Orçamentos transparentes",
    description: "Receba propostas detalhadas com preço fixo ou por hora. Sem surpresas.",
    hero: false,
  },
  {
    Icon: StarIcon,
    title: "Avaliações verificadas",
    description: "Todas as avaliações são de clientes reais. Veja histórico e notas antes de contratar.",
    hero: false,
  },
  {
    Icon: BellIcon,
    title: "Acompanhamento em tempo real",
    description: "Receba notificações de cada etapa: proposta enviada, a caminho e serviço concluído.",
    hero: false,
  },
];

export default function Features() {
  return (
    <section
      id="funcionalidades"
      className="py-24 lg:py-32"
      style={{ background: SURF, borderTop: `1px solid ${BORD}` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: GOLD, fontFamily: "var(--font-inter)" }}
            >
              Funcionalidades
            </p>
            <h2 style={{ fontFamily: "var(--font-jakarta)" }}>
              <span
                className="block font-extrabold leading-none"
                style={{
                  fontSize: "clamp(32px, 4.5vw, 60px)",
                  color: TEXT,
                  letterSpacing: "-0.03em",
                }}
              >
                Tudo em um app.
              </span>
            </h2>
          </div>
          <p
            className="leading-relaxed lg:max-w-xs text-sm"
            style={{ color: MUTE, fontFamily: "var(--font-inter)" }}
          >
            Do pedido à conclusão, cuidamos de cada detalhe para que você tenha a melhor experiência.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map(({ Icon, title, description, hero }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{ duration: 0.5, ease: "easeOut" as const, delay: i * 0.07 }}
              className={`relative flex flex-col gap-5 p-7 rounded-2xl ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
              style={{
                background: hero ? `${GOLD}12` : BG,
                border: hero ? `1px solid ${GOLD}30` : `1px solid ${BORD}`,
              }}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: hero ? `${GOLD}20` : RAIS,
                  border: `1px solid ${hero ? GOLD + "40" : BORD}`,
                }}
              >
                <Icon size={20} stroke={GOLD} />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3
                  className="font-semibold leading-tight"
                  style={{
                    fontFamily: "var(--font-jakarta)",
                    fontSize: "1rem",
                    color: TEXT,
                  }}
                >
                  {title}
                </h3>
                <p
                  className="leading-relaxed text-sm"
                  style={{ color: MUTE, fontFamily: "var(--font-inter)" }}
                >
                  {description}
                </p>
              </div>

              {/* Gold top border on hero card */}
              {hero && (
                <div
                  className="absolute top-0 left-6 right-6 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
