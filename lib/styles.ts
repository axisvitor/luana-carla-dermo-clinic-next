/**
 * Centralized style constants for consistent styling across components
 * This file eliminates duplication and ensures consistency
 */

// Layout
export const sectionClass =
  "grid grid-cols-1 gap-6 px-5 py-12 md:px-8 md:py-16 xl:grid-cols-12 xl:gap-8 2xl:px-[60px]";

// Buttons
export const primaryButtonClass =
  "inline-flex w-full items-center justify-center gap-2 rounded-[14px] border border-white/12 bg-[linear-gradient(180deg,var(--accent-deep),#0c4d50)] px-6 py-4 text-center text-[0.8125rem] font-bold uppercase tracking-[0.15em] text-white shadow-[0_18px_40px_rgba(15,95,99,0.2)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_46px_rgba(15,95,99,0.24)] active:translate-y-0 sm:w-auto";

export const secondaryButtonClass =
  "inline-flex w-full items-center justify-center gap-2 rounded-[14px] border border-black/10 bg-white/58 px-6 py-4 text-center text-[0.8125rem] font-bold uppercase tracking-[0.15em] text-ink/76 transition duration-200 hover:-translate-y-0.5 hover:border-black/16 hover:bg-white/82 hover:text-ink active:translate-y-0 sm:w-auto";

export const primaryCtaClass =
  "inline-flex items-center justify-center gap-2 rounded-[14px] border border-white/12 bg-[linear-gradient(180deg,var(--accent-deep),#0c4d50)] px-5 py-[1.02rem] text-[0.8125rem] font-bold uppercase tracking-[0.15em] text-white shadow-[0_18px_40px_rgba(15,95,99,0.2)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_48px_rgba(15,95,99,0.24)] active:translate-y-0";

// Typography
export const sectionHeadingClass =
  "font-display text-balance text-[clamp(1.76rem,4vw,2.85rem)] leading-[1.02] tracking-[-0.038em] text-ink";

export const mediumHeadingClass =
  "font-sans text-balance text-[clamp(1.18rem,2.1vw,1.62rem)] font-semibold leading-[1.32] tracking-[-0.022em] text-ink";

export const itemHeadingClass =
  "text-pretty text-[1rem] font-semibold leading-[1.45] tracking-[-0.018em] text-ink md:text-[1.07rem]";

export const leadClass =
  "text-pretty text-[0.98rem] leading-[1.82] md:text-[1.02rem] md:leading-[1.88]";

export const bodyClass =
  "text-pretty text-[0.96rem] leading-[1.74] md:text-[0.99rem] md:leading-[1.8]";

// Eyebrows - Updated font sizes for accessibility (min 12px)
export const eyebrowClass =
  "inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.17em] text-accent-deep before:h-px before:w-8 before:bg-[linear-gradient(90deg,var(--champagne),rgba(15,95,99,0.35))] before:content-['']";

export const eyebrowInverseClass =
  "inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.17em] text-white/82 before:h-px before:w-8 before:bg-[linear-gradient(90deg,rgba(255,255,255,0.82),rgba(255,255,255,0.18))] before:content-['']";

// Labels - Updated for accessibility (min 12px)
export const smallLabelClass =
  "text-xs font-bold uppercase tracking-[0.14em]";

// Cards and Panels
export const cardClass =
  "rounded-[28px] border border-black/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(248,244,238,0.82))] shadow-[0_22px_54px_rgba(16,24,24,0.065)]";

export const softPanelClass =
  "rounded-[24px] border border-black/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(248,244,238,0.78))] shadow-[0_12px_26px_rgba(16,24,24,0.032)]";

// Footer specific styles
export const footerEyebrowClass =
  "inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.17em] text-white/75 before:h-px before:w-8 before:bg-[linear-gradient(90deg,rgba(255,255,255,0.82),rgba(255,255,255,0.2))] before:content-['']";

export const footerButtonClass =
  "inline-flex items-center gap-2 rounded-[14px] border border-white/10 bg-white/7 px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-[0_14px_32px_rgba(0,0,0,0.16)] transition duration-200 hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/10";

export const footerGhostButtonClass =
  "inline-flex items-center gap-2 rounded-[14px] border border-white/8 bg-transparent px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white/82 transition duration-200 hover:border-white/14 hover:bg-white/6 hover:text-white";

export const footerLinkClass =
  "group inline-flex items-center gap-2 text-white/86 transition duration-200 hover:text-white";
