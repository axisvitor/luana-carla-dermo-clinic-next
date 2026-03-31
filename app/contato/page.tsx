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
        description="Se você quer falar com a Luana Carla Dermo Clinic, o primeiro contato é feito pelo WhatsApp oficial da equipe. Aqui você encontra os canais principais e escolhe o melhor próximo passo."
        primary={{ label: "Preparar mensagem para o WhatsApp", href: "/agendamento" }}
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
            body: "Se você quer falar com a clínica com mais clareza, vale preparar sua mensagem antes de iniciar a conversa pelo WhatsApp.",
            cta: { label: "Preparar mensagem", href: "/agendamento" },
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
        title="Se quiser agilizar a conversa, chegue com sua mensagem preparada."
        body="Isso ajuda a equipe a entender seu momento com mais rapidez e orientar melhor o primeiro passo."
        highlight="Primeiro contato"
        detail="WhatsApp oficial • equipe da clínica"
        primary={{ label: "Organizar mensagem", href: "/agendamento" }}
        secondary={{ label: "Voltar para início", href: "/" }}
      />
    </>
  );
}
