import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid grid-cols-1 gap-6 px-5 py-24 md:px-8 xl:grid-cols-12 2xl:px-[60px]">
      <div className="xl:col-span-7">
        <p className="inline-flex items-center gap-3 text-[0.75rem] font-extrabold uppercase tracking-[0.18em] text-accent-deep before:h-px before:w-8 before:bg-[linear-gradient(90deg,var(--champagne),rgba(15,95,99,0.35))] before:content-['']">
          Página não encontrada
        </p>
        <h1 className="mt-5 max-w-[10ch] font-display text-[clamp(3.2rem,6vw,5.4rem)] leading-[0.92] tracking-[-0.06em] text-ink">
          Talvez o melhor próximo passo seja voltar para um caminho mais claro.
        </h1>
        <p className="mt-6 max-w-[60ch] text-[1.02rem] leading-8 text-ink-soft">
          A página que você tentou acessar não está mais aqui ou mudou de endereço.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="inline-flex items-center justify-center gap-2 rounded-[14px] border border-white/10 bg-[linear-gradient(180deg,var(--accent-deep),#0c4d50)] px-6 py-4 text-[0.78rem] font-extrabold uppercase tracking-[0.16em] text-white shadow-[0_16px_36px_rgba(15,95,99,0.18)] transition duration-200 hover:-translate-y-0.5">
            Voltar para início
            <span aria-hidden>→</span>
          </Link>
          <Link href="/agendamento" className="inline-flex items-center justify-center gap-2 rounded-[14px] border border-accent-deep/20 bg-white/70 px-6 py-4 text-[0.78rem] font-extrabold uppercase tracking-[0.16em] text-accent-deep transition duration-200 hover:border-accent-deep/35 hover:bg-white">
            Falar com a clínica
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
