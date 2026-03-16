"use client";

import { motion } from "framer-motion";
import { AppleStoreButton, GooglePlayButton } from "./DownloadButtons";

const GOLD = "#00C472";
const BG   = "#0A0A0F";
const SURF = "#111118";
const RAIS = "#1A1A24";
const BORD = "#242430";
const TEXT = "#F0EDE8";
const MUTE = "#9A96A0";

function BellIcon({ size = 20, stroke = "currentColor" }: { size?: number; stroke?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  );
}

function TrendingIcon({ size = 20, stroke = "currentColor" }: { size?: number; stroke?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="17 6 23 6 23 12" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChartIcon({ size = 20, stroke = "currentColor" }: { size?: number; stroke?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <line x1="18" y1="20" x2="18" y2="10" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" />
      <line x1="12" y1="20" x2="12" y2="4" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" />
      <line x1="6" y1="20" x2="6" y2="14" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  );
}

function BadgeIcon({ size = 20, stroke = "currentColor" }: { size?: number; stroke?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const benefits = [
  {
    Icon: BellIcon,
    title: "Receba pedidos em tempo real",
    description: "Seja notificado imediatamente quando um cliente próximo solicita o seu serviço.",
  },
  {
    Icon: TrendingIcon,
    title: "Aumente sua renda",
    description: "Defina seu preço, aceite mais jobs e expanda sua carteira de clientes sem custo fixo.",
  },
  {
    Icon: ChartIcon,
    title: "Painel de controle completo",
    description: "Acompanhe sua receita semanal, taxa de conclusão e avaliações — tudo em um só lugar.",
  },
  {
    Icon: BadgeIcon,
    title: "Construa sua reputação",
    description: "Um perfil bem avaliado atrai mais clientes. Cada serviço bem-feito é uma estrela a mais.",
  },
];

const chartBars = [
  { day: "Seg", height: 40, amount: "R$320" },
  { day: "Ter", height: 65, amount: "R$520" },
  { day: "Qua", height: 50, amount: "R$400" },
  { day: "Qui", height: 85, amount: "R$680" },
  { day: "Sex", height: 100, amount: "R$800" },
  { day: "Sáb", height: 70, amount: "R$560" },
  { day: "Dom", height: 30, amount: "R$240" },
];

export default function ForProviders() {
  return (
    <section
      id="profissionais"
      className="py-24 lg:py-32"
      style={{ background: BG, borderTop: `1px solid ${BORD}` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-5% 0px" }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
            className="flex flex-col gap-10"
          >
            {/* Header */}
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-5"
                style={{ color: GOLD, fontFamily: "var(--font-inter)" }}
              >
                Para Profissionais
              </p>
              <h2 style={{ fontFamily: "var(--font-jakarta)" }}>
                <span
                  className="block font-extrabold leading-none"
                  style={{
                    fontSize: "clamp(32px, 4.5vw, 58px)",
                    color: TEXT,
                    letterSpacing: "-0.03em",
                  }}
                >
                  Mais clientes,
                </span>
                <span
                  className="block font-extrabold leading-none"
                  style={{
                    fontSize: "clamp(32px, 4.5vw, 58px)",
                    color: GOLD,
                    letterSpacing: "-0.03em",
                  }}
                >
                  mais renda.
                </span>
              </h2>
              <p
                className="leading-relaxed mt-6 max-w-md text-sm"
                style={{ color: MUTE, fontFamily: "var(--font-inter)" }}
              >
                Cadastre-se gratuitamente, defina sua área e comece a receber pedidos de clientes perto de você. Você no controle do seu tempo e dinheiro.
              </p>
            </div>

            {/* Benefits list */}
            <div className="flex flex-col gap-3" role="list">
              {benefits.map(({ Icon, title, description }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 p-5 rounded-xl"
                  style={{ background: SURF, border: `1px solid ${BORD}` }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${GOLD}18`, border: `1px solid ${GOLD}30` }}
                    aria-hidden="true"
                  >
                    <Icon size={16} stroke={GOLD} />
                  </div>
                  <div>
                    <h3
                      className="font-semibold text-sm"
                      style={{ fontFamily: "var(--font-jakarta)", color: TEXT }}
                    >
                      {title}
                    </h3>
                    <p
                      className="leading-relaxed mt-1 text-sm"
                      style={{ fontFamily: "var(--font-inter)", color: MUTE }}
                    >
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <AppleStoreButton />
              <GooglePlayButton />
            </div>
          </motion.div>

          {/* Right: Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-5% 0px" }}
            transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.15 }}
            className="flex justify-center lg:justify-end"
            aria-hidden="true"
          >
            <div
              className="relative w-full max-w-sm rounded-2xl overflow-hidden"
              style={{ background: SURF, border: `1px solid ${BORD}`, boxShadow: `0 24px 60px rgba(0,0,0,0.5)` }}
            >
              {/* Header bar */}
              <div
                className="flex items-center justify-between px-5 py-4"
                style={{ borderBottom: `1px solid ${BORD}` }}
              >
                <div>
                  <p className="text-[9px] uppercase tracking-widest" style={{ color: MUTE, fontFamily: "var(--font-inter)" }}>Boa tarde,</p>
                  <p className="font-bold text-sm" style={{ color: TEXT, fontFamily: "var(--font-jakarta)" }}>Carlos Silva</p>
                </div>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: `${GOLD}20`, border: `1px solid ${GOLD}40` }}
                >
                  <span className="text-xs font-bold" style={{ color: GOLD, fontFamily: "var(--font-jakarta)" }}>CS</span>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3" style={{ borderBottom: `1px solid ${BORD}` }}>
                {[
                  { label: "Esta semana", value: "R$1.840", sub: "+12%" },
                  { label: "Jobs", value: "8", sub: "concluídos" },
                  { label: "Nota", value: "4.9", sub: "32 avals." },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center text-center gap-1 py-4 px-2"
                    style={{ borderRight: i < 2 ? `1px solid ${BORD}` : "none" }}
                  >
                    <p className="text-[8px] uppercase tracking-widest" style={{ color: MUTE, fontFamily: "var(--font-inter)" }}>{stat.label}</p>
                    <p className="font-extrabold leading-none text-base" style={{ color: TEXT, fontFamily: "var(--font-jakarta)", letterSpacing: "-0.02em" }}>{stat.value}</p>
                    <p className="text-[8px] font-medium" style={{ color: GOLD, fontFamily: "var(--font-inter)" }}>{stat.sub}</p>
                  </div>
                ))}
              </div>

              {/* Earnings chart */}
              <div className="p-5" style={{ borderBottom: `1px solid ${BORD}` }}>
                <p className="text-[9px] uppercase tracking-widest mb-3" style={{ color: MUTE, fontFamily: "var(--font-inter)" }}>Receita semanal</p>
                <div className="flex items-end gap-2 h-20">
                  {chartBars.map(({ day, height }) => (
                    <div key={day} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full rounded-sm"
                        style={{
                          height: `${height}%`,
                          background: height === 100 ? GOLD : RAIS,
                          minHeight: "4px",
                        }}
                      />
                      <p className="text-[7px]" style={{ color: height === 100 ? GOLD : MUTE, fontFamily: "var(--font-inter)" }}>{day}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming job */}
              <div className="p-5" style={{ borderBottom: `1px solid ${BORD}` }}>
                <p className="text-[9px] uppercase tracking-widest mb-3" style={{ color: MUTE, fontFamily: "var(--font-inter)" }}>Próximo serviço</p>
                <div
                  className="flex items-center gap-3 p-3 rounded-lg"
                  style={{ background: RAIS, border: `1px solid ${BORD}`, borderLeft: `3px solid ${GOLD}` }}
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold truncate text-sm" style={{ color: TEXT, fontFamily: "var(--font-jakarta)" }}>Vazamento cozinha</p>
                    <p className="text-[10px] mt-0.5" style={{ color: MUTE, fontFamily: "var(--font-inter)" }}>Hoje · 14:30 · Vila Madalena</p>
                  </div>
                  <div
                    className="text-[8px] font-bold px-2 py-1 rounded flex-shrink-0 uppercase tracking-wide"
                    style={{ background: `${GOLD}20`, color: GOLD, fontFamily: "var(--font-jakarta)" }}
                  >
                    CONF.
                  </div>
                </div>
              </div>

              {/* Notification */}
              <div
                className="flex items-center gap-3 px-5 py-4"
                style={{ borderLeft: `3px solid ${GOLD}` }}
              >
                <BellIcon size={14} stroke={GOLD} />
                <p className="text-[10px]" style={{ color: MUTE, fontFamily: "var(--font-inter)" }}>
                  <span style={{ color: TEXT }}>Novo pedido —</span> Eletricista, 1.8 km
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
