import { ServiceHero } from "@/components/site/archetypes";
import { CtaPanel, EditorialFeatureSection, FaqSection, SplitSection, TripleArticleSection } from "@/components/site/sections";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Estética corporal com continuidade",
  description:
    "Continuidade corporal com plano de cuidado, constância e acompanhamento para quem quer tratar o corpo com mais coerência ao longo do tempo.",
  path: "/continuidade-corporal",
});

export default function ContinuidadeCorporalPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Continuidade corporal"
        title="Cuidado corporal faz mais sentido quando existe constância possível."
        description="A continuidade corporal é indicada para quem quer sair de decisões soltas e seguir um cuidado mais organizado. A clínica entende o objetivo, lê o momento do corpo e orienta um plano que faça sentido na vida real, com revisão e próximos passos ao longo do processo."
        primary={{ label: "Falar com a equipe no WhatsApp", href: "/agendamento" }}
        secondary={{ label: "Ver perguntas frequentes", href: "/faq" }}
        image="/generated/stitch/stitch-continuity-1.jpg"
        tone="dark"
        facts={[
          { label: "Base do plano", value: "constância em vez de decisões isoladas" },
          { label: "Ritmo", value: "um cuidado que precisa caber na rotina" },
          { label: "Método", value: "revisão, manutenção e próximos passos" },
          { label: "Entrada", value: "conversa inicial pelo WhatsApp oficial" },
        ]}
        panelLabel="Constância com clareza"
        panelTitle="Mais continuidade, menos sensação de estar recomeçando toda vez."
        panelBody="O objetivo não é empilhar sessões. É construir um cuidado corporal que faça sentido ao longo do tempo."
        bullets={[
          "plano com começo, ritmo e ajustes possíveis",
          "acompanhamento para não perder o fio do processo",
          "organização melhor entre intenção e rotina real",
        ]}
      />

      <EditorialFeatureSection
        eyebrow="Por que essa linha existe"
        title="Resultados mais coerentes costumam nascer de processo, não de impulso."
        body="Quando o cuidado corporal acontece com frequência possível, leitura de resposta e ajustes ao longo do tempo, a experiência fica mais sólida. A proposta desta linha é justamente transformar intenção em continuidade de verdade."
        calloutTitle="O que esta página deixa claro"
        calloutBody="Aqui, o corpo não é tratado por impulso. Ele é acompanhado com plano, constância e revisão ao longo do processo."
      />

      <TripleArticleSection
        eyebrow="Como essa linha funciona"
        title="Três bases para uma continuidade corporal mais bem conduzida."
        muted
        items={[
          {
            title: "Começa pelo seu objetivo atual",
            body: "A clínica entende o que você busca, o momento do corpo e o tipo de acompanhamento que faz sentido agora.",
          },
          {
            title: "Segue com constância possível",
            body: "O plano precisa caber na vida real para que o cuidado seja sustentado com mais coerência, e não por entusiasmo momentâneo.",
          },
          {
            title: "Avança com revisão e próximos passos",
            body: "Ao longo do processo, a paciente entende o que manter, o que ajustar e como seguir com menos dúvida.",
          },
        ]}
      />

      <SplitSection
        eyebrow="Para quem essa linha costuma funcionar melhor"
        title="Para quem quer previsibilidade, manutenção e uma rotina de cuidado mais organizada."
        items={[
          {
            title: "Quem cansou de tentar pedaços desconectados",
            body: "Quando cada decisão acontece isoladamente, o cuidado perde continuidade e fica mais difícil perceber consistência ao longo do tempo.",
          },
          {
            title: "Quem quer um plano possível",
            body: "A proposta é construir um caminho que converse com a rotina, a expectativa e o momento atual da paciente.",
          },
          {
            title: "Quem valoriza acompanhamento",
            body: "Constância não depende só do procedimento. Ela também depende de leitura, ajuste e orientação ao longo do processo.",
          },
        ]}
      />

      <FaqSection
        eyebrow="FAQ"
        title="Perguntas frequentes sobre continuidade corporal."
        items={[
          {
            title: "Vocês atendem apenas com sessão avulsa?",
            body: "A clínica pode começar pela avaliação, mas a proposta mais forte desta linha é organizar um plano com continuidade e leitura ao longo do processo.",
          },
          {
            title: "Como saber se continuidade corporal faz sentido para mim?",
            body: "O primeiro passo é entender seu objetivo, o momento do corpo e a constância que você consegue sustentar hoje.",
          },
          {
            title: "Preciso já saber exatamente o que quero fazer?",
            body: "Não. A equipe ajuda a orientar o melhor caminho a partir da sua necessidade principal e do tipo de cuidado que você busca.",
          },
          {
            title: "O acompanhamento faz parte da proposta?",
            body: "Sim. Quando a paciente segue em processo, os próximos passos são organizados com mais clareza para não perder a continuidade.",
          },
        ]}
      />

      <CtaPanel
        eyebrow="Próximo passo"
        title="Se você busca continuidade, comece por um plano mais claro."
        body="No WhatsApp, a equipe pode entender seu momento e orientar se essa linha faz sentido para o seu caso agora."
        highlight="Continuidade corporal"
        detail="Plano • constância • acompanhamento"
        primary={{ label: "Falar sobre meu caso", href: "/agendamento" }}
        secondary={{ label: "Ver perguntas frequentes", href: "/faq" }}
      />
    </>
  );
}
