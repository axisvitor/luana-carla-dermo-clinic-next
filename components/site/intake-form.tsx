"use client";

import { useMemo, useState } from "react";

const inputClass =
  "w-full rounded-2xl border border-black/10 bg-white/80 px-4 py-4 text-[0.98rem] leading-6 text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] outline-none transition duration-200 placeholder:text-ink-faint focus:border-accent-deep/30 focus:bg-white";

const buttonClass =
  "inline-flex items-center justify-center gap-2 rounded-[14px] border border-white/10 bg-[linear-gradient(180deg,var(--accent-deep),#0c4d50)] px-5 py-4 text-[0.76rem] font-bold uppercase tracking-[0.15em] text-white shadow-[0_16px_36px_rgba(15,95,99,0.18)] transition duration-200 hover:-translate-y-0.5";

const secondaryButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-[14px] border border-accent-deep/20 bg-white/70 px-5 py-4 text-[0.76rem] font-bold uppercase tracking-[0.15em] text-accent-deep transition duration-200 hover:border-accent-deep/35 hover:bg-white";

export function IntakeForm() {
  const [form, setForm] = useState({
    nome: "",
    trilha: "Primeiro contato",
    momento: "",
    objetivo: "",
    horario: "Manhã",
  });
  const [copyLabel, setCopyLabel] = useState("Copiar mensagem");

  const message = useMemo(() => {
    const nome = form.nome || "Olá";
    const momento = form.momento || "Quero explicar melhor meu momento atual.";
    const objetivo = form.objetivo || "Gostaria de entender o melhor próximo passo para o meu caso.";

    return [
      `Olá! Meu nome é ${nome}.`,
      `Tenho interesse em: ${form.trilha}.`,
      `Meu momento hoje: ${momento}.`,
      `O que eu gostaria de entender primeiro: ${objetivo}.`,
      `Meu melhor período para contato é: ${form.horario}.`,
      "Vi o site da Luana Carla Dermo Clinic e gostaria de iniciar a conversa pelo WhatsApp com mais clareza.",
    ].join("\n");
  }, [form]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(message);
      setCopyLabel("Mensagem copiada");
    } catch {
      setCopyLabel("Copie manualmente");
    }

    window.setTimeout(() => setCopyLabel("Copiar mensagem"), 1800);
  }

  return (
    <section className="grid grid-cols-1 gap-6 px-5 py-14 md:px-8 md:py-20 xl:grid-cols-12 xl:gap-8 2xl:px-[60px]">
      <div className="xl:col-span-12">
        <div className="relative mb-8 border-t border-line pt-6">
          <p className="inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.17em] text-accent-deep before:h-px before:w-8 before:bg-[linear-gradient(90deg,var(--champagne),rgba(15,95,99,0.35))] before:content-['']">
            Preparar mensagem
          </p>
          <h2 className="mt-4 max-w-[13ch] font-display text-balance text-[clamp(2.25rem,6vw,4.1rem)] leading-[0.97] tracking-[-0.045em] text-ink">
            Organize o primeiro contato antes de chamar a equipe.
          </h2>
        </div>
      </div>

      <div className="xl:col-span-7 rounded-[30px] border border-black/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(248,244,238,0.82))] p-6 shadow-[0_18px_44px_rgba(16,24,24,0.05)] md:p-7">
        <form className="grid gap-5" onSubmit={(event) => event.preventDefault()}>
          <label className="grid gap-2">
            <span className="text-[0.74rem] font-bold uppercase tracking-[0.14em] text-ink">Seu nome</span>
            <input
              className={inputClass}
              value={form.nome}
              onChange={(event) => setForm((current) => ({ ...current, nome: event.target.value }))}
              placeholder="Como você prefere ser chamada?"
              autoComplete="name"
              name="nome"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-[0.74rem] font-bold uppercase tracking-[0.14em] text-ink">Trilha</span>
            <select
              className={inputClass}
              value={form.trilha}
              onChange={(event) => setForm((current) => ({ ...current, trilha: event.target.value }))}
              name="trilha"
            >
              <option>Primeiro contato</option>
              <option>Pós-operatório assistido</option>
              <option>Estética corporal com continuidade</option>
              <option>Depilação a laser</option>
              <option>Cursos</option>
            </select>
          </label>

          <label className="grid gap-2">
            <span className="text-[0.74rem] font-bold uppercase tracking-[0.14em] text-ink">Seu momento hoje</span>
            <textarea
              className={inputClass}
              value={form.momento}
              onChange={(event) => setForm((current) => ({ ...current, momento: event.target.value }))}
              placeholder="Conte em poucas linhas o que está acontecendo agora."
              rows={5}
              name="momento"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-[0.74rem] font-bold uppercase tracking-[0.14em] text-ink">O que você quer entender primeiro</span>
            <textarea
              className={inputClass}
              value={form.objetivo}
              onChange={(event) => setForm((current) => ({ ...current, objetivo: event.target.value }))}
              placeholder="Ex.: quero saber qual entrada faz mais sentido para o meu caso."
              rows={4}
              name="objetivo"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-[0.74rem] font-bold uppercase tracking-[0.14em] text-ink">Melhor período para contato</span>
            <select
              className={inputClass}
              value={form.horario}
              onChange={(event) => setForm((current) => ({ ...current, horario: event.target.value }))}
              name="horario"
            >
              <option>Manhã</option>
              <option>Tarde</option>
              <option>Noite</option>
              <option>Horário comercial</option>
            </select>
          </label>
        </form>
      </div>

      <div className="xl:col-span-5 rounded-[30px] border border-black/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(248,244,238,0.82))] p-6 shadow-[0_18px_44px_rgba(16,24,24,0.05)] md:p-7">
        <p className="inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.17em] text-accent-deep before:h-px before:w-8 before:bg-[linear-gradient(90deg,var(--champagne),rgba(15,95,99,0.35))] before:content-['']">
          Mensagem pronta
        </p>
        <h3 className="mt-4 font-display text-balance text-[clamp(1.72rem,4vw,2.7rem)] leading-[0.99] tracking-[-0.04em] text-ink">
          Copie, ajuste se quiser e envie para a equipe.
        </h3>
        <p className="mt-4 text-pretty text-[0.98rem] leading-7 text-ink-soft md:text-[1rem] md:leading-8">
          Assim a clínica recebe um contexto melhor logo no início e consegue responder com mais clareza.
        </p>

        <textarea
          readOnly
          value={message}
          className="mt-5 min-h-[220px] w-full rounded-2xl border border-black/10 bg-white/80 px-4 py-4 text-[0.98rem] leading-7 text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] outline-none md:text-[1rem] md:leading-8"
        />

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <button type="button" className={buttonClass} onClick={handleCopy}>
            {copyLabel}
          </button>
          <a href="/contato" className={secondaryButtonClass}>
            Ver canais atuais
          </a>
        </div>
      </div>
    </section>
  );
}
