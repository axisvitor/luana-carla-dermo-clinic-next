import { OperationalHero } from "@/components/site/archetypes";
import { FaqSection, ProcessSection, TripleArticleSection } from "@/components/site/sections";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Falar no WhatsApp",
  description:
    "Primeiro contato com a Luana Carla Dermo Clinic pelo WhatsApp oficial, conduzido diretamente pela equipe e sem uso de formulários.",
  path: "/agendamento",
});

export default function AgendamentoPage() {
  return (
    <>
      <OperationalHero
        eyebrow="Primeiro contato"
        title="Aqui, o primeiro passo começa em conversa, não em formulário."
        description="A clínica usa o WhatsApp oficial como porta de entrada para entender o seu momento antes de orientar qualquer próxima etapa. Você explica o essencial, a equipe lê o contexto e conduz a conversa com mais clareza."
        primary={{ label: "Ver contato oficial", href: "/contato" }}
        secondary={{ label: "Como funciona", href: "/como-funciona" }}
        deskTitle="O que acontece na prática"
        deskBody="O site não finge autoatendimento. A lógica é simples: mensagem curta, leitura do seu contexto e orientação humana da equipe."
        points={[
          {
            label: "01",
            title: "Você manda uma mensagem curta",
            body: "Explique em poucas linhas qual é seu momento, sua dúvida ou o atendimento que mais te interessa.",
          },
          {
            label: "02",
            title: "A equipe entende o contexto",
            body: "A clínica lê sua necessidade principal antes de orientar o caminho mais adequado para agora.",
          },
          {
            label: "03",
            title: "O próximo passo é combinado com você",
            body: "Quando faz sentido seguir, a equipe organiza a marcação e os retornos diretamente pela conversa.",
          },
        ]}
        facts={[
          { label: "Canal principal", value: "WhatsApp oficial da equipe" },
          { label: "Formato", value: "sem formulário e sem automação fria" },
          { label: "Objetivo", value: "entender seu momento antes de orientar" },
          { label: "Agendamento", value: "conduzido pela própria clínica" },
        ]}
      />

      <ProcessSection
        eyebrow="Como esse começo costuma acontecer"
        title="A conversa é simples, mas a clínica conduz cada etapa com mais contexto."
        items={[
          {
            title: "A mensagem inicial chega com o básico",
            body: "Basta dizer se seu interesse é pós-operatório, continuidade corporal, depilação a laser ou cursos, além da sua dúvida principal.",
          },
          {
            title: "A equipe identifica a frente correta",
            body: "O objetivo do primeiro contato é evitar marcação sem contexto e orientar a linha de atendimento mais adequada.",
          },
          {
            title: "As dúvidas iniciais são respondidas",
            body: "Antes de avançar, a clínica ajuda a alinhar o que faz sentido agora e o que pode esperar.",
          },
          {
            title: "A continuidade é combinada com você",
            body: "Se houver avaliação, retorno ou atendimento, a própria equipe organiza esse próximo passo pela conversa.",
          },
        ]}
      />

      <TripleArticleSection
        eyebrow="O que ajuda nessa primeira mensagem"
        title="Três informações que já deixam a orientação mais objetiva."
        muted
        items={[
          {
            title: "Se for pós-operatório",
            body: "Diga em que fase da recuperação você está, se operou em outra cidade e qual é sua necessidade principal agora.",
          },
          {
            title: "Se for continuidade corporal ou laser",
            body: "Explique qual é o seu interesse principal e quais dúvidas você quer esclarecer antes de marcar.",
          },
          {
            title: "Se for curso",
            body: "Avise logo no início que seu interesse é formação profissional para a equipe levar a conversa para o caminho certo.",
          },
        ]}
      />

      <FaqSection
        eyebrow="FAQ"
        title="Dúvidas comuns antes de falar com a equipe."
        items={[
          {
            title: "Preciso preencher algum formulário antes?",
            body: "Não. O primeiro contato é direto com a equipe pelo WhatsApp oficial da clínica.",
          },
          {
            title: "Posso explicar meu caso mesmo sem saber exatamente qual atendimento preciso?",
            body: "Sim. A própria conversa inicial serve para a equipe entender seu momento e orientar o melhor caminho.",
          },
          {
            title: "O agendamento acontece sozinho pelo site?",
            body: "Não. Quando faz sentido seguir, a marcação é organizada pela clínica dentro da própria conversa.",
          },
          {
            title: "Se meu assunto for curso, devo usar esse mesmo começo?",
            body: "Sim. Basta informar logo na primeira mensagem que seu interesse é formação profissional.",
          },
        ]}
      />
    </>
  );
}
