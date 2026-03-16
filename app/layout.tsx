import type { Metadata, Viewport } from "next";
import { Poppins, Inter, Geist } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const SITE_URL = "https://apptradie.com.br";
const SITE_NAME = "AppTradie";
const TITLE = "AppTradie — Serviços Domésticos ao Seu Alcance em Porto Alegre";
const DESCRIPTION =
  "Conectamos você com profissionais qualificados perto de você em Porto Alegre e Rio Grande do Sul. Encanadores, eletricistas, diaristas e muito mais. Rápido, seguro e confiável.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: SITE_NAME }],
  keywords: [
    "serviços domésticos Porto Alegre",
    "encanador Porto Alegre",
    "eletricista Porto Alegre",
    "diarista Porto Alegre",
    "marceneiro Porto Alegre",
    "pintor Porto Alegre",
    "pedreiro Porto Alegre",
    "profissionais domésticos RS",
    "contratar serviços casa",
    "app serviços domésticos Brasil",
    "marketplace serviços",
    "AppTradie",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        // TODO: Create og-image.png (1200x630px) with AppTradie branding
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AppTradie — Serviços Domésticos ao Seu Alcance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn("font-sans", geist.variable)}>
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
