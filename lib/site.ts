import type { Metadata } from "next";

export const siteConfig = {
  name: "Luana Carla Dermo Clinic",
  descriptor: "Pós-operatório e estética corporal assistida",
  description:
    "Clínica em Canaã dos Carajás com foco em pós-operatório assistido, continuidade corporal e depilação a laser. Primeiro contato pelo WhatsApp oficial, com orientação clara e atendimento com hora marcada.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://luanacarladermoclinic.vercel.app",
  ogImage: "/brand/og-default.png",
  instagram: "https://www.instagram.com/luanacarladermoclinic/",
  city: "Canaã dos Carajás",
  region: "PA",
  neighborhood: "Centro",
  keywords: [
    // Marca
    "Luana Carla Dermo Clinic",
    "Luana Carla Canaã dos Carajás",
    // Servicos principais
    "pós-operatório assistido",
    "pós-operatório Canaã dos Carajás",
    "acompanhamento pós-cirúrgico",
    "recuperação pós-operatória",
    // Estetica
    "estética corporal Canaã dos Carajás",
    "clínica de estética Canaã dos Carajás",
    "continuidade corporal",
    "tratamento corporal",
    // Laser
    "depilação a laser Canaã dos Carajás",
    "depilação definitiva Canaã dos Carajás",
    "laser corporal",
    // Geograficos
    "clínica estética Pará",
    "dermoclínica Canaã dos Carajás",
    "estética sudeste do Pará",
  ],
};

export const navItems = [
  { label: "Início", href: "/" },
  { label: "Pós-operatório", href: "/pos-operatorio" },
  { label: "Continuidade", href: "/continuidade-corporal" },
  { label: "Laser", href: "/depilacao-laser" },
  { label: "Como funciona", href: "/como-funciona" },
  { label: "Sobre", href: "/sobre" },
  { label: "FAQ", href: "/faq" },
  { label: "Contato", href: "/contato" },
];

export const footerLinks = [...navItems, { label: "Falar no WhatsApp", href: "/agendamento" }, { label: "Cursos", href: "/cursos" }];

export function createPageMetadata({
  title,
  description,
  path = "/",
  keywords: pageKeywords,
}: {
  title?: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  // Se title ja tem pipe ou travessao, usa como esta; senao, adiciona nome da clinica
  const hasDelimiter = title && (title.includes("|") || title.includes("—"));
  const pageTitle = hasDelimiter ? title : title ? `${title} — ${siteConfig.name}` : siteConfig.name;

  // Combina keywords da pagina com keywords globais
  const combinedKeywords = pageKeywords
    ? [...new Set([...pageKeywords, ...siteConfig.keywords])]
    : siteConfig.keywords;

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageTitle,
    description,
    keywords: combinedKeywords,
    alternates: { canonical: path },
    // Geo-targeting para buscas locais
    other: {
      "geo.region": "BR-PA",
      "geo.placename": siteConfig.city,
      "geo.position": "-6.4969;-49.8775",
      ICBM: "-6.4969, -49.8775",
    },
    openGraph: {
      title: pageTitle,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [siteConfig.ogImage],
    },
  };
}
