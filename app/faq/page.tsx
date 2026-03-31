import { CtaPanel, FaqSection, HeroSection } from "@/components/site/sections";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Perguntas frequentes",
  description:
    "Respostas mais claras para dúvidas comuns antes do primeiro contato com a clínica.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <HeroSection
        eyebrow="Perguntas frequentes"
        title="Dúvidas comuns merecem respostas mais claras."
        description="Aqui estão as perguntas que costumam aparecer antes do primeiro contato. A ideia é reduzir ansiedade e ajudar você a chegar com mais contexto para a conversa."
        primary={{ label: "Falar no WhatsApp", href: "/agendamento" }}
        secondary={{ label: "Preparar mensagem", href: "/agendamento" }}
        panelLabel="FAQ geral"
        panelTitle="Dúvidas que costumam aparecer antes mesmo da primeira conversa."
        image="/generated/stitch/stitch-continuity-2.jpg"
        tone="light"
        list={[
          "Pós-operatório",
          "Continuidade corporal",
          "Depilação a laser",
          "Contato e avaliação",
        ]}
      />

      <FaqSection
        eyebrow="FAQ"
        title="Respostas mais claras para dúvidas comuns da paciente."
        items={[
          { title: "Vocês indicam qualquer procedimento logo no primeiro contato?", body: "Não. A prioridade é entender a fase do corpo e explicar o que faz sentido agora com mais critério." },
          { title: "Meu caso é sensível. Vou falar só com automação?", body: "Não. A entrada pode ser organizada digitalmente, mas casos sensíveis pedem leitura humana quando necessário." },
          { title: "Faço pós-operatório aqui mesmo tendo operado em outra cidade?", body: "Sim. A clínica pode acolher quem operou fora e precisa de continuidade local em Canaã." },
          { title: "Como saber se continuidade corporal faz sentido para mim?", body: "Começa entendendo objetivo, constância possível e o tipo de acompanhamento que o corpo pede." },
          { title: "A depilação a laser aqui funciona como commodity?", body: "Não. A proposta é oferecer uma entrada mais organizada, coerente com o restante da experiência da clínica." },
        ]}
      />

      <CtaPanel
        eyebrow="Próximo passo"
        title="Se você ainda tem dúvidas, a conversa inicial pode organizar o caminho."
        body="A equipe recebe o primeiro contato via WhatsApp e ajuda a orientar qual trilha faz mais sentido para o seu caso."
        highlight="Primeiro contato"
        detail="Perguntas reais • Triagem • Orientação"
        primary={{ label: "Preparar mensagem", href: "/agendamento" }}
        secondary={{ label: "Ver canais de contato", href: "/contato" }}
      />
    </>
  );
}
