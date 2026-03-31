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
  title: "Estética corporal com continuidade",
  description:
    "Continuidade corporal com plano de cuidado, constância e acompanhamento para quem quer tratar o corpo com mais coerência ao longo do tempo.",
  path: "/continuidade-corporal",
});

export default function ContinuidadeCorporalPage() {
  return (
    <>
      <HeroSection
        eyebrow="Continuidade corporal"
        title="Cuidado corporal faz mais sentido quando existe constância."
        description="A continuidade corporal é indicada para quem quer sair de decisões isoladas e seguir um cuidado mais organizado. A clínica avalia o momento, entende o objetivo e orienta um plano que faça sentido na vida real."
        primary={{ label: "Falar com a equipe no WhatsApp", href: "/agendamento" }}
        secondary={{ label: "Ver perguntas frequentes", href: "/faq" }}
        panelLabel="Continuidade corporal"
        panelTitle="Mais constância, mais acompanhamento e menos decisões soltas."
        image="/generated/stitch/stitch-continuity-1.jpg"
        tone="dark"
        list={[
          "Plano de cuidado com mais clareza",
          "Ritmo possível para a rotina",
          "Acompanhamento ao longo do processo",
          "Próximo passo definido com calma",
        ]}
      />

      <TrustStrip
        items={[
          { title: "Plano de cuidado", body: "A proposta é organizar o tratamento com começo, continuidade e próximos passos bem entendidos." },
          { title: "Ritmo que cabe na vida real", body: "A constância só faz sentido quando o plano conversa com a rotina e a disponibilidade da paciente." },
          { title: "Acompanhamento que dá continuidade", body: "Retornos, ajustes e manutenção ajudam o cuidado a não se perder no meio do caminho." },
        ]}
      />

      <EditorialFeatureSection
        eyebrow="Por que essa linha existe"
        title="Resultados mais consistentes costumam nascer de processo, não de pressa."
        body="Quando o cuidado corporal acontece com frequência possível, leitura de resposta e ajustes ao longo do tempo, a experiência fica mais coerente. A proposta desta linha é justamente transformar intenção em continuidade."
        calloutTitle="O que esta página deixa claro"
        calloutBody="Aqui, o corpo não é tratado por impulso. Ele é acompanhado com plano, constância e revisão ao longo do processo."
      />

      <TripleArticleSection
        eyebrow="Como essa linha funciona"
        title="Três bases para uma continuidade corporal mais bem conduzida."
        muted
        items={[
          { title: "Começa pelo seu objetivo", body: "A clínica entende o que a paciente busca, o momento do corpo e o tipo de acompanhamento que faz sentido." },
          { title: "Segue com constância possível", body: "O plano precisa caber na vida real para que o cuidado seja sustentado com mais coerência." },
          { title: "Avança com revisão e próximos passos", body: "Ao longo do processo, a paciente entende o que manter, o que ajustar e como seguir com mais clareza." },
        ]}
      />

      <SplitSection
        eyebrow="Para quem essa linha costuma funcionar melhor"
        title="Para quem quer previsibilidade, manutenção e uma rotina de cuidado mais organizada."
        items={[
          { title: "Quem cansou de tentar pedaços desconectados", body: "Quando cada decisão acontece isoladamente, o cuidado perde continuidade e fica mais difícil perceber consistência." },
          { title: "Quem quer um plano possível", body: "A proposta é construir um caminho que faça sentido para a rotina, a expectativa e o momento da paciente." },
          { title: "Quem valoriza acompanhamento", body: "Constância não depende só do procedimento. Ela também depende de acompanhamento e orientação ao longo do tempo." },
        ]}
      />

      <FaqSection
        eyebrow="FAQ"
        title="Perguntas frequentes sobre continuidade corporal."
        items={[
          { title: "Vocês atendem apenas com sessão avulsa?", body: "A clínica pode começar pela avaliação, mas a proposta mais forte desta linha é organizar um plano com continuidade." },
          { title: "Como saber se continuidade corporal faz sentido para mim?", body: "O primeiro passo é entender seu objetivo, o momento do corpo e a constância que você consegue sustentar." },
          { title: "Preciso já saber exatamente o que quero fazer?", body: "Não. A equipe ajuda a orientar o melhor caminho a partir da sua necessidade principal." },
          { title: "O acompanhamento faz parte da proposta?", body: "Sim. Quando a paciente segue em processo, os próximos passos são organizados com mais clareza."
          },
        ]}
      />

      <CtaPanel
        eyebrow="Próximo passo"
        title="Se você busca continuidade, comece por um plano mais claro."
        body="No WhatsApp, a equipe pode entender seu momento e orientar se esta linha faz sentido para o seu caso agora."
        highlight="Continuidade corporal"
        detail="Plano • constância • acompanhamento"
        primary={{ label: "Falar sobre meu caso", href: "/agendamento" }}
        secondary={{ label: "Ver perguntas frequentes", href: "/faq" }}
      />
    </>
  );
}
