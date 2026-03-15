import { AppleStoreButton, GooglePlayButton } from "./DownloadButtons";
import {
  WrenchIcon,
  LightningIcon,
  BroomIcon,
  HammerIcon,
  PaintRollerIcon,
  TrowelIcon,
  HomeIcon,
  SearchIcon,
  ClipboardIcon,
  PersonIcon,
  StarIcon,
} from "./icons/StrokeIcons";

const categoryIcons = [
  { icon: WrenchIcon, label: "Encanador" },
  { icon: LightningIcon, label: "Eletricista" },
  { icon: BroomIcon, label: "Diarista" },
  { icon: HammerIcon, label: "Marceneiro" },
  { icon: PaintRollerIcon, label: "Pintor" },
  { icon: TrowelIcon, label: "Pedreiro" },
];

const navIcons = [
  { icon: HomeIcon, active: true },
  { icon: SearchIcon, active: false },
  { icon: ClipboardIcon, active: false },
  { icon: PersonIcon, active: false },
];

export default async function Hero() {
  return (
    <section className="pt-16 min-h-screen bg-[#1A2E1A] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Serviços domésticos{" "}
              <span className="text-[#4CAF50]">ao seu alcance</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-[#A5D6A7] leading-relaxed max-w-xl">
              Encontre encanadores, eletricistas, diaristas e muito mais perto de você.
              Peça orçamentos, compare preços e contrate com facilidade pelo app.
            </p>

            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2" id="download">
              <AppleStoreButton />
              <GooglePlayButton />
            </div>

            {/* Social proof micro-stats */}
            <div className="flex flex-wrap gap-6 pt-4 border-t border-white/10">
              <div>
                <p className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-poppins)" }}>
                  10k+
                </p>
                <p className="text-sm text-[#A5D6A7]/70">Profissionais</p>
              </div>
              <div className="w-px bg-white/10" aria-hidden="true" />
              <div>
                <p className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-poppins)" }}>
                  50k+
                </p>
                <p className="text-sm text-[#A5D6A7]/70">Serviços realizados</p>
              </div>
              <div className="w-px bg-white/10" aria-hidden="true" />
              <div>
                <p className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-poppins)" }}>
                  4.8★
                </p>
                <p className="text-sm text-[#A5D6A7]/70">Avaliação média</p>
              </div>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center lg:justify-end" aria-label="Prévia do aplicativo AppTradie">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[#4CAF50]/20 blur-3xl rounded-full scale-75" aria-hidden="true" />

              {/* Phone frame */}
              <div className="relative w-64 sm:w-72 lg:w-80 bg-[#243624] rounded-[3rem] border-2 border-[#4CAF50]/30 shadow-2xl overflow-hidden aspect-[9/19]">
                {/* Status bar */}
                <div className="flex items-center justify-between px-6 pt-4 pb-2" aria-hidden="true">
                  <span className="text-white text-xs font-medium">9:41</span>
                  <div className="w-20 h-5 bg-[#1A2E1A] rounded-full" />
                  <div className="flex items-center gap-1">
                    <div className="w-3.5 h-2 border border-white/50 rounded-sm">
                      <div className="h-full w-3/4 bg-[#4CAF50] rounded-sm" />
                    </div>
                  </div>
                </div>

                {/* App screen */}
                <div className="px-4 py-2 flex flex-col gap-3">
                  {/* Greeting card */}
                  <div className="bg-[#4CAF50] rounded-2xl p-4 text-white" aria-hidden="true">
                    <p className="text-xs opacity-80">Bom dia, Maria!</p>
                    <p className="text-sm font-bold mt-0.5">O que precisa hoje?</p>
                  </div>

                  {/* Category chips with stroke SVG icons */}
                  <div className="grid grid-cols-3 gap-2" aria-hidden="true">
                    {categoryIcons.map(({ icon: Icon, label }) => (
                      <div
                        key={label}
                        className="bg-[#1A2E1A] rounded-xl p-2 flex flex-col items-center gap-1"
                      >
                        <Icon size={16} stroke="white" />
                        <p className="text-white text-[8px] leading-tight text-center">{label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Provider card — animated float-up */}
                  <div
                    className="bg-white rounded-2xl p-3 shadow-sm hero-float-card"
                    aria-hidden="true"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">JP</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[#212121] text-xs font-semibold truncate">João Paulo</p>
                        <p className="text-[#757575] text-[9px]">Encanador • 2.3 km</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-0.5 justify-end">
                          <StarIcon size={10} stroke="#FF9500" className="fill-[#FF9500]" />
                          <p className="text-[#4CAF50] text-xs font-bold">4.9</p>
                        </div>
                        <p className="text-[#757575] text-[9px]">127 jobs</p>
                      </div>
                    </div>
                    <div className="mt-2 bg-[#4CAF50] rounded-lg py-1.5 text-center">
                      <p className="text-white text-[9px] font-semibold">Contratar agora</p>
                    </div>
                  </div>

                  {/* Floating notification badge */}
                  <div
                    className="flex items-center gap-2 bg-[#1A2E1A] border border-[#4CAF50]/30 rounded-xl px-3 py-2 hero-notification-card"
                    aria-hidden="true"
                  >
                    <div className="w-5 h-5 bg-[#4CAF50] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-[8px] font-bold">!</span>
                    </div>
                    <p className="text-[#A5D6A7] text-[9px]">
                      <span className="text-white font-semibold">3 orçamentos</span> recebidos
                    </p>
                  </div>
                </div>

                {/* Bottom nav with stroke icons */}
                <div
                  className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#E0E0E0] flex justify-around py-3 px-4"
                  aria-hidden="true"
                >
                  {navIcons.map(({ icon: Icon, active }, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-0.5"
                    >
                      <Icon
                        size={18}
                        stroke={active ? "#4CAF50" : "#BDBDBD"}
                      />
                      <div
                        className={`h-0.5 w-3 rounded-full ${active ? "bg-[#4CAF50]" : "bg-transparent"}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
