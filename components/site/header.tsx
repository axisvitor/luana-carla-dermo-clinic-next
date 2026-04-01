"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { cn } from "@/lib/cn";
import { navItems, siteConfig } from "@/lib/site";

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
    <header className="sticky top-0 z-30 border-b border-black/6 bg-[linear-gradient(180deg,rgba(253,251,247,0.94),rgba(253,251,247,0.84))] px-4 py-4 shadow-[0_10px_28px_rgba(24,35,34,0.035)] backdrop-blur sm:px-5 sm:py-5 md:px-8 xl:grid xl:grid-cols-[auto_1fr_auto] xl:items-center xl:gap-6 2xl:px-[60px]">
      <div className="flex items-center justify-between gap-3 sm:gap-4 xl:contents">
        <Link href="/" aria-label={`${siteConfig.name}, voltar para a página inicial`} className="min-w-0">
          <span className="block font-display text-[clamp(1.5rem,2.2vw,2.15rem)] leading-[1] tracking-[-0.035em] text-ink">
            {siteConfig.name}
          </span>
          <span className="mt-0.5 block text-[0.68rem] font-medium uppercase tracking-[0.1em] text-ink-faint sm:mt-1 sm:text-[0.75rem] sm:tracking-[0.12em]">
            {siteConfig.descriptor}
          </span>
        </Link>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="inline-flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-[10px] border border-black/10 bg-white/92 shadow-[0_10px_24px_rgba(24,35,34,0.04)] transition duration-200 sm:h-12 sm:w-12 sm:gap-[5px] sm:rounded-[12px] xl:hidden"
        >
          <span className={cn("h-px w-3.5 rounded-full bg-ink transition duration-200 sm:w-4", open && "translate-y-[5px] rotate-45 sm:translate-y-[6px]")} />
          <span className={cn("h-px w-3.5 rounded-full bg-ink transition duration-200 sm:w-4", open && "opacity-0")} />
          <span className={cn("h-px w-3.5 rounded-full bg-ink transition duration-200 sm:w-4", open && "-translate-y-[5px] -rotate-45 sm:-translate-y-[6px]")} />
          <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
        </button>
      </div>

      <nav className="hidden flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[0.95rem] font-medium tracking-[-0.005em] text-ink/78 xl:flex" aria-label="Principal">
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

      <Link
        href="/contato"
        className="hidden items-center gap-2 rounded-full border border-black/8 px-5 py-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-ink/72 transition duration-300 hover:border-black/14 hover:text-ink xl:inline-flex"
      >
        Agendar consulta
        <span aria-hidden className="text-accent-deep">→</span>
      </Link>

      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden transition-[max-height,opacity,padding] duration-300 xl:hidden",
          open ? "max-h-[32rem] border-t border-black/5 pt-3 opacity-100 sm:pt-4" : "max-h-0 opacity-0",
        )}
      >
        <nav className="grid gap-2 pb-3 text-[0.95rem] font-medium text-ink/82 sm:gap-3 sm:pb-4 sm:text-[1rem]" aria-label="Principal no celular">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
              className={cn(
                "border-b border-black/5 py-2.5 sm:pb-3",
                isActive(item.href) && "text-ink",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contato"
            onClick={() => setOpen(false)}
            className="mt-1.5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-black/8 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-ink/72 transition duration-300 hover:border-black/14 hover:text-ink sm:mt-2 sm:py-3 sm:text-[0.75rem]"
          >
            Agendar consulta
            <span aria-hidden className="text-accent-deep">→</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
