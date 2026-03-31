"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { cn } from "@/lib/cn";
import { navItems, siteConfig } from "@/lib/site";

const primaryCtaClass =
  "inline-flex items-center justify-center gap-2 rounded-[14px] border border-white/12 bg-[linear-gradient(180deg,var(--accent-deep),#0c4d50)] px-5 py-[1.02rem] text-[0.76rem] font-bold uppercase tracking-[0.15em] text-white shadow-[0_18px_40px_rgba(15,95,99,0.2)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_48px_rgba(15,95,99,0.24)] active:translate-y-0";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-30 border-b border-black/6 bg-[linear-gradient(180deg,rgba(253,251,247,0.94),rgba(253,251,247,0.84))] px-5 py-5 shadow-[0_10px_28px_rgba(24,35,34,0.035)] backdrop-blur md:px-8 xl:grid xl:grid-cols-[auto_1fr_auto] xl:items-center xl:gap-6 2xl:px-[60px]">
      <div className="flex items-center justify-between gap-4 xl:contents">
        <Link href="/" aria-label={`${siteConfig.name}, voltar para a página inicial`} className="min-w-0">
          <span className="block font-display text-[clamp(1.68rem,2.2vw,2.18rem)] leading-[0.96] tracking-[-0.04em] text-ink">
            {siteConfig.name}
          </span>
          <span className="mt-1 block text-[0.69rem] font-medium uppercase tracking-[0.16em] text-ink-faint">
            {siteConfig.descriptor}
          </span>
        </Link>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="inline-flex h-12 w-12 flex-col items-center justify-center gap-[5px] rounded-[12px] border border-black/12 bg-white/92 shadow-[0_12px_28px_rgba(24,35,34,0.05)] transition duration-200 xl:hidden"
        >
          <span className={cn("h-px w-4 rounded-full bg-ink transition duration-200", open && "translate-y-[6px] rotate-45")} />
          <span className={cn("h-px w-4 rounded-full bg-ink transition duration-200", open && "opacity-0")} />
          <span className={cn("h-px w-4 rounded-full bg-ink transition duration-200", open && "-translate-y-[6px] -rotate-45")} />
          <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
        </button>
      </div>

      <nav className="hidden flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[0.94rem] font-medium tracking-[0.01em] text-ink/76 xl:flex" aria-label="Principal">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive(item.href) ? "page" : undefined}
            className={cn(
              "relative pb-2 transition duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-center after:scale-x-25 after:bg-[linear-gradient(90deg,transparent,var(--accent),transparent)] after:opacity-0 after:transition after:duration-200 hover:text-ink hover:after:scale-x-100 hover:after:opacity-100",
              isActive(item.href) && "text-ink after:scale-x-100 after:opacity-100",
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <Link href="/agendamento" className={cn(primaryCtaClass, "hidden xl:inline-flex") }>
        Falar no WhatsApp
        <span aria-hidden>↗</span>
      </Link>

      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden transition-[max-height,opacity,padding] duration-300 xl:hidden",
          open ? "max-h-[32rem] border-t border-black/5 pt-4 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="grid gap-3 pb-4 text-[0.98rem] font-medium text-ink/82" aria-label="Principal no celular">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "border-b border-black/5 pb-3",
                isActive(item.href) && "text-ink",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/agendamento" className={cn(primaryCtaClass, "mt-2 justify-center text-center")}>
            Falar no WhatsApp
            <span aria-hidden>↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
