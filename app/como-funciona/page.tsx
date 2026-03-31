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
    "Entenda como a clínica organiza a entrada, a condução e a continuidade do cuidado corporal com mais clareza e menos improviso.",
  path: "/como-funciona",
});

export default function ComoFuncionaPage() {
  return (
    <>
      <HeroSection
        eyebrow="Como funciona"
        title="Mais clareza na entrada, na condução e no que vem depois."
        description="Na clínica, a confiança não nasce só do procedimento. Ela começa na forma como cada paciente entra, é orientada e segue acompanhada depois."
        primary={{ label: "Falar no WhatsApp", href: "/agendamento" }}
        secondary={{ label: "Ir para contato", href: "/contato" }}
        panelLabel="Como este cuidado se organiza"
        panelTitle="Entender, conduzir e continuar fazem parte da mesma experiência."
        image="/generated/stitch/stitch-post-op-3.jpg"
        tone="light"
        points={[
          { badge: "1", title: "Entender", body: "Ler o momento, a urgência e o contexto do caso." },
          { badge: "2", title: "Conduzir", body: "Orientar com critério, sem prometer cedo demais." },
          { badge: "3", title: "Continuar", body: "Sustentar a jornada com mais clareza entre etapas." },
        ]}
        quote="A maioria das clínicas vende procedimento cedo demais e direção de menos."
      />

      <TrustStrip
        items={[
          { title: "Entender", body: "Começar pela fase, pela urgência e pelo contexto de cada paciente." },
          { title: "Conduzir", body: "Explicar o que faz sentido agora com verdade, sem pressão vazia." },
          { title: "Continuar", body: "Garantir que o cuidado não termine sem uma próxima ação definida." },
        ]}
      />

      <ProcessSection
        eyebrow="A jornada"
        title="Do primeiro contato ao próximo passo, a lógica é sempre a mesma."
        items={[
          { title: "Entrada com contexto", body: "A conversa começa pela necessidade real da paciente, não pela pressão para fechar um procedimento." },
          { title: "Avaliação com leitura", body: "O caso é entendido a partir da fase do corpo, da sensibilidade do momento e da expectativa realista." },
          { title: "Plano com direção", body: "A paciente entende o que começa agora, o que acompanha depois e qual será a próxima etapa." },
          { title: "Continuidade e retorno", body: "Rebook, revisão, follow-up e organização de agenda reforçam o valor percebido da experiência." },
        ]}
      />

      <TripleArticleSection
        eyebrow="O que essa lógica evita"
        title="Menos improviso na operação. Menos ruído na percepção da paciente."
        muted
        items={[
          { title: "Sessão sem contexto", body: "Quando falta leitura do caso, o atendimento perde coerência e a paciente perde confiança." },
          { title: "Venda sem direção", body: "Cuidado corporal não deveria começar com urgência artificial ou promessa ampla demais." },
          { title: "Experiência que termina cedo", body: "A clínica trabalha para que toda conversa termine com mais clareza sobre o próximo passo." },
        ]}
      />

      <SplitSection
        eyebrow="Por que isso importa"
        title="Porque método também é uma forma de acolher."
        items={[
          { title: "Mais segurança", body: "Uma paciente bem orientada se sente menos perdida e mais amparada." },
          { title: "Mais coerência", body: "A forma de receber precisa conversar com a promessa da marca e com a experiência real da clínica." },
          { title: "Mais percepção de valor", body: "Quando a jornada é clara, o cuidado parece mais sólido e menos improvisado." },
        ]}
      />

      <CtaPanel
        eyebrow="Próximo passo"
        title="Se você quer entender o caminho certo para o seu caso, comece pela conversa."
        body="A equipe da clínica conduz o primeiro contato no WhatsApp e ajuda a direcionar a entrada mais coerente para o seu momento."
        highlight="Entrada organizada"
        detail="Triagem • Avaliação • Continuidade"
        primary={{ label: "Preparar mensagem", href: "/agendamento" }}
        secondary={{ label: "Ver contato", href: "/contato" }}
      />
    </>
  );
}
