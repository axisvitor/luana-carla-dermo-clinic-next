import {
  CtaPanel,
  EditorialFeatureSection,
  FaqSection,
  HeroSection,
  TripleArticleSection,
  TrustStrip,
} from "@/components/site/sections";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Depilação a laser",
  description:
    "Depilação a laser em Canaã dos Carajás com avaliação inicial, alinhamento de expectativa e uma experiência de entrada mais organizada.",
  path: "/depilacao-laser",
});

export default function DepilacaoLaserPage() {
  return (
    <>
      <HeroSection
        eyebrow="Depilação a laser"
        title="Começar pela depilação a laser também pode ser uma experiência mais clara."
        description="Na clínica, a depilação a laser é conduzida como uma entrada organizada. No primeiro contato, a equipe entende a área de interesse, tira dúvidas iniciais e orienta como seguir com a marcação."
        primary={{ label: "Falar com a equipe no WhatsApp", href: "/agendamento" }}
        secondary={{ label: "Ver contato", href: "/contato" }}
        panelLabel="Depilação a laser"
        panelTitle="Primeiro contato, dúvidas iniciais e agenda organizada pela equipe."
        image="/generated/service-atmosphere.png"
        tone="light"
        list={[
          "Primeiro contato com orientação",
          "Expectativas alinhadas desde o começo",
          "Agenda organizada pela equipe",
          "Experiência coerente com a clínica",
        ]}
      />

      <TrustStrip
        items={[
          { title: "Menos dúvida antes de marcar", body: "No primeiro contato, a paciente entende como funciona, tira dúvidas iniciais e sabe como seguir." },
          { title: "Expectativa alinhada", body: "A clínica prefere orientar com clareza em vez de transformar o serviço em promessa genérica." },
          { title: "Mesmo padrão de cuidado", body: "Mesmo sendo um primeiro atendimento, a paciente encontra a mesma clareza e organização da clínica." },
        ]}
      />

      <EditorialFeatureSection
        eyebrow="Por que esse atendimento importa"
        title="Começar bem reduz dúvidas e melhora a experiência desde o primeiro contato."
        body="Mesmo sendo um atendimento de entrada, tudo fica melhor quando a paciente entende como funciona, alinha expectativa e sabe como seguir com a marcação. A proposta é tornar esse começo simples, claro e bem conduzido."
        calloutTitle="Como esse atendimento é conduzido"
        calloutBody="Primeiro contato para entender a área de interesse, esclarecer dúvidas iniciais e orientar a marcação com a equipe."
      />

      <TripleArticleSection
        eyebrow="O que faz esse começo funcionar melhor"
        title="Três pontos que deixam a depilação a laser mais clara para a paciente."
        muted
        items={[
          { title: "Começa com orientação inicial", body: "Antes de qualquer marcação, a equipe ajuda a alinhar dúvidas, entender a área de interesse e explicar como seguir." },
          { title: "Segue com agenda bem conduzida", body: "Quando horários, confirmação e preparação ficam claros, a paciente chega com menos dúvida e mais segurança." },
          { title: "Mantém o mesmo padrão de atendimento", body: "Mesmo começando pelo laser, a paciente já percebe organização, clareza e cuidado na forma de atendimento." },
        ]}
      />

      <FaqSection
        eyebrow="FAQ"
        title="Perguntas frequentes sobre depilação a laser."
        items={[
          { title: "Posso começar meu atendimento pela depilação a laser?", body: "Sim. Para muitas pacientes, essa é a forma mais leve de conhecer a clínica e iniciar o contato com a equipe." },
          { title: "Como funciona o primeiro contato?", body: "Você explica sua dúvida ou interesse pelo WhatsApp, e a equipe orienta a melhor forma de seguir." },
          { title: "O que acontece depois do primeiro contato?", body: "A equipe entende a área de interesse, responde dúvidas iniciais e orienta a melhor forma de seguir com a marcação." },
          { title: "A equipe ajuda a entender se essa linha faz sentido para mim?", body: "Sim. O primeiro contato serve justamente para alinhar expectativa e orientar o melhor caminho." },
          { title: "A marcação acontece sozinha pelo site?", body: "Não. O contato e a organização da agenda são conduzidos pela equipe da clínica." },
        ]}
      />

      <CtaPanel
        eyebrow="Próximo passo"
        title="Se você quer começar pela depilação a laser, o melhor início é uma conversa clara com a equipe."
        body="Explique a área de interesse e suas dúvidas iniciais pelo WhatsApp, e a clínica orienta como seguir com menos dúvida antes da marcação."
        highlight="Depilação a laser"
        detail="Orientação inicial • agenda • primeiro contato"
        primary={{ label: "Falar com a clínica", href: "/agendamento" }}
        secondary={{ label: "Ver canais de contato", href: "/contato" }}
      />
    </>
  );
}
