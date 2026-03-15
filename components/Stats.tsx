import CountUpStat from "./CountUpStat";
import { UsersIcon, CheckCircleIcon, StarIcon, MapPinIcon } from "./icons/StrokeIcons";

const stats = [
  {
    icon: UsersIcon,
    value: "10.000+",
    label: "Profissionais cadastrados",
    color: "#4CAF50",
  },
  {
    icon: CheckCircleIcon,
    value: "50.000+",
    label: "Serviços realizados",
    color: "#007AFF",
  },
  {
    icon: StarIcon,
    value: "4.8",
    label: "Avaliação média dos profissionais",
    color: "#FF9500",
  },
  {
    icon: MapPinIcon,
    value: "50+",
    label: "Cidades atendidas no Brasil",
    color: "#4CAF50",
  },
];

export default async function Stats() {
  return (
    <section className="bg-white border-y border-[#E0E0E0] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, label, color }) => (
            <CountUpStat key={label} value={value} label={label}>
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: `${color}15` }}
                aria-hidden="true"
              >
                <Icon size={22} stroke={color} />
              </div>
            </CountUpStat>
          ))}
        </div>
      </div>
    </section>
  );
}
