import type { Metadata } from "next";

export const siteConfig = {
  name: "Luana Carla Dermo Clinic",
  descriptor: "Pós-operatório e Estética Corporal Assistida",
  description:
    "Clínica em Canaã dos Carajás com foco em pós-operatório assistido, continuidade corporal e depilação a laser. Primeiro contato pelo WhatsApp oficial, com orientação clara e atendimento com hora marcada.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://luanacarladermoclinic.vercel.app",
  instagram: "https://www.instagram.com/luanacarladermoclinic/",
  city: "Canaã dos Carajás",
  region: "PA",
  neighborhood: "Centro",
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
}: {
  title?: string;
  description: string;
  path?: string;
}): Metadata {
  const pageTitle = title ? `${title} — ${siteConfig.name}` : siteConfig.name;

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: pageTitle,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: "/brand/og-default.png",
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
      images: ["/brand/og-default.png"],
    },
  };
}
