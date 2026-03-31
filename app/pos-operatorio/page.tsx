import {
  CtaPanel,
  EditorialFeatureSection,
  FaqSection,
  HeroSection,
  SplitSection,
  TripleArticleSection,
  TrustStrip,
} from "@/components/site/sections";
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
      <HeroSection
        eyebrow="Pós-operatório assistido"
        title="Recuperação pede acompanhamento, clareza e o cuidado certo em cada fase."
        description="No pós-operatório, a clínica oferece suporte local em Canaã dos Carajás para quem precisa de orientação mais clara. A equipe entende o momento da recuperação, orienta se a clínica pode acompanhar o caso e organiza avaliação e retornos quando necessário — inclusive quando a cirurgia aconteceu em outra cidade."
        primary={{ label: "Falar com a equipe no WhatsApp", href: "/agendamento" }}
        secondary={{ label: "Ver perguntas frequentes", href: "/faq" }}
        panelLabel="Pós-operatório assistido"
        panelTitle="Primeira conversa, avaliação e retornos quando necessários, com atenção à fase do corpo."
        image="/generated/post-op-hero.jpg"
        tone="dark"
        list={[
          "Acompanhamento conforme a fase da recuperação",
          "Suporte local para quem operou fora",
          "Orientação clara sobre o que observar",
          "Continuidade quando o caso pede",
        ]}
      />

      <TrustStrip
        items={[
          { title: "Cada fase pede um cuidado diferente", body: "A recuperação muda ao longo do tempo, e o atendimento precisa respeitar isso." },
          { title: "Continuidade local em Canaã", body: "A clínica pode acompanhar pacientes que operaram fora e precisam de apoio próximo." },
          { title: "Primeira conversa, avaliação e retornos organizados", body: "Quando a paciente entende como será acompanhada e quais são os próximos passos, a recuperação fica menos confusa." },
        ]}
      />

      <EditorialFeatureSection
        eyebrow="Por que essa frente é tão importante"
        title="É no pós-operatório que presença, organização e acompanhamento fazem mais diferença."
        body="Quem está se recuperando geralmente precisa de calma, orientação e apoio prático. Por isso a clínica trata essa frente como um cuidado sensível: entende a fase do corpo, organiza o acompanhamento e ajuda a paciente a atravessar esse momento com menos insegurança."
        calloutTitle="O que a paciente encontra"
        calloutBody="Mais segurança sobre o que fazer agora, mais clareza sobre o próximo passo e um atendimento que não abandona a paciente no meio do processo."
      />

      <TripleArticleSection
        eyebrow="O que importa nessa fase"
        title="Três bases para um pós-operatório melhor conduzido."
        muted
        items={[
          { title: "Entender a fase da recuperação", body: "Antes de qualquer conduta, é importante saber em que momento do pós-operatório a paciente está e o que precisa de atenção agora." },
          { title: "Acompanhar com continuidade", body: "Quando o caso pede retorno, reavaliação e suporte entre etapas, isso precisa fazer parte do cuidado." },
          { title: "Orientar com calma e clareza", body: "Explicar bem o processo ajuda a reduzir ansiedade e melhora a experiência da paciente." },
        ]}
      />

      <SplitSection
        eyebrow="Para quem esse atendimento costuma fazer mais sentido"
        title="Para quem precisa de apoio local, atenção ao momento do corpo e orientação segura."
        items={[
          { title: "Quem operou em outra cidade", body: "A clínica pode ser o ponto de apoio em Canaã dos Carajás para seguir a recuperação com mais acompanhamento." },
          { title: "Quem quer acompanhamento mais próximo", body: "Quando a paciente sente necessidade de orientação ao longo da fase de recuperação, essa frente ganha ainda mais valor." },
          { title: "Quem prefere clareza em vez de excesso", body: "O foco é orientar o que faz sentido para o momento do corpo, sem dramatizar e sem prometer o que não cabe nessa fase." },
        ]}
      />

      <FaqSection
        eyebrow="FAQ"
        title="Perguntas frequentes sobre pós-operatório assistido."
        items={[
          { title: "Vocês atendem quem operou em outra cidade?", body: "Sim. Esse é um dos contextos em que a clínica pode oferecer continuidade local em Canaã dos Carajás." },
          { title: "O primeiro contato já define tudo?", body: "Não. A prioridade inicial é entender a fase da recuperação, ouvir a necessidade principal e orientar o melhor próximo passo." },
          { title: "Existe acompanhamento além da sessão?", body: "Quando o caso pede continuidade, a clínica organiza retorno, reavaliação e orientação entre etapas." },
          { title: "Isso substitui o acompanhamento do cirurgião?", body: "Não. A clínica atua como apoio local dentro do escopo do atendimento e, quando necessário, a paciente deve manter o contato com o profissional responsável pela cirurgia." },
          { title: "Como funciona o primeiro passo?", body: "No WhatsApp, a equipe entende seu momento, orienta se a clínica pode acompanhar a fase atual e organiza avaliação e retornos quando necessário." },
        ]}
      />

      <CtaPanel
        eyebrow="Próximo passo"
        title="Se o seu momento é de recuperação, comece por uma conversa mais orientada."
        body="Explique brevemente seu caso no WhatsApp e a equipe ajuda a entender como a clínica pode acompanhar essa fase."
        highlight="Pós-operatório assistido"
        detail="Canaã dos Carajás • acompanhamento local"
        primary={{ label: "Falar sobre meu pós-operatório", href: "/agendamento" }}
        secondary={{ label: "Ver contato", href: "/contato" }}
      />
    </>
  );
}
