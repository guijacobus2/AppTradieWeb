import { StarIcon } from "./icons/StrokeIcons";

const testimonials = [
  {
    name: "Ana Rodrigues",
    role: "Consumidora, São Paulo, SP",
    avatar: "AR",
    rating: 5,
    text: "Precisei de um encanador urgente e em menos de 10 minutos já tinha 3 orçamentos. Contratei na hora e o problema foi resolvido no mesmo dia. Incrível!",
    avatarColor: "#007AFF",
  },
  {
    name: "Marcos Oliveira",
    role: "Eletricista, Rio de Janeiro, RJ",
    avatar: "MO",
    rating: 5,
    text: "Desde que entrei no AppTradie, minha agenda está sempre cheia. Já dobrei minha renda em 3 meses. A plataforma é muito fácil de usar.",
    avatarColor: "#4CAF50",
  },
  {
    name: "Fernanda Lima",
    role: "Consumidora, Belo Horizonte, MG",
    avatar: "FL",
    rating: 5,
    text: "Contratei uma diarista pelo app e fiquei impressionada com a facilidade. Profissional pontual e trabalho impecável. Já indiquei para todas as minhas amigas.",
    avatarColor: "#FF9500",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" role="img" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon
          key={i}
          size={15}
          stroke={i < rating ? "#FF9500" : "#E0E0E0"}
          className={i < rating ? "fill-[#FF9500]" : ""}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default async function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#4CAF50] uppercase tracking-wider mb-3">
            O que dizem nossos usuários
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#212121]"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Histórias reais de quem usa AppTradie
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, avatar, rating, text, avatarColor }) => (
            <figure
              key={name}
              className="testimonial-card relative bg-white rounded-2xl p-6 flex flex-col gap-5 shadow-sm border border-[#EEEEEE] border-l-4 overflow-hidden"
              style={{ borderLeftColor: "#4CAF50" }}
            >
              {/* Giant faded quote mark — UIverse style */}
              <span
                className="absolute top-3 right-5 text-8xl font-black leading-none select-none pointer-events-none"
                style={{
                  color: "#4CAF50",
                  opacity: 0.06,
                  fontFamily: "Georgia, serif",
                  lineHeight: 1,
                }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Stars */}
              <StarRating rating={rating} />

              {/* Quote */}
              <blockquote className="relative z-10">
                <p className="text-[#212121] text-sm leading-relaxed">
                  &ldquo;{text}&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <figcaption className="flex items-center gap-3 pt-2 border-t border-[#EEEEEE] mt-auto">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: avatarColor }}
                  aria-hidden="true"
                >
                  <span className="text-white text-sm font-bold">{avatar}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#212121]">{name}</p>
                  <p className="text-xs text-[#757575]">{role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
