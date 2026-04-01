import { OperationalHero } from "@/components/site/archetypes";
import { ProcessSection, SplitSection, TripleArticleSection } from "@/components/site/sections";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Como funciona",
  description:
    "Entenda como a clínica recebe, orienta e acompanha cada paciente, do primeiro WhatsApp às próximas etapas do atendimento.",
  path: "/como-funciona",
});

export default function ComoFuncionaPage() {
  return (
    <>
      <OperationalHero
        eyebrow="Como funciona"
        title="A clínica organiza o cuidado em três movimentos: entender, orientar e conduzir."
        description="Em vez de tratar o site como agenda automática, a clínica usa o primeiro contato para ouvir o que você precisa, indicar a frente correta e organizar o caminho seguinte com mais clareza."
        primary={{ label: "Ver primeiro contato", href: "/agendamento" }}
        secondary={{ label: "Ir para contato", href: "/contato" }}
        deskTitle="Fluxo atual da clínica"
        deskBody="O atendimento foi pensado para reduzir ruído: menos pressa na entrada, mais contexto antes de marcar e mais clareza sobre o que vem depois."
        points={[
          {
            label: "01",
            title: "Entender seu momento",
            body: "O primeiro passo é ouvir sua necessidade principal e identificar se o caso se conecta ao pós-operatório, à continuidade corporal ou ao laser.",
          },
          {
            label: "02",
            title: "Orientar o melhor caminho",
            body: "A equipe responde dúvidas iniciais, alinha expectativa e mostra o próximo passo que faz sentido agora.",
          },
          {
            label: "03",
            title: "Conduzir a continuidade",
            body: "Quando existe atendimento, retorno ou acompanhamento, a clínica organiza isso sem transformar a experiência em algo mecânico.",
          },
        ]}
        facts={[
          { label: "Entrada", value: "WhatsApp oficial da equipe" },
          { label: "Agenda", value: "atendimento com hora marcada" },
          { label: "Lógica", value: "orientar antes de marcar" },
          { label: "Meta", value: "menos confusão e mais clareza" },
        ]}
      />

      <ProcessSection
        eyebrow="A jornada"
        title="Da conversa inicial ao atendimento, o fluxo costuma seguir esta ordem."
        items={[
          {
            title: "Primeiro contato pelo WhatsApp",
            body: "Você explica sua necessidade principal, sua dúvida ou o momento do corpo que quer tratar agora.",
          },
          {
            title: "Leitura do seu contexto",
            body: "A equipe identifica qual frente da clínica faz mais sentido e se existe algo que precisa ser alinhado antes de seguir.",
          },
          {
            title: "Orientação e organização da marcação",
            body: "O agendamento não acontece sozinho no site. Ele é conduzido pela clínica conforme o tipo de atendimento e o momento da paciente.",
          },
          {
            title: "Atendimento e próximos passos",
            body: "Depois da entrada, a paciente entende o que observar, quando retornar e como seguir caso exista continuidade.",
          },
        ]}
      />

      <TripleArticleSection
        eyebrow="O que esse formato evita"
        title="Menos entrada sem contexto, menos marcação apressada e menos dúvida sobre o que vem depois."
        muted
        items={[
          {
            title: "Entrar sem saber por onde começar",
            body: "A conversa inicial serve para transformar dúvida difusa em próximo passo claro.",
          },
          {
            title: "Marcar antes de entender o próprio caso",
            body: "A clínica prefere orientar a paciente primeiro, em vez de simular um autoatendimento que não reflete a realidade do negócio.",
          },
          {
            title: "Sair do atendimento sem leitura de continuidade",
            body: "Quando existe acompanhamento, a paciente entende melhor o ritmo, os retornos e o que observar entre etapas.",
          },
        ]}
      />

      <SplitSection
        eyebrow="Por que isso melhora a experiência"
        title="Porque acolher bem também significa deixar o próximo passo mais legível."
        items={[
          {
            title: "Mais tranquilidade para a paciente",
            body: "Quando a entrada é mais clara, a sensação de cuidado já começa antes do atendimento presencial.",
          },
          {
            title: "Mais coerência com a proposta da clínica",
            body: "O jeito de receber precisa combinar com a promessa de calma, clareza e responsabilidade que a marca quer sustentar.",
          },
          {
            title: "Mais valor percebido em toda a jornada",
            body: "Orientação, contexto e continuidade fazem o atendimento parecer mais sólido do começo ao fim.",
          },
        ]}
      />
    </>
  );
}
