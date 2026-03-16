import { AppleStoreButton, GooglePlayButton } from "./DownloadButtons";

const GOLD = "#00C472";
const BG   = "#0A0A0F";
const SURF = "#111118";
const BORD = "#242430";
const TEXT = "#F0EDE8";
const MUTE = "#9A96A0";

export default async function DownloadCTA() {
  return (
    <section
      className="py-24 lg:py-32"
      id="download"
      style={{
        background: SURF,
        borderTop: `1px solid ${BORD}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gold gradient top bar */}
        <div
          className="w-24 h-px mb-12"
          style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }}
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Big headline */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: GOLD, fontFamily: "var(--font-inter)" }}
            >
              Download gratuito
            </p>
            <h2
              className="font-extrabold leading-none"
              style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: "clamp(44px, 6vw, 80px)",
                color: TEXT,
                letterSpacing: "-0.03em",
              }}
            >
              Baixe agora.
              <br />
              <span style={{ color: GOLD }}>É grátis.</span>
            </h2>
            <p
              className="mt-6 leading-relaxed max-w-sm text-sm"
              style={{ fontFamily: "var(--font-inter)", color: MUTE }}
            >
              Disponível gratuitamente para iOS e Android. Cadastro rápido, sem
              burocracia — comece a usar em minutos.
            </p>
          </div>

          {/* Right: Download buttons + badge */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <AppleStoreButton />
              <GooglePlayButton />
            </div>

            {/* Badge strip */}
            <div
              className="flex items-center gap-4 pt-4"
              style={{ borderTop: `1px solid ${BORD}` }}
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-px" style={{ background: `${GOLD}60` }} />
                <span
                  className="text-[9px] uppercase tracking-widest"
                  style={{ color: MUTE, fontFamily: "var(--font-inter)" }}
                >
                  Gratuito para download
                </span>
              </div>
              <div className="w-px h-4" style={{ background: BORD }} />
              <span
                className="text-[9px] uppercase tracking-widest"
                style={{ color: MUTE, fontFamily: "var(--font-inter)" }}
              >
                Sem taxa de cadastro
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
