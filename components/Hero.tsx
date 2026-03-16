"use client";

import { useState } from "react";
import { AppleStoreButton, GooglePlayButton } from "./DownloadButtons";
import {
  WrenchIcon,
  LightningIcon,
  BroomIcon,
  HammerIcon,
  PaintRollerIcon,
  TrowelIcon,
  HomeIcon,
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

type Tab = "home" | "bookings" | "profile";

const navTabs: { id: Tab; icon: typeof HomeIcon; label: string }[] = [
  { id: "home", icon: HomeIcon, label: "Início" },
  { id: "bookings", icon: ClipboardIcon, label: "Pedidos" },
  { id: "profile", icon: PersonIcon, label: "Perfil" },
];

/* ─── Screen: Dashboard ─── */
function DashboardScreen() {
  return (
    <div className="flex flex-col gap-3">
      {/* Greeting card */}
      <div className="bg-[#4CAF50] rounded-2xl p-4 text-white">
        <p className="text-xs opacity-80">Bom dia, Maria!</p>
        <p className="text-sm font-bold mt-0.5">O que precisa hoje?</p>
      </div>

      {/* Category chips */}
      <div className="grid grid-cols-3 gap-2">
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

      {/* Provider card */}
      <div className="bg-white rounded-2xl p-3 shadow-sm hero-float-card">
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

      {/* Notification badge */}
      <div className="flex items-center gap-2 bg-[#1A2E1A] border border-[#4CAF50]/30 rounded-xl px-3 py-2 hero-notification-card">
        <div className="w-5 h-5 bg-[#4CAF50] rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white text-[8px] font-bold">!</span>
        </div>
        <p className="text-[#A5D6A7] text-[9px]">
          <span className="text-white font-semibold">3 orçamentos</span> recebidos
        </p>
      </div>
    </div>
  );
}

/* ─── Screen: Bookings ─── */
const bookings = [
  {
    initials: "JP",
    name: "João Paulo",
    role: "Encanador",
    date: "18 Mar • 09:00",
    status: "Confirmado",
    statusColor: "#4CAF50",
    statusBg: "#E8F5E9",
  },
  {
    initials: "AL",
    name: "Ana Lima",
    role: "Diarista",
    date: "20 Mar • 14:00",
    status: "Pendente",
    statusColor: "#FF9500",
    statusBg: "#FFF3E0",
  },
  {
    initials: "RM",
    name: "Rafael Melo",
    role: "Eletricista",
    date: "22 Mar • 10:30",
    status: "Confirmado",
    statusColor: "#4CAF50",
    statusBg: "#E8F5E9",
  },
];

function BookingsScreen() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-white text-xs font-semibold px-1">Meus Agendamentos</p>
      {bookings.map((b) => (
        <div key={b.name} className="bg-white rounded-2xl p-3 shadow-sm">
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "#4CAF50" }}
            >
              <span className="text-white text-[9px] font-bold">{b.initials}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[#212121] text-[10px] font-semibold truncate">{b.name}</p>
              <p className="text-[#757575] text-[8px]">{b.role}</p>
            </div>
            <span
              className="text-[8px] font-semibold px-1.5 py-0.5 rounded-full"
              style={{ color: b.statusColor, backgroundColor: b.statusBg }}
            >
              {b.status}
            </span>
          </div>
          <div className="mt-1.5 flex items-center gap-1 pl-9">
            <div className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]" />
            <p className="text-[#757575] text-[8px]">{b.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Screen: Profile ─── */
const profileMenuItems = [
  { label: "Dados pessoais" },
  { label: "Avaliações" },
  { label: "Configurações" },
];

function ProfileScreen() {
  return (
    <div className="flex flex-col gap-3">
      {/* Avatar + name */}
      <div className="flex flex-col items-center gap-2 py-2">
        <div className="w-14 h-14 bg-[#4CAF50] rounded-full flex items-center justify-center">
          <span className="text-white text-lg font-bold">M</span>
        </div>
        <div className="text-center">
          <p className="text-white text-xs font-semibold">Maria Silva</p>
          <p className="text-[#A5D6A7] text-[9px]">São Paulo, SP</p>
        </div>
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <StarIcon key={s} size={10} stroke="#FF9500" className="fill-[#FF9500]" />
          ))}
          <p className="text-[#A5D6A7] text-[9px] ml-0.5">4.8</p>
        </div>
      </div>

      {/* Menu items */}
      <div className="flex flex-col gap-1.5">
        {profileMenuItems.map((item) => (
          <div
            key={item.label}
            className="bg-white rounded-xl px-3 py-2.5 flex items-center justify-between"
          >
            <p className="text-[#212121] text-[10px] font-medium">{item.label}</p>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18l6-6-6-6"
                stroke="#BDBDBD"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Hero ─── */
export default function Hero() {
  const [activeTab, setActiveTab] = useState<Tab>("home");

  return (
    <section className="relative pt-16 min-h-screen bg-[#1A2E1A] flex items-center overflow-hidden">
      {/* Background orbs */}
      <div className="absolute -top-32 -left-48 w-[600px] h-[600px] rounded-full bg-[#4CAF50]/15 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-40 -right-48 w-[700px] h-[700px] rounded-full bg-[#4CAF50]/10 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#A5D6A7]/8 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full bg-[#388E3C]/12 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
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

                {/* App screen — fades between tabs */}
                <div className="px-4 py-2 pb-16 overflow-hidden">
                  <div
                    key={activeTab}
                    className="animate-fade-in"
                    aria-hidden="true"
                  >
                    {activeTab === "home" && <DashboardScreen />}
                    {activeTab === "bookings" && <BookingsScreen />}
                    {activeTab === "profile" && <ProfileScreen />}
                  </div>
                </div>

                {/* Bottom nav — 3 tabs, no Search */}
                <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#E0E0E0] flex justify-around py-3 px-4">
                  {navTabs.map(({ id, icon: Icon, label }) => {
                    const active = activeTab === id;
                    return (
                      <button
                        key={id}
                        onClick={() => setActiveTab(id)}
                        className="flex flex-col items-center gap-0.5 cursor-pointer focus:outline-none"
                        aria-label={label}
                      >
                        <Icon size={18} stroke={active ? "#4CAF50" : "#BDBDBD"} />
                        <div
                          className={`h-0.5 w-3 rounded-full transition-colors duration-200 ${
                            active ? "bg-[#4CAF50]" : "bg-transparent"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
