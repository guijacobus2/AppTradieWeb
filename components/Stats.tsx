import CountUpStat from "./CountUpStat";

const SURF = "#111118";
const BORD = "#242430";

const stats = [
  { value: "10.000+", label: "Profissionais", accent: false },
  { value: "50.000+", label: "Serviços",      accent: true  },
  { value: "4.8",     label: "Avaliação",     accent: false },
  { value: "50+",     label: "Cidades",       accent: false },
];

export default async function Stats() {
  return (
    <section
      style={{ background: SURF, borderTop: `1px solid ${BORD}`, borderBottom: `1px solid ${BORD}` }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="grid grid-cols-2 lg:grid-cols-4"
          style={{ borderLeft: `1px solid ${BORD}` }}
        >
          {stats.map(({ value, label, accent }) => (
            <CountUpStat key={label} value={value} label={label} accent={accent} />
          ))}
        </div>
      </div>
    </section>
  );
}
