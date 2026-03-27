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
    title: "1. Quem somos",
    content: `A Uppi é uma plataforma que conecta consumidores a profissionais de serviços domésticos no Brasil. Somos o controlador dos dados pessoais que você nos fornece ao usar nosso aplicativo e site.

Razão social: [NOME DA EMPRESA] — CNPJ: [XX.XXX.XXX/XXXX-XX]
Contato: [privacidade@uppiapp.com.br]`,
  },
  {
    title: "2. Dados que coletamos",
    content: `Coletamos os seguintes dados pessoais para prestar nossos serviços:

• Nome completo e nome comercial
• Endereço de e-mail
• Número de telefone
• CPF (Cadastro de Pessoas Físicas)
• Localização precisa (para conectar consumidores com profissionais próximos)
• Fotos e vídeos anexados a pedidos de serviço
• Informações de pagamento (cartão de crédito/débito, tokenizados via Pagar.me — nunca armazenamos dados brutos do cartão)
• Informações financeiras: saldo de carteira, histórico de transações
• Identificador de usuário e token de notificação push`,
  },
  {
    title: "3. Como usamos seus dados",
    content: `Utilizamos seus dados exclusivamente para as seguintes finalidades:

• Criar e gerenciar sua conta na plataforma
• Conectar consumidores com profissionais de serviços próximos
• Processar pagamentos e transferências
• Enviar notificações sobre pedidos, orçamentos e reservas
• Verificar identidade e prevenir fraudes
• Cumprir obrigações legais e regulatórias
• Melhorar a experiência do usuário na plataforma

Não utilizamos seus dados para publicidade de terceiros nem para fins de perfilamento comercial.`,
  },
  {
    title: "4. Compartilhamento de dados",
    content: `Compartilhamos seus dados apenas com:

• Pagar.me: processamento de pagamentos e tokenização de cartões
• Google: geocodificação de endereços e autocompletar de endereços via Google Places API
• Firebase (Google): envio de notificações push
• Supabase: infraestrutura de banco de dados e autenticação (servidores localizados no Brasil, com cláusulas contratuais padrão aplicáveis)

Não vendemos, alugamos nem comercializamos seus dados pessoais com terceiros para fins de marketing.`,
  },
  {
    title: "5. Retenção de dados",
    content: `Mantemos seus dados pelo tempo necessário para prestar os serviços ou cumprir obrigações legais:

• Dados de conta: enquanto sua conta estiver ativa
• Dados de transações financeiras: mínimo de 5 anos, conforme exigido pela legislação fiscal brasileira
• Dados de localização: não são armazenados permanentemente; usados apenas em tempo real para a prestação do serviço
• Após o encerramento da conta: dados são anonimizados ou excluídos no prazo de 30 dias, salvo obrigação legal`,
  },
  {
    title: "6. Seus direitos (LGPD)",
    content: `Nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem os seguintes direitos:

• Confirmação: saber se tratamos seus dados pessoais
• Acesso: obter uma cópia dos dados que mantemos sobre você
• Correção: corrigir dados incompletos, inexatos ou desatualizados
• Anonimização ou exclusão: solicitar a anonimização ou eliminação de dados desnecessários
• Portabilidade: receber seus dados em formato estruturado
• Informação: saber com quais terceiros compartilhamos seus dados
• Revogação do consentimento: retirar seu consentimento a qualquer momento
• Oposição: opor-se ao tratamento em caso de descumprimento da lei

Para exercer qualquer um desses direitos, entre em contato pelo e-mail: [privacidade@uppiapp.com.br]
Responderemos à sua solicitação em até 15 dias úteis.`,
  },
  {
    title: "7. Segurança",
    content: `Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda ou destruição, incluindo:

• Criptografia em trânsito (TLS/HTTPS) em todas as comunicações
• Autenticação segura via Supabase Auth com tokens JWT
• Tokenização de dados de cartão via Pagar.me (seus dados de cartão nunca passam por nossos servidores)
• Controle de acesso baseado em funções (Row Level Security no banco de dados)
• Chaves de API e credenciais armazenadas em variáveis de ambiente seguras, nunca no código-fonte`,
  },
  {
    title: "8. Cookies e tecnologias similares",
    content: `Nosso site (uppiapp.com.br) pode utilizar cookies estritamente necessários para o funcionamento da página. Não utilizamos cookies de rastreamento ou publicidade comportamental.

O aplicativo móvel não utiliza cookies. Utilizamos armazenamento local no dispositivo para manter sua sessão ativa de forma segura.`,
  },
  {
    title: "9. Transferências internacionais",
    content: `Alguns de nossos fornecedores de infraestrutura, como Supabase e Firebase, processam dados em servidores nos Estados Unidos. Essas transferências são realizadas com garantias adequadas, incluindo cláusulas contratuais padrão e certificações de conformidade reconhecidas internacionalmente.`,
  },
  {
    title: "10. Alterações nesta política",
    content: `Podemos atualizar esta Política de Privacidade periodicamente. Quando realizarmos alterações materiais, notificaremos você por meio do aplicativo ou por e-mail. A data da última atualização está sempre indicada no início deste documento.

O uso continuado da plataforma após a publicação de alterações constitui aceitação da nova política.`,
  },
  {
    title: "11. Contato e encarregado (DPO)",
    content: `Para dúvidas, solicitações ou reclamações relacionadas ao tratamento de seus dados pessoais, entre em contato:

E-mail: [privacidade@uppiapp.com.br]

Você também tem o direito de apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD): www.gov.br/anpd`,
  },
];

export default function PrivacyPolicyPage() {
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
              Política de Privacidade
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
                Esta Política de Privacidade descreve como a Uppi coleta,
                utiliza, armazena e protege suas informações pessoais, em
                conformidade com a{" "}
                <span style={{ color: TEXT }}>
                  Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)
                </span>
                . Ao usar nosso aplicativo ou site, você concorda com as
                práticas descritas neste documento.
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
                href="/termos-de-uso"
                className="text-xs uppercase tracking-widest transition-colors duration-150"
                style={{ fontFamily: "var(--font-inter)", color: FAINT }}
                onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
                onMouseLeave={(e) => (e.currentTarget.style.color = FAINT)}
              >
                Ver Termos de Uso →
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
