import { CtaPanel, EditorialFeatureSection, HeroSection, TripleArticleSection } from "@/components/site/sections";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Cursos",
  description:
    "Frente de formação profissional da Luana Carla Dermo Clinic, apresentada em espaço próprio para não confundir a jornada clínica principal.",
  path: "/cursos",
});

export default function CursosPage() {
  return (
    <>
      <HeroSection
        eyebrow="Cursos"
        title="Formação profissional em espaço próprio, sem confundir a jornada clínica."
        mobileTitle="Cursos em espaço próprio, sem confundir a jornada clínica."
        description="A clínica também mantém uma frente de ensino. Aqui, a formação profissional aparece em um espaço próprio para não confundir quem procura capacitação com quem busca atendimento assistencial."
        primary={{ label: "Falar com a equipe", href: "/agendamento" }}
        secondary={{ label: "Voltar para a clínica", href: "/sobre" }}
        panelLabel="Frente separada"
        panelTitle="Formação profissional em área própria, sem confundir a narrativa clínica."
        mobilePanelTitle="Formação em área própria, sem confundir a clínica."
        image="/generated/stitch/stitch-courses-hero.jpg"
        tone="dark"
        list={[
          "Cursos profissionalizantes",
          "Pós-operatório",
          "Redução de medidas",
          "Contato via canal público atual",
        ]}
      />

      <EditorialFeatureSection
        eyebrow="Cursos"
        title="Uma frente importante da marca, organizada em espaço próprio."
        body="A atuação em cursos reforça autoridade temática, especialmente em pós-operatório e cuidado corporal, mas segue em um fluxo separado da experiência clínica."
        calloutTitle="Fronteira correta"
        calloutBody="Cursos seguem importantes para a marca, mas fora do centro da narrativa assistencial."
      />

      <TripleArticleSection
        eyebrow="O que esta página comunica"
        title="Formação, autoridade temática e separação saudável entre B2C e B2B."
        muted
        items={[
          { title: "Pós-operatório", body: "Uma das áreas mais fortes da clínica também sustenta sua frente de ensino e autoridade temática." },
          { title: "Redução de medidas", body: "Outra frente citada dentro da oferta de cursos profissionalizantes." },
          { title: "Contato separado", body: "Quem procura cursos deve entrar por um fluxo diferente do paciente assistencial, para reduzir ruído e confusão." },
        ]}
      />

      <CtaPanel
        eyebrow="Quer saber sobre cursos?"
        title="Entre em contato com a clínica e sinalize que seu interesse é formação profissional."
        body="Enquanto a frente educacional não ganha um canal próprio, o contato inicial continua acontecendo pelos canais públicos atuais."
        highlight="Formação profissional"
        detail="Pós-operatório e redução de medidas"
        primary={{ label: "Ir para contato", href: "/contato" }}
        secondary={{ label: "Voltar para a clínica", href: "/sobre" }}
      />
    </>
  );
}
