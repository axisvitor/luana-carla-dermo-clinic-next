import Link from "next/link";

import { cn } from "@/lib/cn";
import {
  sectionClass,
  primaryButtonClass,
  secondaryButtonClass,
  eyebrowClass,
  eyebrowInverseClass,
  leadClass,
  bodyClass,
  cardClass,
  softPanelClass,
  smallLabelClass,
} from "@/lib/styles";

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
        <h1 className="mt-4 max-w-[14ch] font-display text-balance text-[clamp(1.92rem,4.9vw,3.12rem)] leading-[1] tracking-[-0.04em] text-ink">
          {title}
        </h1>
        <p className={cn(leadClass, "mt-4 max-w-[57ch] text-ink-soft")}>{description}</p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <SmartLink cta={primary} className={primaryButtonClass} />
          <SmartLink cta={secondary} className={secondaryButtonClass} />
        </div>

        <div className="mt-7 grid gap-3 md:auto-rows-fr md:grid-cols-2">
          {facts.map((fact) => (
            <article key={fact.label} className={cn(softPanelClass, "h-full min-h-[100px] p-4 md:p-5")}>
              <span className={cn(smallLabelClass, "block text-ink-faint")}>{fact.label}</span>
              <strong className="mt-2 block max-w-[20ch] text-[1rem] font-semibold leading-[1.45] tracking-[-0.02em] text-ink md:text-[1.05rem]">
                {fact.value}
              </strong>
            </article>
          ))}
        </div>
      </div>

      <aside className="xl:col-span-5 xl:pt-6">
        <div className={cn(cardClass, "p-5 md:p-6")}>
          <p className={eyebrowClass}>{deskTitle}</p>
          <p className="mt-4 max-w-[36ch] text-[0.98rem] leading-[1.82] text-ink">{deskBody}</p>
          <div className="mt-6 grid gap-3.5">
            {points.map((point) => (
              <article key={point.title} className="grid grid-cols-[auto_1fr] gap-3.5 border-t border-black/6 pt-4 first:border-t-0 first:pt-0">
                <span className="grid h-11 w-11 place-items-center rounded-[16px] border border-black/10 bg-[linear-gradient(180deg,rgba(244,237,228,0.94),rgba(255,255,255,0.92))] text-[0.72rem] font-extrabold uppercase tracking-[0.08em] text-accent-deep shadow-[0_12px_30px_rgba(24,35,34,0.04)]">
                  {point.label}
                </span>
                <div>
                  <strong className="block text-[0.97rem] font-semibold leading-[1.44] tracking-[-0.018em] text-ink md:text-[1.01rem]">
                    {point.title}
                  </strong>
                  <p className={cn(bodyClass, "mt-2 max-w-[30ch] text-ink-soft")}>{point.body}</p>
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
    ? "linear-gradient(180deg, rgba(15,20,20,0.14) 0%, rgba(15,20,20,0.58) 54%, rgba(15,20,20,0.94) 100%)"
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
        <h1 className="mt-4 max-w-[13.5ch] font-display text-balance text-[clamp(1.94rem,5vw,3.18rem)] leading-[1] tracking-[-0.04em] text-ink">
          {title}
        </h1>
        <p className={cn(leadClass, "mt-4 max-w-[58ch] text-ink-soft")}>{description}</p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <SmartLink cta={primary} className={primaryButtonClass} />
          <SmartLink cta={secondary} className={secondaryButtonClass} />
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 md:auto-rows-fr">
          {facts.map((fact) => (
            <article key={fact.label} className={cn(softPanelClass, "h-full min-h-[100px] p-4 md:min-h-[108px] md:p-5")}>
              <span className={cn(smallLabelClass, "block text-ink-faint")}>{fact.label}</span>
              <strong className="mt-2 block max-w-[18ch] text-[1rem] font-semibold leading-[1.45] tracking-[-0.02em] text-ink md:text-[1.06rem]">
                {fact.value}
              </strong>
            </article>
          ))}
        </div>
      </div>

      <aside className="xl:col-span-6 xl:pl-4 xl:pt-6">
        <div
          className={cn(
            "relative isolate overflow-hidden rounded-[32px] border p-6 shadow-[0_28px_64px_rgba(16,24,24,0.11)] md:min-h-[480px] md:p-8",
            dark ? "border-white/10" : "border-black/10",
          )}
          style={{
            backgroundImage: `${overlay}, url(${image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="relative z-10 flex min-h-[280px] flex-col justify-end md:min-h-[400px]">
            <p className={dark ? eyebrowInverseClass : eyebrowClass}>{panelLabel}</p>
            <h2
              className={cn(
                "mt-4 max-w-[14ch] font-display text-balance text-[clamp(1.46rem,2.6vw,2.12rem)] leading-[1.04] tracking-[-0.032em]",
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
          className="relative isolate overflow-hidden rounded-[32px] border border-black/10 shadow-[0_26px_58px_rgba(16,24,24,0.09)] md:min-h-[500px]"
          style={{
            backgroundImage:
              `linear-gradient(180deg, rgba(15,20,20,0.06) 0%, rgba(15,20,20,0.18) 34%, rgba(15,20,20,0.74) 100%), url(${image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="relative z-10 flex min-h-[280px] flex-col justify-end p-6 md:min-h-[500px] md:p-7">
            {quote ? <p className="max-w-[16ch] font-display text-balance text-[clamp(1.5rem,3vw,2.15rem)] leading-[1.04] tracking-[-0.035em] text-white">{quote}</p> : null}
          </div>
        </div>
      </div>

      <div className="xl:col-span-8 xl:pl-4">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-[14ch] font-display text-balance text-[clamp(1.94rem,5vw,3.16rem)] leading-[1] tracking-[-0.04em] text-ink">
          {title}
        </h1>
        <p className={cn(leadClass, "mt-4 max-w-[60ch] text-ink-soft")}>{description}</p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <SmartLink cta={primary} className={primaryButtonClass} />
          <SmartLink cta={secondary} className={secondaryButtonClass} />
        </div>

        <div className="mt-7 grid gap-3 md:auto-rows-fr md:grid-cols-2 xl:grid-cols-4">
          {facts.map((fact) => (
            <article key={fact.label} className={cn(softPanelClass, "h-full min-h-[100px] p-4 md:p-5")}>
              <span className={cn(smallLabelClass, "block text-ink-faint")}>{fact.label}</span>
              <strong className="mt-2 block max-w-[18ch] text-[1rem] font-semibold leading-[1.45] tracking-[-0.02em] text-ink md:text-[1.04rem]">
                {fact.value}
              </strong>
            </article>
          ))}
        </div>

        <article className={cn(cardClass, "mt-7 p-5 md:p-6")}>
          <p className={eyebrowClass}>{noteLabel}</p>
          <h2 className="mt-4 max-w-[16ch] font-display text-balance text-[clamp(1.5rem,2.4vw,2.04rem)] leading-[1.06] tracking-[-0.03em] text-ink">
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
        <h1 className="mt-4 max-w-[14ch] font-display text-balance text-[clamp(1.86rem,4.6vw,3rem)] leading-[1] tracking-[-0.038em] text-ink">
          {title}
        </h1>
        <p className={cn(leadClass, "mt-4 max-w-[54ch] text-ink-soft")}>{description}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <SmartLink cta={primary} className={primaryButtonClass} />
          <SmartLink cta={secondary} className={secondaryButtonClass} />
        </div>
      </div>

      <div className="xl:col-span-7 grid gap-4 md:auto-rows-fr md:grid-cols-2">
        {topics.map((topic) => (
          <Link
            key={topic.href}
            href={topic.href}
            className={cn(
              cardClass,
              "group flex h-full flex-col p-5 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_24px_52px_rgba(16,24,24,0.08)] md:p-6",
            )}
          >
            <span className="block text-[0.68rem] font-bold uppercase tracking-[0.14em] text-ink-faint">{topic.label}</span>
            <h2 className="mt-3 max-w-[18ch] text-[1rem] font-semibold leading-[1.45] tracking-[-0.018em] text-ink md:text-[1.08rem]">
              {topic.title}
            </h2>
            <p className={cn(bodyClass, "mt-3 max-w-[32ch] text-ink-soft")}>{topic.body}</p>
            <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-accent-deep transition duration-200 group-hover:gap-3">
              Ir para esta seção
              <span aria-hidden>→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
