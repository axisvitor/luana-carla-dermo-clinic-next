import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export type CallToAction = {
  label: string;
  href: string;
  external?: boolean;
};

type PointItem = {
  title: string;
  body: string;
  badge?: string;
};

type ListItem = {
  title: string;
  body: string;
};

type ImageTone = "dark" | "light";

const sectionClass =
  "grid grid-cols-1 gap-6 px-5 py-14 md:px-8 md:py-20 xl:grid-cols-12 xl:gap-8 2xl:px-[60px]";
const primaryButtonClass =
  "inline-flex w-full items-center justify-center gap-2 rounded-[14px] border border-white/10 bg-[linear-gradient(180deg,var(--accent-deep),#0c4d50)] px-6 py-4 text-center text-[0.76rem] font-bold uppercase tracking-[0.15em] text-white shadow-[0_16px_36px_rgba(15,95,99,0.18)] transition duration-200 hover:-translate-y-0.5 sm:w-auto";
const secondaryButtonClass =
  "inline-flex w-full items-center justify-center gap-2 rounded-[14px] border border-accent-deep/20 bg-white/70 px-6 py-4 text-center text-[0.76rem] font-bold uppercase tracking-[0.15em] text-accent-deep transition duration-200 hover:border-accent-deep/35 hover:bg-white sm:w-auto";
const sectionHeadingClass =
  "font-display text-balance text-[clamp(2.25rem,6vw,4.1rem)] leading-[0.97] tracking-[-0.045em] text-ink";
const mediumHeadingClass =
  "font-display text-balance text-[clamp(1.72rem,4vw,2.7rem)] leading-[0.99] tracking-[-0.04em] text-ink";
const itemHeadingClass =
  "text-pretty text-[1.04rem] font-semibold leading-[1.45] tracking-[-0.02em] text-ink md:text-[1.12rem]";
const leadClass =
  "text-pretty text-[1rem] leading-8 md:text-[1.05rem]";
const bodyClass =
  "text-pretty text-[0.98rem] leading-7 md:text-[1rem] md:leading-8";
const eyebrowClass =
  "inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.17em] text-accent-deep before:h-px before:w-8 before:bg-[linear-gradient(90deg,var(--champagne),rgba(15,95,99,0.35))] before:content-['']";
const eyebrowInverseClass =
  "inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.17em] text-white/82 before:h-px before:w-8 before:bg-[linear-gradient(90deg,rgba(255,255,255,0.82),rgba(255,255,255,0.18))] before:content-['']";
const cardClass =
  "rounded-[30px] border border-black/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(248,244,238,0.84))] shadow-[0_22px_56px_rgba(16,24,24,0.07)]";

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

