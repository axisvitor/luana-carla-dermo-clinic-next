import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";
import {
  sectionClass,
  primaryButtonClass,
  secondaryButtonClass,
  sectionHeadingClass,
  mediumHeadingClass,
  itemHeadingClass,
  leadClass,
  bodyClass,
  eyebrowClass,
  eyebrowInverseClass,
  cardClass,
  softPanelClass,
} from "@/lib/styles";

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
  image,
  credentials,
  mobileTitle,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primary: CallToAction;
  image: string;
  credentials?: string[];
  mobileTitle?: string;
  /** @deprecated unused — kept for backwards compat */
  secondary?: CallToAction;
  /** @deprecated unused — kept for backwards compat */
  panelLabel?: string;
  /** @deprecated unused — kept for backwards compat */
  panelTitle?: string;
  /** @deprecated unused — kept for backwards compat */
  tone?: ImageTone;
  /** @deprecated unused — kept for backwards compat */
  points?: PointItem[];
  /** @deprecated unused — kept for backwards compat */
  list?: string[];
  /** @deprecated unused — kept for backwards compat */
  mobilePanelTitle?: string;
}) {
  return (
    <section
      aria-label="Apresentação da clínica"
      className="relative isolate min-h-[92svh] overflow-hidden md:min-h-[88svh] xl:min-h-[84svh]"
    >
      {/* Imagem de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center 20%",
          backgroundSize: "cover",
        }}
      />

      {/* Overlay multicamada — escurecimento suave no topo, intenso na base */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(170deg,rgba(15,20,20,0.28)_0%,rgba(15,20,20,0.12)_28%,rgba(15,20,20,0.44)_60%,rgba(15,20,20,0.82)_100%)]"
      />

      {/* Vinheta lateral esquerda — guia o olho ao texto */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-[55%] bg-[linear-gradient(90deg,rgba(15,20,20,0.52)_0%,transparent_100%)]"
      />

      {/* Conteúdo */}
      <div className="relative z-10 flex h-full min-h-[inherit] flex-col justify-between px-5 pb-10 pt-14 md:px-8 md:pb-12 md:pt-20 xl:px-[60px] xl:pb-16 xl:pt-24">
        {/* Eyebrow — topo esquerdo */}
        <p className={eyebrowInverseClass}>{eyebrow}</p>

        {/* Bloco central: headline + descrição + CTA */}
        <div className="mt-auto max-w-[36rem] xl:max-w-[44rem]">
          <h1 className="font-display text-balance text-[clamp(2.6rem,6.4vw,4.8rem)] leading-[0.98] tracking-[-0.04em] text-white [text-shadow:0_2px_24px_rgba(15,20,20,0.2)]">
            <span className="sm:hidden">{mobileTitle ?? title}</span>
            <span className="hidden sm:inline">{title}</span>
          </h1>

          <p className="mt-5 max-w-[46ch] text-[1rem] leading-[1.78] text-white/82 md:mt-6 md:text-[1.05rem] md:leading-[1.82]">
            {description}
          </p>

          <div className="mt-8 md:mt-10">
            <SmartLink
              cta={primary}
              className="inline-flex items-center gap-3 rounded-full border border-white/14 bg-white/10 px-7 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-white backdrop-blur-md transition duration-300 ease-out hover:-translate-y-0.5 hover:border-white/22 hover:bg-white/16 active:translate-y-0"
            />
          </div>
        </div>

        {/* Rodapé de credenciais — base direita */}
        {credentials && credentials.length > 0 && (
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 self-end md:mt-0">
            {credentials.map((item, index) => (
                <span
                key={item}
                className={cn(
                  "text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-white/60",
                  index < credentials.length - 1 &&
                    "after:ml-6 after:inline-block after:h-px after:w-4 after:translate-y-[-1px] after:bg-white/18 after:content-['']",
                )}
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Linha decorativa inferior */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)]"
      />
    </section>
  );
}

export function TrustStrip({ items }: { items: ListItem[] }) {
  return (
    <section className={cn(sectionClass, "pt-4 md:pt-6")}>
      <div className="xl:col-span-12 border-t border-line pt-6 md:pt-8">
        <div className="grid gap-4 md:auto-rows-fr md:grid-cols-3 md:gap-5">
          {items.map((item) => (
            <article
              key={item.title}
              className={cn(
                softPanelClass,
                "relative flex h-full min-h-[160px] flex-col p-5 md:min-h-[176px] md:p-6 before:absolute before:left-5 before:top-0 before:h-px before:w-11 before:bg-[linear-gradient(90deg,var(--champagne),rgba(15,95,99,0.34))] before:content-[''] md:before:left-6",
              )}
            >
              <strong className="block text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-ink">{item.title}</strong>
              <p className={cn(bodyClass, "mt-3 max-w-[30ch] text-ink-soft")}>{item.body}</p>
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
    <section className={sectionClass} aria-label="Galeria de imagens da clinica">
      <article
        role="img"
        aria-label="Ambiente sereno da clinica com atencao ao detalhe"
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
          <h3 className="mt-4 max-w-[11ch] font-display text-balance text-[clamp(2rem,3.7vw,2.9rem)] leading-[1.02] tracking-[-0.038em] text-white">
            Ambiente sereno, leitura cuidadosa e atenção ao detalhe.
          </h3>
          <p className={cn(bodyClass, "mt-4 max-w-[34ch] text-white/84")}>
            O que a clínica promete na conversa precisa aparecer também no espaço, no ritmo e na forma de receber.
          </p>
        </div>
      </article>

      <div className="grid gap-6 xl:col-span-5">
        <article
          role="img"
          aria-label="Cuidado corporal com constancia e acompanhamento"
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
            <h3 className="mt-4 max-w-[12ch] font-display text-balance text-[clamp(1.72rem,3vw,2.3rem)] leading-[1.04] tracking-[-0.035em] text-white">
              Cuidado corporal com constância, não com pressa.
            </h3>
          </div>
        </article>

        <article className={cn(cardClass, "p-6 md:p-7")}>
          <Eyebrow>Memoria da marca</Eyebrow>
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
      <div className="xl:col-span-12 grid gap-5 md:auto-rows-fr md:grid-cols-3 md:gap-6">
        {items.map((item) => (
          <article
            key={item.title}
            className={cn(
              softPanelClass,
              "relative flex h-full min-h-[190px] flex-col p-5 md:min-h-[216px] md:p-6 before:absolute before:left-5 before:top-0 before:h-px before:w-12 before:bg-[linear-gradient(90deg,var(--champagne),rgba(15,95,99,0.35))] before:content-[''] md:before:left-6",
              muted && "bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(244,237,228,0.74))]",
            )}
          >
            <h3 className={cn(itemHeadingClass, "max-w-[18ch]")}>{item.title}</h3>
            <p className={cn(bodyClass, "mt-4 max-w-[30ch] text-ink-soft")}>{item.body}</p>
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
        <article className={cn(softPanelClass, "border-t border-black/10 p-6 md:p-7")}>
          <strong className={cn(itemHeadingClass, "block max-w-[16ch]")}>{calloutTitle}</strong>
          <p className={cn(bodyClass, "mt-3 max-w-[30ch] text-ink-soft")}>{calloutBody}</p>
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
      <ol className="xl:col-span-12 grid gap-4 md:auto-rows-fr md:grid-cols-2 md:gap-5">
        {items.map((item, index) => (
          <li key={item.title} className={cn(softPanelClass, "grid h-full grid-cols-[auto_1fr] gap-4 p-5 md:p-6")}>
            <span className="grid h-12 w-12 place-items-center rounded-[16px] border border-black/10 bg-[linear-gradient(180deg,rgba(244,237,228,0.94),rgba(255,255,255,0.82))] text-[0.75rem] font-bold text-accent-deep shadow-[0_12px_26px_rgba(24,35,34,0.05)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <h3 className={cn(itemHeadingClass, "max-w-[18ch]")}>{item.title}</h3>
              <p className={cn(bodyClass, "mt-3 max-w-[30ch] text-ink-soft")}>{item.body}</p>
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
          <h3 className="mt-4 font-display text-balance text-[clamp(1.78rem,3vw,2.5rem)] leading-[1.04] tracking-[-0.035em] text-white">
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
      <div className="xl:col-span-5 xl:pr-4">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className={cn(sectionHeadingClass, "mt-4 max-w-[12ch]")}>{title}</h2>
      </div>
      <div className="grid gap-4 xl:col-span-7 md:auto-rows-fr md:gap-5">
        {items.map((item) => (
          <article key={item.title} className={cn(softPanelClass, "h-full p-5 md:min-h-[156px] md:p-6")}>
            <h3 className={cn(itemHeadingClass, "max-w-[18ch]")}>{item.title}</h3>
            <p className={cn(bodyClass, "mt-3 max-w-[30ch] text-ink-soft")}>{item.body}</p>
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
        <h2 className="mt-4 max-w-[14ch] font-display text-balance text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.06] tracking-[-0.032em] text-white">
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
            "group rounded-[22px] border px-5 py-[1.05rem] transition duration-200 md:px-6 md:py-[1.15rem]",
            featured
              ? "border-black/6 bg-white shadow-[0_14px_30px_rgba(16,24,24,0.035)] open:shadow-[0_18px_40px_rgba(16,24,24,0.055)]"
              : "border-black/6 bg-white/52 shadow-[0_10px_24px_rgba(16,24,24,0.03)] open:bg-white open:shadow-[0_16px_34px_rgba(16,24,24,0.05)]",
          )}
        >
          <summary className="grid cursor-pointer grid-cols-[1fr_auto] items-center gap-4 list-none font-sans text-[1rem] font-semibold leading-[1.48] tracking-[-0.016em] text-ink md:text-[1.05rem] md:leading-[1.44] [&::-webkit-details-marker]:hidden">
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
        <div className={cn(cardClass, "xl:col-span-5 self-start p-5 md:p-6")}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-[12ch] font-display text-balance text-[clamp(1.6rem,2.5vw,2.15rem)] leading-[1.08] tracking-[-0.028em] text-ink">
            {title}
          </h2>
          {description ? (
            <p className={cn(bodyClass, "mt-4 max-w-[34ch] text-ink-soft")}>{description}</p>
          ) : null}
        </div>

        <div className="xl:col-span-7 rounded-[30px] border border-black/8 bg-[linear-gradient(180deg,rgba(249,245,239,0.88),rgba(255,255,255,0.98))] p-3 shadow-[0_24px_52px_rgba(16,24,24,0.05)] md:p-4">
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
      <div className="xl:col-span-6 xl:pr-4">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className={cn(sectionHeadingClass, "mt-4 max-w-[12ch]")}>{title}</h2>
        <p className={cn(leadClass, "mt-4 max-w-[62ch] text-ink-soft")}>{body}</p>
      </div>
      <div className={cn(cardClass, "xl:col-span-6 xl:self-start p-5 md:p-6")}> 
        <p className={eyebrowClass}>
          {highlight}
        </p>
        <p className="mt-4 text-[0.98rem] font-medium leading-[1.72] text-ink">{detail}</p>
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
      <div className="xl:col-span-12 grid gap-5 md:auto-rows-fr md:grid-cols-2">
        {cards.map((card) => (
          <article key={card.title} className={cn(cardClass, "flex h-full flex-col p-5 md:p-6")}> 
            <h3 className={cn(itemHeadingClass, "max-w-[18ch]")}>{card.title}</h3>
            <p className={cn(bodyClass, "mt-4 max-w-[42ch] text-ink-soft")}>{card.body}</p>
            {card.cta ? <SmartLink cta={card.cta} className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-accent-deep transition duration-200 hover:gap-3" /> : null}
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
    <div className={cn("relative xl:col-span-12", narrow ? "max-w-[46rem]" : "max-w-[58rem]")}> 
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className={cn(sectionHeadingClass, "mt-4 max-w-[14ch]")}>{title}</h2>
      </div>
    </div>
  );
}

// ============================================================================
// GALERIA DE RESULTADOS (ANTES E DEPOIS)
// ============================================================================

type BeforeAfterItem = {
  title: string;
  procedure: string;
  timeline: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
};

export function ResultsGallery({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  items: BeforeAfterItem[];
}) {
  return (
    <section className={cn(sectionClass, "py-12 md:py-16 xl:py-20")}>
      <SectionIntro eyebrow={eyebrow} title={title} />
      
      {description && (
        <p className={cn(leadClass, "col-span-12 mt-6 max-w-[52ch] text-ink-soft")}>
          {description}
        </p>
      )}

      <div className="col-span-12 mt-12 grid gap-8 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className="group overflow-hidden">
            {/* Containers antes/depois com transição suave */}
            <div className="relative overflow-hidden rounded-[24px] border border-black/6 bg-black/2">
              <div className="aspect-square overflow-hidden bg-black/3">
                {/* Placeholder com elemento visual */}
                <div className="relative h-full w-full flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-ink-faint/8 to-accent-deep/8 p-6">
                  <div className="text-center">
                    <p className="text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-ink/50">Resultado visual</p>
                    <p className="mt-2 text-sm text-ink/40">Imagem em alta resolução</p>
                  </div>
                </div>
              </div>

              {/* Legenda */}
              <div className="border-t border-black/6 p-5">
                <h3 className={itemHeadingClass}>{item.title}</h3>
                <div className="mt-3 flex flex-col gap-2">
                  <p className={cn(bodyClass, "text-ink/70")}>{item.procedure}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-accent-deep">{item.timeline}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ============================================================================
// DEPOIMENTOS VISUAIS COM FOTO
// ============================================================================

type Testimonial = {
  name: string;
  procedure: string;
  quote: string;
  avatarInitials?: string;
  avatarColor?: string;
};

export function TestimonialsSection({
  eyebrow,
  title,
  testimonials,
}: {
  eyebrow: string;
  title: string;
  testimonials: Testimonial[];
}) {
  return (
    <section className={cn(sectionClass, "py-12 md:py-16 xl:py-20")}>
      <SectionIntro eyebrow={eyebrow} title={title} narrow />

      <div className="col-span-12 mt-12 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item) => (
          <article
            key={item.name}
            className={cn(
              softPanelClass,
              "flex flex-col gap-4 p-6 transition duration-300 hover:border-black/12 hover:shadow-[0_14px_34px_rgba(16,24,24,0.04)]",
            )}
          >
            {/* Avatar + Nome */}
            <div className="flex items-center gap-4">
              <div
                className={cn(
                  "grid h-12 w-12 place-items-center rounded-full font-display text-sm font-bold text-white",
                  item.avatarColor || "bg-gradient-to-br from-accent-deep to-accent-deep/80",
                )}
              >
                {item.avatarInitials || item.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-ink">{item.name}</p>
                <p className="text-xs font-medium text-ink/60">{item.procedure}</p>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="border-l-2 border-accent-deep/30 pl-4">
              <p className={cn(bodyClass, "text-ink/80 italic")}>"{item.quote}"</p>
            </blockquote>

            {/* Star rating (visual) */}
            <div className="flex gap-1.5 pt-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-accent-deep">★</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ============================================================================
// GALERIA DE AMBIENTE DA CLÍNICA
// ============================================================================

type ClinicSpace = {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  featured?: boolean;
};

export function ClinicEnvironmentGallery({
  eyebrow,
  title,
  spaces,
}: {
  eyebrow: string;
  title: string;
  spaces: ClinicSpace[];
}) {
  return (
    <section className={cn(sectionClass, "py-12 md:py-16 xl:py-20")}>
      <SectionIntro eyebrow={eyebrow} title={title} />

      <div className="col-span-12 mt-12 grid gap-6 md:mt-16 auto-rows-[300px] md:auto-rows-[320px]">
        {spaces.map((space, index) => (
          <article
            key={space.title}
            className={cn(
              "group relative overflow-hidden rounded-[24px] border border-black/6",
              space.featured ? "md:col-span-2 md:row-span-2" : "",
            )}
          >
            {/* Imagem de placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-ink-faint/12 to-accent-deep/12 flex items-center justify-center">
              <p className="text-center text-sm text-ink/40">Foto do espaço</p>
            </div>

            {/* Overlay + Conteúdo */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            <div className="relative z-10 flex h-full flex-col justify-end p-6">
              <h3 className={cn(itemHeadingClass, "text-white")}>{space.title}</h3>
              <p className={cn(bodyClass, "mt-2 text-white/85")}>{space.description}</p>
            </div>

            {/* Hover effect */}
            <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />
          </article>
        ))}
      </div>
    </section>
  );
}
