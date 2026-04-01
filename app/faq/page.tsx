import { FaqIntroHub } from "@/components/site/archetypes";
import { CtaPanel, FaqSection } from "@/components/site/sections";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Perguntas frequentes",
  description:
    "Respostas claras para dúvidas comuns antes do primeiro contato com a clínica.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <FaqIntroHub
        eyebrow="Perguntas frequentes"
        title="As dúvidas mais comuns, organizadas por assunto."
        description="O FAQ foi separado por assunto para ficar mais fácil entender o que você precisa agora: contato, pós-operatório, continuidade corporal ou depilação a laser."
        primary={{ label: "Ver primeiro contato", href: "/agendamento" }}
        secondary={{ label: "Ver contato", href: "/contato" }}
        topics={[
          {
            label: "Contato",
            title: "Primeiro contato e marcação",
            body: "Como a conversa começa, como a equipe conduz a agenda e o que o site não faz sozinho.",
            href: "#faq-contato",
          },
          {
            label: "Pós-operatório",
            title: "Recuperação e acompanhamento local",
            body: "Dúvidas sobre continuidade em Canaã, fase da recuperação e leitura do caso.",
            href: "#faq-pos",
          },
          {
            label: "Continuidade",
            title: "Plano, constância e acompanhamento",
            body: "Perguntas sobre continuidade corporal e como essa linha funciona ao longo do tempo.",
            href: "#faq-continuidade",
          },
          {
            label: "Laser",
            title: "Depilação a laser como porta de entrada",
            body: "Perguntas sobre o primeiro contato, a agenda e a lógica desse atendimento dentro da clínica.",
            href: "#faq-laser",
          },
        ]}
      />

      <div id="faq-contato">
        <FaqSection
          featured
          eyebrow="FAQ • contato"
          title="Primeiro contato e marcação"
          description="O que costuma gerar mais dúvida antes de falar com a equipe pela primeira vez."
          items={[
            {
              title: "Preciso preencher formulário antes de falar com a clínica?",
              body: "Não. O primeiro contato é direto com a equipe pelo WhatsApp oficial.",
            },
            {
              title: "O agendamento acontece sozinho pelo site?",
              body: "Não. Quando faz sentido seguir, a marcação é conduzida pela própria clínica dentro da conversa com a equipe.",
            },
            {
              title: "Posso chamar mesmo sem saber qual atendimento preciso?",
              body: "Sim. A conversa inicial existe justamente para ajudar a entender qual frente faz mais sentido para o seu momento.",
            },
            {
              title: "O Instagram substitui o primeiro contato?",
              body: "Não. O Instagram ajuda a acompanhar a marca. A conversa de entrada e a marcação acontecem com a equipe.",
            },
          ]}
        />
      </div>

      <div id="faq-pos">
        <FaqSection
          featured
          eyebrow="FAQ • pós-operatório"
          title="Recuperação e acompanhamento local"
          description="Perguntas frequentes de quem está em uma fase sensível e quer mais clareza sobre o próximo passo."
          items={[
            {
              title: "Vocês atendem pós-operatório de quem operou em outra cidade?",
              body: "Sim. Esse é um dos contextos em que a clínica pode oferecer continuidade local em Canaã dos Carajás.",
            },
            {
              title: "O primeiro contato já define todo o acompanhamento?",
              body: "Não. A prioridade inicial é entender a fase da recuperação e orientar o melhor próximo passo a partir desse momento do corpo.",
            },
            {
              title: "Existe acompanhamento além da sessão?",
              body: "Quando o caso pede continuidade, a clínica organiza retorno, reavaliação e orientação entre etapas.",
            },
            {
              title: "Isso substitui o acompanhamento do cirurgião?",
              body: "Não. A clínica atua como apoio local dentro do escopo do atendimento, e a paciente deve manter o contato com o profissional responsável pela cirurgia quando necessário.",
            },
          ]}
        />
      </div>

      <div id="faq-continuidade">
        <FaqSection
          featured
          eyebrow="FAQ • continuidade"
          title="Plano, constância e acompanhamento"
          description="O que costuma aparecer quando a paciente quer sair de decisões avulsas e construir um cuidado mais organizado."
          items={[
            {
              title: "Continuidade corporal significa um plano fixo para todo mundo?",
              body: "Não. A lógica é entender objetivo, momento do corpo e ritmo possível para construir um plano que faça sentido para a vida real da paciente.",
            },
            {
              title: "Preciso saber exatamente o que quero fazer antes de falar com a clínica?",
              body: "Não. A equipe ajuda a orientar o melhor caminho a partir da sua necessidade principal e da constância que você consegue sustentar hoje.",
            },
            {
              title: "A proposta inclui acompanhamento ao longo do processo?",
              body: "Sim. Revisão, manutenção e próximos passos fazem parte da lógica dessa linha quando existe continuidade.",
            },
            {
              title: "A clínica trabalha só com sessão avulsa?",
              body: "Pode haver início por avaliação, mas a força dessa frente está em organizar um cuidado que não fique fragmentado.",
            },
          ]}
        />
      </div>

      <div id="faq-laser">
        <FaqSection
          featured
          eyebrow="FAQ • depilação a laser"
          title="Laser como porta de entrada"
          description="Respostas rápidas para quem quer começar por essa frente e entender como o atendimento se organiza."
          items={[
            {
              title: "Posso começar meu contato com a clínica pela depilação a laser?",
              body: "Sim. Para muitas pacientes, essa é uma forma leve de conhecer a clínica e iniciar a conversa com a equipe.",
            },
            {
              title: "Como funciona a primeira conversa?",
              body: "Você explica sua dúvida ou área de interesse pelo WhatsApp, e a equipe orienta a melhor forma de seguir.",
            },
            {
              title: "O que acontece depois da primeira conversa?",
              body: "A equipe responde dúvidas iniciais, alinha expectativa e organiza com você o melhor próximo passo antes da marcação.",
            },
            {
              title: "A agenda é automática pelo site?",
              body: "Não. O contato e a organização da agenda são conduzidos pela equipe da clínica.",
            },
          ]}
        />
      </div>

      <CtaPanel
        eyebrow="Se a sua dúvida não apareceu aqui"
        title="A equipe pode orientar seu primeiro passo com base no seu momento atual."
        body="No WhatsApp, a clínica ajuda a entender qual caminho faz mais sentido para você agora, sem formulário e sem etapas desnecessárias."
        highlight="Próximo passo"
        detail="Perguntas reais • orientação • clareza"
        primary={{ label: "Ver primeiro contato", href: "/agendamento" }}
        secondary={{ label: "Ver canais de contato", href: "/contato" }}
      />
    </>
  );
}
