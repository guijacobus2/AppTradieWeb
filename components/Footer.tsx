import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Categorias", href: "#categorias" },
  { label: "Para Profissionais", href: "#profissionais" },
  { label: "Baixar App", href: "#download" },
];

const legalLinks = [
  { label: "Política de Privacidade", href: "#" },
  { label: "Termos de Uso", href: "#" },
];

export default async function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1A2E1A] text-[#A5D6A7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-8 border-b border-white/10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-flex items-center gap-2" aria-label="AppTradie - Página inicial">
              <Image
                src="/tradie_logo_resized.png"
                alt="AppTradie logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span
                className="text-white font-bold text-lg"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                AppTradie
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Conectando brasileiros com profissionais de serviços domésticos de forma rápida, segura e confiável.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Links do rodapé">
            <p className="text-white font-semibold text-sm mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
              Navegação
            </p>
            <ul className="flex flex-col gap-3" role="list">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm hover:text-white transition-colors duration-150 cursor-pointer"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Links legais">
            <p className="text-white font-semibold text-sm mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
              Legal
            </p>
            <ul className="flex flex-col gap-3" role="list">
              {legalLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm hover:text-white transition-colors duration-150 cursor-pointer"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#757575]">
            &copy; {year} AppTradie. Todos os direitos reservados.
          </p>
          <p className="text-xs text-[#757575]">
            Feito com cuidado no Brasil 🇧🇷
          </p>
        </div>
      </div>
    </footer>
  );
}
