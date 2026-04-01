import { ServiceHero } from "@/components/site/archetypes";
import { CtaPanel, EditorialFeatureSection, FaqSection, ProcessSection, SplitSection } from "@/components/site/sections";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Pós-operatório assistido",
  description:
    "Pós-operatório assistido em Canaã dos Carajás, com acompanhamento por fase, orientação clara e continuidade local para quem precisa de suporte na recuperação.",
  path: "/pos-operatorio",
});

export default function PosOperatorioPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Pós-operatório assistido"
        title="Recuperação pede acompanhamento e leitura certa de cada fase."
        description="No pós-operatório, a clínica oferece suporte local em Canaã dos Carajás para quem precisa de mais clareza durante a recuperação. A equipe entende a fase do corpo, orienta se a clínica pode acompanhar o caso e organiza avaliação e retornos quando necessário — inclusive para quem operou em outra cidade."
        primary={{ label: "Falar com a equipe no WhatsApp", href: "/agendamento" }}
        secondary={{ label: "Ver perguntas frequentes", href: "/faq" }}
        image="/generated/post-op-hero.jpg"
        tone="dark"
        facts={[
          { label: "Base do cuidado", value: "acompanhamento conforme a fase da recuperação" },
          { label: "Cidade", value: "Canaã dos Carajás com apoio local" },
          { label: "Também atende", value: "quem operou fora e precisa de continuidade" },
          { label: "Entrada", value: "primeira conversa com a equipe pelo WhatsApp" },
        ]}
        panelLabel="Leitura de momento"
        panelTitle="Recuperação mais clara começa quando a paciente entende o que observar agora."
        panelBody="Presença, calma e retorno bem conduzido fazem diferença justamente quando o corpo pede mais atenção."
        bullets={[
          "apoio local para quem precisa de continuidade perto de casa",
          "orientação clara sobre o que observar em cada fase",
          "retornos organizados quando o caso pede acompanhamento",
        ]}
      />

      <ProcessSection
        eyebrow="Como o acompanhamento costuma se organizar"
        title="Do primeiro contato ao retorno, cada fase pede leitura e contexto."
        items={[
          {
            title: "A conversa inicial esclarece a fase atual",
            body: "A equipe entende em que momento da recuperação você está e qual é a necessidade principal agora.",
          },
          {
            title: "A clínica orienta se consegue acompanhar o caso",
            body: "Antes de avançar, a paciente entende se a frente de pós-operatório faz sentido para a fase atual do corpo.",
          },
          {
            title: "Avaliação e próximos passos são combinados",
            body: "Quando existe continuidade, a clínica organiza marcação, retorno e condução do atendimento com mais clareza.",
          },
          {
            title: "A recuperação não fica sem leitura entre etapas",
            body: "Se o caso pede retorno ou reavaliação, isso entra como parte da experiência, não como improviso posterior.",
          },
        ]}
      />

      <EditorialFeatureSection
        eyebrow="Por que essa frente importa tanto"
        title="É na recuperação que presença, organização e serenidade costumam fazer mais diferença."
        body="Quem está em pós-operatório geralmente precisa de calma, orientação e apoio prático. Por isso a clínica trata essa frente como um cuidado sensível: entende a fase do corpo, ajuda a reduzir insegurança e organiza o acompanhamento com mais clareza ao longo do processo."
        calloutTitle="O que a paciente encontra"
        calloutBody="Mais leitura do momento atual, mais segurança sobre o próximo passo e menos sensação de estar atravessando a recuperação sozinha."
      />

      <SplitSection
        eyebrow="Para quem esse atendimento costuma fazer mais sentido"
        title="Para quem precisa de apoio local, atenção ao momento do corpo e orientação mais legível."
        items={[
          {
            title: "Quem operou em outra cidade",
            body: "A clínica pode funcionar como ponto de continuidade em Canaã dos Carajás para quem precisa seguir a recuperação com suporte local.",
          },
          {
            title: "Quem quer acompanhamento mais próximo",
            body: "Quando a paciente sente necessidade de orientação ao longo da recuperação, essa frente ganha ainda mais valor.",
          },
          {
            title: "Quem prefere clareza em vez de dramatização",
            body: "O foco é ajudar a entender o que faz sentido agora, sem prometer demais e sem tratar a fase com ruído desnecessário.",
          },
        ]}
      />

      <FaqSection
        eyebrow="FAQ"
        title="Perguntas frequentes sobre pós-operatório assistido."
        items={[
          {
            title: "Vocês atendem quem operou em outra cidade?",
            body: "Sim. Esse é um dos contextos em que a clínica pode oferecer continuidade local em Canaã dos Carajás.",
          },
          {
            title: "O primeiro contato já define tudo?",
            body: "Não. A prioridade inicial é entender a fase da recuperação, ouvir a necessidade principal e orientar o melhor próximo passo.",
          },
          {
            title: "Existe acompanhamento além da sessão?",
            body: "Quando o caso pede continuidade, a clínica organiza retorno, reavaliação e orientação entre etapas.",
          },
          {
            title: "Isso substitui o acompanhamento do cirurgião?",
            body: "Não. A clínica atua como apoio local dentro do escopo do atendimento e, quando necessário, a paciente deve manter o contato com o profissional responsável pela cirurgia.",
          },
        ]}
      />

      <CtaPanel
        eyebrow="Próximo passo"
        title="Se o seu momento é de recuperação, comece por uma conversa mais orientada."
        body="Explique brevemente seu caso no WhatsApp e a equipe ajuda a entender como a clínica pode acompanhar essa fase com mais clareza."
        highlight="Pós-operatório assistido"
        detail="Canaã dos Carajás • acompanhamento local"
        primary={{ label: "Falar sobre meu pós-operatório", href: "/agendamento" }}
        secondary={{ label: "Ver contato", href: "/contato" }}
      />
    </>
  );
}
