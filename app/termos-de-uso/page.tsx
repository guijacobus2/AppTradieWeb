"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GOLD = "#00C472";
const BG = "#0A0A0F";
const SURFACE = "#111118";
const BORD = "#242430";
const TEXT = "#F0EDE8";
const MUTE = "#9A96A0";
const FAINT = "#3A3845";

const LAST_UPDATED = "27 de março de 2025";

const sections = [
  {
    title: "1. Aceitação dos Termos",
    content: `Ao criar uma conta, acessar ou usar a plataforma Uppi (aplicativo móvel ou site uppiapp.com.br), você declara ter lido, compreendido e concordado com estes Termos de Uso e com nossa Política de Privacidade.

Se você não concordar com qualquer parte destes termos, não utilize nossa plataforma.

A Uppi reserva-se o direito de atualizar estes Termos a qualquer momento. Alterações materiais serão comunicadas com antecedência razoável por e-mail ou notificação no aplicativo.`,
  },
  {
    title: "2. Descrição do Serviço",
    content: `A Uppi é uma plataforma de intermediação que conecta consumidores que necessitam de serviços domésticos a profissionais autônomos e empresas prestadoras de serviços ("Profissionais").

A Uppi atua exclusivamente como intermediária. Não somos empregadores dos Profissionais, não prestamos os serviços diretamente e não garantimos a qualidade, segurança ou legalidade dos serviços contratados entre as partes.

Nossos serviços incluem:
• Publicação e busca de pedidos de serviço
• Sistema de orçamentos entre consumidores e profissionais
• Processamento de pagamentos e gestão de carteira digital
• Avaliações e reputação de usuários
• Notificações sobre o andamento dos pedidos`,
  },
  {
    title: "3. Cadastro e Conta",
    content: `Para usar a Uppi, você deve:

• Ter pelo menos 18 anos de idade
• Fornecer informações verdadeiras, precisas e atualizadas no cadastro
• Manter a confidencialidade de sua senha e não compartilhá-la com terceiros
• Notificar imediatamente a Uppi em caso de uso não autorizado de sua conta

Você é responsável por todas as atividades realizadas em sua conta. A Uppi não se responsabiliza por danos decorrentes do uso não autorizado de sua conta quando causados por sua negligência.

Profissionais devem fornecer CPF válido e são responsáveis por manter suas informações fiscais e regulatórias atualizadas.`,
  },
  {
    title: "4. Obrigações do Usuário",
    content: `Ao usar a Uppi, você concorda em não:

• Fornecer informações falsas ou enganosas
• Usar a plataforma para fins ilegais ou fraudulentos
• Assediar, ameaçar ou discriminar outros usuários
• Publicar conteúdo ofensivo, difamatório ou que viole direitos de terceiros
• Tentar burlar o sistema de pagamentos da plataforma realizando transações fora dela
• Criar múltiplas contas para manipular avaliações ou o sistema de reputação
• Usar bots, scrapers ou métodos automatizados para acessar a plataforma
• Usar informações de outros usuários obtidas pela plataforma para fins não relacionados ao serviço contratado

O descumprimento destas obrigações pode resultar na suspensão ou exclusão permanente da sua conta.`,
  },
  {
    title: "5. Pagamentos e Taxas",
    content: `Os pagamentos na plataforma são processados pela Pagar.me, parceira certificada pelo Banco Central do Brasil.

Consumidores:
• O valor do serviço é acordado diretamente entre consumidor e profissional via sistema de orçamentos
• O pagamento é liberado ao profissional após a confirmação da conclusão do serviço
• Aceitamos cartão de crédito, débito e PIX

Profissionais:
• A Uppi cobra uma taxa de serviço sobre cada transação concluída, conforme exibido no momento do envio do orçamento
• O valor líquido é creditado na carteira digital do profissional
• Saques da carteira estão sujeitos aos prazos e condições da Pagar.me

A Uppi reserva-se o direito de ajustar suas taxas mediante comunicação prévia de 30 dias.`,
  },
  {
    title: "6. Cancelamentos e Reembolsos",
    content: `Cancelamentos por consumidores:
• Pedidos podem ser cancelados antes de um profissional aceitar o orçamento, sem custo
• Após a aceitação, cancelamentos podem estar sujeitos a taxas conforme a política vigente no momento

Cancelamentos por profissionais:
• Cancelamentos recorrentes podem impactar negativamente a reputação do profissional na plataforma

Reembolsos:
• Em caso de disputa, a Uppi atuará como mediadora entre as partes
• Reembolsos aprovados são processados em até 10 dias úteis, sujeitos aos prazos das operadoras de cartão

A Uppi não garante reembolso em casos de insatisfação com a qualidade do serviço prestado pelo Profissional, uma vez que não é parte do contrato de prestação de serviço.`,
  },
  {
    title: "7. Avaliações e Reputação",
    content: `O sistema de avaliações da Uppi é destinado a promover transparência e confiança na plataforma.

• Avaliações devem refletir a experiência real com o serviço contratado
• É proibido manipular avaliações, inclusive por meio de acordos entre usuários
• A Uppi pode remover avaliações que violem estas diretrizes
• Avaliações publicadas de boa-fé não podem ser objeto de ação judicial contra a Uppi`,
  },
  {
    title: "8. Limitação de Responsabilidade",
    content: `A Uppi não se responsabiliza por:

• Qualidade, segurança ou resultado dos serviços prestados pelos Profissionais
• Danos materiais ou pessoais ocorridos durante a prestação do serviço
• Condutas dos usuários dentro ou fora da plataforma
• Interrupções temporárias do serviço por manutenção ou falhas técnicas
• Perdas decorrentes de uso não autorizado da conta por falha do usuário

Nossa responsabilidade, quando aplicável, fica limitada ao valor das taxas cobradas pela Uppi na transação específica que gerou o dano.`,
  },
  {
    title: "9. Propriedade Intelectual",
    content: `Todo o conteúdo da plataforma Uppi — incluindo marca, logo, design, código-fonte, textos e funcionalidades — é de propriedade exclusiva da Uppi e protegido pela legislação de propriedade intelectual brasileira.

Ao publicar conteúdo na plataforma (fotos de serviços, descrições, avaliações), você concede à Uppi uma licença não exclusiva, gratuita e mundial para usar, reproduzir e exibir esse conteúdo exclusivamente no contexto dos serviços da plataforma.

É proibida a reprodução, distribuição ou uso comercial não autorizado de qualquer elemento da plataforma.`,
  },
  {
    title: "10. Rescisão",
    content: `Você pode encerrar sua conta a qualquer momento pelo aplicativo ou por solicitação ao suporte.

A Uppi pode suspender ou encerrar sua conta, a seu exclusivo critério, em caso de:
• Violação destes Termos de Uso
• Atividade fraudulenta ou suspeita de fraude
• Uso que represente risco à plataforma ou a outros usuários
• Determinação legal ou regulatória

O encerramento da conta não elimina obrigações pendentes relacionadas a transações em andamento.`,
  },
  {
    title: "11. Lei Aplicável e Foro",
    content: `Estes Termos são regidos pela legislação brasileira. Fica eleito o foro da Comarca de [CIDADE], Estado de [ESTADO], Brasil, para dirimir quaisquer disputas decorrentes destes Termos, com renúncia expressa de qualquer outro, por mais privilegiado que seja.

Para resolução de conflitos de consumo, você também pode recorrer ao Portal Consumidor.gov.br.`,
  },
  {
    title: "12. Contato",
    content: `Para dúvidas, sugestões ou reclamações relacionadas a estes Termos de Uso:

E-mail: [contato@uppiapp.com.br]
Site: uppiapp.com.br`,
  },
];

