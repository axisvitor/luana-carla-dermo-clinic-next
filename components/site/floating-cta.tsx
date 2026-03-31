"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function FloatingCta() {
  const pathname = usePathname();

  if (pathname === "/agendamento") return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-40 md:hidden">
      <Link
        href="/agendamento"
        className="inline-flex w-full items-center justify-center gap-2 rounded-[14px] border border-white/10 bg-[linear-gradient(180deg,var(--accent-deep),#0c4d50)] px-5 py-4 text-[0.78rem] font-extrabold uppercase tracking-[0.16em] text-white shadow-[0_16px_36px_rgba(15,95,99,0.18)] backdrop-blur"
      >
        Falar no WhatsApp
        <span aria-hidden>↗</span>
      </Link>
    </div>
  );
}
