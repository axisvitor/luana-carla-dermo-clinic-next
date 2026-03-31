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
        title="Pós-operatório com critério. Estética corporal com continuidade."
        description="Aqui, o cuidado começa entendendo em que fase o seu corpo está e qual deve ser o próximo passo. Pós-operatório, continuidade corporal e depilação a laser seguem a mesma lógica: mais clareza, mais direção e menos improviso."
        primary={{ label: "Falar no WhatsApp", href: "/agendamento" }}
        secondary={{ label: "Como funciona", href: "/como-funciona" }}
        panelLabel="O que você encontra aqui"
        panelTitle="Três entradas, uma lógica de cuidado."
        mobilePanelTitle="Três entradas, um mesmo padrão de cuidado."
        image="/generated/home-hero-v4.jpg"
        tone="dark"
        points={[
          { title: "Pós-operatório assistido", body: "Para quem precisa de critério, segurança e continuidade em uma fase sensível." },
          { title: "Estética corporal com continuidade", body: "Para quem quer plano, constância e manutenção — e não apenas sessão solta." },
          { title: "Depilação a laser", body: "Uma porta de entrada organizada para quem quer começar com mais clareza." },
        ]}
        quote="Entrar com clareza. Sair com o próximo passo definido."
      />

      <TrustStrip
        items={[
          { title: "Avaliação pela fase do corpo", body: "A conduta parte do seu momento real, e não de um cardápio automático." },
          { title: "Acompanhamento entre sessões", body: "Continuidade não entra como improviso: ela faz parte da promessa." },
          { title: "Próxima ação sempre definida", body: "Mais clareza, menos ansiedade e menos perda de tempo." },
        ]}
      />

      <ManifestoBand
        eyebrow="Nosso ponto de vista"
        title="Não tratamos cuidado corporal como cardápio. Organizamos jornadas com mais critério."
        body="A clínica foi pensada para que a paciente sinta menos ruído e mais direção. Em vez de parecer uma estética que oferece de tudo, o cuidado ganha foco em recuperação assistida, manutenção corporal com constância e uma porta de entrada mais organizada pelo laser."
      />

      <SignatureGallery />

      <TripleArticleSection
        eyebrow="Para quem esta clínica foi desenhada"
        title="Três entradas claras para a paciente certa."
        items={[
          { title: "Operou fora e vai se recuperar em Canaã", body: "Especialmente importante para quem operou em Marabá ou Parauapebas e precisa de uma continuidade local mais clara e confiável." },
          { title: "Quer cuidar do corpo com continuidade", body: "Para quem está cansada da lógica de sessão solta e quer um plano com avaliação, constância e próxima etapa definida." },
          { title: "Quer começar pelo laser sem cair em commodity", body: "Uma porta de entrada organizada, com comunicação mais honesta e uma experiência coerente com o restante da clínica." },
        ]}
      />

      <ProcessSection
        eyebrow="Como funciona"
        title="Uma jornada mais clara, do primeiro contato ao próximo passo."
        items={[
          { title: "Seu momento vem antes do procedimento", body: "A conversa começa entendendo sua fase, sua necessidade e o que precisa de atenção agora." },
          { title: "Avaliação com critério", body: "A clínica orienta a conduta com mais clareza, sem prometer o que não pode sustentar." },
          { title: "Plano com continuidade", body: "Você entende o que começa, o que acompanha e qual será a próxima ação da sua jornada." },
          { title: "Suporte entre etapas", body: "Follow-up, reavaliação e retorno fazem parte do cuidado que a marca quer transmitir." },
        ]}
      />

      <ServiceRailsSection
        eyebrow="Linhas de cuidado"
        title="Três caminhos que se encontram no mesmo padrão de cuidado."
        featured={{
          label: "Pós-operatório",
          title: "Pós-operatório assistido",
          body: "A frente mais sensível e mais memorável da clínica: cuidado por fase, acompanhamento mais próximo e mais segurança para quem precisa se recuperar com critério.",
          bullets: ["Leitura por fase", "Continuidade com clareza", "Próxima ação sempre definida"],
          cta: { label: "Ver página de pós-operatório", href: "/pos-operatorio" },
        }}
        items={[
          {
            label: "Continuidade",
            title: "Estética corporal com continuidade",
            body: "Plano, manutenção e constância para quem quer cuidar do corpo sem depender de improviso.",
            cta: { label: "Explorar continuidade corporal", href: "/continuidade-corporal" },
          },
          {
            label: "Entrada",
            title: "Depilação a laser",
            body: "Uma entrada mais leve e organizada para quem quer começar com clareza, sem cair na lógica de commodity.",
            cta: { label: "Explorar depilação a laser", href: "/depilacao-laser" },
          },
        ]}
      />

      <SplitSection
        eyebrow="Por que essa experiência parece diferente"
        title="Porque a clínica prefere direção, verdade e continuidade a ruído promocional."
        items={[
          { title: "Acolhimento com disciplina", body: "O tom da marca busca reduzir ansiedade sem cair em promessa vazia ou linguagem dramatizada." },
          { title: "Técnica com clareza", body: "A proposta é explicar o caminho, o momento do caso e o que faz sentido agora com mais tranquilidade." },
          { title: "Transparência como valor", body: "A clínica segue um norte simples: vender o que realmente entrega, com verdade acima de tudo." },
        ]}
      />

      <DarkBand
        eyebrow="O que você não encontra aqui"
        title="Menos espetáculo de estética. Mais responsabilidade no cuidado."
        items={[
          "Sem promessa de milagre ou transformação instantânea.",
          "Sem cardápio confuso que mistura tudo e enfraquece o pós-operatório.",
          "Sem preço e urgência vazia no centro da narrativa.",
          "Sem chamar de acolhimento algo que deveria ser improviso.",
        ]}
      />

      <FaqSection
        eyebrow="Dúvidas frequentes"
        title="Dúvidas reais antes da primeira conversa."
        description="Uma leitura rápida para chegar no WhatsApp com mais clareza. Quando o caso pede sensibilidade maior, a equipe assume a conversa humana."
        featured
        items={[
          { title: "Vocês indicam qualquer procedimento logo no primeiro contato?", body: "Não. O primeiro passo é entender o momento do seu corpo e o que faz sentido agora, com mais critério e menos ruído." },
          { title: "Meu caso é sensível. Vou falar só com automação?", body: "Não. A entrada pode ser organizada digitalmente, mas casos sensíveis e dúvidas clínicas pedem leitura humana quando necessário." },
          { title: "Faço pós-operatório aqui mesmo tendo operado em outra cidade?", body: "Sim. Essa é uma das situações em que a clínica pode gerar mais valor: oferecer continuidade local em Canaã com mais critério e clareza." },
          { title: "O agendamento acontece sozinho pelo site?", body: "Não. O site organiza a entrada, mas o primeiro contato e a marcação são conduzidos pela equipe da clínica via WhatsApp oficial." },
        ]}
      />

      <CtaPanel
        eyebrow="Próximo passo"
        title="Fale com a clínica e comece com mais clareza do que ansiedade."
        body="Se você quer entender qual trilha faz sentido para o seu caso — pós-operatório, continuidade corporal ou depilação a laser — o melhor começo é uma conversa bem orientada com a equipe da clínica."
        highlight="Atendimento com hora marcada"
        detail="Centro • Canaã dos Carajás • PA"
        primary={{ label: "Preparar mensagem inicial", href: "/agendamento" }}
        secondary={{ label: "Ver contato e canais atuais", href: "/contato" }}
        footnote="A equipe conduz o agendamento depois do primeiro contato no WhatsApp."
      />
    </>
  );
}
