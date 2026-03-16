import { AppleStoreButton, GooglePlayButton } from "./DownloadButtons";

export default async function DownloadCTA() {
  return (
    <section className="py-20 lg:py-28 bg-[#4CAF50]" id="download">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center gap-8 max-w-2xl mx-auto">
          <div className="flex flex-col gap-4">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Baixe o AppTradie agora
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Disponível gratuitamente para iOS e Android. Cadastro rápido,
              sem burocracia, comece a usar em minutos.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <AppleStoreButton />
            <GooglePlayButton />
          </div>

          <p className="text-white/60 text-sm">
            Gratuito para download • Sem taxa de cadastro
          </p>
        </div>
      </div>
    </section>
  );
}
