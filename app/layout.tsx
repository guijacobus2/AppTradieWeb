import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { cn } from "@/lib/utils";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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

const SITE_URL = "https://uppiapp.com.br";
const SITE_NAME = "Uppi";
const TITLE = "Uppi — Serviços Domésticos ao Seu Alcance";
const DESCRIPTION =
  "Conectamos você com profissionais qualificados perto de você em todo o Brasil. Encanadores, eletricistas, diaristas e muito mais. Rápido, seguro e confiável.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: SITE_NAME }],
  keywords: [
    "serviços domésticos Brasil",
    "encanador perto de mim",
    "eletricista perto de mim",
    "diarista perto de mim",
    "marceneiro perto de mim",
    "pintor perto de mim",
    "pedreiro perto de mim",
    "profissionais domésticos",
    "contratar serviços casa",
    "app serviços domésticos",
    "marketplace serviços",
    "Uppi",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Uppi — Serviços Domésticos ao Seu Alcance" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/og-image.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  appleWebApp: { title: "Uppi" },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/my-favicon/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/my-favicon/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-icon.png",
    shortcut: "/favicon/favicon-32x32.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={cn(jakarta.variable, inter.variable)}>
      <body className="antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
