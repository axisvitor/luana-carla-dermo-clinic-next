import Link from "next/link";

import { cn } from "@/lib/cn";

import type { CallToAction } from "./sections";

type DeskPoint = {
  label: string;
  title: string;
  body: string;
};

type QuickFact = {
  label: string;
  value: string;
};

type TopicCard = {
  label: string;
  title: string;
  body: string;
  href: string;
};

const sectionClass =
  "grid grid-cols-1 gap-6 px-5 py-14 md:px-8 md:py-20 xl:grid-cols-12 xl:gap-8 2xl:px-[60px]";
const primaryButtonClass =
  "inline-flex w-full items-center justify-center gap-2 rounded-[14px] border border-white/12 bg-[linear-gradient(180deg,var(--accent-deep),#0c4d50)] px-6 py-4 text-center text-[0.76rem] font-bold uppercase tracking-[0.15em] text-white shadow-[0_18px_40px_rgba(15,95,99,0.2)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_46px_rgba(15,95,99,0.24)] active:translate-y-0 sm:w-auto";
const secondaryButtonClass =
  "inline-flex w-full items-center justify-center gap-2 rounded-[14px] border border-accent-deep/28 bg-white/82 px-6 py-4 text-center text-[0.76rem] font-bold uppercase tracking-[0.15em] text-accent-deep shadow-[0_12px_28px_rgba(15,95,99,0.06)] transition duration-200 hover:-translate-y-0.5 hover:border-accent-deep/42 hover:bg-white hover:shadow-[0_16px_32px_rgba(15,95,99,0.08)] active:translate-y-0 sm:w-auto";
const eyebrowClass =
  "inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.17em] text-accent-deep before:h-px before:w-8 before:bg-[linear-gradient(90deg,var(--champagne),rgba(15,95,99,0.35))] before:content-['']";
const inverseEyebrowClass =
  "inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.17em] text-white/82 before:h-px before:w-8 before:bg-[linear-gradient(90deg,rgba(255,255,255,0.82),rgba(255,255,255,0.18))] before:content-['']";
const leadClass = "text-pretty text-[1rem] leading-8 md:text-[1.05rem]";
const bodyClass = "text-pretty text-[0.98rem] leading-7 md:text-[1rem] md:leading-8";
const cardClass =
  "rounded-[30px] border border-black/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(248,244,238,0.84))] shadow-[0_22px_56px_rgba(16,24,24,0.07)]";
const softPanelClass =
  "rounded-[24px] border border-black/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(245,239,231,0.82))] shadow-[0_16px_34px_rgba(16,24,24,0.05)]";

