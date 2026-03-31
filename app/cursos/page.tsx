import { CtaPanel, EditorialFeatureSection, HeroSection, TripleArticleSection } from "@/components/site/sections";
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
      <HeroSection
        eyebrow="Cursos"
        title="Cursos e formação profissional em um espaço dedicado."
        mobileTitle="Cursos e formação profissional em espaço dedicado."
        description="A clínica também mantém uma frente de ensino voltada à formação profissional. Esta área foi separada para que quem busca cursos encontre esse conteúdo com clareza, sem confundir o atendimento da paciente."
        primary={{ label: "Falar com a equipe", href: "/agendamento" }}
        secondary={{ label: "Voltar para a clínica", href: "/sobre" }}
        panelLabel="Formação profissional"
        panelTitle="Uma área própria para cursos, com contexto e caminho corretos."
        mobilePanelTitle="Uma área própria para cursos, sem confundir a clínica."
        image="/generated/stitch/stitch-courses-hero.jpg"
        tone="dark"
        list={[
          "Cursos profissionalizantes",
          "Pós-operatório",
          "Redução de medidas",
          "Contato inicial com a equipe",
        ]}
      />

      <EditorialFeatureSection
        eyebrow="Cursos"
        title="A frente educacional reforça a experiência da marca, mas segue em caminho próprio."
        body="Além do atendimento clínico, a marca também atua com formação profissional. Aqui, essa frente aparece separadamente para que cada público encontre com facilidade o conteúdo que procura."
        calloutTitle="Organização correta"
        calloutBody="Quem busca curso encontra um espaço dedicado. Quem busca atendimento continua em uma jornada clínica mais clara."
      />

      <TripleArticleSection
        eyebrow="O que esta página comunica"
        title="Três pontos que organizam melhor a frente de cursos."
        muted
        items={[
          { title: "Formação profissional", body: "Esta área é destinada a quem quer aprender e se desenvolver profissionalmente." },
          { title: "Temas ligados ao cuidado corporal", body: "Os cursos se conectam a temas que também fazem parte da experiência e da autoridade da marca." },
          { title: "Contato separado da jornada clínica", body: "Ao informar logo no início que seu interesse é curso, a equipe consegue conduzir melhor a conversa." },
        ]}
      />

      <CtaPanel
        eyebrow="Quer saber sobre cursos?"
        title="Fale com a equipe e informe logo na primeira mensagem que seu interesse é formação profissional."
        body="Isso ajuda a clínica a direcionar sua conversa com mais rapidez e clareza."
        highlight="Formação profissional"
        detail="Cursos • pós-operatório • redução de medidas"
        primary={{ label: "Ir para contato", href: "/contato" }}
        secondary={{ label: "Voltar para a clínica", href: "/sobre" }}
      />
    </>
  );
}
