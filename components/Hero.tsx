"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { AppleStoreButton, GooglePlayButton } from "./DownloadButtons";
import {
  WrenchIcon,
  LightningIcon,
  BroomIcon,
  HammerIcon,
  PaintRollerIcon,
  TrowelIcon,
  StarIcon,
} from "./icons/StrokeIcons";

const GOLD = "#00C472";
const BG   = "#0A0A0F";
const SURF = "#111118";
const RAIS = "#1A1A24";
const BORD = "#242430";
const TEXT = "#F0EDE8";
const MUTE = "#9A96A0";

const categoryIcons = [
  { icon: WrenchIcon,      label: "Encanador"  },
  { icon: LightningIcon,   label: "Eletricista" },
  { icon: BroomIcon,       label: "Diarista"    },
  { icon: HammerIcon,      label: "Marceneiro"  },
  { icon: PaintRollerIcon, label: "Pintor"      },
  { icon: TrowelIcon,      label: "Pedreiro"    },
];

/* ─── Dashboard Screen (static, no tabs) ─── */
function DashboardScreen() {
  return (
    <div className="flex flex-col gap-3">
      {/* Greeting card */}
      <div
        className="rounded-xl p-4"
        style={{ background: `linear-gradient(135deg, ${GOLD}22 0%, ${GOLD}08 100%)`, border: `1px solid ${GOLD}30` }}
      >
        <p className="text-xs mb-0.5" style={{ color: MUTE, fontFamily: "var(--font-inter)" }}>
          Bom dia, Maria!
        </p>
        <p className="text-sm font-bold" style={{ color: TEXT, fontFamily: "var(--font-jakarta)" }}>
          O que precisa hoje?
        </p>
      </div>

      {/* Category chips */}
      <div className="grid grid-cols-3 gap-2">
        {categoryIcons.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="rounded-xl p-2.5 flex flex-col items-center gap-1.5"
            style={{ background: RAIS, border: `1px solid ${BORD}` }}
          >
            <Icon size={15} stroke={GOLD} />
            <p className="text-[8px] leading-tight text-center" style={{ color: MUTE, fontFamily: "var(--font-inter)" }}>
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* Provider card — floats in */}
      <div
        className="rounded-xl p-3 hero-float-card"
        style={{ background: SURF, border: `1px solid ${BORD}` }}
      >
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: `${GOLD}20`, border: `1px solid ${GOLD}40` }}
          >
            <span className="text-xs font-bold" style={{ color: GOLD, fontFamily: "var(--font-jakarta)" }}>JP</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold truncate" style={{ color: TEXT, fontFamily: "var(--font-jakarta)" }}>
              João Paulo
            </p>
            <p className="text-[9px]" style={{ color: MUTE, fontFamily: "var(--font-inter)" }}>
              Encanador · 2.3 km
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-0.5 justify-end">
              <StarIcon size={10} stroke={GOLD} className="fill-[#00C472]" />
              <p className="text-xs font-bold" style={{ color: GOLD, fontFamily: "var(--font-jakarta)" }}>4.9</p>
            </div>
            <p className="text-[9px]" style={{ color: MUTE, fontFamily: "var(--font-inter)" }}>127 jobs</p>
          </div>
        </div>
        <div
          className="mt-2.5 py-1.5 rounded-lg text-center"
          style={{ background: GOLD }}
        >
          <p className="text-[9px] font-bold" style={{ color: BG, fontFamily: "var(--font-jakarta)" }}>
            Contratar agora
          </p>
        </div>
      </div>

      {/* Notification — slides in */}
      <div
        className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 hero-notification-card"
        style={{ background: RAIS, border: `1px solid ${GOLD}25` }}
      >
        <div
          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: `${GOLD}25` }}
        >
          <span className="text-[8px] font-bold" style={{ color: GOLD }}>3</span>
        </div>
        <p className="text-[9px]" style={{ color: MUTE, fontFamily: "var(--font-inter)" }}>
          <span style={{ color: TEXT, fontWeight: 600 }}>3 orçamentos</span> recebidos
        </p>
      </div>
    </div>
  );
}

