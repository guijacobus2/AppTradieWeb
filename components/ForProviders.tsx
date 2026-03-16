import { TrendingUp, Bell, BarChart2, BadgeCheck } from "lucide-react";
import { AppleStoreButton, GooglePlayButton } from "./DownloadButtons";

const benefits = [
  {
    icon: Bell,
    title: "Receba pedidos em tempo real",
    description: "Seja notificado imediatamente quando um cliente próximo solicita o seu serviço.",
  },
  {
    icon: TrendingUp,
    title: "Aumente sua renda",
    description: "Defina seu preço, aceite mais jobs e expanda sua carteira de clientes sem custo fixo.",
  },
  {
    icon: BarChart2,
    title: "Painel de controle completo",
    description: "Acompanhe sua receita semanal, taxa de conclusão e avaliações tudo em um só lugar.",
  },
  {
    icon: BadgeCheck,
    title: "Construa sua reputação",
    description: "Um perfil bem avaliado atrai mais clientes. Cada serviço bem-feito é uma estrela a mais.",
  },
];

export default async function ForProviders() {
  return (
    <section id="profissionais" className="py-20 lg:py-28 bg-[#1A2E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold text-[#81C784] uppercase tracking-wider">
                Para profissionais
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-white"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Transforme seu ofício em um negócio próspero
              </h2>
              <p className="text-lg text-[#A5D6A7] leading-relaxed">
                Cadastre-se gratuitamente, defina sua área de atendimento e comece a receber
                pedidos de clientes perto de você. Você no controle do seu tempo e dinheiro.
              </p>
            </div>

            {/* Benefits list */}
            <ul className="flex flex-col gap-5" role="list">
              {benefits.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 bg-[#4CAF50]/20 border border-[#4CAF50]/30 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    <Icon size={18} className="text-[#4CAF50]" strokeWidth={2} />
                  </div>
                  <div>
                    <h3
                      className="font-semibold text-white text-base"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {title}
                    </h3>
                    <p className="text-[#A5D6A7] text-sm leading-relaxed mt-0.5">{description}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Download CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <AppleStoreButton />
              <GooglePlayButton />
            </div>
          </div>

          {/* Dashboard preview card */}
          <div className="flex justify-center lg:justify-end" aria-hidden="true">
            <div className="relative w-full max-w-sm">
              {/* Glow */}
              <div className="absolute inset-0 bg-[#4CAF50]/10 blur-3xl rounded-3xl" />

              {/* Dashboard card */}
              <div className="relative bg-[#243624] rounded-3xl border border-[#4CAF50]/20 p-6 flex flex-col gap-5 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#A5D6A7] text-xs">Boa tarde,</p>
                    <p className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-poppins)" }}>
                      Carlos Silva
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-[#4CAF50] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">CS</span>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Esta semana", value: "R$ 1.840", sub: "+12%" },
                    { label: "Jobs", value: "8", sub: "concluídos" },
                    { label: "Nota", value: "4.9★", sub: "32 avals." },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-[#1A2E1A] rounded-2xl p-3 text-center">
                      <p className="text-[#A5D6A7] text-[9px] leading-tight mb-1">{stat.label}</p>
                      <p className="text-white text-sm font-bold" style={{ fontFamily: "var(--font-poppins)" }}>
                        {stat.value}
                      </p>
                      <p className="text-[#4CAF50] text-[9px]">{stat.sub}</p>
                    </div>
                  ))}
                </div>

                {/* Upcoming job */}
                <div>
                  <p className="text-[#A5D6A7] text-xs mb-2">Próximo serviço</p>
                  <div className="bg-[#1A2E1A] rounded-2xl p-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#007AFF]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-[#007AFF] text-lg">🔧</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-semibold truncate">Vazamento cozinha</p>
                      <p className="text-[#A5D6A7] text-xs">Hoje • 14:30 • Vila Madalena</p>
                    </div>
                    <div className="bg-[#4CAF50] text-white text-[9px] font-bold px-2 py-1 rounded-lg flex-shrink-0">
                      CONF.
                    </div>
                  </div>
                </div>

                {/* Notification */}
                <div className="flex items-center gap-3 bg-[#4CAF50]/10 border border-[#4CAF50]/20 rounded-2xl p-3">
                  <Bell size={14} className="text-[#4CAF50] flex-shrink-0" />
                  <p className="text-[#A5D6A7] text-xs">
                    <span className="text-white font-medium">Novo pedido</span>, Eletricista, 1.8 km
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
