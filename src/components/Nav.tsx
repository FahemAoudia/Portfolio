"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { useLocale } from "@/contexts/LocaleProvider";

export function Nav() {
  const { locale, setLocale, t } = useLocale();
  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#experience", label: t.nav.experience },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 pt-[max(0.5rem,env(safe-area-inset-top))]"
    >
      <div className="border-b border-white/[0.04] bg-[#030712]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-3 py-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-4 sm:gap-y-2 sm:px-5 sm:py-3.5">
          <div className="flex min-w-0 items-center justify-between gap-2 sm:contents">
            <Link href="/" className="group flex min-w-0 shrink items-center gap-2">
              <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/30 to-violet-500/20 ring-1 ring-white/10">
                <span className="text-sm font-bold tracking-tight text-white">FA</span>
                <span className="absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-400/0 via-white/20 to-violet-400/0 opacity-0 blur transition group-hover:opacity-100" />
              </span>
              <span className="truncate text-sm font-semibold text-white sm:inline">{site.name}</span>
            </Link>

            <div className="flex shrink-0 items-center gap-1.5 sm:order-3 sm:ml-auto">
              <a
                href={site.cvPdf}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1.5 text-xs font-medium text-zinc-200 transition hover:border-cyan-500/35 hover:bg-white/[0.08] sm:px-3 sm:text-sm"
              >
                {t.nav.cv}
              </a>
              <button
                type="button"
                onClick={() => setLocale(locale === "fr" ? "en" : "fr")}
                className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1.5 text-xs font-semibold text-cyan-100 transition hover:bg-cyan-500/20 sm:px-3 sm:text-sm"
                aria-label={locale === "fr" ? t.nav.switchToEn : t.nav.switchToFr}
              >
                {locale === "fr" ? t.nav.switchToEn : t.nav.switchToFr}
              </button>
            </div>
          </div>

          <nav
            aria-label="Primary"
            className="nav-x-scroll flex min-w-0 flex-1 items-center gap-0.5 overflow-x-auto pb-0.5 sm:order-2 sm:justify-center sm:pb-0 md:flex-[1.1]"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="shrink-0 rounded-full px-2 py-1.5 text-xs text-zinc-300 transition hover:bg-white/5 hover:text-white sm:px-2.5 sm:text-sm md:px-3"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden shrink-0 rounded-full bg-white/[0.06] px-4 py-2 text-center text-sm font-medium text-white ring-1 ring-white/10 transition hover:bg-white/10 sm:order-4 sm:inline-flex"
          >
            {t.nav.cta}
          </a>
        </div>

        <div className="border-t border-white/[0.04] px-3 py-2 sm:hidden">
          <a
            href="#contact"
            className="flex w-full items-center justify-center rounded-full bg-white/[0.06] px-4 py-2.5 text-sm font-medium text-white ring-1 ring-white/10 transition hover:bg-white/10"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </motion.header>
  );
}
