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
    "Recuperação com mais critério, leitura por fase e continuidade local em Canaã dos Carajás para quem precisa de suporte pós-operatório com clareza.",
  path: "/pos-operatorio",
});

export default function PosOperatorioPage() {
  return (
    <>
      <HeroSection
        eyebrow="Pós-operatório assistido"
        title="Recuperação não é fase para improviso."
        description="Esta página apresenta o pós-operatório como o coração da clínica: um cuidado que acolhe sem perder firmeza, explica sem misticismo e organiza a paciente com mais segurança, especialmente quando ela operou fora e volta para Canaã precisando de suporte local."
        primary={{ label: "Falar no WhatsApp", href: "/agendamento" }}
        secondary={{ label: "Ver FAQ", href: "/faq" }}
        panelLabel="Pós-operatório assistido"
        panelTitle="Quando a recuperação pede mais direção do que barulho."
        image="/generated/post-op-hero.jpg"
        tone="dark"
        list={[
          "Leitura por fase",
          "Acolhimento com disciplina",
          "Continuidade entre sessões",
          "Próximo passo sempre claro",
        ]}
      />

      <TrustStrip
        items={[
          { title: "Fase certa, conduta certa", body: "Cada momento do pós-operatório pede uma leitura diferente. É isso que protege a experiência e a confiança." },
          { title: "Continuidade local", body: "A clínica pode acolher quem operou fora e precisa de suporte em Canaã com mais critério." },
          { title: "Menos ansiedade", body: "Quando a próxima ação é clara, a recuperação fica menos confusa e menos solitária." },
        ]}
      />

      <EditorialFeatureSection
        eyebrow="Por que esta frente importa"
        title="O pós-operatório é o ponto em que a clínica consegue ser mais útil, mais distinta e mais memorável."
        body="A recuperação pede presença, leitura de fase, continuidade e uma experiência organizada. É justamente aí que a clínica encontra sua diferença mais forte: acolher com calma, agir com método e reduzir a sensação de improviso em um momento sensível."
        calloutTitle="O que a paciente percebe"
        calloutBody="Mais clareza sobre o que fazer agora, mais segurança na condução e menos ruído em uma fase delicada."
      />

      <TripleArticleSection
        eyebrow="O que esta página precisa deixar óbvio"
        title="Três pilares para uma recuperação mais assistida."
        muted
        items={[
          { title: "Ler a fase do corpo", body: "A conduta não começa pelo procedimento; começa pelo momento da recuperação e pelo que ele pede agora." },
          { title: "Sustentar a continuidade", body: "O cuidado não acaba na sessão. Reavaliação, rebook e suporte entre etapas fazem parte da experiência." },
          { title: "Explicar sem dramatizar", body: "A confiança cresce quando a clínica orienta com clareza, sem sensacionalismo e sem promessas vazias." },
        ]}
      />

      <SplitSection
        eyebrow="Para quem esta página faz mais sentido"
        title="Para quem precisa de direção técnica sem perder acolhimento."
        items={[
          { title: "Quem operou fora e volta para Canaã", body: "Uma das forças da clínica é oferecer continuidade local para quem fez cirurgia em outra cidade." },
          { title: "Quem quer mais clareza na recuperação", body: "Entender a fase, o ritmo e a próxima ação reduz a sensação de estar perdida no processo." },
          { title: "Quem prefere verdade a exagero", body: "Aqui o foco é explicar o que faz sentido para o momento do corpo, não aumentar ansiedade para vender cedo demais." },
        ]}
      />

      <FaqSection
        eyebrow="FAQ"
        title="Perguntas frequentes sobre pós-operatório assistido."
        items={[
          { title: "Vocês atendem quem operou em outra cidade?", body: "Sim. Essa é uma das situações em que a clínica pode gerar mais valor: continuidade local com mais critério e clareza." },
          { title: "A primeira conversa já define todo o tratamento?", body: "Não. O foco inicial é entender a fase do corpo, alinhar expectativas e indicar o próximo passo com responsabilidade." },
          { title: "O cuidado termina na sessão?", body: "Não. A lógica da clínica inclui continuidade, reavaliação e comunicação entre etapas quando necessário." },
        ]}
      />

      <CtaPanel
        eyebrow="Próximo passo"
        title="Se o seu caso pede recuperação assistida, comece por uma conversa mais clara."
        body="A melhor forma de entender se a clínica faz sentido para o seu momento é iniciar o contato com contexto e deixar a equipe conduzir a triagem pelo WhatsApp."
        highlight="Pós-operatório assistido"
        detail="Leitura por fase • Continuidade • Canaã dos Carajás"
        primary={{ label: "Quero falar sobre meu caso", href: "/agendamento" }}
        secondary={{ label: "Ver contato", href: "/contato" }}
      />
    </>
  );
}