export default function TermsOfUsePage() {
  return (
    <>
      <Navbar />
      <main style={{ background: BG, minHeight: "100vh" }}>
        {/* Header */}
        <section
          className="pt-32 pb-16 px-4 sm:px-6 lg:px-8"
          style={{ borderBottom: `1px solid ${BORD}` }}
        >
          <div className="max-w-3xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest mb-10 transition-colors duration-150"
              style={{ fontFamily: "var(--font-inter)", color: FAINT }}
              onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
              onMouseLeave={(e) => (e.currentTarget.style.color = FAINT)}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <line
                  x1="19"
                  y1="12"
                  x2="5"
                  y2="12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <polyline
                  points="12 5 5 12 12 19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Voltar ao início
            </Link>

            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-px" style={{ background: GOLD }} />
              <span
                className="text-[10px] font-semibold uppercase tracking-[0.3em]"
                style={{ fontFamily: "var(--font-inter)", color: GOLD }}
              >
                Legal
              </span>
            </div>

            <h1
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
              style={{
                fontFamily: "var(--font-jakarta)",
                color: TEXT,
                letterSpacing: "-0.03em",
              }}
            >
              Termos de Uso
            </h1>
            <p
              className="text-sm"
              style={{ fontFamily: "var(--font-inter)", color: MUTE }}
            >
              Última atualização: {LAST_UPDATED}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Intro */}
            <div
              className="rounded-2xl p-7 mb-8"
              style={{ background: SURFACE, border: `1px solid ${BORD}` }}
            >
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-inter)", color: MUTE }}
              >
                Bem-vindo à Uppi. Estes Termos de Uso regulam o acesso e uso da
                nossa plataforma por consumidores e profissionais de serviços
                domésticos. Leia com atenção antes de criar sua conta ou usar
                nossos serviços.
              </p>
            </div>

            {/* Sections */}
            <div className="flex flex-col gap-6">
              {sections.map((section) => (
                <div
                  key={section.title}
                  className="rounded-2xl p-7"
                  style={{ background: SURFACE, border: `1px solid ${BORD}` }}
                >
                  <h2
                    className="text-base font-semibold mb-4"
                    style={{ fontFamily: "var(--font-jakarta)", color: TEXT }}
                  >
                    {section.title}
                  </h2>
                  <div
                    className="text-sm leading-relaxed whitespace-pre-line"
                    style={{ fontFamily: "var(--font-inter)", color: MUTE }}
                  >
                    {section.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom link */}
            <div className="mt-12 flex items-center gap-4">
              <div className="flex-1 h-px" style={{ background: BORD }} />
              <Link
                href="/politica-de-privacidade"
                className="text-xs uppercase tracking-widest transition-colors duration-150"
                style={{ fontFamily: "var(--font-inter)", color: FAINT }}
                onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
                onMouseLeave={(e) => (e.currentTarget.style.color = FAINT)}
              >
                ← Ver Política de Privacidade
              </Link>
              <div className="flex-1 h-px" style={{ background: BORD }} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
