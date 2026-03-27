import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade — Uppi",
  description:
    "Saiba como a Uppi coleta, usa e protege seus dados pessoais em conformidade com a LGPD.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
