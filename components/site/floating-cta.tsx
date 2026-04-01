"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function FloatingCta() {
  const pathname = usePathname();

  if (pathname !== "/") return null;

  return (
    <div className="fixed inset-x-3 bottom-[calc(env(safe-area-inset-bottom)+0.75rem)] z-40 md:hidden">
      <Link
        href="/agendamento"
        className="inline-flex w-full touch-manipulation items-center justify-center gap-2 rounded-[14px] border border-white/10 bg-[linear-gradient(180deg,var(--accent-deep),#0c4d50)] px-5 py-4 text-[0.76rem] font-bold uppercase tracking-[0.15em] text-white shadow-[0_16px_36px_rgba(15,95,99,0.18)] backdrop-blur"
      >
        Falar no WhatsApp
        <span aria-hidden>↗</span>
      </Link>
    </div>
  );
}
