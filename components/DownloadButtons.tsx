"use client";

const GOLD = "#00C472";
const BG   = "#0A0A0F";
const SURF = "#111118";
const BORD = "#242430";
const TEXT = "#F0EDE8";
const MUTE = "#9A96A0";

const APPLE_STORE_URL = "#"; // TODO: replace with App Store URL
const GOOGLE_PLAY_URL = "#"; // TODO: replace with Google Play URL

function AppleLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 814 1000" fill={TEXT} aria-hidden="true">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105.4-57.9-155.5-127.4C46.7 790.7 0 663 0 541.8c0-194.3 127.4-297.5 252.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
    </svg>
  );
}

function GooglePlayLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 512 512" aria-hidden="true">
      <polygon fill={TEXT} points="48,16 310,134 208,224" opacity="0.9" />
      <polygon fill={TEXT} points="310,134 400,224 208,224" opacity="0.7" />
      <polygon fill={TEXT} points="400,224 310,314 208,224" opacity="0.8" />
      <polygon fill={TEXT} points="310,314 48,432 208,224" opacity="0.6" />
    </svg>
  );
}

export function AppleStoreButton() {
  return (
    <a
      href={APPLE_STORE_URL}
      className="inline-flex items-center gap-3 px-5 py-3.5 rounded-xl transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      style={{ background: SURF, border: `1px solid ${BORD}`, color: TEXT }}
      aria-label="Baixar na App Store (iOS)"
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = `${GOLD}60`;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = BORD;
      }}
    >
      <AppleLogo />
      <div className="flex flex-col text-left">
        <span
          className="text-[9px] uppercase tracking-widest leading-none"
          style={{ color: MUTE, fontFamily: "var(--font-inter)" }}
        >
          Disponível na
        </span>
        <span
          className="text-sm font-semibold leading-tight mt-0.5"
          style={{ color: TEXT, fontFamily: "var(--font-jakarta)" }}
        >
          App Store
        </span>
      </div>
    </a>
  );
}

export function GooglePlayButton() {
  return (
    <a
      href={GOOGLE_PLAY_URL}
      className="inline-flex items-center gap-3 px-5 py-3.5 rounded-xl transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      style={{ background: SURF, border: `1px solid ${BORD}`, color: TEXT }}
      aria-label="Baixar no Google Play (Android)"
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = `${GOLD}60`;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = BORD;
      }}
    >
      <GooglePlayLogo />
      <div className="flex flex-col text-left">
        <span
          className="text-[9px] uppercase tracking-widest leading-none"
          style={{ color: MUTE, fontFamily: "var(--font-inter)" }}
        >
          Disponível no
        </span>
        <span
          className="text-sm font-semibold leading-tight mt-0.5"
          style={{ color: TEXT, fontFamily: "var(--font-jakarta)" }}
        >
          Google Play
        </span>
      </div>
    </a>
  );
}
