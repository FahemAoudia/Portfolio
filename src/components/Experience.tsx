"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleProvider";

export function Experience() {
  const { t } = useLocale();
  const jobs = t.experience.items;

  return (
    <section id="experience" className="relative scroll-mt-[7.5rem] py-16 sm:scroll-mt-28 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-cyan-400">{t.experience.label}</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
            {t.experience.title}
          </h2>
          <p className="mt-4 text-base text-zinc-400 sm:text-lg">{t.experience.intro}</p>
        </div>

        <div className="relative mt-12 space-y-8 pl-7 sm:mt-16 sm:space-y-10 sm:pl-10 md:pl-12">
          <div className="absolute bottom-4 left-[9px] top-4 w-px bg-gradient-to-b from-cyan-500/50 via-white/15 to-violet-500/40 sm:left-[11px] md:left-[15px]" />
          {jobs.map((job, i) => (
            <motion.div
              key={`${job.role}-${job.period}`}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
              className="relative"
            >
              <div className="absolute -left-7 top-2 flex h-6 w-6 items-center justify-center rounded-full border border-cyan-400/40 bg-[#030712] shadow-[0_0_20px_rgba(34,211,238,0.35)] sm:-left-9 sm:h-7 sm:w-7 md:-left-10">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
              </div>
              <div className="glass rounded-2xl p-5 sm:rounded-3xl sm:p-7">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-white sm:text-lg">{job.role}</h3>
                    <p className="text-sm text-zinc-400">{job.org}</p>
                  </div>
                  <div className="shrink-0 text-sm text-zinc-500 sm:text-right">
                    <p>{job.period}</p>
                    <p>{job.location}</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-2 text-sm leading-relaxed text-zinc-300">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400/90" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