/* ─── Phone Mockup — mouse tilt only, no tabs ─── */
function PhoneMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]),  { stiffness: 180, damping: 28 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 180, damping: 28 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - left) / width - 0.5);
    mouseY.set((e.clientY - top) / height - 0.5);
  }
  function onMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative"
      style={{ perspective: "1200px" }}
      aria-label="Prévia do aplicativo Uppi"
    >
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative">
        {/* Soft gold glow behind phone */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 60%, ${GOLD}18 0%, transparent 70%)`,
            transform: "scale(1.3) translateZ(-20px)",
            borderRadius: "50px",
          }}
          aria-hidden="true"
        />

        {/* Phone frame */}
        <div
          className="relative overflow-hidden"
          style={{
            width: "260px",
            aspectRatio: "9/19.5",
            background: SURF,
            border: `1px solid ${BORD}`,
            borderRadius: "40px",
            boxShadow: `0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px ${BORD}`,
          }}
        >
          {/* Notch */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 z-10"
            style={{ width: "80px", height: "26px", background: BG, borderRadius: "0 0 18px 18px" }}
            aria-hidden="true"
          />

          {/* Status bar */}
          <div
            className="flex items-center justify-between px-5 pt-4 pb-2"
            aria-hidden="true"
          >
            <span className="text-[9px] font-semibold" style={{ color: TEXT, fontFamily: "var(--font-jakarta)" }}>9:41</span>
            <div style={{ width: "80px" }} />
            <div className="flex items-center gap-1">
              <div style={{ width: "15px", height: "8px", border: `1px solid ${BORD}`, borderRadius: "2px", padding: "1px" }}>
                <div style={{ height: "100%", width: "75%", background: GOLD, borderRadius: "1px" }} />
              </div>
            </div>
          </div>

          {/* Scrollable app content */}
          <div className="px-3 pb-4 overflow-hidden">
            <DashboardScreen />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Stagger variants ─── */
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
};
const item = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

/* ─── Hero ─── */
export default function Hero() {
  return (
    <section
      className="relative pt-16 min-h-screen flex items-center overflow-hidden hero-glow"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Text content ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-7"
          >
            {/* Headline */}
            <motion.h1
              variants={item}
              style={{ fontFamily: "var(--font-jakarta)", letterSpacing: "-0.03em", lineHeight: 1.08 }}
            >
              <span
                className="block font-extrabold"
                style={{ fontSize: "clamp(44px, 6vw, 80px)", color: TEXT }}
              >
                Serviços domésticos
              </span>
              <span
                className="block font-extrabold"
                style={{ fontSize: "clamp(44px, 6vw, 80px)", color: GOLD }}
              >
                na palma da sua mão.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={item}
              className="leading-relaxed max-w-lg"
              style={{ fontFamily: "var(--font-inter)", fontSize: "1rem", color: MUTE }}
            >
              Encontre encanadores, eletricistas, diaristas e muito mais perto
              de você. Peça orçamentos, compare preços e contrate com facilidade.
            </motion.p>

            {/* Download buttons */}
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-3" id="download">
              <AppleStoreButton />
              <GooglePlayButton />
            </motion.div>

            {/* Micro-stats */}
            <motion.div
              variants={item}
              className="flex flex-wrap gap-8 pt-6"
              style={{ borderTop: `1px solid ${BORD}` }}
            >
              {[
                { num: "10k+", label: "Profissionais" },
                { num: "50k+", label: "Serviços realizados" },
                { num: "4.8★", label: "Avaliação média" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p
                    className="font-bold leading-none"
                    style={{ fontFamily: "var(--font-jakarta)", fontSize: "1.6rem", color: TEXT }}
                  >
                    {num}
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: MUTE, fontFamily: "var(--font-inter)" }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Phone mockup ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
