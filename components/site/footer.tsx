import Link from "next/link";

import { footerLinks, siteConfig } from "@/lib/site";
import {
  footerEyebrowClass,
  footerButtonClass,
  footerGhostButtonClass,
  footerLinkClass,
} from "@/lib/styles";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/6 bg-[radial-gradient(circle_at_100%_0%,rgba(31,123,127,0.2),transparent_0_24%),linear-gradient(180deg,#192322_0%,#111817_100%)] px-5 pb-8 pt-10 text-white/82 md:px-8 md:pt-12 2xl:px-[60px]">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)]" />
      <div aria-hidden className="pointer-events-none absolute right-[-6%] top-[-10%] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(189,165,139,0.14)_0%,rgba(189,165,139,0.06)_34%,transparent_72%)] blur-3xl md:h-72 md:w-72" />

      <div className="grid gap-6 xl:grid-cols-[1.12fr_0.94fr_0.94fr]">
        <div className="relative xl:pr-8">
          <p className="font-display text-[1.9rem] leading-[1] tracking-[-0.032em] text-white/96">{siteConfig.name}</p>
          <p className="mt-2 text-[0.75rem] font-medium uppercase tracking-[0.1em] text-white/72">{siteConfig.descriptor}</p>
          <p className="mt-4 max-w-[36ch] text-pretty text-[0.98rem] leading-[1.78] text-white/82 md:text-[1rem]">
            Atendimento com hora marcada no Centro, em Canaã dos Carajás. Um cuidado corporal pensado para quem busca mais clareza, acompanhamento e um ritmo de atendimento mais sereno.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/agendamento" className={footerButtonClass}>
              Ver primeiro contato
              <span aria-hidden>→</span>
            </Link>
            <Link href="/contato" className={footerGhostButtonClass}>
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

      <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-[0.88rem] text-white/62 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.</p>
        <div className="flex flex-wrap items-center gap-3 text-white/72">
          <Link href="/cursos" className="transition duration-200 hover:text-white">Frente separada de cursos</Link>
          <span className="text-white/25">•</span>
          <Link href="/faq" className="transition duration-200 hover:text-white">Perguntas frequentes</Link>
        </div>
      </div>
    </footer>
  );
}
