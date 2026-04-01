import { ServiceHero } from "@/components/site/archetypes";
import { CtaPanel, FaqSection, TripleArticleSection, TrustStrip } from "@/components/site/sections";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Depilação a Laser em Canaã dos Carajás | Luana Carla Dermo Clinic",
  description:
    "Depilação a laser em Canaã dos Carajás com tecnologia avançada. Avaliação inicial, alinhamento de expectativas e atendimento profissional. Agende sua consulta.",
  path: "/depilacao-laser",
  keywords: ["depilação a laser Canaã dos Carajás", "depilação definitiva Pará", "laser corporal", "depilação profissional"],
});

export default function DepilacaoLaserPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Depilação a laser"
        title="Começar pela depilação a laser também pode ser uma experiência mais clara."
        description="Na clínica, a depilação a laser é tratada como uma entrada organizada. No primeiro contato, a equipe entende a área de interesse, tira dúvidas iniciais e orienta como seguir com a marcação sem transformar o atendimento em promessa genérica."
        primary={{ label: "Falar com a equipe no WhatsApp", href: "/agendamento" }}
        secondary={{ label: "Ver contato", href: "/contato" }}
        image="/generated/service-atmosphere.png"
        tone="light"
        facts={[
          { label: "Ponto forte", value: "entrada mais leve para conhecer a clínica" },
          { label: "Primeiro passo", value: "alinhamento de dúvida e área de interesse" },
          { label: "Agenda", value: "conduzida pela equipe, não pelo site" },
          { label: "Experiência", value: "mais clareza antes da marcação" },
        ]}
        panelLabel="Entrada organizada"
        panelTitle="Antes de marcar, a paciente já entende melhor o que está buscando."
        panelBody="Quando a conversa inicial é bem conduzida, a depilação a laser deixa de parecer um serviço solto e passa a fazer parte de uma experiência mais coerente."
        bullets={[
          "primeiro contato com orientação real da equipe",
          "dúvidas iniciais respondidas com mais calma",
          "expectativa alinhada antes da marcação",
        ]}
      />

      <TrustStrip
        items={[
          {
            title: "Menos dúvida antes de marcar",
            body: "No primeiro contato, a paciente entende como funciona, tira dúvidas iniciais e sabe melhor como seguir.",
          },
          {
            title: "Expectativa alinhada",
            body: "A clínica prefere orientar com clareza em vez de transformar o serviço em promessa rápida ou genérica.",
          },
          {
            title: "Mesmo padrão de cuidado",
            body: "Mesmo sendo uma porta de entrada, a paciente já percebe organização, calma e clareza na forma de atendimento.",
          },
        ]}
      />

      <TripleArticleSection
        eyebrow="O que faz esse começo funcionar melhor"
        title="Três pontos que deixam a depilação a laser mais clara para a paciente."
        muted
        items={[
          {
            title: "Começa com orientação inicial",
            body: "Antes de qualquer marcação, a equipe ajuda a alinhar dúvidas, entender a área de interesse e explicar como seguir.",
          },
          {
            title: "Segue com agenda bem conduzida",
            body: "Quando horários, confirmação e preparo ficam claros, a paciente chega com menos dúvida e mais segurança.",
          },
          {
            title: "Mantém o mesmo padrão da clínica",
            body: "Mesmo começando pelo laser, a paciente já encontra uma experiência coerente com o restante da marca.",
          },
        ]}
      />

      <FaqSection
        eyebrow="FAQ"
        title="Perguntas frequentes sobre depilação a laser."
        items={[
          {
            title: "Posso começar meu atendimento pela depilação a laser?",
            body: "Sim. Para muitas pacientes, essa é a forma mais leve de conhecer a clínica e iniciar o contato com a equipe.",
          },
          {
            title: "Como funciona o primeiro contato?",
            body: "Você explica sua dúvida ou interesse pelo WhatsApp, e a equipe orienta a melhor forma de seguir antes da marcação.",
          },
          {
            title: "O que acontece depois da primeira conversa?",
            body: "A equipe entende a área de interesse, responde dúvidas iniciais e organiza com você o melhor próximo passo.",
          },
          {
            title: "A marcação acontece sozinha pelo site?",
            body: "Não. O contato e a organização da agenda são conduzidos pela equipe da clínica.",
          },
        ]}
      />

      <CtaPanel
        eyebrow="Próximo passo"
        title="Se você quer começar pela depilação a laser, o melhor início é uma conversa clara com a equipe."
        body="Explique a área de interesse e suas dúvidas iniciais pelo WhatsApp, e a clínica orienta como seguir com menos ruído antes da marcação."
        highlight="Depilação a laser"
        detail="Orientação inicial • agenda • primeiro contato"
        primary={{ label: "Falar com a clínica", href: "/agendamento" }}
        secondary={{ label: "Ver canais de contato", href: "/contato" }}
      />
    </>
  );
}
