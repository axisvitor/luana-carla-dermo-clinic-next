import Link from "next/link";

import { cn } from "@/lib/cn";
import { footerLinks, siteConfig } from "@/lib/site";
import {
  footerEyebrowClass,
  footerButtonClass,
  footerGhostButtonClass,
  footerLinkClass,
} from "@/lib/styles";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/6 bg-[radial-gradient(circle_at_100%_0%,rgba(31,123,127,0.2),transparent_0_24%),linear-gradient(180deg,#192322_0%,#111817_100%)] px-4 pb-6 pt-8 text-white/82 sm:px-5 sm:pb-8 sm:pt-10 md:px-8 md:pt-12 2xl:px-[60px]">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)]" />
      <div aria-hidden className="pointer-events-none absolute right-[-6%] top-[-10%] h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(189,165,139,0.14)_0%,rgba(189,165,139,0.06)_34%,transparent_72%)] blur-3xl sm:h-56 sm:w-56 md:h-72 md:w-72" />

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-[1.12fr_0.94fr_0.94fr]">
        <div className="relative sm:col-span-2 xl:col-span-1 xl:pr-8">
          <p className="font-display text-[1.6rem] leading-[1] tracking-[-0.032em] text-white/96 sm:text-[1.9rem]">{siteConfig.name}</p>
          <p className="mt-1.5 text-[0.7rem] font-medium uppercase tracking-[0.1em] text-white/72 sm:mt-2 sm:text-[0.75rem]">{siteConfig.descriptor}</p>
          <p className="mt-3 max-w-[36ch] text-pretty text-[0.92rem] leading-[1.72] text-white/82 sm:mt-4 sm:text-[0.98rem] sm:leading-[1.78] md:text-[1rem]">
            Atendimento com hora marcada no Centro, em Canaã dos Carajás. Um cuidado corporal pensado para quem busca mais clareza, acompanhamento e um ritmo de atendimento mais sereno.
          </p>
          <div className="mt-5 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:flex-wrap sm:gap-3">
            <Link href="/agendamento" className={cn(footerButtonClass, "w-full justify-center sm:w-auto")}>
              Ver primeiro contato
              <span aria-hidden>→</span>
            </Link>
            <Link href="/contato" className={cn(footerGhostButtonClass, "w-full justify-center sm:w-auto")}>
              Ver contato
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <div className="relative xl:border-l xl:border-white/8 xl:pl-8">
          <p className={footerEyebrowClass}>Mapa do site</p>
          <ul className="mt-5 grid gap-2.5 text-[0.98rem] leading-[1.7]">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={footerLinkClass}>
                  <span>{item.label}</span>
                  <span aria-hidden className="opacity-0 transition duration-200 group-hover:translate-x-0.5 group-hover:opacity-100">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative xl:border-l xl:border-white/8 xl:pl-8">
          <p className={footerEyebrowClass}>Contato atual</p>
          <ul className="mt-5 grid gap-4 text-[0.98rem] leading-[1.78]">
            <li className="border-b border-white/8 pb-4">
              <span className="block text-[0.75rem] font-medium uppercase tracking-[0.1em] text-white/72">Instagram</span>
              <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className={footerLinkClass}>
                <span>@luanacarladermoclinic</span>
                <span aria-hidden className="opacity-0 transition duration-200 group-hover:translate-x-0.5 group-hover:opacity-100">
                  ↗
                </span>
              </a>
            </li>
            <li className="border-b border-white/8 pb-4">
              <span className="block text-[0.75rem] font-medium uppercase tracking-[0.1em] text-white/72">Local</span>
              <strong className="font-semibold text-white/90">Centro • Canaã dos Carajás • PA</strong>
            </li>
            <li>
              <span className="block text-[0.75rem] font-medium uppercase tracking-[0.1em] text-white/72">Agenda</span>
              <strong className="font-semibold text-white/90">Atendimento com hora marcada</strong>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-4 text-[0.8rem] text-white/62 sm:mt-10 sm:gap-3 sm:pt-5 sm:text-[0.88rem] md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.</p>
        <div className="flex flex-wrap items-center gap-2 text-white/72 sm:gap-3">
          <Link href="/cursos" className="transition duration-200 hover:text-white">Frente separada de cursos</Link>
          <span className="text-white/25">•</span>
          <Link href="/faq" className="transition duration-200 hover:text-white">Perguntas frequentes</Link>
        </div>
      </div>
    </footer>
  );
}
