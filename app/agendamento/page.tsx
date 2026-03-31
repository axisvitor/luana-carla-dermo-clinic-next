import { CtaPanel, HeroSection, TrustStrip } from "@/components/site/sections";
import { IntakeForm } from "@/components/site/intake-form";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Falar no WhatsApp",
  description:
    "Organize sua mensagem antes do primeiro contato com a Luana Carla Dermo Clinic e fale com a equipe pelo WhatsApp oficial com mais clareza.",
  path: "/agendamento",
});

export default function AgendamentoPage() {
  return (
    <>
      <HeroSection
        eyebrow="Primeiro contato e WhatsApp"
        title="O primeiro contato é pelo WhatsApp. Esta página ajuda você a chegar com a mensagem certa."
        mobileTitle="O primeiro contato é pelo WhatsApp. Chegue com a mensagem certa."
        description="A equipe da clínica conduz a conversa inicial e a marcação pelo WhatsApp oficial. Aqui você escolhe seu assunto, organiza a mensagem e chega com mais clareza."
        primary={{ label: "Montar minha mensagem", href: "#mensagem" }}
        secondary={{ label: "Ver contato", href: "/contato" }}
        panelLabel="WhatsApp"
        panelTitle="Escolha seu assunto e leve uma mensagem melhor para a equipe."
        mobilePanelTitle="Escolha seu assunto e chegue com uma mensagem melhor."
        image="/generated/whatsapp-contact-v2.jpg"
        tone="light"
        points={[
          { badge: "1", title: "Escolha", body: "Pós-operatório, continuidade, laser ou cursos." },
          { badge: "2", title: "Explique", body: "Seu momento e o que você gostaria de entender primeiro." },
          { badge: "3", title: "Envie", body: "Copie a mensagem e leve para o WhatsApp oficial da clínica." },
        ]}
      />

      <TrustStrip
        items={[
          { title: "Escolha o assunto", body: "Pós-operatório, continuidade corporal, depilação a laser ou cursos." },
          { title: "Chegue com contexto", body: "Uma mensagem bem montada facilita a leitura do caso logo no começo." },
          { title: "Equipe entende seu momento mais rápido", body: "Com mais clareza desde o início, a orientação também fica melhor." },
        ]}
      />

      <div id="mensagem">
        <IntakeForm />
      </div>

      <CtaPanel
        eyebrow="Depois disso"
        title="Depois de montar a mensagem, copie o texto e envie para a equipe."
        body="Isso ajuda a clínica a entender seu caso com mais rapidez e orientar o próximo passo com mais clareza."
        highlight="Caminho atual"
        detail="Mensagem organizada • WhatsApp oficial"
        primary={{ label: "Ver canais de contato", href: "/contato" }}
        secondary={{ label: "Voltar para início", href: "/" }}
      />
    </>
  );
}
