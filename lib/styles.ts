/**
 * Centralized style constants for consistent styling across components
 * This file eliminates duplication and ensures consistency
 */

// Layout
export const sectionClass =
  "grid grid-cols-1 gap-6 px-5 py-12 md:px-8 md:py-16 xl:grid-cols-12 xl:gap-8 2xl:px-[60px]";

// Buttons
export const primaryButtonClass =
  "inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-white/10 bg-[linear-gradient(180deg,var(--accent-deep),#0a4a4d)] px-7 py-4 text-center text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_16px_36px_rgba(15,95,99,0.16)] transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_20px_44px_rgba(15,95,99,0.2)] active:translate-y-0 sm:w-auto";

export const secondaryButtonClass =
  "inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-black/8 bg-white/50 px-7 py-4 text-center text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-ink/70 backdrop-blur-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:border-black/12 hover:bg-white/70 hover:text-ink active:translate-y-0 sm:w-auto";

export const primaryCtaClass =
  "inline-flex items-center justify-center gap-2 rounded-full border border-white/8 bg-[linear-gradient(180deg,var(--accent-deep),#0a4a4d)] px-6 py-[1rem] text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-white shadow-[0_14px_34px_rgba(15,95,99,0.15)] transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(15,95,99,0.18)] active:translate-y-0";

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
  "inline-flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-accent-deep before:h-px before:w-6 before:bg-[linear-gradient(90deg,var(--champagne),rgba(15,95,99,0.3))] before:content-['']";

export const eyebrowInverseClass =
  "inline-flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/75 before:h-px before:w-6 before:bg-[linear-gradient(90deg,rgba(255,255,255,0.7),rgba(255,255,255,0.15))] before:content-['']";

// Labels - Updated for accessibility (min 12px)
export const smallLabelClass =
  "text-xs font-bold uppercase tracking-[0.14em]";

// Cards and Panels
export const cardClass =
  "rounded-[32px] border border-black/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(250,247,242,0.85))] shadow-[0_20px_50px_rgba(16,24,24,0.05)]";

export const softPanelClass =
  "rounded-[26px] border border-black/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(250,247,242,0.8))] shadow-[0_10px_24px_rgba(16,24,24,0.025)]";

// Footer specific styles
export const footerEyebrowClass =
  "inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.17em] text-white/75 before:h-px before:w-8 before:bg-[linear-gradient(90deg,rgba(255,255,255,0.82),rgba(255,255,255,0.2))] before:content-['']";

export const footerButtonClass =
  "inline-flex items-center gap-2 rounded-[14px] border border-white/10 bg-white/7 px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-[0_14px_32px_rgba(0,0,0,0.16)] transition duration-200 hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/10";

export const footerGhostButtonClass =
  "inline-flex items-center gap-2 rounded-[14px] border border-white/8 bg-transparent px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white/82 transition duration-200 hover:border-white/14 hover:bg-white/6 hover:text-white";

export const footerLinkClass =
  "group inline-flex items-center gap-2 text-white/86 transition duration-200 hover:text-white";
