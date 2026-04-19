"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleProvider";

export function Skills() {
  const { t } = useLocale();

  return (
    <section id="skills" className="relative scroll-mt-[7.5rem] py-16 sm:scroll-mt-28 sm:py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-cyan-400">{t.skills.label}</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
            {t.skills.title}
          </h2>
          <p className="mt-4 text-base text-zinc-400 sm:text-lg">{t.skills.intro}</p>
        </div>

        <div className="mt-10 grid gap-8 sm:mt-14 md:grid-cols-2">
          {t.skillGroups.map((g, gi) => (
            <motion.div
              key={g.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: gi * 0.06, duration: 0.45 }}
              className="glass rounded-2xl p-6 sm:rounded-3xl sm:p-8"
            >
              <h3 className="text-lg font-semibold text-white">{g.name}</h3>
              <div className="mt-6 space-y-5">
                {g.items.map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between gap-2 text-sm">
                      <span className="min-w-0 text-zinc-200">{item.name}</span>
                      <span className="shrink-0 text-zinc-500">{item.level}%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/[0.06]">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
