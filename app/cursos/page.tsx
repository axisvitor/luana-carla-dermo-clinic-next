import { InstitutionalHero } from "@/components/site/archetypes";
import { CtaPanel, DarkBand, SplitSection, TripleArticleSection } from "@/components/site/sections";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Cursos",
  description:
    "Cursos e formação profissional da Luana Carla Dermo Clinic em um espaço dedicado, separado da jornada clínica.",
  path: "/cursos",
});

export default function CursosPage() {
  return (
    <>
      <InstitutionalHero
        eyebrow="Cursos"
        title="A frente de formação profissional existe, mas vive em um caminho próprio."
        description="A marca também mantém uma frente de ensino voltada à formação profissional. Esta área foi separada para que quem busca curso encontre esse conteúdo com clareza, sem confundir a jornada clínica da paciente."
        image="/generated/stitch/stitch-courses-hero.jpg"
        primary={{ label: "Ir para contato", href: "/contato" }}
        secondary={{ label: "Voltar para a clínica", href: "/sobre" }}
        facts={[
          { label: "Foco", value: "formação profissional e cursos" },
          { label: "Temas", value: "pós-operatório e cuidado corporal" },
          { label: "Organização", value: "frente separada da jornada clínica" },
          { label: "Primeiro passo", value: "avisar à equipe que o assunto é curso" },
        ]}
        noteLabel="Por que separar essa área"
        noteTitle="Quem busca curso precisa encontrar contexto certo, sem competir com a navegação clínica."
        noteBody="Ao separar essa frente, a marca protege a clareza do site: paciente não se perde em conteúdo de formação, e profissional interessada em aprender encontra um espaço mais direto."
        quote="Formação em espaço próprio."
      />

      <DarkBand
        eyebrow="Frente educacional"
        title="A formação reforça a autoridade da marca, mas não deve embaralhar a experiência de quem está procurando atendimento."
        items={[
          "Quem busca curso encontra um caminho dedicado desde o início.",
          "Quem busca atendimento continua em uma jornada clínica mais clara e sem mistura de objetivos.",
          "A equipe consegue direcionar a conversa mais rápido quando o assunto é informado logo na primeira mensagem.",
        ]}
      />

      <TripleArticleSection
        eyebrow="O que esta página organiza"
        title="Três pontos que deixam a frente de cursos mais clara para quem chega aqui."
        muted
        items={[
          {
            title: "Formação profissional",
            body: "Esta área é destinada a quem quer aprender, se atualizar e se desenvolver profissionalmente.",
          },
          {
            title: "Temas ligados ao cuidado corporal",
            body: "Os cursos se conectam a temas que também fazem parte da experiência e da autoridade da marca.",
          },
          {
            title: "Contato separado da jornada clínica",
            body: "Ao informar logo no início que o interesse é curso, a equipe consegue conduzir a conversa pelo caminho correto.",
          },
        ]}
      />

      <SplitSection
        eyebrow="Como facilitar o primeiro contato sobre cursos"
        title="Se o assunto é formação, vale deixar isso explícito logo na primeira mensagem."
        items={[
          {
            title: "Diga que o interesse é curso",
            body: "Isso evita que a equipe interprete a conversa como demanda clínica e já direciona a resposta corretamente.",
          },
          {
            title: "Diga qual tema mais te interessa",
            body: "Se houver interesse em pós-operatório ou outra frente específica, essa informação já ajuda bastante no começo.",
          },
          {
            title: "Use o contato oficial da equipe",
            body: "A conversa inicial continua sendo conduzida pela clínica, só que agora com o contexto certo da sua procura.",
          },
        ]}
      />

      <CtaPanel
        eyebrow="Quer saber sobre cursos?"
        title="Fale com a equipe e avise logo na primeira mensagem que seu interesse é formação profissional."
        body="Isso ajuda a clínica a direcionar sua conversa com mais rapidez e mais clareza desde o início."
        highlight="Formação profissional"
        detail="Cursos • pós-operatório • cuidado corporal"
        primary={{ label: "Ir para contato", href: "/contato" }}
        secondary={{ label: "Voltar para a clínica", href: "/sobre" }}
      />
    </>
  );
}
