import {
  CtaPanel,
  EditorialFeatureSection,
  HeroSection,
  SplitSection,
  TripleArticleSection,
  TrustStrip,
} from "@/components/site/sections";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Sobre a clínica",
  description:
    "Conheça a Luana Carla Dermo Clinic: uma clínica em Canaã dos Carajás que valoriza calma, clareza e cuidado bem conduzido.",
  path: "/sobre",
});

export default function SobrePage() {
  return (
    <>
      <HeroSection
        eyebrow="Sobre a clínica"
        title="Uma clínica que valoriza calma, clareza e cuidado bem conduzido."
        description="A Luana Carla Dermo Clinic nasceu para atender com presença, orientação clara e atenção ao processo. Em vez de prometer demais, a clínica prefere receber com serenidade, explicar com responsabilidade e acompanhar quando o caso pede continuidade."
        primary={{ label: "Falar com a equipe no WhatsApp", href: "/agendamento" }}
        secondary={{ label: "Ver perguntas frequentes", href: "/faq" }}
        panelLabel="Essência da clínica"
        panelTitle="Calma, clareza e responsabilidade do primeiro contato ao atendimento."
        image="/generated/stitch/stitch-courses-portrait.jpg"
        tone="light"
        list={[
          "Desde 2020",
          "Canaã dos Carajás • Centro",
          "Atendimento com hora marcada",
          "Cuidado com continuidade",
        ]}
      />

      <TrustStrip
        items={[
          { title: "Desde 2020 em Canaã dos Carajás", body: "A clínica constrói sua presença local com atendimento organizado e cuidado próximo." },
          { title: "Atendimento com hora marcada", body: "A experiência é conduzida com mais calma, contexto e atenção ao momento de cada paciente." },
          { title: "Comunicação clara", body: "A clínica prefere explicar bem o processo em vez de depender de excesso ou promessa apressada." },
        ]}
      />

      <EditorialFeatureSection
        eyebrow="O que a clínica acredita"
        title="A proposta é fazer o cuidado parecer mais sereno, mais claro e mais confiável."
        body="A clínica combina acolhimento e orientação técnica na mesma medida. Isso significa receber bem, explicar com responsabilidade, acompanhar quando necessário e manter uma experiência coerente do primeiro contato ao atendimento."
        calloutTitle="Jeito de cuidar"
        calloutBody="Calma para receber, clareza para orientar e responsabilidade para conduzir cada etapa."
      />

      <TripleArticleSection
        eyebrow="Valores da marca"
        title="Três pilares que definem a presença da clínica."
        muted
        items={[
          { title: "Calma", body: "Em um momento sensível, a paciente sente diferença quando é recebida com serenidade e atenção." },
          { title: "Clareza", body: "Orientação boa é aquela que ajuda a entender o que faz sentido agora e o que pode esperar." },
          { title: "Responsabilidade", body: "A comunicação da clínica procura prometer apenas o que o atendimento realmente consegue sustentar." },
        ]}
      />

      <SplitSection
        eyebrow="O que a paciente costuma perceber"
        title="Uma clínica que acolhe com mais calma, explica com mais clareza e conduz com mais coerência."
        items={[
          { title: "Foco no que realmente importa", body: "O site deixa mais claro quais são as principais frentes de atendimento e como cada uma funciona." },
          { title: "Experiência mais organizada", body: "Do primeiro WhatsApp ao atendimento, a clínica procura reduzir ruído e aumentar a sensação de cuidado." },
          { title: "Comunicação sem excesso", body: "A proposta é transmitir confiança por meio de clareza, e não por exagero visual ou verbal." },
        ]}
      />

      <CtaPanel
        eyebrow="Quer conhecer melhor a clínica?"
        title="Explore as principais frentes de atendimento ou siga direto para o contato."
        body="Se você quer entender melhor como a clínica atende, o restante do site foi organizado para tornar esse caminho mais claro."
        highlight="Próximos caminhos"
        detail="Pós-operatório • Continuidade • Contato"
        primary={{ label: "Ver pós-operatório", href: "/pos-operatorio" }}
        secondary={{ label: "Ir para contato", href: "/contato" }}
      />
    </>
  );
}
