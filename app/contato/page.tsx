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
        title="Mais clareza antes da primeira conversa."
        description="O primeiro contato e o agendamento são conduzidos pela equipe da clínica via WhatsApp oficial. Aqui você encontra os canais públicos da marca e chega à conversa inicial com mais contexto, menos ruído e a mensagem certa."
        primary={{ label: "Preparar mensagem", href: "/agendamento" }}
        secondary={{ label: "Abrir Instagram", href: siteConfig.instagram, external: true }}
        panelLabel="Contato e canais atuais"
        panelTitle="O primeiro contato é feito pela equipe no WhatsApp da clínica."
        image="/generated/whatsapp-contact-v2.jpg"
        tone="light"
        points={[
          { badge: "WA", title: "WhatsApp da clínica", body: "O primeiro contato e o agendamento são conduzidos pela equipe." },
          { badge: "IG", title: "@luanacarladermoclinic", body: "Instagram institucional e canal público da marca." },
          { badge: "•", title: "Centro", body: "Centro • Canaã dos Carajás • PA" },
        ]}
      />

      <TrustStrip
        items={[
          { title: "Canal principal", body: "O primeiro contato e o agendamento acontecem pelo WhatsApp oficial da clínica." },
          { title: "Canal público atual", body: "O Instagram continua sendo a vitrine pública mais estável da marca." },
          { title: "Atendimento com hora marcada", body: "A experiência é organizada para que a paciente entre com mais contexto e menos ansiedade." },
        ]}
      />

      <ContactGrid
        eyebrow="Canais"
        title="O que faz mais sentido usar agora."
        cards={[
          {
            title: "Primeiro contato orientado",
            body: "Se você quer falar com a clínica com mais clareza, o melhor caminho é preparar a mensagem inicial antes de chamar a equipe no WhatsApp.",
            cta: { label: "Preparar mensagem", href: "/agendamento" },
          },
          {
            title: "Instagram institucional",
            body: "Para acompanhar a marca, conteúdos, bastidores e confirmação do canal público já ativo, o Instagram segue sendo a referência externa principal.",
            cta: { label: "Abrir Instagram", href: siteConfig.instagram, external: true },
          },
        ]}
      />

      <CtaPanel
        eyebrow="Próximo passo"
        title="Antes de escrever para a clínica, vale chegar com a mensagem certa."
        body="Isso ajuda a equipe a entender melhor seu momento, responder com mais objetividade e conduzir a triagem com mais clareza."
        highlight="Primeiro contato"
        detail="WhatsApp oficial • Equipe da clínica"
        primary={{ label: "Organizar mensagem", href: "/agendamento" }}
        secondary={{ label: "Voltar para início", href: "/" }}
      />
    </>
  );
}
