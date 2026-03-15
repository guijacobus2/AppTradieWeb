import { MapPin, LayoutGrid, FileText, Star, Clock } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Profissionais perto de você",
    description: "Filtre por distância (5 a 20 km) e veja apenas quem pode atender seu endereço.",
    color: "#4CAF50",
  },
  {
    icon: LayoutGrid,
    title: "Mais de 40 categorias",
    description: "Encanador, eletricista, diarista, marceneiro, pintor, pedreiro e muito mais.",
    color: "#007AFF",
  },
  {
    icon: FileText,
    title: "Orçamentos transparentes",
    description: "Receba propostas detalhadas com preço fixo ou por hora. Sem surpresas na hora de contratar.",
    color: "#FF9500",
  },
  {
    icon: Star,
    title: "Avaliações verificadas",
    description: "Todas as avaliações são de clientes reais. Veja histórico e notas antes de contratar.",
    color: "#FF9500",
  },
  {
    icon: Clock,
    title: "Acompanhamento em tempo real",
    description: "Receba notificações de cada etapa: proposta enviada, a caminho e serviço concluído.",
    color: "#007AFF",
  },
];

export default async function Features() {
  return (
    <section id="funcionalidades" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#4CAF50] uppercase tracking-wider mb-3">
            Por que usar o AppTradie
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#212121]"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Tudo o que você precisa em um app
          </h2>
          <p className="mt-4 text-lg text-[#757575] max-w-2xl mx-auto">
            Do pedido à conclusão, cuidamos de cada detalhe para que você tenha a melhor experiência.
          </p>
        </div>

        {/* Feature grid — 5 cards, last one centered on large screens */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description, color }, index) => (
            <div
              key={title}
              className={`bg-[#F8F8F8] rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200 ${
                // Center the 5th card on lg screens (3-col grid, last row has 2 items → 3rd slot empty)
                index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${color}15` }}
                aria-hidden="true"
              >
                <Icon size={22} style={{ color }} strokeWidth={2} />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3
                  className="text-base font-semibold text-[#212121]"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {title}
                </h3>
                <p className="text-sm text-[#757575] leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
