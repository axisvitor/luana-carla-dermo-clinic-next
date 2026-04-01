"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function FloatingCta() {
  const pathname = usePathname();

  if (pathname !== "/") return null;

  return (
    <div className="fixed inset-x-4 bottom-[calc(env(safe-area-inset-bottom)+1rem)] z-40 md:hidden">
      <Link
        href="/agendamento"
        className="inline-flex w-full touch-manipulation items-center justify-center gap-2 rounded-full border border-white/8 bg-[linear-gradient(180deg,var(--accent-deep),#0a4a4d)] px-5 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-white shadow-[0_12px_28px_rgba(15,95,99,0.14)] backdrop-blur-sm transition duration-300"
      >
        Agendar consulta
        <span aria-hidden className="text-white/70">→</span>
      </Link>
    </div>
  );
}
