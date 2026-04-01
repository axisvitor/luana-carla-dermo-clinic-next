import { FaqIntroHub } from "@/components/site/archetypes";
import { CtaPanel, FaqSection } from "@/components/site/sections";
import { createPageMetadata, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Perguntas Frequentes | FAQ Luana Carla Dermo Clinic",
  description:
    "FAQ da Luana Carla Dermo Clinic: respostas claras sobre pós-operatório, continuidade corporal, depilação a laser e agendamento em Canaã dos Carajás.",
  path: "/faq",
});

// FAQ data for schema generation
const faqData = {
  contato: [
    {
      question: "Preciso preencher formulario antes de falar com a clinica?",
      answer: "Nao. O primeiro contato e direto com a equipe pelo WhatsApp oficial.",
    },
    {
      question: "O agendamento acontece sozinho pelo site?",
      answer: "Nao. Quando faz sentido seguir, a marcacao e conduzida pela propria clinica dentro da conversa com a equipe.",
    },
    {
      question: "Posso chamar mesmo sem saber qual atendimento preciso?",
      answer: "Sim. A conversa inicial existe justamente para ajudar a entender qual frente faz mais sentido para o seu momento.",
    },
    {
      question: "O Instagram substitui o primeiro contato?",
      answer: "Nao. O Instagram ajuda a acompanhar a marca. A conversa de entrada e a marcacao acontecem com a equipe.",
    },
  ],
  pos: [
    {
      question: "Voces atendem pos-operatorio de quem operou em outra cidade?",
      answer: "Sim. Esse e um dos contextos em que a clinica pode oferecer continuidade local em Canaa dos Carajas.",
    },
    {
      question: "O primeiro contato ja define todo o acompanhamento?",
      answer: "Nao. A prioridade inicial e entender a fase da recuperacao e orientar o melhor proximo passo a partir desse momento do corpo.",
    },
    {
      question: "Existe acompanhamento alem da sessao?",
      answer: "Quando o caso pede continuidade, a clinica organiza retorno, reavaliacao e orientacao entre etapas.",
    },
    {
      question: "Isso substitui o acompanhamento do cirurgiao?",
      answer: "Nao. A clinica atua como apoio local dentro do escopo do atendimento, e a paciente deve manter o contato com o profissional responsavel pela cirurgia quando necessario.",
    },
  ],
  continuidade: [
    {
      question: "Continuidade corporal significa um plano fixo para todo mundo?",
      answer: "Nao. A logica e entender objetivo, momento do corpo e ritmo possivel para construir um plano que faca sentido para a vida real da paciente.",
    },
    {
      question: "Preciso saber exatamente o que quero fazer antes de falar com a clinica?",
      answer: "Nao. A equipe ajuda a orientar o melhor caminho a partir da sua necessidade principal e da constancia que voce consegue sustentar hoje.",
    },
    {
      question: "A proposta inclui acompanhamento ao longo do processo?",
      answer: "Sim. Revisao, manutencao e proximos passos fazem parte da logica dessa linha quando existe continuidade.",
    },
    {
      question: "A clinica trabalha so com sessao avulsa?",
      answer: "Pode haver inicio por avaliacao, mas a forca dessa frente esta em organizar um cuidado que nao fique fragmentado.",
    },
  ],
  laser: [
    {
      question: "Posso comecar meu contato com a clinica pela depilacao a laser?",
      answer: "Sim. Para muitas pacientes, essa e uma forma leve de conhecer a clinica e iniciar a conversa com a equipe.",
    },
    {
      question: "Como funciona a primeira conversa?",
      answer: "Voce explica sua duvida ou area de interesse pelo WhatsApp, e a equipe orienta a melhor forma de seguir.",
    },
    {
      question: "O que acontece depois da primeira conversa?",
      answer: "A equipe responde duvidas iniciais, alinha expectativa e organiza com voce o melhor proximo passo antes da marcacao.",
    },
    {
      question: "A agenda e automatica pelo site?",
      answer: "Nao. O contato e a organizacao da agenda sao conduzidos pela equipe da clinica.",
    },
  ],
};

// Generate FAQPage schema
const allFaqs = [...faqData.contato, ...faqData.pos, ...faqData.continuidade, ...faqData.laser];
const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
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
        body="No WhatsApp, a clinica ajuda a entender qual caminho faz mais sentido para voce agora, sem formulario e sem etapas desnecessarias."
        highlight="Próximo passo"
        detail="Perguntas reais • orientação • clareza"
        primary={{ label: "Ver primeiro contato", href: "/agendamento" }}
        secondary={{ label: "Ver canais de contato", href: "/contato" }}
      />
    </>
  );
}
