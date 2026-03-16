"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const GOLD = "#00C472";
const TEXT = "#F0EDE8";
const MUTE = "#9A96A0";
const BORD = "#242430";

interface CountUpStatProps {
  value: string;      // e.g. "10.000+", "4.8", "50+"
  label: string;
  accent?: boolean;
}

function parseTarget(value: string): { target: number; suffix: string; decimals: number } {
  const suffix = value.replace(/[\d.,]/g, "");
  const numStr = value.replace(/[^\d.,]/g, "").replace(",", ".");
  const target = parseFloat(numStr) || 0;
  const decimals = numStr.includes(".") ? 1 : 0;
  return { target, suffix, decimals };
}

export default function CountUpStat({ value, label, accent = false }: CountUpStatProps) {
  const { target, suffix, decimals } = parseTarget(value);
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const started = useRef(false);

  useEffect(() => {
    if (!isInView || started.current) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setCurrent(target);
      return;
    }
    started.current = true;
    const duration = 1600;
    const steps = 60;
    const stepDuration = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = 1 - Math.pow(1 - step / steps, 3);
      setCurrent(parseFloat((target * progress).toFixed(decimals)));
      if (step >= steps) {
        setCurrent(target);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, target, decimals]);

  const display =
    decimals > 0
      ? current.toFixed(decimals)
      : Math.round(current).toLocaleString("pt-BR");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: "easeOut" as const }}
      className="flex flex-col items-center text-center gap-2 py-10 px-4"
      style={{ borderRight: `1px solid ${BORD}` }}
    >
      <p
        className="leading-none tabular-nums font-extrabold"
        style={{
          fontFamily: "var(--font-jakarta)",
          fontSize: "clamp(48px, 5.5vw, 72px)",
          color: accent ? GOLD : TEXT,
          letterSpacing: "-0.03em",
        }}
        aria-label={value}
      >
        {display}
        <span style={{ color: GOLD, fontSize: "0.65em" }}>{suffix}</span>
      </p>
      <p
        className="text-xs leading-relaxed"
        style={{ color: MUTE, fontFamily: "var(--font-inter)", maxWidth: "12ch" }}
      >
        {label}
      </p>
    </motion.div>
  );
}
