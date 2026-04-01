import { OperationalHero } from "@/components/site/archetypes";
import { ContactGrid, SplitSection } from "@/components/site/sections";
import { createPageMetadata, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Contato",
  description:
    "Contato da Luana Carla Dermo Clinic em Canaã dos Carajás. O primeiro contato e o agendamento são conduzidos pela equipe via WhatsApp oficial.",
  path: "/contato",
});

export default function ContatoPage() {
  return (
    <>
      <OperationalHero
        eyebrow="Contato"
        title="Os canais oficiais da clínica, sem ruído e sem desvio."
        description="Se você quer falar com a Luana Carla Dermo Clinic, o ponto de entrada é o WhatsApp oficial da equipe. O Instagram funciona como vitrine da marca. O site só organiza esse caminho com mais clareza."
        primary={{ label: "Ver primeiro contato", href: "/agendamento" }}
        secondary={{ label: "Abrir Instagram", href: siteConfig.instagram, external: true }}
        deskTitle="Escolha o canal certo"
        deskBody="Cada canal existe para uma função clara. Isso evita expectativas erradas e deixa a conversa mais objetiva desde o começo."
        points={[
          {
            label: "WA",
            title: "WhatsApp para começar a conversa",
            body: "É onde a equipe entende seu momento, responde dúvidas iniciais e conduz a marcação quando faz sentido seguir.",
          },
          {
            label: "IG",
            title: "Instagram para acompanhar a marca",
            body: "O Instagram é o canal público para acompanhar conteúdos, bastidores e a presença institucional da clínica.",
          },
          {
            label: "LOC",
            title: "Centro de Canaã dos Carajás",
            body: "O atendimento acontece com hora marcada, em uma experiência pensada para ser mais calma e organizada.",
          },
        ]}
        facts={[
          { label: "Canal principal", value: "WhatsApp oficial da equipe" },
          { label: "Canal público", value: "@luanacarladermoclinic" },
          { label: "Local", value: "Centro • Canaã dos Carajás • PA" },
          { label: "Agenda", value: "atendimento com hora marcada" },
        ]}
      />

      <ContactGrid
        eyebrow="Canais"
        title="Use o caminho que resolve o seu assunto agora."
        cards={[
          {
            title: "Primeiro contato com a equipe",
            body: "Se você quer falar sobre pós-operatório, continuidade corporal ou depilação a laser, este é o canal principal. A conversa começa aqui.",
            cta: { label: "Ver primeiro contato", href: "/agendamento" },
          },
          {
            title: "Instagram institucional",
            body: "Para acompanhar a marca, conferir conteúdos e validar o canal público ativo da clínica, o Instagram continua sendo a referência externa.",
            cta: { label: "Abrir Instagram", href: siteConfig.instagram, external: true },
          },
          {
            title: "Se o assunto for curso",
            body: "Você também pode começar pela equipe, mas vale avisar logo na primeira mensagem que seu interesse é formação profissional para acelerar o direcionamento.",
            cta: { label: "Ver página de cursos", href: "/cursos" },
          },
          {
            title: "Se ainda existe dúvida sobre qual frente procurar",
            body: "Não tem problema chegar sem resposta pronta. O papel da equipe no primeiro contato é justamente organizar esse entendimento com você.",
            cta: { label: "Entender como funciona", href: "/como-funciona" },
          },
        ]}
      />

      <SplitSection
        eyebrow="Antes de mandar a mensagem"
        title="Três pontos simples que já ajudam a equipe a orientar melhor."
        items={[
          {
            title: "Diga qual é o seu momento",
            body: "Explique se o assunto é pós-operatório, continuidade corporal, laser ou curso. Isso já economiza uma etapa da conversa.",
          },
          {
            title: "Diga qual é sua dúvida principal",
            body: "A clínica consegue orientar com mais objetividade quando entende o que você precisa esclarecer primeiro.",
          },
          {
            title: "Seja breve e direta",
            body: "Não precisa construir uma mensagem perfeita. Poucas linhas com contexto já ajudam bastante no começo.",
          },
        ]}
      />
    </>
  );
}