export function HeroSection({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  panelLabel,
  panelTitle,
  image,
  tone = "light",
  points,
  list,
  quote,
  mobileTitle,
  mobilePanelTitle,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primary: CallToAction;
  secondary: CallToAction;
  panelLabel: string;
  panelTitle: string;
  image: string;
  tone?: ImageTone;
  points?: PointItem[];
  list?: string[];
  quote?: string;
  mobileTitle?: string;
  mobilePanelTitle?: string;
}) {
  const dark = tone === "dark";

  const overlay = dark
    ? "linear-gradient(180deg, rgba(15,20,20,0.24) 0%, rgba(15,20,20,0.82) 100%)"
    : "linear-gradient(180deg, rgba(250,246,241,0.72) 0%, rgba(255,255,255,0.92) 74%)";

  return (
    <section className={cn(sectionClass, "relative overflow-hidden pt-8 md:pt-14 xl:pt-20")}> 
      <div className="relative z-10 xl:col-span-7 xl:pr-6">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-[11ch] font-display text-balance text-[clamp(2.7rem,8.4vw,5rem)] leading-[0.94] tracking-[-0.05em] text-ink sm:max-w-[10.5ch]">
          <span className="sm:hidden">{mobileTitle ?? title}</span>
          <span className="hidden sm:inline">{title}</span>
        </h1>
        <p className={cn(leadClass, "mt-4 max-w-[56ch] text-ink-soft")}>{description}</p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <SmartLink cta={primary} className={primaryButtonClass} />
          <SmartLink cta={secondary} className={secondaryButtonClass} />
        </div>
      </div>

      <aside className="relative z-10 xl:col-span-5">
        <div
          className={cn(
            cardClass,
            "relative isolate flex min-h-[280px] flex-col justify-end overflow-hidden p-6 sm:min-h-[320px] md:min-h-[460px] md:p-8",
            dark && "border-white/10 text-white shadow-[0_36px_90px_rgba(10,16,16,0.22)]",
          )}
          style={{ backgroundImage: `${overlay}, url(${image})`, backgroundPosition: "center", backgroundSize: "cover" }}
        >
          <div className={cn("pointer-events-none absolute -left-[12%] bottom-[-14%] h-56 w-56 rounded-[45%_55%_58%_42%/42%_40%_60%_58%] border", dark ? "border-white/10 shadow-[0_0_0_20px_rgba(255,255,255,0.03),0_0_0_52px_rgba(255,255,255,0.015)]" : "border-accent-deep/15 shadow-[0_0_0_20px_rgba(15,95,99,0.04),0_0_0_52px_rgba(15,95,99,0.02)]")} />
          <div className="relative z-10">
            <p className={dark ? eyebrowInverseClass : eyebrowClass}>{panelLabel}</p>
            <h2 className={cn("mt-3 max-w-[12ch] font-display text-balance text-[clamp(1.75rem,5vw,3rem)] leading-[0.98] tracking-[-0.045em]", dark ? "text-white" : "text-ink")}>
              <span className="sm:hidden">{mobilePanelTitle ?? panelTitle}</span>
              <span className="hidden sm:inline">{panelTitle}</span>
            </h2>

            {points ? (
              <div className="mt-5 grid gap-3">
                {points.map((item, index) => (
                  <article key={item.title} className="grid grid-cols-[auto_1fr] gap-3">
                    <span className={cn("grid h-10 w-10 place-items-center rounded-[14px] border text-sm font-extrabold", dark ? "border-white/12 bg-white/5 text-[#d8f1f2]" : "border-black/10 bg-white/80 text-accent-deep")}>
                      {item.badge ?? String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <strong className={cn("block text-[1rem] font-semibold leading-[1.35] tracking-[-0.01em]", dark ? "text-white/92" : "text-ink")}>{item.title}</strong>
                      <p className={cn("mt-1 text-[0.94rem] leading-6 md:text-[0.97rem]", dark ? "text-white/78" : "text-ink-soft")}>{item.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            ) : null}

            {list ? (
              <ul className="mt-5 grid gap-2.5">
                {list.map((item) => (
                  <li key={item} className={cn("border-b pb-3 text-[0.95rem] leading-6 md:text-[0.98rem]", dark ? "border-white/12 text-white/84" : "border-black/10 text-ink/85")}>
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}

            {quote ? (
              <blockquote className={cn("mt-5 border-t pt-4 font-display text-balance text-[clamp(1.65rem,4.4vw,2.45rem)] leading-[1.02] tracking-[-0.04em]", dark ? "border-white/12 text-white" : "border-black/10 text-ink")}> 
                {quote}
              </blockquote>
            ) : null}
          </div>
        </div>
      </aside>
    </section>
  );
}

export function TrustStrip({ items }: { items: ListItem[] }) {
  return (
    <section className={cn(sectionClass, "pt-3 md:pt-4")}>
      <div className="xl:col-span-12 border-t border-line pt-6">
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="relative border-t border-black/10 pt-4 before:absolute before:left-0 before:top-[-1px] before:h-[2px] before:w-9 before:bg-[linear-gradient(90deg,var(--champagne),var(--accent))] before:content-['']">
              <strong className="block text-[0.8rem] font-bold uppercase tracking-[0.12em] text-ink">{item.title}</strong>
              <p className={cn(bodyClass, "mt-3 text-ink-soft")}>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ManifestoBand({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <section className={cn(sectionClass, "border-y border-black/5 bg-[radial-gradient(circle_at_90%_16%,rgba(15,95,99,0.08),transparent_0_24%),linear-gradient(180deg,rgba(243,235,226,0.92),rgba(248,246,241,0.72))]")}>
      <div className="grid gap-8 xl:col-span-12 xl:grid-cols-[1.12fr_0.88fr] xl:items-end">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className={cn(sectionHeadingClass, "mt-4 max-w-[13ch]")}>{title}</h2>
        </div>
        <p className={cn(leadClass, "max-w-[36ch] text-ink-soft")}>{body}</p>
      </div>
    </section>
  );
}

export function SignatureGallery() {
  return (
    <section className={sectionClass}>
      <article
        className="relative isolate overflow-hidden rounded-[30px] border border-black/10 p-7 shadow-[0_22px_56px_rgba(16,24,24,0.07)] md:p-8 xl:col-span-7"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(15,20,20,0.16) 0%, rgba(15,20,20,0.68) 100%), url(/generated/stitch/stitch-home-clinic.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 flex min-h-[280px] max-w-[28rem] flex-col justify-end md:min-h-[500px]">
          <p className={eyebrowInverseClass}>
            Atmosfera
          </p>
          <h3 className="mt-4 max-w-[11ch] font-display text-balance text-[clamp(2rem,3.7vw,3rem)] leading-[0.97] tracking-[-0.045em] text-white">
            Ambiente sereno, leitura cuidadosa e atenção ao detalhe.
          </h3>
          <p className={cn(bodyClass, "mt-4 max-w-[34ch] text-white/76")}>
            O que a clínica promete na conversa precisa aparecer também no espaço, no ritmo e na forma de receber.
          </p>
        </div>
      </article>

      <div className="grid gap-6 xl:col-span-5">
        <article
          className="relative isolate overflow-hidden rounded-[30px] border border-black/10 p-6 shadow-[0_22px_56px_rgba(16,24,24,0.07)] md:p-7"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(15,20,20,0.12) 0%, rgba(15,20,20,0.68) 100%), url(/generated/stitch/stitch-continuity-1.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative z-10 flex min-h-[210px] flex-col justify-end">
            <p className={eyebrowInverseClass}>
              Continuidade
            </p>
            <h3 className="mt-4 max-w-[12ch] font-display text-balance text-[clamp(1.72rem,3vw,2.35rem)] leading-[0.99] tracking-[-0.04em] text-white">
              Cuidado corporal com constância, não com pressa.
            </h3>
          </div>
        </article>

        <article className={cn(cardClass, "p-6 md:p-7")}>
          <Eyebrow>Memória da marca</Eyebrow>
          <h3 className={cn(mediumHeadingClass, "mt-4 max-w-[12ch]")}>Menos ruído estético. Mais clareza sobre o que fazer agora.</h3>
          <p className={cn(bodyClass, "mt-4 max-w-[34ch] text-ink-soft")}>
            Esse é o tipo de calma que transforma percepção em confiança.
          </p>
        </article>
      </div>
    </section>
  );
}

export function TripleArticleSection({
  eyebrow,
  title,
  items,
  muted,
}: {
  eyebrow: string;
  title: string;
  items: ListItem[];
  muted?: boolean;
}) {
  return (
    <section className={cn(sectionClass, muted && "border-y border-black/5 bg-[linear-gradient(180deg,rgba(243,235,226,0.42),rgba(255,255,255,0.18))]")}>
      <SectionIntro eyebrow={eyebrow} title={title} />
      <div className="xl:col-span-12 grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className={cn(cardClass, "border-t border-black/10 p-6 md:p-7")}> 
            <h3 className={itemHeadingClass}>{item.title}</h3>
            <p className={cn(bodyClass, "mt-3 text-ink-soft")}>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function EditorialFeatureSection({
  eyebrow,
  title,
  body,
  calloutTitle,
  calloutBody,
}: {
  eyebrow: string;
  title: string;
  body: string;
  calloutTitle: string;
  calloutBody: string;
}) {
  return (
    <section className={sectionClass}>
      <SectionIntro eyebrow={eyebrow} title={title} />
      <div className="grid gap-6 xl:col-span-12 xl:grid-cols-[1.2fr_0.8fr] xl:items-start">
        <div>
          <p className={cn(leadClass, "max-w-[65ch] text-ink-soft")}>{body}</p>
        </div>
        <article className={cn(cardClass, "border-t border-black/10 p-6 md:p-7")}>
          <strong className={cn(itemHeadingClass, "block")}>{calloutTitle}</strong>
          <p className={cn(bodyClass, "mt-3 text-ink-soft")}>{calloutBody}</p>
        </article>
      </div>
    </section>
  );
}

export function ProcessSection({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: ListItem[];
}) {
  return (
    <section className={cn(sectionClass, "border-y border-black/5 bg-[linear-gradient(180deg,rgba(243,235,226,0.42),rgba(255,255,255,0.18))]")}>
      <SectionIntro eyebrow={eyebrow} title={title} narrow />
      <ol className="xl:col-span-12 grid gap-6 md:grid-cols-2">
        {items.map((item, index) => (
          <li key={item.title} className="grid grid-cols-[auto_1fr] gap-4 border-t border-black/10 pt-5">
            <span className="grid h-14 w-14 place-items-center rounded-[18px] border border-black/10 bg-[linear-gradient(180deg,rgba(244,237,228,0.94),rgba(255,255,255,0.8))] text-sm font-extrabold text-accent-deep shadow-[0_14px_30px_rgba(24,35,34,0.05)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className={itemHeadingClass}>{item.title}</h3>
              <p className={cn(bodyClass, "mt-3 text-ink-soft")}>{item.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function ServiceRailsSection({
  eyebrow,
  title,
  featured,
  items,
}: {
  eyebrow: string;
  title: string;
  featured: { label: string; title: string; body: string; bullets: string[]; cta: CallToAction };
  items: Array<{ label: string; title: string; body: string; cta: CallToAction }>;
}) {
  return (
    <section className={sectionClass}>
      <SectionIntro eyebrow={eyebrow} title={title} />
      <div className="xl:col-span-12 grid gap-6 xl:grid-cols-[1.25fr_1fr_1fr]">
        <article className="rounded-[30px] border border-white/8 bg-[radial-gradient(circle_at_100%_0%,rgba(31,123,127,0.22),transparent_0_30%),linear-gradient(180deg,#1c2b2b_0%,#162120_100%)] p-6 text-white shadow-[0_34px_70px_rgba(16,40,42,0.2)] md:p-7">
          <p className={eyebrowInverseClass}>
            {featured.label}
          </p>
          <h3 className="mt-4 font-display text-balance text-[clamp(1.78rem,3vw,2.65rem)] leading-[0.99] tracking-[-0.04em] text-white">
            {featured.title}
          </h3>
          <p className={cn(bodyClass, "mt-4 text-white/76")}>{featured.body}</p>
          <ul className={cn(bodyClass, "mt-5 grid gap-2 text-white/88")}>
            {featured.bullets.map((bullet) => (
              <li key={bullet}>• {bullet}</li>
            ))}
          </ul>
          <SmartLink cta={featured.cta} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#d7f4f5] transition duration-200 hover:gap-3" />
        </article>
        {items.map((item) => (
          <article key={item.title} className={cn(cardClass, "p-6 md:p-7")}>
            <p className={eyebrowClass}>
              {item.label}
            </p>
            <h3 className={cn(mediumHeadingClass, "mt-4")}>{item.title}</h3>
            <p className={cn(bodyClass, "mt-4 text-ink-soft")}>{item.body}</p>
            <SmartLink cta={item.cta} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-accent-deep transition duration-200 hover:gap-3" />
          </article>
        ))}
      </div>
    </section>
  );
}

export function SplitSection({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: ListItem[];
}) {
  return (
    <section className={sectionClass}>
      <div className="xl:col-span-6">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className={cn(sectionHeadingClass, "mt-4 max-w-[12ch]")}>{title}</h2>
      </div>
      <div className="grid gap-5 xl:col-span-6">
        {items.map((item) => (
          <article key={item.title} className="border-t border-black/10 pt-5">
            <h3 className={itemHeadingClass}>{item.title}</h3>
            <p className={cn(bodyClass, "mt-3 text-ink-soft")}>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function DarkBand({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: string[];
}) {
  return (
    <section className={cn(sectionClass, "border-y border-white/5 bg-[radial-gradient(circle_at_100%_0%,rgba(31,123,127,0.18),transparent_0_24%),linear-gradient(180deg,rgba(24,35,34,0.98),rgba(16,24,24,0.98))]")}> 
      <div className="xl:col-span-6">
        <p className={eyebrowInverseClass}>
          {eyebrow}
        </p>
        <h2 className="mt-4 max-w-[12ch] font-display text-balance text-[clamp(2.3rem,4vw,4rem)] leading-[0.97] tracking-[-0.045em] text-white">
          {title}
        </h2>
      </div>
      <ul className="grid gap-4 xl:col-span-6">
        {items.map((item) => (
          <li key={item} className={cn(bodyClass, "border-b border-white/10 pb-4 text-white/88")}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function FaqSection({
  eyebrow,
  title,
  description,
  items,
  featured = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  items: ListItem[];
  featured?: boolean;
}) {
  const accordion = (
    <div className={cn(featured ? "grid gap-3 md:gap-4" : "xl:col-span-12 grid gap-3 md:gap-4")}>
      {items.map((item) => (
        <details
          key={item.title}
          className={cn(
            "group rounded-[22px] border px-5 py-4 transition duration-200 md:px-6 md:py-5",
            featured
              ? "border-black/8 bg-white shadow-[0_18px_38px_rgba(16,24,24,0.045)] open:shadow-[0_22px_48px_rgba(16,24,24,0.07)]"
              : "border-black/8 bg-white/52 shadow-[0_12px_30px_rgba(16,24,24,0.04)] open:bg-white open:shadow-[0_18px_42px_rgba(16,24,24,0.06)]",
          )}
        >
          <summary className="grid cursor-pointer grid-cols-[1fr_auto] items-center gap-4 list-none font-sans text-[1rem] font-semibold leading-[1.45] tracking-[-0.02em] text-ink md:text-[1.08rem] md:leading-[1.42] [&::-webkit-details-marker]:hidden">
            <span className={cn(featured ? "max-w-[40ch]" : "max-w-[42ch]")}>{item.title}</span>
            <span className="grid h-9 w-9 place-items-center rounded-full border border-accent-deep/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,242,236,0.94))] font-sans text-[1.05rem] font-medium text-accent-deep transition duration-200 group-open:rotate-45 group-open:border-accent-deep/22 group-open:bg-accent-deep group-open:text-white">
              +
            </span>
          </summary>
          <p className={cn(bodyClass, "mt-3 max-w-[68ch] pr-12 text-ink-soft md:mt-4")}>{item.body}</p>
        </details>
      ))}
    </div>
  );

  if (featured) {
    return (
      <section className={cn(sectionClass, "items-start")}>
        <div className={cn(cardClass, "xl:col-span-4 self-start p-6 md:p-7")}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-[9ch] font-display text-balance text-[clamp(2.05rem,4vw,3.25rem)] leading-[0.97] tracking-[-0.045em] text-ink">
            {title}
          </h2>
          {description ? (
            <p className={cn(bodyClass, "mt-4 max-w-[34ch] text-ink-soft")}>{description}</p>
          ) : null}
        </div>

        <div className="xl:col-span-8 rounded-[32px] border border-black/8 bg-[linear-gradient(180deg,rgba(249,245,239,0.88),rgba(255,255,255,0.98))] p-3 shadow-[0_28px_60px_rgba(16,24,24,0.05)] md:p-4">
          {accordion}
        </div>
      </section>
    );
  }

  return (
    <section className={sectionClass}>
      <SectionIntro eyebrow={eyebrow} title={title} narrow />
      {accordion}
    </section>
  );
}

export function CtaPanel({
  eyebrow,
  title,
  body,
  highlight,
  detail,
  primary,
  secondary,
  footnote,
}: {
  eyebrow: string;
  title: string;
  body: string;
  highlight: string;
  detail: string;
  primary: CallToAction;
  secondary: CallToAction;
  footnote?: string;
}) {
  return (
    <section className={sectionClass}>
      <div className="xl:col-span-7">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className={cn(sectionHeadingClass, "mt-4 max-w-[12ch]")}>{title}</h2>
        <p className={cn(leadClass, "mt-4 max-w-[62ch] text-ink-soft")}>{body}</p>
      </div>
      <div className={cn(cardClass, "xl:col-span-5 p-6 md:p-7")}> 
        <p className={eyebrowClass}>
          {highlight}
        </p>
        <p className="mt-4 text-[1.02rem] font-medium leading-7 text-ink">{detail}</p>
        <div className="mt-5 flex flex-col gap-3">
          <SmartLink cta={primary} className={primaryButtonClass} />
          <SmartLink cta={secondary} className={secondaryButtonClass} />
        </div>
        {footnote ? <p className={cn(bodyClass, "mt-4 text-ink-soft")}>{footnote}</p> : null}
      </div>
    </section>
  );
}

export function ContactGrid({
  eyebrow,
  title,
  cards,
}: {
  eyebrow: string;
  title: string;
  cards: Array<{ title: string; body: string; cta?: CallToAction }>;
}) {
  return (
    <section className={sectionClass}>
      <SectionIntro eyebrow={eyebrow} title={title} />
      <div className="xl:col-span-12 grid gap-6 md:grid-cols-2">
        {cards.map((card) => (
          <article key={card.title} className={cn(cardClass, "p-6 md:p-7")}> 
            <h3 className={cn(mediumHeadingClass)}>{card.title}</h3>
            <p className={cn(bodyClass, "mt-4 max-w-[42ch] text-ink-soft")}>{card.body}</p>
            {card.cta ? <SmartLink cta={card.cta} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-accent-deep transition duration-200 hover:gap-3" /> : null}
          </article>
        ))}
      </div>
    </section>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className={eyebrowClass}>
      {children}
    </p>
  );
}

function SectionIntro({
  eyebrow,
  title,
  narrow,
}: {
  eyebrow: string;
  title: string;
  narrow?: boolean;
}) {
  return (
    <div className={cn("relative xl:col-span-12", narrow ? "max-w-[48rem]" : "flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between")}> 
      {!narrow ? null : null}
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className={cn(sectionHeadingClass, "mt-4 max-w-[13ch]")}>{title}</h2>
      </div>
    </div>
  );
}
