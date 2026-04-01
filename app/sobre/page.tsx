import { InstitutionalHero } from "@/components/site/archetypes";
import { CtaPanel, ManifestoBand, SplitSection, TripleArticleSection } from "@/components/site/sections";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Sobre a Luana Carla Dermo Clinic | Clínica de Estética em Canaã dos Carajás",
  description:
    "Conheça a Luana Carla Dermo Clinic: clínica de estética em Canaã dos Carajás desde 2020. Atendimento com calma, clareza e cuidado personalizado em pós-operatório e tratamentos corporais.",
  path: "/sobre",
});

export default function SobrePage() {
  return (
    <>
      <InstitutionalHero
        eyebrow="Sobre a clínica"
        title="Uma clínica pensada para receber com calma e orientar com clareza."
        description="A Luana Carla Dermo Clinic nasceu para sustentar uma experiência mais serena, bem conduzida e sem excesso. Em vez de prometer demais, a clínica prefere explicar com responsabilidade, acolher com presença e acompanhar quando o caso pede continuidade."
        image="/generated/stitch/stitch-courses-portrait.jpg"
        primary={{ label: "Falar com a equipe no WhatsApp", href: "/agendamento" }}
        secondary={{ label: "Ver perguntas frequentes", href: "/faq" }}
        facts={[
          { label: "Desde", value: "2020 em Canaã dos Carajás" },
          { label: "Local", value: "Centro • Canaã dos Carajás • PA" },
          { label: "Agenda", value: "atendimento com hora marcada" },
          { label: "Jeito de cuidar", value: "calma, clareza e continuidade" },
        ]}
        noteLabel="Essência da marca"
        noteTitle="A clínica prefere transmitir confiança pela forma de conduzir."
        noteBody="A experiência da clínica foi pensada para parecer mais legível do começo ao fim: primeiro contato claro, atendimento bem conduzido e linguagem mais responsável sobre o que realmente está sendo oferecido."
        quote="Cuidado com mais calma."
      />

      <ManifestoBand
        eyebrow="O que a clínica quer sustentar"
        title="Uma presença digital e presencial mais madura, serena e confiável."
        body="A proposta da marca é combinar acolhimento e leitura de contexto na mesma medida. Isso significa receber bem, explicar melhor e evitar o tipo de promessa que até chama atenção, mas não sustenta a experiência real."
      />

      <TripleArticleSection
        eyebrow="Pilares da marca"
        title="Três valores que orientam a presença da clínica."
        muted
        items={[
          {
            title: "Calma",
            body: "Em um momento sensível, a paciente percebe diferença quando é recebida com serenidade e atenção real.",
          },
          {
            title: "Clareza",
            body: "Orientação boa é aquela que ajuda a entender o que faz sentido agora e o que pode esperar sem pressa.",
          },
          {
            title: "Responsabilidade",
            body: "A comunicação da clínica procura prometer apenas o que o atendimento realmente consegue sustentar.",
          },
        ]}
      />

      <SplitSection
        eyebrow="O que a paciente costuma perceber"
        title="Uma clínica que acolhe com mais contexto, explica com mais legibilidade e conduz com mais coerência."
        items={[
          {
            title: "Foco no que realmente importa",
            body: "O site e a conversa deixam mais claro quais são as principais frentes de atendimento e como cada uma funciona.",
          },
          {
            title: "Experiência mais organizada",
            body: "Do primeiro WhatsApp ao atendimento, a clínica procura reduzir ruído e aumentar a sensação de cuidado contínuo.",
          },
          {
            title: "Comunicação sem exagero",
            body: "A proposta é transmitir confiança por meio de clareza, não por excesso visual, promessa apressada ou linguagem inflada.",
          },
        ]}
      />

      <CtaPanel
        eyebrow="Próximos caminhos"
        title="Explore as principais frentes de atendimento ou siga direto para o contato."
        body="Se você quer entender melhor como a clínica atende, o restante do site foi organizado para tornar esse caminho mais claro e mais útil."
        highlight="Depois desta página"
        detail="Pós-operatório • Continuidade • Contato"
        primary={{ label: "Ver pós-operatório", href: "/pos-operatorio" }}
        secondary={{ label: "Ir para contato", href: "/contato" }}
      />
    </>
  );
}
