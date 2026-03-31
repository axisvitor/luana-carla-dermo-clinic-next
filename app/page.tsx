import {
  CtaPanel,
  DarkBand,
  FaqSection,
  HeroSection,
  ManifestoBand,
  ProcessSection,
  ServiceRailsSection,
  SignatureGallery,
  SplitSection,
  TripleArticleSection,
  TrustStrip,
} from "@/components/site/sections";
import { createPageMetadata, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection
        eyebrow="Atendimento com hora marcada • Canaã dos Carajás"
        title="Pós-operatório assistido e cuidado corporal com continuidade."
        description="Em Canaã dos Carajás, a clínica atende pós-operatório, continuidade corporal e depilação a laser com a mesma base: atenção ao momento do corpo, orientação clara e acompanhamento bem conduzido."
        primary={{ label: "Falar com a equipe no WhatsApp", href: "/agendamento" }}
        secondary={{ label: "Como funciona", href: "/como-funciona" }}
        panelLabel="Como a clínica atende"
        panelTitle="Três caminhos de entrada. Um mesmo padrão de cuidado."
        mobilePanelTitle="Três caminhos. Um mesmo cuidado."
        image="/generated/home-hero-v4.jpg"
        tone="dark"
        points={[
          {
            title: "Pós-operatório assistido",
            body: "Para quem precisa de acompanhamento em uma fase delicada, inclusive após cirurgia realizada em outra cidade.",
          },
          {
            title: "Continuidade corporal",
            body: "Para quem busca constância, plano de cuidado e menos decisões soltas ao longo do tempo.",
          },
          {
            title: "Depilação a laser",
            body: "Para quem quer começar seu atendimento na clínica de forma leve, clara e bem orientada.",
          },
        ]}
        quote="Seu momento primeiro. O próximo passo com mais clareza."
      />

      <TrustStrip
        items={[
          {
            title: "Seu momento antes de tudo",
            body: "Cada atendimento começa entendendo a fase do corpo e o que precisa ser priorizado agora.",
          },
          {
            title: "Acompanhamento quando faz sentido",
            body: "Quando o caso pede continuidade, a condução vai além de uma sessão isolada.",
          },
          {
            title: "Primeiro contato com a equipe",
            body: "O WhatsApp oficial da clínica é a porta de entrada para orientação inicial e marcação.",
          },
        ]}
      />

      <ManifestoBand
        eyebrow="Nosso cuidado"
        title="O atendimento não começa pelo procedimento. Começa pelo seu momento."
        body="A proposta da clínica é simples: receber com calma, orientar com clareza e conduzir cada etapa sem excessos. No pós-operatório, isso significa atenção em uma fase sensível. Na continuidade corporal, significa constância. No laser, significa começar com uma experiência organizada e coerente."
      />

      <SignatureGallery />

      <TripleArticleSection
        eyebrow="Quem costuma chegar até aqui"
        title="Três situações em que a clínica costuma fazer mais sentido."
        items={[
          {
            title: "Operou fora e precisa de continuidade em Canaã",
            body: "Se a cirurgia aconteceu em outra cidade, a clínica pode ser o ponto de apoio local para seguir essa fase com mais acompanhamento.",
          },
          {
            title: "Quer cuidar do corpo com mais constância",
            body: "Para quem não quer depender de decisões soltas e prefere um plano mais organizado ao longo do tempo.",
          },
          {
            title: "Quer começar pelo laser com atendimento qualificado",
            body: "Uma entrada mais leve para quem busca clareza desde o primeiro contato e uma experiência coerente com o restante da clínica.",
          },
        ]}
      />

      <ProcessSection
        eyebrow="Como funciona"
        title="Do primeiro WhatsApp ao atendimento com mais clareza."
        items={[
          {
            title: "Você explica o seu momento",
            body: "No primeiro contato, a equipe entende sua necessidade principal e o que pede atenção agora.",
          },
          {
            title: "A clínica orienta a melhor trilha",
            body: "Pós-operatório, continuidade corporal ou depilação a laser: o caminho é indicado de forma clara.",
          },
          {
            title: "A marcação é conduzida pela equipe",
            body: "O agendamento não acontece sozinho no site. Ele é organizado pelo WhatsApp oficial da clínica.",
          },
          {
            title: "O cuidado segue com acompanhamento",
            body: "Quando o caso pede continuidade, as próximas etapas são organizadas com mais calma e previsibilidade.",
          },
        ]}
      />

      <ServiceRailsSection
        eyebrow="Linhas de atendimento"
        title="As principais frentes da clínica."
        featured={{
          label: "Pós-operatório",
          title: "Pós-operatório assistido",
          body: "A frente mais sensível da clínica: acompanhamento com atenção ao momento do corpo, continuidade local em Canaã e orientação clara sobre cada etapa.",
          bullets: ["Atenção à fase da recuperação", "Continuidade local em Canaã", "Próximo passo orientado com clareza"],
          cta: { label: "Conhecer o pós-operatório", href: "/pos-operatorio" },
        }}
        items={[
          {
            label: "Continuidade",
            title: "Continuidade corporal",
            body: "Cuidado para quem busca constância, manutenção e um plano mais coerente ao longo do tempo.",
            cta: { label: "Conhecer continuidade corporal", href: "/continuidade-corporal" },
          },
          {
            label: "Laser",
            title: "Depilação a laser",
            body: "Uma entrada mais organizada para quem deseja começar com atendimento claro desde o primeiro contato.",
            cta: { label: "Conhecer depilação a laser", href: "/depilacao-laser" },
          },
        ]}
      />

      <SplitSection
        eyebrow="Por que tantas pacientes se identificam com essa proposta"
        title="Porque cuidado corporal também pede calma, método e acompanhamento."
        items={[
          {
            title: "Menos ruído, mais orientação",
            body: "Você entende melhor o que faz sentido para o seu momento, sem pressão para decidir antes da hora.",
          },
          {
            title: "Mais atenção ao processo",
            body: "O atendimento valoriza continuidade, organização e acompanhamento quando isso é importante para o caso.",
          },
          {
            title: "Comunicação clara",
            body: "A clínica prefere explicar cada etapa com transparência, sem exageros e sem promessas apressadas.",
          },
        ]}
      />

      <DarkBand
        eyebrow="Nosso compromisso"
        title="Um cuidado mais responsável do primeiro contato ao acompanhamento."
        items={[
          "Orientação compatível com o seu momento.",
          "Atendimento com hora marcada e conversa conduzida pela equipe.",
          "Comunicação clara sobre cada etapa do processo.",
          "Continuidade quando ela é importante para o caso.",
        ]}
      />

      <FaqSection
        eyebrow="Dúvidas frequentes"
        title="O que costuma importar antes da primeira conversa."
        description="Se preferir, você pode chegar ao WhatsApp já com sua necessidade mais clara. A equipe conduz o restante."
        featured
        items={[
          {
            title: "Vocês atendem pós-operatório de quem operou em outra cidade?",
            body: "Sim. Esse é um dos contextos em que a clínica pode oferecer continuidade local em Canaã dos Carajás.",
          },
          {
            title: "Como sei qual atendimento faz mais sentido para mim?",
            body: "O primeiro passo é explicar seu momento e sua principal necessidade. A equipe orienta o melhor caminho.",
          },
          {
            title: "Posso agendar tudo sozinha pelo site?",
            body: "Não. O primeiro contato e a marcação são feitos pela equipe da clínica no WhatsApp oficial.",
          },
          {
            title: "O atendimento termina em uma única sessão?",
            body: "Depende do caso. Quando há necessidade de acompanhamento, a clínica orienta a continuidade de forma clara.",
          },
        ]}
      />

      <CtaPanel
        eyebrow="Próximo passo"
        title="Fale com a equipe e entenda qual caminho faz mais sentido para você."
        body="Se você busca acompanhamento no pós-operatório, continuidade corporal ou depilação a laser, o primeiro passo é uma conversa orientada com a clínica pelo WhatsApp."
        highlight="Atendimento com hora marcada"
        detail="Canaã dos Carajás • contato conduzido pela equipe"
        primary={{ label: "Falar com a equipe no WhatsApp", href: "/agendamento" }}
        secondary={{ label: "Ver contato e canais", href: "/contato" }}
        footnote="A marcação é feita pela equipe após o primeiro contato."
      />
    </>
  );
}
