"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleProvider";

export function About() {
  const { t } = useLocale();

  return (
    <section id="about" className="relative scroll-mt-[7.5rem] py-16 sm:scroll-mt-28 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-medium text-cyan-400">{t.about.label}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
              {t.about.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-zinc-400 sm:text-lg">{t.about.p1}</p>
            <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">{t.about.p2}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="glass relative overflow-hidden rounded-2xl p-6 sm:rounded-3xl sm:p-8"
          >
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-violet-500/15 blur-3xl" />
            <ul className="relative space-y-5 text-sm text-zinc-300">
              {t.about.bullets.map((b) => (
                <li key={b.strong} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.7)]" />
                  <span>
                    <strong className="text-white">{b.strong}</strong> {b.text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
