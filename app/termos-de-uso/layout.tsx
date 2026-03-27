import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso — Uppi",
  description:
    "Leia os Termos de Uso da Uppi antes de utilizar nossa plataforma de serviços domésticos.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
