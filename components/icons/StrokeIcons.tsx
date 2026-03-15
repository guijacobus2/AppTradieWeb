// Hand-drawn sticker-style SVG icons
// Style: thick strokes (2.5–3px), rounded linecap/linejoin, transparent bg
// All icons accept className and size props

interface IconProps {
  size?: number;
  className?: string;
  stroke?: string;
}

const STROKE = "currentColor";
const SW = 2.5;
const LC = "round" as const;
const LJ = "round" as const;

export function WrenchIcon({ size = 24, className = "", stroke = STROKE }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
        stroke={stroke} strokeWidth={SW} strokeLinecap={LC} strokeLinejoin={LJ}
      />
    </svg>
  );
}

export function LightningIcon({ size = 24, className = "", stroke = STROKE }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <polyline
        points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
        stroke={stroke} strokeWidth={SW} strokeLinecap={LC} strokeLinejoin={LJ}
      />
    </svg>
  );
}

export function BroomIcon({ size = 24, className = "", stroke = STROKE }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 20L16 8" stroke={stroke} strokeWidth={SW} strokeLinecap={LC} strokeLinejoin={LJ} />
      <path d="M8.5 3.5C9.5 2.5 12 2 14 4s1.5 4.5.5 5.5" stroke={stroke} strokeWidth={SW} strokeLinecap={LC} strokeLinejoin={LJ} />
      <path d="M16 8c1-1 3.5-1.5 5 0s1 4-2 5l-5-5z" stroke={stroke} strokeWidth={SW} strokeLinecap={LC} strokeLinejoin={LJ} />
      <path d="M4 20h6" stroke={stroke} strokeWidth={SW} strokeLinecap={LC} />
    </svg>
  );
}

export function HammerIcon({ size = 24, className = "", stroke = STROKE }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M15 12l-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"
        stroke={stroke} strokeWidth={SW} strokeLinecap={LC} strokeLinejoin={LJ}
      />
      <path
        d="M17.64 15L22 10.64 13.36 2 9 6.36l2.3 2.3"
        stroke={stroke} strokeWidth={SW} strokeLinecap={LC} strokeLinejoin={LJ}
      />
      <path d="M16 8l-4-4" stroke={stroke} strokeWidth={SW} strokeLinecap={LC} strokeLinejoin={LJ} />
    </svg>
  );
}

export function PaintRollerIcon({ size = 24, className = "", stroke = STROKE }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="14" height="7" rx="2" stroke={stroke} strokeWidth={SW} strokeLinecap={LC} strokeLinejoin={LJ} />
      <path d="M17 7h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2" stroke={stroke} strokeWidth={SW} strokeLinecap={LC} strokeLinejoin={LJ} />
      <path d="M10 12v5" stroke={stroke} strokeWidth={SW} strokeLinecap={LC} />
      <rect x="8" y="17" width="4" height="4" rx="1" stroke={stroke} strokeWidth={SW} strokeLinecap={LC} strokeLinejoin={LJ} />
    </svg>
  );
}

export function TrowelIcon({ size = 24, className = "", stroke = STROKE }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3 21l4-4" stroke={stroke} strokeWidth={SW} strokeLinecap={LC} strokeLinejoin={LJ} />
      <path d="M7.5 16.5L15 9l-6-6-7.5 7.5 6 6z" stroke={stroke} strokeWidth={SW} strokeLinecap={LC} strokeLinejoin={LJ} />
      <path d="M15 9l3.5-3.5a2 2 0 0 1 2.83 2.83L17.83 12" stroke={stroke} strokeWidth={SW} strokeLinecap={LC} strokeLinejoin={LJ} />
    </svg>
  );
}

export function HomeIcon({ size = 24, className = "", stroke = STROKE }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" stroke={stroke} strokeWidth={SW} strokeLinecap={LC} strokeLinejoin={LJ} />
      <path d="M9 21V12h6v9" stroke={stroke} strokeWidth={SW} strokeLinecap={LC} strokeLinejoin={LJ} />
    </svg>
  );
}

export function SearchIcon({ size = 24, className = "", stroke = STROKE }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke={stroke} strokeWidth={SW} strokeLinecap={LC} />
      <path d="M21 21l-4.35-4.35" stroke={stroke} strokeWidth={SW} strokeLinecap={LC} />
    </svg>
  );
}

export function ClipboardIcon({ size = 24, className = "", stroke = STROKE }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="8" y="2" width="8" height="4" rx="1" stroke={stroke} strokeWidth={SW} strokeLinecap={LC} strokeLinejoin={LJ} />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" stroke={stroke} strokeWidth={SW} strokeLinecap={LC} strokeLinejoin={LJ} />
      <path d="M9 12h6M9 16h4" stroke={stroke} strokeWidth={SW} strokeLinecap={LC} />
    </svg>
  );
}

export function PersonIcon({ size = 24, className = "", stroke = STROKE }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="7" r="4" stroke={stroke} strokeWidth={SW} strokeLinecap={LC} strokeLinejoin={LJ} />
      <path d="M4 21v-1a8 8 0 0 1 16 0v1" stroke={stroke} strokeWidth={SW} strokeLinecap={LC} strokeLinejoin={LJ} />
    </svg>
  );
}

export function UsersIcon({ size = 24, className = "", stroke = STROKE }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="9" cy="7" r="4" stroke={stroke} strokeWidth={SW} strokeLinecap={LC} strokeLinejoin={LJ} />
      <path d="M2 21v-1a7 7 0 0 1 14 0v1" stroke={stroke} strokeWidth={SW} strokeLinecap={LC} strokeLinejoin={LJ} />
      <path d="M16 3.13a4 4 0 0 1 0 7.75M22 21v-1a7 7 0 0 0-5.39-6.78" stroke={stroke} strokeWidth={SW} strokeLinecap={LC} strokeLinejoin={LJ} />
    </svg>
  );
}

export function CheckCircleIcon({ size = 24, className = "", stroke = STROKE }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke={stroke} strokeWidth={SW} strokeLinecap={LC} strokeLinejoin={LJ} />
      <path d="M8 12l3 3 5-5" stroke={stroke} strokeWidth={SW} strokeLinecap={LC} strokeLinejoin={LJ} />
    </svg>
  );
}

export function StarIcon({ size = 24, className = "", stroke = STROKE }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        stroke={stroke} strokeWidth={SW} strokeLinecap={LC} strokeLinejoin={LJ}
      />
    </svg>
  );
}

export function MapPinIcon({ size = 24, className = "", stroke = STROKE }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 21C12 21 5 13.5 5 8.5a7 7 0 0 1 14 0c0 5-7 12.5-7 12.5z" stroke={stroke} strokeWidth={SW} strokeLinecap={LC} strokeLinejoin={LJ} />
      <circle cx="12" cy="8.5" r="2.5" stroke={stroke} strokeWidth={SW} />
    </svg>
  );
}

export function BellIcon({ size = 24, className = "", stroke = STROKE }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke={stroke} strokeWidth={SW} strokeLinecap={LC} strokeLinejoin={LJ} />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke={stroke} strokeWidth={SW} strokeLinecap={LC} strokeLinejoin={LJ} />
    </svg>
  );
}
