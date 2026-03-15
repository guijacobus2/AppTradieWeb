"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpStatProps {
  value: string;      // e.g. "10.000+", "4.8", "50+"
  label: string;
  children: React.ReactNode; // icon
}

function parseTarget(value: string): { target: number; suffix: string; decimals: number } {
  // Strip non-numeric except dot/comma
  const suffix = value.replace(/[\d.,]/g, "");
  const numStr = value.replace(/[^\d.,]/g, "").replace(",", ".");
  const target = parseFloat(numStr) || 0;
  const decimals = numStr.includes(".") ? 1 : 0;
  return { target, suffix, decimals };
}

export default function CountUpStat({ value, label, children }: CountUpStatProps) {
  const { target, suffix, decimals } = parseTarget(value);
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setCurrent(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const stepDuration = duration / steps;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            // Ease-out: fast start, slow end
            const progress = 1 - Math.pow(1 - step / steps, 3);
            setCurrent(parseFloat((target * progress).toFixed(decimals)));
            if (step >= steps) {
              setCurrent(target);
              clearInterval(timer);
            }
          }, stepDuration);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, decimals]);

  const display =
    decimals > 0
      ? current.toFixed(decimals)
      : Math.round(current).toLocaleString("pt-BR");

  return (
    <div ref={ref} className="flex flex-col items-center text-center gap-3">
      <div className="stat-icon-wrap">{children}</div>
      <div>
        <p
          className="text-3xl font-bold text-[#212121] tabular-nums"
          style={{ fontFamily: "var(--font-poppins)" }}
          aria-label={value}
        >
          {display}{suffix}
        </p>
        <p className="text-sm text-[#757575] mt-0.5 leading-snug">{label}</p>
      </div>
    </div>
  );
}
