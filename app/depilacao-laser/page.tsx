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
    "Uma porta de entrada mais organizada para quem quer começar com clareza, sem cair na lógica de commodity da categoria.",
  path: "/depilacao-laser",
});

export default function DepilacaoLaserPage() {
  return (
    <>
      <HeroSection
        eyebrow="Depilação a laser"
        title="Uma entrada mais clara, sem cara de commodity."
        description="Na clínica, a depilação a laser funciona como uma entrada organizada para quem quer começar com clareza. Em vez de cair na guerra de preço, o foco aqui é alinhar expectativa, agenda e experiência desde o primeiro contato."
        primary={{ label: "Falar no WhatsApp", href: "/agendamento" }}
        secondary={{ label: "Ver contato", href: "/contato" }}
        panelLabel="Depilação a laser"
        panelTitle="Uma entrada mais organizada para quem quer começar com clareza."
        image="/generated/service-atmosphere.png"
        tone="light"
        list={[
          "Avaliação antes da promessa",
          "Gestão de agenda importa",
          "Experiência alinhada à marca",
          "Entrada conectada à jornada",
        ]}
      />

      <TrustStrip
        items={[
          { title: "Entrada organizada", body: "Depilação é importante, mas não deve distorcer o centro da identidade da clínica." },
          { title: "Comunicação realista", body: "Menos promessa genérica. Mais avaliação, alinhamento e gestão de agenda." },
          { title: "Experiência coerente", body: "A porta de entrada precisa refletir o cuidado maior que a clínica quer sustentar." },
        ]}
      />

      <EditorialFeatureSection
        eyebrow="Por que esta página existe"
        title="Uma linha importante, mas comunicada com mais verdade e menos cara de commodity."
        body="Franquias de laser competem por preço, escala e repetição. Esta página segue outro caminho: apresentar a depilação a laser como entrada organizada, com mais coerência, mais contexto e uma experiência que já reflita o cuidado maior da clínica."
        calloutTitle="Como tratamos esta linha"
        calloutBody="Laser como porta de entrada relevante, com avaliação, agenda bem conduzida e experiência alinhada ao restante da marca."
      />

      <TripleArticleSection
        eyebrow="O que esta página precisa transmitir"
        title="Uma entrada clara para quem quer começar sem cair em guerra de preço."
        muted
        items={[
          { title: "Avaliação antes da promessa", body: "O site não deve falar como se todas as pessoas fossem iguais. A entrada certa começa com leitura e expectativa realista." },
          { title: "Agenda bem conduzida", body: "Como linha gateway, o laser precisa de organização de horários, confirmação e continuidade de experiência." },
          { title: "Conexão com a clínica inteira", body: "Mesmo quando a paciente entra pelo laser, ela deve sentir organização, clareza e um cuidado acima da média local." },
        ]}
      />

      <FaqSection
        eyebrow="FAQ"
        title="Perguntas frequentes sobre depilação a laser."
        items={[
          { title: "Essa página tenta competir com franquias?", body: "Não. A proposta aqui é comunicar experiência organizada, avaliação e coerência com o restante da marca." },
          { title: "Laser é o serviço principal da clínica?", body: "Não. Ele é importante como porta de entrada, mas o centro da identidade da clínica é o pós-operatório assistido." },
          { title: "Por que a avaliação importa tanto?", body: "Porque a clínica quer sair da lógica de commodity e mostrar mais critério desde a entrada." },
        ]}
      />

      <CtaPanel
        eyebrow="Próximo passo"
        title="Se a sua entrada é pelo laser, comece por uma experiência mais clara."
        body="Esta página ajuda a organizar a percepção de valor do serviço sem transformar preço na principal razão para escolher a clínica."
        highlight="Porta de entrada"
        detail="Depilação a laser"
        primary={{ label: "Quero falar com a clínica", href: "/agendamento" }}
        secondary={{ label: "Ver canais de contato", href: "/contato" }}
      />
    </>
  );
}
