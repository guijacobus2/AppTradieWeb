const APPLE_STORE_URL = "#"; // TODO: replace with App Store URL
const GOOGLE_PLAY_URL = "#"; // TODO: replace with Google Play URL

function AppleLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 814 1000" fill="currentColor" aria-hidden="true">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105.4-57.9-155.5-127.4C46.7 790.7 0 663 0 541.8c0-194.3 127.4-297.5 252.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
    </svg>
  );
}

function GooglePlayLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 512 512" aria-hidden="true">
      <path fill="#4FC3F7" d="M48 432L256 224 48 16v416z" />
      <path fill="#4CAF50" d="M48 432l224-208L48 16" opacity="0" />
      <path fill="#FFC107" d="M400 224L310 134 48 16l208 208z" />
      <path fill="#FF3D00" d="M48 432l262-118 90-90L208 224z" />
      <path fill="#4FC3F7" d="M48 432l208-208L48 16" opacity="0" />
      {/* Simplified clean play arrow using 4 color triangles */}
      <polygon fill="#00BCD4" points="48,16 310,134 208,224" />
      <polygon fill="#4CAF50" points="310,134 400,224 208,224" />
      <polygon fill="#FF3D00" points="400,224 310,314 208,224" />
      <polygon fill="#FFC107" points="310,314 48,432 208,224" />
    </svg>
  );
}

export function AppleStoreButton() {
  return (
    <a
      href={APPLE_STORE_URL}
      className="inline-flex items-center gap-3 bg-white text-[#212121] px-5 py-3.5 rounded-2xl hover:bg-[#F5F5F5] transition-colors duration-150 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white shadow-lg"
      aria-label="Baixar na App Store (iOS)"
    >
      <AppleLogo />
      <div className="flex flex-col text-left">
        <span className="text-[10px] text-[#757575] leading-none">Disponível na</span>
        <span className="text-sm font-semibold leading-tight" style={{ fontFamily: "var(--font-poppins)" }}>
          App Store
        </span>
      </div>
    </a>
  );
}

export function GooglePlayButton() {
  return (
    <a
      href={GOOGLE_PLAY_URL}
      className="inline-flex items-center gap-3 bg-white text-[#212121] px-5 py-3.5 rounded-2xl hover:bg-[#F5F5F5] transition-colors duration-150 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white shadow-lg"
      aria-label="Baixar no Google Play (Android)"
    >
      <GooglePlayLogo />
      <div className="flex flex-col text-left">
        <span className="text-[10px] text-[#757575] leading-none">Disponível no</span>
        <span className="text-sm font-semibold leading-tight" style={{ fontFamily: "var(--font-poppins)" }}>
          Google Play
        </span>
      </div>
    </a>
  );
}
