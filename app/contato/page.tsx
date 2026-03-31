import { ContactGrid, CtaPanel, HeroSection, TrustStrip } from "@/components/site/sections";
import { createPageMetadata, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Contato",
  description:
    "Contato da Luana Carla Dermo Clinic em Canaã dos Carajás. O primeiro contato e o agendamento são conduzidos pela equipe via WhatsApp oficial.",
  path: "/contato",
});

export default function ContatoPage() {
  return (
    <>
      <HeroSection
        eyebrow="Contato"
        title="Os canais oficiais da clínica, de forma simples."
        description="Se você quer falar com a Luana Carla Dermo Clinic, o primeiro contato é feito pelo WhatsApp oficial da equipe. Sem formulário: a conversa começa direto com a clínica."
        primary={{ label: "Ver primeiro contato", href: "/agendamento" }}
        secondary={{ label: "Abrir Instagram", href: siteConfig.instagram, external: true }}
        panelLabel="Contato e canais atuais"
        panelTitle="WhatsApp para primeiro contato. Instagram para acompanhar a marca."
        image="/generated/whatsapp-contact-v2.jpg"
        tone="light"
        points={[
          { badge: "WA", title: "WhatsApp da clínica", body: "O primeiro contato e a marcação são conduzidos pela equipe." },
          { badge: "IG", title: "@luanacarladermoclinic", body: "Instagram institucional e canal público da marca." },
          { badge: "•", title: "Centro", body: "Centro • Canaã dos Carajás • PA" },
        ]}
      />

      <TrustStrip
        items={[
          { title: "WhatsApp oficial", body: "É o canal principal para explicar seu momento e conversar com a equipe." },
          { title: "Instagram institucional", body: "Serve para acompanhar a marca, conteúdos e confirmações do canal público ativo." },
          { title: "Atendimento com hora marcada", body: "A clínica organiza a experiência para que cada paciente chegue com mais contexto e menos ansiedade." },
        ]}
      />

      <ContactGrid
        eyebrow="Canais"
        title="Escolha o caminho mais útil agora."
        cards={[
          {
            title: "Primeiro contato com a equipe",
            body: "Se você quer falar com a clínica, o melhor caminho é iniciar a conversa pelo WhatsApp oficial e explicar brevemente seu assunto.",
            cta: { label: "Ver primeiro contato", href: "/agendamento" },
          },
          {
            title: "Instagram da clínica",
            body: "Para acompanhar a marca, conteúdos, bastidores e confirmar o canal público já ativo, o Instagram segue como referência externa da clínica.",
            cta: { label: "Abrir Instagram", href: siteConfig.instagram, external: true },
          },
        ]}
      />

      <CtaPanel
        eyebrow="Próximo passo"
        title="Se quiser agilizar a conversa, fale direto com a equipe."
        body="A clínica não trabalha com formulários. O contato inicial acontece diretamente pelo WhatsApp oficial."
        highlight="Primeiro contato"
        detail="WhatsApp oficial • equipe da clínica"
        primary={{ label: "Ver primeiro contato", href: "/agendamento" }}
        secondary={{ label: "Voltar para início", href: "/" }}
      />
    </>
  );
}
