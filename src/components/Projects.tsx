"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleProvider";

export function Projects() {
  const { t } = useLocale();
  const { items, ...head } = t.projects;

  return (
    <section id="projects" className="relative scroll-mt-[7.5rem] py-16 sm:scroll-mt-28 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-cyan-400">{head.label}</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
            {head.title}
          </h2>
          <p className="mt-4 text-base text-zinc-400 sm:text-lg">{head.intro}</p>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative flex min-h-0 flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] shadow-glass sm:rounded-3xl"
            >
              <div
                className={`h-28 shrink-0 bg-gradient-to-br sm:h-36 ${p.accent} opacity-90 transition duration-500 group-hover:opacity-100`}
              />
              <div className="relative flex min-h-0 flex-1 flex-col p-5 sm:p-7">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-white sm:text-xl">{p.title}</h3>
                    <p className="mt-1 text-sm text-cyan-200/90">{p.subtitle}</p>
                  </div>
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-xs font-medium text-zinc-200 transition hover:border-cyan-500/40 hover:text-white sm:px-3"
                  >
                    {head.repo}
                  </a>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-400">{p.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-zinc-300">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400/80" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-zinc-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {p.live && (
                  <a
                    href={p.live}
                    className="mt-6 inline-flex text-sm font-medium text-cyan-300 hover:text-cyan-200"
                  >
                    {head.live} →
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
