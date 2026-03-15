"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E0E0E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" aria-label="AppTradie - Página inicial">
            <Image
              src="/tradie_logo_resized.png"
              alt="AppTradie logo"
              width={36}
              height={36}
              className="rounded-lg"
              priority
            />
            <span
              className="text-xl font-bold text-[#212121]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              AppTradie
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
            <Link
              href="#como-funciona"
              className="text-sm font-medium text-[#757575] hover:text-[#4CAF50] transition-colors duration-150 cursor-pointer"
            >
              Como Funciona
            </Link>
            <Link
              href="#funcionalidades"
              className="text-sm font-medium text-[#757575] hover:text-[#4CAF50] transition-colors duration-150 cursor-pointer"
            >
              Funcionalidades
            </Link>
            <Link
              href="#profissionais"
              className="text-sm font-medium text-[#757575] hover:text-[#4CAF50] transition-colors duration-150 cursor-pointer"
            >
              Para Profissionais
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#download"
              className="bg-[#4CAF50] text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-[#388E3C] transition-colors duration-150 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4CAF50]"
            >
              Baixar App
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-[#757575] hover:text-[#212121] hover:bg-[#F5F5F5] transition-colors duration-150 cursor-pointer"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="md:hidden border-t border-[#E0E0E0] py-4 flex flex-col gap-4">
            <Link
              href="#como-funciona"
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-[#757575] hover:text-[#4CAF50] px-2 cursor-pointer"
            >
              Como Funciona
            </Link>
            <Link
              href="#funcionalidades"
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-[#757575] hover:text-[#4CAF50] px-2 cursor-pointer"
            >
              Funcionalidades
            </Link>
            <Link
              href="#profissionais"
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-[#757575] hover:text-[#4CAF50] px-2 cursor-pointer"
            >
              Para Profissionais
            </Link>
            <a
              href="#download"
              onClick={() => setOpen(false)}
              className="bg-[#4CAF50] text-white text-sm font-semibold px-5 py-3 rounded-xl text-center hover:bg-[#388E3C] transition-colors duration-150 mx-2 cursor-pointer"
            >
              Baixar App
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
