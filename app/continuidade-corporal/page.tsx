import {
  CtaPanel,
  EditorialFeatureSection,
  FaqSection,
  HeroSection,
  SplitSection,
  TripleArticleSection,
  TrustStrip,
} from "@/components/site/sections";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Estética corporal com continuidade",
  description:
    "Plano, constância e manutenção para quem quer cuidado corporal com mais previsibilidade e menos lógica de sessão solta.",
  path: "/continuidade-corporal",
});

export default function ContinuidadeCorporalPage() {
  return (
    <>
      <HeroSection
        eyebrow="Continuidade corporal"
        title="Corpo não responde bem à lógica de sessão solta."
        description="Continuidade corporal faz sentido quando existe plano, leitura de resposta e constância. Aqui, o cuidado deixa de ser uma soma de sessões e passa a funcionar como uma jornada com avaliação, manutenção e próxima etapa definida."
        primary={{ label: "Falar no WhatsApp", href: "/agendamento" }}
        secondary={{ label: "Ler FAQ", href: "/faq" }}
        panelLabel="Continuidade corporal"
        panelTitle="Menos sessão solta. Mais plano, constância e leitura."
        image="/generated/stitch/stitch-continuity-1.jpg"
        tone="dark"
        list={[
          "Plano acima do impulso",
          "Constância acima do espetáculo",
          "Rebook como parte do cuidado",
          "Próximo passo como experiência",
        ]}
      />

      <TrustStrip
        items={[
          { title: "Plano acima de sessão", body: "Continuidade corporal pede lógica de jornada, não compra fragmentada." },
          { title: "Previsibilidade acima de improviso", body: "Quando a paciente entende a próxima etapa, o cuidado ganha consistência." },
          { title: "Valor acima de pressão", body: "Mais clareza, menos urgência artificial e menos venda empurrada no impulso." },
        ]}
      />

      <EditorialFeatureSection
        eyebrow="Por que esta linha existe"
        title="Resultado corporal consistente raramente nasce de uma única sessão bem vendida."
        body="Cuidado corporal consistente pede leitura de objetivo, frequência possível e resposta do corpo ao longo do tempo. Por isso a clínica trata continuidade como plano — e não como impulso."
        calloutTitle="Direção desta página"
        calloutBody="Apresentar cuidado corporal como plano de evolução, e não como coleção de sessões soltas."
      />

      <TripleArticleSection
        eyebrow="Três princípios da continuidade corporal"
        title="O que esta página precisa deixar óbvio para a paciente."
        muted
        items={[
          { title: "Começa entendendo o objetivo", body: "Antes de qualquer proposta, a clínica precisa ler o momento, a expectativa e o nível de constância possível." },
          { title: "Segue com plano e leitura de resposta", body: "A continuidade só faz sentido quando a paciente entende por que está seguindo e o que vem depois." },
          { title: "Termina sempre em próxima ação", body: "Rebook, revisão e manutenção fazem parte do valor percebido da experiência." },
        ]}
      />

      <SplitSection
        eyebrow="Para quem esta linha faz sentido"
        title="Para pacientes que querem previsibilidade, constância e mais honestidade no processo."
        items={[
          { title: "Quem cansou de tentar pedaços desconectados", body: "A página foi escrita para quem sente que o cuidado corporal nunca ganha continuidade real." },
          { title: "Quem precisa de um plano que caiba na vida real", body: "Organizar frequência, manutenção e expectativa reduz frustração e aumenta percepção de valor." },
          { title: "Quem prefere método a espetáculo", body: "Mais verdade, menos sedução vazia. Esse é um dos filtros centrais desta linha de cuidado." },
        ]}
      />

      <FaqSection
        eyebrow="FAQ"
        title="Objeções comuns na continuidade corporal."
        items={[
          { title: "Vocês trabalham com sessão avulsa?", body: "A clínica pode começar por uma avaliação, mas a lógica mais forte aqui é plano com continuidade e próxima etapa definida." },
          { title: "Como saber se essa linha faz sentido para mim?", body: "O primeiro passo é entender seu objetivo, seu momento e sua disponibilidade real para manter o processo." },
          { title: "O resultado depende só do procedimento?", body: "Não. Constância, leitura correta e acompanhamento pesam mais do que espetáculo na venda." },
        ]}
      />

      <CtaPanel
        eyebrow="Próximo passo"
        title="Se você busca continuidade, comece por clareza."
        body="Falar com a clínica no WhatsApp é a forma mais segura de entender se o seu caso pede entrada, ajuste ou manutenção."
        highlight="Jornada corporal"
        detail="Estética corporal com continuidade"
        primary={{ label: "Quero falar sobre meu caso", href: "/agendamento" }}
        secondary={{ label: "Ver perguntas frequentes", href: "/faq" }}
      />
    </>
  );
}