function SmartLink({ cta, className }: { cta: CallToAction; className: string }) {
  const content = (
    <>
      <span>{cta.label}</span>
      <span aria-hidden>{cta.external ? "↗" : "→"}</span>
    </>
  );

  if (cta.external) {
    return (
      <a href={cta.href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={cta.href} className={className}>
      {content}
    </Link>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className={eyebrowClass}>{children}</p>;
}

export function OperationalHero({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  deskTitle,
  deskBody,
  points,
  facts,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primary: CallToAction;
  secondary: CallToAction;
  deskTitle: string;
  deskBody: string;
  points: DeskPoint[];
  facts: QuickFact[];
}) {
  return (
    <section
      className={cn(
        sectionClass,
        "items-start border-b border-black/5 bg-[linear-gradient(180deg,rgba(252,250,247,0.96),rgba(243,236,228,0.52))]",
      )}
    >
      <div className="xl:col-span-7 xl:pr-6">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-[12ch] font-display text-balance text-[clamp(2.12rem,5.6vw,3.7rem)] leading-[0.97] tracking-[-0.045em] text-ink">
          {title}
        </h1>
        <p className={cn(leadClass, "mt-4 max-w-[57ch] text-ink-soft")}>{description}</p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <SmartLink cta={primary} className={primaryButtonClass} />
          <SmartLink cta={secondary} className={secondaryButtonClass} />
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {facts.map((fact) => (
            <article key={fact.label} className={cn(softPanelClass, "p-4 md:p-5")}>
              <span className="block text-[0.68rem] font-bold uppercase tracking-[0.14em] text-ink-faint">{fact.label}</span>
              <strong className="mt-2 block max-w-[20ch] text-[1rem] font-semibold leading-[1.45] tracking-[-0.02em] text-ink md:text-[1.05rem]">
                {fact.value}
              </strong>
            </article>
          ))}
        </div>
      </div>

      <aside className="xl:col-span-5">
        <div className={cn(cardClass, "p-6 md:p-7")}>
          <p className={eyebrowClass}>{deskTitle}</p>
          <p className="mt-4 max-w-[34ch] text-[1.03rem] leading-8 text-ink">{deskBody}</p>
          <div className="mt-6 grid gap-4">
            {points.map((point) => (
              <article key={point.title} className="grid grid-cols-[auto_1fr] gap-4 border-t border-black/8 pt-4 first:border-t-0 first:pt-0">
                <span className="grid h-11 w-11 place-items-center rounded-[16px] border border-black/10 bg-[linear-gradient(180deg,rgba(244,237,228,0.94),rgba(255,255,255,0.92))] text-[0.72rem] font-extrabold uppercase tracking-[0.08em] text-accent-deep shadow-[0_12px_30px_rgba(24,35,34,0.04)]">
                  {point.label}
                </span>
                <div>
                  <strong className="block text-[1rem] font-semibold leading-[1.45] tracking-[-0.02em] text-ink md:text-[1.05rem]">
                    {point.title}
                  </strong>
                  <p className={cn(bodyClass, "mt-2 max-w-[28ch] text-ink-soft")}>{point.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
}

export function ServiceHero({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  image,
  tone = "dark",
  facts,
  panelLabel,
  panelTitle,
  panelBody,
  bullets,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primary: CallToAction;
  secondary: CallToAction;
  image: string;
  tone?: "dark" | "light";
  facts: QuickFact[];
  panelLabel: string;
  panelTitle: string;
  panelBody?: string;
  bullets: string[];
}) {
  const dark = tone === "dark";
  const overlay = dark
    ? "linear-gradient(180deg, rgba(15,20,20,0.12) 0%, rgba(15,20,20,0.48) 52%, rgba(15,20,20,0.9) 100%)"
    : "linear-gradient(180deg, rgba(252,248,243,0.38) 0%, rgba(255,255,255,0.2) 28%, rgba(255,255,255,0.94) 100%)";

  return (
    <section
      className={cn(
        sectionClass,
        "items-start border-b border-black/5 bg-[radial-gradient(circle_at_82%_0%,rgba(15,95,99,0.1),transparent_0_24%),linear-gradient(180deg,rgba(252,250,247,0.98),rgba(242,236,228,0.54))]",
      )}
    >
      <div className="xl:col-span-6 xl:pr-4">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-[12ch] font-display text-balance text-[clamp(2.12rem,5.8vw,3.82rem)] leading-[0.97] tracking-[-0.046em] text-ink">
          {title}
        </h1>
        <p className={cn(leadClass, "mt-4 max-w-[58ch] text-ink-soft")}>{description}</p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <SmartLink cta={primary} className={primaryButtonClass} />
          <SmartLink cta={secondary} className={secondaryButtonClass} />
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {facts.map((fact) => (
            <article key={fact.label} className={cn(softPanelClass, "min-h-[108px] p-4 md:p-5")}>
              <span className="block text-[0.68rem] font-bold uppercase tracking-[0.14em] text-ink-faint">{fact.label}</span>
              <strong className="mt-2 block max-w-[18ch] text-[1rem] font-semibold leading-[1.45] tracking-[-0.02em] text-ink md:text-[1.06rem]">
                {fact.value}
              </strong>
            </article>
          ))}
        </div>
      </div>

      <aside className="xl:col-span-6 xl:pl-4">
        <div
          className={cn(
            "relative isolate overflow-hidden rounded-[34px] border p-7 shadow-[0_30px_72px_rgba(16,24,24,0.12)] md:min-h-[520px] md:p-9",
            dark ? "border-white/10" : "border-black/10",
          )}
          style={{
            backgroundImage: `${overlay}, url(${image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="relative z-10 flex min-h-[300px] flex-col justify-end md:min-h-[440px]">
            <p className={dark ? inverseEyebrowClass : eyebrowClass}>{panelLabel}</p>
            <h2
              className={cn(
                "mt-4 max-w-[13ch] font-display text-balance text-[clamp(1.66rem,3.4vw,2.55rem)] leading-[1.01] tracking-[-0.04em]",
                dark ? "text-white" : "text-ink",
              )}
            >
              {panelTitle}
            </h2>
            {panelBody ? (
              <p className={cn(bodyClass, "mt-4 max-w-[35ch]", dark ? "text-white/82" : "text-ink-soft")}>{panelBody}</p>
            ) : null}
            <ul className="mt-6 grid gap-3.5">
              {bullets.map((bullet) => (
                <li
                  key={bullet}
                  className={cn(
                    "max-w-[26ch] border-b pb-3 text-[0.98rem] leading-[1.72] md:text-[1rem]",
                    dark ? "border-white/14 text-white/88" : "border-black/10 text-ink/88",
                  )}
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </section>
  );
}

export function InstitutionalHero({
  eyebrow,
  title,
  description,
  image,
  primary,
  secondary,
  facts,
  noteLabel,
  noteTitle,
  noteBody,
  quote,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  primary: CallToAction;
  secondary: CallToAction;
  facts: QuickFact[];
  noteLabel: string;
  noteTitle: string;
  noteBody: string;
  quote?: string;
}) {
  return (
    <section
      className={cn(
        sectionClass,
        "items-start border-b border-black/5 bg-[radial-gradient(circle_at_0%_0%,rgba(189,165,139,0.16),transparent_0_24%),linear-gradient(180deg,rgba(251,249,244,0.98),rgba(245,239,232,0.64))]",
      )}
    >
      <div className="xl:col-span-4">
        <div
          className="relative isolate overflow-hidden rounded-[34px] border border-black/10 shadow-[0_28px_64px_rgba(16,24,24,0.1)] md:min-h-[520px]"
          style={{
            backgroundImage:
              `linear-gradient(180deg, rgba(15,20,20,0.06) 0%, rgba(15,20,20,0.18) 34%, rgba(15,20,20,0.74) 100%), url(${image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="relative z-10 flex min-h-[300px] flex-col justify-end p-7 md:min-h-[520px] md:p-8">
            {quote ? <p className="max-w-[16ch] font-display text-balance text-[clamp(1.5rem,3vw,2.15rem)] leading-[1.04] tracking-[-0.035em] text-white">{quote}</p> : null}
          </div>
        </div>
      </div>

      <div className="xl:col-span-8 xl:pl-4">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-[12ch] font-display text-balance text-[clamp(2.08rem,5.5vw,3.72rem)] leading-[0.97] tracking-[-0.046em] text-ink">
          {title}
        </h1>
        <p className={cn(leadClass, "mt-4 max-w-[60ch] text-ink-soft")}>{description}</p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <SmartLink cta={primary} className={primaryButtonClass} />
          <SmartLink cta={secondary} className={secondaryButtonClass} />
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {facts.map((fact) => (
            <article key={fact.label} className={cn(softPanelClass, "p-4 md:p-5")}>
              <span className="block text-[0.68rem] font-bold uppercase tracking-[0.14em] text-ink-faint">{fact.label}</span>
              <strong className="mt-2 block max-w-[18ch] text-[1rem] font-semibold leading-[1.45] tracking-[-0.02em] text-ink md:text-[1.04rem]">
                {fact.value}
              </strong>
            </article>
          ))}
        </div>

        <article className={cn(cardClass, "mt-8 p-6 md:p-7")}>
          <p className={eyebrowClass}>{noteLabel}</p>
          <h2 className="mt-4 max-w-[15ch] font-display text-balance text-[clamp(1.66rem,3vw,2.4rem)] leading-[1.03] tracking-[-0.04em] text-ink">
            {noteTitle}
          </h2>
          <p className={cn(bodyClass, "mt-4 max-w-[44ch] text-ink-soft")}>{noteBody}</p>
        </article>
      </div>
    </section>
  );
}

export function FaqIntroHub({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  topics,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primary: CallToAction;
  secondary: CallToAction;
  topics: TopicCard[];
}) {
  return (
    <section
      className={cn(
        sectionClass,
        "items-start border-b border-black/5 bg-[linear-gradient(180deg,rgba(252,250,247,0.98),rgba(244,237,229,0.54))]",
      )}
    >
      <div className="xl:col-span-5 xl:pr-4">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-[12ch] font-display text-balance text-[clamp(2rem,5vw,3.5rem)] leading-[0.98] tracking-[-0.044em] text-ink">
          {title}
        </h1>
        <p className={cn(leadClass, "mt-4 max-w-[54ch] text-ink-soft")}>{description}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <SmartLink cta={primary} className={primaryButtonClass} />
          <SmartLink cta={secondary} className={secondaryButtonClass} />
        </div>
      </div>

      <div className="xl:col-span-7 grid gap-4 md:grid-cols-2">
        {topics.map((topic) => (
          <Link
            key={topic.href}
            href={topic.href}
            className={cn(
              cardClass,
              "group p-5 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_26px_60px_rgba(16,24,24,0.08)] md:p-6",
            )}
          >
            <span className="block text-[0.68rem] font-bold uppercase tracking-[0.14em] text-ink-faint">{topic.label}</span>
            <h2 className="mt-3 max-w-[16ch] text-[1.08rem] font-semibold leading-[1.42] tracking-[-0.02em] text-ink md:text-[1.15rem]">
              {topic.title}
            </h2>
            <p className={cn(bodyClass, "mt-3 max-w-[32ch] text-ink-soft")}>{topic.body}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-accent-deep transition duration-200 group-hover:gap-3">
              Ir para esta seção
              <span aria-hidden>→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
