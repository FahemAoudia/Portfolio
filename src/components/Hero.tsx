"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { useLocale } from "@/contexts/LocaleProvider";

const HeroScene = dynamic(() => import("./HeroScene").then((m) => m.HeroScene), {
  ssr: false,
  loading: () => (
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent opacity-40" />
  ),
});

export function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="noise pointer-events-none absolute inset-0 opacity-40" />
      <div className="absolute inset-0 bg-grid-fade bg-[length:48px_48px] opacity-[0.35]" />
      <HeroScene />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030712] to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col justify-center px-4 pb-28 pt-[calc(8.5rem+env(safe-area-inset-top))] sm:px-5 md:min-h-[100svh] md:pb-32 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-4 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.15em] text-zinc-300 sm:text-xs sm:tracking-[0.2em]">
            <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
            {t.hero.badge}
          </p>
          <h1 className="text-[2rem] font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-gradient">{site.name}</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-snug text-zinc-300 sm:text-xl md:text-2xl">
            {t.hero.jobTitle}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            {t.hero.tagline}
          </p>
          <div className="mt-10 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap">
            <a
              href="#projects"
              className="group relative inline-flex min-h-[44px] items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:brightness-110 sm:px-7"
            >
              <span className="relative z-10">{t.hero.viewProjects}</span>
              <span className="absolute inset-0 translate-y-full bg-white/10 transition group-hover:translate-y-0" />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-center text-sm font-semibold text-white backdrop-blur transition hover:border-cyan-500/40 hover:bg-white/[0.07] sm:px-7"
            >
              {t.hero.contact}
            </a>
          </div>
          <dl className="mt-14 grid max-w-lg grid-cols-1 gap-6 border-t border-white/10 pt-8 text-sm min-[480px]:grid-cols-3 min-[480px]:gap-4 sm:gap-6">
            <div>
              <dt className="text-zinc-500">{t.hero.statMri}</dt>
              <dd className="mt-1 font-semibold text-white">99.97%</dd>
            </div>
            <div>
              <dt className="text-zinc-500">{t.hero.statStack}</dt>
              <dd className="mt-1 font-semibold text-white">{t.hero.statStackValue}</dd>
            </div>
            <div>
              <dt className="text-zinc-500">{t.hero.statLang}</dt>
              <dd className="mt-1 font-semibold text-white">{t.hero.statLangValue}</dd>
            </div>
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
