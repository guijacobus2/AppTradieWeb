"use client";

import { motion } from "framer-motion";
import { StarIcon } from "./icons/StrokeIcons";

const GOLD = "#00C472";
const BG   = "#0A0A0F";
const SURF = "#111118";
const RAIS = "#1A1A24";
const BORD = "#242430";
const TEXT = "#F0EDE8";
const MUTE = "#9A96A0";

const testimonials = [
  {
    name: "Ana Rodrigues",
    role: "Consumidora · São Paulo, SP",
    initials: "AR",
    rating: 5,
    text: "Precisei de um encanador urgente e em menos de 10 minutos já tinha 3 orçamentos. Contratei na hora e o problema foi resolvido no mesmo dia.",
    featured: false,
  },
  {
    name: "Marcos Oliveira",
    role: "Eletricista · Rio de Janeiro, RJ",
    initials: "MO",
    rating: 5,
    text: "Desde que entrei no AppTradie, minha agenda está sempre cheia. Já dobrei minha renda em 3 meses. A plataforma é muito fácil de usar.",
    featured: true,
  },
  {
    name: "Fernanda Lima",
    role: "Consumidora · Belo Horizonte, MG",
    initials: "FL",
    rating: 5,
    text: "Contratei uma diarista pelo app e fiquei impressionada com a facilidade. Profissional pontual e trabalho impecável. Já indiquei para todas as minhas amigas.",
    featured: false,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" role="img" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon
          key={i}
          size={13}
          stroke={i < rating ? GOLD : BORD}
          className={i < rating ? "fill-[#00C472]" : ""}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      className="py-24 lg:py-32"
      style={{ background: SURF, borderTop: `1px solid ${BORD}` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ color: GOLD, fontFamily: "var(--font-inter)" }}
          >
            Depoimentos
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
              Histórias reais.
            </span>
            <span
              className="block font-medium leading-snug mt-2"
              style={{
                fontSize: "clamp(18px, 2.5vw, 28px)",
                color: MUTE,
                letterSpacing: "-0.01em",
              }}
            >
              De quem usa todo dia.
            </span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map(({ name, role, initials, rating, text, featured }, i) => (
            <motion.figure
              key={name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{ duration: 0.6, ease: "easeOut" as const, delay: i * 0.1 }}
              className="relative flex flex-col gap-6 p-7 rounded-2xl"
              style={{
                background: featured ? `${GOLD}10` : BG,
                border: featured ? `1px solid ${GOLD}30` : `1px solid ${BORD}`,
              }}
            >
              {/* Stars */}
              <StarRating rating={rating} />

              {/* Quote */}
              <blockquote className="flex-1">
                <p
                  className="leading-relaxed"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.92rem",
                    color: TEXT,
                    fontWeight: featured ? 500 : 400,
                  }}
                >
                  &ldquo;{text}&rdquo;
                </p>
              </blockquote>

              {/* Divider */}
              <div className="h-px w-full" style={{ background: featured ? `${GOLD}25` : BORD }} />

              {/* Author */}
              <figcaption className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${GOLD}18`,
                    border: `1px solid ${GOLD}40`,
                  }}
                  aria-hidden="true"
                >
                  <span
                    className="text-[10px] font-bold"
                    style={{ color: GOLD, fontFamily: "var(--font-jakarta)" }}
                  >
                    {initials}
                  </span>
                </div>
                <div>
                  <p
                    className="font-semibold text-sm"
                    style={{ fontFamily: "var(--font-jakarta)", color: TEXT }}
                  >
                    {name}
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ fontFamily: "var(--font-inter)", color: MUTE }}
                  >
                    {role}
                  </p>
                </div>
              </figcaption>

              {/* Featured gold top accent */}
              {featured && (
                <div
                  className="absolute top-0 left-6 right-6 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }}
                />
              )}
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
