import Link from "next/link";

import { footerLinks, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-[radial-gradient(circle_at_100%_0%,rgba(31,123,127,0.18),transparent_0_24%),linear-gradient(180deg,#1a2524_0%,#121919_100%)] px-5 py-8 text-white/80 md:px-8 2xl:px-[60px]">
      <div className="grid gap-8 xl:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-[1.92rem] leading-[0.96] tracking-[-0.035em] text-white/95">{siteConfig.name}</p>
          <p className="mt-2 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-white/55">{siteConfig.descriptor}</p>
          <p className="mt-3 max-w-[36ch] text-pretty text-[0.98rem] leading-7 text-white/72 md:text-[1rem] md:leading-8">
            Atendimento com hora marcada no Centro, em Canaã dos Carajás. Um cuidado corporal pensado para quem busca mais critério, clareza e continuidade.
          </p>
        </div>

        <div>
          <p className="inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.17em] text-white/75 before:h-px before:w-8 before:bg-[linear-gradient(90deg,rgba(255,255,255,0.82),rgba(255,255,255,0.2))] before:content-['']">
            Mapa do site
          </p>
          <ul className="mt-4 grid gap-2 text-[0.98rem]">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[#bfecef] transition duration-200 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.17em] text-white/75 before:h-px before:w-8 before:bg-[linear-gradient(90deg,rgba(255,255,255,0.82),rgba(255,255,255,0.2))] before:content-['']">
            Contato atual
          </p>
          <ul className="mt-4 grid gap-4 text-[0.98rem] leading-7 md:leading-8">
            <li>
              <span className="block text-[0.7rem] font-medium uppercase tracking-[0.14em] text-white/45">Instagram</span>
              <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="text-[#bfecef] transition duration-200 hover:text-white">
                @luanacarladermoclinic
              </a>
            </li>
            <li>
              <span className="block text-[0.7rem] font-medium uppercase tracking-[0.14em] text-white/45">Local</span>
              <strong className="font-semibold text-white/88">Centro • Canaã dos Carajás • PA</strong>
            </li>
            <li>
              <span className="block text-[0.7rem] font-medium uppercase tracking-[0.14em] text-white/45">Agenda</span>
              <strong className="font-semibold text-white/88">Atendimento com hora marcada</strong>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 border-t border-white/8 pt-5 text-[0.92rem] text-white/55 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.</p>
        <p className="flex flex-wrap gap-2">
          <Link href="/cursos" className="text-white/75 transition duration-200 hover:text-white">Frente separada de cursos</Link>
          <span>•</span>
          <Link href="/faq" className="text-white/75 transition duration-200 hover:text-white">Perguntas frequentes</Link>
        </p>
      </div>
    </footer>
  );
}
