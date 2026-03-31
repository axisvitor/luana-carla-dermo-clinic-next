import { CtaPanel, HeroSection, TrustStrip } from "@/components/site/sections";
import { IntakeForm } from "@/components/site/intake-form";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Falar no WhatsApp",
  description:
    "Organize sua mensagem antes do primeiro contato com a Luana Carla Dermo Clinic e chegue ao WhatsApp com mais clareza.",
  path: "/agendamento",
});

export default function AgendamentoPage() {
  return (
    <>
      <HeroSection
        eyebrow="Primeiro contato e WhatsApp"
        title="A clínica agenda pelo WhatsApp. Esta página te ajuda a chegar com mais clareza."
        description="O agendamento é conduzido pela equipe da clínica no WhatsApp oficial. Use esta página para organizar sua mensagem antes do contato, reduzir ruído e facilitar a leitura do caso."
        primary={{ label: "Gerar mensagem abaixo", href: "#mensagem" }}
        secondary={{ label: "Ver contato", href: "/contato" }}
        panelLabel="WhatsApp"
        panelTitle="Escolha sua trilha e leve uma mensagem melhor para a equipe."
        image="/generated/whatsapp-contact-v2.jpg"
        tone="light"
        points={[
          { badge: "1", title: "Escolha", body: "Pós-operatório, continuidade, laser ou cursos." },
          { badge: "2", title: "Explique", body: "Seu momento e o que você gostaria de entender primeiro." },
          { badge: "3", title: "Envie", body: "Copie a mensagem e leve para o WhatsApp da clínica." },
        ]}
      />

      <TrustStrip
        items={[
          { title: "Escolha sua trilha", body: "Pós-operatório, continuidade corporal, depilação a laser ou cursos." },
          { title: "Chegue com contexto", body: "Uma mensagem bem montada facilita a leitura do caso logo no começo." },
          { title: "Menos ruído", body: "A conversa fica mais clara quando a equipe já entende seu momento e sua intenção." },
        ]}
      />

      <div id="mensagem">
        <IntakeForm />
      </div>

      <CtaPanel
        eyebrow="Depois disso"
        title="Com a mensagem pronta, o próximo passo é iniciar a conversa com a equipe."
        body="Quando o link oficial do WhatsApp estiver definido, esta página pode ser ligada diretamente a ele sem mudar a estrutura do fluxo."
        highlight="Caminho atual"
        detail="Mensagem organizada • Equipe da clínica"
        primary={{ label: "Ver contato", href: "/contato" }}
        secondary={{ label: "Voltar para início", href: "/" }}
      />
    </>
  );
}
