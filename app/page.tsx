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
        eyebrow="Canaã dos Carajás"
        title="Cuidado corporal com atenção, método e continuidade."
        mobileTitle="Cuidado corporal com atenção e continuidade."
        description="Pós-operatório assistido, continuidade corporal e depilação a laser — cada atendimento conduzido com atenção ao seu momento e orientação clara desde o primeiro contato."
        primary={{ label: "Conhecer a clínica", href: "/sobre" }}
        image="/generated/home-hero-v4.jpg"
        credentials={["Atendimento com hora marcada", "Pós-operatório assistido", "Depilação a laser"]}
      />

      <TrustStrip
        items={[
          {
            title: "Atendimento personalizado",
            body: "Cada consulta é conduzida com atenção ao seu momento e às suas necessidades específicas.",
          },
          {
            title: "Acompanhamento contínuo",
            body: "Quando o tratamento pede continuidade, oferecemos suporte em cada etapa do processo.",
          },
          {
            title: "Equipe especializada",
            body: "Profissionais qualificados para orientar e conduzir seu cuidado com excelência.",
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
        title="Do primeiro contato ao atendimento personalizado."
        items={[
          {
            title: "Avaliação inicial",
            body: "Entendemos suas necessidades e o momento atual do seu corpo para oferecer a melhor orientação.",
          },
          {
            title: "Indicação do tratamento",
            body: "Nossa equipe indica o caminho mais adequado: pós-operatório, continuidade corporal ou depilação a laser.",
          },
          {
            title: "Agendamento personalizado",
            body: "O horário é organizado pela equipe da clínica para garantir um atendimento dedicado.",
          },
          {
            title: "Acompanhamento contínuo",
            body: "Quando necessário, as próximas etapas são planejadas com organização e previsibilidade.",
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
        title="Perguntas comuns antes da primeira consulta."
        description="Reunimos as principais dúvidas para ajudar você a entender melhor nossos serviços."
        featured
        items={[
          {
            title: "Vocês atendem pós-operatório de quem operou em outra cidade?",
            body: "Sim. Oferecemos acompanhamento e continuidade local em Canaã dos Carajás para pacientes que realizaram cirurgias em outras cidades.",
          },
          {
            title: "Como sei qual tratamento é mais indicado para mim?",
            body: "Na avaliação inicial, nossa equipe analisa suas necessidades e indica o caminho mais adequado para o seu caso.",
          },
          {
            title: "Como funciona o agendamento?",
            body: "O agendamento é feito diretamente com a equipe da clínica, que organiza o melhor horário para seu atendimento.",
          },
          {
            title: "Os tratamentos exigem mais de uma sessão?",
            body: "Depende do caso. Quando necessário, elaboramos um plano de acompanhamento com as etapas claramente definidas.",
          },
        ]}
      />

      <CtaPanel
        eyebrow="Próximo passo"
        title="Agende sua consulta e descubra o melhor caminho para você."
        body="Seja para acompanhamento pós-operatório, continuidade corporal ou depilação a laser, nossa equipe está pronta para orientar você desde o primeiro contato."
        highlight="Atendimento com hora marcada"
        detail="Canaã dos Carajás"
        primary={{ label: "Agendar consulta", href: "/agendamento" }}
        secondary={{ label: "Fale conosco", href: "/contato" }}
        footnote="O agendamento é realizado pela equipe da clínica."
      />
    </>
  );
}
