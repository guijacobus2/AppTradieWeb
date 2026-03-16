import { SearchIcon, WrenchIcon } from "./icons/StrokeIcons";

// Custom chat-bubble icon for the "orçamentos" step
function ChatBubbleIcon({ size = 32, stroke = "currentColor" }: { size?: number; stroke?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
        stroke={stroke} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"
      />
      <path d="M8 10h8M8 13h5" stroke={stroke} strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
}

const steps = [
  {
    step: "01",
    StepIcon: SearchIcon,
    title: "Busque o serviço",
    description:
      "Digite o que precisa, encanador, eletricista, diarista, pintor, e encontre profissionais disponíveis perto de você em segundos.",
    accentColor: "#4CAF50",
    delay: "0ms",
  },
  {
    step: "02",
    StepIcon: ChatBubbleIcon,
    title: "Receba orçamentos",
    description:
      "Profissionais enviam propostas com preço e prazo. Compare, veja avaliações e escolha o que melhor atende você.",
    accentColor: "#007AFF",
    delay: "120ms",
  },
  {
    step: "03",
    StepIcon: WrenchIcon,
    title: "Serviço realizado",
    description:
      "Acompanhe o status em tempo real. Ao concluir, avalie o profissional e ajude outros usuários a escolherem bem.",
    accentColor: "#4CAF50",
    delay: "240ms",
  },
];

export default async function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#4CAF50] uppercase tracking-wider mb-3">
            Simples assim
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#212121]"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Como funciona o AppTradie
          </h2>
          <p className="mt-4 text-lg text-[#757575] max-w-2xl mx-auto">
            Em menos de 5 minutos você encontra, contrata e acompanha um profissional qualificado.
          </p>
        </div>

        {/* UIverse-style step cards */}
        <div className="flex flex-col gap-6 max-w-3xl mx-auto">
          {steps.map(({ step, StepIcon, title, description, accentColor, delay }) => (
            <div
              key={step}
              className="hiw-card bg-white rounded-2xl shadow-sm border border-[#EEEEEE] overflow-hidden flex"
              style={{ "--hiw-delay": delay } as React.CSSProperties}
            >
              {/* Left accent bar */}
              <div
                className="w-1.5 flex-shrink-0"
                style={{ backgroundColor: accentColor }}
                aria-hidden="true"
              />

              {/* Card content */}
              <div className="flex items-center gap-5 p-6 flex-1">
                {/* Icon box */}
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${accentColor}18` }}
                  aria-label={`Passo ${step}`}
                >
                  <StepIcon size={24} stroke={accentColor} />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1.5">
                  <h3
                    className="text-lg font-semibold text-[#212121]"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {title}
                  </h3>
                  <p className="text-[#757575] leading-relaxed text-sm sm:text-base">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
