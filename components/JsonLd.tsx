import React from "react";

const SITE_URL = "https://uppi.com.br";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Uppi",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo_uppi.png`,
  },
  description:
    "Plataforma digital que conecta moradores de todo o Brasil a profissionais qualificados de serviços domésticos. Encanadores, eletricistas, diaristas, marceneiros, pintores, pedreiros e mais de 40 categorias.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "BR",
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Brasil",
      sameAs: "https://www.wikidata.org/wiki/Q155",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: {
      "@type": "Language",
      name: "Portuguese",
      alternateName: "pt-BR",
    },
  },
  sameAs: [
    "https://www.instagram.com/uppiapp",
    "https://www.facebook.com/uppiapp",
    "https://www.linkedin.com/company/uppiapp",
  ],
};

const mobileApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "@id": `${SITE_URL}/#mobileapp`,
  name: "Uppi",
  operatingSystem: ["iOS", "Android"],
  applicationCategory: ["UtilitiesApplication", "HomeAndGarden"],
  description:
    "Aplicativo para contratar profissionais de serviços domésticos em todo o Brasil. Solicite orçamentos, compare preços e acompanhe o serviço em tempo real.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "BRL",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "10000",
    bestRating: "5",
    worstRating: "1",
  },
  author: {
    "@id": `${SITE_URL}/#organization`,
  },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Uppi",
  description:
    "Marketplace de serviços domésticos que conecta moradores e profissionais qualificados no Brasil.",
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  inLanguage: "pt-BR",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/buscar?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "SoftwareApplication"],
  "@id": `${SITE_URL}/#localbusiness`,
  name: "Uppi",
  url: SITE_URL,
  image: `${SITE_URL}/icon1.png`,
  description:
    "Marketplace de serviços domésticos no Brasil. Contrate encanadores, eletricistas, diaristas e mais de 40 categorias de profissionais com avaliações verificadas.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "BR",
  },
  areaServed: {
    "@type": "Country",
    name: "Brasil",
    sameAs: "https://www.wikidata.org/wiki/Q155",
  },
  serviceType: "Marketplace de serviços domésticos",
  applicationCategory: "HomeAndGarden",
  priceRange: "Grátis",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "10000",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mobileApplicationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
}
