import {
  CtaPanel,
  EditorialFeatureSection,
  HeroSection,
  SplitSection,
  TripleArticleSection,
  TrustStrip,
} from "@/components/site/sections";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Sobre a clínica",
  description:
    "Conheça a essência da Luana Carla Dermo Clinic: uma clínica que prefere verdade, calma, critério e continuidade a exagero estético.",
  path: "/sobre",
});

export default function SobrePage() {
  return (
    <>
      <HeroSection
        eyebrow="Sobre a clínica"
        title="Uma clínica que prefere verdade a exagero."
        description="A Luana Carla Dermo Clinic nasceu para unir calma, rigor e responsabilidade em um mercado que costuma prometer demais. O que a clínica quer transmitir é simples: acolher com presença, orientar com clareza e cuidar sem transformar estética em espetáculo."
        primary={{ label: "Falar no WhatsApp", href: "/agendamento" }}
        secondary={{ label: "Ver FAQ", href: "/faq" }}
        panelLabel="Essência da clínica"
        panelTitle="Calma, rigor e responsabilidade em vez de exagero estético."
        image="/generated/stitch/stitch-courses-portrait.jpg"
        tone="light"
        list={[
          "Fundada em 2020",
          "Canaã dos Carajás • Centro",
          "Verdade acima de tudo",
          "Atendimento com hora marcada",
        ]}
      />

      <TrustStrip
        items={[
          { title: "Fundada em 2020", body: "Em Canaã dos Carajás, com atendimento com hora marcada e um cuidado que prefere clareza a exagero." },
          { title: "Verdade acima de tudo", body: "A clínica insiste no mesmo ponto: vender o que realmente entrega." },
          { title: "Autoridade sem sensacionalismo", body: "Mais calma, rigor e clareza. Menos glamour apelativo e promessa rápida." },
        ]}
      />

      <EditorialFeatureSection
        eyebrow="O que a marca acredita"
        title="Acolhimento com disciplina, técnica com clareza, honestidade sem sensacionalismo."
        body="A clínica combina acolhimento e orientação técnica na mesma medida. Isso significa proteger, explicar, acompanhar e manter a experiência elegante — sem sensacionalismo e sem prometer o que não pode sustentar."
        calloutTitle="Jeito de cuidar"
        calloutBody="Cuidado responsável, calma, clareza e uma linguagem que orienta sem exagero."
      />

      <TripleArticleSection
        eyebrow="Valores e personalidade"
        title="Uma estética mais responsável e menos performática."
        muted
        items={[
          { title: "Calma", body: "Em um mercado que exagera, a marca ganha força quando transmite serenidade e direção." },
          { title: "Rigor", body: "O cuidado precisa parecer organizado e coerente com a experiência real da clínica." },
          { title: "Responsabilidade", body: "A comunicação deve prometer apenas aquilo que a experiência realmente consegue sustentar." },
        ]}
      />

      <SplitSection
        eyebrow="O que a paciente percebe"
        title="Uma presença mais calma, mais nítida e mais coerente do primeiro olhar ao contato."
        items={[
          { title: "Mais foco", body: "O pós-operatório aparece como frente principal, sem apagar as outras linhas de cuidado." },
          { title: "Mais coerência", body: "A experiência percebida conversa melhor com triagem, avaliação, agenda e continuidade." },
          { title: "Menos ruído", body: "Cursos e frente clínica não se misturam na mesma narrativa. Isso fortalece o entendimento da paciente." },
        ]}
      />

      <CtaPanel
        eyebrow="Quer conhecer os caminhos da clínica?"
        title="Explore as páginas de cuidado ou siga direto para o contato."
        body="Se você quer entender melhor a proposta da clínica, os serviços principais e a forma de atendimento, o restante do site foi organizado para tornar esse caminho mais claro."
        highlight="Próximos caminhos"
        detail="Pós-operatório • Continuidade • Contato"
        primary={{ label: "Ver pós-operatório", href: "/pos-operatorio" }}
        secondary={{ label: "Ir para contato", href: "/contato" }}
      />
    </>
  );
}
