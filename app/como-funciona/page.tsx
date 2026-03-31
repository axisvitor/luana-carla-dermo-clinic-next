import {
  CtaPanel,
  HeroSection,
  ProcessSection,
  SplitSection,
  TripleArticleSection,
  TrustStrip,
} from "@/components/site/sections";
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
      <HeroSection
        eyebrow="Como funciona"
        title="Do primeiro WhatsApp ao atendimento, tudo começa entendendo o seu momento."
        description="A clínica organiza o cuidado de forma simples: ouvir a necessidade principal, orientar o melhor caminho e conduzir o atendimento com mais clareza."
        primary={{ label: "Ver primeiro contato", href: "/agendamento" }}
        secondary={{ label: "Ir para contato", href: "/contato" }}
        panelLabel="Como o atendimento se organiza"
        panelTitle="Entender, orientar e acompanhar fazem parte da mesma experiência."
        image="/generated/stitch/stitch-post-op-3.jpg"
        tone="light"
        points={[
          { badge: "1", title: "Entender", body: "Ouvir sua necessidade principal e o momento do corpo." },
          { badge: "2", title: "Orientar", body: "Indicar o melhor caminho com clareza e sem pressa." },
          { badge: "3", title: "Acompanhar", body: "Organizar o atendimento e as próximas etapas quando necessário." },
        ]}
        quote="Quando o primeiro passo fica claro, o restante do processo também fica mais leve."
      />

      <TrustStrip
        items={[
          { title: "Escuta do seu momento", body: "O atendimento começa entendendo o que você precisa agora, e não partindo de uma resposta automática." },
          { title: "Orientação do melhor caminho", body: "A equipe ajuda a indicar se o seu caso se conecta ao pós-operatório, à continuidade corporal ou ao laser." },
          { title: "Continuidade quando necessário", body: "Quando o caso pede acompanhamento, os próximos passos são organizados com mais clareza." },
        ]}
      />

      <ProcessSection
        eyebrow="A jornada"
        title="O caminho costuma seguir esta sequência."
        items={[
          { title: "Primeiro contato pelo WhatsApp", body: "Você explica sua necessidade principal, sua dúvida ou o momento em que está." },
          { title: "Entendimento do seu caso", body: "A equipe lê o contexto inicial e ajuda a identificar qual frente de atendimento faz mais sentido." },
          { title: "Orientação e marcação com a equipe", body: "O agendamento não acontece sozinho no site. Ele é conduzido pela clínica conforme o caso." },
          { title: "Atendimento e próximos passos", body: "Depois do atendimento, a clínica orienta o que observar, quando retornar e como seguir, se houver continuidade." },
        ]}
      />

      <TripleArticleSection
        eyebrow="O que essa forma de atendimento evita"
        title="Menos pressa, menos confusão e mais clareza ao longo do caminho."
        muted
        items={[
          { title: "Entrar sem contexto", body: "Quando a conversa começa com mais informação, fica mais fácil orientar o melhor próximo passo." },
          { title: "Marcar sem orientação", body: "A clínica prefere conduzir a marcação junto com a paciente, em vez de tratar tudo como agenda automática." },
          { title: "Sair sem saber o que vem depois", body: "Quando existe continuidade, a paciente entende melhor como seguir e o que esperar das próximas etapas." },
        ]}
      />

      <SplitSection
        eyebrow="Por que isso faz diferença"
        title="Porque acolher bem também é ajudar a paciente a entender o que vem agora."
        items={[
          { title: "Mais tranquilidade", body: "Quando a entrada é clara, a paciente chega ao atendimento com menos insegurança." },
          { title: "Mais coerência", body: "A forma de receber precisa combinar com o cuidado que a clínica promete entregar." },
          { title: "Mais percepção de cuidado", body: "Orientação, organização e acompanhamento fazem a experiência parecer mais sólida do começo ao fim." },
        ]}
      />

      <CtaPanel
        eyebrow="Próximo passo"
        title="Se você quer entender qual caminho faz mais sentido para o seu caso, comece pela conversa."
        body="No WhatsApp, a equipe ajuda a organizar a entrada e orientar o melhor próximo passo para o seu momento, sem uso de formulários."
        highlight="Entrada organizada"
        detail="Primeiro contato • orientação • continuidade"
        primary={{ label: "Ver primeiro contato", href: "/agendamento" }}
        secondary={{ label: "Ver contato", href: "/contato" }}
      />
    </>
  );
}
