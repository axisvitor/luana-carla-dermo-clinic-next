/**
 * Centralized style constants for consistent styling across components
 * This file eliminates duplication and ensures consistency
 */

// Layout
export const sectionClass =
  "grid grid-cols-1 gap-6 px-5 py-12 md:px-8 md:py-16 xl:grid-cols-12 xl:gap-8 2xl:px-[60px]";

// Buttons — Unified sizing (min 12px / 0.75rem)
export const primaryButtonClass =
  "inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-white/10 bg-[linear-gradient(180deg,var(--accent-deep),#0a4a4d)] px-7 py-4 text-center text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-white shadow-[0_16px_36px_rgba(15,95,99,0.14)] transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_20px_44px_rgba(15,95,99,0.18)] active:translate-y-0 sm:w-auto";

export const secondaryButtonClass =
  "inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-black/8 bg-white/50 px-7 py-4 text-center text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-ink/70 backdrop-blur-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:border-black/12 hover:bg-white/70 hover:text-ink active:translate-y-0 sm:w-auto";

export const primaryCtaClass =
  "inline-flex items-center justify-center gap-2 rounded-full border border-white/8 bg-[linear-gradient(180deg,var(--accent-deep),#0a4a4d)] px-6 py-4 text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-white shadow-[0_14px_34px_rgba(15,95,99,0.14)] transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(15,95,99,0.18)] active:translate-y-0";

// Typography — Unified scale for consistency
// Headings use Bodoni Moda (font-display), body uses Instrument Sans (font-sans)

export const sectionHeadingClass =
  "font-display text-balance text-[clamp(1.85rem,4.2vw,2.9rem)] leading-[1.06] tracking-[-0.035em] text-ink";

export const mediumHeadingClass =
  "font-display text-balance text-[clamp(1.25rem,2.2vw,1.7rem)] leading-[1.12] tracking-[-0.028em] text-ink";

export const itemHeadingClass =
  "text-pretty text-[1rem] font-semibold leading-[1.48] tracking-[-0.016em] text-ink md:text-[1.05rem]";

export const leadClass =
  "text-pretty text-[1rem] leading-[1.8] md:text-[1.05rem] md:leading-[1.85]";

export const bodyClass =
  "text-pretty text-[0.95rem] leading-[1.72] md:text-[0.98rem] md:leading-[1.78]";

// Eyebrows — Minimum 12px (0.75rem) for accessibility
export const eyebrowClass =
  "inline-flex items-center gap-3 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-accent-deep before:h-px before:w-6 before:bg-[linear-gradient(90deg,var(--champagne),rgba(15,95,99,0.28))] before:content-['']";

export const eyebrowInverseClass =
  "inline-flex items-center gap-3 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-white/80 before:h-px before:w-6 before:bg-[linear-gradient(90deg,rgba(255,255,255,0.65),rgba(255,255,255,0.12))] before:content-['']";

// Labels — Minimum 12px for accessibility
export const smallLabelClass =
  "text-xs font-semibold uppercase tracking-[0.12em]";

// Cards and Panels
export const cardClass =
  "rounded-[32px] border border-black/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(250,247,242,0.85))] shadow-[0_20px_50px_rgba(16,24,24,0.05)]";

export const softPanelClass =
  "rounded-[26px] border border-black/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(250,247,242,0.8))] shadow-[0_10px_24px_rgba(16,24,24,0.025)]";

// Footer specific styles — Unified with main typography scale
export const footerEyebrowClass =
  "inline-flex items-center gap-3 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-white/80 before:h-px before:w-6 before:bg-[linear-gradient(90deg,rgba(255,255,255,0.65),rgba(255,255,255,0.12))] before:content-['']";

export const footerButtonClass =
  "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-5 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-white shadow-[0_12px_28px_rgba(0,0,0,0.14)] transition duration-300 hover:-translate-y-0.5 hover:border-white/16 hover:bg-white/12";

export const footerGhostButtonClass =
  "inline-flex items-center gap-2 rounded-full border border-white/8 bg-transparent px-5 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-white/85 transition duration-300 hover:border-white/14 hover:bg-white/6 hover:text-white";

export const footerLinkClass =
  "group inline-flex items-center gap-2 text-white/88 transition duration-300 hover:text-white";
