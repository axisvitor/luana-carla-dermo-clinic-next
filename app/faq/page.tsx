import { CtaPanel, FaqSection, HeroSection } from "@/components/site/sections";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Perguntas frequentes",
  description:
    "Respostas claras para dúvidas comuns antes do primeiro contato com a clínica.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <HeroSection
        eyebrow="Perguntas frequentes"
        title="As dúvidas mais comuns antes da primeira conversa."
        description="Se você quer entender melhor como a clínica atende, esta página reúne respostas simples para ajudar no primeiro contato."
        primary={{ label: "Falar com a equipe no WhatsApp", href: "/agendamento" }}
        secondary={{ label: "Ver contato", href: "/contato" }}
        panelLabel="FAQ geral"
        panelTitle="Respostas rápidas sobre pós-operatório, continuidade, laser e primeiro contato."
        image="/generated/stitch/stitch-continuity-2.jpg"
        tone="light"
        list={[
          "Pós-operatório",
          "Continuidade corporal",
          "Depilação a laser",
          "Contato e atendimento",
        ]}
      />

      <FaqSection
        eyebrow="FAQ"
        title="Respostas para dúvidas que costumam aparecer antes do primeiro contato."
        items={[
          { title: "Vocês atendem pós-operatório de quem operou em outra cidade?", body: "Sim. Esse é um dos contextos em que a clínica pode oferecer continuidade local em Canaã dos Carajás." },
          { title: "Como saber qual atendimento faz mais sentido para mim?", body: "O primeiro passo é explicar seu momento e sua principal necessidade. A equipe ajuda a orientar o melhor caminho." },
          { title: "Posso explicar meu caso pelo WhatsApp antes de marcar?", body: "Sim. O contato inicial acontece justamente para isso: entender sua necessidade e orientar o próximo passo." },
          { title: "A depilação a laser pode ser minha porta de entrada?", body: "Sim. Para muitas pacientes, ela funciona como a forma mais leve de começar o atendimento na clínica." },
          { title: "Quando existe continuidade entre sessões?", body: "Quando o caso pede acompanhamento, a clínica organiza retorno, reavaliação e orientação entre etapas com mais clareza." },
        ]}
      />

      <CtaPanel
        eyebrow="Próximo passo"
        title="Se a sua dúvida não apareceu aqui, a equipe pode orientar seu primeiro passo."
        body="No WhatsApp, a clínica ajuda a entender qual caminho faz mais sentido para o seu momento."
        highlight="Primeiro contato"
        detail="Perguntas reais • orientação • clareza"
        primary={{ label: "Preparar minha mensagem", href: "/agendamento" }}
        secondary={{ label: "Ver canais de contato", href: "/contato" }}
      />
    </>
  );
}
