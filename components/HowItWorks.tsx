"use client";

import { motion } from "framer-motion";
import { SearchIcon, WrenchIcon } from "./icons/StrokeIcons";

const GOLD = "#00C472";
const BG   = "#0A0A0F";
const SURF = "#111118";
const RAIS = "#1A1A24";
const BORD = "#242430";
const TEXT = "#F0EDE8";
const MUTE = "#9A96A0";

function ChatBubbleIcon({ size = 32, stroke = "currentColor" }: { size?: number; stroke?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
        stroke={stroke} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
      />
      <path d="M8 10h8M8 13h5" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  );
}

const steps = [
  {
    step: "01",
    StepIcon: SearchIcon,
    title: "Busque o serviço",
    description:
      "Digite o que precisa — encanador, eletricista, diarista, pintor — e encontre profissionais disponíveis perto de você em segundos.",
  },
  {
    step: "02",
    StepIcon: ChatBubbleIcon,
    title: "Receba orçamentos",
    description:
      "Profissionais enviam propostas com preço e prazo. Compare, veja avaliações e escolha o que melhor atende você.",
  },
  {
    step: "03",
    StepIcon: WrenchIcon,
    title: "Serviço realizado",
    description:
      "Acompanhe o status em tempo real. Ao concluir, avalie o profissional e ajude outros usuários a escolherem bem.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-24 lg:py-32"
      style={{ background: BG, borderTop: `1px solid ${BORD}` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ color: GOLD, fontFamily: "var(--font-inter)" }}
          >
            Como Funciona
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
              3 passos simples.
            </span>
            <span
              className="block font-medium leading-snug mt-2"
              style={{
                fontSize: "clamp(18px, 2.5vw, 28px)",
                color: MUTE,
                letterSpacing: "-0.01em",
              }}
            >
              Menos de 5 minutos até o profissional.
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-4 lg:gap-6">
          {steps.map(({ step, StepIcon, title, description }, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{ duration: 0.6, ease: "easeOut" as const, delay: i * 0.1 }}
              className="relative flex flex-col gap-6 p-7 rounded-2xl"
              style={{
                background: SURF,
                border: `1px solid ${BORD}`,
              }}
            >
              {/* Step pill */}
              <div className="flex items-center gap-3">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: `${GOLD}20`, border: `1px solid ${GOLD}40` }}
                >
                  <span
                    className="text-[10px] font-bold"
                    style={{ color: GOLD, fontFamily: "var(--font-jakarta)" }}
                  >
                    {step}
                  </span>
                </div>
                <div className="flex-1 h-px" style={{ background: BORD }} />
              </div>

              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: RAIS, border: `1px solid ${BORD}` }}
              >
                <StepIcon size={20} stroke={GOLD} />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3
                  className="font-semibold leading-tight"
                  style={{
                    fontFamily: "var(--font-jakarta)",
                    fontSize: "1.05rem",
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

              {/* Bottom accent on hover */}
              <div
                className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: GOLD }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
