import {
  CtaPanel,
  FaqSection,
  HeroSection,
  ProcessSection,
  TrustStrip,
  TripleArticleSection,
} from "@/components/site/sections";
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
      <HeroSection
        eyebrow="Primeiro contato e WhatsApp"
        title="O primeiro contato é direto com a equipe pelo WhatsApp."
        mobileTitle="O primeiro contato é direto com a equipe."
        description="A clínica não trabalha com formulários. O caminho é simples: você fala com a equipe pelo WhatsApp oficial, explica brevemente seu momento e recebe orientação sobre o melhor próximo passo."
        primary={{ label: "Ver contato oficial", href: "/contato" }}
        secondary={{ label: "Como funciona", href: "/como-funciona" }}
        panelLabel="Primeiro contato"
        panelTitle="Explique seu caso em poucas linhas e a equipe conduz a conversa."
        mobilePanelTitle="Explique seu caso e a equipe conduz a conversa."
        image="/generated/whatsapp-contact-v2.jpg"
        tone="light"
        points={[
          { badge: "1", title: "Envie uma mensagem", body: "Diga em poucas linhas qual é sua necessidade ou dúvida principal." },
          { badge: "2", title: "A equipe orienta", body: "A clínica ajuda a entender qual frente de atendimento faz mais sentido." },
          { badge: "3", title: "A marcação é conduzida pela clínica", body: "Quando fizer sentido seguir, a equipe organiza o próximo passo com você." },
        ]}
      />

      <TrustStrip
        items={[
          { title: "Sem formulário", body: "O contato não começa com preenchimento de campos. Ele começa com conversa direta com a equipe." },
          { title: "WhatsApp oficial", body: "É por ali que a clínica recebe o primeiro contato e conduz a orientação inicial." },
          { title: "Atendimento com hora marcada", body: "Quando o caso segue adiante, a marcação é organizada pela própria clínica." },
        ]}
      />

      <ProcessSection
        eyebrow="Como esse começo acontece"
        title="O primeiro contato costuma seguir esta sequência."
        items={[
          { title: "Você envia sua mensagem", body: "Pode explicar se seu interesse é pós-operatório, continuidade corporal, depilação a laser ou cursos." },
          { title: "A equipe entende o contexto", body: "A clínica lê sua necessidade principal e orienta o melhor caminho para o seu momento." },
          { title: "As dúvidas iniciais são esclarecidas", body: "Quando necessário, a equipe ajuda a alinhar o que faz sentido agora antes de qualquer marcação." },
          { title: "O próximo passo é combinado com você", body: "Se houver continuidade, avaliação ou atendimento, a clínica organiza isso diretamente pela conversa." },
        ]}
      />

      <TripleArticleSection
        eyebrow="O que vale informar já na primeira mensagem"
        title="Três formas simples de ajudar a equipe a te orientar melhor."
        muted
        items={[
          { title: "Se for pós-operatório", body: "Diga em que fase da recuperação você está, se operou em outra cidade e qual é sua principal necessidade agora." },
          { title: "Se for continuidade corporal ou laser", body: "Explique qual é seu interesse principal e quais dúvidas você quer esclarecer primeiro." },
          { title: "Se for curso", body: "Avise logo no início que seu interesse é formação profissional para a equipe conduzir a conversa pelo caminho certo." },
        ]}
      />

      <FaqSection
        eyebrow="FAQ"
        title="Dúvidas comuns sobre o primeiro contato."
        items={[
          { title: "Preciso preencher algum formulário?", body: "Não. A clínica não trabalha com formulários para o primeiro contato." },
          { title: "Posso explicar meu caso direto pelo WhatsApp?", body: "Sim. Esse é o canal usado para a conversa inicial com a equipe." },
          { title: "O agendamento acontece sozinho pelo site?", body: "Não. Quando fizer sentido seguir, a marcação é conduzida pela clínica." },
          { title: "Se eu tiver dúvida e ainda não souber qual atendimento preciso, posso chamar mesmo assim?", body: "Sim. Você pode explicar seu momento e a equipe ajuda a orientar o melhor caminho." },
        ]}
      />

      <CtaPanel
        eyebrow="Próximo passo"
        title="Se quiser falar com a clínica, siga para o contato oficial."
        body="Use o contato oficial da página de contato e comece a conversa com a equipe de forma simples, sem formulários e sem etapas desnecessárias."
        highlight="Primeiro contato"
        detail="WhatsApp oficial • equipe da clínica"
        primary={{ label: "Ver contato", href: "/contato" }}
        secondary={{ label: "Voltar para início", href: "/" }}
      />
    </>
  );
}
